# coding: utf-8

"""
    python-invalid-response API

    A simple API based for testing python-invalid-response.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest
from unittest.mock import patch

import urllib3

import python_invalid_response
from python_invalid_response.paths.list_instead_of_object import get
from python_invalid_response import configuration, schemas, api_client

from .. import ApiTestMixin


class TestListInsteadOfObject(ApiTestMixin, unittest.TestCase):
    """
    ListInsteadOfObject unit test stubs
    """

    def setUp(self):
        pass

    def tearDown(self):
        pass

    response_status = 200




if __name__ == '__main__':
    unittest.main()
