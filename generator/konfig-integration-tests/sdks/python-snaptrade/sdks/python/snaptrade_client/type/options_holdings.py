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
from snaptrade_client.type.options_symbol import OptionsSymbol
from snaptrade_client.type.price import Price

class RequiredOptionsHoldings(TypedDict):
    pass

class OptionalOptionsHoldings(TypedDict, total=False):
    # Options information
    id: str

    symbol: str

    option_symbol: OptionsSymbol

    price: Price

    currency: Currency

    # Average purchase price for this position
    average_purchase_price: typing.Optional[typing.Union[int, float]]

class OptionsHoldings(RequiredOptionsHoldings, OptionalOptionsHoldings):
    pass
