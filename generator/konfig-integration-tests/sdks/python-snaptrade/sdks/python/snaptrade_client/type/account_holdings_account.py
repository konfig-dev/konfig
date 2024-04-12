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

from snaptrade_client.type.account_order_record import AccountOrderRecord
from snaptrade_client.type.balance import Balance
from snaptrade_client.type.options_position import OptionsPosition
from snaptrade_client.type.position import Position
from snaptrade_client.type.snap_trade_holdings_account_account_id import SnapTradeHoldingsAccountAccountId
from snaptrade_client.type.snap_trade_holdings_total_value import SnapTradeHoldingsTotalValue

class RequiredAccountHoldingsAccount(TypedDict):
    pass

class OptionalAccountHoldingsAccount(TypedDict, total=False):
    account: SnapTradeHoldingsAccountAccountId

    balances: typing.Optional[typing.List[Balance]]

    positions: typing.Optional[typing.List[Position]]

    option_positions: typing.Optional[typing.List[OptionsPosition]]

    orders: typing.Optional[typing.List[AccountOrderRecord]]

    total_value: SnapTradeHoldingsTotalValue

class AccountHoldingsAccount(RequiredAccountHoldingsAccount, OptionalAccountHoldingsAccount):
    pass
