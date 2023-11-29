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

from decentro_in_collections_client.type.issue_upi_refund_response_data import IssueUpiRefundResponseData

class RequiredIssueUpiRefundResponse(TypedDict):
    pass

class OptionalIssueUpiRefundResponse(TypedDict, total=False):
    decentroTxnId: str

    status: str

    responseCode: str

    message: str

    data: IssueUpiRefundResponseData

class IssueUpiRefundResponse(RequiredIssueUpiRefundResponse, OptionalIssueUpiRefundResponse):
    pass
