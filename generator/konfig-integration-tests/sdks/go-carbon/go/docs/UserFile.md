# UserFile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Tags** | **map[string]interface{}** |  | 
**Id** | **int32** |  | 
**Source** | [**DataSourceType**](DataSourceType.md) |  | 
**OrganizationId** | **int32** |  | 
**OrganizationSuppliedUserId** | **string** |  | 
**OrganizationUserDataSourceId** | **NullableInt32** |  | 
**ExternalFileId** | **string** |  | 
**ExternalUrl** | **NullableString** |  | 
**SyncStatus** | [**ExternalFileSyncStatuses**](ExternalFileSyncStatuses.md) |  | 
**SyncErrorMessage** | **NullableString** |  | 
**LastSync** | **NullableTime** |  | 
**FileStatistics** | [**NullableFileStatisticsNullable**](FileStatisticsNullable.md) |  | 
**FileMetadata** | **map[string]interface{}** |  | 
**EmbeddingProperties** | [**map[string]EmbeddingProperties**](EmbeddingProperties.md) |  | 
**ChunkSize** | **NullableInt32** |  | 
**ChunkOverlap** | **NullableInt32** |  | 
**ChunkProperties** | [**NullableChunkPropertiesNullable**](ChunkPropertiesNullable.md) |  | 
**Name** | **NullableString** |  | 
**ParentId** | **NullableInt32** |  | 
**EnableAutoSync** | **NullableBool** |  | 
**PresignedUrl** | **NullableString** |  | 
**ParsedTextUrl** | **NullableString** |  | 
**AdditionalPresignedUrls** | **map[string]interface{}** |  | 
**SkipEmbeddingGeneration** | **bool** |  | 
**SourceCreatedAt** | **NullableTime** |  | 
**GenerateSparseVectors** | **NullableBool** |  | 
**CreatedAt** | **time.Time** |  | 
**UpdatedAt** | **time.Time** |  | 

## Methods

### NewUserFile

`func NewUserFile(tags map[string]interface{}, id int32, source DataSourceType, organizationId int32, organizationSuppliedUserId string, organizationUserDataSourceId NullableInt32, externalFileId string, externalUrl NullableString, syncStatus ExternalFileSyncStatuses, syncErrorMessage NullableString, lastSync NullableTime, fileStatistics NullableFileStatisticsNullable, fileMetadata map[string]interface{}, embeddingProperties map[string]EmbeddingProperties, chunkSize NullableInt32, chunkOverlap NullableInt32, chunkProperties NullableChunkPropertiesNullable, name NullableString, parentId NullableInt32, enableAutoSync NullableBool, presignedUrl NullableString, parsedTextUrl NullableString, additionalPresignedUrls map[string]interface{}, skipEmbeddingGeneration bool, sourceCreatedAt NullableTime, generateSparseVectors NullableBool, createdAt time.Time, updatedAt time.Time, ) *UserFile`

NewUserFile instantiates a new UserFile object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUserFileWithDefaults

`func NewUserFileWithDefaults() *UserFile`

NewUserFileWithDefaults instantiates a new UserFile object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTags

`func (o *UserFile) GetTags() map[string]interface{}`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *UserFile) GetTagsOk() (*map[string]interface{}, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *UserFile) SetTags(v map[string]interface{})`

SetTags sets Tags field to given value.


### SetTagsNil

`func (o *UserFile) SetTagsNil(b bool)`

 SetTagsNil sets the value for Tags to be an explicit nil

### UnsetTags
`func (o *UserFile) UnsetTags()`

UnsetTags ensures that no value is present for Tags, not even an explicit nil
### GetId

`func (o *UserFile) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *UserFile) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *UserFile) SetId(v int32)`

SetId sets Id field to given value.


### GetSource

`func (o *UserFile) GetSource() DataSourceType`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *UserFile) GetSourceOk() (*DataSourceType, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *UserFile) SetSource(v DataSourceType)`

SetSource sets Source field to given value.


### GetOrganizationId

