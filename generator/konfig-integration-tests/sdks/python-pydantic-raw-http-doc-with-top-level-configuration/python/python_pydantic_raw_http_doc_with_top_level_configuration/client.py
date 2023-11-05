# coding: utf-8
"""
    python-pydantic-raw-http-doc-with-top-level-configuration API

    A simple API based for testing python-pydantic-raw-http-doc-with-top-level-configuration.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import typing
import inspect
from datetime import date, datetime
from python_pydantic_raw_http_doc_with_top_level_configuration.client_custom import ClientCustom
from python_pydantic_raw_http_doc_with_top_level_configuration.configuration import Configuration
from python_pydantic_raw_http_doc_with_top_level_configuration.api_client import ApiClient
from python_pydantic_raw_http_doc_with_top_level_configuration.type_util import copy_signature
from python_pydantic_raw_http_doc_with_top_level_configuration.apis.tags.test_api import TestApi



class PythonPydanticRawHttpDocWithTopLevelConfiguration(ClientCustom):

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
    ):
        return await self.test.afetch(
        )

    @copy_signature(TestApi.fetch)
    def fetch(
        self,
    ):
        return self.test.fetch(
        )
