# coding: utf-8

"""
    decentro-in-collections

    Collections

    The version of the OpenAPI document: 1.0.0
    Contact: admin@decentro.tech
    Created by: https://decentro.tech
"""

import unittest

import os
from pprint import pprint
from decentro_in_collections_client import Decentro

class TestSimple(unittest.TestCase):
    def setUp(self):
        pass

    def test_client(self):
        decentro = Decentro(
            client_id = 'YOUR_API_KEY',
            client_secret = 'YOUR_API_KEY',
            module_secret = 'YOUR_API_KEY',
            provider_secret = 'YOUR_API_KEY',
        )
        self.assertIsNotNone(decentro)

    def test_simple(self):
        client = Decentro(host="http://127.0.0.1:4029",
                          client_id="client_id",
                          client_secret="client_secret",
                          module_secret="module_secret",
                          provider_secret="provider_secret")
        response = client.collections.generate_payment_link(
            reference_id="123456789014",
            payee_account="payee_account",
            amount=10,
            purpose_message="purpose_message",
            generate_qr=1,
            expiry_time=10,
        )
        pprint(response)
        assert response is not None

    def tearDown(self):
        pass


if __name__ == "__main__":
    unittest.main()
