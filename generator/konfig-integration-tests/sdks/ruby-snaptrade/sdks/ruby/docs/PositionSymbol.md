# SnapTrade::PositionSymbol

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **description** | **String** |  | [optional] |
| **symbol** | [**UniversalSymbol**](UniversalSymbol.md) |  | [optional] |
| **local_id** | **String** |  | [optional] |
| **is_quotable** | **Boolean** |  | [optional] |
| **is_tradable** | **Boolean** |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::PositionSymbol.new(
  id: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  description: VANGUARD CDN AGGREGATE BOND INDEX ETF,
  symbol: null,
  local_id: 3291231,
  is_quotable: true,
  is_tradable: true
)
```

