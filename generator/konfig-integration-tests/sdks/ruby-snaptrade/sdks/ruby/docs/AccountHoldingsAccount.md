# SnapTrade::AccountHoldingsAccount

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account** | [**SnapTradeHoldingsAccountAccountId**](SnapTradeHoldingsAccountAccountId.md) |  | [optional] |
| **balances** | [**Array&lt;Balance&gt;**](Balance.md) |  | [optional] |
| **positions** | [**Array&lt;Position&gt;**](Position.md) |  | [optional] |
| **orders** | [**Array&lt;AccountOrderRecord&gt;**](AccountOrderRecord.md) |  | [optional] |
| **total_value** | [**SnapTradeHoldingsTotalValue**](SnapTradeHoldingsTotalValue.md) |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::AccountHoldingsAccount.new(
  account: null,
  balances: null,
  positions: null,
  orders: null,
  total_value: null
)
```

