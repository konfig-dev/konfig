# coding: utf-8

"""
    python-pydantic-nested-union-with-list-and-str API

    A simple API based for testing python-pydantic-nested-union-with-list-and-str.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING
from pydantic import BaseModel, Field, RootModel

from python_pydantic_nested_union_with_list_and_str.pydantic.test_chat_message import TestChatMessage

class TestFetchResponse(BaseModel):
    test_messages: typing.Optional[typing.List[TestChatMessage]] = Field(None, alias='testMessages')
