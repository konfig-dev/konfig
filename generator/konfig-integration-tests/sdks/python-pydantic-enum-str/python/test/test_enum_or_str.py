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

class TestEnumOrStr(unittest.TestCase):
    def setUp(self):
        pass

    def test_enum_or_str(self):
        client = PythonPydanticEnumStrClient(
            host='http://127.0.0.1:4059',
            api_key = 'YOUR_API_KEY',
        )
        resp = client.test.fetch()

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
