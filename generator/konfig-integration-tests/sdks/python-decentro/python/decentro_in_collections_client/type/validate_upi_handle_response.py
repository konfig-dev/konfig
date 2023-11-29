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

from decentro_in_collections_client.type.validate_upi_handle_response_data import ValidateUpiHandleResponseData

class RequiredValidateUpiHandleResponse(TypedDict):
    pass

class OptionalValidateUpiHandleResponse(TypedDict, total=False):
    decentroTxnId: str

    status: str

    responseCode: str

    message: str

    data: ValidateUpiHandleResponseData

class ValidateUpiHandleResponse(RequiredValidateUpiHandleResponse, OptionalValidateUpiHandleResponse):
    pass
