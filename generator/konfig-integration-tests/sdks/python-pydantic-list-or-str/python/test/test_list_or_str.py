# coding: utf-8

"""
    python-pydantic-list-or-str API

    A simple API based for testing python-pydantic-list-or-str.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_pydantic_list_or_str import PythonPydanticListOrStrClient

class TestListOrStr(unittest.TestCase):
    def setUp(self):
        pass

    def test_list_or_str(self):
        client = PythonPydanticListOrStrClient(
            host="http://127.0.0.1:5400"
            api_key = 'YOUR_API_KEY',
        )

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
