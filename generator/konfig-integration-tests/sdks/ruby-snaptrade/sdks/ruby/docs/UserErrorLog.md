# SnapTrade::UserErrorLog

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **requested_at** | **String** |  | [optional] |
| **response** | **String** |  | [optional] |
| **status_code** | **Float** |  | [optional] |
| **_query_params** | **String** |  | [optional] |
| **http_method** | **String** |  | [optional] |
| **endpoint** | **String** |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::UserErrorLog.new(
  requested_at: 2022-01-21T20:11:19.217Z,
  response: null,
  status_code: 200,
  _query_params: null,
  http_method: POST,
  endpoint: api/v1/snapTrade
)
```

