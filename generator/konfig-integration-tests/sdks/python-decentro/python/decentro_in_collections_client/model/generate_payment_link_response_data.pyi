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


class GeneratePaymentLinkResponseData(
    schemas.DictSchema
):
    """
    This class is auto generated
    """


    class MetaOapg:
        
        class properties:
            generatedLink = schemas.StrSchema
            transactionId = schemas.StrSchema
            transactionStatus = schemas.StrSchema
            encodedDynamicQrCode = schemas.StrSchema
            upiUri = schemas.StrSchema
        
            @staticmethod
            def pspUri() -> typing.Type['GeneratePaymentLinkResponseDataPspUri']:
                return GeneratePaymentLinkResponseDataPspUri
            __annotations__ = {
                "generatedLink": generatedLink,
                "transactionId": transactionId,
                "transactionStatus": transactionStatus,
                "encodedDynamicQrCode": encodedDynamicQrCode,
                "upiUri": upiUri,
                "pspUri": pspUri,
            }
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["generatedLink"]) -> MetaOapg.properties.generatedLink: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["transactionId"]) -> MetaOapg.properties.transactionId: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["transactionStatus"]) -> MetaOapg.properties.transactionStatus: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["encodedDynamicQrCode"]) -> MetaOapg.properties.encodedDynamicQrCode: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["upiUri"]) -> MetaOapg.properties.upiUri: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["pspUri"]) -> 'GeneratePaymentLinkResponseDataPspUri': ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["generatedLink", "transactionId", "transactionStatus", "encodedDynamicQrCode", "upiUri", "pspUri", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["generatedLink"]) -> typing.Union[MetaOapg.properties.generatedLink, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["transactionId"]) -> typing.Union[MetaOapg.properties.transactionId, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["transactionStatus"]) -> typing.Union[MetaOapg.properties.transactionStatus, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["encodedDynamicQrCode"]) -> typing.Union[MetaOapg.properties.encodedDynamicQrCode, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["upiUri"]) -> typing.Union[MetaOapg.properties.upiUri, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["pspUri"]) -> typing.Union['GeneratePaymentLinkResponseDataPspUri', schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["generatedLink", "transactionId", "transactionStatus", "encodedDynamicQrCode", "upiUri", "pspUri", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        generatedLink: typing.Union[MetaOapg.properties.generatedLink, str, schemas.Unset] = schemas.unset,
        transactionId: typing.Union[MetaOapg.properties.transactionId, str, schemas.Unset] = schemas.unset,
        transactionStatus: typing.Union[MetaOapg.properties.transactionStatus, str, schemas.Unset] = schemas.unset,
        encodedDynamicQrCode: typing.Union[MetaOapg.properties.encodedDynamicQrCode, str, schemas.Unset] = schemas.unset,
        upiUri: typing.Union[MetaOapg.properties.upiUri, str, schemas.Unset] = schemas.unset,
        pspUri: typing.Union['GeneratePaymentLinkResponseDataPspUri', schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'GeneratePaymentLinkResponseData':
        return super().__new__(
            cls,
            *args,
            generatedLink=generatedLink,
            transactionId=transactionId,
            transactionStatus=transactionStatus,
            encodedDynamicQrCode=encodedDynamicQrCode,
            upiUri=upiUri,
            pspUri=pspUri,
            _configuration=_configuration,
            **kwargs,
        )

from decentro_in_collections_client.model.generate_payment_link_response_data_psp_uri import GeneratePaymentLinkResponseDataPspUri
