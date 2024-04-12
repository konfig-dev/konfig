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


class RequiredDeleteUserResponse(TypedDict):
    pass

class OptionalDeleteUserResponse(TypedDict, total=False):
    # Delete status
    status: str

    # SnapTrade User ID. Provided by SnapTrade Partner. Can be any string, as long as it's unique to a user
    userId: str

class DeleteUserResponse(RequiredDeleteUserResponse, OptionalDeleteUserResponse):
    pass
