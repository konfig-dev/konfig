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

from python_invalid_response.type.invalid_object_object import InvalidObjectObject

class RequiredInvalidObject(TypedDict):
    pass

class OptionalInvalidObject(TypedDict, total=False):
    object: InvalidObjectObject

class InvalidObject(RequiredInvalidObject, OptionalInvalidObject):
    pass
