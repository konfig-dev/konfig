import unittest

import os
from pprint import pprint
from python_newscatcher import PythonNewscatcherClient

class TestPythonNewscatcher(unittest.TestCase):
    def setUp(self):
        pass

    def test_python_newscatcher(self):
        client = PythonNewscatcherClient(
            host="http://127.0.0.1:4040",
            api_key='YOUR_API_KEY',
        )
        resp = client.test.fetch()
        self.assertIsNotNone(resp)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
