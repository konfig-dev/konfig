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


class GeneratePaymentLink400Response(
    schemas.DictSchema
):
    """
    This class is auto generated
    """


    class MetaOapg:
        
        class properties:
            decentroTxnId = schemas.StrSchema
            status = schemas.StrSchema
            responseCode = schemas.StrSchema
            message = schemas.StrSchema
            __annotations__ = {
                "decentroTxnId": decentroTxnId,
                "status": status,
                "responseCode": responseCode,
                "message": message,
            }
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["decentroTxnId"]) -> MetaOapg.properties.decentroTxnId: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["status"]) -> MetaOapg.properties.status: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["responseCode"]) -> MetaOapg.properties.responseCode: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["message"]) -> MetaOapg.properties.message: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["decentroTxnId", "status", "responseCode", "message", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["decentroTxnId"]) -> typing.Union[MetaOapg.properties.decentroTxnId, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["status"]) -> typing.Union[MetaOapg.properties.status, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["responseCode"]) -> typing.Union[MetaOapg.properties.responseCode, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["message"]) -> typing.Union[MetaOapg.properties.message, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["decentroTxnId", "status", "responseCode", "message", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        decentroTxnId: typing.Union[MetaOapg.properties.decentroTxnId, str, schemas.Unset] = schemas.unset,
        status: typing.Union[MetaOapg.properties.status, str, schemas.Unset] = schemas.unset,
        responseCode: typing.Union[MetaOapg.properties.responseCode, str, schemas.Unset] = schemas.unset,
        message: typing.Union[MetaOapg.properties.message, str, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'GeneratePaymentLink400Response':
        return super().__new__(
            cls,
            *args,
            decentroTxnId=decentroTxnId,
            status=status,
            responseCode=responseCode,
            message=message,
            _configuration=_configuration,
            **kwargs,
        )
