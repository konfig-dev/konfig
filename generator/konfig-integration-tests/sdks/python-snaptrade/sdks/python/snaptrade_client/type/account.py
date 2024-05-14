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

from snaptrade_client.type.account_balance import AccountBalance
from snaptrade_client.type.account_meta import AccountMeta
from snaptrade_client.type.account_sync_status import AccountSyncStatus
from snaptrade_client.type.cash_restriction import CashRestriction

class RequiredAccount(TypedDict):
    pass

class OptionalAccount(TypedDict, total=False):
    id: str

    brokerage_authorization: str

    portfolio_group: str

    name: str

    number: str

    institution_name: str

    created_date: str

    meta: AccountMeta

    cash_restrictions: typing.List[CashRestriction]

    sync_status: AccountSyncStatus

    balance: AccountBalance

class Account(RequiredAccount, OptionalAccount):
    pass
