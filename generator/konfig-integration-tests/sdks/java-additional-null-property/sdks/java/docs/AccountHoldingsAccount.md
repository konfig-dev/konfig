

# AccountHoldingsAccount

A wrapper object containing holdings information for a single account

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**account** | [**SnapTradeHoldingsAccountAccountId**](SnapTradeHoldingsAccountAccountId.md) |  |  [optional] |
|**balances** | [**List&lt;Balance&gt;**](Balance.md) | List of balances for the account. Each element of the list has a distinct currency. Some brokerages like Questrade [allows holding multiple currencies in the same account](https://www.questrade.com/learning/questrade-basics/balances-and-reports/understanding-your-account-balances). |  [optional] |
|**positions** | [**List&lt;Position&gt;**](Position.md) | List of stock/ETF/crypto/mutual fund positions in the account. |  [optional] |
|**optionPositions** | [**List&lt;OptionsPosition&gt;**](OptionsPosition.md) | List of option positions in the account. |  [optional] |
|**orders** | [**List&lt;AccountOrderRecord&gt;**](AccountOrderRecord.md) | List of recent orders in the account, including both pending and executed orders. |  [optional] |
|**totalValue** | [**SnapTradeHoldingsTotalValue**](SnapTradeHoldingsTotalValue.md) |  |  [optional] |



