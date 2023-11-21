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

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        pythonpydanticlistorstrclient = PythonPydanticListOrStrClient(
        
            api_key = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(pythonpydanticlistorstrclient)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
