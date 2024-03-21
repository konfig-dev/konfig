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


class RequiredGetTransactionStatusResponseError(TypedDict):
    pass

class OptionalGetTransactionStatusResponseError(TypedDict, total=False):
    message: str

    response_code: str

class GetTransactionStatusResponseError(RequiredGetTransactionStatusResponseError, OptionalGetTransactionStatusResponseError):
    pass
