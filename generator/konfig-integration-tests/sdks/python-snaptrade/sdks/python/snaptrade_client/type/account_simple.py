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

class RequiredAccountSimple(TypedDict):
    pass

class OptionalAccountSimple(TypedDict, total=False):
    id: str

    name: str

    number: str

    sync_status: AccountSyncStatus

class AccountSimple(RequiredAccountSimple, OptionalAccountSimple):
    pass
