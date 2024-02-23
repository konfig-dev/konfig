# SnapTrade::ManualTradeBalance

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account** | [**Account**](Account.md) |  | [optional] |
| **currency** | [**Currency**](Currency.md) |  | [optional] |
| **cash** | **Float** | Cash | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::ManualTradeBalance.new(
  account: null,
  currency: null,
  cash: 1.11
)
```

