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
from pydantic import BaseModel, Field, RootModel

from python_pydantic_response_as_param.pydantic.sword import Sword

class Equipment(BaseModel):
    sword: typing.Optional[Sword] = Field(None, alias='sword')

    armor: typing.Optional[str] = Field(None, alias='armor')
