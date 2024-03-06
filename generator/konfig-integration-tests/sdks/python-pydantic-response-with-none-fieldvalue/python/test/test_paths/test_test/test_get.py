# coding: utf-8

"""
    python-pydantic-response-with-none-fieldvalue API

    A simple API based for testing python-pydantic-response-with-none-fieldvalue.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest
from unittest.mock import patch

import urllib3

import python_pydantic_response_with_none_fieldvalue
from python_pydantic_response_with_none_fieldvalue.paths.test import get
from python_pydantic_response_with_none_fieldvalue import configuration, schemas, api_client

from .. import ApiTestMixin


class TestTest(ApiTestMixin, unittest.TestCase):
    """
    Test unit test stubs
        Fetches a JSON value based on input parameter
    """

    def setUp(self):
        pass

    def tearDown(self):
        pass

    response_status = 200




if __name__ == '__main__':
    unittest.main()
