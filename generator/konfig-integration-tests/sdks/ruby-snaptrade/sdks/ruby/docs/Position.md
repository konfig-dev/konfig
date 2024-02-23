# SnapTrade::Position

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **symbol** | [**PositionSymbol**](PositionSymbol.md) |  | [optional] |
| **units** | **Float** |  | [optional] |
| **price** | **Float** | Last known market price for the symbol | [optional] |
| **open_pnl** | **Float** |  | [optional] |
| **fractional_units** | **Float** | Deprecated, use the units field for both fractional and integer units going forward | [optional] |
| **average_purchase_price** | **Float** | Average purchase price for this position. Either returned by the underlying broker or calculated using historical transactions. | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::Position.new(
  symbol: null,
  units: 40,
  price: 113.15,
  open_pnl: 0.44,
  fractional_units: 1.44,
  average_purchase_price: 108.3353
)
```

