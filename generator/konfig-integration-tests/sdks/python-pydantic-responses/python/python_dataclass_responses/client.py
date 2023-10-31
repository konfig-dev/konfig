# coding: utf-8
"""
    Python Dataclass Responses API

    A simple API based on python dataclass responses.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import typing
import inspect
from datetime import date, datetime
from python_dataclass_responses.client_custom import ClientCustom
from python_dataclass_responses.configuration import Configuration
from python_dataclass_responses.api_client import ApiClient
from python_dataclass_responses.type_util import copy_signature
from python_dataclass_responses.apis.tags.test_api import TestApi



class PythonDataclassResponses(ClientCustom):

    def __init__(self, configuration: typing.Union[Configuration, None] = None, **kwargs):
        super().__init__(configuration, **kwargs)
        if (len(kwargs) > 0):
            configuration = Configuration(**kwargs)
        if (configuration is None):
            raise Exception("configuration is required")
        api_client = ApiClient(configuration)
        self.test: TestApi = TestApi(api_client)
