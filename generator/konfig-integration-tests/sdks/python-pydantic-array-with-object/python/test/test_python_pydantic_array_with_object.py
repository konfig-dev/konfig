import unittest

import os
from pprint import pprint
from python_pydantic_array_with_object import PythonPydanticArrayWithObjectClient

class TestPythonPydanticArrayWithObject(unittest.TestCase):
    def setUp(self):
        pass

    def test_python_pydantic_array_with_object(self):
        client = PythonPydanticArrayWithObjectClient(
            host="http://127.0.0.1:4095",
            api_key='YOUR_API_KEY',
        )
        resp = client.test.fetch()
        self.assertIsNotNone(resp)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
