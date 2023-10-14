# coding: utf-8
"""
    Python TypedDict Responses API

    A simple API based on python typeddict responses.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import typing
import inspect
from datetime import date, datetime
from python_typeddict.client_custom import ClientCustom
from python_typeddict.configuration import Configuration
from python_typeddict.api_client import ApiClient
from python_typeddict.type_util import copy_signature
from python_typeddict.apis.tags.test_api import TestApi



class PythonTypedDictResponses(ClientCustom):

    def __init__(self, configuration: typing.Union[Configuration, None] = None, **kwargs):
        super().__init__(configuration, **kwargs)
        if (len(kwargs) > 0):
            configuration = Configuration(**kwargs)
        if (configuration is None):
            raise Exception("configuration is required")
        api_client = ApiClient(configuration)
        self.test: TestApi = TestApi(api_client)
