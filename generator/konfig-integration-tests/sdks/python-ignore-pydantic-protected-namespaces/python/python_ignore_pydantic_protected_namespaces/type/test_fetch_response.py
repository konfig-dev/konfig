# coding: utf-8

"""
    python-ignore-pydantic-protected-namespaces API

    A simple API based for testing python-ignore-pydantic-protected-namespaces.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING


class RequiredTestFetchResponse(TypedDict):
    pass

class OptionalTestFetchResponse(TypedDict, total=False):
    model_config_name: str

class TestFetchResponse(RequiredTestFetchResponse, OptionalTestFetchResponse):
    pass
