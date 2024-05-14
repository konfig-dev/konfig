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

from snaptrade_client.type.underlying_symbol import UnderlyingSymbol

class RequiredOptionsSymbolNullable(TypedDict):
    id: str

    ticker: str

    option_type: str

    strike_price: typing.Union[int, float]

    expiration_date: str

    underlying_symbol: UnderlyingSymbol

class OptionalOptionsSymbolNullable(TypedDict, total=False):
    is_mini_option: bool

    local_id: str

    exchange_id: str

class OptionsSymbolNullable(RequiredOptionsSymbolNullable, OptionalOptionsSymbolNullable):
    pass
