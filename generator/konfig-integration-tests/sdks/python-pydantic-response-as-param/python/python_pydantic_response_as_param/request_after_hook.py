# coding: utf-8

"""
    python-pydantic-response-as-param API

    A simple API based for testing python-pydantic-response-as-param.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import typing
from urllib3._collections import HTTPHeaderDict
from python_pydantic_response_as_param.configuration import Configuration

def request_after_hook(
        resource_path: str,
        method: str,
        configuration: Configuration,
        headers: typing.Optional[HTTPHeaderDict] = None,
        body: typing.Any = None,
        fields: typing.Optional[typing.Tuple[typing.Tuple[str, str], ...]] = None,
        auth_settings: typing.Optional[typing.List[str]] = None,
):
    pass