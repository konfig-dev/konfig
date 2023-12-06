import unittest

import os
from pprint import pprint
from python_pydantic_response_as_param import PythonPydanticResponseAsParamClient

class TestPythonPydanticResponseAsParam(unittest.TestCase):
    def setUp(self):
        pass

    def test_python_pydantic_response_as_param(self):
        client = PythonPydanticResponseAsParamClient(
            host="http://127.0.0.1:4039",
            api_key='YOUR_API_KEY',
        )
        equipment = client.adventure.retrieve_equipment()
        self.assertIsNotNone(equipment)
        # This ensures that we can pass a pydantic model as a parameter to a subsequent request
        result = client.adventure.attack_monster(monster="goblin", sword=equipment.sword)
        self.assertIsNotNone(result)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
