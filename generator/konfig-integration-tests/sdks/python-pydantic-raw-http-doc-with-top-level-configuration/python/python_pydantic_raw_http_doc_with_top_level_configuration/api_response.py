from dataclasses import dataclass
import aiohttp
from multidict import CIMultiDictProxy
from urllib3._collections import HTTPHeaderDict
import urllib3
import typing


@dataclass
class ApiResponse:
    headers: HTTPHeaderDict
    status: int
    response: urllib3.HTTPResponse
    round_trip_time: float
    body: typing.Any


@dataclass
class AsyncApiResponse:
    headers: CIMultiDictProxy[str]
    status: int
    response: aiohttp.ClientResponse
    round_trip_time: float
    body: typing.Any


@dataclass
class AsyncGeneratorResponse:
    headers: CIMultiDictProxy[str]
    status: int
    content: typing.AsyncGenerator
    response: aiohttp.ClientResponse
