# coding: utf-8

"""
    python-ignore-pydantic-protected-namespaces API

    A simple API based for testing python-ignore-pydantic-protected-namespaces.

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
    model_config_name_: typing.Optional[str] = Field(None, alias='model_config_name')
    class Config:
        arbitrary_types_allowed = True
