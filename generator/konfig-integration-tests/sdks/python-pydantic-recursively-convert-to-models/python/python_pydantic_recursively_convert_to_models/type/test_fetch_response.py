# coding: utf-8

"""
    python-pydantic-recursively-convert-to-models API

    A simple API based for testing python-pydantic-recursively-convert-to-models.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING

from python_pydantic_recursively_convert_to_models.type.inner import Inner
from python_pydantic_recursively_convert_to_models.type.list_inner import ListInner

class RequiredTestFetchResponse(TypedDict):
    pass

class OptionalTestFetchResponse(TypedDict, total=False):
    a: Inner

    b: ListInner

class TestFetchResponse(RequiredTestFetchResponse, OptionalTestFetchResponse):
    pass
