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

from snaptrade_client.model.performance_custom import PerformanceCustom as PerformanceCustomSchema

from snaptrade_client.type.performance_custom import PerformanceCustom

# Query params
StartDateSchema = schemas.DateSchema
EndDateSchema = schemas.DateSchema
AccountsSchema = schemas.StrSchema
DetailedSchema = schemas.BoolSchema
FrequencySchema = schemas.StrSchema
UserIdSchema = schemas.StrSchema
UserSecretSchema = schemas.StrSchema
RequestRequiredQueryParams = typing_extensions.TypedDict(
    'RequestRequiredQueryParams',
    {
        'startDate': typing.Union[StartDateSchema, str, date, ],
        'endDate': typing.Union[EndDateSchema, str, date, ],
        'userId': typing.Union[UserIdSchema, str, ],
        'userSecret': typing.Union[UserSecretSchema, str, ],
    }
)
RequestOptionalQueryParams = typing_extensions.TypedDict(
    'RequestOptionalQueryParams',
    {
        'accounts': typing.Union[AccountsSchema, str, ],
        'detailed': typing.Union[DetailedSchema, bool, ],
        'frequency': typing.Union[FrequencySchema, str, ],
    },
    total=False
)


class RequestQueryParams(RequestRequiredQueryParams, RequestOptionalQueryParams):
    pass


request_query_start_date = api_client.QueryParameter(
    name="startDate",
    style=api_client.ParameterStyle.FORM,
    schema=StartDateSchema,
    required=True,
    explode=True,
)
request_query_end_date = api_client.QueryParameter(
    name="endDate",
    style=api_client.ParameterStyle.FORM,
    schema=EndDateSchema,
    required=True,
    explode=True,
)
request_query_accounts = api_client.QueryParameter(
    name="accounts",
    style=api_client.ParameterStyle.FORM,
    schema=AccountsSchema,
    explode=True,
)
request_query_detailed = api_client.QueryParameter(
    name="detailed",
    style=api_client.ParameterStyle.FORM,
    schema=DetailedSchema,
    explode=True,
)
request_query_frequency = api_client.QueryParameter(
    name="frequency",
    style=api_client.ParameterStyle.FORM,
    schema=FrequencySchema,
    explode=True,
)
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
SchemaFor200ResponseBodyApplicationJson = PerformanceCustomSchema


@dataclass
class ApiResponseFor200(api_client.ApiResponse):
    body: PerformanceCustom


@dataclass
class ApiResponseFor200Async(api_client.AsyncApiResponse):
    body: PerformanceCustom


_response_for_200 = api_client.OpenApiResponse(
    response_cls=ApiResponseFor200,
    response_cls_async=ApiResponseFor200Async,
    content={
        'application/json': api_client.MediaType(
            schema=SchemaFor200ResponseBodyApplicationJson),
    },
)


@dataclass
class ApiResponseForDefault(api_client.ApiResponse):
    body: schemas.Unset = schemas.unset


@dataclass
class ApiResponseForDefaultAsync(api_client.AsyncApiResponse):
    body: schemas.Unset = schemas.unset


_response_for_default = api_client.OpenApiResponse(
    response_cls=ApiResponseForDefault,
)
_all_accept_content_types = (
    'application/json',
)


