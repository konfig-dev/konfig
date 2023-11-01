# coding: utf-8

"""
    Python Pydantic Responses API

    A simple API based on python pydantic responses.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest
from unittest.mock import patch

import urllib3

import python_pydantic
from python_pydantic.paths.reserved_word import get
from python_pydantic import configuration, schemas, api_client

from .. import ApiTestMixin


class TestReservedWord(ApiTestMixin, unittest.TestCase):
    """
    ReservedWord unit test stubs
    """

    def setUp(self):
        pass

    def tearDown(self):
        pass

    response_status = 200




if __name__ == '__main__':
    unittest.main()
