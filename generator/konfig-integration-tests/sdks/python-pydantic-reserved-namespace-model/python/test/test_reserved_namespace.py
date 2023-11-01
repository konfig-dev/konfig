# coding: utf-8

"""
    python-pydantic-reserved-namespace-model API

    A simple API based for testing python-pydantic-reserved-namespace-model.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_pydantic_reserved_namespace_model import PythonPydanticReservedNamespaceModel

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_reserved_namespace(self):
        client = PythonPydanticReservedNamespaceModel(
            api_key = 'YOUR_API_KEY',
            host = 'http://127.0.0.1:4001'
        )
        response = client.test.fetch()

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
