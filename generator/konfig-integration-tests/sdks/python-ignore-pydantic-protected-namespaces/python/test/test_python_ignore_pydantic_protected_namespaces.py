import unittest

import os
from pprint import pprint
from python_ignore_pydantic_protected_namespaces import PythonIgnorePydanticProtectedNamespacesClient

class TestPythonIgnorePydanticProtectedNamespaces(unittest.TestCase):
    def setUp(self):
        pass

    def test_python_ignore_pydantic_protected_namespaces(self):
        client = PythonIgnorePydanticProtectedNamespacesClient(
            host="http://127.0.0.1:4110",
            api_key='YOUR_API_KEY',
        )
        resp = client.test.fetch()
        self.assertIsNotNone(resp)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
