# coding: utf-8
"""
    python-union-string-discriminator API

    A simple API based for testing python-union-string-discriminator.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import typing
import inspect
from datetime import date, datetime
from python_union_string_discriminator.client_custom import ClientCustom
from python_union_string_discriminator.configuration import Configuration
from python_union_string_discriminator.api_client import ApiClient
from python_union_string_discriminator.type_util import copy_signature
from python_union_string_discriminator.apis.tags.test_api import TestApi



class PythonUnionStringDiscriminatorClient(ClientCustom):

    def __init__(self, configuration: typing.Union[Configuration, None] = None, **kwargs):
        super().__init__(configuration, **kwargs)
        if (len(kwargs) > 0):
            configuration = Configuration(**kwargs)
        if (configuration is None):
            raise Exception("configuration is required")
        api_client = ApiClient(configuration)
        self.test: TestApi = TestApi(api_client)
