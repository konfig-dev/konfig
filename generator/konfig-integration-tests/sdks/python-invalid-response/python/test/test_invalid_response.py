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
            api_key = 'YOUR_API_KEY',
        )
        response = client.test.invalid_scalar()
        self.assertIsNotNone(response)
        self.assertTrue(isinstance(response.str_, int))

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
