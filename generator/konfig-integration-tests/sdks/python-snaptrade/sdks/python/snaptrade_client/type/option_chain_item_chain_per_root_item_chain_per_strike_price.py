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

from snaptrade_client.type.option_chain_item_chain_per_root_item_chain_per_strike_price_item import OptionChainItemChainPerRootItemChainPerStrikePriceItem

OptionChainItemChainPerRootItemChainPerStrikePrice = typing.List[OptionChainItemChainPerRootItemChainPerStrikePriceItem]
