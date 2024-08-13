

# ManualTradeForm

Manual Trade Form

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**accountId** | **UUID** |  |  [optional] |
|**action** | **ActionStrict** |  |  [optional] |
|**orderType** | **OrderTypeStrict** |  |  [optional] |
|**price** | **Double** | Trade Price if limit or stop limit order |  [optional] |
|**stop** | **Double** | Stop Price. If stop loss or stop limit order, the price to trigger the stop |  [optional] |
|**timeInForce** | **TimeInForceStrict** |  |  [optional] |
|**units** | **Double** | Trade Units. Cannot work with notional value. |  [optional] |
|**universalSymbolId** | **UUID** |  |  [optional] |
|**notionalValue** | **Object** |  |  [optional] |



