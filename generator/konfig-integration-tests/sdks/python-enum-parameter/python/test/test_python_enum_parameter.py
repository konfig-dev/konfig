import unittest

import os
from pprint import pprint
from python_enum_parameter import PythonEnumParameterClient

class TestPythonEnumParameter(unittest.TestCase):
    def setUp(self):
        pass

    def test_python_enum_parameter(self):
        client = PythonEnumParameterClient(
            host="http://127.0.0.1:4099",
            api_key='YOUR_API_KEY',
        )
        resp = client.test.fetch(problematic_parameter="enum")
        self.assertIsNotNone(resp)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
