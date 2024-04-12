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

from snaptrade_client.type.strategy_order_place_orders_item_legs import StrategyOrderPlaceOrdersItemLegs

class RequiredStrategyOrderPlaceOrdersItem(TypedDict):
    pass

class OptionalStrategyOrderPlaceOrdersItem(TypedDict, total=False):
    id: int

    symbol: str

    symbolId: int

    totalQuantity: int

    openQuantity: int

    filledQuantity: int

    canceledQuantity: int

    side: str

    orderType: str

    limitPrice: str

    stopPrice: str

    isAllOrNone: bool

    isAnonymous: bool

    icebergQuantity: str

    minQuantity: str

    avgExecPrice: int

    lastExecPrice: str

    source: str

    timeInForce: str

    gtdDate: str

    state: str

    rejectionReason: str

    chainId: int

    creationTime: str

    updateTime: str

    notes: str

    primaryRoute: str

    secondaryRoute: str

    orderRoute: str

    venueHoldingOrder: str

    comissionCharged: int

    exchangeOrderId: str

    isSignificantShareHolder: bool

    isInsider: bool

    isLimitOffsetInDollar: bool

    userId: int

    placementCommission: str

    legs: StrategyOrderPlaceOrdersItemLegs

    strategyType: str

    triggerStopPrice: str

    orderGroupId: int

    orderClass: str

    isCrossZero: bool

class StrategyOrderPlaceOrdersItem(RequiredStrategyOrderPlaceOrdersItem, OptionalStrategyOrderPlaceOrdersItem):
    pass
