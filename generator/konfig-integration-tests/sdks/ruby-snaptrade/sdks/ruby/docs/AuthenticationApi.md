# SnapTrade::AuthenticationApi

All URIs are relative to *https://api.snaptrade.com/api/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**delete_snap_trade_user**](AuthenticationApi.md#delete_snap_trade_user) | **DELETE** /snapTrade/deleteUser | Delete SnapTrade user |
| [**get_user_jwt**](AuthenticationApi.md#get_user_jwt) | **GET** /snapTrade/encryptedJWT | Generate encrypted JWT token |
| [**list_snap_trade_users**](AuthenticationApi.md#list_snap_trade_users) | **GET** /snapTrade/listUsers | List SnapTrade users |
| [**login_snap_trade_user**](AuthenticationApi.md#login_snap_trade_user) | **POST** /snapTrade/login | Login user &amp; generate connection link |
| [**register_snap_trade_user**](AuthenticationApi.md#register_snap_trade_user) | **POST** /snapTrade/registerUser | Create SnapTrade user |
| [**reset_snap_trade_user_secret**](AuthenticationApi.md#reset_snap_trade_user_secret) | **POST** /snapTrade/resetUserSecret | Obtain a new user secret for a user |

## delete_snap_trade_user

Delete SnapTrade user

Deletes a user you've registered over the SnapTrade API, and any data associated with them or their investment accounts.

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"

user_id = "John.doe@snaptrade.com"

begin
  # Delete SnapTrade user
  result = SnapTrade::Authentication.delete_snap_trade_user(
                                                               user_id: user_id,
                                                             )
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Authentication.delete_snap_trade_user: #{e}"
end
```

#### Using the delete_snap_trade_user_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby
user_id = "John.doe@snaptrade.com"

begin
  # Delete SnapTrade user
  data, status_code, headers, response = SnapTrade::Authentication.delete_snap_trade_user_with_http_info(
                                                                                                            user_id: user_id,
                                                                                                          )
  p status_code # => 2xx
  p headers # => { ... }
  p data # => DeleteUserResponse
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Authentication.delete_snap_trade_user: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **user_id** | **String** |  |  |

### Return type

[**DeleteUserResponse**](DeleteUserResponse.md)

## get_user_jwt

Generate encrypted JWT token

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"

user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"

begin
  # Generate encrypted JWT token
  result = SnapTrade::Authentication.get_user_jwt(
                                                     user_id: user_id,
                                                     user_secret: user_secret,
                                                   )
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Authentication.get_user_jwt: #{e}"
end
```

#### Using the get_user_jwt_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"

begin
  # Generate encrypted JWT token
  data, status_code, headers, response = SnapTrade::Authentication.get_user_jwt_with_http_info(
                                                                                                  user_id: user_id,
                                                                                                  user_secret: user_secret,
                                                                                                )
  p status_code # => 2xx
  p headers # => { ... }
  p data # => EncryptedResponse
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Authentication.get_user_jwt: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **user_id** | **String** |  |  |
| **user_secret** | **String** |  |  |

### Return type

[**EncryptedResponse**](EncryptedResponse.md)

## list_snap_trade_users

List SnapTrade users

Returns a list of users you've registered over the SnapTrade API.

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"


begin
  # List SnapTrade users
  result = SnapTrade::Authentication.list_snap_trade_users
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Authentication.list_snap_trade_users: #{e}"
end
```

#### Using the list_snap_trade_users_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby

begin
  # List SnapTrade users
  data, status_code, headers, response = SnapTrade::Authentication.list_snap_trade_users_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Array&lt;String&gt;
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Authentication.list_snap_trade_users: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Array&lt;String&gt;**

## login_snap_trade_user

Login user & generate connection link

Logs in a SnapTrade user and returns an authenticated connection portal URL for them to use to connect a brokerage account.

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"

user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
broker = "ALPACA"
immediate_redirect = True
custom_redirect = "https://snaptrade.com"
reconnect = "8b5f262d-4bb9-365d-888a-202bd3b15fa1"
connection_type = "read"
connection_portal_version = "v2"

begin
  # Login user & generate connection link
  result = SnapTrade::Authentication.login_snap_trade_user(
                                                              user_id: user_id,
                                                              user_secret: user_secret,
                                                              broker: broker,
                                                              immediate_redirect: immediate_redirect,
                                                              custom_redirect: custom_redirect,
                                                              reconnect: reconnect,
                                                              connection_type: connection_type,
                                                              connection_portal_version: connection_portal_version,
                                                            )
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Authentication.login_snap_trade_user: #{e}"
end
```

#### Using the login_snap_trade_user_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
broker = "ALPACA"
immediate_redirect = True
custom_redirect = "https://snaptrade.com"
reconnect = "8b5f262d-4bb9-365d-888a-202bd3b15fa1"
connection_type = "read"
connection_portal_version = "v2"

begin
  # Login user & generate connection link
  data, status_code, headers, response = SnapTrade::Authentication.login_snap_trade_user_with_http_info(
                                                                                                           user_id: user_id,
                                                                                                           user_secret: user_secret,
                                                                                                           broker: broker,
                                                                                                           immediate_redirect: immediate_redirect,
                                                                                                           custom_redirect: custom_redirect,
                                                                                                           reconnect: reconnect,
                                                                                                           connection_type: connection_type,
                                                                                                           connection_portal_version: connection_portal_version,
                                                                                                         )
  p status_code # => 2xx
  p headers # => { ... }
  p data # => AuthenticationLoginSnapTradeUser200Response
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Authentication.login_snap_trade_user: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **user_id** | **String** |  |  |
| **user_secret** | **String** |  |  |
| **snap_trade_login_user_request_body** | [**SnapTradeLoginUserRequestBody**](SnapTradeLoginUserRequestBody.md) |  | [optional] |

### Return type

[**AuthenticationLoginSnapTradeUser200Response**](AuthenticationLoginSnapTradeUser200Response.md)

## register_snap_trade_user

Create SnapTrade user

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"

user_id = "snaptrade-user-123"

begin
  # Create SnapTrade user
  result = SnapTrade::Authentication.register_snap_trade_user(
                                                                 user_id: user_id,
                                                               )
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Authentication.register_snap_trade_user: #{e}"
end
```

#### Using the register_snap_trade_user_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby
user_id = "snaptrade-user-123"

begin
  # Create SnapTrade user
  data, status_code, headers, response = SnapTrade::Authentication.register_snap_trade_user_with_http_info(
                                                                                                              user_id: user_id,
                                                                                                            )
  p status_code # => 2xx
  p headers # => { ... }
  p data # => UserIDandSecret
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Authentication.register_snap_trade_user: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **snap_trade_register_user_request_body** | [**SnapTradeRegisterUserRequestBody**](SnapTradeRegisterUserRequestBody.md) |  |  |

### Return type

[**UserIDandSecret**](UserIDandSecret.md)

## reset_snap_trade_user_secret

Obtain a new user secret for a user

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"

user_id = "snaptrade-user-123"
user_secret = "h81@cx1lkalablakwjaltkejraj11="

begin
  # Obtain a new user secret for a user
  result = SnapTrade::Authentication.reset_snap_trade_user_secret(
                                                                     user_id: user_id,
                                                                     user_secret: user_secret,
                                                                   )
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Authentication.reset_snap_trade_user_secret: #{e}"
end
```

#### Using the reset_snap_trade_user_secret_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby
user_id = "snaptrade-user-123"
user_secret = "h81@cx1lkalablakwjaltkejraj11="

begin
  # Obtain a new user secret for a user
  data, status_code, headers, response = SnapTrade::Authentication.reset_snap_trade_user_secret_with_http_info(
                                                                                                                  user_id: user_id,
                                                                                                                  user_secret: user_secret,
                                                                                                                )
  p status_code # => 2xx
  p headers # => { ... }
  p data # => UserIDandSecret
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Authentication.reset_snap_trade_user_secret: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **user_i_dand_secret** | [**UserIDandSecret**](UserIDandSecret.md) |  |  |

### Return type

[**UserIDandSecret**](UserIDandSecret.md)

