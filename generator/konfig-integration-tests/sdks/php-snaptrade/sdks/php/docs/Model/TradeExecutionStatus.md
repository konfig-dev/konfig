# # TradeExecutionStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | [**\SnapTrade\Model\BrokerageSymbol**](BrokerageSymbol.md) |  | [optional]
**universal_symbol** | [**\SnapTrade\Model\UniversalSymbol**](UniversalSymbol.md) |  | [optional]
**trade** | [**\SnapTrade\Model\Trade**](Trade.md) |  | [optional]
**state** | **string** | Execution state of a trade | [optional]
**filled_units** | **int** | Number of filled units | [optional]
**action** | **string** | Action of executed trade | [optional]
**price** | **float** | Price of execution | [optional]
**commissions** | **float** | Fees paid from executing trade | [optional]
**meta** | **array<string,mixed>** | Other misc. data | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
