# SnapTrade::ConnectionsApi

All URIs are relative to *https://api.snaptrade.com/api/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**detail_brokerage_authorization**](ConnectionsApi.md#detail_brokerage_authorization) | **GET** /authorizations/{authorizationId} | Get brokerage authorization details |
| [**list_brokerage_authorizations**](ConnectionsApi.md#list_brokerage_authorizations) | **GET** /authorizations | List all brokerage authorizations for the user |
| [**remove_brokerage_authorization**](ConnectionsApi.md#remove_brokerage_authorization) | **DELETE** /authorizations/{authorizationId} | Delete brokerage authorization |
| [**session_events**](ConnectionsApi.md#session_events) | **GET** /sessionEvents | List all session events for the partner |

## detail_brokerage_authorization

Get brokerage authorization details

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"

authorization_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"

begin
  # Get brokerage authorization details
  result = SnapTrade::Connections.detail_brokerage_authorization(
                                                                    authorization_id: authorization_id,
                                                                    user_id: user_id,
                                                                    user_secret: user_secret,
                                                                  )
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Connections.detail_brokerage_authorization: #{e}"
end
```

#### Using the detail_brokerage_authorization_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby
authorization_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"

begin
  # Get brokerage authorization details
  data, status_code, headers, response = SnapTrade::Connections.detail_brokerage_authorization_with_http_info(
                                                                                                                 authorization_id: authorization_id,
                                                                                                                 user_id: user_id,
                                                                                                                 user_secret: user_secret,
                                                                                                               )
  p status_code # => 2xx
  p headers # => { ... }
  p data # => BrokerageAuthorization
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Connections.detail_brokerage_authorization: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **authorization_id** | **String** | The ID of a brokerage authorization object. |  |
| **user_id** | **String** |  |  |
| **user_secret** | **String** |  |  |

### Return type

[**BrokerageAuthorization**](BrokerageAuthorization.md)

## list_brokerage_authorizations

List all brokerage authorizations for the user

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"

user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"

begin
  # List all brokerage authorizations for the user
  result = SnapTrade::Connections.list_brokerage_authorizations(
                                                                   user_id: user_id,
                                                                   user_secret: user_secret,
                                                                 )
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Connections.list_brokerage_authorizations: #{e}"
end
```

#### Using the list_brokerage_authorizations_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"

begin
  # List all brokerage authorizations for the user
  data, status_code, headers, response = SnapTrade::Connections.list_brokerage_authorizations_with_http_info(
                                                                                                                user_id: user_id,
                                                                                                                user_secret: user_secret,
                                                                                                              )
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Array<BrokerageAuthorization>
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Connections.list_brokerage_authorizations: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **user_id** | **String** |  |  |
| **user_secret** | **String** |  |  |

### Return type

[**Array&lt;BrokerageAuthorization&gt;**](BrokerageAuthorization.md)

## remove_brokerage_authorization

Delete brokerage authorization

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"

authorization_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"

begin
  # Delete brokerage authorization
  SnapTrade::Connections.remove_brokerage_authorization(
                                                           authorization_id: authorization_id,
                                                           user_id: user_id,
                                                           user_secret: user_secret,
                                                         )
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Connections.remove_brokerage_authorization: #{e}"
end
```

#### Using the remove_brokerage_authorization_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

```ruby
authorization_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"

begin
  # Delete brokerage authorization
  data, status_code, headers, response = SnapTrade::Connections.remove_brokerage_authorization_with_http_info(
                                                                                                                 authorization_id: authorization_id,
                                                                                                                 user_id: user_id,
                                                                                                                 user_secret: user_secret,
                                                                                                               )
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Connections.remove_brokerage_authorization: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **authorization_id** | **String** | The ID of the Authorization to delete. |  |
| **user_id** | **String** |  |  |
| **user_secret** | **String** |  |  |

### Return type

nil (empty response body)

## session_events

List all session events for the partner

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"

partner_client_id = "SNAPTRADETEST"
user_id = "917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2"
session_id = "917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2"

begin
  # List all session events for the partner
  result = SnapTrade::Connections.session_events(
                                                    partner_client_id: partner_client_id,
                                                    user_id: user_id,
                                                    session_id: session_id,
                                                  )
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Connections.session_events: #{e}"
end
```

#### Using the session_events_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby
partner_client_id = "SNAPTRADETEST"
user_id = "917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2"
session_id = "917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2"

begin
  # List all session events for the partner
  data, status_code, headers, response = SnapTrade::Connections.session_events_with_http_info(
                                                                                                 partner_client_id: partner_client_id,
                                                                                                 user_id: user_id,
                                                                                                 session_id: session_id,
                                                                                               )
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Array<ConnectionsSessionEvents200ResponseInner>
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Connections.session_events: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **partner_client_id** | **String** |  |  |
| **user_id** | **String** | Optional comma seperated list of user IDs used to filter the request on specific users | [optional] |
| **session_id** | **String** | Optional comma seperated list of session IDs used to filter the request on specific users | [optional] |

### Return type

[**Array&lt;ConnectionsSessionEvents200ResponseInner&gt;**](ConnectionsSessionEvents200ResponseInner.md)

