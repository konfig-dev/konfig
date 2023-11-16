

# BrokerageAuthorizationTypeReadOnly


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **UUID** |  |  [optional] |
|**type** | [**TypeEnum**](#TypeEnum) |  |  [optional] |
|**authType** | [**AuthTypeEnum**](#AuthTypeEnum) |  |  [optional] |
|**brokerage** | [**BrokerageAuthorizationTypeReadOnlyBrokerage**](BrokerageAuthorizationTypeReadOnlyBrokerage.md) |  |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| READ | &quot;read&quot; |
| TRADE | &quot;trade&quot; |



## Enum: AuthTypeEnum

| Name | Value |
|---- | -----|
| OAUTH | &quot;OAUTH&quot; |
| SCRAPE | &quot;SCRAPE&quot; |
| UNOFFICIAL_API | &quot;UNOFFICIAL_API&quot; |
| TOKEN | &quot;TOKEN&quot; |



