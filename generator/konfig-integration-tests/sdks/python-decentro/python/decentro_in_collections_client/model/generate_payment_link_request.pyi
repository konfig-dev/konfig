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


class GeneratePaymentLinkRequest(
    schemas.DictSchema
):
    """
    This class is auto generated
    """


    class MetaOapg:
        required = {
            "generate_qr",
            "payee_account",
            "amount",
            "reference_id",
            "purpose_message",
        }
        
        class properties:
            
            
            class reference_id(
                schemas.StrSchema
            ):
                pass
            
            
            class payee_account(
                schemas.StrSchema
            ):
                pass
            
            
            class amount(
                schemas.NumberSchema
            ):
                pass
            
            
            class purpose_message(
                schemas.StrSchema
            ):
                pass
            
            
            class generate_qr(
                schemas.IntSchema
            ):
                pass
            
            
            class expiry_time(
                schemas.IntSchema
            ):
                pass
            customized_qr_with_logo = schemas.IntSchema
            generate_uri = schemas.IntSchema
            __annotations__ = {
                "reference_id": reference_id,
                "payee_account": payee_account,
                "amount": amount,
                "purpose_message": purpose_message,
                "generate_qr": generate_qr,
                "expiry_time": expiry_time,
                "customized_qr_with_logo": customized_qr_with_logo,
                "generate_uri": generate_uri,
            }
    
    generate_qr: MetaOapg.properties.generate_qr
    payee_account: MetaOapg.properties.payee_account
    amount: MetaOapg.properties.amount
    reference_id: MetaOapg.properties.reference_id
    purpose_message: MetaOapg.properties.purpose_message
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["reference_id"]) -> MetaOapg.properties.reference_id: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["payee_account"]) -> MetaOapg.properties.payee_account: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["amount"]) -> MetaOapg.properties.amount: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["purpose_message"]) -> MetaOapg.properties.purpose_message: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["generate_qr"]) -> MetaOapg.properties.generate_qr: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["expiry_time"]) -> MetaOapg.properties.expiry_time: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["customized_qr_with_logo"]) -> MetaOapg.properties.customized_qr_with_logo: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["generate_uri"]) -> MetaOapg.properties.generate_uri: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["reference_id", "payee_account", "amount", "purpose_message", "generate_qr", "expiry_time", "customized_qr_with_logo", "generate_uri", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["reference_id"]) -> MetaOapg.properties.reference_id: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["payee_account"]) -> MetaOapg.properties.payee_account: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["amount"]) -> MetaOapg.properties.amount: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["purpose_message"]) -> MetaOapg.properties.purpose_message: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["generate_qr"]) -> MetaOapg.properties.generate_qr: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["expiry_time"]) -> typing.Union[MetaOapg.properties.expiry_time, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["customized_qr_with_logo"]) -> typing.Union[MetaOapg.properties.customized_qr_with_logo, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["generate_uri"]) -> typing.Union[MetaOapg.properties.generate_uri, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["reference_id", "payee_account", "amount", "purpose_message", "generate_qr", "expiry_time", "customized_qr_with_logo", "generate_uri", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        generate_qr: typing.Union[MetaOapg.properties.generate_qr, decimal.Decimal, int, ],
        payee_account: typing.Union[MetaOapg.properties.payee_account, str, ],
        amount: typing.Union[MetaOapg.properties.amount, decimal.Decimal, int, float, ],
        reference_id: typing.Union[MetaOapg.properties.reference_id, str, ],
        purpose_message: typing.Union[MetaOapg.properties.purpose_message, str, ],
        expiry_time: typing.Union[MetaOapg.properties.expiry_time, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        customized_qr_with_logo: typing.Union[MetaOapg.properties.customized_qr_with_logo, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        generate_uri: typing.Union[MetaOapg.properties.generate_uri, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'GeneratePaymentLinkRequest':
        return super().__new__(
            cls,
            *args,
            generate_qr=generate_qr,
            payee_account=payee_account,
            amount=amount,
            reference_id=reference_id,
            purpose_message=purpose_message,
            expiry_time=expiry_time,
            customized_qr_with_logo=customized_qr_with_logo,
            generate_uri=generate_uri,
            _configuration=_configuration,
            **kwargs,
        )
