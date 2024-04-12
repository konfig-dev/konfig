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

from snaptrade_client.type.strategy_order_place_orders import StrategyOrderPlaceOrders

class RequiredStrategyOrderPlace(TypedDict):
    pass

class OptionalStrategyOrderPlace(TypedDict, total=False):
    orderId: int

    orders: StrategyOrderPlaceOrders

class StrategyOrderPlace(RequiredStrategyOrderPlace, OptionalStrategyOrderPlace):
    pass
