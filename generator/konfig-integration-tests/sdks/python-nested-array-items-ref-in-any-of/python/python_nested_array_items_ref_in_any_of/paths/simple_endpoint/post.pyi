# coding: utf-8

"""
    python-nested-array-items-ref-in-any-of API

    A simple API based for testing python-nested-array-items-ref-in-any-of.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from dataclasses import dataclass
import typing_extensions
import urllib3
from pydantic import RootModel
from python_nested_array_items_ref_in_any_of.request_before_hook import request_before_hook
import json
from urllib3._collections import HTTPHeaderDict

from python_nested_array_items_ref_in_any_of.api_response import AsyncGeneratorResponse
from python_nested_array_items_ref_in_any_of import api_client, exceptions
from datetime import date, datetime  # noqa: F401
import decimal  # noqa: F401
import functools  # noqa: F401
import io  # noqa: F401
import re  # noqa: F401
import typing  # noqa: F401
import typing_extensions  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from python_nested_array_items_ref_in_any_of import schemas  # noqa: F401

from python_nested_array_items_ref_in_any_of.model.test_fetch_request import TestFetchRequest as TestFetchRequestSchema
from python_nested_array_items_ref_in_any_of.model.simple_schema import SimpleSchema as SimpleSchemaSchema

from python_nested_array_items_ref_in_any_of.type.test_fetch_request import TestFetchRequest
from python_nested_array_items_ref_in_any_of.type.simple_schema import SimpleSchema

from ...api_client import Dictionary
from python_nested_array_items_ref_in_any_of.pydantic.simple_schema import SimpleSchema as SimpleSchemaPydantic
from python_nested_array_items_ref_in_any_of.pydantic.test_fetch_request import TestFetchRequest as TestFetchRequestPydantic

# body param
SchemaForRequestBodyApplicationJson = TestFetchRequestSchema


request_body_test_fetch_request = api_client.RequestBody(
    content={
        'application/json': api_client.MediaType(
            schema=SchemaForRequestBodyApplicationJson),
    },
    required=True,
)
SchemaFor200ResponseBodyApplicationJson = schemas.StrSchema


@dataclass
class ApiResponseFor200(api_client.ApiResponse):
    body: str


@dataclass
class ApiResponseFor200Async(api_client.AsyncApiResponse):
    body: str


_response_for_200 = api_client.OpenApiResponse(
    response_cls=ApiResponseFor200,
    response_cls_async=ApiResponseFor200Async,
    content={
        'application/json': api_client.MediaType(
            schema=SchemaFor200ResponseBodyApplicationJson),
    },
)
_all_accept_content_types = (
    'application/json',
)


class BaseApi(api_client.Api):

    def _fetch_mapped_args(
        self,
        problematic_property: typing.Optional[typing.Union[typing.List[SimpleSchema], typing.List[str]]] = None,
    ) -> api_client.MappedArgs:
        args: api_client.MappedArgs = api_client.MappedArgs()
        _body = {}
        if problematic_property is not None:
            _body["problematicProperty"] = problematic_property
        args.body = _body
        return args

    async def _afetch_oapg(
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
        Fetches a JSON value based on input parameter
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
            path_template='/simple-endpoint',
            body=body,
            auth_settings=_auth,
            headers=_headers,
        )
        serialized_data = request_body_test_fetch_request.serialize(body, content_type)
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


    def _fetch_oapg(
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
        Fetches a JSON value based on input parameter
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
            path_template='/simple-endpoint',
            body=body,
            auth_settings=_auth,
            headers=_headers,
        )
        serialized_data = request_body_test_fetch_request.serialize(body, content_type)
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


class FetchRaw(BaseApi):
    # this class is used by api classes that refer to endpoints with operationId fn names

    async def afetch(
        self,
        problematic_property: typing.Optional[typing.Union[typing.List[SimpleSchema], typing.List[str]]] = None,
        **kwargs,
    ) -> typing.Union[
        ApiResponseFor200Async,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        args = self._fetch_mapped_args(
            problematic_property=problematic_property,
        )
        return await self._afetch_oapg(
            body=args.body,
            **kwargs,
        )
    
    def fetch(
        self,
        problematic_property: typing.Optional[typing.Union[typing.List[SimpleSchema], typing.List[str]]] = None,
    ) -> typing.Union[
        ApiResponseFor200,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        args = self._fetch_mapped_args(
            problematic_property=problematic_property,
        )
        return self._fetch_oapg(
            body=args.body,
        )

class Fetch(BaseApi):

    async def afetch(
        self,
        problematic_property: typing.Optional[typing.Union[typing.List[SimpleSchema], typing.List[str]]] = None,
        validate: bool = False,
        **kwargs,
    ) -> str:
        raw_response = await self.raw.afetch(
            problematic_property=problematic_property,
            **kwargs,
        )
        if validate:
            return RootModel[str](raw_response.body).root
        return raw_response.body
    
    
    def fetch(
        self,
        problematic_property: typing.Optional[typing.Union[typing.List[SimpleSchema], typing.List[str]]] = None,
        validate: bool = False,
    ) -> str:
        raw_response = self.raw.fetch(
            problematic_property=problematic_property,
        )
        if validate:
            return RootModel[str](raw_response.body).root
        return raw_response.body


class ApiForpost(BaseApi):
    # this class is used by api classes that refer to endpoints by path and http method names

    async def apost(
        self,
        problematic_property: typing.Optional[typing.Union[typing.List[SimpleSchema], typing.List[str]]] = None,
        **kwargs,
    ) -> typing.Union[
        ApiResponseFor200Async,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        args = self._fetch_mapped_args(
            problematic_property=problematic_property,
        )
        return await self._afetch_oapg(
            body=args.body,
            **kwargs,
        )
    
    def post(
        self,
        problematic_property: typing.Optional[typing.Union[typing.List[SimpleSchema], typing.List[str]]] = None,
    ) -> typing.Union[
        ApiResponseFor200,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        args = self._fetch_mapped_args(
            problematic_property=problematic_property,
        )
        return self._fetch_oapg(
            body=args.body,
        )

