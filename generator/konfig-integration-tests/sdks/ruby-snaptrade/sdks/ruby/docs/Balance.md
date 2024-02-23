# SnapTrade::Balance

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **currency** | [**Currency**](Currency.md) |  | [optional] |
| **cash** | **Float** |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::Balance.new(
  currency: null,
  cash: 300.71
)
```

