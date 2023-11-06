import time
import splitit_client
from pprint import pprint
from splitit_client.api import installment_plan_api
from splitit_client.model.failed_response import FailedResponse
from splitit_client.model.installment_plan_cancel_response import InstallmentPlanCancelResponse
from splitit_client.model.installment_plan_create_request import InstallmentPlanCreateRequest
from splitit_client.model.installment_plan_get_response import InstallmentPlanGetResponse
from splitit_client.model.installment_plan_model import InstallmentPlanModel
from splitit_client.model.installment_plan_refund_request import InstallmentPlanRefundRequest
from splitit_client.model.installment_plan_refund_response import InstallmentPlanRefundResponse
from splitit_client.model.installment_plan_update_request_by_identifier import InstallmentPlanUpdateRequestByIdentifier
from splitit_client.model.installment_plan_update_response import InstallmentPlanUpdateResponse
from splitit_client.model.plan_error_response import PlanErrorResponse
from splitit_client.model.update_order_request import UpdateOrderRequest
from splitit_client.model.verify_authorization_response import VerifyAuthorizationResponse
# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.
client_id = os.environ["CLIENT_ID"]
client_secret = os.environ["CLIENT_SECRET"]
configuration = splitit_client.Configuration(
    # Defining the host is optional and defaults to https://web-api-v3.sandbox.splitit.com
    # See configuration.py for a list of all supported configuration parameters.
    host = 'https://web-api-v3.sandbox.splitit.com'
    client_id=client_id,
    client_secret=client_secret
)


# Enter a context with an instance of the API client
with splitit_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = installment_plan_api.InstallmentPlanApi(api_client)
    installment_plan_number = "installmentPlanNumber_example" # str |
    x_splitit_idempotency_key = "X-Splitit-IdempotencyKey_example" # str |

    try:
        api_response = api_instance.cancel(installment_plan_number, x_splitit_idempotency_key)
        pprint(api_response)
    except splitit_client.ApiException as e:
        print("Exception when calling InstallmentPlanApi->cancel: %s\n" % e)