# coding: utf-8

"""
    python-pydantic-additional-properties-anyof API

    A simple API based for testing python-pydantic-additional-properties-anyof.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_pydantic_additional_properties_anyof import PythonPydanticAdditionalPropertiesAnyofClient

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        pythonpydanticadditionalpropertiesanyofclient = PythonPydanticAdditionalPropertiesAnyofClient(
        
                        api_key_auth = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(pythonpydanticadditionalpropertiesanyofclient)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
