# SnapTrade::ManualTradeAndImpact

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **trade** | [**ManualTrade**](ManualTrade.md) |  | [optional] |
| **trade_impacts** | [**Array&lt;ManualTrade&gt;**](ManualTrade.md) |  | [optional] |
| **combined_remaining_balance** | [**ManualTradeBalance**](ManualTradeBalance.md) |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::ManualTradeAndImpact.new(
  trade: null,
  trade_impacts: null,
  combined_remaining_balance: null
)
```

