# coding: utf-8
"""
    python-async-timeout-with-top-level-operation API

    A simple API based for testing python-async-timeout-with-top-level-operation.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import typing
import inspect
from datetime import date, datetime
from python_async_timeout_with_top_level_operation.client_custom import ClientCustom
from python_async_timeout_with_top_level_operation.configuration import Configuration
from python_async_timeout_with_top_level_operation.api_client import ApiClient
from python_async_timeout_with_top_level_operation.type_util import copy_signature
from python_async_timeout_with_top_level_operation.apis.tags.test_api import TestApi



class PythonAsyncTimeoutWithTopLevelOperationClient(ClientCustom):

    def __init__(self, configuration: typing.Union[Configuration, None] = None, **kwargs):
        super().__init__(configuration, **kwargs)
        if (len(kwargs) > 0):
            configuration = Configuration(**kwargs)
        if (configuration is None):
            raise Exception("configuration is required")
        api_client = ApiClient(configuration)
        self.test: TestApi = TestApi(api_client)

    @copy_signature(TestApi.afetch)
    async def afetch(
        self,
        **kwargs,
    ):
        return await self.test.afetch(
            **kwargs,
        )

    @copy_signature(TestApi.fetch)
    def fetch(
        self,
    ):
        return self.test.fetch(
        )
