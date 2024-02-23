# coding: utf-8

"""
    python-pydantic-enum-str API

    A simple API based for testing python-pydantic-enum-str.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_pydantic_enum_str import PythonPydanticEnumStrClient

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        pythonpydanticenumstrclient = PythonPydanticEnumStrClient(
        
                        api_key_auth = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(pythonpydanticenumstrclient)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
