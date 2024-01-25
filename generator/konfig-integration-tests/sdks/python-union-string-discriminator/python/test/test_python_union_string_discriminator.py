import unittest

import os
from pprint import pprint
from python_union_string_discriminator.pydantic.a import A
from python_union_string_discriminator import PythonUnionStringDiscriminatorClient

class TestPythonUnionStringDiscriminator(unittest.TestCase):
    def setUp(self):
        pass

    def test_python_union_string_discriminator(self):
        client = PythonUnionStringDiscriminatorClient(
            host="http://127.0.0.1:4050",
            api_key='YOUR_API_KEY',
        )
        resp = client.test.fetch()

        # assert resp.value is an instance of A
        self.assertIsInstance(resp.value, A)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
