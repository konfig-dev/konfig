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

from snaptrade_client.type.brokerage_authorization_type_read_only_brokerage import BrokerageAuthorizationTypeReadOnlyBrokerage

class RequiredBrokerageAuthorizationTypeReadOnly(TypedDict):
    pass

class OptionalBrokerageAuthorizationTypeReadOnly(TypedDict, total=False):
    id: str

    type: str

    auth_type: str

    brokerage: BrokerageAuthorizationTypeReadOnlyBrokerage

class BrokerageAuthorizationTypeReadOnly(RequiredBrokerageAuthorizationTypeReadOnly, OptionalBrokerageAuthorizationTypeReadOnly):
    pass
