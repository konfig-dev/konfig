# SnapTrade::ExchangeRatePairs

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **src** | [**Currency**](Currency.md) |  | [optional] |
| **dst** | [**Currency**](Currency.md) |  | [optional] |
| **exchange_rate** | **Float** |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::ExchangeRatePairs.new(
  src: null,
  dst: null,
  exchange_rate: 1.32
)
```

