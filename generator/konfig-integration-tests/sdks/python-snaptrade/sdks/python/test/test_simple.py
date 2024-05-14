# coding: utf-8

"""
    SnapTrade

    Connect brokerage accounts to your app for live positions and trading

    The version of the OpenAPI document: 1.0.0
    Contact: api@snaptrade.com
    Created by: https://snaptrade.com/
"""

import unittest

import os
from pprint import pprint
from snaptrade_client import SnapTrade

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        snaptrade = SnapTrade(
            consumer_key="YOUR_CONSUMER_KEY",
    client_id="YOUR_CLIENT_ID",
        )
        self.assertIsNotNone(snaptrade)

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
