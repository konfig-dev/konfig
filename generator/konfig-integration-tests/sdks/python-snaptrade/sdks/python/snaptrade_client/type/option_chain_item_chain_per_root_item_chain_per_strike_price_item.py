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


class RequiredOptionChainItemChainPerRootItemChainPerStrikePriceItem(TypedDict):
    pass

class OptionalOptionChainItemChainPerRootItemChainPerStrikePriceItem(TypedDict, total=False):
    strikePrice: typing.Optional[int]

    callSymbolId: typing.Optional[int]

    putSymbolId: typing.Optional[int]

class OptionChainItemChainPerRootItemChainPerStrikePriceItem(RequiredOptionChainItemChainPerRootItemChainPerStrikePriceItem, OptionalOptionChainItemChainPerRootItemChainPerStrikePriceItem):
    pass
