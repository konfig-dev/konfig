# SnapTrade::BrokerageAuthorization

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **created_date** | **String** | Time | [optional] |
| **updated_date** | **String** | Time | [optional] |
| **brokerage** | [**Brokerage**](Brokerage.md) |  | [optional] |
| **name** | **String** | Connection Name | [optional] |
| **type** | **String** |  | [optional] |
| **disabled** | **Boolean** |  | [optional] |
| **disabled_date** | **String** | Disabled date | [optional] |
| **meta** | **Hash&lt;String, Object&gt;** | Additional data about brokerage authorization | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::BrokerageAuthorization.new(
  id: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  created_date: 2022-01-21T20:11:19.217Z,
  updated_date: 2022-01-21T20:11:19.217Z,
  brokerage: null,
  name: Connection-1,
  type: trade,
  disabled: false,
  disabled_date: 2022-01-21T20:11:19.217Z,
  meta: {&quot;identifier&quot;:123456}
)
```

