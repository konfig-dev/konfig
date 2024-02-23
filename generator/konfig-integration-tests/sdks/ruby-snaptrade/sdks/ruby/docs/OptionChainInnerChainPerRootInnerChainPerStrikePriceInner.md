# SnapTrade::OptionChainInnerChainPerRootInnerChainPerStrikePriceInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **strike_price** | **Integer** |  | [optional] |
| **call_symbol_id** | **Integer** |  | [optional] |
| **put_symbol_id** | **Integer** |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::OptionChainInnerChainPerRootInnerChainPerStrikePriceInner.new(
  strike_price: 70,
  call_symbol_id: 42816081,
  put_symbol_id: 42816129
)
```