class BaseApi(api_client.Api):

    def _get_reporting_custom_range_mapped_args(
        self,
        start_date: typing.Optional[date] = None,
        end_date: typing.Optional[date] = None,
        user_id: typing.Optional[str] = None,
        user_secret: typing.Optional[str] = None,
        accounts: typing.Optional[str] = None,
        detailed: typing.Optional[bool] = None,
        frequency: typing.Optional[str] = None,
        query_params: typing.Optional[dict] = {},
    ) -> api_client.MappedArgs:
        args: api_client.MappedArgs = api_client.MappedArgs()
        _query_params = {}
        if start_date is not None:
            _query_params["startDate"] = start_date
        if end_date is not None:
            _query_params["endDate"] = end_date
        if accounts is not None:
            _query_params["accounts"] = accounts
        if detailed is not None:
            _query_params["detailed"] = detailed
        if frequency is not None:
            _query_params["frequency"] = frequency
        if user_id is not None:
            _query_params["userId"] = user_id
        if user_secret is not None:
            _query_params["userSecret"] = user_secret
        args.query = query_params if query_params else _query_params
        return args

    async def _aget_reporting_custom_range_oapg(
        self,
        query_params: typing.Optional[dict] = {},
        skip_deserialization: bool = True,
        timeout: typing.Optional[typing.Union[float, typing.Tuple]] = None,
        accept_content_types: typing.Tuple[str] = _all_accept_content_types,
        stream: bool = False,
        **kwargs,
    ) -> typing.Union[
        ApiResponseFor200Async,
        ApiResponseForDefaultAsync,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        """
        Get performance information for a specific timeframe
        :param skip_deserialization: If true then api_response.response will be set but
            api_response.body and api_response.headers will not be deserialized into schema
            class instances
        """
        self._verify_typed_dict_inputs_oapg(RequestQueryParams, query_params)
        used_path = path.value
    
        prefix_separator_iterator = None
        for parameter in (
            request_query_start_date,
            request_query_end_date,
            request_query_accounts,
            request_query_detailed,
            request_query_frequency,
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
        method = 'get'.upper()
        request_before_hook(
            resource_path=used_path,
            method=method,
            configuration=self.api_client.configuration,
            path_template='/performance/custom',
            auth_settings=_auth,
            headers=_headers,
        )
    
        response = await self.api_client.async_call_api(
            resource_path=used_path,
            method=method,
            headers=_headers,
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
            default_response = _status_code_to_response.get('default')
            if default_response:
                api_response = default_response.deserialize(
                                                    response,
                                                    self.api_client.configuration,
                                                    skip_deserialization=skip_deserialization
                                                )
            else:
                api_response = api_client.ApiResponseWithoutDeserializationAsync(
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


    def _get_reporting_custom_range_oapg(
        self,
        query_params: typing.Optional[dict] = {},
        skip_deserialization: bool = True,
        timeout: typing.Optional[typing.Union[float, typing.Tuple]] = None,
        accept_content_types: typing.Tuple[str] = _all_accept_content_types,
        stream: bool = False,
    ) -> typing.Union[
        ApiResponseFor200,
        ApiResponseForDefault,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        """
        Get performance information for a specific timeframe
        :param skip_deserialization: If true then api_response.response will be set but
            api_response.body and api_response.headers will not be deserialized into schema
            class instances
        """
        self._verify_typed_dict_inputs_oapg(RequestQueryParams, query_params)
        used_path = path.value
    
        prefix_separator_iterator = None
        for parameter in (
            request_query_start_date,
            request_query_end_date,
            request_query_accounts,
            request_query_detailed,
            request_query_frequency,
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
        method = 'get'.upper()
        request_before_hook(
            resource_path=used_path,
            method=method,
            configuration=self.api_client.configuration,
            path_template='/performance/custom',
            auth_settings=_auth,
            headers=_headers,
        )
    
        response = self.api_client.call_api(
            resource_path=used_path,
            method=method,
            headers=_headers,
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
            default_response = _status_code_to_response.get('default')
            if default_response:
                api_response = default_response.deserialize(
                                                    response,
                                                    self.api_client.configuration,
                                                    skip_deserialization=skip_deserialization
                                                )
            else:
                api_response = api_client.ApiResponseWithoutDeserialization(
                    response=response.http_response,
                    round_trip_time=response.round_trip_time,
                    status=response.http_response.status,
                    headers=response.http_response.headers,
                )
    
        if not 200 <= api_response.status <= 299:
            raise exceptions.ApiException(api_response=api_response)
    
        return api_response


class GetReportingCustomRange(BaseApi):
    # this class is used by api classes that refer to endpoints with operationId fn names

    @api_client.DeprecationWarningOnce(prefix="transactions_and_reporting")
    async def aget_reporting_custom_range(
        self,
        start_date: typing.Optional[date] = None,
        end_date: typing.Optional[date] = None,
        user_id: typing.Optional[str] = None,
        user_secret: typing.Optional[str] = None,
        accounts: typing.Optional[str] = None,
        detailed: typing.Optional[bool] = None,
        frequency: typing.Optional[str] = None,
        query_params: typing.Optional[dict] = {},
        **kwargs,
    ) -> typing.Union[
        ApiResponseFor200Async,
        ApiResponseForDefaultAsync,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        args = self._get_reporting_custom_range_mapped_args(
            query_params=query_params,
            start_date=start_date,
            end_date=end_date,
            user_id=user_id,
            user_secret=user_secret,
            accounts=accounts,
            detailed=detailed,
            frequency=frequency,
        )
        return await self._aget_reporting_custom_range_oapg(
            query_params=args.query,
            **kwargs,
        )
    
    @api_client.DeprecationWarningOnce(prefix="transactions_and_reporting")
    def get_reporting_custom_range(
        self,
        start_date: typing.Optional[date] = None,
        end_date: typing.Optional[date] = None,
        user_id: typing.Optional[str] = None,
        user_secret: typing.Optional[str] = None,
        accounts: typing.Optional[str] = None,
        detailed: typing.Optional[bool] = None,
        frequency: typing.Optional[str] = None,
        query_params: typing.Optional[dict] = {},
    ) -> typing.Union[
        ApiResponseFor200,
        ApiResponseForDefault,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        """ Returns performance information (contributions, dividends, rate of return, etc) for a specific timeframe. Please note that Total Equity Timeframe and Rate of Returns are experimental features. Please contact support@snaptrade.com if you notice any inconsistencies. """
        args = self._get_reporting_custom_range_mapped_args(
            query_params=query_params,
            start_date=start_date,
            end_date=end_date,
            user_id=user_id,
            user_secret=user_secret,
            accounts=accounts,
            detailed=detailed,
            frequency=frequency,
        )
        return self._get_reporting_custom_range_oapg(
            query_params=args.query,
        )

class ApiForget(BaseApi):
    # this class is used by api classes that refer to endpoints by path and http method names

    @api_client.DeprecationWarningOnce(prefix="transactions_and_reporting")
    async def aget(
        self,
        start_date: typing.Optional[date] = None,
        end_date: typing.Optional[date] = None,
        user_id: typing.Optional[str] = None,
        user_secret: typing.Optional[str] = None,
        accounts: typing.Optional[str] = None,
        detailed: typing.Optional[bool] = None,
        frequency: typing.Optional[str] = None,
        query_params: typing.Optional[dict] = {},
        **kwargs,
    ) -> typing.Union[
        ApiResponseFor200Async,
        ApiResponseForDefaultAsync,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        args = self._get_reporting_custom_range_mapped_args(
            query_params=query_params,
            start_date=start_date,
            end_date=end_date,
            user_id=user_id,
            user_secret=user_secret,
            accounts=accounts,
            detailed=detailed,
            frequency=frequency,
        )
        return await self._aget_reporting_custom_range_oapg(
            query_params=args.query,
            **kwargs,
        )
    
    @api_client.DeprecationWarningOnce(prefix="transactions_and_reporting")
    def get(
        self,
        start_date: typing.Optional[date] = None,
        end_date: typing.Optional[date] = None,
        user_id: typing.Optional[str] = None,
        user_secret: typing.Optional[str] = None,
        accounts: typing.Optional[str] = None,
        detailed: typing.Optional[bool] = None,
        frequency: typing.Optional[str] = None,
        query_params: typing.Optional[dict] = {},
    ) -> typing.Union[
        ApiResponseFor200,
        ApiResponseForDefault,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        """ Returns performance information (contributions, dividends, rate of return, etc) for a specific timeframe. Please note that Total Equity Timeframe and Rate of Returns are experimental features. Please contact support@snaptrade.com if you notice any inconsistencies. """
        args = self._get_reporting_custom_range_mapped_args(
            query_params=query_params,
            start_date=start_date,
            end_date=end_date,
            user_id=user_id,
            user_secret=user_secret,
            accounts=accounts,
            detailed=detailed,
            frequency=frequency,
        )
        return self._get_reporting_custom_range_oapg(
            query_params=args.query,
        )

