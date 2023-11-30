# coding: utf-8

"""
    test-timeout-bug API

    A simple API based for testing test-timeout-bug.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from test_timeout_bug import TestTimeoutBugClient

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        testtimeoutbugclient = TestTimeoutBugClient(
        
            api_key = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(testtimeoutbugclient)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
