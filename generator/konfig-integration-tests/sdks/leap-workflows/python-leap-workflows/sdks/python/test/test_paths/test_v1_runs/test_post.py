# coding: utf-8

"""
    Leap Workflows API

    The Leap Workflows API allows developers to run workflows, fetch workflow runs, and provide other utility functions related to workflow runs. Please use the X-Api-Key for authenticated requests.

    The version of the OpenAPI document: 1.0
    Contact: help@tryleap.ai
    Created by: https://tryleap.ai/
"""

import unittest
from unittest.mock import patch

import urllib3

import leap_workflows
from leap_workflows.paths.v1_runs import post
from leap_workflows import configuration, schemas, api_client

from .. import ApiTestMixin


class TestV1Runs(ApiTestMixin, unittest.TestCase):
    """
    V1Runs unit test stubs
        Run a workflow
    """

    def setUp(self):
        pass

    def tearDown(self):
        pass

    response_status = 200






if __name__ == '__main__':
    unittest.main()
