# coding: utf-8

"""
    python-pydantic-enum-str API

    A simple API based for testing python-pydantic-enum-str.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING
from pydantic import BaseModel, Field, RootModel

from python_pydantic_enum_str.pydantic.enum import Enum

class TestFetchResponse(BaseModel):
    value: typing.Optional[typing.Union[Enum, str]] = Field(None, alias='value')
