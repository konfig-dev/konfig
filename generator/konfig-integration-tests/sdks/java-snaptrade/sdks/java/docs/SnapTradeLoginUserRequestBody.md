

# SnapTradeLoginUserRequestBody

Data to login a user via SnapTrade Partner

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**broker** | **String** | Slug of the brokerage to connect the user to |  [optional] |
|**immediateRedirect** | **Boolean** | When set to True, user will be redirected back to the partner&#39;s site instead of the connection portal |  [optional] |
|**customRedirect** | **String** | URL to redirect the user to after the user connects their brokerage account |  [optional] |
|**reconnect** | **String** | The UUID of the brokerage connection to be reconnected |  [optional] |
|**connectionType** | [**ConnectionTypeEnum**](#ConnectionTypeEnum) | Sets whether the connection should be read or trade |  [optional] |



## Enum: ConnectionTypeEnum

| Name | Value |
|---- | -----|
| READ | &quot;read&quot; |
| TRADE | &quot;trade&quot; |



