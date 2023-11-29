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


class IssueCollectRequestRequest(BaseModel):
    reference_id: str = Field(alias='reference_id')

    payer_upi: str = Field(alias='payer_upi')

    payee_account: str = Field(alias='payee_account')

    amount: typing.Union[int, float] = Field(alias='amount')

    purpose_message: str = Field(alias='purpose_message')

    expiry_time: typing.Optional[int] = Field(None, alias='expiry_time')
