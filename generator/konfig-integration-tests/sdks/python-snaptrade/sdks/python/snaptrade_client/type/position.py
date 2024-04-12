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

from snaptrade_client.type.position_symbol import PositionSymbol

class RequiredPosition(TypedDict):
    pass

class OptionalPosition(TypedDict, total=False):
    symbol: PositionSymbol

    units: typing.Optional[typing.Union[int, float]]

    # Last known market price for the symbol
    price: typing.Optional[typing.Union[int, float]]

    open_pnl: typing.Optional[typing.Union[int, float]]

    # Deprecated, use the units field for both fractional and integer units going forward
    fractional_units: typing.Optional[typing.Union[int, float]]

    # Average purchase price for this position. Either returned by the underlying broker or calculated using historical transactions.
    average_purchase_price: typing.Optional[typing.Union[int, float]]

class Position(RequiredPosition, OptionalPosition):
    pass
