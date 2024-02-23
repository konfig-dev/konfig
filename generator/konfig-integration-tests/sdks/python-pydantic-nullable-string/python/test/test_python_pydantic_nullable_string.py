import unittest

import os
from pprint import pprint
from python_pydantic_nullable_string import PythonPydanticNullableStringClient

class TestPythonPydanticNullableString(unittest.TestCase):
    def setUp(self):
        pass

    def test_python_pydantic_nullable_string(self):
        client = PythonPydanticNullableStringClient(
            host="http://127.0.0.1:4033",
            api_key_auth='YOUR_API_KEY',
        )
        resp = client.test.fetch()
        self.assertIsNotNone(resp)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
