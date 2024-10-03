# coding: utf-8

"""
    python-one-of-uuid-string-integer-path-parameter API

    A simple API based for testing python-one-of-uuid-string-integer-path-parameter.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest

import os
from pprint import pprint
from python_one_of_uuid_string_integer_path_parameter import (
    PythonOneOfUuidStringIntegerPathParameterClient,
)


class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        pythononeofuuidstringintegerpathparameterclient = (
            PythonOneOfUuidStringIntegerPathParameterClient(
                api_key="YOUR_API_KEY",
            )
        )
        self.assertIsNotNone(pythononeofuuidstringintegerpathparameterclient)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
