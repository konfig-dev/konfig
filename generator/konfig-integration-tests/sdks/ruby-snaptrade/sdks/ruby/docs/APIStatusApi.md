# SnapTrade::APIStatusApi

All URIs are relative to *https://api.snaptrade.com/api/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**check**](APIStatusApi.md#check) | **GET** / | Get API Status |

## check

Get API Status

Check whether the API is operational and verify timestamps.

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"


begin
  # Get API Status
  result = SnapTrade::APIStatus.check
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::APIStatus.check: #{e}"
end
```

#### Using the check_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby

begin
  # Get API Status
  data, status_code, headers, response = SnapTrade::APIStatus.check_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Status
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::APIStatus.check: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Status**](Status.md)

