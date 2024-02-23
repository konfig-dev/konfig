# SnapTrade::PortfolioGroupInfo

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **symbols** | [**Array&lt;UniversalSymbol&gt;**](UniversalSymbol.md) |  | [optional] |
| **quotable_symbols** | [**Array&lt;UniversalSymbol&gt;**](UniversalSymbol.md) |  | [optional] |
| **balances** | [**Array&lt;Balance&gt;**](Balance.md) |  | [optional] |
| **positions** | [**Array&lt;Position&gt;**](Position.md) |  | [optional] |
| **target_positions** | [**Array&lt;TargetAsset&gt;**](TargetAsset.md) |  | [optional] |
| **ideal_positions** | [**Array&lt;Position&gt;**](Position.md) |  | [optional] |
| **excluded_positions** | [**Array&lt;ExcludedAsset&gt;**](ExcludedAsset.md) |  | [optional] |
| **calculated_trades** | [**Array&lt;CalculatedTrade&gt;**](CalculatedTrade.md) |  | [optional] |
| **brokerage_authorizations** | [**Array&lt;BrokerageAuthorization&gt;**](BrokerageAuthorization.md) |  | [optional] |
| **accuracy** | **Float** |  | [optional] |
| **settings** | [**PortfolioGroupSettings**](PortfolioGroupSettings.md) |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::PortfolioGroupInfo.new(
  symbols: null,
  quotable_symbols: null,
  balances: null,
  positions: null,
  target_positions: null,
  ideal_positions: null,
  excluded_positions: null,
  calculated_trades: null,
  brokerage_authorizations: null,
  accuracy: 0.962,
  settings: null
)
```

