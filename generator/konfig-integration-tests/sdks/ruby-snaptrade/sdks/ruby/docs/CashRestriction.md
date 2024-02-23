# SnapTrade::CashRestriction

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **account** | **String** |  | [optional] |
| **currency** | **String** |  | [optional] |
| **type** | [**Type**](Type.md) |  | [optional] |
| **amount** | **Float** |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::CashRestriction.new(
  id: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  account: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  currency: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  type: null,
  amount: 100
)
```

