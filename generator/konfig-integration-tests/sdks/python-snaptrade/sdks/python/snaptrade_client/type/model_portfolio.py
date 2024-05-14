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


class RequiredModelPortfolio(TypedDict):
    pass

class OptionalModelPortfolio(TypedDict, total=False):
    id: str

    name: str

    # Enum definitions -> [-1: Unassigned, 0: Security Model Portfolio, 1: Asset Class Portfolio]
    model_type: int

class ModelPortfolio(RequiredModelPortfolio, OptionalModelPortfolio):
    pass
