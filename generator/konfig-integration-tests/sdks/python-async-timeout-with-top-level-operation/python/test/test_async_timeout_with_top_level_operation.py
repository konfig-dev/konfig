# coding: utf-8

"""
    python-async-timeout-with-top-level-operation API

    A simple API based for testing python-async-timeout-with-top-level-operation.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""
import asyncio
import unittest

import os
from pprint import pprint
from python_async_timeout_with_top_level_operation import PythonAsyncTimeoutWithTopLevelOperationClient

class TestAsyncTimeoutWithTopLevelOperation(unittest.TestCase):
    def setUp(self):
        pass

    def test_async_timeout_with_top_level_operation(self):
        # Ensure that we can provide a timeout to the client
        async def run_async_test():
            client = PythonAsyncTimeoutWithTopLevelOperationClient(
                api_key_auth="YOUR_API_KEY",
                host="http://127.0.0.1:4017"
            )
            # expect exception to be thrown with a timeout of pretty much 0
            with self.assertRaises(asyncio.TimeoutError):
                await client.afetch(timeout=0.00000000000000000001)

        asyncio.run(run_async_test())

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
