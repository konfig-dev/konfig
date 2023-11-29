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


class GetTransactionStatusResponseData(BaseModel):
    transaction_status: typing.Optional[str] = Field(None, alias='transactionStatus')

    bank_reference_number: typing.Optional[str] = Field(None, alias='bankReferenceNumber')

    npci_txn_id: typing.Optional[str] = Field(None, alias='npciTxnId')
