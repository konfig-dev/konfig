# coding: utf-8
"""
    python-pydantic-free-form-object-property API

    A simple API based for testing python-pydantic-free-form-object-property.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import typing
import inspect
from datetime import date, datetime
from python_pydantic_free_form_object_property.client_custom import ClientCustom
from python_pydantic_free_form_object_property.configuration import Configuration
from python_pydantic_free_form_object_property.api_client import ApiClient
from python_pydantic_free_form_object_property.type_util import copy_signature
from python_pydantic_free_form_object_property.apis.tags.test_api import TestApi



class PythonPydanticFreeFormObjectPropertyClient(ClientCustom):

    def __init__(self, configuration: typing.Union[Configuration, None] = None, **kwargs):
        super().__init__(configuration, **kwargs)
        if (len(kwargs) > 0):
            configuration = Configuration(**kwargs)
        if (configuration is None):
            raise Exception("configuration is required")
        api_client = ApiClient(configuration)
        self.test: TestApi = TestApi(api_client)