`func (o *UserFile) GetOrganizationId() int32`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *UserFile) GetOrganizationIdOk() (*int32, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *UserFile) SetOrganizationId(v int32)`

SetOrganizationId sets OrganizationId field to given value.


### GetOrganizationSuppliedUserId

`func (o *UserFile) GetOrganizationSuppliedUserId() string`

GetOrganizationSuppliedUserId returns the OrganizationSuppliedUserId field if non-nil, zero value otherwise.

### GetOrganizationSuppliedUserIdOk

`func (o *UserFile) GetOrganizationSuppliedUserIdOk() (*string, bool)`

GetOrganizationSuppliedUserIdOk returns a tuple with the OrganizationSuppliedUserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationSuppliedUserId

`func (o *UserFile) SetOrganizationSuppliedUserId(v string)`

SetOrganizationSuppliedUserId sets OrganizationSuppliedUserId field to given value.


### GetOrganizationUserDataSourceId

`func (o *UserFile) GetOrganizationUserDataSourceId() int32`

GetOrganizationUserDataSourceId returns the OrganizationUserDataSourceId field if non-nil, zero value otherwise.

### GetOrganizationUserDataSourceIdOk

`func (o *UserFile) GetOrganizationUserDataSourceIdOk() (*int32, bool)`

GetOrganizationUserDataSourceIdOk returns a tuple with the OrganizationUserDataSourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationUserDataSourceId

`func (o *UserFile) SetOrganizationUserDataSourceId(v int32)`

SetOrganizationUserDataSourceId sets OrganizationUserDataSourceId field to given value.


### SetOrganizationUserDataSourceIdNil

`func (o *UserFile) SetOrganizationUserDataSourceIdNil(b bool)`

 SetOrganizationUserDataSourceIdNil sets the value for OrganizationUserDataSourceId to be an explicit nil

### UnsetOrganizationUserDataSourceId
`func (o *UserFile) UnsetOrganizationUserDataSourceId()`

UnsetOrganizationUserDataSourceId ensures that no value is present for OrganizationUserDataSourceId, not even an explicit nil
### GetExternalFileId

`func (o *UserFile) GetExternalFileId() string`

GetExternalFileId returns the ExternalFileId field if non-nil, zero value otherwise.

### GetExternalFileIdOk

`func (o *UserFile) GetExternalFileIdOk() (*string, bool)`

GetExternalFileIdOk returns a tuple with the ExternalFileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalFileId

`func (o *UserFile) SetExternalFileId(v string)`

SetExternalFileId sets ExternalFileId field to given value.


### GetExternalUrl

`func (o *UserFile) GetExternalUrl() string`

GetExternalUrl returns the ExternalUrl field if non-nil, zero value otherwise.

### GetExternalUrlOk

`func (o *UserFile) GetExternalUrlOk() (*string, bool)`

GetExternalUrlOk returns a tuple with the ExternalUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalUrl

`func (o *UserFile) SetExternalUrl(v string)`

SetExternalUrl sets ExternalUrl field to given value.


### SetExternalUrlNil

`func (o *UserFile) SetExternalUrlNil(b bool)`

 SetExternalUrlNil sets the value for ExternalUrl to be an explicit nil

### UnsetExternalUrl
`func (o *UserFile) UnsetExternalUrl()`

UnsetExternalUrl ensures that no value is present for ExternalUrl, not even an explicit nil
### GetSyncStatus

`func (o *UserFile) GetSyncStatus() ExternalFileSyncStatuses`

GetSyncStatus returns the SyncStatus field if non-nil, zero value otherwise.

### GetSyncStatusOk

`func (o *UserFile) GetSyncStatusOk() (*ExternalFileSyncStatuses, bool)`

GetSyncStatusOk returns a tuple with the SyncStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSyncStatus

`func (o *UserFile) SetSyncStatus(v ExternalFileSyncStatuses)`

SetSyncStatus sets SyncStatus field to given value.


### GetSyncErrorMessage

`func (o *UserFile) GetSyncErrorMessage() string`

GetSyncErrorMessage returns the SyncErrorMessage field if non-nil, zero value otherwise.

### GetSyncErrorMessageOk

`func (o *UserFile) GetSyncErrorMessageOk() (*string, bool)`

GetSyncErrorMessageOk returns a tuple with the SyncErrorMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSyncErrorMessage

`func (o *UserFile) SetSyncErrorMessage(v string)`

SetSyncErrorMessage sets SyncErrorMessage field to given value.


### SetSyncErrorMessageNil

`func (o *UserFile) SetSyncErrorMessageNil(b bool)`

 SetSyncErrorMessageNil sets the value for SyncErrorMessage to be an explicit nil

### UnsetSyncErrorMessage
`func (o *UserFile) UnsetSyncErrorMessage()`

UnsetSyncErrorMessage ensures that no value is present for SyncErrorMessage, not even an explicit nil
### GetLastSync

`func (o *UserFile) GetLastSync() time.Time`

GetLastSync returns the LastSync field if non-nil, zero value otherwise.

### GetLastSyncOk

`func (o *UserFile) GetLastSyncOk() (*time.Time, bool)`

GetLastSyncOk returns a tuple with the LastSync field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastSync

`func (o *UserFile) SetLastSync(v time.Time)`

SetLastSync sets LastSync field to given value.


### SetLastSyncNil

`func (o *UserFile) SetLastSyncNil(b bool)`

 SetLastSyncNil sets the value for LastSync to be an explicit nil

### UnsetLastSync
`func (o *UserFile) UnsetLastSync()`

UnsetLastSync ensures that no value is present for LastSync, not even an explicit nil
### GetFileStatistics

`func (o *UserFile) GetFileStatistics() FileStatisticsNullable`

GetFileStatistics returns the FileStatistics field if non-nil, zero value otherwise.

### GetFileStatisticsOk

`func (o *UserFile) GetFileStatisticsOk() (*FileStatisticsNullable, bool)`

GetFileStatisticsOk returns a tuple with the FileStatistics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileStatistics

`func (o *UserFile) SetFileStatistics(v FileStatisticsNullable)`

SetFileStatistics sets FileStatistics field to given value.


### SetFileStatisticsNil

`func (o *UserFile) SetFileStatisticsNil(b bool)`

 SetFileStatisticsNil sets the value for FileStatistics to be an explicit nil

### UnsetFileStatistics
`func (o *UserFile) UnsetFileStatistics()`

UnsetFileStatistics ensures that no value is present for FileStatistics, not even an explicit nil
### GetFileMetadata

`func (o *UserFile) GetFileMetadata() map[string]interface{}`

GetFileMetadata returns the FileMetadata field if non-nil, zero value otherwise.

### GetFileMetadataOk

`func (o *UserFile) GetFileMetadataOk() (*map[string]interface{}, bool)`

GetFileMetadataOk returns a tuple with the FileMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileMetadata

`func (o *UserFile) SetFileMetadata(v map[string]interface{})`

SetFileMetadata sets FileMetadata field to given value.


### SetFileMetadataNil

`func (o *UserFile) SetFileMetadataNil(b bool)`

 SetFileMetadataNil sets the value for FileMetadata to be an explicit nil

### UnsetFileMetadata
`func (o *UserFile) UnsetFileMetadata()`

UnsetFileMetadata ensures that no value is present for FileMetadata, not even an explicit nil
### GetEmbeddingProperties

`func (o *UserFile) GetEmbeddingProperties() map[string]EmbeddingProperties`

GetEmbeddingProperties returns the EmbeddingProperties field if non-nil, zero value otherwise.

### GetEmbeddingPropertiesOk

`func (o *UserFile) GetEmbeddingPropertiesOk() (*map[string]EmbeddingProperties, bool)`

GetEmbeddingPropertiesOk returns a tuple with the EmbeddingProperties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbeddingProperties

`func (o *UserFile) SetEmbeddingProperties(v map[string]EmbeddingProperties)`

SetEmbeddingProperties sets EmbeddingProperties field to given value.


### SetEmbeddingPropertiesNil

`func (o *UserFile) SetEmbeddingPropertiesNil(b bool)`

 SetEmbeddingPropertiesNil sets the value for EmbeddingProperties to be an explicit nil

### UnsetEmbeddingProperties
`func (o *UserFile) UnsetEmbeddingProperties()`

UnsetEmbeddingProperties ensures that no value is present for EmbeddingProperties, not even an explicit nil
### GetChunkSize

`func (o *UserFile) GetChunkSize() int32`

GetChunkSize returns the ChunkSize field if non-nil, zero value otherwise.

### GetChunkSizeOk

`func (o *UserFile) GetChunkSizeOk() (*int32, bool)`

GetChunkSizeOk returns a tuple with the ChunkSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChunkSize

`func (o *UserFile) SetChunkSize(v int32)`

SetChunkSize sets ChunkSize field to given value.


### SetChunkSizeNil

`func (o *UserFile) SetChunkSizeNil(b bool)`

 SetChunkSizeNil sets the value for ChunkSize to be an explicit nil

### UnsetChunkSize
`func (o *UserFile) UnsetChunkSize()`

UnsetChunkSize ensures that no value is present for ChunkSize, not even an explicit nil
### GetChunkOverlap

`func (o *UserFile) GetChunkOverlap() int32`

GetChunkOverlap returns the ChunkOverlap field if non-nil, zero value otherwise.

### GetChunkOverlapOk

`func (o *UserFile) GetChunkOverlapOk() (*int32, bool)`

GetChunkOverlapOk returns a tuple with the ChunkOverlap field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChunkOverlap

`func (o *UserFile) SetChunkOverlap(v int32)`

SetChunkOverlap sets ChunkOverlap field to given value.


### SetChunkOverlapNil

`func (o *UserFile) SetChunkOverlapNil(b bool)`

 SetChunkOverlapNil sets the value for ChunkOverlap to be an explicit nil

### UnsetChunkOverlap
`func (o *UserFile) UnsetChunkOverlap()`

UnsetChunkOverlap ensures that no value is present for ChunkOverlap, not even an explicit nil
### GetChunkProperties

`func (o *UserFile) GetChunkProperties() ChunkPropertiesNullable`

GetChunkProperties returns the ChunkProperties field if non-nil, zero value otherwise.

### GetChunkPropertiesOk

`func (o *UserFile) GetChunkPropertiesOk() (*ChunkPropertiesNullable, bool)`

GetChunkPropertiesOk returns a tuple with the ChunkProperties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChunkProperties

`func (o *UserFile) SetChunkProperties(v ChunkPropertiesNullable)`

SetChunkProperties sets ChunkProperties field to given value.


### SetChunkPropertiesNil

`func (o *UserFile) SetChunkPropertiesNil(b bool)`

 SetChunkPropertiesNil sets the value for ChunkProperties to be an explicit nil

### UnsetChunkProperties
`func (o *UserFile) UnsetChunkProperties()`

UnsetChunkProperties ensures that no value is present for ChunkProperties, not even an explicit nil
### GetName

`func (o *UserFile) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UserFile) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UserFile) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *UserFile) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *UserFile) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetParentId

