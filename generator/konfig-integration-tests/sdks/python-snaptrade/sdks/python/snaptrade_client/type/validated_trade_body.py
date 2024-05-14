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


class RequiredValidatedTradeBody(TypedDict):
    pass

class OptionalValidatedTradeBody(TypedDict, total=False):
    # Optional, defaults to true. Determines if a wait is performed to check on order status. If false, latency will be reduced but orders returned will be more likely to be of status PENDING as we will not wait to check on the status before responding to the request
    wait_to_confirm: typing.Optional[bool]

class ValidatedTradeBody(RequiredValidatedTradeBody, OptionalValidatedTradeBody):
    pass
