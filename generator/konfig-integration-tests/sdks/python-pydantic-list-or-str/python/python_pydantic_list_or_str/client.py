# coding: utf-8
"""
    python-pydantic-list-or-str API

    A simple API based for testing python-pydantic-list-or-str.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import typing
import inspect
from datetime import date, datetime
from python_pydantic_list_or_str.client_custom import ClientCustom
from python_pydantic_list_or_str.configuration import Configuration
from python_pydantic_list_or_str.api_client import ApiClient
from python_pydantic_list_or_str.type_util import copy_signature
from python_pydantic_list_or_str.apis.tags.test_api import TestApi



class PythonPydanticListOrStrClient(ClientCustom):

    def __init__(self, configuration: typing.Union[Configuration, None] = None, **kwargs):
        super().__init__(configuration, **kwargs)
        if (len(kwargs) > 0):
            configuration = Configuration(**kwargs)
        if (configuration is None):
            raise Exception("configuration is required")
        api_client = ApiClient(configuration)
        self.test: TestApi = TestApi(api_client)