`func (o *UserFile) GetParentId() int32`

GetParentId returns the ParentId field if non-nil, zero value otherwise.

### GetParentIdOk

`func (o *UserFile) GetParentIdOk() (*int32, bool)`

GetParentIdOk returns a tuple with the ParentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentId

`func (o *UserFile) SetParentId(v int32)`

SetParentId sets ParentId field to given value.


### SetParentIdNil

`func (o *UserFile) SetParentIdNil(b bool)`

 SetParentIdNil sets the value for ParentId to be an explicit nil

### UnsetParentId
`func (o *UserFile) UnsetParentId()`

UnsetParentId ensures that no value is present for ParentId, not even an explicit nil
### GetEnableAutoSync

`func (o *UserFile) GetEnableAutoSync() bool`

GetEnableAutoSync returns the EnableAutoSync field if non-nil, zero value otherwise.

### GetEnableAutoSyncOk

`func (o *UserFile) GetEnableAutoSyncOk() (*bool, bool)`

GetEnableAutoSyncOk returns a tuple with the EnableAutoSync field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnableAutoSync

`func (o *UserFile) SetEnableAutoSync(v bool)`

SetEnableAutoSync sets EnableAutoSync field to given value.


### SetEnableAutoSyncNil

`func (o *UserFile) SetEnableAutoSyncNil(b bool)`

 SetEnableAutoSyncNil sets the value for EnableAutoSync to be an explicit nil

