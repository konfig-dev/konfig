# SnapTrade::OptionStrategy

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **underlying_symbol_id** | [**UniversalSymbol**](UniversalSymbol.md) |  | [optional] |
| **strategy_type** | **String** |  | [optional] |
| **number_of_legs** | **Float** |  | [optional] |
| **legs** | [**Array&lt;OptionStrategyLegsInner&gt;**](OptionStrategyLegsInner.md) |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::OptionStrategy.new(
  id: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  underlying_symbol_id: null,
  strategy_type: BUTTERFLY,
  number_of_legs: 2,
  legs: null
)
```

