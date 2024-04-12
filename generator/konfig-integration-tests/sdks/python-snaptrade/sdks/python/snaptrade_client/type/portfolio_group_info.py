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

from snaptrade_client.type.balance import Balance
from snaptrade_client.type.brokerage_authorization import BrokerageAuthorization
from snaptrade_client.type.calculated_trade import CalculatedTrade
from snaptrade_client.type.excluded_asset import ExcludedAsset
from snaptrade_client.type.portfolio_group_settings import PortfolioGroupSettings
from snaptrade_client.type.position import Position
from snaptrade_client.type.target_asset import TargetAsset
from snaptrade_client.type.universal_symbol import UniversalSymbol

class RequiredPortfolioGroupInfo(TypedDict):
    pass

class OptionalPortfolioGroupInfo(TypedDict, total=False):
    symbols: typing.List[UniversalSymbol]

    quotable_symbols: typing.List[UniversalSymbol]

    balances: typing.List[Balance]

    positions: typing.List[Position]

    target_positions: typing.List[TargetAsset]

    ideal_positions: typing.List[Position]

    excluded_positions: typing.List[ExcludedAsset]

    calculated_trades: typing.List[CalculatedTrade]

    brokerage_authorizations: typing.List[BrokerageAuthorization]

    accuracy: typing.Union[int, float]

    settings: PortfolioGroupSettings

class PortfolioGroupInfo(RequiredPortfolioGroupInfo, OptionalPortfolioGroupInfo):
    pass
