

# ConnectionsSessionEvents200ResponseInner


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **UUID** |  |  [optional] |
|**sessionEventType** | [**SessionEventTypeEnum**](#SessionEventTypeEnum) |  |  [optional] |
|**sessionId** | **UUID** |  |  [optional] |
|**userId** | **String** | SnapTrade User ID. Provided by SnapTrade Partner. Can be any string, as long as it&#39;s unique to a user |  [optional] |
|**createdDate** | **String** | Time |  [optional] |
|**brokerageStatusCode** | **Integer** |  |  [optional] |
|**brokerageAuthorizationId** | **UUID** |  |  [optional] |



## Enum: SessionEventTypeEnum

| Name | Value |
|---- | -----|
| CONNECTION_FAILED | &quot;CONNECTION_FAILED&quot; |
| DISCLAIMER_ACCEPTED | &quot;DISCLAIMER_ACCEPTED&quot; |
| BROKERAGE_CONNECTION_INITIATED | &quot;BROKERAGE_CONNECTION_INITIATED&quot; |
| BROKERAGE_AUTHENTICATION | &quot;BROKERAGE_AUTHENTICATION&quot; |
| MFA_AUTHORIZATION | &quot;MFA_AUTHORIZATION&quot; |
| CONNECTION_SUCCESSFUL | &quot;CONNECTION_SUCCESSFUL&quot; |
| PARTNER_REDIRECT | &quot;PARTNER_REDIRECT&quot; |



