import unittest

import os
from pprint import pprint
from python_pydantic_response_with_none_fieldvalue import PythonPydanticResponseWithNoneFieldvalueClient

class TestPythonPydanticResponseWithNoneFieldvalue(unittest.TestCase):
    def setUp(self):
        pass

    def test_python_pydantic_response_with_none_fieldvalue(self):
        client = PythonPydanticResponseWithNoneFieldvalueClient(
            host="http://127.0.0.1:4136",
            api_key='YOUR_API_KEY',
        )
        resp = client.test.fetch()
        self.assertIsNotNone(resp)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
