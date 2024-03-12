# coding: utf-8

"""
    python-enum-parameter API

    A simple API based for testing python-enum-parameter.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_enum_parameter import PythonEnumParameterClient

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        pythonenumparameterclient = PythonEnumParameterClient(
        
                        api_key = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(pythonenumparameterclient)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
