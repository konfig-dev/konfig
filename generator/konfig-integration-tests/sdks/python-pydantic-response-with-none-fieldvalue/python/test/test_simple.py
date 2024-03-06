# coding: utf-8

"""
    python-pydantic-response-with-none-fieldvalue API

    A simple API based for testing python-pydantic-response-with-none-fieldvalue.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_pydantic_response_with_none_fieldvalue import PythonPydanticResponseWithNoneFieldvalueClient

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        pythonpydanticresponsewithnonefieldvalueclient = PythonPydanticResponseWithNoneFieldvalueClient(
        
                        api_key = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(pythonpydanticresponsewithnonefieldvalueclient)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
