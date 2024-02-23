# SnapTrade::OptionsPlaceOptionStrategyRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **order_type** | [**OrderType**](OrderType.md) |  |  |
| **time_in_force** | [**TimeInForceStrict**](TimeInForceStrict.md) |  |  |
| **price** | **Float** | Trade Price if limit or stop limit order | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::OptionsPlaceOptionStrategyRequest.new(
  order_type: null,
  time_in_force: null,
  price: 31.33
)
```

