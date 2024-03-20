import unittest

import os
from pprint import pprint
from python_allow_none_for_nullable_ref import PythonAllowNoneForNullableRefClient

class TestPythonAllowNoneForNullableRef(unittest.TestCase):
    def setUp(self):
        pass

    def test_python_allow_none_for_nullable_ref(self):
        client = PythonAllowNoneForNullableRefClient(
            host="http://127.0.0.1:4078",
            api_key='YOUR_API_KEY',
        )
        resp = client.test.fetch(
            problematic_property=[
                {
                    "nullable_property": None
                }
            ]
        )
        self.assertIsNotNone(resp)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
