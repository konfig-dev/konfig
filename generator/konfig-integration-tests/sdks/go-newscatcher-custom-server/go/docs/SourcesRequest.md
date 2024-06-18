# SourcesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Lang** | Pointer to **string** |  | [optional] 
**Countries** | Pointer to **string** |  | [optional] 
**PredefinedSources** | Pointer to **string** |  | [optional] 
**IncludeAdditionalInfo** | Pointer to **bool** |  | [optional] 
**FromRank** | Pointer to **int32** |  | [optional] 
**ToRank** | Pointer to **int32** |  | [optional] 
**SourceName** | Pointer to **interface{}** |  | [optional] 
**SourceUrl** | Pointer to **string** |  | [optional] 

## Methods

### NewSourcesRequest

`func NewSourcesRequest() *SourcesRequest`

NewSourcesRequest instantiates a new SourcesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourcesRequestWithDefaults

`func NewSourcesRequestWithDefaults() *SourcesRequest`

NewSourcesRequestWithDefaults instantiates a new SourcesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLang

`func (o *SourcesRequest) GetLang() string`

GetLang returns the Lang field if non-nil, zero value otherwise.

### GetLangOk

`func (o *SourcesRequest) GetLangOk() (*string, bool)`

GetLangOk returns a tuple with the Lang field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLang

`func (o *SourcesRequest) SetLang(v string)`

SetLang sets Lang field to given value.

### HasLang

`func (o *SourcesRequest) HasLang() bool`

HasLang returns a boolean if a field has been set.

### GetCountries

`func (o *SourcesRequest) GetCountries() string`

GetCountries returns the Countries field if non-nil, zero value otherwise.

### GetCountriesOk

`func (o *SourcesRequest) GetCountriesOk() (*string, bool)`

GetCountriesOk returns a tuple with the Countries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountries

`func (o *SourcesRequest) SetCountries(v string)`

SetCountries sets Countries field to given value.

### HasCountries

`func (o *SourcesRequest) HasCountries() bool`

HasCountries returns a boolean if a field has been set.

### GetPredefinedSources

`func (o *SourcesRequest) GetPredefinedSources() string`

GetPredefinedSources returns the PredefinedSources field if non-nil, zero value otherwise.

### GetPredefinedSourcesOk

`func (o *SourcesRequest) GetPredefinedSourcesOk() (*string, bool)`

GetPredefinedSourcesOk returns a tuple with the PredefinedSources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPredefinedSources

`func (o *SourcesRequest) SetPredefinedSources(v string)`

SetPredefinedSources sets PredefinedSources field to given value.

### HasPredefinedSources

`func (o *SourcesRequest) HasPredefinedSources() bool`

HasPredefinedSources returns a boolean if a field has been set.

### GetIncludeAdditionalInfo

`func (o *SourcesRequest) GetIncludeAdditionalInfo() bool`

GetIncludeAdditionalInfo returns the IncludeAdditionalInfo field if non-nil, zero value otherwise.

### GetIncludeAdditionalInfoOk

`func (o *SourcesRequest) GetIncludeAdditionalInfoOk() (*bool, bool)`

GetIncludeAdditionalInfoOk returns a tuple with the IncludeAdditionalInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeAdditionalInfo

`func (o *SourcesRequest) SetIncludeAdditionalInfo(v bool)`

SetIncludeAdditionalInfo sets IncludeAdditionalInfo field to given value.

### HasIncludeAdditionalInfo

`func (o *SourcesRequest) HasIncludeAdditionalInfo() bool`

HasIncludeAdditionalInfo returns a boolean if a field has been set.

### GetFromRank

`func (o *SourcesRequest) GetFromRank() int32`

GetFromRank returns the FromRank field if non-nil, zero value otherwise.

### GetFromRankOk

`func (o *SourcesRequest) GetFromRankOk() (*int32, bool)`

GetFromRankOk returns a tuple with the FromRank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromRank

`func (o *SourcesRequest) SetFromRank(v int32)`

SetFromRank sets FromRank field to given value.

### HasFromRank

`func (o *SourcesRequest) HasFromRank() bool`

HasFromRank returns a boolean if a field has been set.

### GetToRank

`func (o *SourcesRequest) GetToRank() int32`

GetToRank returns the ToRank field if non-nil, zero value otherwise.

### GetToRankOk

`func (o *SourcesRequest) GetToRankOk() (*int32, bool)`

GetToRankOk returns a tuple with the ToRank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToRank

`func (o *SourcesRequest) SetToRank(v int32)`

SetToRank sets ToRank field to given value.

### HasToRank

`func (o *SourcesRequest) HasToRank() bool`

HasToRank returns a boolean if a field has been set.

### GetSourceName

`func (o *SourcesRequest) GetSourceName() interface{}`

GetSourceName returns the SourceName field if non-nil, zero value otherwise.

### GetSourceNameOk

`func (o *SourcesRequest) GetSourceNameOk() (*interface{}, bool)`

GetSourceNameOk returns a tuple with the SourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceName

`func (o *SourcesRequest) SetSourceName(v interface{})`

SetSourceName sets SourceName field to given value.

### HasSourceName

`func (o *SourcesRequest) HasSourceName() bool`

HasSourceName returns a boolean if a field has been set.

### SetSourceNameNil

`func (o *SourcesRequest) SetSourceNameNil(b bool)`

 SetSourceNameNil sets the value for SourceName to be an explicit nil

### UnsetSourceName
`func (o *SourcesRequest) UnsetSourceName()`

UnsetSourceName ensures that no value is present for SourceName, not even an explicit nil
### GetSourceUrl

`func (o *SourcesRequest) GetSourceUrl() string`

GetSourceUrl returns the SourceUrl field if non-nil, zero value otherwise.

### GetSourceUrlOk

`func (o *SourcesRequest) GetSourceUrlOk() (*string, bool)`

GetSourceUrlOk returns a tuple with the SourceUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceUrl

`func (o *SourcesRequest) SetSourceUrl(v string)`

SetSourceUrl sets SourceUrl field to given value.

### HasSourceUrl

`func (o *SourcesRequest) HasSourceUrl() bool`

HasSourceUrl returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


