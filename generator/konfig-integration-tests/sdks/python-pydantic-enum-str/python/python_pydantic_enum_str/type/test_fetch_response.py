# coding: utf-8

"""
    python-pydantic-enum-str API

    A simple API based for testing python-pydantic-enum-str.

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
    # A string value
    value: str

class TestFetchResponse(RequiredTestFetchResponse, OptionalTestFetchResponse):
    pass
