# coding: utf-8

"""
    python-pydantic-schema-with-underscores-in-name API

    A simple API based for testing python-pydantic-schema-with-underscores-in-name.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_pydantic_schema_with_underscores_in_name import PythonPydanticSchemaWithUnderscoresInNameClient

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        pythonpydanticschemawithunderscoresinnameclient = PythonPydanticSchemaWithUnderscoresInNameClient(
        
            api_key = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(pythonpydanticschemawithunderscoresinnameclient)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
