# coding: utf-8

"""
    python-readme-header-snippet API

    A simple API based for testing python-readme-header-snippet.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_readme_header_snippet import PythonReadmeHeaderSnippetClient

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        pythonreadmeheadersnippetclient = PythonReadmeHeaderSnippetClient(
        
                        api_key_auth = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(pythonreadmeheadersnippetclient)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
