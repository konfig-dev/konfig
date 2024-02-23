# SnapTrade::SecurityType

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **code** | **String** |  | [optional] |
| **description** | **String** |  | [optional] |
| **is_supported** | **Boolean** |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::SecurityType.new(
  id: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  code: cs,
  description: Common Stock,
  is_supported: true
)
```

