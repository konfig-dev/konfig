# coding: utf-8

"""
    python-union-string-discriminator API

    A simple API based for testing python-union-string-discriminator.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING

from python_union_string_discriminator.type.a import A
from python_union_string_discriminator.type.b import B
from python_union_string_discriminator.type.generic_schema import GenericSchema

class RequiredTestFetchResponse(TypedDict):
    pass

class OptionalTestFetchResponse(TypedDict, total=False):
    value: typing.Union[A, B, GenericSchema]

class TestFetchResponse(RequiredTestFetchResponse, OptionalTestFetchResponse):
    pass
