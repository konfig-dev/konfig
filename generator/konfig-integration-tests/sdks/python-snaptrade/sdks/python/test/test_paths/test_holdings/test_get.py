# coding: utf-8

"""
    SnapTrade

    Connect brokerage accounts to your app for live positions and trading

    The version of the OpenAPI document: 1.0.0
    Contact: api@snaptrade.com
    Created by: https://snaptrade.com/
"""

import unittest
from unittest.mock import patch

import urllib3

import snaptrade_client
from snaptrade_client.paths.holdings import get
from snaptrade_client import configuration, schemas, api_client

from .. import ApiTestMixin


class TestHoldings(ApiTestMixin, unittest.TestCase):
    """
    Holdings unit test stubs
        List all accounts for the user, plus balances, positions, and orders for each account.
    """

    def setUp(self):
        pass

    def tearDown(self):
        pass

    response_status = 200




if __name__ == '__main__':
    unittest.main()
