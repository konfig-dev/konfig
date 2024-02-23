# SnapTrade::PartnerData

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **redirect_uri** | **String** | URI to redirect user back to after user is done adding brokerage connections | [optional] |
| **allowed_brokerages** | [**Array&lt;Brokerage&gt;**](Brokerage.md) | Brokerages that can be accessed by partners | [optional] |
| **name** | **String** | Name of Snaptrade Partner | [optional] |
| **slug** | **String** | Slug of Snaptrade Partner | [optional] |
| **logo_url** | **String** | URL to partner&#39;s logo | [optional] |
| **pin_required** | **Boolean** | Shows if pin is required by users to access connection page | [optional] |
| **can_access_trades** | **Boolean** | Shows if users of Snaptrade partners can access trade endpoints | [optional] |
| **can_access_holdings** | **Boolean** | Shows if Snaptrade partners can get user holdings data | [optional] |
| **can_access_account_history** | **Boolean** | Shows if Snaptrade partners can get users account history data | [optional] |
| **can_access_reference_data** | **Boolean** | Shows if Snaptrade partners can get users holdings data | [optional] |
| **can_access_portfolio_management** | **Boolean** | Shows if users Snaptrade partners can access portfolio group management features | [optional] |
| **can_access_orders** | **Boolean** | Shows if Snaptrade partners can get users account order history | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::PartnerData.new(
  redirect_uri: https://example.com/oauth/snaptrade,
  allowed_brokerages: null,
  name: Wealthy Chimpmunk,
  slug: WEALTHYCHIPMUNK,
  logo_url: https://example.com/logo.png,
  pin_required: false,
  can_access_trades: true,
  can_access_holdings: true,
  can_access_account_history: true,
  can_access_reference_data: true,
  can_access_portfolio_management: true,
  can_access_orders: true
)
```

