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
from pydantic import BaseModel, Field, RootModel


class GeneratePaymentLinkRequest(BaseModel):
    reference_id: str = Field(alias='reference_id')

    payee_account: str = Field(alias='payee_account')

    amount: typing.Union[int, float] = Field(alias='amount')

    purpose_message: str = Field(alias='purpose_message')

    generate_qr: int = Field(alias='generate_qr')

    expiry_time: typing.Optional[int] = Field(None, alias='expiry_time')

    customized_qr_with_logo: typing.Optional[int] = Field(None, alias='customized_qr_with_logo')

    generate_uri: typing.Optional[int] = Field(None, alias='generate_uri')
