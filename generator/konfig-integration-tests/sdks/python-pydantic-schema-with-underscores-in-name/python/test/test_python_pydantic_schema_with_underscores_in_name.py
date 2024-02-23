import unittest

import os
from pprint import pprint
from python_pydantic_schema_with_underscores_in_name import PythonPydanticSchemaWithUnderscoresInNameClient

class TestPythonPydanticSchemaWithUnderscoresInName(unittest.TestCase):
    def setUp(self):
        pass

    def test_python_pydantic_schema_with_underscores_in_name(self):
        client = PythonPydanticSchemaWithUnderscoresInNameClient(
            host="http://127.0.0.1:4028",
            api_key_auth='YOUR_API_KEY',
        )
        resp = client.test.fetch()
        self.assertIsNotNone(resp)
        self.assertIsNotNone(resp.value)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
