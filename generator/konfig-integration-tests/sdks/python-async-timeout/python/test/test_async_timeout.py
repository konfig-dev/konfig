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

    def test_response_is_pydantic_async(self):
        async def run_async_test():
            client = PythonAsyncTimeoutClient(
                api_key="YOUR_API_KEY", host="http://127.0.0.1:4015"
            )
            # expect exception to be thrown with a timeout of 0
            await client.test.afetch(timeout=0)

        asyncio.run(run_async_test())

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
