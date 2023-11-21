# coding: utf-8

"""
    python-pydantic-list-or-str API

    A simple API based for testing python-pydantic-list-or-str.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest
from unittest.mock import patch

import urllib3

import python_pydantic_list_or_str
from python_pydantic_list_or_str.paths.simple_endpoint import get
from python_pydantic_list_or_str import configuration, schemas, api_client

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
