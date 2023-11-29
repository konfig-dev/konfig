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


class IssueCollectRequestRequest(
    schemas.DictSchema
):
    """
    This class is auto generated
    """


    class MetaOapg:
        required = {
            "payee_account",
            "amount",
            "reference_id",
            "payer_upi",
            "purpose_message",
        }
        
        class properties:
            
            
            class reference_id(
                schemas.StrSchema
            ):
            
            
                class MetaOapg:
                    min_length = 1
                    x_konfig_strip = True
            
            
            class payer_upi(
                schemas.StrSchema
            ):
            
            
                class MetaOapg:
                    min_length = 1
                    x_konfig_strip = True
            
            
            class payee_account(
                schemas.StrSchema
            ):
            
            
                class MetaOapg:
                    min_length = 1
                    x_konfig_strip = True
            
            
            class amount(
                schemas.NumberSchema
            ):
            
            
                class MetaOapg:
                    exclusive_minimuminclusive_minimum = 0
            
            
            class purpose_message(
                schemas.StrSchema
            ):
            
            
                class MetaOapg:
                    min_length = 1
                    x_konfig_strip = True
            
            
            class expiry_time(
                schemas.IntSchema
            ):
            
            
                class MetaOapg:
                    exclusive_minimuminclusive_minimum = 0
            __annotations__ = {
                "reference_id": reference_id,
                "payer_upi": payer_upi,
                "payee_account": payee_account,
                "amount": amount,
                "purpose_message": purpose_message,
                "expiry_time": expiry_time,
            }
    
    payee_account: MetaOapg.properties.payee_account
    amount: MetaOapg.properties.amount
    reference_id: MetaOapg.properties.reference_id
    payer_upi: MetaOapg.properties.payer_upi
    purpose_message: MetaOapg.properties.purpose_message
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["reference_id"]) -> MetaOapg.properties.reference_id: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["payer_upi"]) -> MetaOapg.properties.payer_upi: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["payee_account"]) -> MetaOapg.properties.payee_account: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["amount"]) -> MetaOapg.properties.amount: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["purpose_message"]) -> MetaOapg.properties.purpose_message: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["expiry_time"]) -> MetaOapg.properties.expiry_time: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["reference_id", "payer_upi", "payee_account", "amount", "purpose_message", "expiry_time", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["reference_id"]) -> MetaOapg.properties.reference_id: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["payer_upi"]) -> MetaOapg.properties.payer_upi: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["payee_account"]) -> MetaOapg.properties.payee_account: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["amount"]) -> MetaOapg.properties.amount: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["purpose_message"]) -> MetaOapg.properties.purpose_message: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["expiry_time"]) -> typing.Union[MetaOapg.properties.expiry_time, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["reference_id", "payer_upi", "payee_account", "amount", "purpose_message", "expiry_time", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        payee_account: typing.Union[MetaOapg.properties.payee_account, str, ],
        amount: typing.Union[MetaOapg.properties.amount, decimal.Decimal, int, float, ],
        reference_id: typing.Union[MetaOapg.properties.reference_id, str, ],
        payer_upi: typing.Union[MetaOapg.properties.payer_upi, str, ],
        purpose_message: typing.Union[MetaOapg.properties.purpose_message, str, ],
        expiry_time: typing.Union[MetaOapg.properties.expiry_time, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'IssueCollectRequestRequest':
        return super().__new__(
            cls,
            *args,
            payee_account=payee_account,
            amount=amount,
            reference_id=reference_id,
            payer_upi=payer_upi,
            purpose_message=purpose_message,
            expiry_time=expiry_time,
            _configuration=_configuration,
            **kwargs,
        )
