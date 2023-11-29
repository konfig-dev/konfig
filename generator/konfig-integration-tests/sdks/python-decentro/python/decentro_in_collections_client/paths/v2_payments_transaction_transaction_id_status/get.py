# coding: utf-8

"""
    decentro-in-collections

    Collections

    The version of the OpenAPI document: 1.0.0
    Contact: admin@decentro.tech
    Created by: https://decentro.tech
"""

from dataclasses import dataclass
import typing_extensions
import urllib3
from pydantic import RootModel
from decentro_in_collections_client.request_before_hook import request_before_hook
import json
from urllib3._collections import HTTPHeaderDict

from decentro_in_collections_client.api_response import AsyncGeneratorResponse
from decentro_in_collections_client import api_client, exceptions
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

from decentro_in_collections_client.model.get_transaction_status_response import GetTransactionStatusResponse as GetTransactionStatusResponseSchema

from decentro_in_collections_client.type.get_transaction_status_response import GetTransactionStatusResponse

from ...api_client import Dictionary
from decentro_in_collections_client.pydantic.get_transaction_status_response import GetTransactionStatusResponse as GetTransactionStatusResponsePydantic

from . import path

# Path params


class TransactionIdSchema(
    schemas.StrSchema
):


    class MetaOapg:
        min_length = 1
RequestRequiredPathParams = typing_extensions.TypedDict(
    'RequestRequiredPathParams',
    {
        'transaction_id': typing.Union[TransactionIdSchema, str, ],
    }
)
RequestOptionalPathParams = typing_extensions.TypedDict(
    'RequestOptionalPathParams',
    {
    },
    total=False
)


class RequestPathParams(RequestRequiredPathParams, RequestOptionalPathParams):
    pass


request_path_transaction_id = api_client.PathParameter(
    name="transaction_id",
    style=api_client.ParameterStyle.SIMPLE,
    schema=TransactionIdSchema,
    required=True,
)
_auth = [
    'client_id',
    'client_secret',
    'module_secret',
    'provider_secret',
]
SchemaFor0ResponseBodyApplicationJson = GetTransactionStatusResponseSchema


@dataclass
class ApiResponseForDefault(api_client.ApiResponse):
    body: GetTransactionStatusResponse


@dataclass
class ApiResponseForDefaultAsync(api_client.AsyncApiResponse):
    body: GetTransactionStatusResponse


_response_for_default = api_client.OpenApiResponse(
    response_cls=ApiResponseForDefault,
    content={
        'application/json': api_client.MediaType(
            schema=SchemaFor0ResponseBodyApplicationJson),
    },
)
_status_code_to_response = {
    'default': _response_for_default,
}
_all_accept_content_types = (
    'application/json',
)


