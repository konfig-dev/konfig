# GeneratePaymentLinkRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReferenceId** | **string** |  | 
**PayeeAccount** | **string** |  | 
**Amount** | **float32** |  | 
**PurposeMessage** | **string** |  | 
**GenerateQr** | **int32** |  | 
**ExpiryTime** | Pointer to **int32** |  | [optional] 
**CustomizedQrWithLogo** | Pointer to **int32** |  | [optional] 
**GenerateUri** | Pointer to **int32** |  | [optional] 

## Methods

### NewGeneratePaymentLinkRequest

`func NewGeneratePaymentLinkRequest(referenceId string, payeeAccount string, amount float32, purposeMessage string, generateQr int32, ) *GeneratePaymentLinkRequest`

NewGeneratePaymentLinkRequest instantiates a new GeneratePaymentLinkRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGeneratePaymentLinkRequestWithDefaults

`func NewGeneratePaymentLinkRequestWithDefaults() *GeneratePaymentLinkRequest`

NewGeneratePaymentLinkRequestWithDefaults instantiates a new GeneratePaymentLinkRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReferenceId

`func (o *GeneratePaymentLinkRequest) GetReferenceId() string`

GetReferenceId returns the ReferenceId field if non-nil, zero value otherwise.

### GetReferenceIdOk

`func (o *GeneratePaymentLinkRequest) GetReferenceIdOk() (*string, bool)`

GetReferenceIdOk returns a tuple with the ReferenceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferenceId

`func (o *GeneratePaymentLinkRequest) SetReferenceId(v string)`

SetReferenceId sets ReferenceId field to given value.


### GetPayeeAccount

`func (o *GeneratePaymentLinkRequest) GetPayeeAccount() string`

GetPayeeAccount returns the PayeeAccount field if non-nil, zero value otherwise.

### GetPayeeAccountOk

`func (o *GeneratePaymentLinkRequest) GetPayeeAccountOk() (*string, bool)`

GetPayeeAccountOk returns a tuple with the PayeeAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeAccount

`func (o *GeneratePaymentLinkRequest) SetPayeeAccount(v string)`

SetPayeeAccount sets PayeeAccount field to given value.


### GetAmount

`func (o *GeneratePaymentLinkRequest) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *GeneratePaymentLinkRequest) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *GeneratePaymentLinkRequest) SetAmount(v float32)`

SetAmount sets Amount field to given value.


### GetPurposeMessage

`func (o *GeneratePaymentLinkRequest) GetPurposeMessage() string`

GetPurposeMessage returns the PurposeMessage field if non-nil, zero value otherwise.

### GetPurposeMessageOk

`func (o *GeneratePaymentLinkRequest) GetPurposeMessageOk() (*string, bool)`

GetPurposeMessageOk returns a tuple with the PurposeMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurposeMessage

`func (o *GeneratePaymentLinkRequest) SetPurposeMessage(v string)`

SetPurposeMessage sets PurposeMessage field to given value.


### GetGenerateQr

`func (o *GeneratePaymentLinkRequest) GetGenerateQr() int32`

GetGenerateQr returns the GenerateQr field if non-nil, zero value otherwise.

### GetGenerateQrOk

`func (o *GeneratePaymentLinkRequest) GetGenerateQrOk() (*int32, bool)`

GetGenerateQrOk returns a tuple with the GenerateQr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenerateQr

`func (o *GeneratePaymentLinkRequest) SetGenerateQr(v int32)`

SetGenerateQr sets GenerateQr field to given value.


### GetExpiryTime

`func (o *GeneratePaymentLinkRequest) GetExpiryTime() int32`

GetExpiryTime returns the ExpiryTime field if non-nil, zero value otherwise.

### GetExpiryTimeOk

`func (o *GeneratePaymentLinkRequest) GetExpiryTimeOk() (*int32, bool)`

GetExpiryTimeOk returns a tuple with the ExpiryTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiryTime

`func (o *GeneratePaymentLinkRequest) SetExpiryTime(v int32)`

SetExpiryTime sets ExpiryTime field to given value.

### HasExpiryTime

`func (o *GeneratePaymentLinkRequest) HasExpiryTime() bool`

HasExpiryTime returns a boolean if a field has been set.

### GetCustomizedQrWithLogo

`func (o *GeneratePaymentLinkRequest) GetCustomizedQrWithLogo() int32`

GetCustomizedQrWithLogo returns the CustomizedQrWithLogo field if non-nil, zero value otherwise.

### GetCustomizedQrWithLogoOk

`func (o *GeneratePaymentLinkRequest) GetCustomizedQrWithLogoOk() (*int32, bool)`

GetCustomizedQrWithLogoOk returns a tuple with the CustomizedQrWithLogo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomizedQrWithLogo

`func (o *GeneratePaymentLinkRequest) SetCustomizedQrWithLogo(v int32)`

SetCustomizedQrWithLogo sets CustomizedQrWithLogo field to given value.

### HasCustomizedQrWithLogo

`func (o *GeneratePaymentLinkRequest) HasCustomizedQrWithLogo() bool`

HasCustomizedQrWithLogo returns a boolean if a field has been set.

### GetGenerateUri

`func (o *GeneratePaymentLinkRequest) GetGenerateUri() int32`

GetGenerateUri returns the GenerateUri field if non-nil, zero value otherwise.

### GetGenerateUriOk

`func (o *GeneratePaymentLinkRequest) GetGenerateUriOk() (*int32, bool)`

GetGenerateUriOk returns a tuple with the GenerateUri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenerateUri

`func (o *GeneratePaymentLinkRequest) SetGenerateUri(v int32)`

SetGenerateUri sets GenerateUri field to given value.

### HasGenerateUri

`func (o *GeneratePaymentLinkRequest) HasGenerateUri() bool`

HasGenerateUri returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


