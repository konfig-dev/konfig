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

from snaptrade_client.type.option_strategy import OptionStrategy
from snaptrade_client.type.order_type import OrderType
from snaptrade_client.type.price import Price

class RequiredStrategyOrderRecord(TypedDict):
    pass

class OptionalStrategyOrderRecord(TypedDict, total=False):
    strategy: OptionStrategy

    status: str

    filled_quantity: typing.Union[int, float]

    open_quantity: typing.Union[int, float]

    closed_quantity: typing.Union[int, float]

    order_type: OrderType

    # Trade time in force examples:   * FOK - Fill Or Kill   * Day - Day   * GTC - Good Til Canceled   * GTD - Good Til Date 
    time_in_force: str

    limit_price: Price

    execution_price: Price

    # Time
    time_placed: str

    # Time
    time_updated: str

class StrategyOrderRecord(RequiredStrategyOrderRecord, OptionalStrategyOrderRecord):
    pass
