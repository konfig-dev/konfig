# coding: utf-8

"""
    python-async-default-timeout API

    A simple API based for testing python-async-default-timeout.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_async_default_timeout import PythonAsyncDefaultTimeoutClient

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        pythonasyncdefaulttimeoutclient = PythonAsyncDefaultTimeoutClient(
        
                        api_key_auth = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(pythonasyncdefaulttimeoutclient)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
