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

from decentro_in_collections_client.type.issue_collect_request_response_data import IssueCollectRequestResponseData

class RequiredIssueCollectRequestResponse(TypedDict):
    pass

class OptionalIssueCollectRequestResponse(TypedDict, total=False):
    decentroTxnId: str

    status: str

    responseCode: str

    message: str

    data: IssueCollectRequestResponseData

class IssueCollectRequestResponse(RequiredIssueCollectRequestResponse, OptionalIssueCollectRequestResponse):
    pass
