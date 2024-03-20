# coding: utf-8

"""
    python-circular-reference API

    A simple API based for testing python-circular-reference.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING
from pydantic import BaseModel, Field, RootModel, ConfigDict

from python_circular_reference.pydantic.item import Item
if TYPE_CHECKING:
    from python_circular_reference.pydantic.test_infinite_loop import TestInfiniteLoop

class TestFetchResponse(BaseModel):
    required: 'TestInfiniteLoop' = Field(alias='required')

    value: typing.Optional['TestInfiniteLoop'] = Field(None, alias='value')

    array: typing.Optional[typing.List[Item]] = Field(None, alias='array')
    model_config = ConfigDict(
        protected_namespaces=(),
        arbitrary_types_allowed=True
    )
