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

from snaptrade_client.type.action import Action
from snaptrade_client.type.manual_trade_symbol import ManualTradeSymbol
from snaptrade_client.type.order_type import OrderType
from snaptrade_client.type.price import Price
from snaptrade_client.type.units_nullable import UnitsNullable

class RequiredManualTrade(TypedDict):
    pass

class OptionalManualTrade(TypedDict, total=False):
    id: str

    account: str

    order_type: OrderType

    # Trade time in force examples:   * FOK - Fill Or Kill   * Day - Day   * GTC - Good Til Canceled   * GTD - Good Til Date 
    time_in_force: str

    symbol: ManualTradeSymbol

    action: Action

    units: UnitsNullable

    price: Price

class ManualTrade(RequiredManualTrade, OptionalManualTrade):
    pass
