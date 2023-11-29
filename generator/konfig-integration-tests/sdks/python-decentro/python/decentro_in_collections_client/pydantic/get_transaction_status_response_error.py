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


class GetTransactionStatusResponseError(BaseModel):
    message: typing.Optional[str] = Field(None, alias='message')

    response_code: typing.Optional[str] = Field(None, alias='response_code')
