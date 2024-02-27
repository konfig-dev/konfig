# # AccountOrderRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brokerage_order_id** | **string** | Order id returned by brokerage | [optional]
**status** | [**\SnapTrade\Model\AccountOrderRecordStatus**](AccountOrderRecordStatus.md) |  | [optional]
**symbol** | **string** |  | [optional]
**universal_symbol** | [**\SnapTrade\Model\UniversalSymbol**](UniversalSymbol.md) |  | [optional]
**option_symbol** | [**\SnapTrade\Model\OptionsSymbol**](OptionsSymbol.md) |  | [optional]
**action** | [**\SnapTrade\Model\Action**](Action.md) |  | [optional]
**total_quantity** | **float** | Trade Units. Cannot work with notional value. | [optional]
**open_quantity** | **float** | Trade Units | [optional]
**canceled_quantity** | **float** | Trade Units | [optional]
**filled_quantity** | **float** | Trade Units | [optional]
**execution_price** | **float** | Trade Price if limit or stop limit order | [optional]
**limit_price** | **float** | Trade Price if limit or stop limit order | [optional]
**stop_price** | **float** | Stop Price. If stop loss or stop limit order, the price to trigger the stop | [optional]
**order_type** | [**\SnapTrade\Model\OrderType**](OrderType.md) |  | [optional]
**time_in_force** | **string** | Trade time in force examples:   * FOK - Fill Or Kill   * Day - Day   * GTC - Good Til Canceled   * GTD - Good Til Date | [optional]
**time_placed** | **string** | Time | [optional]
**time_updated** | **string** | Time | [optional]
**expiry_date** | **string** | Time | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
