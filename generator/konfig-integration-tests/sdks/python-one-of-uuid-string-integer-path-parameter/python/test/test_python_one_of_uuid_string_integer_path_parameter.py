import unittest

import os
from pprint import pprint
from python_one_of_uuid_string_integer_path_parameter import (
    PythonOneOfUuidStringIntegerPathParameterClient,
)


class TestPythonOneOfUuidStringIntegerPathParameter(unittest.TestCase):
    def setUp(self):
        pass

    def test_python_one_of_uuid_string_integer_path_parameter(self):
        client = PythonOneOfUuidStringIntegerPathParameterClient(
            host="http://127.0.0.1:4156",
            api_key="YOUR_API_KEY",
        )
        resp = client.test.fetch(id=1)
        self.assertIsNotNone(resp)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
