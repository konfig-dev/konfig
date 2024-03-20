# coding: utf-8

"""
    python-pydantic-response-as-param API

    A simple API based for testing python-pydantic-response-as-param.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING
from pydantic import BaseModel, Field, RootModel, ConfigDict


class Sword(BaseModel):
    name: typing.Optional[str] = Field(None, alias='name')

    damage: typing.Optional[int] = Field(None, alias='damage')
    model_config = ConfigDict(
        protected_namespaces=(),
        arbitrary_types_allowed=True
    )
