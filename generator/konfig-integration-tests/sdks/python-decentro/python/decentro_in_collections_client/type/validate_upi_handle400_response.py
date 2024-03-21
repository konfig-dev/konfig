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


class RequiredValidateUpiHandle400Response(TypedDict):
    pass

class OptionalValidateUpiHandle400Response(TypedDict, total=False):
    decentroTxnId: str

    status: str

    responseCode: str

    message: str

class ValidateUpiHandle400Response(RequiredValidateUpiHandle400Response, OptionalValidateUpiHandle400Response):
    pass
