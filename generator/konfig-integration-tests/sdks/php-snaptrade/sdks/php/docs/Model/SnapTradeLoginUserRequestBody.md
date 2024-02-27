# # SnapTradeLoginUserRequestBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**broker** | **string** | Slug of the brokerage to connect the user to | [optional]
**immediate_redirect** | **bool** | When set to True, user will be redirected back to the partner&#39;s site instead of the connection portal | [optional]
**custom_redirect** | **string** | URL to redirect the user to after the user connects their brokerage account | [optional]
**reconnect** | **string** | The UUID of the brokerage connection to be reconnected. This parameter should be left empty unless you are reconnecting a disabled connection. See ‘Reconnecting Accounts’ for more information. | [optional]
**connection_type** | **string** | Sets whether the connection should be read or trade | [optional]
**connection_portal_version** | **string** | Sets the version of the connection portal to render, with a default to &#39;v2&#39; | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
