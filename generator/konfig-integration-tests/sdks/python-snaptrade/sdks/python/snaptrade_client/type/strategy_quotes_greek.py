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


class RequiredStrategyQuotesGreek(TypedDict):
    pass

class OptionalStrategyQuotesGreek(TypedDict, total=False):
    delta: typing.Union[int, float]

    gamma: typing.Union[int, float]

    theta: typing.Union[int, float]

    vega: typing.Union[int, float]

    rho: typing.Union[int, float]

class StrategyQuotesGreek(RequiredStrategyQuotesGreek, OptionalStrategyQuotesGreek):
    pass
