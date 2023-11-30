# coding: utf-8
"""
    test-timeout-bug API

    A simple API based for testing test-timeout-bug.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import typing
import inspect
from datetime import date, datetime
from test_timeout_bug.client_custom import ClientCustom
from test_timeout_bug.configuration import Configuration
from test_timeout_bug.api_client import ApiClient
from test_timeout_bug.type_util import copy_signature
from test_timeout_bug.apis.tags.test_api import TestApi



class TestTimeoutBugClient(ClientCustom):

    def __init__(self, configuration: typing.Union[Configuration, None] = None, **kwargs):
        super().__init__(configuration, **kwargs)
        if (len(kwargs) > 0):
            configuration = Configuration(**kwargs)
        if (configuration is None):
            raise Exception("configuration is required")
        api_client = ApiClient(configuration)
        self.test: TestApi = TestApi(api_client)
