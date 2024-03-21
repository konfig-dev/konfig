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


class RequiredGenericTextContent(TypedDict):
    pass

class OptionalGenericTextContent(TypedDict, total=False):
    # Generic text content for testing.
    text: str

class GenericTextContent(RequiredGenericTextContent, OptionalGenericTextContent):
    pass
