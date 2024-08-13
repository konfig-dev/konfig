

# OptionsSymbol

Options Symbol

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **UUID** |  |  |
|**ticker** | **String** |  |  |
|**optionType** | [**OptionTypeEnum**](#OptionTypeEnum) |  |  |
|**strikePrice** | **Double** |  |  |
|**expirationDate** | **String** |  |  |
|**isMiniOption** | **Boolean** |  |  [optional] |
|**underlyingSymbol** | [**UnderlyingSymbol**](UnderlyingSymbol.md) |  |  |
|**localId** | **String** |  |  [optional] |
|**exchangeId** | **UUID** |  |  [optional] |



## Enum: OptionTypeEnum

| Name | Value |
|---- | -----|
| CALL | &quot;CALL&quot; |
| PUT | &quot;PUT&quot; |



