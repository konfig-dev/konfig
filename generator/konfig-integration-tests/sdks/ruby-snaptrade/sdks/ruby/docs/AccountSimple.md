# SnapTrade::AccountSimple

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **name** | **String** |  | [optional] |
| **number** | **String** |  | [optional] |
| **sync_status** | [**AccountSyncStatus**](AccountSyncStatus.md) |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::AccountSimple.new(
  id: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  name: Registered Retirement Savings Account,
  number: Q6542138443,
  sync_status: null
)
```

