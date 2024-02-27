# SnapTrade::ManualTradeForm

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account_id** | **String** |  | [optional] |
| **action** | [**Action**](Action.md) | Trade Action | [optional] |
| **order_type** | [**OrderType**](OrderType.md) | Order Type | [optional] |
| **price** | **Float** | Trade Price if limit or stop limit order | [optional] |
| **stop** | **Float** | Stop Price. If stop loss or stop limit order, the price to trigger the stop | [optional] |
| **time_in_force** | [**TimeInForceStrict**](TimeInForceStrict.md) | Trade time in force examples:   * FOK - Fill Or Kill   * Day - Day   * GTC - Good Til Canceled  | [optional] |
| **units** | **Float** |  | [optional] |
| **universal_symbol_id** | **String** |  | [optional] |
| **notional_value** | **Float** |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::ManualTradeForm.new(
  account_id: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  action: null,
  order_type: null,
  price: 31.33,
  stop: 31.33,
  time_in_force: null,
  units: null,
  universal_symbol_id: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  notional_value: null
)
```

