# coding: utf-8
"""
    python-ignore-pydantic-protected-namespaces API

    A simple API based for testing python-ignore-pydantic-protected-namespaces.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import typing
import inspect
from datetime import date, datetime
from python_ignore_pydantic_protected_namespaces.client_custom import ClientCustom
from python_ignore_pydantic_protected_namespaces.configuration import Configuration
from python_ignore_pydantic_protected_namespaces.api_client import ApiClient
from python_ignore_pydantic_protected_namespaces.type_util import copy_signature
from python_ignore_pydantic_protected_namespaces.apis.tags.test_api import TestApi



class PythonIgnorePydanticProtectedNamespacesClient(ClientCustom):

    def __init__(self, configuration: typing.Union[Configuration, None] = None, **kwargs):
        super().__init__(configuration, **kwargs)
        if (len(kwargs) > 0):
            configuration = Configuration(**kwargs)
        if (configuration is None):
            raise Exception("configuration is required")
        api_client = ApiClient(configuration)
        self.test: TestApi = TestApi(api_client)
