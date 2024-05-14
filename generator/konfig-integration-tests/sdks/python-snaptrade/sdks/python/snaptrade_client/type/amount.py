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


class RequiredAmount(TypedDict):
    pass

class OptionalAmount(TypedDict, total=False):
    amount: typing.Union[int, float]

    currency: str

class Amount(RequiredAmount, OptionalAmount):
    pass
