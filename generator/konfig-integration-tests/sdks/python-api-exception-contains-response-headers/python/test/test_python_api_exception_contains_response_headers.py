import unittest

import os
from pprint import pprint
from python_api_exception_contains_response_headers.exceptions import ApiException 
from python_api_exception_contains_response_headers import PythonApiExceptionContainsResponseHeadersClient

class TestPythonApiExceptionContainsResponseHeaders(unittest.TestCase):
    def setUp(self):
        pass

    def test_python_api_exception_contains_response_headers(self):
        client = PythonApiExceptionContainsResponseHeadersClient(
            host="http://127.0.0.1:4089",
            api_key='YOUR_API_KEY',
        )
        try:
            client.test.fetch()
            self.assertFalse(True, "Expected an exception")
        except ApiException as e:
            self.assertTrue("HTTP response headers" in str(e))

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
