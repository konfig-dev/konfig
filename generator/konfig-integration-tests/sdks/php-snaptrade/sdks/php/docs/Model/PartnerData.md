# # PartnerData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**redirect_uri** | **string** | URI to redirect user back to after user is done adding brokerage connections | [optional]
**allowed_brokerages** | [**\SnapTrade\Model\Brokerage[]**](Brokerage.md) | Brokerages that can be accessed by partners | [optional]
**name** | **string** | Name of Snaptrade Partner | [optional]
**slug** | **string** | Slug of Snaptrade Partner | [optional]
**logo_url** | **string** | URL to partner&#39;s logo | [optional]
**pin_required** | **bool** | Shows if pin is required by users to access connection page | [optional]
**can_access_trades** | **bool** | Shows if users of Snaptrade partners can access trade endpoints | [optional]
**can_access_holdings** | **bool** | Shows if Snaptrade partners can get user holdings data | [optional]
**can_access_account_history** | **bool** | Shows if Snaptrade partners can get users account history data | [optional]
**can_access_reference_data** | **bool** | Shows if Snaptrade partners can get users holdings data | [optional]
**can_access_portfolio_management** | **bool** | Shows if users Snaptrade partners can access portfolio group management features | [optional]
**can_access_orders** | **bool** | Shows if Snaptrade partners can get users account order history | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
