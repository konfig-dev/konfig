# coding: utf-8

"""
    Leap Workflows API

    The Leap Workflows API allows developers to run workflows, fetch workflow runs, and provide other utility functions related to workflow runs. Please use the X-Api-Key for authenticated requests.

    The version of the OpenAPI document: 1.0
    Contact: help@tryleap.ai
    Created by: https://tryleap.ai/
"""

from dataclasses import dataclass
import typing_extensions
import urllib3
from leap_workflows.request_before_hook import request_before_hook
import json
from urllib3._collections import HTTPHeaderDict

from leap_workflows.api_response import AsyncGeneratorResponse
from leap_workflows import api_client, exceptions
from datetime import date, datetime  # noqa: F401
import decimal  # noqa: F401
import functools  # noqa: F401
import io  # noqa: F401
import re  # noqa: F401
import typing  # noqa: F401
import typing_extensions  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from leap_workflows import schemas  # noqa: F401

from leap_workflows.model.workflow_run_entity import WorkflowRunEntity as WorkflowRunEntitySchema

from leap_workflows.type.workflow_run_entity import WorkflowRunEntity

from leap_workflows.pydantic.workflow_run_entity import WorkflowRunEntity as WorkflowRunEntityPydantic

from . import path

# Path params
WorkflowRunIdSchema = schemas.StrSchema
RequestRequiredPathParams = typing_extensions.TypedDict(
    'RequestRequiredPathParams',
    {
        'workflow_run_id': typing.Union[WorkflowRunIdSchema, str, ],
    }
)
RequestOptionalPathParams = typing_extensions.TypedDict(
    'RequestOptionalPathParams',
    {
    },
    total=False
)


class RequestPathParams(RequestRequiredPathParams, RequestOptionalPathParams):
    pass


request_path_workflow_run_id = api_client.PathParameter(
    name="workflow_run_id",
    style=api_client.ParameterStyle.SIMPLE,
    schema=WorkflowRunIdSchema,
    required=True,
)
_auth = [
    'api_key',
]
SchemaFor200ResponseBodyApplicationJson = WorkflowRunEntitySchema


@dataclass
class ApiResponseFor200(api_client.ApiResponse):
    body: WorkflowRunEntity


@dataclass
class ApiResponseFor200Async(api_client.AsyncApiResponse):
    body: WorkflowRunEntity


_response_for_200 = api_client.OpenApiResponse(
    response_cls=ApiResponseFor200,
    response_cls_async=ApiResponseFor200Async,
    content={
        'application/json': api_client.MediaType(
            schema=SchemaFor200ResponseBodyApplicationJson),
    },
)


@dataclass
class ApiResponseFor401(api_client.ApiResponse):
    body: schemas.Unset = schemas.unset


@dataclass
class ApiResponseFor401Async(api_client.AsyncApiResponse):
    body: schemas.Unset = schemas.unset


_response_for_401 = api_client.OpenApiResponse(
    response_cls=ApiResponseFor401,
    response_cls_async=ApiResponseFor401Async,
)
_status_code_to_response = {
    '200': _response_for_200,
    '401': _response_for_401,
}
_all_accept_content_types = (
    'application/json',
)


