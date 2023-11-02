# coding: utf-8

"""
    Python Pydantic Responses API

    A simple API based on python pydantic responses.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from dataclasses import dataclass
import typing_extensions
import urllib3
from pydantic import RootModel
from python_pydantic.request_before_hook import request_before_hook
import json
from urllib3._collections import HTTPHeaderDict

from python_pydantic.api_response import AsyncGeneratorResponse
from python_pydantic import api_client, exceptions
from datetime import date, datetime  # noqa: F401
import decimal  # noqa: F401
import functools  # noqa: F401
import io  # noqa: F401
import re  # noqa: F401
import typing  # noqa: F401
import typing_extensions  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from python_pydantic import schemas  # noqa: F401

from python_pydantic.model.test_fetch_response import TestFetchResponse as TestFetchResponseSchema
from python_pydantic.model.test_fetch400_response import TestFetch400Response as TestFetch400ResponseSchema
from python_pydantic.model.test_fetch500_response import TestFetch500Response as TestFetch500ResponseSchema

from python_pydantic.type.test_fetch400_response import TestFetch400Response
from python_pydantic.type.test_fetch500_response import TestFetch500Response
from python_pydantic.type.test_fetch_response import TestFetchResponse

from ...api_client import Dictionary
from python_pydantic.pydantic.test_fetch_response import TestFetchResponse as TestFetchResponsePydantic
from python_pydantic.pydantic.test_fetch500_response import TestFetch500Response as TestFetch500ResponsePydantic
from python_pydantic.pydantic.test_fetch400_response import TestFetch400Response as TestFetch400ResponsePydantic

# Query params
InputParameterSchema = schemas.StrSchema
RequestRequiredQueryParams = typing_extensions.TypedDict(
    'RequestRequiredQueryParams',
    {
        'inputParameter': typing.Union[InputParameterSchema, str, ],
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


request_query_input_parameter = api_client.QueryParameter(
    name="inputParameter",
    style=api_client.ParameterStyle.FORM,
    schema=InputParameterSchema,
    required=True,
    explode=True,
)
SchemaFor200ResponseBodyApplicationJson = TestFetchResponseSchema


@dataclass
class ApiResponseFor200(api_client.ApiResponse):
    body: TestFetchResponse


@dataclass
class ApiResponseFor200Async(api_client.AsyncApiResponse):
    body: TestFetchResponse


_response_for_200 = api_client.OpenApiResponse(
    response_cls=ApiResponseFor200,
    response_cls_async=ApiResponseFor200Async,
    content={
        'application/json': api_client.MediaType(
            schema=SchemaFor200ResponseBodyApplicationJson),
    },
)
SchemaFor400ResponseBodyApplicationJson = TestFetch400ResponseSchema


@dataclass
class ApiResponseFor400(api_client.ApiResponse):
    body: TestFetch400Response


@dataclass
class ApiResponseFor400Async(api_client.AsyncApiResponse):
    body: TestFetch400Response


_response_for_400 = api_client.OpenApiResponse(
    response_cls=ApiResponseFor400,
    response_cls_async=ApiResponseFor400Async,
    content={
        'application/json': api_client.MediaType(
            schema=SchemaFor400ResponseBodyApplicationJson),
    },
)
SchemaFor500ResponseBodyApplicationJson = TestFetch500ResponseSchema


@dataclass
class ApiResponseFor500(api_client.ApiResponse):
    body: TestFetch500Response


@dataclass
class ApiResponseFor500Async(api_client.AsyncApiResponse):
    body: TestFetch500Response


_response_for_500 = api_client.OpenApiResponse(
    response_cls=ApiResponseFor500,
    response_cls_async=ApiResponseFor500Async,
    content={
        'application/json': api_client.MediaType(
            schema=SchemaFor500ResponseBodyApplicationJson),
    },
)
_all_accept_content_types = (
    'application/json',
)


class BaseApi(api_client.Api):

    def _fetch_mapped_args(
        self,
        input_parameter: str,
    ) -> api_client.MappedArgs:
        args: api_client.MappedArgs = api_client.MappedArgs()
        _query_params = {}
        if input_parameter is not None:
            _query_params["inputParameter"] = input_parameter
        args.query = _query_params
        return args

    async def _afetch_oapg(
        self,
            query_params: typing.Optional[dict] = {},
        skip_deserialization: bool = True,
        timeout: typing.Optional[typing.Union[int, typing.Tuple]] = None,
        accept_content_types: typing.Tuple[str] = _all_accept_content_types,
        stream: bool = False,
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
        self._verify_typed_dict_inputs_oapg(RequestQueryParams, query_params)
        used_path = path.value
    
        prefix_separator_iterator = None
        for parameter in (
            request_query_input_parameter,
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
            query_params: typing.Optional[dict] = {},
        skip_deserialization: bool = True,
        timeout: typing.Optional[typing.Union[int, typing.Tuple]] = None,
        accept_content_types: typing.Tuple[str] = _all_accept_content_types,
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
        self._verify_typed_dict_inputs_oapg(RequestQueryParams, query_params)
        used_path = path.value
    
        prefix_separator_iterator = None
        for parameter in (
            request_query_input_parameter,
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
        input_parameter: str,
    ) -> typing.Union[
        ApiResponseFor200Async,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        args = self._fetch_mapped_args(
            input_parameter=input_parameter,
        )
        return await self._afetch_oapg(
            query_params=args.query,
        )
    
    def fetch(
        self,
        input_parameter: str,
    ) -> typing.Union[
        ApiResponseFor200,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        args = self._fetch_mapped_args(
            input_parameter=input_parameter,
        )
        return self._fetch_oapg(
            query_params=args.query,
        )

class Fetch(BaseApi):

    async def afetch(
        self,
        input_parameter: str,
        validate: bool = False,
    ):
        raw_response = await self.raw.afetch(
            input_parameter=input_parameter,
        )
        if validate:
            return TestFetchResponsePydantic(**raw_response.body)
        return TestFetchResponsePydantic.model_construct(**raw_response.body)
    
    
    def fetch(
        self,
        input_parameter: str,
        validate: bool = False,
    ):
        raw_response = self.raw.fetch(
            input_parameter=input_parameter,
        )
        if validate:
            return TestFetchResponsePydantic(**raw_response.body)
        return TestFetchResponsePydantic.model_construct(**raw_response.body)


class ApiForget(BaseApi):
    # this class is used by api classes that refer to endpoints by path and http method names

    async def aget(
        self,
        input_parameter: str,
    ) -> typing.Union[
        ApiResponseFor200Async,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        args = self._fetch_mapped_args(
            input_parameter=input_parameter,
        )
        return await self._afetch_oapg(
            query_params=args.query,
        )
    
    def get(
        self,
        input_parameter: str,
    ) -> typing.Union[
        ApiResponseFor200,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        args = self._fetch_mapped_args(
            input_parameter=input_parameter,
        )
        return self._fetch_oapg(
            query_params=args.query,
        )

