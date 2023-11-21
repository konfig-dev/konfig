# coding: utf-8

"""
    python-pydantic-array-with-object API

    A simple API based for testing python-pydantic-array-with-object.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_pydantic_array_with_object import PythonPydanticArrayWithObjectClient

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        pythonpydanticarraywithobjectclient = PythonPydanticArrayWithObjectClient(
        
            api_key = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(pythonpydanticarraywithobjectclient)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
