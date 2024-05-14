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

from snaptrade_client.type.currency import Currency
from snaptrade_client.type.percent import Percent

class RequiredPortfolioGroupSettings(TypedDict):
    pass

class OptionalPortfolioGroupSettings(TypedDict, total=False):
    buyOnly: bool

    cash_optimizer: bool

    notifyFrequency: str

    driftThreshold: Percent

    preferred_currency: Currency

class PortfolioGroupSettings(RequiredPortfolioGroupSettings, OptionalPortfolioGroupSettings):
    pass
