# coding: utf-8

"""
    python-invalid-response API

    A simple API based for testing python-invalid-response.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_invalid_response import PythonInvalidResponseClient

class TestInvalidResponse(unittest.TestCase):
    def setUp(self):
        pass

    def test_invalid_scalar(self):
        client = PythonInvalidResponseClient(
            host="http://127.0.0.1:5555",
            api_key = 'YOUR_API_KEY',
        )
        resp = client.test.invalid_scalar()
        self.assertIsNotNone(resp)
        self.assertIsInstance(resp.str_, int)

    def test_invalid_array(self):
        client = PythonInvalidResponseClient(
            host="http://127.0.0.1:5555",
            api_key = 'YOUR_API_KEY',
        )
        resp = client.test.invalid_array()
        self.assertIsNotNone(resp)
        self.assertIsInstance(resp.array, dict)

    def test_invalid_object(self):
        client = PythonInvalidResponseClient(
            host="http://127.0.0.1:5555",
            api_key = 'YOUR_API_KEY',
        )
        resp = client.test.invalid_object()
        self.assertIsNotNone(resp)
        self.assertIsInstance(resp.object, list)

    def test_only_one_property_is_invalid(self):
        client = PythonInvalidResponseClient(
            host="http://127.0.0.1:5555",
            api_key = 'YOUR_API_KEY',
        )
        resp = client.test.only_one_property_is_invalid()
        self.assertIsNotNone(resp)
        self.assertIsInstance(resp.string, str)
        self.assertIsInstance(resp.number, str)

    def test_object_instead_of_scalar(self):
        client = PythonInvalidResponseClient(
            host="http://127.0.0.1:5555",
            api_key = 'YOUR_API_KEY',
        )
        resp = client.test.object_instead_of_scalar()
        self.assertIsInstance(resp, dict)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
