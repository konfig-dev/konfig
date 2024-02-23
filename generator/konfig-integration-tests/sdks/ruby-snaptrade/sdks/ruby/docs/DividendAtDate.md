# SnapTrade::DividendAtDate

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **symbol** | **String** | The ticker of the symbol that the dividend came from | [optional] |
| **amount** | **Float** | The amount received from the dividend | [optional] |
| **currency** | **String** | The currency of the amount | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::DividendAtDate.new(
  symbol: AAPL,
  amount: 6.82,
  currency: CAD
)
```

