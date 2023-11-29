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

from decentro_in_collections_client.model.validate_upi_handle400_response import ValidateUpiHandle400Response as ValidateUpiHandle400ResponseSchema
from decentro_in_collections_client.model.validate_upi_handle_request import ValidateUpiHandleRequest as ValidateUpiHandleRequestSchema
from decentro_in_collections_client.model.validate_upi_handle_response import ValidateUpiHandleResponse as ValidateUpiHandleResponseSchema

from decentro_in_collections_client.type.validate_upi_handle_response import ValidateUpiHandleResponse
from decentro_in_collections_client.type.validate_upi_handle_request import ValidateUpiHandleRequest
from decentro_in_collections_client.type.validate_upi_handle400_response import ValidateUpiHandle400Response

from ...api_client import Dictionary
from decentro_in_collections_client.pydantic.validate_upi_handle400_response import ValidateUpiHandle400Response as ValidateUpiHandle400ResponsePydantic
from decentro_in_collections_client.pydantic.validate_upi_handle_response import ValidateUpiHandleResponse as ValidateUpiHandleResponsePydantic
from decentro_in_collections_client.pydantic.validate_upi_handle_request import ValidateUpiHandleRequest as ValidateUpiHandleRequestPydantic

from . import path

# body param
SchemaForRequestBodyApplicationJson = ValidateUpiHandleRequestSchema


request_body_validate_upi_handle_request = api_client.RequestBody(
    content={
        'application/json': api_client.MediaType(
            schema=SchemaForRequestBodyApplicationJson),
    },
    required=True,
)
_auth = [
    'client_id',
    'client_secret',
    'module_secret',
    'provider_secret',
]
SchemaFor200ResponseBodyApplicationJson = ValidateUpiHandleResponseSchema


@dataclass
class ApiResponseFor200(api_client.ApiResponse):
    body: ValidateUpiHandleResponse


@dataclass
class ApiResponseFor200Async(api_client.AsyncApiResponse):
    body: ValidateUpiHandleResponse


_response_for_200 = api_client.OpenApiResponse(
    response_cls=ApiResponseFor200,
    response_cls_async=ApiResponseFor200Async,
    content={
        'application/json': api_client.MediaType(
            schema=SchemaFor200ResponseBodyApplicationJson),
    },
)
SchemaFor400ResponseBodyApplicationJson = ValidateUpiHandle400ResponseSchema


@dataclass
class ApiResponseFor400(api_client.ApiResponse):
    body: ValidateUpiHandle400Response


@dataclass
class ApiResponseFor400Async(api_client.AsyncApiResponse):
    body: ValidateUpiHandle400Response


_response_for_400 = api_client.OpenApiResponse(
    response_cls=ApiResponseFor400,
    response_cls_async=ApiResponseFor400Async,
    content={
        'application/json': api_client.MediaType(
            schema=SchemaFor400ResponseBodyApplicationJson),
    },
)
_status_code_to_response = {
    '200': _response_for_200,
    '400': _response_for_400,
}
_all_accept_content_types = (
    'application/json',
)


class BaseApi(api_client.Api):

    def _validate_upi_handle_mapped_args(
        self,
        body: typing.Optional[ValidateUpiHandleRequest] = None,
        reference_id: typing.Optional[str] = None,
        upi_id: typing.Optional[str] = None,
        type: typing.Optional[str] = None,
    ) -> api_client.MappedArgs:
        args: api_client.MappedArgs = api_client.MappedArgs()
        _body = {}
        if reference_id is not None:
            _body["reference_id"] = reference_id
        if upi_id is not None:
            _body["upi_id"] = upi_id
        if type is not None:
            _body["type"] = type
        args.body = body if body is not None else _body
        return args

    async def _avalidate_upi_handle_oapg(
        self,
        body: typing.Any = None,
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
        Validate UPI handle
        :param skip_deserialization: If true then api_response.response will be set but
            api_response.body and api_response.headers will not be deserialized into schema
            class instances
        """
        used_path = path.value
    
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
            body=body,
            auth_settings=_auth,
            headers=_headers,
        )
        serialized_data = request_body_validate_upi_handle_request.serialize(body, content_type)
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


    def _validate_upi_handle_oapg(
        self,
        body: typing.Any = None,
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
        Validate UPI handle
        :param skip_deserialization: If true then api_response.response will be set but
            api_response.body and api_response.headers will not be deserialized into schema
            class instances
        """
        used_path = path.value
    
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
            body=body,
            auth_settings=_auth,
            headers=_headers,
        )
        serialized_data = request_body_validate_upi_handle_request.serialize(body, content_type)
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


