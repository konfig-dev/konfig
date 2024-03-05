

# ManualTradeForm

Manual Trade Form

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**accountId** | **UUID** |  |  [optional] |
|**action** | **Action** |  |  [optional] |
|**orderType** | **OrderType** |  |  [optional] |
|**price** | **Double** | Trade Price if limit or stop limit order |  [optional] |
|**stop** | **Double** | Stop Price. If stop loss or stop limit order, the price to trigger the stop |  [optional] |
|**timeInForce** | **TimeInForceStrict** |  |  [optional] |
|**units** | **Double** | Trade Units. Cannot work with notional value. |  [optional] |
|**universalSymbolId** | **UUID** |  |  [optional] |
|**notionalValue** | **Double** | Dollar amount to trade. Cannot work with units. Can only work for market order types and day for time in force. **Only available for Alpaca, Alpaca Paper, and Robinhood. Please contact support to get access to place notional trades** |  [optional] |



