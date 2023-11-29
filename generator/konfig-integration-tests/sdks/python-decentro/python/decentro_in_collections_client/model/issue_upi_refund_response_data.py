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


class IssueUpiRefundResponseData(
    schemas.DictSchema
):
    """
    This class is auto generated
    """


    class MetaOapg:
        
        class properties:
            transactionId = schemas.StrSchema
            transactionStatus = schemas.StrSchema
            transactionStatusDescription = schemas.StrSchema
            __annotations__ = {
                "transactionId": transactionId,
                "transactionStatus": transactionStatus,
                "transactionStatusDescription": transactionStatusDescription,
            }
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["transactionId"]) -> MetaOapg.properties.transactionId: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["transactionStatus"]) -> MetaOapg.properties.transactionStatus: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["transactionStatusDescription"]) -> MetaOapg.properties.transactionStatusDescription: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["transactionId", "transactionStatus", "transactionStatusDescription", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["transactionId"]) -> typing.Union[MetaOapg.properties.transactionId, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["transactionStatus"]) -> typing.Union[MetaOapg.properties.transactionStatus, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["transactionStatusDescription"]) -> typing.Union[MetaOapg.properties.transactionStatusDescription, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["transactionId", "transactionStatus", "transactionStatusDescription", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        transactionId: typing.Union[MetaOapg.properties.transactionId, str, schemas.Unset] = schemas.unset,
        transactionStatus: typing.Union[MetaOapg.properties.transactionStatus, str, schemas.Unset] = schemas.unset,
        transactionStatusDescription: typing.Union[MetaOapg.properties.transactionStatusDescription, str, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'IssueUpiRefundResponseData':
        return super().__new__(
            cls,
            *args,
            transactionId=transactionId,
            transactionStatus=transactionStatus,
            transactionStatusDescription=transactionStatusDescription,
            _configuration=_configuration,
            **kwargs,
        )
