# ManualTrade

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**account** | **String** |  | [optional] 
**orderType** | [**OrderType**](OrderType.md) |  | [optional] 
**timeInForce** | **String** | Trade time in force examples:   * FOK - Fill Or Kill   * Day - Day   * GTC - Good Til Canceled   * GTD - Good Til Date  | [optional] 
**symbol** | [**ManualTradeSymbol**](ManualTradeSymbol.md) |  | [optional] 
**action** | [**Action**](Action.md) |  | [optional] 
**units** | **Double** | Trade Units. Cannot work with notional value. | [optional] 
**price** | **Double** | Trade Price if limit or stop limit order | [optional] 

[[Back to Model list]](../README.md#models) [[Back to API list]](../README.md#api-endpoints) [[Back to README]](../README.md)


