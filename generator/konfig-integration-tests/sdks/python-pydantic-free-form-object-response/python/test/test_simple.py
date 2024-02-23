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

    def test_client(self):
        pythonpydanticfreeformobjectresponse = PythonPydanticFreeFormObjectResponse(
        
                        api_key_auth = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(pythonpydanticfreeformobjectresponse)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
