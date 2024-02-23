import unittest

import os
from pprint import pprint
from python_pydantic_any_schema_dict_response import PythonPydanticAnySchemaDictResponseClient

class TestPythonPydanticAnySchemaDictResponse(unittest.TestCase):
    def setUp(self):
        pass

    def test_python_pydantic_any_schema_dict_response(self):
        client = PythonPydanticAnySchemaDictResponseClient(
            host="http://127.0.0.1:4055",
            api_key_auth='YOUR_API_KEY',
        )
        resp = client.test.fetch()
        self.assertIsNotNone(resp)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
