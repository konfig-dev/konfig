import unittest

import os
from pprint import pprint
from python_pydantic_nested_union_with_list_and_str import PythonPydanticNestedUnionWithListAndStrClient

class TestPythonPydanticNestedUnionWithListAndStr(unittest.TestCase):
    def setUp(self):
        pass

    def test_python_pydantic_nested_union_with_list_and_str(self):
        client = PythonPydanticNestedUnionWithListAndStrClient(
            host="http://127.0.0.1:4066",
            api_key_auth='YOUR_API_KEY',
        )
        resp = client.test.fetch()
        self.assertIsNotNone(resp)
        self.assertIsNotNone(resp.test_messages[0].test_content)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
