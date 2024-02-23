# SnapTrade::ConnectionsSessionEvents200ResponseInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **session_event_type** | [**SessionEventType**](SessionEventType.md) |  | [optional] |
| **session_id** | **String** |  | [optional] |
| **user_id** | **String** | SnapTrade User ID. Provided by SnapTrade Partner. Can be any string, as long as it&#39;s unique to a user | [optional] |
| **created_date** | **String** | Time | [optional] |
| **brokerage_status_code** | **Integer** |  | [optional] |
| **brokerage_authorization_id** | **String** |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::ConnectionsSessionEvents200ResponseInner.new(
  id: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  session_event_type: null,
  session_id: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  user_id: snaptrade-user-123,
  created_date: 2022-01-21T20:11:19.217Z,
  brokerage_status_code: 400,
  brokerage_authorization_id: 2bcd7cc3-e922-4976-bce1-9858296801c3
)
```

