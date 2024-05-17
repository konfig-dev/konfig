from carbon import Carbon

# Generally this is done in the backend to avoid exposing API key to the client

carbon = Carbon(
    api_key = 'YOUR_API_KEY',
    customer_id = 'YOUR_CUSTOMER_ID',
)

token = carbon.auth.get_access_token()

# Once an access token is obtained, it can be passed to the frontend
# and used to instantiate the SDK client without an API key

carbon = Carbon(access_token = token.access_token)

# use SDK as usual
white_labeling = carbon.auth.get_white_labeling()
# etc.
