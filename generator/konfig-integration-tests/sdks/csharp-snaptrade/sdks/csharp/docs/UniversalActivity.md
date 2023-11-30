# SnapTrade.Net.Model.UniversalActivity
A transaction or activity from an institution

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | [optional] 
**Account** | [**AccountSimple**](AccountSimple.md) |  | [optional] 
**Amount** | **double?** |  | [optional] 
**Currency** | [**Currency**](Currency.md) |  | [optional] 
**Description** | **string** |  | [optional] 
**Fee** | **double** |  | [optional] 
**FxRate** | **double?** | The forex conversion rate involved in the transaction if provided by the brokerage. Used in cases where securities of one currency are purchased in a different currency, and the forex conversion is automatic. In those cases, price, amount and fee will be in the top level currency (activity -&gt; currency) | [optional] 
**Institution** | **string** |  | [optional] 
**OptionType** | **string** | If an option transaction, then it&#39;s type (BUY_TO_OPEN, SELL_TO_CLOSE, etc), otherwise empty string | [optional] 
**Price** | **double** |  | [optional] 
**SettlementDate** | **string** |  | [optional] 
**ExternalReferenceId** | **string** | Reference ID from brokerage used to identify related transactions. For example if an order comprises of several transactions (buy, fee, fx), they can be grouped if they share the same external_reference_id | [optional] 
**Symbol** | [**Symbol**](Symbol.md) |  | [optional] 
**OptionSymbol** | [**OptionsSymbol**](OptionsSymbol.md) |  | [optional] 
**TradeDate** | **string** |  | [optional] 
**Type** | **string** | Potential values include (but are not limited to) - DIVIDEND - BUY - SELL - CONTRIBUTION - WITHDRAWAL - EXTERNAL_ASSET_TRANSFER_IN - EXTERNAL_ASSET_TRANSFER_OUT - INTERNAL_CASH_TRANSFER_IN - INTERNAL_CASH_TRANSFER_OUT - INTERNAL_ASSET_TRANSFER_IN - INTERNAL_ASSET_TRANSFER_OUT - INTEREST - REBATE - GOV_GRANT - TAX - FEE - REI - FXT | [optional] 
**Units** | **double** | Usually but not necessarily an integer | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

