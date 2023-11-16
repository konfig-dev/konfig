

# StrategyOrderRecord

Strategy order record

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**strategy** | [**OptionStrategy**](OptionStrategy.md) |  |  [optional] |
|**status** | [**StatusEnum**](#StatusEnum) |  |  [optional] |
|**filledQuantity** | **Double** |  |  [optional] |
|**openQuantity** | **Double** |  |  [optional] |
|**closedQuantity** | **Double** |  |  [optional] |
|**orderType** | **OrderType** |  |  [optional] |
|**timeInForce** | **TimeInForce** |  |  [optional] |
|**limitPrice** | **Double** | Trade Price if limit or stop limit order |  [optional] |
|**executionPrice** | **Double** | Trade Price if limit or stop limit order |  [optional] |
|**timePlaced** | **String** | Time |  [optional] |
|**timeUpdated** | **String** | Time |  [optional] |



## Enum: StatusEnum

| Name | Value |
|---- | -----|
| PENDING | &quot;PENDING&quot; |
| ACCEPTED | &quot;ACCEPTED&quot; |
| FAILED | &quot;FAILED&quot; |
| REJECTED | &quot;REJECTED&quot; |
| CANCELED | &quot;CANCELED&quot; |
| PARTIAL_CANCELED | &quot;PARTIAL_CANCELED&quot; |
| CANCEL_PENDING | &quot;CANCEL_PENDING&quot; |
| EXECUTED | &quot;EXECUTED&quot; |
| PARTIAL | &quot;PARTIAL&quot; |
| REPLACE_PENDING | &quot;REPLACE_PENDING&quot; |
| REPLACED | &quot;REPLACED&quot; |
| STOPPED | &quot;STOPPED&quot; |
| SUSPENDED | &quot;SUSPENDED&quot; |
| EXPIRED | &quot;EXPIRED&quot; |
| QUEUED | &quot;QUEUED&quot; |
| TRIGGERED | &quot;TRIGGERED&quot; |
| ACTIVATED | &quot;ACTIVATED&quot; |
| PENDING_RISK_REVIEW | &quot;PENDING_RISK_REVIEW&quot; |
| CONTINGENT_ORDER | &quot;CONTINGENT_ORDER&quot; |



