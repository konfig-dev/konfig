# do not import all endpoints into this module because that uses a lot of memory and stack frames
# if you need the ability to import all endpoints from this module, import them with
# from decentro_in_collections_client.apis.path_to_api import path_to_api

import enum


class PathValues(str, enum.Enum):
    V2_PAYMENTS_UPI_LINK = "/v2/payments/upi/link"
    V2_PAYMENTS_TRANSACTION_TRANSACTION_ID_STATUS = "/v2/payments/transaction/{transaction_id}/status"
    V2_PAYMENTS_UPI_REFUND = "/v2/payments/upi/refund"
    V2_PAYMENTS_VPA_VALIDATE = "/v2/payments/vpa/validate"
    V2_PAYMENTS_COLLECTION = "/v2/payments/collection"
