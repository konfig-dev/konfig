# coding: utf-8
"""
    python-one-of-uuid-string-integer-path-parameter API

    A simple API based for testing python-one-of-uuid-string-integer-path-parameter.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import typing

from python_one_of_uuid_string_integer_path_parameter.configuration import Configuration
from python_one_of_uuid_string_integer_path_parameter.api_client import ApiClient



class ClientCustom:

    def __init__(self, configuration: typing.Union[Configuration, None] = None, **kwargs):
        if (len(kwargs) > 0):
            configuration = Configuration(**kwargs)
        if (configuration is None):
            raise Exception("configuration is required")
        api_client = ApiClient(configuration)
        # customize here

    # add custom methods here