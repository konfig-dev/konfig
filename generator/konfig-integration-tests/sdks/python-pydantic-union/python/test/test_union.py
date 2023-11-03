# coding: utf-8

"""
    python-pydantic-union API

    A simple API based for testing python-pydantic-union.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_pydantic_union import PythonPydanticUnion

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_union(self):
        client = PythonPydanticUnion(
            api_key = 'YOUR_API_KEY',
            host = "http://127.0.0.1:4004"
        )
        response = client.test.fetch()
        self.assertIsNotNone(response.value)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
