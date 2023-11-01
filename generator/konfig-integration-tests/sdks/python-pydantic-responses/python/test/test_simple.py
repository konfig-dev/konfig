# coding: utf-8

"""
    Python Pydantic Responses API

    A simple API based on python pydantic responses.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_pydantic import PythonPydanticResponses

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        pythonpydanticresponses = PythonPydanticResponses(
        
            api_key = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(pythonpydanticresponses)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
