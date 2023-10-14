# coding: utf-8

"""
    Python TypedDict Responses API

    A simple API based on python typeddict responses.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal


class RequiredTestFetchResponse(TypedDict):
    pass

class OptionalTestFetchResponse(TypedDict, total=False):
    # Description of property A.
    propertyA: str

    # Description of property B.
    propertyB: int

    # Description of property C.
    propertyC: bool

class TestFetchResponse(RequiredTestFetchResponse, OptionalTestFetchResponse):
    pass
