# coding: utf-8

"""
    SnapTrade

    Connect brokerage accounts to your app for live positions and trading

    The version of the OpenAPI document: 1.0.0
    Contact: api@snaptrade.com
    Created by: https://snaptrade.com/
"""

from dataclasses import dataclass
import typing_extensions
import urllib3
from snaptrade_client.request_before_hook import request_before_hook
import json
from urllib3._collections import HTTPHeaderDict

from snaptrade_client.api_response import AsyncGeneratorResponse
from snaptrade_client import api_client, exceptions
from datetime import date, datetime  # noqa: F401
import decimal  # noqa: F401
import functools  # noqa: F401
import io  # noqa: F401
import re  # noqa: F401
import typing  # noqa: F401
import typing_extensions  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from snaptrade_client import schemas  # noqa: F401

from snaptrade_client.model.action import Action as ActionSchema
from snaptrade_client.model.model400_failed_request_response import Model400FailedRequestResponse as Model400FailedRequestResponseSchema
from snaptrade_client.model.stop_price import StopPrice as StopPriceSchema
from snaptrade_client.model.units_nullable import UnitsNullable as UnitsNullableSchema
from snaptrade_client.model.notional_value_nullable import NotionalValueNullable as NotionalValueNullableSchema
from snaptrade_client.model.account_order_record import AccountOrderRecord as AccountOrderRecordSchema
from snaptrade_client.model.order_type import OrderType as OrderTypeSchema
from snaptrade_client.model.manual_trade_form import ManualTradeForm as ManualTradeFormSchema
from snaptrade_client.model.model403_failed_request_response import Model403FailedRequestResponse as Model403FailedRequestResponseSchema
from snaptrade_client.model.price import Price as PriceSchema
from snaptrade_client.model.time_in_force_strict import TimeInForceStrict as TimeInForceStrictSchema

from snaptrade_client.type.action import Action
from snaptrade_client.type.notional_value_nullable import NotionalValueNullable
from snaptrade_client.type.units_nullable import UnitsNullable
from snaptrade_client.type.manual_trade_form import ManualTradeForm
from snaptrade_client.type.model400_failed_request_response import Model400FailedRequestResponse
from snaptrade_client.type.time_in_force_strict import TimeInForceStrict
from snaptrade_client.type.stop_price import StopPrice
from snaptrade_client.type.model403_failed_request_response import Model403FailedRequestResponse
from snaptrade_client.type.account_order_record import AccountOrderRecord
from snaptrade_client.type.price import Price
from snaptrade_client.type.order_type import OrderType

# Query params
UserIdSchema = schemas.StrSchema
UserSecretSchema = schemas.StrSchema
RequestRequiredQueryParams = typing_extensions.TypedDict(
    'RequestRequiredQueryParams',
    {
        'userId': typing.Union[UserIdSchema, str, ],
        'userSecret': typing.Union[UserSecretSchema, str, ],
    }
)
RequestOptionalQueryParams = typing_extensions.TypedDict(
    'RequestOptionalQueryParams',
    {
    },
    total=False
)


class RequestQueryParams(RequestRequiredQueryParams, RequestOptionalQueryParams):
    pass


request_query_user_id = api_client.QueryParameter(
    name="userId",
    style=api_client.ParameterStyle.FORM,
    schema=UserIdSchema,
    required=True,
    explode=True,
)
request_query_user_secret = api_client.QueryParameter(
    name="userSecret",
    style=api_client.ParameterStyle.FORM,
    schema=UserSecretSchema,
    required=True,
    explode=True,
)
# body param
SchemaForRequestBodyApplicationJson = ManualTradeFormSchema


request_body_manual_trade_form = api_client.RequestBody(
    content={
        'application/json': api_client.MediaType(
            schema=SchemaForRequestBodyApplicationJson),
    },
    required=True,
)
SchemaFor200ResponseBodyApplicationJson = AccountOrderRecordSchema


@dataclass
class ApiResponseFor200(api_client.ApiResponse):
    body: AccountOrderRecord


@dataclass
class ApiResponseFor200Async(api_client.AsyncApiResponse):
    body: AccountOrderRecord


