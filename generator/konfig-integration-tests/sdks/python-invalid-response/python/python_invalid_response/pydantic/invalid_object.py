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
from pydantic import BaseModel, Field, RootModel

from python_invalid_response.pydantic.invalid_object_object import InvalidObjectObject

class InvalidObject(BaseModel):
    object: typing.Optional[InvalidObjectObject] = Field(None, alias='object')
