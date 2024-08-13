

# OptionsPosition

Describes a single option position in an account.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**symbol** | [**OptionBrokerageSymbol**](OptionBrokerageSymbol.md) |  |  [optional] |
|**price** | **Double** | Last known market price for the option contract. The freshness of this price depends on the brokerage. Some brokerages provide real-time prices, while others provide delayed prices. It is recommended that you rely on your own third-party market data provider for most up to date prices. |  [optional] |
|**units** | **Double** | The number of contracts for this option position. |  [optional] |
|**currency** | [**CurrencyNullable**](CurrencyNullable.md) |  |  [optional] |
|**averagePurchasePrice** | **Double** | Cost basis _per contract_ of this option position. To get the cost basis _per share_, divide this value by the number of shares per contract (usually 100). |  [optional] |