_response_for_200 = api_client.OpenApiResponse(
    response_cls=ApiResponseFor200,
    response_cls_async=ApiResponseFor200Async,
    content={
        'application/json': api_client.MediaType(
            schema=SchemaFor200ResponseBodyApplicationJson),
    },
)
SchemaFor400ResponseBodyApplicationJson = Model400FailedRequestResponseSchema


@dataclass
class ApiResponseFor400(api_client.ApiResponse):
    body: Model400FailedRequestResponse


@dataclass
class ApiResponseFor400Async(api_client.AsyncApiResponse):
    body: Model400FailedRequestResponse


_response_for_400 = api_client.OpenApiResponse(
    response_cls=ApiResponseFor400,
    response_cls_async=ApiResponseFor400Async,
    content={
        'application/json': api_client.MediaType(
            schema=SchemaFor400ResponseBodyApplicationJson),
    },
)
SchemaFor403ResponseBodyApplicationJson = Model403FailedRequestResponseSchema


@dataclass
class ApiResponseFor403(api_client.ApiResponse):
    body: Model403FailedRequestResponse


@dataclass
class ApiResponseFor403Async(api_client.AsyncApiResponse):
    body: Model403FailedRequestResponse


_response_for_403 = api_client.OpenApiResponse(
    response_cls=ApiResponseFor403,
    response_cls_async=ApiResponseFor403Async,
    content={
        'application/json': api_client.MediaType(
            schema=SchemaFor403ResponseBodyApplicationJson),
    },
)


@dataclass
class ApiResponseFor500(api_client.ApiResponse):
    body: schemas.Unset = schemas.unset


@dataclass
class ApiResponseFor500Async(api_client.AsyncApiResponse):
    body: schemas.Unset = schemas.unset


_response_for_500 = api_client.OpenApiResponse(
    response_cls=ApiResponseFor500,
    response_cls_async=ApiResponseFor500Async,
)
_all_accept_content_types = (
    'application/json',
)


