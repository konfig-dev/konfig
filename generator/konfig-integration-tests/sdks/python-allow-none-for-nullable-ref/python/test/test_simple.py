# coding: utf-8

"""
    python-allow-none-for-nullable-ref API

    A simple API based for testing python-allow-none-for-nullable-ref.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_allow_none_for_nullable_ref import PythonAllowNoneForNullableRefClient

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        pythonallownonefornullablerefclient = PythonAllowNoneForNullableRefClient(
        
                        api_key = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(pythonallownonefornullablerefclient)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
