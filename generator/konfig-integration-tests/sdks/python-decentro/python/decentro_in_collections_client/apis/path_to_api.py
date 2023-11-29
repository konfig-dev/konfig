import typing_extensions

from decentro_in_collections_client.paths import PathValues
from decentro_in_collections_client.apis.paths.v2_payments_upi_link import V2PaymentsUpiLink
from decentro_in_collections_client.apis.paths.v2_payments_transaction_transaction_id_status import V2PaymentsTransactionTransactionIdStatus
from decentro_in_collections_client.apis.paths.v2_payments_upi_refund import V2PaymentsUpiRefund
from decentro_in_collections_client.apis.paths.v2_payments_vpa_validate import V2PaymentsVpaValidate
from decentro_in_collections_client.apis.paths.v2_payments_collection import V2PaymentsCollection

PathToApi = typing_extensions.TypedDict(
    'PathToApi',
    {
        PathValues.V2_PAYMENTS_UPI_LINK: V2PaymentsUpiLink,
        PathValues.V2_PAYMENTS_TRANSACTION_TRANSACTION_ID_STATUS: V2PaymentsTransactionTransactionIdStatus,
        PathValues.V2_PAYMENTS_UPI_REFUND: V2PaymentsUpiRefund,
        PathValues.V2_PAYMENTS_VPA_VALIDATE: V2PaymentsVpaValidate,
        PathValues.V2_PAYMENTS_COLLECTION: V2PaymentsCollection,
    }
)

path_to_api = PathToApi(
    {
        PathValues.V2_PAYMENTS_UPI_LINK: V2PaymentsUpiLink,
        PathValues.V2_PAYMENTS_TRANSACTION_TRANSACTION_ID_STATUS: V2PaymentsTransactionTransactionIdStatus,
        PathValues.V2_PAYMENTS_UPI_REFUND: V2PaymentsUpiRefund,
        PathValues.V2_PAYMENTS_VPA_VALIDATE: V2PaymentsVpaValidate,
        PathValues.V2_PAYMENTS_COLLECTION: V2PaymentsCollection,
    }
)
