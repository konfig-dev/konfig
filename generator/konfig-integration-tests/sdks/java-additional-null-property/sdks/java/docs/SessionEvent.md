

# SessionEvent


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **UUID** |  |  [optional] |
|**sessionEventType** | [**SessionEventTypeEnum**](#SessionEventTypeEnum) |  |  [optional] |
|**sessionId** | **UUID** |  |  [optional] |
|**userId** | **String** | SnapTrade User ID. This is chosen by the API partner and can be any string that is a) unique to the user, and b) immutable for the user. It is recommended to NOT use email addresses for this property because they are usually not immutable. |  [optional] |
|**createdDate** | **String** | Time |  [optional] |
|**brokerageStatusCode** | **Integer** |  |  [optional] |
|**brokerageAuthorizationId** | **UUID** |  |  [optional] |



## Enum: SessionEventTypeEnum

| Name | Value |
|---- | -----|
| OAUTH_REDIRECT | &quot;OAUTH_REDIRECT&quot; |
| DISCLAIMER_ACCEPTED | &quot;DISCLAIMER_ACCEPTED&quot; |
| BROKERAGE_CONNECTION_INITIATED | &quot;BROKERAGE_CONNECTION_INITIATED&quot; |
| BROKERAGE_RECONNECT_INITIATED | &quot;BROKERAGE_RECONNECT_INITIATED&quot; |
| BROKERAGE_AUTHENTICATION | &quot;BROKERAGE_AUTHENTICATION&quot; |
| OAUTH_BROKERAGE_AUTHENTICATION | &quot;OAUTH_BROKERAGE_AUTHENTICATION&quot; |
| MFA_REQUESTED | &quot;MFA_REQUESTED&quot; |
| MFA_SUBMITTED | &quot;MFA_SUBMITTED&quot; |
| MFA_CHOICE_REQUESTED | &quot;MFA_CHOICE_REQUESTED&quot; |
| MFA_CHOICE_SUBMITTED | &quot;MFA_CHOICE_SUBMITTED&quot; |
| CONNECTION_SUCCESSFUL | &quot;CONNECTION_SUCCESSFUL&quot; |
| CONNECTION_FAILED | &quot;CONNECTION_FAILED&quot; |
| PARTNER_REDIRECT | &quot;PARTNER_REDIRECT&quot; |
| CONNECTION_ABORTED | &quot;CONNECTION_ABORTED&quot; |
| SESSION_STARTED | &quot;SESSION_STARTED&quot; |



