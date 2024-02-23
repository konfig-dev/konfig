# SnapTrade::SymbolsQuotesInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **symbol** | [**UniversalSymbol**](UniversalSymbol.md) |  | [optional] |
| **bid_price** | **Float** |  | [optional] |
| **ask_price** | **Float** |  | [optional] |
| **last_trade_price** | **Float** |  | [optional] |
| **bid_size** | **Float** |  | [optional] |
| **ask_size** | **Float** |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::SymbolsQuotesInner.new(
  symbol: null,
  bid_price: 8.43,
  ask_price: 8.43,
  last_trade_price: 8.74,
  bid_size: 260,
  ask_size: 344
)
```

