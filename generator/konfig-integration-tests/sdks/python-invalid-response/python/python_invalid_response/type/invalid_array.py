# coding: utf-8

"""
    python-invalid-response API

    A simple API based for testing python-invalid-response.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING

from python_invalid_response.type.invalid_array_array import InvalidArrayArray

class RequiredInvalidArray(TypedDict):
    pass

class OptionalInvalidArray(TypedDict, total=False):
    array: InvalidArrayArray


class InvalidArray(RequiredInvalidArray, OptionalInvalidArray):
    pass
