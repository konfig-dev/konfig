# coding: utf-8

"""
    python-pydantic-list-response API

    A simple API based for testing python-pydantic-list-response.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal


class RequiredTestFetchResponseItem(TypedDict):
    pass

class OptionalTestFetchResponseItem(TypedDict, total=False):
    # A unique identifier
    id: str

class TestFetchResponseItem(RequiredTestFetchResponseItem, OptionalTestFetchResponseItem):
    pass
