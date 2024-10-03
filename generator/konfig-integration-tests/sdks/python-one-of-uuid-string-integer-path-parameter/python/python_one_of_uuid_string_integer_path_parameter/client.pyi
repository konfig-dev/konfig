# coding: utf-8
"""
    python-one-of-uuid-string-integer-path-parameter API

    A simple API based for testing python-one-of-uuid-string-integer-path-parameter.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import typing
import inspect
from datetime import date, datetime
from python_one_of_uuid_string_integer_path_parameter.client_custom import ClientCustom
from python_one_of_uuid_string_integer_path_parameter.configuration import Configuration
from python_one_of_uuid_string_integer_path_parameter.api_client import ApiClient
from python_one_of_uuid_string_integer_path_parameter.type_util import copy_signature
from python_one_of_uuid_string_integer_path_parameter.apis.tags.test_api import TestApi



class PythonOneOfUuidStringIntegerPathParameterClient(ClientCustom):

    def __init__(self, configuration: typing.Union[Configuration, None] = None, **kwargs):
        super().__init__(configuration, **kwargs)
        if (len(kwargs) > 0):
            configuration = Configuration(**kwargs)
        if (configuration is None):
            raise Exception("configuration is required")
        api_client = ApiClient(configuration)
        self.test: TestApi = TestApi(api_client)
