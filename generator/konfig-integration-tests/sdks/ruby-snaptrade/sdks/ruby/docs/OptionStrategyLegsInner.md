# SnapTrade::OptionStrategyLegsInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **option_symbol_id** | **String** |  | [optional] |
| **index** | **Float** |  | [optional] |
| **action** | **String** |  | [optional] |
| **quantity** | **Float** |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::OptionStrategyLegsInner.new(
  option_symbol_id: AAPLC20221111,
  index: 1,
  action: BUY_TO_OPEN,
  quantity: 10
)
```

