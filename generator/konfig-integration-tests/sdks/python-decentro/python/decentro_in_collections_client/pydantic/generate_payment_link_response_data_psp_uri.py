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
from pydantic import BaseModel, Field, RootModel, ConfigDict


class GeneratePaymentLinkResponseDataPspUri(BaseModel):
    common_uri: typing.Optional[str] = Field(None, alias='commonUri')

    gpay_uri: typing.Optional[str] = Field(None, alias='gpayUri')

    phonepe_uri: typing.Optional[str] = Field(None, alias='phonepeUri')

    paytm_uri: typing.Optional[str] = Field(None, alias='paytmUri')

    model_config = ConfigDict(
        protected_namespaces=(),
        arbitrary_types_allowed=True
    )
