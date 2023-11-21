# coding: utf-8

"""
    python-pydantic-schema-with-underscores-in-name API

    A simple API based for testing python-pydantic-schema-with-underscores-in-name.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest
from unittest.mock import patch

import urllib3

import python_pydantic_schema_with_underscores_in_name
from python_pydantic_schema_with_underscores_in_name.paths.simple_endpoint import get
from python_pydantic_schema_with_underscores_in_name import configuration, schemas, api_client

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
