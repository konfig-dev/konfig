# leap-workflows-python-sdk

The Leap Workflows API allows developers to run workflows, fetch workflow runs, and provide other utility functions related to workflow runs. Please use the X-Api-Key for authenticated requests.


[![PyPI](https://img.shields.io/badge/PyPI-v1.0.0-blue)](https://pypi.org/project/leap-workflows-python-sdk/1.0.0)
[![GitHub last commit](https://img.shields.io/github/last-commit/leap-ai/workflows-sdks.svg)](https://github.com/leap-ai/workflows-sdks/commits)
[![README.md](https://img.shields.io/badge/README-Click%20Here-green)](https://github.com/leap-ai/workflows-sdks/tree/main/sdks/python#readme)
[![More Info](https://img.shields.io/badge/More%20Info-Click%20Here-orange)](https://tryleap.ai/)

## Table of Contents

<!-- toc -->

- [Requirements](#requirements)
- [Installing](#installing)
- [Getting Started](#getting-started)
- [Async](#async)
- [Reference](#reference)
  * [`leap.workflow_runs.get_workflow_run`](#leapworkflow_runsget_workflow_run)
  * [`leap.workflow_runs.workflow`](#leapworkflow_runsworkflow)

<!-- tocstop -->

## Requirements

Python >=3.7

## Installing

```sh
pip install leap-workflows-python-sdk==1.0.0
```

## Getting Started

```python
from pprint import pprint
from leap_workflows import Leap, ApiException

leap = Leap(
    api_key="YOUR_API_KEY",
)

try:
    # Get a workflow run
    get_workflow_run_response = leap.workflow_runs.get_workflow_run(
        workflow_run_id="workflow_run_id_example",
    )
    pprint(get_workflow_run_response.body)
    pprint(get_workflow_run_response.body["id"])
    pprint(get_workflow_run_response.body["version_id"])
    pprint(get_workflow_run_response.body["status"])
    pprint(get_workflow_run_response.body["created_at"])
    pprint(get_workflow_run_response.body["started_at"])
    pprint(get_workflow_run_response.body["ended_at"])
    pprint(get_workflow_run_response.body["workflow_id"])
    pprint(get_workflow_run_response.body["error"])
    pprint(get_workflow_run_response.body["input"])
    pprint(get_workflow_run_response.body["output"])
    pprint(get_workflow_run_response.headers)
    pprint(get_workflow_run_response.status)
    pprint(get_workflow_run_response.round_trip_time)
except ApiException as e:
    print("Exception when calling WorkflowRunsApi.get_workflow_run: %s\n" % e)
    pprint(e.body)
    pprint(e.headers)
    pprint(e.status)
    pprint(e.reason)
    pprint(e.round_trip_time)
```

## Async

`async` support is available by prepending `a` to any method.

```python
import asyncio
from pprint import pprint
from leap_workflows import Leap, ApiException

leap = Leap(
    api_key="YOUR_API_KEY",
)


async def main():
    try:
        # Get a workflow run
        get_workflow_run_response = await leap.workflow_runs.aget_workflow_run(
            workflow_run_id="workflow_run_id_example",
        )
        pprint(get_workflow_run_response.body)
        pprint(get_workflow_run_response.body["id"])
        pprint(get_workflow_run_response.body["version_id"])
        pprint(get_workflow_run_response.body["status"])
        pprint(get_workflow_run_response.body["created_at"])
        pprint(get_workflow_run_response.body["started_at"])
        pprint(get_workflow_run_response.body["ended_at"])
        pprint(get_workflow_run_response.body["workflow_id"])
        pprint(get_workflow_run_response.body["error"])
        pprint(get_workflow_run_response.body["input"])
        pprint(get_workflow_run_response.body["output"])
        pprint(get_workflow_run_response.headers)
        pprint(get_workflow_run_response.status)
        pprint(get_workflow_run_response.round_trip_time)
    except ApiException as e:
        print("Exception when calling WorkflowRunsApi.get_workflow_run: %s\n" % e)
        pprint(e.body)
        pprint(e.headers)
        pprint(e.status)
        pprint(e.reason)
        pprint(e.round_trip_time)


asyncio.run(main())
```


## Reference
### `leap.workflow_runs.get_workflow_run`

This endpoint retrieves the details of a specific workflow run using its `workflow_run_id`.

#### 🛠️ Usage

```python
get_workflow_run_response = leap.workflow_runs.get_workflow_run(
    workflow_run_id="workflow_run_id_example",
)
```

#### ⚙️ Parameters

##### workflow_run_id: `str`

The ID of the workflow run to retrieve.

#### 🔄 Return

[WorkflowRunEntity](./leap_workflows/type/workflow_run_entity.py)

#### 🌐 Endpoint

`/v1/runs/{workflow_run_id}` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `leap.workflow_runs.workflow`

This endpoint lets the user run a specified workflow with the provided workflow definition.

#### 🛠️ Usage

```python
workflow_response = leap.workflow_runs.workflow(
    workflow_id="123e4567-e89b-12d3-a456-426614174000",
    webhook_url="https://myapp.com/webhook",
    input={
        "first_name": "Sam",
        "last_name": "Altman",
    },
)
```

#### ⚙️ Parameters

##### workflow_id: `str`

The UUID of the workflow to be run.

##### webhook_url: `str`

The URL to which the workflow results should be sent to on completion.

##### input: [`WorkflowRunPostRequestInput`](./leap_workflows/type/workflow_run_post_request_input.py)

#### ⚙️ Request Body

[`WorkflowRunPostRequest`](./leap_workflows/type/workflow_run_post_request.py)
#### 🔄 Return

[WorkflowRunEntity](./leap_workflows/type/workflow_run_entity.py)

#### 🌐 Endpoint

`/v1/runs` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author
This Python package is automatically generated by [Konfig](https://konfigthis.com)
