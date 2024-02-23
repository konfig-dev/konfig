# SnapTrade::SnapTradeHoldingsAccountAccountId

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **brokerage_authorization** | **String** |  | [optional] |
| **portfolio_group** | **String** |  | [optional] |
| **name** | **String** |  | [optional] |
| **number** | **String** |  | [optional] |
| **institution_name** | **String** |  | [optional] |
| **meta** | **Hash&lt;String, Object&gt;** |  | [optional] |
| **cash_restrictions** | [**Array&lt;CashRestriction&gt;**](CashRestriction.md) |  | [optional] |
| **created_date** | **String** | Time | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::SnapTradeHoldingsAccountAccountId.new(
  id: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  brokerage_authorization: 87b24961-b51e-4db8-9226-f198f6518a89,
  portfolio_group: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  name: Registered Retirement Savings Account,
  number: Q6542138443,
  institution_name: Alpaca,
  meta: {&quot;type&quot;:&quot;Margin&quot;,&quot;status&quot;:&quot;ACTIVE&quot;,&quot;institution_name&quot;:&quot;Alpaca&quot;},
  cash_restrictions: null,
  created_date: 2022-01-21T20:11:19.217Z
)
```

