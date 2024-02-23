# coding: utf-8

"""
    python-async-timeout-with-top-level-operation API

    A simple API based for testing python-async-timeout-with-top-level-operation.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_async_timeout_with_top_level_operation import PythonAsyncTimeoutWithTopLevelOperationClient

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        pythonasynctimeoutwithtopleveloperationclient = PythonAsyncTimeoutWithTopLevelOperationClient(
        
                        api_key_auth = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(pythonasynctimeoutwithtopleveloperationclient)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
