# IdentifierContract

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RefOrderNumber** | Pointer to **string** |  | [optional] 
**InstallmentPlanNumber** | Pointer to **string** |  | [optional] 
**ExtendedParams** | Pointer to **map[string]string** |  | [optional] 

## Methods

### NewIdentifierContract

`func NewIdentifierContract() *IdentifierContract`

NewIdentifierContract instantiates a new IdentifierContract object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentifierContractWithDefaults

`func NewIdentifierContractWithDefaults() *IdentifierContract`

NewIdentifierContractWithDefaults instantiates a new IdentifierContract object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRefOrderNumber

`func (o *IdentifierContract) GetRefOrderNumber() string`

GetRefOrderNumber returns the RefOrderNumber field if non-nil, zero value otherwise.

### GetRefOrderNumberOk

`func (o *IdentifierContract) GetRefOrderNumberOk() (*string, bool)`

GetRefOrderNumberOk returns a tuple with the RefOrderNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefOrderNumber

`func (o *IdentifierContract) SetRefOrderNumber(v string)`

SetRefOrderNumber sets RefOrderNumber field to given value.

### HasRefOrderNumber

`func (o *IdentifierContract) HasRefOrderNumber() bool`

HasRefOrderNumber returns a boolean if a field has been set.

### GetInstallmentPlanNumber

`func (o *IdentifierContract) GetInstallmentPlanNumber() string`

GetInstallmentPlanNumber returns the InstallmentPlanNumber field if non-nil, zero value otherwise.

### GetInstallmentPlanNumberOk

`func (o *IdentifierContract) GetInstallmentPlanNumberOk() (*string, bool)`

GetInstallmentPlanNumberOk returns a tuple with the InstallmentPlanNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstallmentPlanNumber

`func (o *IdentifierContract) SetInstallmentPlanNumber(v string)`

SetInstallmentPlanNumber sets InstallmentPlanNumber field to given value.

### HasInstallmentPlanNumber

`func (o *IdentifierContract) HasInstallmentPlanNumber() bool`

HasInstallmentPlanNumber returns a boolean if a field has been set.

### GetExtendedParams

`func (o *IdentifierContract) GetExtendedParams() map[string]string`

GetExtendedParams returns the ExtendedParams field if non-nil, zero value otherwise.

### GetExtendedParamsOk

`func (o *IdentifierContract) GetExtendedParamsOk() (*map[string]string, bool)`

GetExtendedParamsOk returns a tuple with the ExtendedParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtendedParams

`func (o *IdentifierContract) SetExtendedParams(v map[string]string)`

SetExtendedParams sets ExtendedParams field to given value.

### HasExtendedParams

`func (o *IdentifierContract) HasExtendedParams() bool`

HasExtendedParams returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


