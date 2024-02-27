# # StrategyOrderRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**strategy** | [**\SnapTrade\Model\OptionStrategy**](OptionStrategy.md) |  | [optional]
**status** | **string** |  | [optional]
**filled_quantity** | **float** |  | [optional]
**open_quantity** | **float** |  | [optional]
**closed_quantity** | **float** |  | [optional]
**order_type** | [**\SnapTrade\Model\OrderType**](OrderType.md) |  | [optional]
**time_in_force** | **string** | Trade time in force examples:   * FOK - Fill Or Kill   * Day - Day   * GTC - Good Til Canceled   * GTD - Good Til Date | [optional]
**limit_price** | **float** | Trade Price if limit or stop limit order | [optional]
**execution_price** | **float** | Trade Price if limit or stop limit order | [optional]
**time_placed** | **string** | Time | [optional]
**time_updated** | **string** | Time | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
