

# UniversalActivity

A transaction or activity from an institution

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **String** |  |  [optional] |
|**account** | [**AccountSimple**](AccountSimple.md) |  |  [optional] |
|**amount** | **Double** |  |  [optional] |
|**currency** | [**Currency**](Currency.md) |  |  [optional] |
|**description** | **String** |  |  [optional] |
|**fee** | **Double** |  |  [optional] |
|**fxRate** | **Double** | The forex conversion rate involved in the transaction if provided by the brokerage. Used in cases where securities of one currency are purchased in a different currency, and the forex conversion is automatic. In those cases, price, amount and fee will be in the top level currency (activity -&gt; currency) |  [optional] |
|**institution** | **String** |  |  [optional] |
|**optionType** | **String** | If an option transaction, then it&#39;s type (BUY_TO_OPEN, SELL_TO_CLOSE, etc), otherwise empty string |  [optional] |
|**price** | **Double** |  |  [optional] |
|**settlementDate** | **String** |  |  [optional] |
|**externalReferenceId** | **String** | Reference ID from brokerage used to identify related transactions. For example if an order comprises of several transactions (buy, fee, fx), they can be grouped if they share the same external_reference_id |  [optional] |
|**symbol** | [**Symbol**](Symbol.md) |  |  [optional] |
|**optionSymbol** | [**OptionsSymbol**](OptionsSymbol.md) |  |  [optional] |
|**tradeDate** | **String** |  |  [optional] |
|**type** | **String** | Potential values include (but are not limited to) - DIVIDEND - BUY - SELL - CONTRIBUTION - WITHDRAWAL - EXTERNAL_ASSET_TRANSFER_IN - EXTERNAL_ASSET_TRANSFER_OUT - INTERNAL_CASH_TRANSFER_IN - INTERNAL_CASH_TRANSFER_OUT - INTERNAL_ASSET_TRANSFER_IN - INTERNAL_ASSET_TRANSFER_OUT - INTEREST - REBATE - GOV_GRANT - TAX - FEE - REI - FXT |  [optional] |
|**units** | **Double** | Usually but not necessarily an integer |  [optional] |



