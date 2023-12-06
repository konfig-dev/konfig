# coding: utf-8

"""
    python-pydantic-response-as-param API

    A simple API based for testing python-pydantic-response-as-param.

    The version of the OpenAPI document: 1.0.0
    Contact: support@example.com
    Created by: http://example.com/support
"""

import unittest
from unittest.mock import patch

import urllib3

import python_pydantic_response_as_param
from python_pydantic_response_as_param.paths.attack_monster import post
from python_pydantic_response_as_param import configuration, schemas, api_client

from .. import ApiTestMixin


class TestAttackMonster(ApiTestMixin, unittest.TestCase):
    """
    AttackMonster unit test stubs
        Attack a monster
    """

    def setUp(self):
        pass

    def tearDown(self):
        pass

    response_status = 200




if __name__ == '__main__':
    unittest.main()
