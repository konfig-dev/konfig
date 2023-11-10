# PaymentMethodModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**PaymentMethodType**](PaymentMethodType.md) |  | 
**Card** | Pointer to [**CardData**](CardData.md) |  | [optional] 
**Token** | Pointer to **string** |  | [optional] 
**BluesnapVaultedShopperToken** | Pointer to [**BluesnapVaultedShopperToken**](BluesnapVaultedShopperToken.md) |  | [optional] 
**MockerShopperToken** | Pointer to [**MockerShopperToken**](MockerShopperToken.md) |  | [optional] 
**SpreedlyToken** | Pointer to [**SpreedlyToken**](SpreedlyToken.md) |  | [optional] 

## Methods

### NewPaymentMethodModel

`func NewPaymentMethodModel(type_ PaymentMethodType, ) *PaymentMethodModel`

NewPaymentMethodModel instantiates a new PaymentMethodModel object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentMethodModelWithDefaults

`func NewPaymentMethodModelWithDefaults() *PaymentMethodModel`

NewPaymentMethodModelWithDefaults instantiates a new PaymentMethodModel object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *PaymentMethodModel) GetType() PaymentMethodType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PaymentMethodModel) GetTypeOk() (*PaymentMethodType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PaymentMethodModel) SetType(v PaymentMethodType)`

SetType sets Type field to given value.


### GetCard

`func (o *PaymentMethodModel) GetCard() CardData`

GetCard returns the Card field if non-nil, zero value otherwise.

### GetCardOk

`func (o *PaymentMethodModel) GetCardOk() (*CardData, bool)`

GetCardOk returns a tuple with the Card field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCard

`func (o *PaymentMethodModel) SetCard(v CardData)`

SetCard sets Card field to given value.

### HasCard

`func (o *PaymentMethodModel) HasCard() bool`

HasCard returns a boolean if a field has been set.

### GetToken

`func (o *PaymentMethodModel) GetToken() string`

GetToken returns the Token field if non-nil, zero value otherwise.

### GetTokenOk

`func (o *PaymentMethodModel) GetTokenOk() (*string, bool)`

GetTokenOk returns a tuple with the Token field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToken

`func (o *PaymentMethodModel) SetToken(v string)`

SetToken sets Token field to given value.

### HasToken

`func (o *PaymentMethodModel) HasToken() bool`

HasToken returns a boolean if a field has been set.

### GetBluesnapVaultedShopperToken

`func (o *PaymentMethodModel) GetBluesnapVaultedShopperToken() BluesnapVaultedShopperToken`

GetBluesnapVaultedShopperToken returns the BluesnapVaultedShopperToken field if non-nil, zero value otherwise.

### GetBluesnapVaultedShopperTokenOk

`func (o *PaymentMethodModel) GetBluesnapVaultedShopperTokenOk() (*BluesnapVaultedShopperToken, bool)`

GetBluesnapVaultedShopperTokenOk returns a tuple with the BluesnapVaultedShopperToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBluesnapVaultedShopperToken

`func (o *PaymentMethodModel) SetBluesnapVaultedShopperToken(v BluesnapVaultedShopperToken)`

SetBluesnapVaultedShopperToken sets BluesnapVaultedShopperToken field to given value.

### HasBluesnapVaultedShopperToken

`func (o *PaymentMethodModel) HasBluesnapVaultedShopperToken() bool`

HasBluesnapVaultedShopperToken returns a boolean if a field has been set.

### GetMockerShopperToken

`func (o *PaymentMethodModel) GetMockerShopperToken() MockerShopperToken`

GetMockerShopperToken returns the MockerShopperToken field if non-nil, zero value otherwise.

### GetMockerShopperTokenOk

`func (o *PaymentMethodModel) GetMockerShopperTokenOk() (*MockerShopperToken, bool)`

GetMockerShopperTokenOk returns a tuple with the MockerShopperToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMockerShopperToken

`func (o *PaymentMethodModel) SetMockerShopperToken(v MockerShopperToken)`

SetMockerShopperToken sets MockerShopperToken field to given value.

### HasMockerShopperToken

`func (o *PaymentMethodModel) HasMockerShopperToken() bool`

HasMockerShopperToken returns a boolean if a field has been set.

### GetSpreedlyToken

`func (o *PaymentMethodModel) GetSpreedlyToken() SpreedlyToken`

GetSpreedlyToken returns the SpreedlyToken field if non-nil, zero value otherwise.

### GetSpreedlyTokenOk

`func (o *PaymentMethodModel) GetSpreedlyTokenOk() (*SpreedlyToken, bool)`

GetSpreedlyTokenOk returns a tuple with the SpreedlyToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpreedlyToken

`func (o *PaymentMethodModel) SetSpreedlyToken(v SpreedlyToken)`

SetSpreedlyToken sets SpreedlyToken field to given value.

### HasSpreedlyToken

`func (o *PaymentMethodModel) HasSpreedlyToken() bool`

HasSpreedlyToken returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


