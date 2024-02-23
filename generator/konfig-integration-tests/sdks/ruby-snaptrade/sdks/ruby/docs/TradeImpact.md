# SnapTrade::TradeImpact

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account** | [**Account**](Account.md) |  | [optional] |
| **currency** | [**Currency**](Currency.md) |  | [optional] |
| **remaining_cash** | **Float** | Remaining balance after executing all trades | [optional] |
| **estimated_commissions** | **Float** | Total estimated commissions across all trades to make | [optional] |
| **forex_fees** | **Float** | Estimated forex fees to pay to excute trades | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::TradeImpact.new(
  account: null,
  currency: null,
  remaining_cash: 1.01,
  estimated_commissions: 10.05,
  forex_fees: 2.01
)
```

