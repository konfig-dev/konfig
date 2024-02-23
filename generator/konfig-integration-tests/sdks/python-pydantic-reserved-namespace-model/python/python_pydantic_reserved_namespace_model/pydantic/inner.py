# coding: utf-8

"""
    python-pydantic-reserved-namespace-model API

    A simple API based for testing python-pydantic-reserved-namespace-model.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING
from pydantic import BaseModel, Field, RootModel


class Inner(BaseModel):
    a: typing.Optional[str] = Field(None, alias='a')
    class Config:
        arbitrary_types_allowed = True
