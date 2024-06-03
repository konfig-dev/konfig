# coding: utf-8

"""
    python-api-exception-contains-response-headers API

    A simple API based for testing python-api-exception-contains-response-headers.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_api_exception_contains_response_headers import PythonApiExceptionContainsResponseHeadersClient

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        pythonapiexceptioncontainsresponseheadersclient = PythonApiExceptionContainsResponseHeadersClient(
        
                        api_key = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(pythonapiexceptioncontainsresponseheadersclient)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
