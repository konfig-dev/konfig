# AccountOrderRecord

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brokerageOrderId** | **String** | Order id returned by brokerage | [optional] 
**status** | [**AccountOrderRecordStatus**](AccountOrderRecordStatus.md) |  | [optional] 
**symbol** | **String** |  | [optional] 
**universalSymbol** | [**UniversalSymbol**](UniversalSymbol.md) |  | [optional] 
**optionSymbol** | [**OptionsSymbol**](OptionsSymbol.md) |  | [optional] 
**action** | [**Action**](Action.md) |  | [optional] 
**totalQuantity** | **Double** | Trade Units. Cannot work with notional value. | [optional] 
**openQuantity** | **Double** | Trade Units | [optional] 
**canceledQuantity** | **Double** | Trade Units | [optional] 
**filledQuantity** | **Double** | Trade Units | [optional] 
**executionPrice** | **Double** | Trade Price if limit or stop limit order | [optional] 
**limitPrice** | **Double** | Trade Price if limit or stop limit order | [optional] 
**stopPrice** | **Double** | Stop Price. If stop loss or stop limit order, the price to trigger the stop | [optional] 
**orderType** | [**OrderType**](OrderType.md) |  | [optional] 
**timeInForce** | **String** | Trade time in force examples:   * FOK - Fill Or Kill   * Day - Day   * GTC - Good Til Canceled   * GTD - Good Til Date  | [optional] 
**timePlaced** | **String** | Time | [optional] 
**timeUpdated** | **String** | Time | [optional] 
**expiryDate** | **String** | Time | [optional] 

[[Back to Model list]](../README.md#models) [[Back to API list]](../README.md#api-endpoints) [[Back to README]](../README.md)


