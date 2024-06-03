# coding: utf-8

"""
    python-api-exception-contains-response-headers API

    A simple API based for testing python-api-exception-contains-response-headers.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest
from unittest.mock import patch

import urllib3

import python_api_exception_contains_response_headers
from python_api_exception_contains_response_headers.paths.simple_endpoint import get
from python_api_exception_contains_response_headers import configuration, schemas, api_client

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

    response_status = 401




if __name__ == '__main__':
    unittest.main()
