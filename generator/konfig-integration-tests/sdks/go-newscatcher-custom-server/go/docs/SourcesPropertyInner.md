# SourcesPropertyInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NameSource** | Pointer to **string** |  | [optional] 
**DomainUrl** | **string** |  | 
**Logo** | Pointer to **string** |  | [optional] 
**AdditionalInfo** | Pointer to [**AdditionalSourceInfo**](AdditionalSourceInfo.md) |  | [optional] 

## Methods

### NewSourcesPropertyInner

`func NewSourcesPropertyInner(domainUrl string, ) *SourcesPropertyInner`

NewSourcesPropertyInner instantiates a new SourcesPropertyInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourcesPropertyInnerWithDefaults

`func NewSourcesPropertyInnerWithDefaults() *SourcesPropertyInner`

NewSourcesPropertyInnerWithDefaults instantiates a new SourcesPropertyInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNameSource

`func (o *SourcesPropertyInner) GetNameSource() string`

GetNameSource returns the NameSource field if non-nil, zero value otherwise.

### GetNameSourceOk

`func (o *SourcesPropertyInner) GetNameSourceOk() (*string, bool)`

GetNameSourceOk returns a tuple with the NameSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameSource

`func (o *SourcesPropertyInner) SetNameSource(v string)`

SetNameSource sets NameSource field to given value.

### HasNameSource

`func (o *SourcesPropertyInner) HasNameSource() bool`

HasNameSource returns a boolean if a field has been set.

### GetDomainUrl

`func (o *SourcesPropertyInner) GetDomainUrl() string`

GetDomainUrl returns the DomainUrl field if non-nil, zero value otherwise.

### GetDomainUrlOk

`func (o *SourcesPropertyInner) GetDomainUrlOk() (*string, bool)`

GetDomainUrlOk returns a tuple with the DomainUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomainUrl

`func (o *SourcesPropertyInner) SetDomainUrl(v string)`

SetDomainUrl sets DomainUrl field to given value.


### GetLogo

`func (o *SourcesPropertyInner) GetLogo() string`

GetLogo returns the Logo field if non-nil, zero value otherwise.

### GetLogoOk

`func (o *SourcesPropertyInner) GetLogoOk() (*string, bool)`

GetLogoOk returns a tuple with the Logo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogo

`func (o *SourcesPropertyInner) SetLogo(v string)`

SetLogo sets Logo field to given value.

### HasLogo

`func (o *SourcesPropertyInner) HasLogo() bool`

HasLogo returns a boolean if a field has been set.

### GetAdditionalInfo

`func (o *SourcesPropertyInner) GetAdditionalInfo() AdditionalSourceInfo`

GetAdditionalInfo returns the AdditionalInfo field if non-nil, zero value otherwise.

### GetAdditionalInfoOk

`func (o *SourcesPropertyInner) GetAdditionalInfoOk() (*AdditionalSourceInfo, bool)`

GetAdditionalInfoOk returns a tuple with the AdditionalInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalInfo

`func (o *SourcesPropertyInner) SetAdditionalInfo(v AdditionalSourceInfo)`

SetAdditionalInfo sets AdditionalInfo field to given value.

### HasAdditionalInfo

`func (o *SourcesPropertyInner) HasAdditionalInfo() bool`

HasAdditionalInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


