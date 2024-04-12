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

from snaptrade_client.model.model400_failed_request_response import Model400FailedRequestResponse as Model400FailedRequestResponseSchema
from snaptrade_client.model.login_redirect_uri import LoginRedirectURI as LoginRedirectURISchema
from snaptrade_client.model.snap_trade_login_user_request_body import SnapTradeLoginUserRequestBody as SnapTradeLoginUserRequestBodySchema
from snaptrade_client.model.model403_failed_request_response import Model403FailedRequestResponse as Model403FailedRequestResponseSchema
from snaptrade_client.model.model404_failed_request_response import Model404FailedRequestResponse as Model404FailedRequestResponseSchema
from snaptrade_client.model.encrypted_response import EncryptedResponse as EncryptedResponseSchema

from snaptrade_client.type.snap_trade_login_user_request_body import SnapTradeLoginUserRequestBody
from snaptrade_client.type.login_redirect_uri import LoginRedirectURI
from snaptrade_client.type.encrypted_response import EncryptedResponse
from snaptrade_client.type.model400_failed_request_response import Model400FailedRequestResponse
from snaptrade_client.type.model403_failed_request_response import Model403FailedRequestResponse
from snaptrade_client.type.model404_failed_request_response import Model404FailedRequestResponse

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
SchemaForRequestBodyApplicationJson = SnapTradeLoginUserRequestBodySchema


request_body_snap_trade_login_user_request_body = api_client.RequestBody(
    content={
        'application/json': api_client.MediaType(
            schema=SchemaForRequestBodyApplicationJson),
    },
)


class SchemaFor200ResponseBodyApplicationJson(
    schemas.ComposedSchema,
):


    class MetaOapg:
        
        @classmethod
        @functools.lru_cache()
        def one_of(cls):
            # we need this here to make our import statements work
            # we must store _composed_schemas in here so the code is only run
            # when we invoke this method. If we kept this at the class
            # level we would get an error because the class level
            # code would be run when this module is imported, and these composed
            # classes don't exist yet because their module has not finished
            # loading
            return [
                LoginRedirectURI,
                EncryptedResponse,
            ]


    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, bool, None, list, tuple, bytes, io.FileIO, io.BufferedReader, ],
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[schemas.AnyTypeSchema, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes],
    ) -> 'SchemaFor200ResponseBodyApplicationJson':
        return super().__new__(
            cls,
            *args,
            _configuration=_configuration,
            **kwargs,
        )


@dataclass
class ApiResponseFor200(api_client.ApiResponse):
    body: typing.Union[LoginRedirectURI, EncryptedResponse]


@dataclass
class ApiResponseFor200Async(api_client.AsyncApiResponse):
    body: typing.Union[LoginRedirectURI, EncryptedResponse]


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
SchemaFor404ResponseBodyApplicationJson = Model404FailedRequestResponseSchema


@dataclass
class ApiResponseFor404(api_client.ApiResponse):
    body: Model404FailedRequestResponse


@dataclass
class ApiResponseFor404Async(api_client.AsyncApiResponse):
    body: Model404FailedRequestResponse


