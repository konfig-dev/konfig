# SourceInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NameSource** | Pointer to **string** |  | [optional] 
**DomainUrl** | **string** |  | 
**Logo** | Pointer to **string** |  | [optional] 
**AdditionalInfo** | Pointer to [**AdditionalSourceInfo**](AdditionalSourceInfo.md) |  | [optional] 

## Methods

### NewSourceInfo

`func NewSourceInfo(domainUrl string, ) *SourceInfo`

NewSourceInfo instantiates a new SourceInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceInfoWithDefaults

`func NewSourceInfoWithDefaults() *SourceInfo`

NewSourceInfoWithDefaults instantiates a new SourceInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNameSource

`func (o *SourceInfo) GetNameSource() string`

GetNameSource returns the NameSource field if non-nil, zero value otherwise.

### GetNameSourceOk

`func (o *SourceInfo) GetNameSourceOk() (*string, bool)`

GetNameSourceOk returns a tuple with the NameSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameSource

`func (o *SourceInfo) SetNameSource(v string)`

SetNameSource sets NameSource field to given value.

### HasNameSource

`func (o *SourceInfo) HasNameSource() bool`

HasNameSource returns a boolean if a field has been set.

### GetDomainUrl

`func (o *SourceInfo) GetDomainUrl() string`

GetDomainUrl returns the DomainUrl field if non-nil, zero value otherwise.

### GetDomainUrlOk

`func (o *SourceInfo) GetDomainUrlOk() (*string, bool)`

GetDomainUrlOk returns a tuple with the DomainUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomainUrl

`func (o *SourceInfo) SetDomainUrl(v string)`

SetDomainUrl sets DomainUrl field to given value.


### GetLogo

`func (o *SourceInfo) GetLogo() string`

GetLogo returns the Logo field if non-nil, zero value otherwise.

### GetLogoOk

`func (o *SourceInfo) GetLogoOk() (*string, bool)`

GetLogoOk returns a tuple with the Logo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogo

`func (o *SourceInfo) SetLogo(v string)`

SetLogo sets Logo field to given value.

### HasLogo

`func (o *SourceInfo) HasLogo() bool`

HasLogo returns a boolean if a field has been set.

### GetAdditionalInfo

`func (o *SourceInfo) GetAdditionalInfo() AdditionalSourceInfo`

GetAdditionalInfo returns the AdditionalInfo field if non-nil, zero value otherwise.

### GetAdditionalInfoOk

`func (o *SourceInfo) GetAdditionalInfoOk() (*AdditionalSourceInfo, bool)`

GetAdditionalInfoOk returns a tuple with the AdditionalInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalInfo

`func (o *SourceInfo) SetAdditionalInfo(v AdditionalSourceInfo)`

SetAdditionalInfo sets AdditionalInfo field to given value.

### HasAdditionalInfo

`func (o *SourceInfo) HasAdditionalInfo() bool`

HasAdditionalInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


