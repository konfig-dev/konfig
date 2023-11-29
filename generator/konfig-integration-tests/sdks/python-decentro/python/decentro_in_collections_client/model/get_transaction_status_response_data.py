# coding: utf-8

"""
    decentro-in-collections

    Collections

    The version of the OpenAPI document: 1.0.0
    Contact: admin@decentro.tech
    Created by: https://decentro.tech
"""

from datetime import date, datetime  # noqa: F401
import decimal  # noqa: F401
import functools  # noqa: F401
import io  # noqa: F401
import re  # noqa: F401
import typing  # noqa: F401
import typing_extensions  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from decentro_in_collections_client import schemas  # noqa: F401


class GetTransactionStatusResponseData(
    schemas.DictSchema
):
    """
    This class is auto generated
    """


    class MetaOapg:
        
        class properties:
            transactionStatus = schemas.StrSchema
            bankReferenceNumber = schemas.StrSchema
            npciTxnId = schemas.StrSchema
            __annotations__ = {
                "transactionStatus": transactionStatus,
                "bankReferenceNumber": bankReferenceNumber,
                "npciTxnId": npciTxnId,
            }
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["transactionStatus"]) -> MetaOapg.properties.transactionStatus: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["bankReferenceNumber"]) -> MetaOapg.properties.bankReferenceNumber: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["npciTxnId"]) -> MetaOapg.properties.npciTxnId: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["transactionStatus", "bankReferenceNumber", "npciTxnId", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["transactionStatus"]) -> typing.Union[MetaOapg.properties.transactionStatus, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["bankReferenceNumber"]) -> typing.Union[MetaOapg.properties.bankReferenceNumber, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["npciTxnId"]) -> typing.Union[MetaOapg.properties.npciTxnId, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["transactionStatus", "bankReferenceNumber", "npciTxnId", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        transactionStatus: typing.Union[MetaOapg.properties.transactionStatus, str, schemas.Unset] = schemas.unset,
        bankReferenceNumber: typing.Union[MetaOapg.properties.bankReferenceNumber, str, schemas.Unset] = schemas.unset,
        npciTxnId: typing.Union[MetaOapg.properties.npciTxnId, str, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'GetTransactionStatusResponseData':
        return super().__new__(
            cls,
            *args,
            transactionStatus=transactionStatus,
            bankReferenceNumber=bankReferenceNumber,
            npciTxnId=npciTxnId,
            _configuration=_configuration,
            **kwargs,
        )
