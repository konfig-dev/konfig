# OrganizationUserFilesToSyncFilters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Tags** | Pointer to [**map[string]Tags1**](Tags1.md) |  | [optional] 
**Source** | Pointer to [**NullableSourceProperty**](SourceProperty.md) |  | [optional] 
**Name** | Pointer to **NullableString** |  | [optional] 
**TagsV2** | Pointer to **map[string]interface{}** |  | [optional] 
**Ids** | Pointer to **[]int32** |  | [optional] 
**ExternalFileIds** | Pointer to **[]string** |  | [optional] 
**SyncStatuses** | Pointer to [**[]ExternalFileSyncStatuses**](ExternalFileSyncStatuses.md) |  | [optional] 
**ParentFileIds** | Pointer to **[]int32** |  | [optional] 
**OrganizationUserDataSourceId** | Pointer to **[]int32** |  | [optional] 
**EmbeddingGenerators** | Pointer to [**[]EmbeddingGenerators**](EmbeddingGenerators.md) |  | [optional] 
**RootFilesOnly** | Pointer to **NullableBool** |  | [optional] 

## Methods

### NewOrganizationUserFilesToSyncFilters

`func NewOrganizationUserFilesToSyncFilters() *OrganizationUserFilesToSyncFilters`

NewOrganizationUserFilesToSyncFilters instantiates a new OrganizationUserFilesToSyncFilters object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrganizationUserFilesToSyncFiltersWithDefaults

`func NewOrganizationUserFilesToSyncFiltersWithDefaults() *OrganizationUserFilesToSyncFilters`

NewOrganizationUserFilesToSyncFiltersWithDefaults instantiates a new OrganizationUserFilesToSyncFilters object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTags

`func (o *OrganizationUserFilesToSyncFilters) GetTags() map[string]Tags1`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *OrganizationUserFilesToSyncFilters) GetTagsOk() (*map[string]Tags1, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *OrganizationUserFilesToSyncFilters) SetTags(v map[string]Tags1)`

SetTags sets Tags field to given value.

### HasTags

`func (o *OrganizationUserFilesToSyncFilters) HasTags() bool`

HasTags returns a boolean if a field has been set.

### SetTagsNil

`func (o *OrganizationUserFilesToSyncFilters) SetTagsNil(b bool)`

 SetTagsNil sets the value for Tags to be an explicit nil

### UnsetTags
`func (o *OrganizationUserFilesToSyncFilters) UnsetTags()`

UnsetTags ensures that no value is present for Tags, not even an explicit nil
### GetSource

`func (o *OrganizationUserFilesToSyncFilters) GetSource() SourceProperty`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *OrganizationUserFilesToSyncFilters) GetSourceOk() (*SourceProperty, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *OrganizationUserFilesToSyncFilters) SetSource(v SourceProperty)`

SetSource sets Source field to given value.

### HasSource

`func (o *OrganizationUserFilesToSyncFilters) HasSource() bool`

HasSource returns a boolean if a field has been set.

### SetSourceNil

`func (o *OrganizationUserFilesToSyncFilters) SetSourceNil(b bool)`

 SetSourceNil sets the value for Source to be an explicit nil

### UnsetSource
`func (o *OrganizationUserFilesToSyncFilters) UnsetSource()`

UnsetSource ensures that no value is present for Source, not even an explicit nil
### GetName