class ValidateUpiHandleRaw(BaseApi):
    # this class is used by api classes that refer to endpoints with operationId fn names

    async def avalidate_upi_handle(
        self,
        body: typing.Optional[ValidateUpiHandleRequest] = None,
        reference_id: typing.Optional[str] = None,
        upi_id: typing.Optional[str] = None,
        type: typing.Optional[str] = None,
        **kwargs,
    ) -> typing.Union[
        ApiResponseFor200Async,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        args = self._validate_upi_handle_mapped_args(
            body=body,
            reference_id=reference_id,
            upi_id=upi_id,
            type=type,
        )
        return await self._avalidate_upi_handle_oapg(
            body=args.body,
            **kwargs,
        )
    
    def validate_upi_handle(
        self,
        body: typing.Optional[ValidateUpiHandleRequest] = None,
        reference_id: typing.Optional[str] = None,
        upi_id: typing.Optional[str] = None,
        type: typing.Optional[str] = None,
    ) -> typing.Union[
        ApiResponseFor200,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        args = self._validate_upi_handle_mapped_args(
            body=body,
            reference_id=reference_id,
            upi_id=upi_id,
            type=type,
        )
        return self._validate_upi_handle_oapg(
            body=args.body,
        )

class ValidateUpiHandle(BaseApi):

    async def avalidate_upi_handle(
        self,
        body: typing.Optional[ValidateUpiHandleRequest] = None,
        reference_id: typing.Optional[str] = None,
        upi_id: typing.Optional[str] = None,
        type: typing.Optional[str] = None,
        validate: bool = False,
        **kwargs,
    ):
        raw_response = await self.raw.avalidate_upi_handle(
            body=body,
            reference_id=reference_id,
            upi_id=upi_id,
            type=type,
            **kwargs,
        )
        if validate:
            return ValidateUpiHandleResponsePydantic(**raw_response.body)
        return api_client.construct_model_instance(ValidateUpiHandleResponsePydantic, raw_response.body)
    
    
    def validate_upi_handle(
        self,
        body: typing.Optional[ValidateUpiHandleRequest] = None,
        reference_id: typing.Optional[str] = None,
        upi_id: typing.Optional[str] = None,
        type: typing.Optional[str] = None,
        validate: bool = False,
    ):
        raw_response = self.raw.validate_upi_handle(
            body=body,
            reference_id=reference_id,
            upi_id=upi_id,
            type=type,
        )
        if validate:
            return ValidateUpiHandleResponsePydantic(**raw_response.body)
        return api_client.construct_model_instance(ValidateUpiHandleResponsePydantic, raw_response.body)


class ApiForpost(BaseApi):
    # this class is used by api classes that refer to endpoints by path and http method names

    async def apost(
        self,
        body: typing.Optional[ValidateUpiHandleRequest] = None,
        reference_id: typing.Optional[str] = None,
        upi_id: typing.Optional[str] = None,
        type: typing.Optional[str] = None,
        **kwargs,
    ) -> typing.Union[
        ApiResponseFor200Async,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        args = self._validate_upi_handle_mapped_args(
            body=body,
            reference_id=reference_id,
            upi_id=upi_id,
            type=type,
        )
        return await self._avalidate_upi_handle_oapg(
            body=args.body,
            **kwargs,
        )
    
    def post(
        self,
        body: typing.Optional[ValidateUpiHandleRequest] = None,
        reference_id: typing.Optional[str] = None,
        upi_id: typing.Optional[str] = None,
        type: typing.Optional[str] = None,
    ) -> typing.Union[
        ApiResponseFor200,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        args = self._validate_upi_handle_mapped_args(
            body=body,
            reference_id=reference_id,
            upi_id=upi_id,
            type=type,
        )
        return self._validate_upi_handle_oapg(
            body=args.body,
        )

