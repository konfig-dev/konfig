# coding: utf-8

"""
    Python Pydantic Responses API

    A simple API based on python pydantic responses.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING
from pydantic import BaseModel, Field, RootModel


class TestReservedWord(BaseModel):
    # Reserved word in Python
    class_: typing.Optional[str] = Field(None, alias='class')
    class Config:
        arbitrary_types_allowed = True
