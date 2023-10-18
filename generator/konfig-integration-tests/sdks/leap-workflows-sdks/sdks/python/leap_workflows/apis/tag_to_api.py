import typing_extensions

from leap_workflows.apis.tags import TagValues
from leap_workflows.apis.tags.workflow_runs_api import WorkflowRunsApi

TagToApi = typing_extensions.TypedDict(
    'TagToApi',
    {
        TagValues.WORKFLOW_RUNS: WorkflowRunsApi,
    }
)

tag_to_api = TagToApi(
    {
        TagValues.WORKFLOW_RUNS: WorkflowRunsApi,
    }
)
