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


class RequiredSimpleSchema(TypedDict):
    pass

class OptionalSimpleSchema(TypedDict, total=False):
    value: str

class SimpleSchema(RequiredSimpleSchema, OptionalSimpleSchema):
    pass
