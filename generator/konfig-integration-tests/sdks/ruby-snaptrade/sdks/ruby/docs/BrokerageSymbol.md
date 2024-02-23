# SnapTrade::BrokerageSymbol

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **symbol** | [**BrokerageSymbolSymbol**](BrokerageSymbolSymbol.md) |  | [optional] |
| **brokerage_authorization** | [**BrokerageAuthorization**](BrokerageAuthorization.md) |  | [optional] |
| **description** | **String** |  | [optional] |
| **allows_fractional_units** | **Boolean** |  | [optional] |
| **option_symbol** | [**BrokerageSymbolOptionSymbol**](BrokerageSymbolOptionSymbol.md) |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::BrokerageSymbol.new(
  id: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  symbol: null,
  brokerage_authorization: null,
  description: VANGUARD CDN AGGREGATE BOND INDEX ETF,
  allows_fractional_units: true,
  option_symbol: null
)
```

