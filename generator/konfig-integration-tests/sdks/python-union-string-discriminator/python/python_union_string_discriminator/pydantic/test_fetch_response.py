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
from pydantic import BaseModel, Field, RootModel

from python_union_string_discriminator.pydantic.a import A
from python_union_string_discriminator.pydantic.b import B
from python_union_string_discriminator.pydantic.generic_schema import GenericSchema

class TestFetchResponse(BaseModel):
    value: typing.Optional[typing.Union[A, B, GenericSchema]] = Field(None, alias='value')
    class Config:
        arbitrary_types_allowed = True
