# SnapTrade::TradingPlaceOCOOrderRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **first_trade_id** | **Object** | The ID of first trade object obtained from trade/impact endpoint | [optional] |
| **second_trade_id** | **Object** | The ID of second trade object obtained from trade/impact endpoint | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::TradingPlaceOCOOrderRequest.new(
  first_trade_id: null,
  second_trade_id: null
)
```

