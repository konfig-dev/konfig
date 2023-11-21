# coding: utf-8
"""
    python-pydantic-array-with-object API

    A simple API based for testing python-pydantic-array-with-object.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import typing
import inspect
from datetime import date, datetime
from python_pydantic_array_with_object.client_custom import ClientCustom
from python_pydantic_array_with_object.configuration import Configuration
from python_pydantic_array_with_object.api_client import ApiClient
from python_pydantic_array_with_object.type_util import copy_signature
from python_pydantic_array_with_object.apis.tags.test_api import TestApi



class PythonPydanticArrayWithObjectClient(ClientCustom):

    def __init__(self, configuration: typing.Union[Configuration, None] = None, **kwargs):
        super().__init__(configuration, **kwargs)
        if (len(kwargs) > 0):
            configuration = Configuration(**kwargs)
        if (configuration is None):
            raise Exception("configuration is required")
        api_client = ApiClient(configuration)
        self.test: TestApi = TestApi(api_client)
