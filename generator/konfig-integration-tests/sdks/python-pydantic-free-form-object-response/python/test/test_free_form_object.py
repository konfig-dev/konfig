# coding: utf-8

"""
    python-pydantic-free-form-object-response API

    A simple API based for testing python-pydantic-free-form-object-response.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_pydantic_free_form_object_response import PythonPydanticFreeFormObjectResponse

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_free_form_object(self):
        client = PythonPydanticFreeFormObjectResponse(
            api_key = 'YOUR_API_KEY',
            host = "http://127.0.0.1:4000"
        )
        response = client.test.fetch("test")
        print(response)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
