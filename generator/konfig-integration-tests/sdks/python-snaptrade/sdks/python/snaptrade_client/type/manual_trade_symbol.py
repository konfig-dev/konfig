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

class RequiredManualTradeSymbol(TypedDict):
    pass

class OptionalManualTradeSymbol(TypedDict, total=False):
    brokerage_symbol_id: str

    universal_symbol_id: str

    currency: Currency

    local_id: str

    description: typing.Optional[str]

    symbol: str

class ManualTradeSymbol(RequiredManualTradeSymbol, OptionalManualTradeSymbol):
    pass
