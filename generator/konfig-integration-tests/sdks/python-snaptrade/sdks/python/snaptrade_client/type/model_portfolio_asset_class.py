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

from snaptrade_client.type.model_asset_class import ModelAssetClass

class RequiredModelPortfolioAssetClass(TypedDict):
    pass

class OptionalModelPortfolioAssetClass(TypedDict, total=False):
    model_asset_class: ModelAssetClass

    percent: int

class ModelPortfolioAssetClass(RequiredModelPortfolioAssetClass, OptionalModelPortfolioAssetClass):
    pass
