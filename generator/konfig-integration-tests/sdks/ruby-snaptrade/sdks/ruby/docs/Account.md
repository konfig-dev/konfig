# SnapTrade::Account

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **brokerage_authorization** | **String** |  | [optional] |
| **portfolio_group** | **String** |  | [optional] |
| **name** | **String** |  | [optional] |
| **number** | **String** |  | [optional] |
| **institution_name** | **String** |  | [optional] |
| **created_date** | **String** |  | [optional] |
| **meta** | **Hash&lt;String, Object&gt;** |  | [optional] |
| **cash_restrictions** | [**Array&lt;CashRestriction&gt;**](CashRestriction.md) |  | [optional] |
| **sync_status** | [**AccountSyncStatus**](AccountSyncStatus.md) |  | [optional] |
| **balance** | [**AccountBalance**](AccountBalance.md) |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::Account.new(
  id: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  brokerage_authorization: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  portfolio_group: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  name: Registered Retirement Savings Account,
  number: Q6542138443,
  institution_name: Alpaca,
  created_date: 2021-06-04T16:26:46.523Z,
  meta: {&quot;type&quot;:&quot;Margin&quot;,&quot;status&quot;:&quot;ACTIVE&quot;,&quot;institution_name&quot;:&quot;Alpaca&quot;},
  cash_restrictions: null,
  sync_status: null,
  balance: null
)
```

