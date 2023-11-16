

# AccountOrderRecord

Record of order in brokerageaccount

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**brokerageOrderId** | **String** | Order id returned by brokerage |  [optional] |
|**status** | **AccountOrderRecordStatus** |  |  [optional] |
|**symbol** | **UUID** |  |  [optional] |
|**universalSymbol** | [**UniversalSymbol**](UniversalSymbol.md) |  |  [optional] |
|**optionSymbol** | [**OptionsSymbol**](OptionsSymbol.md) |  |  [optional] |
|**action** | **Action** |  |  [optional] |
|**totalQuantity** | **Double** | Trade Units |  [optional] |
|**openQuantity** | **Double** | Trade Units |  [optional] |
|**canceledQuantity** | **Double** | Trade Units |  [optional] |
|**filledQuantity** | **Double** | Trade Units |  [optional] |
|**executionPrice** | **Double** | Trade Price if limit or stop limit order |  [optional] |
|**limitPrice** | **Double** | Trade Price if limit or stop limit order |  [optional] |
|**stopPrice** | **Double** | Stop Price. If stop loss or stop limit order, the price to trigger the stop |  [optional] |
|**orderType** | **OrderType** |  |  [optional] |
|**timeInForce** | **TimeInForce** |  |  [optional] |
|**timePlaced** | **String** | Time |  [optional] |
|**timeUpdated** | **String** | Time |  [optional] |
|**expiryDate** | **String** | Time |  [optional] |



