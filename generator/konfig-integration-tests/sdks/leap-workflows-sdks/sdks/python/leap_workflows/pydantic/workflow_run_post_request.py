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

from leap_workflows.pydantic.workflow_run_post_request_input import WorkflowRunPostRequestInput

class WorkflowRunPostRequest(BaseModel):
    # The UUID of the workflow to be run.
        workflow_id: str = Field(alias='workflow_id')
    # The URL to which the workflow results should be sent to on completion.
        webhook_url: str = Field(None, alias='webhook_url')

        input: WorkflowRunPostRequestInput = Field(None, alias='input')
