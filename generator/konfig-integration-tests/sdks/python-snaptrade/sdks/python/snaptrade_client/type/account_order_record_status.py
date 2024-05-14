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


AccountOrderRecordStatus = Literal["NONE", "PENDING", "ACCEPTED", "FAILED", "REJECTED", "CANCELED", "PARTIAL_CANCELED", "CANCEL_PENDING", "EXECUTED", "PARTIAL", "REPLACE_PENDING", "REPLACED", "STOPPED", "SUSPENDED", "EXPIRED", "QUEUED", "TRIGGERED", "ACTIVATED", "PENDING_RISK_REVIEW", "CONTINGENT_ORDER"]
