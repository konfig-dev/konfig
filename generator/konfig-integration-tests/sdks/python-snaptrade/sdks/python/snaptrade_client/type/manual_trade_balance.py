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
from snaptrade_client.type.cash import Cash
from snaptrade_client.type.currency import Currency

class RequiredManualTradeBalance(TypedDict):
    pass

class OptionalManualTradeBalance(TypedDict, total=False):
    account: Account

    currency: Currency

    cash: Cash

class ManualTradeBalance(RequiredManualTradeBalance, OptionalManualTradeBalance):
    pass
