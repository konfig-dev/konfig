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

from snaptrade_client.type.brokerage_symbol import BrokerageSymbol
from snaptrade_client.type.trade import Trade
from snaptrade_client.type.trade_execution_status_meta import TradeExecutionStatusMeta
from snaptrade_client.type.universal_symbol import UniversalSymbol

class RequiredTradeExecutionStatus(TypedDict):
    pass

class OptionalTradeExecutionStatus(TypedDict, total=False):
    symbol: BrokerageSymbol

    universal_symbol: UniversalSymbol

    trade: Trade

    # Execution state of a trade
    state: str

    # Number of filled units
    filled_units: int

    # Action of executed trade
    action: str

    # Price of execution
    price: typing.Union[int, float]

    # Fees paid from executing trade
    commissions: typing.Union[int, float]

    meta: TradeExecutionStatusMeta

class TradeExecutionStatus(RequiredTradeExecutionStatus, OptionalTradeExecutionStatus):
    pass
