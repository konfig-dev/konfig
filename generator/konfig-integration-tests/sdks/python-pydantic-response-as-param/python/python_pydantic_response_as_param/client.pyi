# coding: utf-8
"""
    python-pydantic-response-as-param API

    A simple API based for testing python-pydantic-response-as-param.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import typing
import inspect
from datetime import date, datetime
from python_pydantic_response_as_param.client_custom import ClientCustom
from python_pydantic_response_as_param.configuration import Configuration
from python_pydantic_response_as_param.api_client import ApiClient
from python_pydantic_response_as_param.type_util import copy_signature
from python_pydantic_response_as_param.apis.tags.adventure_api import AdventureApi



class PythonPydanticResponseAsParamClient(ClientCustom):

    def __init__(self, configuration: typing.Union[Configuration, None] = None, **kwargs):
        super().__init__(configuration, **kwargs)
        if (len(kwargs) > 0):
            configuration = Configuration(**kwargs)
        if (configuration is None):
            raise Exception("configuration is required")
        api_client = ApiClient(configuration)
        self.adventure: AdventureApi = AdventureApi(api_client)