_response_for_404 = api_client.OpenApiResponse(
    response_cls=ApiResponseFor404,
    response_cls_async=ApiResponseFor404Async,
    content={
        'application/json': api_client.MediaType(
            schema=SchemaFor404ResponseBodyApplicationJson),
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

    def _login_snap_trade_user_mapped_args(
        self,
        body: typing.Optional[SnapTradeLoginUserRequestBody] = None,
        user_id: typing.Optional[str] = None,
        user_secret: typing.Optional[str] = None,
        broker: typing.Optional[str] = None,
        immediate_redirect: typing.Optional[bool] = None,
        custom_redirect: typing.Optional[str] = None,
        reconnect: typing.Optional[str] = None,
        connection_type: typing.Optional[str] = None,
        connection_portal_version: typing.Optional[str] = None,
        query_params: typing.Optional[dict] = {},
    ) -> api_client.MappedArgs:
        args: api_client.MappedArgs = api_client.MappedArgs()
        _query_params = {}
        _body = {}
        if broker is not None:
            _body["broker"] = broker
        if immediate_redirect is not None:
            _body["immediateRedirect"] = immediate_redirect
        if custom_redirect is not None:
            _body["customRedirect"] = custom_redirect
        if reconnect is not None:
            _body["reconnect"] = reconnect
        if connection_type is not None:
            _body["connectionType"] = connection_type
        if connection_portal_version is not None:
            _body["connectionPortalVersion"] = connection_portal_version
        args.body = body if body is not None else _body
        if user_id is not None:
            _query_params["userId"] = user_id
        if user_secret is not None:
            _query_params["userSecret"] = user_secret
        args.query = query_params if query_params else _query_params
        return args

    async def _alogin_snap_trade_user_oapg(
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
        Login user &amp; generate connection link
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
    
        _fields = None
        _body = None
        request_before_hook(
            resource_path=used_path,
            method=method,
            configuration=self.api_client.configuration,
            path_template='/snapTrade/login',
            body=body,
            auth_settings=_auth,
            headers=_headers,
        )
        if body is not schemas.unset:
            serialized_data = request_body_snap_trade_login_user_request_body.serialize(body, content_type)
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


    def _login_snap_trade_user_oapg(
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
        Login user &amp; generate connection link
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
    
        _fields = None
        _body = None
        request_before_hook(
            resource_path=used_path,
            method=method,
            configuration=self.api_client.configuration,
            path_template='/snapTrade/login',
            body=body,
            auth_settings=_auth,
            headers=_headers,
        )
        if body is not schemas.unset:
            serialized_data = request_body_snap_trade_login_user_request_body.serialize(body, content_type)
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


class LoginSnapTradeUser(BaseApi):
    # this class is used by api classes that refer to endpoints with operationId fn names

    async def alogin_snap_trade_user(
        self,
        body: typing.Optional[SnapTradeLoginUserRequestBody] = None,
        user_id: typing.Optional[str] = None,
        user_secret: typing.Optional[str] = None,
        broker: typing.Optional[str] = None,
        immediate_redirect: typing.Optional[bool] = None,
        custom_redirect: typing.Optional[str] = None,
        reconnect: typing.Optional[str] = None,
        connection_type: typing.Optional[str] = None,
        connection_portal_version: typing.Optional[str] = None,
        query_params: typing.Optional[dict] = {},
        **kwargs,
    ) -> typing.Union[
        ApiResponseFor200Async,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        args = self._login_snap_trade_user_mapped_args(
            body=body,
            query_params=query_params,
            user_id=user_id,
            user_secret=user_secret,
            broker=broker,
            immediate_redirect=immediate_redirect,
            custom_redirect=custom_redirect,
            reconnect=reconnect,
            connection_type=connection_type,
            connection_portal_version=connection_portal_version,
        )
        return await self._alogin_snap_trade_user_oapg(
            body=args.body,
            query_params=args.query,
            **kwargs,
        )
    
    def login_snap_trade_user(
        self,
        body: typing.Optional[SnapTradeLoginUserRequestBody] = None,
        user_id: typing.Optional[str] = None,
        user_secret: typing.Optional[str] = None,
        broker: typing.Optional[str] = None,
        immediate_redirect: typing.Optional[bool] = None,
        custom_redirect: typing.Optional[str] = None,
        reconnect: typing.Optional[str] = None,
        connection_type: typing.Optional[str] = None,
        connection_portal_version: typing.Optional[str] = None,
        query_params: typing.Optional[dict] = {},
    ) -> typing.Union[
        ApiResponseFor200,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        args = self._login_snap_trade_user_mapped_args(
            body=body,
            query_params=query_params,
            user_id=user_id,
            user_secret=user_secret,
            broker=broker,
            immediate_redirect=immediate_redirect,
            custom_redirect=custom_redirect,
            reconnect=reconnect,
            connection_type=connection_type,
            connection_portal_version=connection_portal_version,
        )
        return self._login_snap_trade_user_oapg(
            body=args.body,
            query_params=args.query,
        )

class ApiForpost(BaseApi):
    # this class is used by api classes that refer to endpoints by path and http method names

    async def apost(
        self,
        body: typing.Optional[SnapTradeLoginUserRequestBody] = None,
        user_id: typing.Optional[str] = None,
        user_secret: typing.Optional[str] = None,
        broker: typing.Optional[str] = None,
        immediate_redirect: typing.Optional[bool] = None,
        custom_redirect: typing.Optional[str] = None,
        reconnect: typing.Optional[str] = None,
        connection_type: typing.Optional[str] = None,
        connection_portal_version: typing.Optional[str] = None,
        query_params: typing.Optional[dict] = {},
        **kwargs,
    ) -> typing.Union[
        ApiResponseFor200Async,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        args = self._login_snap_trade_user_mapped_args(
            body=body,
            query_params=query_params,
            user_id=user_id,
            user_secret=user_secret,
            broker=broker,
            immediate_redirect=immediate_redirect,
            custom_redirect=custom_redirect,
            reconnect=reconnect,
            connection_type=connection_type,
            connection_portal_version=connection_portal_version,
        )
        return await self._alogin_snap_trade_user_oapg(
            body=args.body,
            query_params=args.query,
            **kwargs,
        )
    
    def post(
        self,
        body: typing.Optional[SnapTradeLoginUserRequestBody] = None,
        user_id: typing.Optional[str] = None,
        user_secret: typing.Optional[str] = None,
        broker: typing.Optional[str] = None,
        immediate_redirect: typing.Optional[bool] = None,
        custom_redirect: typing.Optional[str] = None,
        reconnect: typing.Optional[str] = None,
        connection_type: typing.Optional[str] = None,
        connection_portal_version: typing.Optional[str] = None,
        query_params: typing.Optional[dict] = {},
    ) -> typing.Union[
        ApiResponseFor200,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        args = self._login_snap_trade_user_mapped_args(
            body=body,
            query_params=query_params,
            user_id=user_id,
            user_secret=user_secret,
            broker=broker,
            immediate_redirect=immediate_redirect,
            custom_redirect=custom_redirect,
            reconnect=reconnect,
            connection_type=connection_type,
            connection_portal_version=connection_portal_version,
        )
        return self._login_snap_trade_user_oapg(
            body=args.body,
            query_params=args.query,
        )

