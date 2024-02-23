# SnapTrade::TransactionsStatus

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **initial_sync_completed** | **Boolean** |  | [optional] |
| **last_successful_sync** | **Date** | Date in YYYY-MM-DD format or null | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::TransactionsStatus.new(
  initial_sync_completed: null,
  last_successful_sync: Sun Jan 23 16:00:00 PST 2022
)
```

