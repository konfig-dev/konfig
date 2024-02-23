# coding: utf-8


import unittest

from python_typeddict import PythonTypedDictResponses


class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_response_is_typeddict(self):
        client = PythonTypedDictResponses(
            api_key_auth="YOUR_API_KEY", host="http://127.0.0.1:4012"
        )
        response = client.test.fetch("test")
        self.assertIsNotNone(response.body["propertyA"])

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
