# SnapTrade::BrokerageAuthorizationTypeReadOnly

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **type** | [**BrokerageAuthorizationTypeReadOnlyType**](BrokerageAuthorizationTypeReadOnlyType.md) |  | [optional] |
| **auth_type** | [**AuthType**](AuthType.md) |  | [optional] |
| **brokerage** | [**BrokerageAuthorizationTypeReadOnlyBrokerage**](BrokerageAuthorizationTypeReadOnlyBrokerage.md) |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::BrokerageAuthorizationTypeReadOnly.new(
  id: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  type: null,
  auth_type: null,
  brokerage: null
)
```

