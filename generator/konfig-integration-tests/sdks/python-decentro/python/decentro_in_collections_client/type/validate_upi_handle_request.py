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


class RequiredValidateUpiHandleRequest(TypedDict):
    reference_id: str

    upi_id: str

class OptionalValidateUpiHandleRequest(TypedDict, total=False):
    type: str

class ValidateUpiHandleRequest(RequiredValidateUpiHandleRequest, OptionalValidateUpiHandleRequest):
    pass
