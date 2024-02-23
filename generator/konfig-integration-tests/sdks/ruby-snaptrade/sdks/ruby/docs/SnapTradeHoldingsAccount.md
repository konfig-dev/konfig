# SnapTrade::SnapTradeHoldingsAccount

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **brokerage_authorization** | [**BrokerageAuthorization**](BrokerageAuthorization.md) |  | [optional] |
| **portfolio_group** | **String** |  | [optional] |
| **name** | **String** |  | [optional] |
| **number** | **String** |  | [optional] |
| **institution_name** | **String** |  | [optional] |
| **sync_status** | [**AccountSyncStatus**](AccountSyncStatus.md) |  | [optional] |
| **meta** | **Hash&lt;String, Object&gt;** |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::SnapTradeHoldingsAccount.new(
  id: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  brokerage_authorization: null,
  portfolio_group: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  name: Registered Retirement Savings Account,
  number: Q6542138443,
  institution_name: Alpaca,
  sync_status: null,
  meta: {&quot;type&quot;:&quot;Margin&quot;,&quot;status&quot;:&quot;ACTIVE&quot;,&quot;institution_name&quot;:&quot;Alpaca&quot;}
)
```

