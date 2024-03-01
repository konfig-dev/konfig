# OrganizationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**Name** | **string** |  | 
**Nickname** | **NullableString** |  | 
**RemoveBranding** | **bool** |  | 
**CustomBranding** | **map[string]interface{}** |  | 
**CustomLimits** | **map[string]interface{}** |  | 
**AggregateFileSize** | **map[string]interface{}** |  | 
**AggregateNumCharacters** | **map[string]interface{}** |  | 
**AggregateNumTokens** | **map[string]interface{}** |  | 
**AggregateNumEmbeddings** | **map[string]interface{}** |  | 
**PeriodEndsAt** | **NullableTime** |  | 
**CancelAtPeriodEnd** | **NullableBool** |  | 
**CreatedAt** | **time.Time** |  | 
**UpdatedAt** | **time.Time** |  | 

## Methods

### NewOrganizationResponse

`func NewOrganizationResponse(id int32, name string, nickname NullableString, removeBranding bool, customBranding map[string]interface{}, customLimits map[string]interface{}, aggregateFileSize map[string]interface{}, aggregateNumCharacters map[string]interface{}, aggregateNumTokens map[string]interface{}, aggregateNumEmbeddings map[string]interface{}, periodEndsAt NullableTime, cancelAtPeriodEnd NullableBool, createdAt time.Time, updatedAt time.Time, ) *OrganizationResponse`

NewOrganizationResponse instantiates a new OrganizationResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrganizationResponseWithDefaults

`func NewOrganizationResponseWithDefaults() *OrganizationResponse`

