# coding: utf-8

"""
    Python TypedDict Responses API

    A simple API based on python typeddict responses.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_typeddict import PythonTypedDictResponses

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        pythontypeddictresponses = PythonTypedDictResponses(
        
                        api_key_auth = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(pythontypeddictresponses)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
