# coding: utf-8


import unittest

import os
from pprint import pprint
from python_dataclass_responses import PythonDataclassResponses
from dataclasses import is_dataclass


class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_response_is_dataclass(self):
        client = PythonDataclassResponses(
            api_key="YOUR_API_KEY", host="http://127.0.0.1:4011"
        )
        response = client.test.fetch("input")

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
