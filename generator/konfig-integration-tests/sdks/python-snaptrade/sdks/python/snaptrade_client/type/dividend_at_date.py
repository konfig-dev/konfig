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


class RequiredDividendAtDate(TypedDict):
    pass

class OptionalDividendAtDate(TypedDict, total=False):
    # The ticker of the symbol that the dividend came from
    symbol: typing.Optional[str]

    # The amount received from the dividend
    amount: typing.Optional[typing.Union[int, float]]

    # The currency of the amount
    currency: str

class DividendAtDate(RequiredDividendAtDate, OptionalDividendAtDate):
    pass
