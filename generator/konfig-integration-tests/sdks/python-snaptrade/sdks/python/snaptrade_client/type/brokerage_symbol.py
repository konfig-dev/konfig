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

from snaptrade_client.type.brokerage_authorization import BrokerageAuthorization
from snaptrade_client.type.options_symbol_nullable import OptionsSymbolNullable
from snaptrade_client.type.universal_symbol_nullable import UniversalSymbolNullable

class RequiredBrokerageSymbol(TypedDict):
    pass

class OptionalBrokerageSymbol(TypedDict, total=False):
    id: str

    symbol: typing.Optional[UniversalSymbolNullable]

    brokerage_authorization: BrokerageAuthorization

    description: str

    allows_fractional_units: typing.Optional[bool]

    option_symbol: typing.Optional[OptionsSymbolNullable]

class BrokerageSymbol(RequiredBrokerageSymbol, OptionalBrokerageSymbol):
    pass
