# coding: utf-8

"""
    python-pydantic-nested-union-with-list-and-str API

    A simple API based for testing python-pydantic-nested-union-with-list-and-str.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_pydantic_nested_union_with_list_and_str import PythonPydanticNestedUnionWithListAndStrClient

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        pythonpydanticnestedunionwithlistandstrclient = PythonPydanticNestedUnionWithListAndStrClient(
        
            api_key = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(pythonpydanticnestedunionwithlistandstrclient)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