### UnsetEnableAutoSync
`func (o *UserFile) UnsetEnableAutoSync()`

UnsetEnableAutoSync ensures that no value is present for EnableAutoSync, not even an explicit nil
### GetPresignedUrl

`func (o *UserFile) GetPresignedUrl() string`

GetPresignedUrl returns the PresignedUrl field if non-nil, zero value otherwise.

### GetPresignedUrlOk

`func (o *UserFile) GetPresignedUrlOk() (*string, bool)`

GetPresignedUrlOk returns a tuple with the PresignedUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPresignedUrl

`func (o *UserFile) SetPresignedUrl(v string)`

SetPresignedUrl sets PresignedUrl field to given value.


### SetPresignedUrlNil

`func (o *UserFile) SetPresignedUrlNil(b bool)`

 SetPresignedUrlNil sets the value for PresignedUrl to be an explicit nil

### UnsetPresignedUrl
`func (o *UserFile) UnsetPresignedUrl()`

UnsetPresignedUrl ensures that no value is present for PresignedUrl, not even an explicit nil
### GetParsedTextUrl

`func (o *UserFile) GetParsedTextUrl() string`

GetParsedTextUrl returns the ParsedTextUrl field if non-nil, zero value otherwise.

### GetParsedTextUrlOk

`func (o *UserFile) GetParsedTextUrlOk() (*string, bool)`

GetParsedTextUrlOk returns a tuple with the ParsedTextUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParsedTextUrl

`func (o *UserFile) SetParsedTextUrl(v string)`

SetParsedTextUrl sets ParsedTextUrl field to given value.


### SetParsedTextUrlNil

`func (o *UserFile) SetParsedTextUrlNil(b bool)`

 SetParsedTextUrlNil sets the value for ParsedTextUrl to be an explicit nil

### UnsetParsedTextUrl
`func (o *UserFile) UnsetParsedTextUrl()`

UnsetParsedTextUrl ensures that no value is present for ParsedTextUrl, not even an explicit nil
### GetAdditionalPresignedUrls

`func (o *UserFile) GetAdditionalPresignedUrls() map[string]interface{}`

GetAdditionalPresignedUrls returns the AdditionalPresignedUrls field if non-nil, zero value otherwise.

### GetAdditionalPresignedUrlsOk

`func (o *UserFile) GetAdditionalPresignedUrlsOk() (*map[string]interface{}, bool)`

GetAdditionalPresignedUrlsOk returns a tuple with the AdditionalPresignedUrls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalPresignedUrls

`func (o *UserFile) SetAdditionalPresignedUrls(v map[string]interface{})`

SetAdditionalPresignedUrls sets AdditionalPresignedUrls field to given value.


### SetAdditionalPresignedUrlsNil

`func (o *UserFile) SetAdditionalPresignedUrlsNil(b bool)`

 SetAdditionalPresignedUrlsNil sets the value for AdditionalPresignedUrls to be an explicit nil

### UnsetAdditionalPresignedUrls
`func (o *UserFile) UnsetAdditionalPresignedUrls()`

UnsetAdditionalPresignedUrls ensures that no value is present for AdditionalPresignedUrls, not even an explicit nil
### GetSkipEmbeddingGeneration

`func (o *UserFile) GetSkipEmbeddingGeneration() bool`

GetSkipEmbeddingGeneration returns the SkipEmbeddingGeneration field if non-nil, zero value otherwise.

### GetSkipEmbeddingGenerationOk

`func (o *UserFile) GetSkipEmbeddingGenerationOk() (*bool, bool)`

GetSkipEmbeddingGenerationOk returns a tuple with the SkipEmbeddingGeneration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSkipEmbeddingGeneration

`func (o *UserFile) SetSkipEmbeddingGeneration(v bool)`

SetSkipEmbeddingGeneration sets SkipEmbeddingGeneration field to given value.


### GetSourceCreatedAt

`func (o *UserFile) GetSourceCreatedAt() time.Time`

GetSourceCreatedAt returns the SourceCreatedAt field if non-nil, zero value otherwise.

### GetSourceCreatedAtOk

`func (o *UserFile) GetSourceCreatedAtOk() (*time.Time, bool)`

GetSourceCreatedAtOk returns a tuple with the SourceCreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceCreatedAt

`func (o *UserFile) SetSourceCreatedAt(v time.Time)`

SetSourceCreatedAt sets SourceCreatedAt field to given value.


### SetSourceCreatedAtNil

`func (o *UserFile) SetSourceCreatedAtNil(b bool)`

 SetSourceCreatedAtNil sets the value for SourceCreatedAt to be an explicit nil

### UnsetSourceCreatedAt
`func (o *UserFile) UnsetSourceCreatedAt()`

UnsetSourceCreatedAt ensures that no value is present for SourceCreatedAt, not even an explicit nil
### GetGenerateSparseVectors

`func (o *UserFile) GetGenerateSparseVectors() bool`

GetGenerateSparseVectors returns the GenerateSparseVectors field if non-nil, zero value otherwise.

### GetGenerateSparseVectorsOk

`func (o *UserFile) GetGenerateSparseVectorsOk() (*bool, bool)`

GetGenerateSparseVectorsOk returns a tuple with the GenerateSparseVectors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenerateSparseVectors

`func (o *UserFile) SetGenerateSparseVectors(v bool)`

SetGenerateSparseVectors sets GenerateSparseVectors field to given value.


### SetGenerateSparseVectorsNil

`func (o *UserFile) SetGenerateSparseVectorsNil(b bool)`

 SetGenerateSparseVectorsNil sets the value for GenerateSparseVectors to be an explicit nil

### UnsetGenerateSparseVectors
`func (o *UserFile) UnsetGenerateSparseVectors()`

UnsetGenerateSparseVectors ensures that no value is present for GenerateSparseVectors, not even an explicit nil
### GetCreatedAt

`func (o *UserFile) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *UserFile) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *UserFile) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *UserFile) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *UserFile) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *UserFile) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


