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

from snaptrade_client.type.manual_trade import ManualTrade
from snaptrade_client.type.manual_trade_balance import ManualTradeBalance

class RequiredManualTradeAndImpact(TypedDict):
    pass

class OptionalManualTradeAndImpact(TypedDict, total=False):
    trade: ManualTrade

    trade_impacts: typing.List[ManualTrade]

    combined_remaining_balance: ManualTradeBalance

class ManualTradeAndImpact(RequiredManualTradeAndImpact, OptionalManualTradeAndImpact):
    pass
