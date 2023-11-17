# coding: utf-8

"""
    python-async-timeout-with-top-level-operation API

    A simple API based for testing python-async-timeout-with-top-level-operation.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest
from unittest.mock import patch

import urllib3

import python_async_timeout_with_top_level_operation
from python_async_timeout_with_top_level_operation.paths.simple_endpoint import get
from python_async_timeout_with_top_level_operation import configuration, schemas, api_client

from .. import ApiTestMixin


class TestSimpleEndpoint(ApiTestMixin, unittest.TestCase):
    """
    SimpleEndpoint unit test stubs
        Fetches a JSON value based on input parameter
    """

    def setUp(self):
        pass

    def tearDown(self):
        pass

    response_status = 200




if __name__ == '__main__':
    unittest.main()
