# coding: utf-8

"""
    decentro-in-collections

    Collections

    The version of the OpenAPI document: 1.0.0
    Contact: admin@decentro.tech
    Created by: https://decentro.tech
"""

from decentro_in_collections_client.paths.v2_payments_upi_link.post import GeneratePaymentLinkRaw
from decentro_in_collections_client.paths.v2_payments_transaction_transaction_id_status.get import GetTransactionStatusRaw
from decentro_in_collections_client.paths.v2_payments_collection.post import IssueCollectRequestRaw
from decentro_in_collections_client.paths.v2_payments_upi_refund.post import IssueUpiRefundRaw
from decentro_in_collections_client.paths.v2_payments_vpa_validate.post import ValidateUpiHandleRaw


class CollectionsApiRaw(
    GeneratePaymentLinkRaw,
    GetTransactionStatusRaw,
    IssueCollectRequestRaw,
    IssueUpiRefundRaw,
    ValidateUpiHandleRaw,
):
    """NOTE:
    This class is auto generated
    """
    pass
