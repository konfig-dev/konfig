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

from decentro_in_collections_client.model.generate_payment_link_request import GeneratePaymentLinkRequest as GeneratePaymentLinkRequestSchema
from decentro_in_collections_client.model.generate_payment_link400_response import GeneratePaymentLink400Response as GeneratePaymentLink400ResponseSchema
from decentro_in_collections_client.model.generate_payment_link_response import GeneratePaymentLinkResponse as GeneratePaymentLinkResponseSchema

from decentro_in_collections_client.type.generate_payment_link400_response import GeneratePaymentLink400Response
from decentro_in_collections_client.type.generate_payment_link_response import GeneratePaymentLinkResponse
from decentro_in_collections_client.type.generate_payment_link_request import GeneratePaymentLinkRequest

from ...api_client import Dictionary
from decentro_in_collections_client.pydantic.generate_payment_link_request import GeneratePaymentLinkRequest as GeneratePaymentLinkRequestPydantic
from decentro_in_collections_client.pydantic.generate_payment_link400_response import GeneratePaymentLink400Response as GeneratePaymentLink400ResponsePydantic
from decentro_in_collections_client.pydantic.generate_payment_link_response import GeneratePaymentLinkResponse as GeneratePaymentLinkResponsePydantic

from . import path

# body param
SchemaForRequestBodyApplicationJson = GeneratePaymentLinkRequestSchema


