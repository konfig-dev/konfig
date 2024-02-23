# SnapTrade::UnderlyingSymbol

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **symbol** | **String** |  | [optional] |
| **description** | **String** |  | [optional] |
| **currency** | [**Currency**](Currency.md) |  | [optional] |
| **exchange** | [**USExchange**](USExchange.md) |  | [optional] |
| **type** | [**SecurityType**](SecurityType.md) |  | [optional] |
| **currencies** | [**Array&lt;Currency&gt;**](Currency.md) |  | [optional] |
| **figi_code** | **String** |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::UnderlyingSymbol.new(
  id: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  symbol: SPY,
  description: SPDR S&amp;P 500 ETF Trust,
  currency: null,
  exchange: null,
  type: null,
  currencies: null,
  figi_code: BBG000B9XRY4
)
```

