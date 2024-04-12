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

from snaptrade_client.type.account_sync_status import AccountSyncStatus
from snaptrade_client.type.brokerage_authorization import BrokerageAuthorization
from snaptrade_client.type.snap_trade_holdings_account_meta import SnapTradeHoldingsAccountMeta

class RequiredSnapTradeHoldingsAccount(TypedDict):
    pass

class OptionalSnapTradeHoldingsAccount(TypedDict, total=False):
    id: str

    brokerage_authorization: BrokerageAuthorization

    portfolio_group: str

    name: typing.Optional[str]

    number: str

    institution_name: str

    sync_status: AccountSyncStatus

    meta: SnapTradeHoldingsAccountMeta

class SnapTradeHoldingsAccount(RequiredSnapTradeHoldingsAccount, OptionalSnapTradeHoldingsAccount):
    pass
