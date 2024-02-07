# SnapTradeLoginUserRequestBody

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**broker** | **String** | Slug of the brokerage to connect the user to | [optional] 
**immediateRedirect** | **Bool** | When set to True, user will be redirected back to the partner&#39;s site instead of the connection portal | [optional] 
**customRedirect** | **String** | URL to redirect the user to after the user connects their brokerage account | [optional] 
**reconnect** | **String** | The UUID of the brokerage connection to be reconnected. This parameter should be left empty unless you are reconnecting a disabled connection. See ‘Reconnecting Accounts’ for more information. | [optional] 
**connectionType** | **String** | Sets whether the connection should be read or trade | [optional] 
**connectionPortalVersion** | **String** | Sets the version of the connection portal to render, with a default to &#39;v2&#39; | [optional] 

[[Back to Model list]](../README.md#models) [[Back to API list]](../README.md#api-endpoints) [[Back to README]](../README.md)


