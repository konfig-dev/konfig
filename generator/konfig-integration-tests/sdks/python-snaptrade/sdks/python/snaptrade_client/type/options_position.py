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

from snaptrade_client.type.brokerage_symbol import BrokerageSymbol
from snaptrade_client.type.currency_nullable import CurrencyNullable
from snaptrade_client.type.price import Price

class RequiredOptionsPosition(TypedDict):
    pass

class OptionalOptionsPosition(TypedDict, total=False):
    symbol: BrokerageSymbol

    price: Price

    units: typing.Union[int, float]

    currency: typing.Optional[CurrencyNullable]

    # Average purchase price for this position
    average_purchase_price: typing.Optional[typing.Union[int, float]]

class OptionsPosition(RequiredOptionsPosition, OptionalOptionsPosition):
    pass
