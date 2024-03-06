# coding: utf-8

"""
    python-nested-array-items-ref-in-any-of API

    A simple API based for testing python-nested-array-items-ref-in-any-of.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_nested_array_items_ref_in_any_of import PythonNestedArrayItemsRefInAnyOfClient

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        pythonnestedarrayitemsrefinanyofclient = PythonNestedArrayItemsRefInAnyOfClient(
        
                        api_key = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(pythonnestedarrayitemsrefinanyofclient)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