request_body_generate_payment_link_request = api_client.RequestBody(
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
SchemaFor200ResponseBodyApplicationJson = GeneratePaymentLinkResponseSchema


@dataclass
class ApiResponseFor200(api_client.ApiResponse):
    body: GeneratePaymentLinkResponse


@dataclass
class ApiResponseFor200Async(api_client.AsyncApiResponse):
    body: GeneratePaymentLinkResponse


_response_for_200 = api_client.OpenApiResponse(
    response_cls=ApiResponseFor200,
    response_cls_async=ApiResponseFor200Async,
    content={
        'application/json': api_client.MediaType(
            schema=SchemaFor200ResponseBodyApplicationJson),
    },
)
SchemaFor400ResponseBodyApplicationJson = GeneratePaymentLink400ResponseSchema


@dataclass
class ApiResponseFor400(api_client.ApiResponse):
    body: GeneratePaymentLink400Response


@dataclass
class ApiResponseFor400Async(api_client.AsyncApiResponse):
    body: GeneratePaymentLink400Response


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

    def _generate_payment_link_mapped_args(
        self,
        body: typing.Optional[GeneratePaymentLinkRequest] = None,
        reference_id: typing.Optional[str] = None,
        payee_account: typing.Optional[str] = None,
        amount: typing.Optional[typing.Union[int, float]] = None,
        purpose_message: typing.Optional[str] = None,
        generate_qr: typing.Optional[int] = None,
        expiry_time: typing.Optional[int] = None,
        customized_qr_with_logo: typing.Optional[int] = None,
        generate_uri: typing.Optional[int] = None,
    ) -> api_client.MappedArgs:
        args: api_client.MappedArgs = api_client.MappedArgs()
        _body = {}
        if reference_id is not None:
            _body["reference_id"] = reference_id
        if payee_account is not None:
            _body["payee_account"] = payee_account
        if amount is not None:
            _body["amount"] = amount
        if purpose_message is not None:
            _body["purpose_message"] = purpose_message
        if generate_qr is not None:
            _body["generate_qr"] = generate_qr
        if expiry_time is not None:
            _body["expiry_time"] = expiry_time
        if customized_qr_with_logo is not None:
            _body["customized_qr_with_logo"] = customized_qr_with_logo
        if generate_uri is not None:
            _body["generate_uri"] = generate_uri
        args.body = body if body is not None else _body
        return args

    async def _agenerate_payment_link_oapg(
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
        Generate payment link
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
        serialized_data = request_body_generate_payment_link_request.serialize(body, content_type)
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


    def _generate_payment_link_oapg(
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
        Generate payment link
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
        serialized_data = request_body_generate_payment_link_request.serialize(body, content_type)
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


class GeneratePaymentLinkRaw(BaseApi):
    # this class is used by api classes that refer to endpoints with operationId fn names

    async def agenerate_payment_link(
        self,
        body: typing.Optional[GeneratePaymentLinkRequest] = None,
        reference_id: typing.Optional[str] = None,
        payee_account: typing.Optional[str] = None,
        amount: typing.Optional[typing.Union[int, float]] = None,
        purpose_message: typing.Optional[str] = None,
        generate_qr: typing.Optional[int] = None,
        expiry_time: typing.Optional[int] = None,
        customized_qr_with_logo: typing.Optional[int] = None,
        generate_uri: typing.Optional[int] = None,
        **kwargs,
    ) -> typing.Union[
        ApiResponseFor200Async,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        args = self._generate_payment_link_mapped_args(
            body=body,
            reference_id=reference_id,
            payee_account=payee_account,
            amount=amount,
            purpose_message=purpose_message,
            generate_qr=generate_qr,
            expiry_time=expiry_time,
            customized_qr_with_logo=customized_qr_with_logo,
            generate_uri=generate_uri,
        )
        return await self._agenerate_payment_link_oapg(
            body=args.body,
            **kwargs,
        )
    
    def generate_payment_link(
        self,
        body: typing.Optional[GeneratePaymentLinkRequest] = None,
        reference_id: typing.Optional[str] = None,
        payee_account: typing.Optional[str] = None,
        amount: typing.Optional[typing.Union[int, float]] = None,
        purpose_message: typing.Optional[str] = None,
        generate_qr: typing.Optional[int] = None,
        expiry_time: typing.Optional[int] = None,
        customized_qr_with_logo: typing.Optional[int] = None,
        generate_uri: typing.Optional[int] = None,
    ) -> typing.Union[
        ApiResponseFor200,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        args = self._generate_payment_link_mapped_args(
            body=body,
            reference_id=reference_id,
            payee_account=payee_account,
            amount=amount,
            purpose_message=purpose_message,
            generate_qr=generate_qr,
            expiry_time=expiry_time,
            customized_qr_with_logo=customized_qr_with_logo,
            generate_uri=generate_uri,
        )
        return self._generate_payment_link_oapg(
            body=args.body,
        )

class GeneratePaymentLink(BaseApi):

    async def agenerate_payment_link(
        self,
        body: typing.Optional[GeneratePaymentLinkRequest] = None,
        reference_id: typing.Optional[str] = None,
        payee_account: typing.Optional[str] = None,
        amount: typing.Optional[typing.Union[int, float]] = None,
        purpose_message: typing.Optional[str] = None,
        generate_qr: typing.Optional[int] = None,
        expiry_time: typing.Optional[int] = None,
        customized_qr_with_logo: typing.Optional[int] = None,
        generate_uri: typing.Optional[int] = None,
        validate: bool = False,
        **kwargs,
    ):
        raw_response = await self.raw.agenerate_payment_link(
            body=body,
            reference_id=reference_id,
            payee_account=payee_account,
            amount=amount,
            purpose_message=purpose_message,
            generate_qr=generate_qr,
            expiry_time=expiry_time,
            customized_qr_with_logo=customized_qr_with_logo,
            generate_uri=generate_uri,
            **kwargs,
        )
        if validate:
            return GeneratePaymentLinkResponsePydantic(**raw_response.body)
        return api_client.construct_model_instance(GeneratePaymentLinkResponsePydantic, raw_response.body)
    
    
    def generate_payment_link(
        self,
        body: typing.Optional[GeneratePaymentLinkRequest] = None,
        reference_id: typing.Optional[str] = None,
        payee_account: typing.Optional[str] = None,
        amount: typing.Optional[typing.Union[int, float]] = None,
        purpose_message: typing.Optional[str] = None,
        generate_qr: typing.Optional[int] = None,
        expiry_time: typing.Optional[int] = None,
        customized_qr_with_logo: typing.Optional[int] = None,
        generate_uri: typing.Optional[int] = None,
        validate: bool = False,
    ):
        raw_response = self.raw.generate_payment_link(
            body=body,
            reference_id=reference_id,
            payee_account=payee_account,
            amount=amount,
            purpose_message=purpose_message,
            generate_qr=generate_qr,
            expiry_time=expiry_time,
            customized_qr_with_logo=customized_qr_with_logo,
            generate_uri=generate_uri,
        )
        if validate:
            return GeneratePaymentLinkResponsePydantic(**raw_response.body)
        return api_client.construct_model_instance(GeneratePaymentLinkResponsePydantic, raw_response.body)


class ApiForpost(BaseApi):
    # this class is used by api classes that refer to endpoints by path and http method names

    async def apost(
        self,
        body: typing.Optional[GeneratePaymentLinkRequest] = None,
        reference_id: typing.Optional[str] = None,
        payee_account: typing.Optional[str] = None,
        amount: typing.Optional[typing.Union[int, float]] = None,
        purpose_message: typing.Optional[str] = None,
        generate_qr: typing.Optional[int] = None,
        expiry_time: typing.Optional[int] = None,
        customized_qr_with_logo: typing.Optional[int] = None,
        generate_uri: typing.Optional[int] = None,
        **kwargs,
    ) -> typing.Union[
        ApiResponseFor200Async,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        args = self._generate_payment_link_mapped_args(
            body=body,
            reference_id=reference_id,
            payee_account=payee_account,
            amount=amount,
            purpose_message=purpose_message,
            generate_qr=generate_qr,
            expiry_time=expiry_time,
            customized_qr_with_logo=customized_qr_with_logo,
            generate_uri=generate_uri,
        )
        return await self._agenerate_payment_link_oapg(
            body=args.body,
            **kwargs,
        )
    
    def post(
        self,
        body: typing.Optional[GeneratePaymentLinkRequest] = None,
        reference_id: typing.Optional[str] = None,
        payee_account: typing.Optional[str] = None,
        amount: typing.Optional[typing.Union[int, float]] = None,
        purpose_message: typing.Optional[str] = None,
        generate_qr: typing.Optional[int] = None,
        expiry_time: typing.Optional[int] = None,
        customized_qr_with_logo: typing.Optional[int] = None,
        generate_uri: typing.Optional[int] = None,
    ) -> typing.Union[
        ApiResponseFor200,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        args = self._generate_payment_link_mapped_args(
            body=body,
            reference_id=reference_id,
            payee_account=payee_account,
            amount=amount,
            purpose_message=purpose_message,
            generate_qr=generate_qr,
            expiry_time=expiry_time,
            customized_qr_with_logo=customized_qr_with_logo,
            generate_uri=generate_uri,
        )
        return self._generate_payment_link_oapg(
            body=args.body,
        )

