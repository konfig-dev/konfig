# coding: utf-8

"""
    python-pydantic-recursively-convert-to-models API

    A simple API based for testing python-pydantic-recursively-convert-to-models.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest
from unittest.mock import patch

import urllib3

import python_pydantic_recursively_convert_to_models
from python_pydantic_recursively_convert_to_models.paths._list import get
from python_pydantic_recursively_convert_to_models import configuration, schemas, api_client

from .. import ApiTestMixin


class TestModelList(ApiTestMixin, unittest.TestCase):
    """
    ModelList unit test stubs
        Fetches a list value
    """

    def setUp(self):
        pass

    def tearDown(self):
        pass

    response_status = 200




if __name__ == '__main__':
    unittest.main()
