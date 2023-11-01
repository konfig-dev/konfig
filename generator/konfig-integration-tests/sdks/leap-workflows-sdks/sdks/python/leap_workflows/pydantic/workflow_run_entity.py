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
from typing_extensions import TypedDict, Literal
from pydantic import BaseModel, Field


class WorkflowRunEntity(BaseModel):
        id: str = Field(alias='id')

        version_id: str = Field(alias='version_id')

        status: str = Field(alias='status')

        created_at: datetime = Field(alias='created_at')

        started_at: datetime = Field(alias='started_at')

        ended_at: datetime = Field(alias='ended_at')

        workflow_id: str = Field(alias='workflow_id')

        error: str = Field(alias='error')

        input: typing.Dict[str, typing.Union[bool, date, datetime, dict, float, int, list, str, None]] = Field(alias='input')

        output: typing.Dict[str, typing.Union[bool, date, datetime, dict, float, int, list, str, None]] = Field(alias='output')
