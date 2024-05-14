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


class RequiredUserErrorLog(TypedDict):
    pass

class OptionalUserErrorLog(TypedDict, total=False):
    requestedAt: str

    response: str

    statusCode: typing.Union[int, float]

    queryParams: str

    httpMethod: str

    endpoint: str

class UserErrorLog(RequiredUserErrorLog, OptionalUserErrorLog):
    pass
