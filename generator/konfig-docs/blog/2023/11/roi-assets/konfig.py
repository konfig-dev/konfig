from splitit_client import Splitit

splitit = Splitit(
    # Defining the host is optional and defaults to https://web-api-v3.production.splitit.com
    # See configuration.py for a list of all supported configuration parameters.
    host="https://web-api-v3.production.splitit.com",
    # Configure OAuth2 access token for authorization: oauth
    client_id="YOUR_CLIENT_ID",
    client_secret="YOUR_CLIENT_SECRET",
)

cancel_response = splitit.installment_plan.cancel(
    installment_plan_number="installmentPlanNumber_example",  # required
    x_splitit_idempotency_key="X-Splitit-IdempotencyKey_example",  # required
    x_splitit_touch_point="",  # required
)
print(cancel_response)