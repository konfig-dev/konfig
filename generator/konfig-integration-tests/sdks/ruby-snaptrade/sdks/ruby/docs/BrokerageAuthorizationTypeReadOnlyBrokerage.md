# SnapTrade::BrokerageAuthorizationTypeReadOnlyBrokerage

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **name** | **String** | Name of Brokerage | [optional] |
| **slug** | **String** | Slug of Brokerage. It is usually the name of the brokerage in capital letters | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::BrokerageAuthorizationTypeReadOnlyBrokerage.new(
  id: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  name: Questrade,
  slug: QUESTRADE
)
```

