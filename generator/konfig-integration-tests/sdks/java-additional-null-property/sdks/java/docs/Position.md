

# Position

Describes a single stock/ETF/crypto/mutual fund position in an account.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**symbol** | [**PositionSymbol**](PositionSymbol.md) |  |  [optional] |
|**units** | **Double** | The number of shares of the position. This can be fractional or integer units. |  [optional] |
|**price** | **Double** | Last known market price for the symbol. The freshness of this price depends on the brokerage. Some brokerages provide real-time prices, while others provide delayed prices. It is recommended that you rely on your own third-party market data provider for most up to date prices. |  [optional] |
|**openPnl** | **Double** | The profit or loss on the position since it was opened. This is calculated as the difference between the current market value of the position and the total cost of the position. It is recommended to calculate this value using the average purchase price and the current market price yourself, instead of relying on this field. |  [optional] |
|**fractionalUnits** | **Double** | Deprecated, use the &#x60;units&#x60; field for both fractional and integer units going forward |  [optional] |
|**averagePurchasePrice** | **Double** | Cost basis _per share_ of this position. |  [optional] |



