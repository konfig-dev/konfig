# coding: utf-8

"""
    python-async-default-timeout API

    A simple API based for testing python-async-default-timeout.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""
import asyncio
import unittest

import os
from pprint import pprint
from python_async_default_timeout import PythonAsyncDefaultTimeoutClient

class TestAsyncDefaultTimeout(unittest.TestCase):
    def setUp(self):
        pass

    def test_async_default_timeout(self):
        # Ensure that the default timeout is set to what is configured in the konfig.yaml
        # by asserting that making a request with no timeout specified throws a timeout error.
        # this happens because the konfig.yaml sets the default timeout to a really small number
        async def run_async_test():
            client = PythonAsyncDefaultTimeoutClient(
                api_key_auth="YOUR_API_KEY",
                host="http://127.0.0.1:4016"
            )
            # expect exception to be thrown with a timeout of pretty much 0
            with self.assertRaises(asyncio.TimeoutError):
                await client.test.afetch()

        asyncio.run(run_async_test())

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
