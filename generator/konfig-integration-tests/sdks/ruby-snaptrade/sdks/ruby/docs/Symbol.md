# SnapTrade::Symbol

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **symbol** | **String** |  | [optional] |
| **raw_symbol** | **String** |  | [optional] |
| **name** | **String** |  | [optional] |
| **currency** | [**Currency**](Currency.md) |  | [optional] |
| **exchange** | [**Exchange**](Exchange.md) |  | [optional] |
| **type** | [**SecurityType**](SecurityType.md) |  | [optional] |
| **figi_code** | **String** |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::Symbol.new(
  id: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  symbol: VAB.TO,
  raw_symbol: VAB,
  name: Vanguard Canadian Aggregate Bond Index ETF,
  currency: null,
  exchange: null,
  type: null,
  figi_code: BBG000B9XRY4
)
```

