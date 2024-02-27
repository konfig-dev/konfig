# SnapTrade::ManualTrade

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **account** | **String** |  | [optional] |
| **order_type** | [**OrderType**](OrderType.md) | Order Type | [optional] |
| **time_in_force** | **String** | Trade time in force examples:   * FOK - Fill Or Kill   * Day - Day   * GTC - Good Til Canceled   * GTD - Good Til Date  | [optional] |
| **symbol** | [**ManualTradeSymbol**](ManualTradeSymbol.md) |  | [optional] |
| **action** | [**Action**](Action.md) | Trade Action | [optional] |
| **units** | **Float** | Trade Units. Cannot work with notional value. | [optional] |
| **price** | **Float** | Trade Price if limit or stop limit order | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::ManualTrade.new(
  id: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  account: 2bcd7cc3-e922-4976-bce1-9855556801c3,
  order_type: null,
  time_in_force: null,
  symbol: null,
  action: null,
  units: null,
  price: 31.33
)
```

