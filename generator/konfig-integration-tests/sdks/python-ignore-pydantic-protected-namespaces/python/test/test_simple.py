# coding: utf-8

"""
    python-ignore-pydantic-protected-namespaces API

    A simple API based for testing python-ignore-pydantic-protected-namespaces.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_ignore_pydantic_protected_namespaces import PythonIgnorePydanticProtectedNamespacesClient

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        pythonignorepydanticprotectednamespacesclient = PythonIgnorePydanticProtectedNamespacesClient(
        
                        api_key = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(pythonignorepydanticprotectednamespacesclient)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
