# SnapTrade.Net.Model.Position
Account Position

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Symbol** | [**PositionSymbol**](PositionSymbol.md) |  | [optional] 
**Units** | **double?** |  | [optional] 
**Price** | **double?** | Last known market price for the symbol | [optional] 
**OpenPnl** | **double?** |  | [optional] 
**FractionalUnits** | **double?** | Deprecated, use the units field for both fractional and integer units going forward | [optional] 
**AveragePurchasePrice** | **double?** | Average purchase price for this position. Either returned by the underlying broker or calculated using historical transactions. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

