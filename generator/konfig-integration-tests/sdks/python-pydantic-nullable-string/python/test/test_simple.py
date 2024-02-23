# coding: utf-8

"""
    python-pydantic-nullable-string API

    A simple API based for testing python-pydantic-nullable-string.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_pydantic_nullable_string import PythonPydanticNullableStringClient

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        pythonpydanticnullablestringclient = PythonPydanticNullableStringClient(
        
                        api_key_auth = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(pythonpydanticnullablestringclient)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
