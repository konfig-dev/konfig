# SnapTrade::StrategyImpact

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **estimated_commissions** | **Float** |  | [optional] |
| **buying_power_effect** | **Float** |  | [optional] |
| **buying_power_result** | **Float** |  | [optional] |
| **maint_excess_effect** | **Float** |  | [optional] |
| **maint_excess_result** | **Float** |  | [optional] |
| **trade_value_calculation** | **String** |  | [optional] |
| **legs** | [**Array&lt;StrategyImpactLegsInner&gt;**](StrategyImpactLegsInner.md) |  | [optional] |
| **side** | **String** |  | [optional] |
| **effect** | **String** |  | [optional] |
| **price** | **Float** |  | [optional] |
| **strategy** | **String** |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::StrategyImpact.new(
  estimated_commissions: 11.95,
  buying_power_effect: -156.3435,
  buying_power_result: 8800.0882,
  maint_excess_effect: -46.95,
  maint_excess_result: 2642.669129,
  trade_value_calculation: 1 x 0.07 x 100 + 1 x 0.28 x 100 &#x3D; DR 35.00 CAD,
  legs: null,
  side: Buy,
  effect: Debit,
  price: 0.35,
  strategy: Strangle
)
```

