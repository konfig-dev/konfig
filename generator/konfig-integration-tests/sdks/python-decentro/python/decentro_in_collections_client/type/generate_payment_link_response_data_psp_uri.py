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


class RequiredGeneratePaymentLinkResponseDataPspUri(TypedDict):
    pass

class OptionalGeneratePaymentLinkResponseDataPspUri(TypedDict, total=False):
    commonUri: str

    gpayUri: str

    phonepeUri: str

    paytmUri: str

class GeneratePaymentLinkResponseDataPspUri(RequiredGeneratePaymentLinkResponseDataPspUri, OptionalGeneratePaymentLinkResponseDataPspUri):
    pass
