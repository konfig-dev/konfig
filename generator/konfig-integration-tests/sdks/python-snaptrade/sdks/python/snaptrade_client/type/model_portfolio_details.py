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

from snaptrade_client.type.model_portfolio import ModelPortfolio
from snaptrade_client.type.model_portfolio_asset_class import ModelPortfolioAssetClass
from snaptrade_client.type.model_portfolio_security import ModelPortfolioSecurity

class RequiredModelPortfolioDetails(TypedDict):
    pass

class OptionalModelPortfolioDetails(TypedDict, total=False):
    model_portfolio: ModelPortfolio

    model_portfolio_security: typing.List[ModelPortfolioSecurity]

    model_portfolio_asset_class: typing.List[ModelPortfolioAssetClass]

class ModelPortfolioDetails(RequiredModelPortfolioDetails, OptionalModelPortfolioDetails):
    pass
