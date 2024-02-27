# # Position

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | [**\SnapTrade\Model\PositionSymbol**](PositionSymbol.md) |  | [optional]
**units** | **float** |  | [optional]
**price** | **float** | Last known market price for the symbol | [optional]
**open_pnl** | **float** |  | [optional]
**fractional_units** | **float** | Deprecated, use the units field for both fractional and integer units going forward | [optional]
**average_purchase_price** | **float** | Average purchase price for this position. Either returned by the underlying broker or calculated using historical transactions. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
