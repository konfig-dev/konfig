# coding: utf-8

"""
    python-pydantic-recursively-convert-to-models API

    A simple API based for testing python-pydantic-recursively-convert-to-models.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_pydantic_recursively_convert_to_models import PythonPydanticRecursivelyConvertToModels

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        pythonpydanticrecursivelyconverttomodels = PythonPydanticRecursivelyConvertToModels(
        
                        api_key_auth = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(pythonpydanticrecursivelyconverttomodels)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
