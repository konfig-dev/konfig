# SnapTrade.Net.Model.SnapTradeLoginUserRequestBody
Data to login a user via SnapTrade Partner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Broker** | **string** | Slug of the brokerage to connect the user to | [optional] 
**ImmediateRedirect** | **bool** | When set to True, user will be redirected back to the partner&#39;s site instead of the connection portal | [optional] 
**CustomRedirect** | **string** | URL to redirect the user to after the user connects their brokerage account | [optional] 
**Reconnect** | **string** | The UUID of the brokerage connection to be reconnected. This parameter should be left empty unless you are reconnecting a disabled connection. See ‘Reconnecting Accounts’ for more information. | [optional] 
**ConnectionType** | **string** | Sets whether the connection should be read or trade | [optional] 
**ConnectionPortalVersion** | **string** | Sets the version of the connection portal to render, with a default to &#39;v2&#39; | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

