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

from snaptrade_client.type.option_strategy_legs import OptionStrategyLegs
from snaptrade_client.type.universal_symbol import UniversalSymbol

class RequiredOptionStrategy(TypedDict):
    pass

class OptionalOptionStrategy(TypedDict, total=False):
    id: str

    underlying_symbol_id: UniversalSymbol

    strategy_type: str

    number_of_legs: typing.Union[int, float]

    legs: OptionStrategyLegs

class OptionStrategy(RequiredOptionStrategy, OptionalOptionStrategy):
    pass
