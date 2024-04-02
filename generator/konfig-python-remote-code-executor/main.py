import json
import time
from typing import Literal, Optional, Union
from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from pydantic import BaseModel, StrictBool, StrictStr, StrictInt, StrictFloat
import uuid
from IPython.terminal.interactiveshell import TerminalInteractiveShell
from fastapi_restful.tasks import repeat_every
from io import StringIO
import sys
from anyio.streams.file import FileWriteStream


app = FastAPI(servers=[{"url": "http://127.0.0.1:8000"}])
sessions: dict[str, tuple[TerminalInteractiveShell, float]] = {}


class SessionCreateResponse(BaseModel):
    session_id: str


class BoxedFloat(BaseModel):
    """
    This class preserves all information for float that could be lost in the client (Browser) or in transit (NodeJS)
    """

    type: Literal["float"]
    data: str
    precision: int


class SessionExecuteRequest(BaseModel):
    session_id: str
    code: str
    environment_variables: Optional[dict[str, str]] = None
    local_variables: Optional[
        dict[str, Union[StrictStr, StrictBool, StrictInt, StrictFloat, BoxedFloat]]
    ] = None


class SessionCloseRequest(BaseModel):
    session_id: str


class SessionInfo(BaseModel):
    session_id: str


class SessionListResponse(BaseModel):
    sessions: list[SessionInfo]


class SessionCloseResponse(BaseModel):
    message: str


class ExecutionResult(BaseModel):
    result: Literal["Success", "Error"]
    output: str
    error: str


class SessionPingRequest(BaseModel):
    session_ids: list[str]


class SessionPingResponse(BaseModel):
    session_infos: list[SessionInfo]


class SessionNotFoundError(BaseModel):
    session_id: str
    error: str


# magic...
# https://stackoverflow.com/a/56434301
import nest_asyncio

nest_asyncio.apply()


@app.on_event("startup")
async def startup():
    async with await FileWriteStream.from_path("openapi.json") as stream:
        await stream.send(bytes(json.dumps(app.openapi(), indent=4).encode("utf-8")))


@app.post("/sessions/create", response_model=SessionCreateResponse, tags=["session"])
async def create_session():
    session_id = str(uuid.uuid4())
    shell = TerminalInteractiveShell()
    shell.run_line_magic("colors", "NoColor")
    sessions[session_id] = (shell, time.time())  # Store session with creation time
    return SessionCreateResponse(session_id=session_id)


@app.get("/sessions/list", response_model=SessionListResponse, tags=["session"])
async def list_sessions():
    session_list = [SessionInfo(session_id=session_id) for session_id in sessions]
    return SessionListResponse(sessions=session_list)


@app.post(
    "/sessions/ping",
    response_model=SessionPingResponse,
    responses={404: {"model": SessionNotFoundError}},
    tags=["session"],
)
async def ping_session(request: SessionPingRequest):
    pinged = []
    for session_id in request.session_ids:
        if session_id in sessions:
            shell, _ = sessions[session_id]
            sessions[session_id] = (shell, time.time())  # Update last execution time
            pinged.append(SessionInfo(session_id=session_id))
        else:
            continue
    return SessionPingResponse(session_infos=pinged)


@app.post(
    "/sessions/execute",
    response_model=ExecutionResult,
    responses={404: {"model": SessionNotFoundError}},
    tags=["session"],
)
async def execute_code(request: SessionExecuteRequest):
    session_id = request.session_id
    code = request.code

    print(request)

    if session_id in sessions:
        shell, _ = sessions[session_id]
        sessions[session_id] = (shell, time.time())  # Update last execution time

        # Set any environment variables
        if request.environment_variables is not None:
            for name, value in request.environment_variables.items():
                shell.run_line_magic("set_env", "{} {}".format(name, value))

        # Set any global variables
        if request.local_variables is not None:
            for name, value in request.local_variables.items():
                if isinstance(value, str):
                    shell.run_cell('{} = "{}"'.format(name, value))
                elif isinstance(value, bool):
                    shell.run_cell("{} = {}".format(name, value))
                elif isinstance(value, int):
                    shell.run_cell("{} = {}".format(name, value))
                elif isinstance(value, float):
                    shell.run_cell("{} = {}".format(name, value))
                elif value.type == "float":
                    shell.run_cell("{} = float({})".format(name, value.data))

        # Create a custom output stream to capture print statements
        output_stream = StringIO()
        sys.stdout = output_stream

        try:
            # Execute the code
            exec_result = shell.run_cell(code)

            # Delete any global variables
            if request.local_variables is not None:
                for name, value in request.local_variables.items():
                    shell.run_cell("del {}".format(name))

            # Restore the original stdout and capture the output
            sys.stdout = sys.__stdout__
            output = output_stream.getvalue()

            execution_result = ExecutionResult(
                result="Success",
                output=output,
                error=str(exec_result.error_in_exec)
                if exec_result.error_in_exec
                else "",
            )
            return execution_result
        except Exception as e:
            # Delete any global variables
            if request.local_variables is not None:
                for name, value in request.local_variables.items():
                    shell.run_cell("delete {}".format(name))

            # Restore the original stdout in case of error
            sys.stdout = sys.__stdout__

            execution_result = ExecutionResult(result="Error", output="", error=str(e))
            return execution_result
    else:
        return JSONResponse(
            status_code=404,
            content={"error": "Session not found", "session_id": session_id},
        )


@app.post(
    "/sessions/close",
    response_model=SessionCloseResponse,
    responses={404: {"model": SessionNotFoundError}},
    tags=["session"],
)
async def close_session(request: SessionCloseRequest):
    session_id = request.session_id

    if session_id in sessions:
        del sessions[session_id]
        return SessionCloseResponse(message="Session closed")
    else:
        raise HTTPException(
            status_code=404,
            detail=SessionNotFoundError(
                error="Session not found", session_id=session_id
            ),
        )


# https://render.com/docs/deploys#health-checks
@app.get("/healthz")
async def health_check():
    return "OK"


def close_inactive_sessions():
    current_time = time.time()
    inactive_sessions = [
        session_id
        for session_id, (_, last_execution_time) in sessions.items()
        if current_time - last_execution_time > 2 * 60
    ]  # 2 minutes of inactivity

    for session_id in inactive_sessions:
        # fully exit the IPython terminal (I think this actually helps?)
        sessions[session_id][0].confirm_exit = False
        sessions[session_id][0].run_cell("exit")

        del sessions[session_id]


# Background task to close inactive sessions every 45 seconds
@app.on_event("startup")
@repeat_every(seconds=45)
async def start_background_task():
    close_inactive_sessions()
