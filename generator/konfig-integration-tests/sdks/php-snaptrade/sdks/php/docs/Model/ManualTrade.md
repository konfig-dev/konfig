# # ManualTrade

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional]
**account** | **string** |  | [optional]
**order_type** | [**\SnapTrade\Model\OrderType**](OrderType.md) |  | [optional]
**time_in_force** | **string** | Trade time in force examples:   * FOK - Fill Or Kill   * Day - Day   * GTC - Good Til Canceled   * GTD - Good Til Date | [optional]
**symbol** | [**\SnapTrade\Model\ManualTradeSymbol**](ManualTradeSymbol.md) |  | [optional]
**action** | [**\SnapTrade\Model\Action**](Action.md) |  | [optional]
**units** | **float** | Trade Units. Cannot work with notional value. | [optional]
**price** | **float** | Trade Price if limit or stop limit order | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
