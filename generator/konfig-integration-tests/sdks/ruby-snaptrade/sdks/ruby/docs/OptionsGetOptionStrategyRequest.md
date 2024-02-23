# SnapTrade::OptionsGetOptionStrategyRequest

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **underlying_symbol_id** | **String** |  |  |
| **legs** | [**Array&lt;OptionLeg&gt;**](OptionLeg.md) |  |  |
| **strategy_type** | [**StrategyType**](StrategyType.md) |  |  |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::OptionsGetOptionStrategyRequest.new(
  underlying_symbol_id: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  legs: null,
  strategy_type: null
)
```

