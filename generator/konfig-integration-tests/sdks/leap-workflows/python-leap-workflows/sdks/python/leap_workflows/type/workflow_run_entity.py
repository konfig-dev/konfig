# coding: utf-8

"""
    Leap Workflows API

    The Leap Workflows API allows developers to run workflows, fetch workflow runs, and provide other utility functions related to workflow runs. Please use the X-Api-Key for authenticated requests.

    The version of the OpenAPI document: 1.0
    Contact: help@tryleap.ai
    Created by: https://tryleap.ai/
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING


class RequiredWorkflowRunEntity(TypedDict):
    id: str

    version_id: str

    status: str

    created_at: datetime

    started_at: datetime

    ended_at: datetime

    workflow_id: str

    error: str

    input: typing.Dict[str, typing.Union[bool, date, datetime, dict, float, int, list, str, None]]

    output: typing.Dict[str, typing.Union[bool, date, datetime, dict, float, int, list, str, None]]

class OptionalWorkflowRunEntity(TypedDict, total=False):
    pass

class WorkflowRunEntity(RequiredWorkflowRunEntity, OptionalWorkflowRunEntity):
    pass
