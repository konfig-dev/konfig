# SnapTrade::OptionsPosition

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **symbol** | [**BrokerageSymbol**](BrokerageSymbol.md) |  | [optional] |
| **price** | **Float** | Trade Price if limit or stop limit order | [optional] |
| **units** | **Float** |  | [optional] |
| **currency** | [**OptionsPositionCurrency**](OptionsPositionCurrency.md) |  | [optional] |
| **average_purchase_price** | **Float** | Average purchase price for this position | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::OptionsPosition.new(
  symbol: null,
  price: 31.33,
  units: 10,
  currency: null,
  average_purchase_price: 108.3353
)
```

