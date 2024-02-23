# SnapTrade::PortfolioGroupSettings

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **buy_only** | **Boolean** |  | [optional] |
| **cash_optimizer** | **Boolean** |  | [optional] |
| **notify_frequency** | **String** |  | [optional] |
| **drift_threshold** | **Float** |  | [optional] |
| **preferred_currency** | [**Currency**](Currency.md) |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::PortfolioGroupSettings.new(
  buy_only: true,
  cash_optimizer: true,
  notify_frequency: 7 00:00:00,
  drift_threshold: 90,
  preferred_currency: null
)
```

