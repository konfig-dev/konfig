# TradeExecutionStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | [**BrokerageSymbol**](BrokerageSymbol.md) |  | [optional] 
**universalSymbol** | [**UniversalSymbol**](UniversalSymbol.md) |  | [optional] 
**trade** | [**Trade**](Trade.md) |  | [optional] 
**state** | **String** | Execution state of a trade | [optional] 
**filledUnits** | **Int** | Number of filled units | [optional] 
**action** | **String** | Action of executed trade | [optional] 
**price** | **Double** | Price of execution | [optional] 
**commissions** | **Double** | Fees paid from executing trade | [optional] 
**meta** | [String: AnyCodable] | Other misc. data | [optional] 

[[Back to Model list]](../README.md#models) [[Back to API list]](../README.md#api-endpoints) [[Back to README]](../README.md)


