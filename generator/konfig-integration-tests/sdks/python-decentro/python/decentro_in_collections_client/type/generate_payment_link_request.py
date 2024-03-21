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


class RequiredGeneratePaymentLinkRequest(TypedDict):
    reference_id: str

    payee_account: str

    amount: typing.Union[int, float]

    purpose_message: str

    generate_qr: int

class OptionalGeneratePaymentLinkRequest(TypedDict, total=False):
    expiry_time: int

    customized_qr_with_logo: int

    generate_uri: int

class GeneratePaymentLinkRequest(RequiredGeneratePaymentLinkRequest, OptionalGeneratePaymentLinkRequest):
    pass
