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


class RequiredUSExchange(TypedDict):
    pass

class OptionalUSExchange(TypedDict, total=False):
    id: str

    code: str

    mic_code: str

    name: str

    timezone: str

    start_time: str

    close_time: str

    suffix: typing.Optional[str]

    allows_cryptocurrency_symbols: bool

class USExchange(RequiredUSExchange, OptionalUSExchange):
    pass
