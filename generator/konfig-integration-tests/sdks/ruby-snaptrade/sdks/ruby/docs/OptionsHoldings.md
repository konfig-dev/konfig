# SnapTrade::OptionsHoldings

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** | Options information | [optional] |
| **symbol** | **String** |  | [optional] |
| **option_symbol** | [**OptionsSymbol**](OptionsSymbol.md) |  | [optional] |
| **price** | **Float** | Trade Price if limit or stop limit order | [optional] |
| **currency** | [**Currency**](Currency.md) |  | [optional] |
| **average_purchase_price** | **Float** | Average purchase price for this position | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::OptionsHoldings.new(
  id: 11b55fd2-dc29-42ec-ac03-97b5cd757a4d,
  symbol: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  option_symbol: null,
  price: 31.33,
  currency: null,
  average_purchase_price: 108.3353
)
```

