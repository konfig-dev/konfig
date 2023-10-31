# coding: utf-8
"""
    Python Dataclass Responses API

    A simple API based on python dataclass responses.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import typing

from python_dataclass_responses.configuration import Configuration
from python_dataclass_responses.api_client import ApiClient



class ClientCustom:

    def __init__(self, configuration: typing.Union[Configuration, None] = None, **kwargs):
        if (len(kwargs) > 0):
            configuration = Configuration(**kwargs)
        if (configuration is None):
            raise Exception("configuration is required")
        api_client = ApiClient(configuration)
        # customize here

    # add custom methods here