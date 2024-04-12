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

from snaptrade_client.type.account_order_record_status import AccountOrderRecordStatus
from snaptrade_client.type.action import Action
from snaptrade_client.type.cancelled_units import CancelledUnits
from snaptrade_client.type.filled_units import FilledUnits
from snaptrade_client.type.open_units import OpenUnits
from snaptrade_client.type.options_symbol import OptionsSymbol
from snaptrade_client.type.order_type import OrderType
from snaptrade_client.type.price import Price
from snaptrade_client.type.stop_price import StopPrice
from snaptrade_client.type.time_nullable import TimeNullable
from snaptrade_client.type.units_nullable import UnitsNullable
from snaptrade_client.type.universal_symbol import UniversalSymbol

class RequiredAccountOrderRecord(TypedDict):
    pass

class OptionalAccountOrderRecord(TypedDict, total=False):
    # Order id returned by brokerage
    brokerage_order_id: str

    status: AccountOrderRecordStatus

    symbol: str

    universal_symbol: UniversalSymbol

    option_symbol: OptionsSymbol

    action: Action

    total_quantity: UnitsNullable

    open_quantity: OpenUnits

    canceled_quantity: CancelledUnits

    filled_quantity: FilledUnits

    execution_price: Price

    limit_price: Price

    stop_price: StopPrice

    order_type: OrderType

    # Trade time in force examples:   * FOK - Fill Or Kill   * Day - Day   * GTC - Good Til Canceled   * GTD - Good Til Date 
    time_in_force: str

    # Time
    time_placed: str

    time_updated: TimeNullable

    # Time
    expiry_date: str

class AccountOrderRecord(RequiredAccountOrderRecord, OptionalAccountOrderRecord):
    pass
