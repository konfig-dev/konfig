# SnapTrade::Trade

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **account** | [**Account**](Account.md) |  | [optional] |
| **symbol** | [**BrokerageSymbol**](BrokerageSymbol.md) |  | [optional] |
| **universal_symbol** | [**UniversalSymbol**](UniversalSymbol.md) |  | [optional] |
| **action** | [**TradeAction**](TradeAction.md) |  | [optional] |
| **units** | **Integer** |  | [optional] |
| **price** | **Float** |  | [optional] |
| **sequence** | **Integer** |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::Trade.new(
  id: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  account: null,
  symbol: null,
  universal_symbol: null,
  action: BUY,
  units: 6,
  price: 24.81,
  sequence: 1
)
```

