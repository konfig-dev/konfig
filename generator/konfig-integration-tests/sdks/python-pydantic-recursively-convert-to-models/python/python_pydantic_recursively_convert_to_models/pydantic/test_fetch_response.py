# coding: utf-8

"""
    python-pydantic-recursively-convert-to-models API

    A simple API based for testing python-pydantic-recursively-convert-to-models.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING
from pydantic import BaseModel, Field, RootModel

from python_pydantic_recursively_convert_to_models.pydantic.inner import Inner
from python_pydantic_recursively_convert_to_models.pydantic.list_inner import ListInner

class TestFetchResponse(BaseModel):
    a: Inner = Field(None, alias='a')

    b: ListInner = Field(None, alias='b')
