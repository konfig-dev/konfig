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
from pydantic import BaseModel, Field, RootModel, ConfigDict

from python_pydantic_nested_union_with_list_and_str.pydantic.generic_image_content import GenericImageContent
from python_pydantic_nested_union_with_list_and_str.pydantic.generic_text_content import GenericTextContent

class TestChatMessage(BaseModel):
    # The test content of the message.
    test_content: typing.Optional[typing.Union[str, typing.List[typing.Union[GenericTextContent, GenericImageContent]]]] = Field(None, alias='testContent')

    model_config = ConfigDict(
        protected_namespaces=(),
        arbitrary_types_allowed=True
    )
