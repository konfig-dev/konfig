# UserResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**OrganizationId** | **int32** |  | 
**OrganizationSuppliedUserId** | **string** |  | 
**CreatedAt** | **time.Time** |  | 
**UpdatedAt** | **time.Time** |  | 
**DeletedAt** | **NullableTime** |  | 
**NumFilesSynced** | **int32** |  | 
**NumCharactersSynced** | **int32** |  | 
**NumTokensSynced** | **int32** |  | 
**UniqueFileTags** | **[]map[string]interface{}** |  | 
**EnabledFeatures** | **map[string]interface{}** |  | 

## Methods

### NewUserResponse

`func NewUserResponse(id int32, organizationId int32, organizationSuppliedUserId string, createdAt time.Time, updatedAt time.Time, deletedAt NullableTime, numFilesSynced int32, numCharactersSynced int32, numTokensSynced int32, uniqueFileTags []map[string]interface{}, enabledFeatures map[string]interface{}, ) *UserResponse`

NewUserResponse instantiates a new UserResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserResponseWithDefaults

`func NewUserResponseWithDefaults() *UserResponse`

NewUserResponseWithDefaults instantiates a new UserResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *UserResponse) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *UserResponse) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *UserResponse) SetId(v int32)`

SetId sets Id field to given value.


### GetOrganizationId

`func (o *UserResponse) GetOrganizationId() int32`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *UserResponse) GetOrganizationIdOk() (*int32, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *UserResponse) SetOrganizationId(v int32)`

SetOrganizationId sets OrganizationId field to given value.


### GetOrganizationSuppliedUserId

`func (o *UserResponse) GetOrganizationSuppliedUserId() string`

GetOrganizationSuppliedUserId returns the OrganizationSuppliedUserId field if non-nil, zero value otherwise.

### GetOrganizationSuppliedUserIdOk

`func (o *UserResponse) GetOrganizationSuppliedUserIdOk() (*string, bool)`

GetOrganizationSuppliedUserIdOk returns a tuple with the OrganizationSuppliedUserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationSuppliedUserId

`func (o *UserResponse) SetOrganizationSuppliedUserId(v string)`

SetOrganizationSuppliedUserId sets OrganizationSuppliedUserId field to given value.


### GetCreatedAt

`func (o *UserResponse) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *UserResponse) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *UserResponse) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *UserResponse) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *UserResponse) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *UserResponse) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.


### GetDeletedAt

`func (o *UserResponse) GetDeletedAt() time.Time`

GetDeletedAt returns the DeletedAt field if non-nil, zero value otherwise.

### GetDeletedAtOk

`func (o *UserResponse) GetDeletedAtOk() (*time.Time, bool)`

GetDeletedAtOk returns a tuple with the DeletedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeletedAt

`func (o *UserResponse) SetDeletedAt(v time.Time)`

SetDeletedAt sets DeletedAt field to given value.


### SetDeletedAtNil

`func (o *UserResponse) SetDeletedAtNil(b bool)`

 SetDeletedAtNil sets the value for DeletedAt to be an explicit nil

### UnsetDeletedAt
`func (o *UserResponse) UnsetDeletedAt()`

UnsetDeletedAt ensures that no value is present for DeletedAt, not even an explicit nil
### GetNumFilesSynced

`func (o *UserResponse) GetNumFilesSynced() int32`

GetNumFilesSynced returns the NumFilesSynced field if non-nil, zero value otherwise.

### GetNumFilesSyncedOk

`func (o *UserResponse) GetNumFilesSyncedOk() (*int32, bool)`

GetNumFilesSyncedOk returns a tuple with the NumFilesSynced field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumFilesSynced

`func (o *UserResponse) SetNumFilesSynced(v int32)`

SetNumFilesSynced sets NumFilesSynced field to given value.


### GetNumCharactersSynced

`func (o *UserResponse) GetNumCharactersSynced() int32`

GetNumCharactersSynced returns the NumCharactersSynced field if non-nil, zero value otherwise.

### GetNumCharactersSyncedOk

`func (o *UserResponse) GetNumCharactersSyncedOk() (*int32, bool)`

GetNumCharactersSyncedOk returns a tuple with the NumCharactersSynced field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumCharactersSynced

`func (o *UserResponse) SetNumCharactersSynced(v int32)`

SetNumCharactersSynced sets NumCharactersSynced field to given value.


### GetNumTokensSynced

`func (o *UserResponse) GetNumTokensSynced() int32`

GetNumTokensSynced returns the NumTokensSynced field if non-nil, zero value otherwise.

### GetNumTokensSyncedOk

`func (o *UserResponse) GetNumTokensSyncedOk() (*int32, bool)`

GetNumTokensSyncedOk returns a tuple with the NumTokensSynced field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumTokensSynced

`func (o *UserResponse) SetNumTokensSynced(v int32)`

SetNumTokensSynced sets NumTokensSynced field to given value.


### GetUniqueFileTags

`func (o *UserResponse) GetUniqueFileTags() []map[string]interface{}`

GetUniqueFileTags returns the UniqueFileTags field if non-nil, zero value otherwise.

### GetUniqueFileTagsOk

`func (o *UserResponse) GetUniqueFileTagsOk() (*[]map[string]interface{}, bool)`

GetUniqueFileTagsOk returns a tuple with the UniqueFileTags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUniqueFileTags

`func (o *UserResponse) SetUniqueFileTags(v []map[string]interface{})`

SetUniqueFileTags sets UniqueFileTags field to given value.


### GetEnabledFeatures

`func (o *UserResponse) GetEnabledFeatures() map[string]interface{}`

GetEnabledFeatures returns the EnabledFeatures field if non-nil, zero value otherwise.

### GetEnabledFeaturesOk

`func (o *UserResponse) GetEnabledFeaturesOk() (*map[string]interface{}, bool)`

GetEnabledFeaturesOk returns a tuple with the EnabledFeatures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabledFeatures

`func (o *UserResponse) SetEnabledFeatures(v map[string]interface{})`

SetEnabledFeatures sets EnabledFeatures field to given value.


### SetEnabledFeaturesNil

`func (o *UserResponse) SetEnabledFeaturesNil(b bool)`

 SetEnabledFeaturesNil sets the value for EnabledFeatures to be an explicit nil

### UnsetEnabledFeatures
`func (o *UserResponse) UnsetEnabledFeatures()`

UnsetEnabledFeatures ensures that no value is present for EnabledFeatures, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


