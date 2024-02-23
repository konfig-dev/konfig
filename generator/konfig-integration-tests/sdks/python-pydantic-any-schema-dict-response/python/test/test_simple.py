# coding: utf-8

"""
    python-pydantic-any-schema-dict-response API

    A simple API based for testing python-pydantic-any-schema-dict-response.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_pydantic_any_schema_dict_response import PythonPydanticAnySchemaDictResponseClient

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        pythonpydanticanyschemadictresponseclient = PythonPydanticAnySchemaDictResponseClient(
        
                        api_key_auth = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(pythonpydanticanyschemadictresponseclient)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
