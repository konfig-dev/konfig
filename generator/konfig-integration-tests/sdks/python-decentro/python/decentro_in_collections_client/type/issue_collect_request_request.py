# coding: utf-8

"""
    decentro-in-collections

    Collections

    The version of the OpenAPI document: 1.0.0
    Contact: admin@decentro.tech
    Created by: https://decentro.tech
"""

from datetime import datetime, date
import typing
from enum import Enum
from typing_extensions import TypedDict, Literal, TYPE_CHECKING


class RequiredIssueCollectRequestRequest(TypedDict):
    reference_id: str

    payer_upi: str

    payee_account: str

    amount: typing.Union[int, float]

    purpose_message: str

class OptionalIssueCollectRequestRequest(TypedDict, total=False):
    expiry_time: int

class IssueCollectRequestRequest(RequiredIssueCollectRequestRequest, OptionalIssueCollectRequestRequest):
    pass
