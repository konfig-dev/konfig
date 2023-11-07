import typing_extensions

from leap_workflows.paths import PathValues
from leap_workflows.apis.paths.v1_runs import V1Runs
from leap_workflows.apis.paths.v1_runs_workflow_run_id import V1RunsWorkflowRunId

PathToApi = typing_extensions.TypedDict(
    'PathToApi',
    {
        PathValues.V1_RUNS: V1Runs,
        PathValues.V1_RUNS_WORKFLOW_RUN_ID: V1RunsWorkflowRunId,
    }
)

path_to_api = PathToApi(
    {
        PathValues.V1_RUNS: V1Runs,
        PathValues.V1_RUNS_WORKFLOW_RUN_ID: V1RunsWorkflowRunId,
    }
)
