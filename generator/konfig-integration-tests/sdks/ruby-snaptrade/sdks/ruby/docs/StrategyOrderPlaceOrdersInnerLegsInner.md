# SnapTrade::StrategyOrderPlaceOrdersInnerLegsInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **leg_id** | **Integer** |  | [optional] |
| **symbol** | **String** |  | [optional] |
| **symbol_id** | **Integer** |  | [optional] |
| **leg_ratio_quantity** | **Integer** |  | [optional] |
| **side** | **String** |  | [optional] |
| **avg_exec_price** | **Integer** |  | [optional] |
| **last_exec_price** | **String** |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::StrategyOrderPlaceOrdersInnerLegsInner.new(
  leg_id: 0,
  symbol: AC21Oct22C30.00.MX,
  symbol_id: 41790511,
  leg_ratio_quantity: 1,
  side: BTO,
  avg_exec_price: 0,
  last_exec_price: null
)
```

