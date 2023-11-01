# coding: utf-8


import unittest

from python_pydantic import PythonPydanticResponses
from dataclasses import is_dataclass


class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_response_is_pydantic(self):
        client = PythonPydanticResponses(
            api_key="YOUR_API_KEY", host="http://127.0.0.1:4011"
        )
        response = client.test.fetch("test")
        self.assertIsNotNone(response.propertyA)

    def test_raw_response(self):
        client = PythonPydanticResponses(
            api_key="YOUR_API_KEY", host="http://127.0.0.1:4011"
        )
        response = client.test.raw.fetch("test")
        self.assertIsNotNone(response.body["propertyA"])

    def test_raw_is_not_pydantic(self):
        client = PythonPydanticResponses(
            api_key="YOUR_API_KEY", host="http://127.0.0.1:4011"
        )
        response = client.test.raw.fetch("test")
        self.assertRaises(AttributeError, lambda: response.propertyA)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