NewOrganizationResponseWithDefaults instantiates a new OrganizationResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *OrganizationResponse) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *OrganizationResponse) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *OrganizationResponse) SetId(v int32)`

SetId sets Id field to given value.


### GetName

`func (o *OrganizationResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *OrganizationResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *OrganizationResponse) SetName(v string)`

SetName sets Name field to given value.


### GetNickname

`func (o *OrganizationResponse) GetNickname() string`

GetNickname returns the Nickname field if non-nil, zero value otherwise.

### GetNicknameOk

`func (o *OrganizationResponse) GetNicknameOk() (*string, bool)`

GetNicknameOk returns a tuple with the Nickname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNickname

`func (o *OrganizationResponse) SetNickname(v string)`

SetNickname sets Nickname field to given value.


### SetNicknameNil

`func (o *OrganizationResponse) SetNicknameNil(b bool)`

 SetNicknameNil sets the value for Nickname to be an explicit nil

### UnsetNickname
`func (o *OrganizationResponse) UnsetNickname()`

UnsetNickname ensures that no value is present for Nickname, not even an explicit nil
### GetRemoveBranding

`func (o *OrganizationResponse) GetRemoveBranding() bool`

GetRemoveBranding returns the RemoveBranding field if non-nil, zero value otherwise.

### GetRemoveBrandingOk

`func (o *OrganizationResponse) GetRemoveBrandingOk() (*bool, bool)`

GetRemoveBrandingOk returns a tuple with the RemoveBranding field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveBranding

`func (o *OrganizationResponse) SetRemoveBranding(v bool)`

SetRemoveBranding sets RemoveBranding field to given value.


### GetCustomBranding

`func (o *OrganizationResponse) GetCustomBranding() map[string]interface{}`

GetCustomBranding returns the CustomBranding field if non-nil, zero value otherwise.

### GetCustomBrandingOk

`func (o *OrganizationResponse) GetCustomBrandingOk() (*map[string]interface{}, bool)`

GetCustomBrandingOk returns a tuple with the CustomBranding field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomBranding

`func (o *OrganizationResponse) SetCustomBranding(v map[string]interface{})`

SetCustomBranding sets CustomBranding field to given value.


### SetCustomBrandingNil

`func (o *OrganizationResponse) SetCustomBrandingNil(b bool)`

 SetCustomBrandingNil sets the value for CustomBranding to be an explicit nil

### UnsetCustomBranding
`func (o *OrganizationResponse) UnsetCustomBranding()`

UnsetCustomBranding ensures that no value is present for CustomBranding, not even an explicit nil
### GetCustomLimits

`func (o *OrganizationResponse) GetCustomLimits() map[string]interface{}`

GetCustomLimits returns the CustomLimits field if non-nil, zero value otherwise.

### GetCustomLimitsOk

`func (o *OrganizationResponse) GetCustomLimitsOk() (*map[string]interface{}, bool)`

GetCustomLimitsOk returns a tuple with the CustomLimits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomLimits

`func (o *OrganizationResponse) SetCustomLimits(v map[string]interface{})`

SetCustomLimits sets CustomLimits field to given value.


### SetCustomLimitsNil

`func (o *OrganizationResponse) SetCustomLimitsNil(b bool)`

 SetCustomLimitsNil sets the value for CustomLimits to be an explicit nil

### UnsetCustomLimits
`func (o *OrganizationResponse) UnsetCustomLimits()`

UnsetCustomLimits ensures that no value is present for CustomLimits, not even an explicit nil
### GetAggregateFileSize

`func (o *OrganizationResponse) GetAggregateFileSize() map[string]interface{}`

GetAggregateFileSize returns the AggregateFileSize field if non-nil, zero value otherwise.

### GetAggregateFileSizeOk

`func (o *OrganizationResponse) GetAggregateFileSizeOk() (*map[string]interface{}, bool)`

GetAggregateFileSizeOk returns a tuple with the AggregateFileSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggregateFileSize

`func (o *OrganizationResponse) SetAggregateFileSize(v map[string]interface{})`

SetAggregateFileSize sets AggregateFileSize field to given value.


### GetAggregateNumCharacters

`func (o *OrganizationResponse) GetAggregateNumCharacters() map[string]interface{}`

GetAggregateNumCharacters returns the AggregateNumCharacters field if non-nil, zero value otherwise.

### GetAggregateNumCharactersOk

`func (o *OrganizationResponse) GetAggregateNumCharactersOk() (*map[string]interface{}, bool)`

GetAggregateNumCharactersOk returns a tuple with the AggregateNumCharacters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggregateNumCharacters

`func (o *OrganizationResponse) SetAggregateNumCharacters(v map[string]interface{})`

SetAggregateNumCharacters sets AggregateNumCharacters field to given value.


### GetAggregateNumTokens

`func (o *OrganizationResponse) GetAggregateNumTokens() map[string]interface{}`

GetAggregateNumTokens returns the AggregateNumTokens field if non-nil, zero value otherwise.

### GetAggregateNumTokensOk

`func (o *OrganizationResponse) GetAggregateNumTokensOk() (*map[string]interface{}, bool)`

GetAggregateNumTokensOk returns a tuple with the AggregateNumTokens field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggregateNumTokens

`func (o *OrganizationResponse) SetAggregateNumTokens(v map[string]interface{})`

SetAggregateNumTokens sets AggregateNumTokens field to given value.


### GetAggregateNumEmbeddings

`func (o *OrganizationResponse) GetAggregateNumEmbeddings() map[string]interface{}`

GetAggregateNumEmbeddings returns the AggregateNumEmbeddings field if non-nil, zero value otherwise.

### GetAggregateNumEmbeddingsOk

`func (o *OrganizationResponse) GetAggregateNumEmbeddingsOk() (*map[string]interface{}, bool)`

GetAggregateNumEmbeddingsOk returns a tuple with the AggregateNumEmbeddings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggregateNumEmbeddings

`func (o *OrganizationResponse) SetAggregateNumEmbeddings(v map[string]interface{})`

SetAggregateNumEmbeddings sets AggregateNumEmbeddings field to given value.


### GetPeriodEndsAt

`func (o *OrganizationResponse) GetPeriodEndsAt() time.Time`

GetPeriodEndsAt returns the PeriodEndsAt field if non-nil, zero value otherwise.

### GetPeriodEndsAtOk

`func (o *OrganizationResponse) GetPeriodEndsAtOk() (*time.Time, bool)`

GetPeriodEndsAtOk returns a tuple with the PeriodEndsAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPeriodEndsAt

`func (o *OrganizationResponse) SetPeriodEndsAt(v time.Time)`

SetPeriodEndsAt sets PeriodEndsAt field to given value.


### SetPeriodEndsAtNil

`func (o *OrganizationResponse) SetPeriodEndsAtNil(b bool)`

 SetPeriodEndsAtNil sets the value for PeriodEndsAt to be an explicit nil

### UnsetPeriodEndsAt
`func (o *OrganizationResponse) UnsetPeriodEndsAt()`

UnsetPeriodEndsAt ensures that no value is present for PeriodEndsAt, not even an explicit nil
### GetCancelAtPeriodEnd

`func (o *OrganizationResponse) GetCancelAtPeriodEnd() bool`

GetCancelAtPeriodEnd returns the CancelAtPeriodEnd field if non-nil, zero value otherwise.

### GetCancelAtPeriodEndOk

`func (o *OrganizationResponse) GetCancelAtPeriodEndOk() (*bool, bool)`

GetCancelAtPeriodEndOk returns a tuple with the CancelAtPeriodEnd field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelAtPeriodEnd

`func (o *OrganizationResponse) SetCancelAtPeriodEnd(v bool)`

SetCancelAtPeriodEnd sets CancelAtPeriodEnd field to given value.


### SetCancelAtPeriodEndNil

`func (o *OrganizationResponse) SetCancelAtPeriodEndNil(b bool)`

 SetCancelAtPeriodEndNil sets the value for CancelAtPeriodEnd to be an explicit nil

### UnsetCancelAtPeriodEnd
`func (o *OrganizationResponse) UnsetCancelAtPeriodEnd()`

UnsetCancelAtPeriodEnd ensures that no value is present for CancelAtPeriodEnd, not even an explicit nil
### GetCreatedAt

`func (o *OrganizationResponse) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *OrganizationResponse) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *OrganizationResponse) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *OrganizationResponse) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *OrganizationResponse) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *OrganizationResponse) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


