# coding: utf-8


import unittest
import asyncio

from python_pydantic import PythonPydanticResponses
from dataclasses import is_dataclass


class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_response_is_pydantic(self):
        client = PythonPydanticResponses(
            api_key_auth="YOUR_API_KEY", host="http://127.0.0.1:4011"
        )
        response = client.test.fetch("test")
        self.assertIsNotNone(response.property_a)

    def test_response_is_pydantic_async(self):
        async def run_async_test():
            client = PythonPydanticResponses(
                api_key_auth="YOUR_API_KEY", host="http://127.0.0.1:4011"
            )
            response = await client.test.afetch("test")
            self.assertIsNotNone(response.property_a)
        asyncio.run(run_async_test())

    def test_raw_response(self):
        client = PythonPydanticResponses(
            api_key_auth="YOUR_API_KEY", host="http://127.0.0.1:4011"
        )
        response = client.test.raw.fetch("test")
        self.assertIsNotNone(response.body["propertyA"])

    def test_raw_is_not_pydantic(self):
        client = PythonPydanticResponses(
            api_key_auth="YOUR_API_KEY", host="http://127.0.0.1:4011"
        )
        response = client.test.raw.fetch("test")
        self.assertRaises(AttributeError, lambda: response.propertyA)

    # Ensure that reserved words are properly handled by appending _ and aliasing the original name
    def test_reserved_word(self):
        client = PythonPydanticResponses(
            api_key_auth="YOUR_API_KEY", host="http://127.0.0.1:4011"
        )
        response = client.test.reserved_word()
        self.assertIsNotNone(response.class_)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
