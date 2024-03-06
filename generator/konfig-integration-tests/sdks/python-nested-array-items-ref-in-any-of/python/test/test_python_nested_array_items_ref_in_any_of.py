import unittest

import os
from pprint import pprint
from python_nested_array_items_ref_in_any_of import PythonNestedArrayItemsRefInAnyOfClient

class TestPythonNestedArrayItemsRefInAnyOf(unittest.TestCase):
    def setUp(self):
        pass

    def test_python_nested_array_items_ref_in_any_of(self):
        client = PythonNestedArrayItemsRefInAnyOfClient(
            host="http://127.0.0.1:4046",
            api_key='YOUR_API_KEY',
        )
        resp = client.test.fetch(problematic_property=[{"value": "test"}])
        self.assertIsNotNone(resp)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
