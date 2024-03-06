# coding: utf-8

"""
    python-pydantic-response-with-none-fieldvalue API

    A simple API based for testing python-pydantic-response-with-none-fieldvalue.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING
from pydantic import BaseModel, Field, RootModel


class TestFetchResponse(BaseModel):
    date: datetime = Field(alias='date')

    missing_date: datetime = Field(alias='missingDate')

    value: str = Field(alias='value')

    missing_value: str = Field(alias='missingValue')
    class Config:
        arbitrary_types_allowed = True
