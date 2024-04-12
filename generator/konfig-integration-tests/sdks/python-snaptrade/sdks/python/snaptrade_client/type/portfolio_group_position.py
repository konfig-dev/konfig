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

from snaptrade_client.type.universal_symbol import UniversalSymbol

class RequiredPortfolioGroupPosition(TypedDict):
    pass

class OptionalPortfolioGroupPosition(TypedDict, total=False):
    symbol: UniversalSymbol

    # Last known market price for the symbol
    price: typing.Optional[typing.Union[int, float]]

    units: int

class PortfolioGroupPosition(RequiredPortfolioGroupPosition, OptionalPortfolioGroupPosition):
    pass
