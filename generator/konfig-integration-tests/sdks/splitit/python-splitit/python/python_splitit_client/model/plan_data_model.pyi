# coding: utf-8

"""
    splitit-web-api-v3

    Splitit's Web API

    The version of the OpenAPI document: 1.0.0
    Generated by: https://konfigthis.com
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

from python_splitit_client import schemas  # noqa: F401


class PlanDataModel(
    schemas.DictSchema
):
    """
    This class is auto generated by Konfig (https://konfigthis.com)
    """


    class MetaOapg:
        required = {
            "PurchaseMethod",
            "TotalAmount",
        }
        
        class properties:
            TotalAmount = schemas.NumberSchema
        
            @staticmethod
            def PurchaseMethod() -> typing.Type['PurchaseMethod']:
                return PurchaseMethod
            Currency = schemas.StrSchema
            NumberOfInstallments = schemas.Int32Schema
            TerminalId = schemas.StrSchema
            RefOrderNumber = schemas.StrSchema
        
            @staticmethod
            def ExtendedParams() -> typing.Type['PlanDataModelExtendedParams']:
                return PlanDataModelExtendedParams
            FirstInstallmentAmount = schemas.NumberSchema
            FirstInstallmentDate = schemas.DateTimeSchema
            __annotations__ = {
                "TotalAmount": TotalAmount,
                "PurchaseMethod": PurchaseMethod,
                "Currency": Currency,
                "NumberOfInstallments": NumberOfInstallments,
                "TerminalId": TerminalId,
                "RefOrderNumber": RefOrderNumber,
                "ExtendedParams": ExtendedParams,
                "FirstInstallmentAmount": FirstInstallmentAmount,
                "FirstInstallmentDate": FirstInstallmentDate,
            }
    
    PurchaseMethod: 'PurchaseMethod'
    TotalAmount: MetaOapg.properties.TotalAmount
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["TotalAmount"]) -> MetaOapg.properties.TotalAmount: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["PurchaseMethod"]) -> 'PurchaseMethod': ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["Currency"]) -> MetaOapg.properties.Currency: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["NumberOfInstallments"]) -> MetaOapg.properties.NumberOfInstallments: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["TerminalId"]) -> MetaOapg.properties.TerminalId: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["RefOrderNumber"]) -> MetaOapg.properties.RefOrderNumber: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["ExtendedParams"]) -> 'PlanDataModelExtendedParams': ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["FirstInstallmentAmount"]) -> MetaOapg.properties.FirstInstallmentAmount: ...
    
    @typing.overload
    def __getitem__(self, name: typing_extensions.Literal["FirstInstallmentDate"]) -> MetaOapg.properties.FirstInstallmentDate: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> schemas.UnsetAnyTypeSchema: ...
    
    def __getitem__(self, name: typing.Union[typing_extensions.Literal["TotalAmount", "PurchaseMethod", "Currency", "NumberOfInstallments", "TerminalId", "RefOrderNumber", "ExtendedParams", "FirstInstallmentAmount", "FirstInstallmentDate", ], str]):
        # dict_instance[name] accessor
        return super().__getitem__(name)
    
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["TotalAmount"]) -> MetaOapg.properties.TotalAmount: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["PurchaseMethod"]) -> 'PurchaseMethod': ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["Currency"]) -> typing.Union[MetaOapg.properties.Currency, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["NumberOfInstallments"]) -> typing.Union[MetaOapg.properties.NumberOfInstallments, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["TerminalId"]) -> typing.Union[MetaOapg.properties.TerminalId, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["RefOrderNumber"]) -> typing.Union[MetaOapg.properties.RefOrderNumber, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["ExtendedParams"]) -> typing.Union['PlanDataModelExtendedParams', schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["FirstInstallmentAmount"]) -> typing.Union[MetaOapg.properties.FirstInstallmentAmount, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: typing_extensions.Literal["FirstInstallmentDate"]) -> typing.Union[MetaOapg.properties.FirstInstallmentDate, schemas.Unset]: ...
    
    @typing.overload
    def get_item_oapg(self, name: str) -> typing.Union[schemas.UnsetAnyTypeSchema, schemas.Unset]: ...
    
    def get_item_oapg(self, name: typing.Union[typing_extensions.Literal["TotalAmount", "PurchaseMethod", "Currency", "NumberOfInstallments", "TerminalId", "RefOrderNumber", "ExtendedParams", "FirstInstallmentAmount", "FirstInstallmentDate", ], str]):
        return super().get_item_oapg(name)
    

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        PurchaseMethod: 'PurchaseMethod',
        TotalAmount: typing.Union[MetaOapg.properties.TotalAmount, decimal.Decimal, int, float, ],
        Currency: typing.Union[MetaOapg.properties.Currency, str, schemas.Unset] = schemas.unset,
        NumberOfInstallments: typing.Union[MetaOapg.properties.NumberOfInstallments, decimal.Decimal, int, schemas.Unset] = schemas.unset,
        TerminalId: typing.Union[MetaOapg.properties.TerminalId, str, schemas.Unset] = schemas.unset,
        RefOrderNumber: typing.Union[MetaOapg.properties.RefOrderNumber, str, schemas.Unset] = schemas.unset,
        ExtendedParams: typing.Union['PlanDataModelExtendedParams', schemas.Unset] = schemas.unset,
        FirstInstallmentAmount: typing.Union[MetaOapg.properties.FirstInstallmentAmount, decimal.Decimal, int, float, schemas.Unset] = schemas.unset,
        FirstInstallmentDate: typing.Union[MetaOapg.properties.FirstInstallmentDate, str, datetime, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'PlanDataModel':
        return super().__new__(
            cls,
            *args,
            PurchaseMethod=PurchaseMethod,
            TotalAmount=TotalAmount,
            Currency=Currency,
            NumberOfInstallments=NumberOfInstallments,
            TerminalId=TerminalId,
            RefOrderNumber=RefOrderNumber,
            ExtendedParams=ExtendedParams,
            FirstInstallmentAmount=FirstInstallmentAmount,
            FirstInstallmentDate=FirstInstallmentDate,
            _configuration=_configuration,
            **kwargs,
        )

from python_splitit_client.model.plan_data_model_extended_params import PlanDataModelExtendedParams
from python_splitit_client.model.purchase_method import PurchaseMethod
