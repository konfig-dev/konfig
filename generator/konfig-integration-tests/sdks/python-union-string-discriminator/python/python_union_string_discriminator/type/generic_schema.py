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


class RequiredGenericSchema(TypedDict):
    pass

class OptionalGenericSchema(TypedDict, total=False):
    type: str


class GenericSchema(RequiredGenericSchema, OptionalGenericSchema):
    pass
