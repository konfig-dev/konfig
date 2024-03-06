# coding: utf-8
"""
    python-nested-array-items-ref-in-any-of API

    A simple API based for testing python-nested-array-items-ref-in-any-of.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import typing
import inspect
from datetime import date, datetime
from python_nested_array_items_ref_in_any_of.client_custom import ClientCustom
from python_nested_array_items_ref_in_any_of.configuration import Configuration
from python_nested_array_items_ref_in_any_of.api_client import ApiClient
from python_nested_array_items_ref_in_any_of.type_util import copy_signature
from python_nested_array_items_ref_in_any_of.apis.tags.test_api import TestApi



class PythonNestedArrayItemsRefInAnyOfClient(ClientCustom):

    def __init__(self, configuration: typing.Union[Configuration, None] = None, **kwargs):
        super().__init__(configuration, **kwargs)
        if (len(kwargs) > 0):
            configuration = Configuration(**kwargs)
        if (configuration is None):
            raise Exception("configuration is required")
        api_client = ApiClient(configuration)
        self.test: TestApi = TestApi(api_client)