`func (o *OrganizationUserFilesToSyncFilters) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *OrganizationUserFilesToSyncFilters) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *OrganizationUserFilesToSyncFilters) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *OrganizationUserFilesToSyncFilters) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *OrganizationUserFilesToSyncFilters) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *OrganizationUserFilesToSyncFilters) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetTagsV2

`func (o *OrganizationUserFilesToSyncFilters) GetTagsV2() map[string]interface{}`

GetTagsV2 returns the TagsV2 field if non-nil, zero value otherwise.

### GetTagsV2Ok

`func (o *OrganizationUserFilesToSyncFilters) GetTagsV2Ok() (*map[string]interface{}, bool)`

GetTagsV2Ok returns a tuple with the TagsV2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTagsV2

`func (o *OrganizationUserFilesToSyncFilters) SetTagsV2(v map[string]interface{})`

SetTagsV2 sets TagsV2 field to given value.

### HasTagsV2

`func (o *OrganizationUserFilesToSyncFilters) HasTagsV2() bool`

HasTagsV2 returns a boolean if a field has been set.

### SetTagsV2Nil

`func (o *OrganizationUserFilesToSyncFilters) SetTagsV2Nil(b bool)`

 SetTagsV2Nil sets the value for TagsV2 to be an explicit nil

### UnsetTagsV2
`func (o *OrganizationUserFilesToSyncFilters) UnsetTagsV2()`

UnsetTagsV2 ensures that no value is present for TagsV2, not even an explicit nil
### GetIds

`func (o *OrganizationUserFilesToSyncFilters) GetIds() []int32`

GetIds returns the Ids field if non-nil, zero value otherwise.

### GetIdsOk

`func (o *OrganizationUserFilesToSyncFilters) GetIdsOk() (*[]int32, bool)`

GetIdsOk returns a tuple with the Ids field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIds

`func (o *OrganizationUserFilesToSyncFilters) SetIds(v []int32)`

SetIds sets Ids field to given value.

### HasIds

`func (o *OrganizationUserFilesToSyncFilters) HasIds() bool`

HasIds returns a boolean if a field has been set.

### SetIdsNil

`func (o *OrganizationUserFilesToSyncFilters) SetIdsNil(b bool)`

 SetIdsNil sets the value for Ids to be an explicit nil

### UnsetIds
`func (o *OrganizationUserFilesToSyncFilters) UnsetIds()`

UnsetIds ensures that no value is present for Ids, not even an explicit nil
### GetExternalFileIds

`func (o *OrganizationUserFilesToSyncFilters) GetExternalFileIds() []string`

GetExternalFileIds returns the ExternalFileIds field if non-nil, zero value otherwise.

### GetExternalFileIdsOk

`func (o *OrganizationUserFilesToSyncFilters) GetExternalFileIdsOk() (*[]string, bool)`

GetExternalFileIdsOk returns a tuple with the ExternalFileIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalFileIds

`func (o *OrganizationUserFilesToSyncFilters) SetExternalFileIds(v []string)`

SetExternalFileIds sets ExternalFileIds field to given value.

### HasExternalFileIds

`func (o *OrganizationUserFilesToSyncFilters) HasExternalFileIds() bool`

HasExternalFileIds returns a boolean if a field has been set.

### SetExternalFileIdsNil

`func (o *OrganizationUserFilesToSyncFilters) SetExternalFileIdsNil(b bool)`

 SetExternalFileIdsNil sets the value for ExternalFileIds to be an explicit nil

### UnsetExternalFileIds
`func (o *OrganizationUserFilesToSyncFilters) UnsetExternalFileIds()`

UnsetExternalFileIds ensures that no value is present for ExternalFileIds, not even an explicit nil
### GetSyncStatuses

`func (o *OrganizationUserFilesToSyncFilters) GetSyncStatuses() []ExternalFileSyncStatuses`

GetSyncStatuses returns the SyncStatuses field if non-nil, zero value otherwise.

### GetSyncStatusesOk

`func (o *OrganizationUserFilesToSyncFilters) GetSyncStatusesOk() (*[]ExternalFileSyncStatuses, bool)`

GetSyncStatusesOk returns a tuple with the SyncStatuses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSyncStatuses

`func (o *OrganizationUserFilesToSyncFilters) SetSyncStatuses(v []ExternalFileSyncStatuses)`

SetSyncStatuses sets SyncStatuses field to given value.

### HasSyncStatuses

`func (o *OrganizationUserFilesToSyncFilters) HasSyncStatuses() bool`

HasSyncStatuses returns a boolean if a field has been set.

### SetSyncStatusesNil

`func (o *OrganizationUserFilesToSyncFilters) SetSyncStatusesNil(b bool)`

 SetSyncStatusesNil sets the value for SyncStatuses to be an explicit nil

### UnsetSyncStatuses
`func (o *OrganizationUserFilesToSyncFilters) UnsetSyncStatuses()`

UnsetSyncStatuses ensures that no value is present for SyncStatuses, not even an explicit nil
### GetParentFileIds

`func (o *OrganizationUserFilesToSyncFilters) GetParentFileIds() []int32`

GetParentFileIds returns the ParentFileIds field if non-nil, zero value otherwise.

### GetParentFileIdsOk

`func (o *OrganizationUserFilesToSyncFilters) GetParentFileIdsOk() (*[]int32, bool)`

GetParentFileIdsOk returns a tuple with the ParentFileIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentFileIds

`func (o *OrganizationUserFilesToSyncFilters) SetParentFileIds(v []int32)`

SetParentFileIds sets ParentFileIds field to given value.

### HasParentFileIds

`func (o *OrganizationUserFilesToSyncFilters) HasParentFileIds() bool`

HasParentFileIds returns a boolean if a field has been set.

### SetParentFileIdsNil

`func (o *OrganizationUserFilesToSyncFilters) SetParentFileIdsNil(b bool)`

 SetParentFileIdsNil sets the value for ParentFileIds to be an explicit nil

### UnsetParentFileIds
`func (o *OrganizationUserFilesToSyncFilters) UnsetParentFileIds()`

UnsetParentFileIds ensures that no value is present for ParentFileIds, not even an explicit nil
### GetOrganizationUserDataSourceId

`func (o *OrganizationUserFilesToSyncFilters) GetOrganizationUserDataSourceId() []int32`

GetOrganizationUserDataSourceId returns the OrganizationUserDataSourceId field if non-nil, zero value otherwise.

### GetOrganizationUserDataSourceIdOk

`func (o *OrganizationUserFilesToSyncFilters) GetOrganizationUserDataSourceIdOk() (*[]int32, bool)`

GetOrganizationUserDataSourceIdOk returns a tuple with the OrganizationUserDataSourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationUserDataSourceId

`func (o *OrganizationUserFilesToSyncFilters) SetOrganizationUserDataSourceId(v []int32)`

SetOrganizationUserDataSourceId sets OrganizationUserDataSourceId field to given value.

### HasOrganizationUserDataSourceId

`func (o *OrganizationUserFilesToSyncFilters) HasOrganizationUserDataSourceId() bool`

HasOrganizationUserDataSourceId returns a boolean if a field has been set.

### SetOrganizationUserDataSourceIdNil

`func (o *OrganizationUserFilesToSyncFilters) SetOrganizationUserDataSourceIdNil(b bool)`

 SetOrganizationUserDataSourceIdNil sets the value for OrganizationUserDataSourceId to be an explicit nil

### UnsetOrganizationUserDataSourceId
`func (o *OrganizationUserFilesToSyncFilters) UnsetOrganizationUserDataSourceId()`

UnsetOrganizationUserDataSourceId ensures that no value is present for OrganizationUserDataSourceId, not even an explicit nil
### GetEmbeddingGenerators

`func (o *OrganizationUserFilesToSyncFilters) GetEmbeddingGenerators() []EmbeddingGenerators`

GetEmbeddingGenerators returns the EmbeddingGenerators field if non-nil, zero value otherwise.

### GetEmbeddingGeneratorsOk

`func (o *OrganizationUserFilesToSyncFilters) GetEmbeddingGeneratorsOk() (*[]EmbeddingGenerators, bool)`

GetEmbeddingGeneratorsOk returns a tuple with the EmbeddingGenerators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbeddingGenerators

`func (o *OrganizationUserFilesToSyncFilters) SetEmbeddingGenerators(v []EmbeddingGenerators)`

SetEmbeddingGenerators sets EmbeddingGenerators field to given value.

### HasEmbeddingGenerators

`func (o *OrganizationUserFilesToSyncFilters) HasEmbeddingGenerators() bool`

HasEmbeddingGenerators returns a boolean if a field has been set.

### SetEmbeddingGeneratorsNil

`func (o *OrganizationUserFilesToSyncFilters) SetEmbeddingGeneratorsNil(b bool)`

 SetEmbeddingGeneratorsNil sets the value for EmbeddingGenerators to be an explicit nil

### UnsetEmbeddingGenerators
`func (o *OrganizationUserFilesToSyncFilters) UnsetEmbeddingGenerators()`

UnsetEmbeddingGenerators ensures that no value is present for EmbeddingGenerators, not even an explicit nil
### GetRootFilesOnly

`func (o *OrganizationUserFilesToSyncFilters) GetRootFilesOnly() bool`

GetRootFilesOnly returns the RootFilesOnly field if non-nil, zero value otherwise.

### GetRootFilesOnlyOk

`func (o *OrganizationUserFilesToSyncFilters) GetRootFilesOnlyOk() (*bool, bool)`

GetRootFilesOnlyOk returns a tuple with the RootFilesOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRootFilesOnly

`func (o *OrganizationUserFilesToSyncFilters) SetRootFilesOnly(v bool)`

SetRootFilesOnly sets RootFilesOnly field to given value.

### HasRootFilesOnly

`func (o *OrganizationUserFilesToSyncFilters) HasRootFilesOnly() bool`

HasRootFilesOnly returns a boolean if a field has been set.

### SetRootFilesOnlyNil

`func (o *OrganizationUserFilesToSyncFilters) SetRootFilesOnlyNil(b bool)`

 SetRootFilesOnlyNil sets the value for RootFilesOnly to be an explicit nil

### UnsetRootFilesOnly
`func (o *OrganizationUserFilesToSyncFilters) UnsetRootFilesOnly()`

UnsetRootFilesOnly ensures that no value is present for RootFilesOnly, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


