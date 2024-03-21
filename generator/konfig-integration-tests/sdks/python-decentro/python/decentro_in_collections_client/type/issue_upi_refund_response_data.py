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


class RequiredIssueUpiRefundResponseData(TypedDict):
    pass

class OptionalIssueUpiRefundResponseData(TypedDict, total=False):
    transactionId: str

    transactionStatus: str

    transactionStatusDescription: str

class IssueUpiRefundResponseData(RequiredIssueUpiRefundResponseData, OptionalIssueUpiRefundResponseData):
    pass
