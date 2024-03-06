# coding: utf-8
"""
    python-nested-array-items-ref-in-any-of API

    A simple API based for testing python-nested-array-items-ref-in-any-of.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import typing

from python_nested_array_items_ref_in_any_of.configuration import Configuration
from python_nested_array_items_ref_in_any_of.api_client import ApiClient



class ClientCustom:

    def __init__(self, configuration: typing.Union[Configuration, None] = None, **kwargs):
        if (len(kwargs) > 0):
            configuration = Configuration(**kwargs)
        if (configuration is None):
            raise Exception("configuration is required")
        api_client = ApiClient(configuration)
        # customize here

    # add custom methods here