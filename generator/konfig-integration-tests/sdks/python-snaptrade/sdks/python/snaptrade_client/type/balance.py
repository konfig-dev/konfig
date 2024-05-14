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

from snaptrade_client.type.currency import Currency

class RequiredBalance(TypedDict):
    pass

class OptionalBalance(TypedDict, total=False):
    currency: Currency

    cash: typing.Optional[typing.Union[int, float]]

    buying_power: typing.Optional[typing.Union[int, float]]

class Balance(RequiredBalance, OptionalBalance):
    pass
