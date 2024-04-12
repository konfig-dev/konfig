# coding: utf-8

"""
    SnapTrade

    Connect brokerage accounts to your app for live positions and trading

    The version of the OpenAPI document: 1.0.0
    Contact: api@snaptrade.com
    Created by: https://snaptrade.com/
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING


class RequiredModel500UnexpectedExceptionResponse(TypedDict):
    pass

class OptionalModel500UnexpectedExceptionResponse(TypedDict, total=False):
    detail: typing.Union[bool, date, datetime, dict, float, int, list, str, None]

    status_code: typing.Union[bool, date, datetime, dict, float, int, list, str, None]

    code: typing.Union[bool, date, datetime, dict, float, int, list, str, None]

class Model500UnexpectedExceptionResponse(RequiredModel500UnexpectedExceptionResponse, OptionalModel500UnexpectedExceptionResponse):
    pass
