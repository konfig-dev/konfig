# coding: utf-8
"""
    python-invalid-response API

    A simple API based for testing python-invalid-response.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import typing
import inspect
from datetime import date, datetime
from python_invalid_response.client_custom import ClientCustom
from python_invalid_response.configuration import Configuration
from python_invalid_response.api_client import ApiClient
from python_invalid_response.type_util import copy_signature
from python_invalid_response.apis.tags.test_api import TestApi



class PythonInvalidResponseClient(ClientCustom):

    def __init__(self, configuration: typing.Union[Configuration, None] = None, **kwargs):
        super().__init__(configuration, **kwargs)
        if (len(kwargs) > 0):
            configuration = Configuration(**kwargs)
        if (configuration is None):
            raise Exception("configuration is required")
        api_client = ApiClient(configuration)
        self.test: TestApi = TestApi(api_client)
