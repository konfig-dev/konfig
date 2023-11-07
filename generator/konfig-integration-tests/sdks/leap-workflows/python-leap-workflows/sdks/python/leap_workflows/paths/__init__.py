# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from leap_workflows.apis.path_to_api import path_to_api

import enum


class PathValues(str, enum.Enum):
    V1_RUNS = "/v1/runs"
    V1_RUNS_WORKFLOW_RUN_ID = "/v1/runs/{workflow_run_id}"
