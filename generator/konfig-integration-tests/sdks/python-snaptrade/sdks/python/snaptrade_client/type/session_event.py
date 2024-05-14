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


class RequiredSessionEvent(TypedDict):
    pass

class OptionalSessionEvent(TypedDict, total=False):
    id: str

    session_event_type: str

    session_id: str

    # SnapTrade User ID. Provided by SnapTrade Partner. Can be any string, as long as it's unique to a user
    user_id: str

    # Time
    created_date: str

    brokerage_status_code: typing.Optional[int]

    brokerage_authorization_id: str

class SessionEvent(RequiredSessionEvent, OptionalSessionEvent):
    pass
