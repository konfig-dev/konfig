import unittest

import os
from pprint import pprint
from python_pydantic_additional_properties_anyof import PythonPydanticAdditionalPropertiesAnyofClient

class TestPythonPydanticAdditionalPropertiesAnyof(unittest.TestCase):
    def setUp(self):
        pass

    def test_python_pydantic_additional_properties_anyof(self):
        client = PythonPydanticAdditionalPropertiesAnyofClient(
            host="http://127.0.0.1:4035",
            api_key='YOUR_API_KEY',
        )
        resp = client.test.fetch()
        self.assertIsNotNone(resp)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
