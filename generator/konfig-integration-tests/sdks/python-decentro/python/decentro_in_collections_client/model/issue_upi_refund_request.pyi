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


class IssueUpiRefundRequest(
    schemas.DictSchema
):
    """
    This class is auto generated
    """


    class MetaOapg:
        required = {
            "reference_id",
        }
        
        class properties:
            
            
            class reference_id(
                schemas.StrSchema
            ):
                pass
            transaction_id = schemas.StrSchema
            bank_reference_number = schemas.StrSchema
            purpose_message = schemas.StrSchema
            __annotations__ = {
                "reference_id": reference_id,
                "transaction_id": transaction_id,
                "bank_reference_number": bank_reference_number,
                "purpose_message": purpose_message,
            }
    
    reference_id: MetaOapg.properties.reference_id
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["reference_id"]) -> MetaOapg.properties.reference_id: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["transaction_id"]) -> MetaOapg.properties.transaction_id: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["bank_reference_number"]) -> MetaOapg.properties.bank_reference_number: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["purpose_message"]) -> MetaOapg.properties.purpose_message: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["reference_id", "transaction_id", "bank_reference_number", "purpose_message", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["reference_id"]) -> MetaOapg.properties.reference_id: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["transaction_id"]) -> typing.Union[MetaOapg.properties.transaction_id, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["bank_reference_number"]) -> typing.Union[MetaOapg.properties.bank_reference_number, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["purpose_message"]) -> typing.Union[MetaOapg.properties.purpose_message, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["reference_id", "transaction_id", "bank_reference_number", "purpose_message", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        reference_id: typing.Union[MetaOapg.properties.reference_id, str, ],
        transaction_id: typing.Union[MetaOapg.properties.transaction_id, str, schemas.Unset] = schemas.unset,
        bank_reference_number: typing.Union[MetaOapg.properties.bank_reference_number, str, schemas.Unset] = schemas.unset,
        purpose_message: typing.Union[MetaOapg.properties.purpose_message, str, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'IssueUpiRefundRequest':
        return super().__new__(
            cls,
            *args,
            reference_id=reference_id,
            transaction_id=transaction_id,
            bank_reference_number=bank_reference_number,
            purpose_message=purpose_message,
            _configuration=_configuration,
            **kwargs,
        )
