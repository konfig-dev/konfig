# coding: utf-8

"""
    python-pydantic-raw-http-doc-with-top-level-configuration API

    A simple API based for testing python-pydantic-raw-http-doc-with-top-level-configuration.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_pydantic_raw_http_doc_with_top_level_configuration import PythonPydanticRawHttpDocWithTopLevelConfiguration

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        pythonpydanticrawhttpdocwithtoplevelconfiguration = PythonPydanticRawHttpDocWithTopLevelConfiguration(
        
            api_key = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(pythonpydanticrawhttpdocwithtoplevelconfiguration)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
