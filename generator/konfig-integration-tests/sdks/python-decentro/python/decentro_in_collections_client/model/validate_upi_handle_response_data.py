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


class ValidateUpiHandleResponseData(
    schemas.DictSchema
):
    """
    This class is auto generated
    """


    class MetaOapg:
        
        class properties:
            upiId = schemas.StrSchema
            name = schemas.StrSchema
            status = schemas.StrSchema
            statusDescription = schemas.StrSchema
            __annotations__ = {
                "upiId": upiId,
                "name": name,
                "status": status,
                "statusDescription": statusDescription,
            }
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["upiId"]) -> MetaOapg.properties.upiId: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["name"]) -> MetaOapg.properties.name: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["status"]) -> MetaOapg.properties.status: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["statusDescription"]) -> MetaOapg.properties.statusDescription: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["upiId", "name", "status", "statusDescription", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["upiId"]) -> typing.Union[MetaOapg.properties.upiId, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["name"]) -> typing.Union[MetaOapg.properties.name, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["status"]) -> typing.Union[MetaOapg.properties.status, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["statusDescription"]) -> typing.Union[MetaOapg.properties.statusDescription, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["upiId", "name", "status", "statusDescription", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        upiId: typing.Union[MetaOapg.properties.upiId, str, schemas.Unset] = schemas.unset,
        name: typing.Union[MetaOapg.properties.name, str, schemas.Unset] = schemas.unset,
        status: typing.Union[MetaOapg.properties.status, str, schemas.Unset] = schemas.unset,
        statusDescription: typing.Union[MetaOapg.properties.statusDescription, str, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'ValidateUpiHandleResponseData':
        return super().__new__(
            cls,
            *args,
            upiId=upiId,
            name=name,
            status=status,
            statusDescription=statusDescription,
            _configuration=_configuration,
            **kwargs,
        )
