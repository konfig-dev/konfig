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
from python_circular_reference import PythonCircularReferenceClient

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        pythoncircularreferenceclient = PythonCircularReferenceClient(
        
            api_key = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(pythoncircularreferenceclient)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
