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
from snaptrade_client.type.security_type import SecurityType
from snaptrade_client.type.us_exchange import USExchange

class RequiredUnderlyingSymbol(TypedDict):
    pass

class OptionalUnderlyingSymbol(TypedDict, total=False):
    id: str

    symbol: str

    description: typing.Optional[str]

    currency: Currency

    exchange: USExchange

    type: SecurityType

    currencies: typing.List[Currency]

    figi_code: typing.Optional[str]

class UnderlyingSymbol(RequiredUnderlyingSymbol, OptionalUnderlyingSymbol):
    pass
