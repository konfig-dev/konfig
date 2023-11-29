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

from decentro_in_collections_client.pydantic.get_transaction_status_response_data import GetTransactionStatusResponseData
from decentro_in_collections_client.pydantic.get_transaction_status_response_error import GetTransactionStatusResponseError

class GetTransactionStatusResponse(BaseModel):
    decentro_txn_id: typing.Optional[str] = Field(None, alias='decentroTxnId')

    status: typing.Optional[str] = Field(None, alias='status')

    response_code: typing.Optional[str] = Field(None, alias='responseCode')

    message: typing.Optional[str] = Field(None, alias='message')

    data: typing.Optional[GetTransactionStatusResponseData] = Field(None, alias='data')

    error: typing.Optional[GetTransactionStatusResponseError] = Field(None, alias='error')
