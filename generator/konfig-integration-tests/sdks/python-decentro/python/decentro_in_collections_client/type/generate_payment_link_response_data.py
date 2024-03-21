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

from decentro_in_collections_client.type.generate_payment_link_response_data_psp_uri import GeneratePaymentLinkResponseDataPspUri

class RequiredGeneratePaymentLinkResponseData(TypedDict):
    pass

class OptionalGeneratePaymentLinkResponseData(TypedDict, total=False):
    generatedLink: str

    transactionId: str

    transactionStatus: str

    encodedDynamicQrCode: str

    upiUri: str

    pspUri: GeneratePaymentLinkResponseDataPspUri

class GeneratePaymentLinkResponseData(RequiredGeneratePaymentLinkResponseData, OptionalGeneratePaymentLinkResponseData):
    pass
