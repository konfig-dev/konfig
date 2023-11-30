# SnapTrade.Net.Model.TradeExecutionStatus
Execution status of a trade

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Symbol** | [**BrokerageSymbol**](BrokerageSymbol.md) |  | [optional] 
**UniversalSymbol** | [**UniversalSymbol**](UniversalSymbol.md) |  | [optional] 
**Trade** | [**Trade**](Trade.md) |  | [optional] 
**State** | **string** | Execution state of a trade | [optional] 
**FilledUnits** | **int** | Number of filled units | [optional] 
**_Action** | **string** | Action of executed trade | [optional] 
**Price** | **double** | Price of execution | [optional] 
**Commissions** | **double** | Fees paid from executing trade | [optional] 
**Meta** | **Dictionary&lt;string, Object&gt;** | Other misc. data | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

