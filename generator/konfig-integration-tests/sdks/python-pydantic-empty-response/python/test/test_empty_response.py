# coding: utf-8

"""
    python-pydantic-empty-response API

    A simple API based for testing python-pydantic-empty-response.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_pydantic_empty_response import PythonPydanticEmptyResponse

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_empty_response(self):
        client = PythonPydanticEmptyResponse(
            api_key_auth = 'YOUR_API_KEY',
            host="http://127.0.0.1:4006"
        )
        resp = client.test.fetch()
        self.assertIsNone(resp)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
