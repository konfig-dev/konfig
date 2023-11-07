# coding: utf-8

"""
    Leap Workflows API

    The Leap Workflows API allows developers to run workflows, fetch workflow runs, and provide other utility functions related to workflow runs. Please use the X-Api-Key for authenticated requests.

    The version of the OpenAPI document: 1.0
    Contact: help@tryleap.ai
    Created by: https://tryleap.ai/
"""

import unittest

import os
from pprint import pprint
from leap_workflows import Leap

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        leap = Leap(
        
            api_key = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(leap)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
