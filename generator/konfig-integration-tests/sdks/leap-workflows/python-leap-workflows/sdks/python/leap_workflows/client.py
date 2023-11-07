# coding: utf-8
"""
    Leap Workflows API

    The Leap Workflows API allows developers to run workflows, fetch workflow runs, and provide other utility functions related to workflow runs. Please use the X-Api-Key for authenticated requests.

    The version of the OpenAPI document: 1.0
    Contact: help@tryleap.ai
    Created by: https://tryleap.ai/
"""

import typing
import inspect
from datetime import date, datetime
from leap_workflows.client_custom import ClientCustom
from leap_workflows.configuration import Configuration
from leap_workflows.api_client import ApiClient
from leap_workflows.type_util import copy_signature
from leap_workflows.apis.tags.workflow_runs_api import WorkflowRunsApi



class Leap(ClientCustom):

    def __init__(self, configuration: typing.Union[Configuration, None] = None, **kwargs):
        super().__init__(configuration, **kwargs)
        if (len(kwargs) > 0):
            configuration = Configuration(**kwargs)
        if (configuration is None):
            raise Exception("configuration is required")
        api_client = ApiClient(configuration)
        self.workflow_runs: WorkflowRunsApi = WorkflowRunsApi(api_client)
