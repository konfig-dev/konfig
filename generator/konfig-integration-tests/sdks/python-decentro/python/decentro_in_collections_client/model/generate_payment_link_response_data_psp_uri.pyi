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


class GeneratePaymentLinkResponseDataPspUri(
    schemas.DictSchema
):
    """
    This class is auto generated
    """


    class MetaOapg:
        
        class properties:
            commonUri = schemas.StrSchema
            gpayUri = schemas.StrSchema
            phonepeUri = schemas.StrSchema
            paytmUri = schemas.StrSchema
            __annotations__ = {
                "commonUri": commonUri,
                "gpayUri": gpayUri,
                "phonepeUri": phonepeUri,
                "paytmUri": paytmUri,
            }
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["commonUri"]) -> MetaOapg.properties.commonUri: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["gpayUri"]) -> MetaOapg.properties.gpayUri: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["phonepeUri"]) -> MetaOapg.properties.phonepeUri: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["paytmUri"]) -> MetaOapg.properties.paytmUri: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["commonUri", "gpayUri", "phonepeUri", "paytmUri", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["commonUri"]) -> typing.Union[MetaOapg.properties.commonUri, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["gpayUri"]) -> typing.Union[MetaOapg.properties.gpayUri, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["phonepeUri"]) -> typing.Union[MetaOapg.properties.phonepeUri, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["paytmUri"]) -> typing.Union[MetaOapg.properties.paytmUri, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["commonUri", "gpayUri", "phonepeUri", "paytmUri", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        commonUri: typing.Union[MetaOapg.properties.commonUri, str, schemas.Unset] = schemas.unset,
        gpayUri: typing.Union[MetaOapg.properties.gpayUri, str, schemas.Unset] = schemas.unset,
        phonepeUri: typing.Union[MetaOapg.properties.phonepeUri, str, schemas.Unset] = schemas.unset,
        paytmUri: typing.Union[MetaOapg.properties.paytmUri, str, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'GeneratePaymentLinkResponseDataPspUri':
        return super().__new__(
            cls,
            *args,
            commonUri=commonUri,
            gpayUri=gpayUri,
            phonepeUri=phonepeUri,
            paytmUri=paytmUri,
            _configuration=_configuration,
            **kwargs,
        )
