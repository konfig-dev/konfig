# coding: utf-8

"""
    python-circular-reference API

    A simple API based for testing python-circular-reference.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_circular_reference_2 import PythonCircularReference2Client

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        pythoncircularreference2client = PythonCircularReference2Client(
        
                        api_key_auth = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(pythoncircularreference2client)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