class BaseApi(api_client.Api):

    def _get_transaction_status_mapped_args(
        self,
        transaction_id: typing.Optional[str] = None,
        path_params: typing.Optional[dict] = {},
    ) -> api_client.MappedArgs:
        args: api_client.MappedArgs = api_client.MappedArgs()
        _path_params = {}
        if transaction_id is not None:
            _path_params["transaction_id"] = transaction_id
        args.path = path_params if path_params else _path_params
        return args

    async def _aget_transaction_status_oapg(
        self,
        path_params: typing.Optional[dict] = {},
        skip_deserialization: bool = True,
        timeout: typing.Optional[typing.Union[float, typing.Tuple]] = None,
        accept_content_types: typing.Tuple[str] = _all_accept_content_types,
        stream: bool = False,
        **kwargs,
    ) -> typing.Union[
        ApiResponseForDefaultAsync,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        """
        Get transaction status
        :param skip_deserialization: If true then api_response.response will be set but
            api_response.body and api_response.headers will not be deserialized into schema
            class instances
        """
        self._verify_typed_dict_inputs_oapg(RequestPathParams, path_params)
        used_path = path.value
    
        _path_params = {}
        for parameter in (
            request_path_transaction_id,
        ):
            parameter_data = path_params.get(parameter.name, schemas.unset)
            if parameter_data is schemas.unset:
                continue
            serialized_data = parameter.serialize(parameter_data)
            _path_params.update(serialized_data)
    
        for k, v in _path_params.items():
            used_path = used_path.replace('{%s}' % k, v)
    
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
            auth_settings=_auth,
            headers=_headers,
        )
    
        response = await self.api_client.async_call_api(
            resource_path=used_path,
            method=method,
            headers=_headers,
            auth_settings=_auth,
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


    def _get_transaction_status_oapg(
        self,
        path_params: typing.Optional[dict] = {},
        skip_deserialization: bool = True,
        timeout: typing.Optional[typing.Union[float, typing.Tuple]] = None,
        accept_content_types: typing.Tuple[str] = _all_accept_content_types,
        stream: bool = False,
    ) -> typing.Union[
        ApiResponseForDefault,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        """
        Get transaction status
        :param skip_deserialization: If true then api_response.response will be set but
            api_response.body and api_response.headers will not be deserialized into schema
            class instances
        """
        self._verify_typed_dict_inputs_oapg(RequestPathParams, path_params)
        used_path = path.value
    
        _path_params = {}
        for parameter in (
            request_path_transaction_id,
        ):
            parameter_data = path_params.get(parameter.name, schemas.unset)
            if parameter_data is schemas.unset:
                continue
            serialized_data = parameter.serialize(parameter_data)
            _path_params.update(serialized_data)
    
        for k, v in _path_params.items():
            used_path = used_path.replace('{%s}' % k, v)
    
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
            auth_settings=_auth,
            headers=_headers,
        )
    
        response = self.api_client.call_api(
            resource_path=used_path,
            method=method,
            headers=_headers,
            auth_settings=_auth,
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


class GetTransactionStatusRaw(BaseApi):
    # this class is used by api classes that refer to endpoints with operationId fn names

    async def aget_transaction_status(
        self,
        transaction_id: typing.Optional[str] = None,
        path_params: typing.Optional[dict] = {},
        **kwargs,
    ) -> typing.Union[
        ApiResponseForDefaultAsync,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        args = self._get_transaction_status_mapped_args(
            path_params=path_params,
            transaction_id=transaction_id,
        )
        return await self._aget_transaction_status_oapg(
            path_params=args.path,
            **kwargs,
        )
    
    def get_transaction_status(
        self,
        transaction_id: typing.Optional[str] = None,
        path_params: typing.Optional[dict] = {},
    ) -> typing.Union[
        ApiResponseForDefault,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        args = self._get_transaction_status_mapped_args(
            path_params=path_params,
            transaction_id=transaction_id,
        )
        return self._get_transaction_status_oapg(
            path_params=args.path,
        )

class GetTransactionStatus(BaseApi):

    async def aget_transaction_status(
        self,
        transaction_id: typing.Optional[str] = None,
        path_params: typing.Optional[dict] = {},
        validate: bool = False,
        **kwargs,
    ):
        raw_response = await self.raw.aget_transaction_status(
            path_params=path_params,
            transaction_id=transaction_id,
            **kwargs,
        )
        if validate:
            return GetTransactionStatusResponsePydantic(**raw_response.body)
        return api_client.construct_model_instance(GetTransactionStatusResponsePydantic, raw_response.body)
    
    
    def get_transaction_status(
        self,
        transaction_id: typing.Optional[str] = None,
        path_params: typing.Optional[dict] = {},
        validate: bool = False,
    ):
        raw_response = self.raw.get_transaction_status(
            path_params=path_params,
            transaction_id=transaction_id,
        )
        if validate:
            return GetTransactionStatusResponsePydantic(**raw_response.body)
        return api_client.construct_model_instance(GetTransactionStatusResponsePydantic, raw_response.body)


class ApiForget(BaseApi):
    # this class is used by api classes that refer to endpoints by path and http method names

    async def aget(
        self,
        transaction_id: typing.Optional[str] = None,
        path_params: typing.Optional[dict] = {},
        **kwargs,
    ) -> typing.Union[
        ApiResponseForDefaultAsync,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        args = self._get_transaction_status_mapped_args(
            path_params=path_params,
            transaction_id=transaction_id,
        )
        return await self._aget_transaction_status_oapg(
            path_params=args.path,
            **kwargs,
        )
    
    def get(
        self,
        transaction_id: typing.Optional[str] = None,
        path_params: typing.Optional[dict] = {},
    ) -> typing.Union[
        ApiResponseForDefault,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        args = self._get_transaction_status_mapped_args(
            path_params=path_params,
            transaction_id=transaction_id,
        )
        return self._get_transaction_status_oapg(
            path_params=args.path,
        )

