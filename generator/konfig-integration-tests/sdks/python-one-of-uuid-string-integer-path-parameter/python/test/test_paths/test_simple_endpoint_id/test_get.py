# coding: utf-8

"""
    python-one-of-uuid-string-integer-path-parameter API

    A simple API based for testing python-one-of-uuid-string-integer-path-parameter.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest
from unittest.mock import patch

import urllib3

import python_one_of_uuid_string_integer_path_parameter
from python_one_of_uuid_string_integer_path_parameter.paths.simple_endpoint_id import get
from python_one_of_uuid_string_integer_path_parameter import configuration, schemas, api_client

from .. import ApiTestMixin


class TestSimpleEndpointId(ApiTestMixin, unittest.TestCase):
    """
    SimpleEndpointId unit test stubs
        Fetches a JSON value based on input parameter
    """

    def setUp(self):
        pass

    def tearDown(self):
        pass

    response_status = 200




if __name__ == '__main__':
    unittest.main()
