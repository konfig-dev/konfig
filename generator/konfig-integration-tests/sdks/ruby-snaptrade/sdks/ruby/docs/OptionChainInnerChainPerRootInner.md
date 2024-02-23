# SnapTrade::OptionChainInnerChainPerRootInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **option_root** | **String** |  | [optional] |
| **chain_per_strike_price** | [**Array&lt;OptionChainInnerChainPerRootInnerChainPerStrikePriceInner&gt;**](OptionChainInnerChainPerRootInnerChainPerStrikePriceInner.md) |  | [optional] |
| **multiplier** | **Integer** |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::OptionChainInnerChainPerRootInner.new(
  option_root: AAPL,
  chain_per_strike_price: null,
  multiplier: 100
)
```

