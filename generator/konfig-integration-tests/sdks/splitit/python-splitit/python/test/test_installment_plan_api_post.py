"""
    splitit-web-api-v3

    Splitit's API  # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Generated by: https://konfigthis.com
"""


import os
import unittest
import uuid

from python_splitit_client import PythonSplitit


class TestInstallmentPlanApiSimple(unittest.TestCase):
    """InstallmentPlanApi unit test stubs"""

    def setUp(self):
        client_id = "dummy"
        client_secret = "dummy"
        self.splitit = PythonSplitit(
            client_id=client_id,
            client_secret=client_secret,
            host="http://127.0.0.1:4021",
            token_url="http://127.0.0.1:4021/token"
        )

    def tearDown(self):
        pass

    async def test_async_post(self):
        """Test case for post"""
        response = await self.splitit.installment_plan.apost(
            x_splitit_idempotency_key=str(uuid.uuid4()),
            x_splitit_touch_point=str(uuid.uuid4()),
            auto_capture=True,
            attempt3d_secure=True,
            shopper={"Email": "fake@email.com"},
            billing_address={
                "AddressLine1": "144 Union St",
                "City": "Brooklyn",
                "State": "North Dakota",
                "Zip": "11231",
                "Country": "United States",
            },
            plan_data={
                "TotalAmount": 10.0,
                "NumberOfInstallments": 10,
                "Currency": "USD",
                "PurchaseMethod": "InStore",
            },
            redirect_urls={},
        )
        print(response)
        assert response is not None, "Received null response"

    def test_post(self):
        """Test case for post"""
        response = self.splitit.installment_plan.post(
            x_splitit_idempotency_key=str(uuid.uuid4()),
            x_splitit_touch_point=str(uuid.uuid4()),
            auto_capture=True,
            attempt3d_secure=True,
            shopper={"Email": "fake@email.com"},
            billing_address={
                "AddressLine1": "144 Union St",
                "City": "Brooklyn",
                "State": "North Dakota",
                "Zip": "11231",
                "Country": "United States",
            },
            plan_data={
                "TotalAmount": 10.0,
                "NumberOfInstallments": 10,
                "Currency": "USD",
                "PurchaseMethod": "InStore",
            },
            redirect_urls={},
        )
        print(response)
        assert response is not None, "Received null response"

    def test_post_with_int_total_amount(self):
        """Test case for post but with the PlanData.TotalAmount as an int to
        ensure NumberSchema can handle both float/int
        """
        response = self.splitit.installment_plan.post(
            x_splitit_idempotency_key=str(uuid.uuid4()),
            x_splitit_touch_point=str(uuid.uuid4()),
            auto_capture=True,
            attempt3d_secure=True,
            shopper={"Email": "fake@email.com"},
            billing_address={
                "AddressLine1": "144 Union St",
                "City": "Brooklyn",
                "State": "North Dakota",
                "Zip": "11231",
                "Country": "United States",
            },
            plan_data={
                "TotalAmount": 10,
                "NumberOfInstallments": 10,
                "Currency": "USD",
                "PurchaseMethod": "InStore",
            },
            redirect_urls={},
        )
        print(response)
        assert response is not None, "Received null response"


if __name__ == "__main__":
    unittest.main()
