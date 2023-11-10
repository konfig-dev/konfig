# ErrorExtended

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** |  | [optional] 
**Message** | Pointer to **string** |  | [optional] 
**AdditionalInfo** | Pointer to **string** |  | [optional] 
**ExtraData** | Pointer to **map[string]string** |  | [optional] 

## Methods

### NewErrorExtended

`func NewErrorExtended() *ErrorExtended`

NewErrorExtended instantiates a new ErrorExtended object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewErrorExtendedWithDefaults

`func NewErrorExtendedWithDefaults() *ErrorExtended`

NewErrorExtendedWithDefaults instantiates a new ErrorExtended object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *ErrorExtended) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ErrorExtended) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ErrorExtended) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *ErrorExtended) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetMessage

`func (o *ErrorExtended) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ErrorExtended) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ErrorExtended) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ErrorExtended) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetAdditionalInfo

`func (o *ErrorExtended) GetAdditionalInfo() string`

GetAdditionalInfo returns the AdditionalInfo field if non-nil, zero value otherwise.

### GetAdditionalInfoOk

`func (o *ErrorExtended) GetAdditionalInfoOk() (*string, bool)`

GetAdditionalInfoOk returns a tuple with the AdditionalInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalInfo

`func (o *ErrorExtended) SetAdditionalInfo(v string)`

SetAdditionalInfo sets AdditionalInfo field to given value.

### HasAdditionalInfo

`func (o *ErrorExtended) HasAdditionalInfo() bool`

HasAdditionalInfo returns a boolean if a field has been set.

### GetExtraData

`func (o *ErrorExtended) GetExtraData() map[string]string`

GetExtraData returns the ExtraData field if non-nil, zero value otherwise.

### GetExtraDataOk

`func (o *ErrorExtended) GetExtraDataOk() (*map[string]string, bool)`

GetExtraDataOk returns a tuple with the ExtraData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraData

`func (o *ErrorExtended) SetExtraData(v map[string]string)`

SetExtraData sets ExtraData field to given value.

### HasExtraData

`func (o *ErrorExtended) HasExtraData() bool`

HasExtraData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