class BaseApi(api_client.Api):

    def _get_workflow_run_mapped_args(
        self,
        workflow_run_id: str,
    ) -> api_client.MappedArgs:
        args: api_client.MappedArgs = api_client.MappedArgs()
        _path_params = {}
        if workflow_run_id is not None:
            _path_params["workflow_run_id"] = workflow_run_id
        args.path = _path_params
        return args

    async def _aget_workflow_run_oapg(
        self,
            path_params: typing.Optional[dict] = {},
        skip_deserialization: bool = True,
        timeout: typing.Optional[typing.Union[int, typing.Tuple]] = None,
        accept_content_types: typing.Tuple[str] = _all_accept_content_types,
        stream: bool = False,
    ) -> typing.Union[
        ApiResponseFor200Async,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        """
        Get a workflow run
        :param skip_deserialization: If true then api_response.response will be set but
            api_response.body and api_response.headers will not be deserialized into schema
            class instances
        """
        self._verify_typed_dict_inputs_oapg(RequestPathParams, path_params)
        used_path = path.value
    
        _path_params = {}
        for parameter in (
            request_path_workflow_run_id,
        ):
            parameter_data = path_params.get(parameter.name, schemas.unset)
            if parameter_data is schemas.unset:
                continue
            serialized_data = parameter.serialize(parameter_data)
            _path_params.update(serialized_data)
    
        for k, v in _path_params.items():
            used_path = used_path.replace('{%s}' % k, v)
    
        _headers = HTTPHeaderDict()
        # TODO add cookie handling
        if accept_content_types:
            for accept_content_type in accept_content_types:
                _headers.add('Accept', accept_content_type)
        method = 'get'.upper()
        request_before_hook(
            resource_path=used_path,
            method=method,
            configuration=self.api_client.configuration,
            auth_settings=_auth,
            headers=_headers,
        )
    
        response = await self.api_client.async_call_api(
            resource_path=used_path,
            method=method,
            headers=_headers,
            auth_settings=_auth,
            timeout=timeout,
        )
    
        if stream:
            if not 200 <= response.http_response.status <= 299:
                body = (await response.http_response.content.read()).decode("utf-8")
                raise exceptions.ApiStreamingException(
                    status=response.http_response.status,
                    reason=response.http_response.reason,
                    body=body,
                )
    
            async def stream_iterator():
                """
                iterates over response.http_response.content and closes connection once iteration has finished
                """
                async for line in response.http_response.content:
                    if line == b'\r\n':
                        continue
                    yield line
                response.http_response.close()
                await response.session.close()
            return AsyncGeneratorResponse(
                content=stream_iterator(),
                headers=response.http_response.headers,
                status=response.http_response.status,
                response=response.http_response
            )
    
        response_for_status = _status_code_to_response.get(str(response.http_response.status))
        if response_for_status:
            api_response = await response_for_status.deserialize_async(
                                                    response,
                                                    self.api_client.configuration,
                                                    skip_deserialization=skip_deserialization
                                                )
        else:
            # If response data is JSON then deserialize for SDK consumer convenience
            is_json = api_client.JSONDetector._content_type_is_json(response.http_response.headers.get('Content-Type', ''))
            api_response = api_client.ApiResponseWithoutDeserializationAsync(
                body=await response.http_response.json() if is_json else await response.http_response.text(),
                response=response.http_response,
                round_trip_time=response.round_trip_time,
                status=response.http_response.status,
                headers=response.http_response.headers,
            )
    
        if not 200 <= api_response.status <= 299:
            raise exceptions.ApiException(api_response=api_response)
    
        # cleanup session / response
        response.http_response.close()
        await response.session.close()
    
        return api_response


    def _get_workflow_run_oapg(
        self,
            path_params: typing.Optional[dict] = {},
        skip_deserialization: bool = True,
        timeout: typing.Optional[typing.Union[int, typing.Tuple]] = None,
        accept_content_types: typing.Tuple[str] = _all_accept_content_types,
        stream: bool = False,
    ) -> typing.Union[
        ApiResponseFor200,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        """
        Get a workflow run
        :param skip_deserialization: If true then api_response.response will be set but
            api_response.body and api_response.headers will not be deserialized into schema
            class instances
        """
        self._verify_typed_dict_inputs_oapg(RequestPathParams, path_params)
        used_path = path.value
    
        _path_params = {}
        for parameter in (
            request_path_workflow_run_id,
        ):
            parameter_data = path_params.get(parameter.name, schemas.unset)
            if parameter_data is schemas.unset:
                continue
            serialized_data = parameter.serialize(parameter_data)
            _path_params.update(serialized_data)
    
        for k, v in _path_params.items():
            used_path = used_path.replace('{%s}' % k, v)
    
        _headers = HTTPHeaderDict()
        # TODO add cookie handling
        if accept_content_types:
            for accept_content_type in accept_content_types:
                _headers.add('Accept', accept_content_type)
        method = 'get'.upper()
        request_before_hook(
            resource_path=used_path,
            method=method,
            configuration=self.api_client.configuration,
            auth_settings=_auth,
            headers=_headers,
        )
    
        response = self.api_client.call_api(
            resource_path=used_path,
            method=method,
            headers=_headers,
            auth_settings=_auth,
            timeout=timeout,
        )
    
        response_for_status = _status_code_to_response.get(str(response.http_response.status))
        if response_for_status:
            api_response = response_for_status.deserialize(
                                                    response,
                                                    self.api_client.configuration,
                                                    skip_deserialization=skip_deserialization
                                                )
        else:
            # If response data is JSON then deserialize for SDK consumer convenience
            is_json = api_client.JSONDetector._content_type_is_json(response.http_response.headers.get('Content-Type', ''))
            api_response = api_client.ApiResponseWithoutDeserialization(
                body=json.loads(response.http_response.data) if is_json else response.http_response.data,
                response=response.http_response,
                round_trip_time=response.round_trip_time,
                status=response.http_response.status,
                headers=response.http_response.headers,
            )
    
        if not 200 <= api_response.status <= 299:
            raise exceptions.ApiException(api_response=api_response)
    
        return api_response


class RawGetWorkflowRun(BaseApi):
    # this class is used by api classes that refer to endpoints with operationId fn names

    async def aget_workflow_run(
        self,
        workflow_run_id: str,
    ) -> typing.Union[
        ApiResponseFor200Async,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        args = self._get_workflow_run_mapped_args(
            workflow_run_id=workflow_run_id,
        )
        return await self._aget_workflow_run_oapg(
            path_params=args.path,
        )
    
    def get_workflow_run(
        self,
        workflow_run_id: str,
    ) -> typing.Union[
        ApiResponseFor200,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        args = self._get_workflow_run_mapped_args(
            workflow_run_id=workflow_run_id,
        )
        return self._get_workflow_run_oapg(
            path_params=args.path,
        )

class GetWorkflowRun(BaseApi):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.raw = RawGetWorkflowRun(*args, **kwargs)

    async def aget_workflow_run(
        self,
        workflow_run_id: str,
        validate: bool = False,
    ):
        raw_response = await self.raw.aget_workflow_run(
            workflow_run_id=workflow_run_id,
        )
        if validate:
            return WorkflowRunEntityPydantic(**raw_response.body)
        return WorkflowRunEntityPydantic.model_construct(**raw_response.body)
    
    def get_workflow_run(
        self,
        workflow_run_id: str,
        validate: bool = False,
    ):
        raw_response = self.raw.get_workflow_run(
            workflow_run_id=workflow_run_id,
        )
        if validate:
            return WorkflowRunEntityPydantic(**raw_response.body)
        return WorkflowRunEntityPydantic.model_construct(**raw_response.body)


class ApiForget(BaseApi):
    # this class is used by api classes that refer to endpoints by path and http method names

    async def aget(
        self,
        workflow_run_id: str,
    ) -> typing.Union[
        ApiResponseFor200Async,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        args = self._get_workflow_run_mapped_args(
            workflow_run_id=workflow_run_id,
        )
        return await self._aget_workflow_run_oapg(
            path_params=args.path,
        )
    
    def get(
        self,
        workflow_run_id: str,
    ) -> typing.Union[
        ApiResponseFor200,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        args = self._get_workflow_run_mapped_args(
            workflow_run_id=workflow_run_id,
        )
        return self._get_workflow_run_oapg(
            path_params=args.path,
        )

