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

from snaptrade_client.type.strategy_impact_legs import StrategyImpactLegs

class RequiredStrategyImpact(TypedDict):
    pass

class OptionalStrategyImpact(TypedDict, total=False):
    estimatedCommissions: typing.Union[int, float]

    buyingPowerEffect: typing.Union[int, float]

    buyingPowerResult: typing.Union[int, float]

    maintExcessEffect: typing.Union[int, float]

    maintExcessResult: typing.Union[int, float]

    tradeValueCalculation: str

    legs: StrategyImpactLegs

    side: str

    effect: str

    price: typing.Union[int, float]

    strategy: str

class StrategyImpact(RequiredStrategyImpact, OptionalStrategyImpact):
    pass
