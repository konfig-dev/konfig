# coding: utf-8

"""
    Python Dataclass Responses API

    A simple API based on python dataclass responses.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_dataclass_responses import PythonDataclassResponses

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        pythondataclassresponses = PythonDataclassResponses(
        )
        self.assertIsNotNone(pythondataclassresponses)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
