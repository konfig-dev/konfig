# coding: utf-8

"""
    python-pydantic-response-as-param API

    A simple API based for testing python-pydantic-response-as-param.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_pydantic_response_as_param import PythonPydanticResponseAsParamClient

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        pythonpydanticresponseasparamclient = PythonPydanticResponseAsParamClient(
        
            api_key = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(pythonpydanticresponseasparamclient)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
