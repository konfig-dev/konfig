# SnapTrade::StrategyQuotesGreek

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **delta** | **Float** |  | [optional] |
| **gamma** | **Float** |  | [optional] |
| **theta** | **Float** |  | [optional] |
| **vega** | **Float** |  | [optional] |
| **rho** | **Float** |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::StrategyQuotesGreek.new(
  delta: 0.1,
  gamma: 0.1,
  theta: 0.1,
  vega: 0.1,
  rho: 0.1
)
```

