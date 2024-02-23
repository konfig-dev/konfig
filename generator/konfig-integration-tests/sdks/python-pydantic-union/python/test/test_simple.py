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

    def test_client(self):
        pythonpydanticunion = PythonPydanticUnion(
        
                        api_key_auth = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(pythonpydanticunion)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
