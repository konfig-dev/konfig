# SnapTrade::ErrorLogsApi

All URIs are relative to *https://api.snaptrade.com/api/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**list_user_errors**](ErrorLogsApi.md#list_user_errors) | **GET** /snapTrade/listUserErrors | Retrieve error logs on behalf of your SnapTrade users |

## list_user_errors

Retrieve error logs on behalf of your SnapTrade users

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"

user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"

begin
  # Retrieve error logs on behalf of your SnapTrade users
  result = SnapTrade::ErrorLogs.list_user_errors(
                                                    user_id: user_id,
                                                    user_secret: user_secret,
                                                  )
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::ErrorLogs.list_user_errors: #{e}"
end
```

#### Using the list_user_errors_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"

begin
  # Retrieve error logs on behalf of your SnapTrade users
  data, status_code, headers, response = SnapTrade::ErrorLogs.list_user_errors_with_http_info(
                                                                                                 user_id: user_id,
                                                                                                 user_secret: user_secret,
                                                                                               )
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Array<UserErrorLog>
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::ErrorLogs.list_user_errors: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **user_id** | **String** |  |  |
| **user_secret** | **String** |  |  |

### Return type

[**Array&lt;UserErrorLog&gt;**](UserErrorLog.md)

