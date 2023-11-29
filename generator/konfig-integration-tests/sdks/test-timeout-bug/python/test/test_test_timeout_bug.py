import unittest

import os
from pprint import pprint
from test_timeout_bug import TestTimeoutBugClient

class TestTestTimeoutBug(unittest.TestCase):
    def setUp(self):
        pass

    def test_test_timeout_bug(self):
        client = TestTimeoutBugClient(
            host="http://127.0.0.1:4065",
            api_key='YOUR_API_KEY',
        )
        resp = client.test.fetch()
        self.assertIsNotNone(resp)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
