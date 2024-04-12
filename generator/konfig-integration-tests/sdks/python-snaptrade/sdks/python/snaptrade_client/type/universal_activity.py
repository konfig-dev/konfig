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

from snaptrade_client.type.account_simple import AccountSimple
from snaptrade_client.type.currency import Currency
from snaptrade_client.type.options_symbol import OptionsSymbol
from snaptrade_client.type.symbol import Symbol

class RequiredUniversalActivity(TypedDict):
    pass

class OptionalUniversalActivity(TypedDict, total=False):
    id: str

    account: AccountSimple

    amount: typing.Optional[typing.Union[int, float]]

    currency: Currency

    description: str

    fee: typing.Union[int, float]

    # The forex conversion rate involved in the transaction if provided by the brokerage. Used in cases where securities of one currency are purchased in a different currency, and the forex conversion is automatic. In those cases, price, amount and fee will be in the top level currency (activity -> currency)
    fx_rate: typing.Optional[typing.Union[int, float]]

    institution: str

    # If an option transaction, then it's type (BUY_TO_OPEN, SELL_TO_CLOSE, etc), otherwise empty string
    option_type: str

    price: typing.Union[int, float]

    settlement_date: str

    # Reference ID from brokerage used to identify related transactions. For example if an order comprises of several transactions (buy, fee, fx), they can be grouped if they share the same external_reference_id
    external_reference_id: typing.Optional[str]

    symbol: Symbol

    option_symbol: OptionsSymbol

    trade_date: typing.Optional[str]

    # Potential values include (but are not limited to) - DIVIDEND - BUY - SELL - CONTRIBUTION - WITHDRAWAL - EXTERNAL_ASSET_TRANSFER_IN - EXTERNAL_ASSET_TRANSFER_OUT - INTERNAL_CASH_TRANSFER_IN - INTERNAL_CASH_TRANSFER_OUT - INTERNAL_ASSET_TRANSFER_IN - INTERNAL_ASSET_TRANSFER_OUT - INTEREST - REBATE - GOV_GRANT - TAX - FEE - REI - FXT
    type: str

    # Usually but not necessarily an integer
    units: typing.Union[int, float]

class UniversalActivity(RequiredUniversalActivity, OptionalUniversalActivity):
    pass
