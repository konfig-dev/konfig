# coding: utf-8

"""
    python-pydantic-free-form-object-property API

    A simple API based for testing python-pydantic-free-form-object-property.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_pydantic_free_form_object_property import PythonPydanticFreeFormObjectPropertyClient

class TestFreeFormObjectProperty(unittest.TestCase):
    def setUp(self):
        pass

    def test_free_form_object_property(self):
        client = PythonPydanticFreeFormObjectPropertyClient(
            host="http://127.0.0.1:4043",
            api_key='YOUR_API_KEY',
        )
        resp = client.test.fetch()
        self.assertIsNotNone(resp.free_form_object)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
