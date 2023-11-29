# coding: utf-8

"""
    decentro-in-collections

    Collections

    The version of the OpenAPI document: 1.0.0
    Contact: admin@decentro.tech
    Created by: https://decentro.tech
"""

from decentro_in_collections_client.paths.v2_payments_upi_link.post import GeneratePaymentLink
from decentro_in_collections_client.paths.v2_payments_transaction_transaction_id_status.get import GetTransactionStatus
from decentro_in_collections_client.paths.v2_payments_collection.post import IssueCollectRequest
from decentro_in_collections_client.paths.v2_payments_upi_refund.post import IssueUpiRefund
from decentro_in_collections_client.paths.v2_payments_vpa_validate.post import ValidateUpiHandle
from decentro_in_collections_client.apis.tags.collections_api_raw import CollectionsApiRaw


class CollectionsApi(
    GeneratePaymentLink,
    GetTransactionStatus,
    IssueCollectRequest,
    IssueUpiRefund,
    ValidateUpiHandle,
):
    """NOTE:
    This class is auto generated
    """
    raw: CollectionsApiRaw

    def __init__(self, api_client=None):
        super().__init__(api_client)
        self.raw = CollectionsApiRaw(api_client)
