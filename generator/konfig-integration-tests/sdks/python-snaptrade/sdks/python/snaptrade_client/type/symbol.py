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
from snaptrade_client.type.exchange import Exchange
from snaptrade_client.type.security_type import SecurityType

class RequiredSymbol(TypedDict):
    pass

class OptionalSymbol(TypedDict, total=False):
    id: str

    symbol: str

    raw_symbol: str

    name: str

    currency: Currency

    exchange: Exchange

    type: SecurityType

    figi_code: typing.Optional[str]

class Symbol(RequiredSymbol, OptionalSymbol):
    pass
