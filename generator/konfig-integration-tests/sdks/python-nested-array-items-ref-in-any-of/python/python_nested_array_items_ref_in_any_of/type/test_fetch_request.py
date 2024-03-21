# coding: utf-8

"""
    python-nested-array-items-ref-in-any-of API

    A simple API based for testing python-nested-array-items-ref-in-any-of.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING

from python_nested_array_items_ref_in_any_of.type.simple_schema import SimpleSchema

class RequiredTestFetchRequest(TypedDict):
    pass

class OptionalTestFetchRequest(TypedDict, total=False):
    problematicProperty: typing.Union[typing.List[SimpleSchema], typing.List[str]]

class TestFetchRequest(RequiredTestFetchRequest, OptionalTestFetchRequest):
    pass