class BaseApi(api_client.Api):

    def _place_force_order_mapped_args(
        self,
        body: typing.Optional[ManualTradeForm] = None,
        user_id: typing.Optional[str] = None,
        user_secret: typing.Optional[str] = None,
        account_id: typing.Optional[str] = None,
        action: typing.Optional[Action] = None,
        order_type: typing.Optional[OrderType] = None,
        price: typing.Optional[Price] = None,
        stop: typing.Optional[StopPrice] = None,
        time_in_force: typing.Optional[TimeInForceStrict] = None,
        units: typing.Optional[UnitsNullable] = None,
        universal_symbol_id: typing.Optional[str] = None,
        notional_value: typing.Optional[NotionalValueNullable] = None,
        query_params: typing.Optional[dict] = {},
    ) -> api_client.MappedArgs:
        args: api_client.MappedArgs = api_client.MappedArgs()
        _query_params = {}
        _body = {}
        if account_id is not None:
            _body["account_id"] = account_id
        if action is not None:
            _body["action"] = action
        if order_type is not None:
            _body["order_type"] = order_type
        if price is not None:
            _body["price"] = price
        if stop is not None:
            _body["stop"] = stop
        if time_in_force is not None:
            _body["time_in_force"] = time_in_force
        if units is not None:
            _body["units"] = units
        if universal_symbol_id is not None:
            _body["universal_symbol_id"] = universal_symbol_id
        if notional_value is not None:
            _body["notional_value"] = notional_value
        args.body = body if body is not None else _body
        if user_id is not None:
            _query_params["userId"] = user_id
        if user_secret is not None:
            _query_params["userSecret"] = user_secret
        args.query = query_params if query_params else _query_params
        return args

    async def _aplace_force_order_oapg(
        self,
        body: typing.Any = None,
        query_params: typing.Optional[dict] = {},
        skip_deserialization: bool = True,
        timeout: typing.Optional[typing.Union[float, typing.Tuple]] = None,
        accept_content_types: typing.Tuple[str] = _all_accept_content_types,
        content_type: str = 'application/json',
        stream: bool = False,
        **kwargs,
    ) -> typing.Union[
        ApiResponseFor200Async,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        """
        Place a trade with NO validation.
        :param skip_deserialization: If true then api_response.response will be set but
            api_response.body and api_response.headers will not be deserialized into schema
            class instances
        """
        self._verify_typed_dict_inputs_oapg(RequestQueryParams, query_params)
        used_path = path.value
    
        prefix_separator_iterator = None
        for parameter in (
            request_query_user_id,
            request_query_user_secret,
        ):
            parameter_data = query_params.get(parameter.name, schemas.unset)
            if parameter_data is schemas.unset:
                continue
            if prefix_separator_iterator is None:
                prefix_separator_iterator = parameter.get_prefix_separator_iterator()
            serialized_data = parameter.serialize(parameter_data, prefix_separator_iterator)
            for serialized_value in serialized_data.values():
                used_path += serialized_value
    
        _headers = HTTPHeaderDict()
        # TODO add cookie handling
        if accept_content_types:
            for accept_content_type in accept_content_types:
                _headers.add('Accept', accept_content_type)
        method = 'post'.upper()
        _headers.add('Content-Type', content_type)
    
        if body is schemas.unset:
            raise exceptions.ApiValueError(
                'The required body parameter has an invalid value of: unset. Set a valid value instead')
        _fields = None
        _body = None
        request_before_hook(
            resource_path=used_path,
            method=method,
            configuration=self.api_client.configuration,
            path_template='/trade/place',
            body=body,
            auth_settings=_auth,
            headers=_headers,
        )
        serialized_data = request_body_manual_trade_form.serialize(body, content_type)
        if 'fields' in serialized_data:
            _fields = serialized_data['fields']
        elif 'body' in serialized_data:
            _body = serialized_data['body']
    
        response = await self.api_client.async_call_api(
            resource_path=used_path,
            method=method,
            headers=_headers,
            fields=_fields,
            serialized_body=_body,
            body=body,
            auth_settings=_auth,
            prefix_separator_iterator=prefix_separator_iterator,
            timeout=timeout,
            **kwargs
        )
    
        if stream:
            if not 200 <= response.http_response.status <= 299:
                body = (await response.http_response.content.read()).decode("utf-8")
                raise exceptions.ApiStreamingException(
                    status=response.http_response.status,
                    reason=response.http_response.reason,
                    body=body,
                )
    
            async def stream_iterator():
                """
                iterates over response.http_response.content and closes connection once iteration has finished
                """
                async for line in response.http_response.content:
                    if line == b'\r\n':
                        continue
                    yield line
                response.http_response.close()
                await response.session.close()
            return AsyncGeneratorResponse(
                content=stream_iterator(),
                headers=response.http_response.headers,
                status=response.http_response.status,
                response=response.http_response
            )
    
        response_for_status = _status_code_to_response.get(str(response.http_response.status))
        if response_for_status:
            api_response = await response_for_status.deserialize_async(
                                                    response,
                                                    self.api_client.configuration,
                                                    skip_deserialization=skip_deserialization
                                                )
        else:
            # If response data is JSON then deserialize for SDK consumer convenience
            is_json = api_client.JSONDetector._content_type_is_json(response.http_response.headers.get('Content-Type', ''))
            api_response = api_client.ApiResponseWithoutDeserializationAsync(
                body=await response.http_response.json() if is_json else await response.http_response.text(),
                response=response.http_response,
                round_trip_time=response.round_trip_time,
                status=response.http_response.status,
                headers=response.http_response.headers,
            )
    
        if not 200 <= api_response.status <= 299:
            raise exceptions.ApiException(api_response=api_response)
    
        # cleanup session / response
        response.http_response.close()
        await response.session.close()
    
        return api_response


    def _place_force_order_oapg(
        self,
        body: typing.Any = None,
        query_params: typing.Optional[dict] = {},
        skip_deserialization: bool = True,
        timeout: typing.Optional[typing.Union[float, typing.Tuple]] = None,
        accept_content_types: typing.Tuple[str] = _all_accept_content_types,
        content_type: str = 'application/json',
        stream: bool = False,
    ) -> typing.Union[
        ApiResponseFor200,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        """
        Place a trade with NO validation.
        :param skip_deserialization: If true then api_response.response will be set but
            api_response.body and api_response.headers will not be deserialized into schema
            class instances
        """
        self._verify_typed_dict_inputs_oapg(RequestQueryParams, query_params)
        used_path = path.value
    
        prefix_separator_iterator = None
        for parameter in (
            request_query_user_id,
            request_query_user_secret,
        ):
            parameter_data = query_params.get(parameter.name, schemas.unset)
            if parameter_data is schemas.unset:
                continue
            if prefix_separator_iterator is None:
                prefix_separator_iterator = parameter.get_prefix_separator_iterator()
            serialized_data = parameter.serialize(parameter_data, prefix_separator_iterator)
            for serialized_value in serialized_data.values():
                used_path += serialized_value
    
        _headers = HTTPHeaderDict()
        # TODO add cookie handling
        if accept_content_types:
            for accept_content_type in accept_content_types:
                _headers.add('Accept', accept_content_type)
        method = 'post'.upper()
        _headers.add('Content-Type', content_type)
    
        if body is schemas.unset:
            raise exceptions.ApiValueError(
                'The required body parameter has an invalid value of: unset. Set a valid value instead')
        _fields = None
        _body = None
        request_before_hook(
            resource_path=used_path,
            method=method,
            configuration=self.api_client.configuration,
            path_template='/trade/place',
            body=body,
            auth_settings=_auth,
            headers=_headers,
        )
        serialized_data = request_body_manual_trade_form.serialize(body, content_type)
        if 'fields' in serialized_data:
            _fields = serialized_data['fields']
        elif 'body' in serialized_data:
            _body = serialized_data['body']
    
        response = self.api_client.call_api(
            resource_path=used_path,
            method=method,
            headers=_headers,
            fields=_fields,
            serialized_body=_body,
            body=body,
            auth_settings=_auth,
            prefix_separator_iterator=prefix_separator_iterator,
            timeout=timeout,
        )
    
        response_for_status = _status_code_to_response.get(str(response.http_response.status))
        if response_for_status:
            api_response = response_for_status.deserialize(
                                                    response,
                                                    self.api_client.configuration,
                                                    skip_deserialization=skip_deserialization
                                                )
        else:
            # If response data is JSON then deserialize for SDK consumer convenience
            is_json = api_client.JSONDetector._content_type_is_json(response.http_response.headers.get('Content-Type', ''))
            api_response = api_client.ApiResponseWithoutDeserialization(
                body=json.loads(response.http_response.data) if is_json else response.http_response.data,
                response=response.http_response,
                round_trip_time=response.round_trip_time,
                status=response.http_response.status,
                headers=response.http_response.headers,
            )
    
        if not 200 <= api_response.status <= 299:
            raise exceptions.ApiException(api_response=api_response)
    
        return api_response


class PlaceForceOrder(BaseApi):
    # this class is used by api classes that refer to endpoints with operationId fn names

    async def aplace_force_order(
        self,
        body: typing.Optional[ManualTradeForm] = None,
        user_id: typing.Optional[str] = None,
        user_secret: typing.Optional[str] = None,
        account_id: typing.Optional[str] = None,
        action: typing.Optional[Action] = None,
        order_type: typing.Optional[OrderType] = None,
        price: typing.Optional[Price] = None,
        stop: typing.Optional[StopPrice] = None,
        time_in_force: typing.Optional[TimeInForceStrict] = None,
        units: typing.Optional[UnitsNullable] = None,
        universal_symbol_id: typing.Optional[str] = None,
        notional_value: typing.Optional[NotionalValueNullable] = None,
        query_params: typing.Optional[dict] = {},
        **kwargs,
    ) -> typing.Union[
        ApiResponseFor200Async,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        args = self._place_force_order_mapped_args(
            body=body,
            query_params=query_params,
            user_id=user_id,
            user_secret=user_secret,
            account_id=account_id,
            action=action,
            order_type=order_type,
            price=price,
            stop=stop,
            time_in_force=time_in_force,
            units=units,
            universal_symbol_id=universal_symbol_id,
            notional_value=notional_value,
        )
        return await self._aplace_force_order_oapg(
            body=args.body,
            query_params=args.query,
            **kwargs,
        )
    
    def place_force_order(
        self,
        body: typing.Optional[ManualTradeForm] = None,
        user_id: typing.Optional[str] = None,
        user_secret: typing.Optional[str] = None,
        account_id: typing.Optional[str] = None,
        action: typing.Optional[Action] = None,
        order_type: typing.Optional[OrderType] = None,
        price: typing.Optional[Price] = None,
        stop: typing.Optional[StopPrice] = None,
        time_in_force: typing.Optional[TimeInForceStrict] = None,
        units: typing.Optional[UnitsNullable] = None,
        universal_symbol_id: typing.Optional[str] = None,
        notional_value: typing.Optional[NotionalValueNullable] = None,
        query_params: typing.Optional[dict] = {},
    ) -> typing.Union[
        ApiResponseFor200,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        args = self._place_force_order_mapped_args(
            body=body,
            query_params=query_params,
            user_id=user_id,
            user_secret=user_secret,
            account_id=account_id,
            action=action,
            order_type=order_type,
            price=price,
            stop=stop,
            time_in_force=time_in_force,
            units=units,
            universal_symbol_id=universal_symbol_id,
            notional_value=notional_value,
        )
        return self._place_force_order_oapg(
            body=args.body,
            query_params=args.query,
        )

class ApiForpost(BaseApi):
    # this class is used by api classes that refer to endpoints by path and http method names

    async def apost(
        self,
        body: typing.Optional[ManualTradeForm] = None,
        user_id: typing.Optional[str] = None,
        user_secret: typing.Optional[str] = None,
        account_id: typing.Optional[str] = None,
        action: typing.Optional[Action] = None,
        order_type: typing.Optional[OrderType] = None,
        price: typing.Optional[Price] = None,
        stop: typing.Optional[StopPrice] = None,
        time_in_force: typing.Optional[TimeInForceStrict] = None,
        units: typing.Optional[UnitsNullable] = None,
        universal_symbol_id: typing.Optional[str] = None,
        notional_value: typing.Optional[NotionalValueNullable] = None,
        query_params: typing.Optional[dict] = {},
        **kwargs,
    ) -> typing.Union[
        ApiResponseFor200Async,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        args = self._place_force_order_mapped_args(
            body=body,
            query_params=query_params,
            user_id=user_id,
            user_secret=user_secret,
            account_id=account_id,
            action=action,
            order_type=order_type,
            price=price,
            stop=stop,
            time_in_force=time_in_force,
            units=units,
            universal_symbol_id=universal_symbol_id,
            notional_value=notional_value,
        )
        return await self._aplace_force_order_oapg(
            body=args.body,
            query_params=args.query,
            **kwargs,
        )
    
    def post(
        self,
        body: typing.Optional[ManualTradeForm] = None,
        user_id: typing.Optional[str] = None,
        user_secret: typing.Optional[str] = None,
        account_id: typing.Optional[str] = None,
        action: typing.Optional[Action] = None,
        order_type: typing.Optional[OrderType] = None,
        price: typing.Optional[Price] = None,
        stop: typing.Optional[StopPrice] = None,
        time_in_force: typing.Optional[TimeInForceStrict] = None,
        units: typing.Optional[UnitsNullable] = None,
        universal_symbol_id: typing.Optional[str] = None,
        notional_value: typing.Optional[NotionalValueNullable] = None,
        query_params: typing.Optional[dict] = {},
    ) -> typing.Union[
        ApiResponseFor200,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        args = self._place_force_order_mapped_args(
            body=body,
            query_params=query_params,
            user_id=user_id,
            user_secret=user_secret,
            account_id=account_id,
            action=action,
            order_type=order_type,
            price=price,
            stop=stop,
            time_in_force=time_in_force,
            units=units,
            universal_symbol_id=universal_symbol_id,
            notional_value=notional_value,
        )
        return self._place_force_order_oapg(
            body=args.body,
            query_params=args.query,
        )

