require 'carbon'

# 1) Get an access token for a customer
configuration = Carbon::Configuration.new
configuration.api_key = "YOUR_API_KEY"
configuration.customer_id = "YOUR_CUSTOMER_ID"
carbon = Carbon::Client.new(configuration)

token = carbon.auth.get_access_token

# 2) Use the access token to authenticate moving forward
configuration = Carbon::Configuration.new
configuration.access_token = token.access_token
carbon = Carbon::Client.new(configuration)

# use SDK as usual
white_labeling = carbon.auth.get_white_labeling