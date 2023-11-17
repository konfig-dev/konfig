# coding: utf-8

"""
    python-async-timeout API

    A simple API based for testing python-async-timeout.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""
import asyncio
import unittest

import os
from pprint import pprint
from python_async_timeout import PythonAsyncTimeoutClient

class TestAsyncTimeout(unittest.TestCase):
    def setUp(self):
        pass

    def test_async_timeout(self):
        # Ensure that we can provide a timeout to the client
        async def run_async_test():
            client = PythonAsyncTimeoutClient(
                api_key="YOUR_API_KEY", host="http://127.0.0.1:4015"
            )
            # expect exception to be thrown with a timeout of pretty much 0
            with self.assertRaises(asyncio.TimeoutError):
                await client.test.afetch(timeout=0.00000000000000000001)

        asyncio.run(run_async_test())

    def test_async_timeout_is_in_seconds(self):
        # Ensure that timeout is measured in seconds
        async def run_async_test():
            client = PythonAsyncTimeoutClient(
                api_key="YOUR_API_KEY", host="http://127.0.0.1:4015"
            )
            # expect exception to not be thrown with a timeout of 0.5 second
            # request_before_hook.py is set to sleep for 0.5 second and since 0.25 < 0.5 we should not get a timeout
            await client.test.afetch(timeout=0.5)

        asyncio.run(run_async_test())

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
