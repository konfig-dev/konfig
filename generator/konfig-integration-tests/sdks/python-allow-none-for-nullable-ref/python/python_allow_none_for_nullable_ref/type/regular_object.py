# coding: utf-8

"""
    python-allow-none-for-nullable-ref API

    A simple API based for testing python-allow-none-for-nullable-ref.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING


class RequiredRegularObject(TypedDict):
    pass

class OptionalRegularObject(TypedDict, total=False):
    regular_property: str

class RegularObject(RequiredRegularObject, OptionalRegularObject):
    pass
