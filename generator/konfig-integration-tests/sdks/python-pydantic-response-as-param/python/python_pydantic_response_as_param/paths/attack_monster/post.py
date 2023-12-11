# coding: utf-8

"""
    python-pydantic-response-as-param API

    A simple API based for testing python-pydantic-response-as-param.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

from dataclasses import dataclass
import typing_extensions
import urllib3
from pydantic import RootModel
from python_pydantic_response_as_param.request_before_hook import request_before_hook
import json
from urllib3._collections import HTTPHeaderDict

from python_pydantic_response_as_param.api_response import AsyncGeneratorResponse
from python_pydantic_response_as_param import api_client, exceptions
from datetime import date, datetime  # noqa: F401
import decimal  # noqa: F401
import functools  # noqa: F401
import io  # noqa: F401
import re  # noqa: F401
import typing  # noqa: F401
import typing_extensions  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from python_pydantic_response_as_param import schemas  # noqa: F401

from python_pydantic_response_as_param.model.attack_result import AttackResult as AttackResultSchema
from python_pydantic_response_as_param.model.sword import Sword as SwordSchema
from python_pydantic_response_as_param.model.attack import Attack as AttackSchema

from python_pydantic_response_as_param.type.attack import Attack
from python_pydantic_response_as_param.type.attack_result import AttackResult
from python_pydantic_response_as_param.type.sword import Sword

from ...api_client import Dictionary
from python_pydantic_response_as_param.pydantic.attack import Attack as AttackPydantic
from python_pydantic_response_as_param.pydantic.attack_result import AttackResult as AttackResultPydantic
from python_pydantic_response_as_param.pydantic.sword import Sword as SwordPydantic

from . import path

# body param
SchemaForRequestBodyApplicationJson = AttackSchema


request_body_attack = api_client.RequestBody(
    content={
        'application/json': api_client.MediaType(
            schema=SchemaForRequestBodyApplicationJson),
    },
)
_auth = [
    'ApiKey',
]
SchemaFor200ResponseBodyApplicationJson = AttackResultSchema


@dataclass
class ApiResponseFor200(api_client.ApiResponse):
    body: AttackResult


@dataclass
class ApiResponseFor200Async(api_client.AsyncApiResponse):
    body: AttackResult


_response_for_200 = api_client.OpenApiResponse(
    response_cls=ApiResponseFor200,
    response_cls_async=ApiResponseFor200Async,
    content={
        'application/json': api_client.MediaType(
            schema=SchemaFor200ResponseBodyApplicationJson),
    },
)
_status_code_to_response = {
    '200': _response_for_200,
}
_all_accept_content_types = (
    'application/json',
)


class BaseApi(api_client.Api):

    def _attack_monster_mapped_args(
        self,
        monster: typing.Optional[str] = None,
        sword: typing.Optional[Sword] = None,
    ) -> api_client.MappedArgs:
        args: api_client.MappedArgs = api_client.MappedArgs()
        _body = {}
        if monster is not None:
            _body["monster"] = monster
        if sword is not None:
            _body["sword"] = sword
        args.body = _body
        return args

    async def _aattack_monster_oapg(
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
        Attack a monster
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
        if body is not schemas.unset:
            serialized_data = request_body_attack.serialize(body, content_type)
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


    def _attack_monster_oapg(
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
        Attack a monster
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
        if body is not schemas.unset:
            serialized_data = request_body_attack.serialize(body, content_type)
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


class AttackMonsterRaw(BaseApi):
    # this class is used by api classes that refer to endpoints with operationId fn names

    async def aattack_monster(
        self,
        monster: typing.Optional[str] = None,
        sword: typing.Optional[Sword] = None,
        **kwargs,
    ) -> typing.Union[
        ApiResponseFor200Async,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        args = self._attack_monster_mapped_args(
            monster=monster,
            sword=sword,
        )
        return await self._aattack_monster_oapg(
            body=args.body,
            **kwargs,
        )
    
    def attack_monster(
        self,
        monster: typing.Optional[str] = None,
        sword: typing.Optional[Sword] = None,
    ) -> typing.Union[
        ApiResponseFor200,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        args = self._attack_monster_mapped_args(
            monster=monster,
            sword=sword,
        )
        return self._attack_monster_oapg(
            body=args.body,
        )

class AttackMonster(BaseApi):

    async def aattack_monster(
        self,
        monster: typing.Optional[str] = None,
        sword: typing.Optional[Sword] = None,
        validate: bool = False,
        **kwargs,
    ) -> AttackResultPydantic:
        raw_response = await self.raw.aattack_monster(
            monster=monster,
            sword=sword,
            **kwargs,
        )
        if validate:
            return AttackResultPydantic(**raw_response.body)
        return api_client.construct_model_instance(AttackResultPydantic, raw_response.body)
    
    
    def attack_monster(
        self,
        monster: typing.Optional[str] = None,
        sword: typing.Optional[Sword] = None,
        validate: bool = False,
    ) -> AttackResultPydantic:
        raw_response = self.raw.attack_monster(
            monster=monster,
            sword=sword,
        )
        if validate:
            return AttackResultPydantic(**raw_response.body)
        return api_client.construct_model_instance(AttackResultPydantic, raw_response.body)


class ApiForpost(BaseApi):
    # this class is used by api classes that refer to endpoints by path and http method names

    async def apost(
        self,
        monster: typing.Optional[str] = None,
        sword: typing.Optional[Sword] = None,
        **kwargs,
    ) -> typing.Union[
        ApiResponseFor200Async,
        api_client.ApiResponseWithoutDeserializationAsync,
        AsyncGeneratorResponse,
    ]:
        args = self._attack_monster_mapped_args(
            monster=monster,
            sword=sword,
        )
        return await self._aattack_monster_oapg(
            body=args.body,
            **kwargs,
        )
    
    def post(
        self,
        monster: typing.Optional[str] = None,
        sword: typing.Optional[Sword] = None,
    ) -> typing.Union[
        ApiResponseFor200,
        api_client.ApiResponseWithoutDeserialization,
    ]:
        args = self._attack_monster_mapped_args(
            monster=monster,
            sword=sword,
        )
        return self._attack_monster_oapg(
            body=args.body,
        )

