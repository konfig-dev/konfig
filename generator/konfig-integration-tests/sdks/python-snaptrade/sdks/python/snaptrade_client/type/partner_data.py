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

from snaptrade_client.type.brokerage import Brokerage

class RequiredPartnerData(TypedDict):
    pass

class OptionalPartnerData(TypedDict, total=False):
    # URI to redirect user back to after user is done adding brokerage connections
    redirect_uri: str

    # Brokerages that can be accessed by partners
    allowed_brokerages: typing.List[Brokerage]

    # Name of Snaptrade Partner
    name: str

    # Slug of Snaptrade Partner
    slug: str

    # URL to partner's logo
    logo_url: str

    # Shows if pin is required by users to access connection page
    pin_required: bool

    # Shows if users of Snaptrade partners can access trade endpoints
    can_access_trades: bool

    # Shows if Snaptrade partners can get user holdings data
    can_access_holdings: bool

    # Shows if Snaptrade partners can get users account history data
    can_access_account_history: bool

    # Shows if Snaptrade partners can get users holdings data
    can_access_reference_data: bool

    # Shows if users Snaptrade partners can access portfolio group management features
    can_access_portfolio_management: bool

    # Shows if Snaptrade partners can get users account order history
    can_access_orders: bool

class PartnerData(RequiredPartnerData, OptionalPartnerData):
    pass
