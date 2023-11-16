

# TradeExecutionStatus

Execution status of a trade

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**symbol** | [**BrokerageSymbol**](BrokerageSymbol.md) |  |  [optional] |
|**universalSymbol** | [**UniversalSymbol**](UniversalSymbol.md) |  |  [optional] |
|**trade** | [**Trade**](Trade.md) |  |  [optional] |
|**state** | [**StateEnum**](#StateEnum) | Execution state of a trade |  [optional] |
|**filledUnits** | **Integer** | Number of filled units |  [optional] |
|**action** | [**ActionEnum**](#ActionEnum) | Action of executed trade |  [optional] |
|**price** | **Double** | Price of execution |  [optional] |
|**commissions** | **Double** | Fees paid from executing trade |  [optional] |
|**meta** | **Map&lt;String, Object&gt;** | Other misc. data |  [optional] |



## Enum: StateEnum

| Name | Value |
|---- | -----|
| EXECUTED | &quot;Executed&quot; |
| CANCELED | &quot;Canceled&quot; |
| REJECTED | &quot;Rejected&quot; |
| FAILED | &quot;Failed&quot; |
| NOT_EXECUTED | &quot;Not Executed&quot; |



## Enum: ActionEnum

| Name | Value |
|---- | -----|
| BUY | &quot;BUY&quot; |
| SELL | &quot;SELL&quot; |



