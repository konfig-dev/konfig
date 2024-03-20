# coding: utf-8

"""
    python-allow-none-for-nullable-ref API

    A simple API based for testing python-allow-none-for-nullable-ref.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING
from pydantic import BaseModel, Field, RootModel, ConfigDict


class RegularObject(BaseModel):
    regular_property: typing.Optional[str] = Field(None, alias='regular_property')
    model_config = ConfigDict(
        protected_namespaces=(),
        arbitrary_types_allowed=True
    )
