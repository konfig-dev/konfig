# UserInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Lang** | Pointer to [**LangProperty**](LangProperty.md) |  | [optional] 
**Countries** | Pointer to [**CountriesProperty**](CountriesProperty.md) |  | [optional] 

## Methods

### NewUserInput

`func NewUserInput() *UserInput`

NewUserInput instantiates a new UserInput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserInputWithDefaults

`func NewUserInputWithDefaults() *UserInput`

NewUserInputWithDefaults instantiates a new UserInput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLang

`func (o *UserInput) GetLang() LangProperty`

GetLang returns the Lang field if non-nil, zero value otherwise.

### GetLangOk

`func (o *UserInput) GetLangOk() (*LangProperty, bool)`

GetLangOk returns a tuple with the Lang field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLang

`func (o *UserInput) SetLang(v LangProperty)`

SetLang sets Lang field to given value.

### HasLang

`func (o *UserInput) HasLang() bool`

HasLang returns a boolean if a field has been set.

### GetCountries

`func (o *UserInput) GetCountries() CountriesProperty`

GetCountries returns the Countries field if non-nil, zero value otherwise.

### GetCountriesOk

`func (o *UserInput) GetCountriesOk() (*CountriesProperty, bool)`

GetCountriesOk returns a tuple with the Countries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountries

`func (o *UserInput) SetCountries(v CountriesProperty)`

SetCountries sets Countries field to given value.

### HasCountries

`func (o *UserInput) HasCountries() bool`

HasCountries returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


