# SnapTrade::OptionChainInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **expiry_date** | **String** |  | [optional] |
| **description** | **String** |  | [optional] |
| **listing_exchange** | **String** |  | [optional] |
| **option_exercise_type** | **String** |  | [optional] |
| **chain_per_root** | [**Array&lt;OptionChainInnerChainPerRootInner&gt;**](OptionChainInnerChainPerRootInner.md) |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::OptionChainInner.new(
  expiry_date: 2022-07-08T04:00:00.000Z,
  description: APPLE INC,
  listing_exchange: OPRA,
  option_exercise_type: American,
  chain_per_root: null
)
```

