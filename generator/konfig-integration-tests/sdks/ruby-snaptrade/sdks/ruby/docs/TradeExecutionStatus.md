# SnapTrade::TradeExecutionStatus

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **symbol** | [**BrokerageSymbol**](BrokerageSymbol.md) |  | [optional] |
| **universal_symbol** | [**UniversalSymbol**](UniversalSymbol.md) |  | [optional] |
| **trade** | [**Trade**](Trade.md) |  | [optional] |
| **state** | [**State**](State.md) |  | [optional] |
| **filled_units** | **Integer** | Number of filled units | [optional] |
| **action** | [**TradeExecutionStatusAction**](TradeExecutionStatusAction.md) |  | [optional] |
| **price** | **Float** | Price of execution | [optional] |
| **commissions** | **Float** | Fees paid from executing trade | [optional] |
| **meta** | **Hash&lt;String, Object&gt;** | Other misc. data | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::TradeExecutionStatus.new(
  symbol: null,
  universal_symbol: null,
  trade: null,
  state: null,
  filled_units: 3,
  action: null,
  price: 23.44,
  commissions: 23.44,
  meta: {&quot;canceledUnits&quot;:2}
)
```

