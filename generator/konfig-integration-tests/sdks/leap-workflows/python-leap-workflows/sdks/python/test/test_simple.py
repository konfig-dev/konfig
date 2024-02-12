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

    def test_get_workflow(self):
        leap = Leap(
            api_key = 'YOUR_API_KEY',
            host = "http://127.0.0.1:4020"
        )
        resp = leap.workflow_runs.get_workflow_run("rnp_x3p27VQk6MyJfLe")
        self.assertIsNotNone(resp)
        pprint(resp)
        pprint(resp.status)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
