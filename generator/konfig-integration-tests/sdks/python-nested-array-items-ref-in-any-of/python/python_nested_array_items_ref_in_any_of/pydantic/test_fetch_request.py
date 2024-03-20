# coding: utf-8

"""
    python-nested-array-items-ref-in-any-of API

    A simple API based for testing python-nested-array-items-ref-in-any-of.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING
from pydantic import BaseModel, Field, RootModel, ConfigDict

from python_nested_array_items_ref_in_any_of.pydantic.simple_schema import SimpleSchema

class TestFetchRequest(BaseModel):
    problematic_property: typing.Optional[typing.Union[typing.List[SimpleSchema], typing.List[str]]] = Field(None, alias='problematicProperty')
    model_config = ConfigDict(
        protected_namespaces=(),
        arbitrary_types_allowed=True
    )
