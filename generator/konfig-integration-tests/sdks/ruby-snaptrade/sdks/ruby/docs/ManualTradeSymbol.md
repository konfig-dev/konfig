# SnapTrade::ManualTradeSymbol

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **brokerage_symbol_id** | **String** |  | [optional] |
| **universal_symbol_id** | **String** |  | [optional] |
| **currency** | [**Currency**](Currency.md) |  | [optional] |
| **local_id** | **String** |  | [optional] |
| **description** | **String** |  | [optional] |
| **symbol** | **String** |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::ManualTradeSymbol.new(
  brokerage_symbol_id: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  universal_symbol_id: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  currency: null,
  local_id: 1048101,
  description: Metaverse Global ETF,
  symbol: MVGP.U.TO
)
```

