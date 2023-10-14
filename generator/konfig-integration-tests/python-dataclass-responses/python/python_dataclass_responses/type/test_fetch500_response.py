# coding: utf-8

"""
    Python Dataclass Responses API

    A simple API based on python dataclass responses.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal


class RequiredTestFetch500Response(TypedDict):
    pass

class OptionalTestFetch500Response(TypedDict, total=False):
    error: str

class TestFetch500Response(RequiredTestFetch500Response, OptionalTestFetch500Response):
    pass
