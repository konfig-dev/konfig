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

from snaptrade_client.type.account import Account
from snaptrade_client.type.currency import Currency

class RequiredTradeImpact(TypedDict):
    pass

class OptionalTradeImpact(TypedDict, total=False):
    account: Account

    currency: Currency

    # Remaining balance after executing all trades
    remaining_cash: typing.Union[int, float]

    # Total estimated commissions across all trades to make
    estimated_commissions: typing.Union[int, float]

    # Estimated forex fees to pay to excute trades
    forex_fees: typing.Union[int, float]

class TradeImpact(RequiredTradeImpact, OptionalTradeImpact):
    pass
