# SnapTrade::SnapTradeRegisterUserRequestBody

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **user_id** | **String** | SnapTrade User ID. Provided by SnapTrade Partner. Can be any string, as long as it&#39;s unique to a user | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::SnapTradeRegisterUserRequestBody.new(
  user_id: snaptrade-user-123
)
```

