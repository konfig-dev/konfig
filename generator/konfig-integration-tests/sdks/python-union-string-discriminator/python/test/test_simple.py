# coding: utf-8

"""
    python-union-string-discriminator API

    A simple API based for testing python-union-string-discriminator.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_union_string_discriminator import PythonUnionStringDiscriminatorClient

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        pythonunionstringdiscriminatorclient = PythonUnionStringDiscriminatorClient(
        
            api_key = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(pythonunionstringdiscriminatorclient)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
