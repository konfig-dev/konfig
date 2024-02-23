# SnapTrade::StrategyQuotes

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **strategy** | [**OptionStrategy**](OptionStrategy.md) |  | [optional] |
| **open_price** | **Float** | Trade Price if limit or stop limit order | [optional] |
| **bid_price** | **Float** | Trade Price if limit or stop limit order | [optional] |
| **ask_price** | **Float** | Trade Price if limit or stop limit order | [optional] |
| **volatility** | **Float** |  | [optional] |
| **greek** | [**StrategyQuotesGreek**](StrategyQuotesGreek.md) |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::StrategyQuotes.new(
  strategy: null,
  open_price: 31.33,
  bid_price: 31.33,
  ask_price: 31.33,
  volatility: 0.141,
  greek: null
)
```

