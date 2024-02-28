require 'carbon'

# 1) Get an access token for a customer
Carbon.api_key = "YOUR_API_KEY"
Carbon.customer_id = "YOUR_CUSTOMER_ID"

token = Carbon::Auth.get_access_token

# 2) Use the access token to authenticate moving forward
Carbon.access_token = token.access_token
carbon = Carbon(access_token=token.access_token)

# use SDK as usual
white_labeling = carbon.auth.get_white_labeling
# etc.