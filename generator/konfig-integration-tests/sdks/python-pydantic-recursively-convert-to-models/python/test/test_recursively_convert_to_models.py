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

    def test_rescursively_convert_to_models(self):
        client = PythonPydanticRecursivelyConvertToModels(
            api_key = 'YOUR_API_KEY',
            host = "http://127.0.0.1:4003"
        )
        response = client.test.fetch()
        self.assertIsNotNone(response.a.id)
        self.assertIsNotNone(response.b[0].id)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
