# coding: utf-8

"""
    python-pydantic-list-response API

    A simple API based for testing python-pydantic-list-response.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_pydantic_list_response import PythonPydanticListResponse

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        client = PythonPydanticListResponse(
            api_key = 'YOUR_API_KEY',
            host = "http://127.0.0.1:4002"
        )
        response = client.test.fetch()
        self.assertIsNotNone(response)
        self.assertTrue(isinstance(response, list))

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
