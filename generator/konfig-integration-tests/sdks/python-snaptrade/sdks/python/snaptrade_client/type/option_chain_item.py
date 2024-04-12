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

from snaptrade_client.type.option_chain_item_chain_per_root import OptionChainItemChainPerRoot

class RequiredOptionChainItem(TypedDict):
    pass

class OptionalOptionChainItem(TypedDict, total=False):
    expiryDate: str

    description: str

    listingExchange: str

    optionExerciseType: str

    chainPerRoot: OptionChainItemChainPerRoot

class OptionChainItem(RequiredOptionChainItem, OptionalOptionChainItem):
    pass
