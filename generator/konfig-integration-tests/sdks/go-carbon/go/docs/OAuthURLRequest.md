# OAuthURLRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Tags** | Pointer to **interface{}** |  | [optional] 
**Scope** | Pointer to **NullableString** |  | [optional] 
**Service** | [**DataSourceType**](DataSourceType.md) |  | 
**ChunkSize** | Pointer to **NullableInt32** |  | [optional] [default to 1500]
**ChunkOverlap** | Pointer to **NullableInt32** |  | [optional] [default to 20]
**SkipEmbeddingGeneration** | Pointer to **NullableBool** |  | [optional] [default to false]
**EmbeddingModel** | Pointer to [**NullableEmbeddingGeneratorsNullable**](EmbeddingGeneratorsNullable.md) |  | [optional] [default to EMBEDDINGGENERATORSNULLABLE_OPENAI]
**ZendeskSubdomain** | Pointer to **NullableString** |  | [optional] 
**MicrosoftTenant** | Pointer to **NullableString** |  | [optional] 
**SharepointSiteName** | Pointer to **NullableString** |  | [optional] 
**ConfluenceSubdomain** | Pointer to **NullableString** |  | [optional] 
**GenerateSparseVectors** | Pointer to **NullableBool** |  | [optional] [default to false]
**PrependFilenameToChunks** | Pointer to **NullableBool** |  | [optional] [default to false]
**MaxItemsPerChunk** | Pointer to **NullableInt32** |  | [optional] 
**SalesforceDomain** | Pointer to **NullableString** |  | [optional] 
**SyncFilesOnConnection** | Pointer to **NullableBool** |  | [optional] [default to false]
**SetPageAsBoundary** | Pointer to **bool** |  | [optional] [default to false]

## Methods

### NewOAuthURLRequest

`func NewOAuthURLRequest(service DataSourceType, ) *OAuthURLRequest`

NewOAuthURLRequest instantiates a new OAuthURLRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOAuthURLRequestWithDefaults

`func NewOAuthURLRequestWithDefaults() *OAuthURLRequest`

NewOAuthURLRequestWithDefaults instantiates a new OAuthURLRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTags

`func (o *OAuthURLRequest) GetTags() interface{}`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *OAuthURLRequest) GetTagsOk() (*interface{}, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *OAuthURLRequest) SetTags(v interface{})`

SetTags sets Tags field to given value.

### HasTags

`func (o *OAuthURLRequest) HasTags() bool`

HasTags returns a boolean if a field has been set.

### SetTagsNil

`func (o *OAuthURLRequest) SetTagsNil(b bool)`

 SetTagsNil sets the value for Tags to be an explicit nil

### UnsetTags
`func (o *OAuthURLRequest) UnsetTags()`

UnsetTags ensures that no value is present for Tags, not even an explicit nil
### GetScope

`func (o *OAuthURLRequest) GetScope() string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *OAuthURLRequest) GetScopeOk() (*string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *OAuthURLRequest) SetScope(v string)`

SetScope sets Scope field to given value.

### HasScope

`func (o *OAuthURLRequest) HasScope() bool`

HasScope returns a boolean if a field has been set.

### SetScopeNil

`func (o *OAuthURLRequest) SetScopeNil(b bool)`

 SetScopeNil sets the value for Scope to be an explicit nil

### UnsetScope
`func (o *OAuthURLRequest) UnsetScope()`

UnsetScope ensures that no value is present for Scope, not even an explicit nil
### GetService

`func (o *OAuthURLRequest) GetService() DataSourceType`

GetService returns the Service field if non-nil, zero value otherwise.

### GetServiceOk

`func (o *OAuthURLRequest) GetServiceOk() (*DataSourceType, bool)`

GetServiceOk returns a tuple with the Service field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetService

`func (o *OAuthURLRequest) SetService(v DataSourceType)`

SetService sets Service field to given value.


### GetChunkSize

`func (o *OAuthURLRequest) GetChunkSize() int32`

GetChunkSize returns the ChunkSize field if non-nil, zero value otherwise.

### GetChunkSizeOk

`func (o *OAuthURLRequest) GetChunkSizeOk() (*int32, bool)`

GetChunkSizeOk returns a tuple with the ChunkSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChunkSize

`func (o *OAuthURLRequest) SetChunkSize(v int32)`

SetChunkSize sets ChunkSize field to given value.

### HasChunkSize

`func (o *OAuthURLRequest) HasChunkSize() bool`

HasChunkSize returns a boolean if a field has been set.

### SetChunkSizeNil

`func (o *OAuthURLRequest) SetChunkSizeNil(b bool)`

 SetChunkSizeNil sets the value for ChunkSize to be an explicit nil

### UnsetChunkSize
`func (o *OAuthURLRequest) UnsetChunkSize()`

UnsetChunkSize ensures that no value is present for ChunkSize, not even an explicit nil
### GetChunkOverlap

`func (o *OAuthURLRequest) GetChunkOverlap() int32`

GetChunkOverlap returns the ChunkOverlap field if non-nil, zero value otherwise.

### GetChunkOverlapOk

`func (o *OAuthURLRequest) GetChunkOverlapOk() (*int32, bool)`

GetChunkOverlapOk returns a tuple with the ChunkOverlap field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChunkOverlap

`func (o *OAuthURLRequest) SetChunkOverlap(v int32)`

SetChunkOverlap sets ChunkOverlap field to given value.

### HasChunkOverlap

`func (o *OAuthURLRequest) HasChunkOverlap() bool`

HasChunkOverlap returns a boolean if a field has been set.

### SetChunkOverlapNil

`func (o *OAuthURLRequest) SetChunkOverlapNil(b bool)`

 SetChunkOverlapNil sets the value for ChunkOverlap to be an explicit nil

### UnsetChunkOverlap
`func (o *OAuthURLRequest) UnsetChunkOverlap()`

UnsetChunkOverlap ensures that no value is present for ChunkOverlap, not even an explicit nil
### GetSkipEmbeddingGeneration

`func (o *OAuthURLRequest) GetSkipEmbeddingGeneration() bool`

GetSkipEmbeddingGeneration returns the SkipEmbeddingGeneration field if non-nil, zero value otherwise.

### GetSkipEmbeddingGenerationOk

`func (o *OAuthURLRequest) GetSkipEmbeddingGenerationOk() (*bool, bool)`

GetSkipEmbeddingGenerationOk returns a tuple with the SkipEmbeddingGeneration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSkipEmbeddingGeneration

`func (o *OAuthURLRequest) SetSkipEmbeddingGeneration(v bool)`

SetSkipEmbeddingGeneration sets SkipEmbeddingGeneration field to given value.

### HasSkipEmbeddingGeneration

`func (o *OAuthURLRequest) HasSkipEmbeddingGeneration() bool`

HasSkipEmbeddingGeneration returns a boolean if a field has been set.

### SetSkipEmbeddingGenerationNil

`func (o *OAuthURLRequest) SetSkipEmbeddingGenerationNil(b bool)`

 SetSkipEmbeddingGenerationNil sets the value for SkipEmbeddingGeneration to be an explicit nil

### UnsetSkipEmbeddingGeneration
`func (o *OAuthURLRequest) UnsetSkipEmbeddingGeneration()`

UnsetSkipEmbeddingGeneration ensures that no value is present for SkipEmbeddingGeneration, not even an explicit nil
### GetEmbeddingModel

`func (o *OAuthURLRequest) GetEmbeddingModel() EmbeddingGeneratorsNullable`

GetEmbeddingModel returns the EmbeddingModel field if non-nil, zero value otherwise.

### GetEmbeddingModelOk

`func (o *OAuthURLRequest) GetEmbeddingModelOk() (*EmbeddingGeneratorsNullable, bool)`

GetEmbeddingModelOk returns a tuple with the EmbeddingModel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbeddingModel

`func (o *OAuthURLRequest) SetEmbeddingModel(v EmbeddingGeneratorsNullable)`

SetEmbeddingModel sets EmbeddingModel field to given value.

### HasEmbeddingModel

`func (o *OAuthURLRequest) HasEmbeddingModel() bool`

HasEmbeddingModel returns a boolean if a field has been set.

### SetEmbeddingModelNil

`func (o *OAuthURLRequest) SetEmbeddingModelNil(b bool)`

 SetEmbeddingModelNil sets the value for EmbeddingModel to be an explicit nil

### UnsetEmbeddingModel
`func (o *OAuthURLRequest) UnsetEmbeddingModel()`

UnsetEmbeddingModel ensures that no value is present for EmbeddingModel, not even an explicit nil
### GetZendeskSubdomain

`func (o *OAuthURLRequest) GetZendeskSubdomain() string`

GetZendeskSubdomain returns the ZendeskSubdomain field if non-nil, zero value otherwise.

### GetZendeskSubdomainOk

`func (o *OAuthURLRequest) GetZendeskSubdomainOk() (*string, bool)`

GetZendeskSubdomainOk returns a tuple with the ZendeskSubdomain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetZendeskSubdomain

`func (o *OAuthURLRequest) SetZendeskSubdomain(v string)`

SetZendeskSubdomain sets ZendeskSubdomain field to given value.

### HasZendeskSubdomain

`func (o *OAuthURLRequest) HasZendeskSubdomain() bool`

HasZendeskSubdomain returns a boolean if a field has been set.

### SetZendeskSubdomainNil

`func (o *OAuthURLRequest) SetZendeskSubdomainNil(b bool)`

 SetZendeskSubdomainNil sets the value for ZendeskSubdomain to be an explicit nil

### UnsetZendeskSubdomain
`func (o *OAuthURLRequest) UnsetZendeskSubdomain()`

UnsetZendeskSubdomain ensures that no value is present for ZendeskSubdomain, not even an explicit nil
### GetMicrosoftTenant

`func (o *OAuthURLRequest) GetMicrosoftTenant() string`

GetMicrosoftTenant returns the MicrosoftTenant field if non-nil, zero value otherwise.

### GetMicrosoftTenantOk

`func (o *OAuthURLRequest) GetMicrosoftTenantOk() (*string, bool)`

GetMicrosoftTenantOk returns a tuple with the MicrosoftTenant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMicrosoftTenant

`func (o *OAuthURLRequest) SetMicrosoftTenant(v string)`

SetMicrosoftTenant sets MicrosoftTenant field to given value.

### HasMicrosoftTenant

`func (o *OAuthURLRequest) HasMicrosoftTenant() bool`

HasMicrosoftTenant returns a boolean if a field has been set.

### SetMicrosoftTenantNil

`func (o *OAuthURLRequest) SetMicrosoftTenantNil(b bool)`

 SetMicrosoftTenantNil sets the value for MicrosoftTenant to be an explicit nil

### UnsetMicrosoftTenant
`func (o *OAuthURLRequest) UnsetMicrosoftTenant()`

UnsetMicrosoftTenant ensures that no value is present for MicrosoftTenant, not even an explicit nil
### GetSharepointSiteName

`func (o *OAuthURLRequest) GetSharepointSiteName() string`

GetSharepointSiteName returns the SharepointSiteName field if non-nil, zero value otherwise.

### GetSharepointSiteNameOk

`func (o *OAuthURLRequest) GetSharepointSiteNameOk() (*string, bool)`

GetSharepointSiteNameOk returns a tuple with the SharepointSiteName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSharepointSiteName

`func (o *OAuthURLRequest) SetSharepointSiteName(v string)`

SetSharepointSiteName sets SharepointSiteName field to given value.

### HasSharepointSiteName

`func (o *OAuthURLRequest) HasSharepointSiteName() bool`

HasSharepointSiteName returns a boolean if a field has been set.

### SetSharepointSiteNameNil

`func (o *OAuthURLRequest) SetSharepointSiteNameNil(b bool)`

 SetSharepointSiteNameNil sets the value for SharepointSiteName to be an explicit nil

### UnsetSharepointSiteName
`func (o *OAuthURLRequest) UnsetSharepointSiteName()`

UnsetSharepointSiteName ensures that no value is present for SharepointSiteName, not even an explicit nil
### GetConfluenceSubdomain

`func (o *OAuthURLRequest) GetConfluenceSubdomain() string`

GetConfluenceSubdomain returns the ConfluenceSubdomain field if non-nil, zero value otherwise.

### GetConfluenceSubdomainOk

`func (o *OAuthURLRequest) GetConfluenceSubdomainOk() (*string, bool)`

GetConfluenceSubdomainOk returns a tuple with the ConfluenceSubdomain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfluenceSubdomain

`func (o *OAuthURLRequest) SetConfluenceSubdomain(v string)`

SetConfluenceSubdomain sets ConfluenceSubdomain field to given value.

### HasConfluenceSubdomain

`func (o *OAuthURLRequest) HasConfluenceSubdomain() bool`

HasConfluenceSubdomain returns a boolean if a field has been set.

### SetConfluenceSubdomainNil

`func (o *OAuthURLRequest) SetConfluenceSubdomainNil(b bool)`

 SetConfluenceSubdomainNil sets the value for ConfluenceSubdomain to be an explicit nil

### UnsetConfluenceSubdomain
`func (o *OAuthURLRequest) UnsetConfluenceSubdomain()`

UnsetConfluenceSubdomain ensures that no value is present for ConfluenceSubdomain, not even an explicit nil
### GetGenerateSparseVectors

`func (o *OAuthURLRequest) GetGenerateSparseVectors() bool`

GetGenerateSparseVectors returns the GenerateSparseVectors field if non-nil, zero value otherwise.

### GetGenerateSparseVectorsOk

`func (o *OAuthURLRequest) GetGenerateSparseVectorsOk() (*bool, bool)`

GetGenerateSparseVectorsOk returns a tuple with the GenerateSparseVectors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenerateSparseVectors

`func (o *OAuthURLRequest) SetGenerateSparseVectors(v bool)`

SetGenerateSparseVectors sets GenerateSparseVectors field to given value.

### HasGenerateSparseVectors

`func (o *OAuthURLRequest) HasGenerateSparseVectors() bool`

HasGenerateSparseVectors returns a boolean if a field has been set.

### SetGenerateSparseVectorsNil

`func (o *OAuthURLRequest) SetGenerateSparseVectorsNil(b bool)`

 SetGenerateSparseVectorsNil sets the value for GenerateSparseVectors to be an explicit nil

### UnsetGenerateSparseVectors
`func (o *OAuthURLRequest) UnsetGenerateSparseVectors()`

UnsetGenerateSparseVectors ensures that no value is present for GenerateSparseVectors, not even an explicit nil
### GetPrependFilenameToChunks

`func (o *OAuthURLRequest) GetPrependFilenameToChunks() bool`

GetPrependFilenameToChunks returns the PrependFilenameToChunks field if non-nil, zero value otherwise.

### GetPrependFilenameToChunksOk

`func (o *OAuthURLRequest) GetPrependFilenameToChunksOk() (*bool, bool)`

GetPrependFilenameToChunksOk returns a tuple with the PrependFilenameToChunks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrependFilenameToChunks

`func (o *OAuthURLRequest) SetPrependFilenameToChunks(v bool)`

SetPrependFilenameToChunks sets PrependFilenameToChunks field to given value.

### HasPrependFilenameToChunks

`func (o *OAuthURLRequest) HasPrependFilenameToChunks() bool`

HasPrependFilenameToChunks returns a boolean if a field has been set.

### SetPrependFilenameToChunksNil

`func (o *OAuthURLRequest) SetPrependFilenameToChunksNil(b bool)`

 SetPrependFilenameToChunksNil sets the value for PrependFilenameToChunks to be an explicit nil

### UnsetPrependFilenameToChunks
`func (o *OAuthURLRequest) UnsetPrependFilenameToChunks()`

UnsetPrependFilenameToChunks ensures that no value is present for PrependFilenameToChunks, not even an explicit nil
### GetMaxItemsPerChunk

`func (o *OAuthURLRequest) GetMaxItemsPerChunk() int32`

GetMaxItemsPerChunk returns the MaxItemsPerChunk field if non-nil, zero value otherwise.

### GetMaxItemsPerChunkOk

`func (o *OAuthURLRequest) GetMaxItemsPerChunkOk() (*int32, bool)`

GetMaxItemsPerChunkOk returns a tuple with the MaxItemsPerChunk field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxItemsPerChunk

`func (o *OAuthURLRequest) SetMaxItemsPerChunk(v int32)`

SetMaxItemsPerChunk sets MaxItemsPerChunk field to given value.

### HasMaxItemsPerChunk

`func (o *OAuthURLRequest) HasMaxItemsPerChunk() bool`

HasMaxItemsPerChunk returns a boolean if a field has been set.

### SetMaxItemsPerChunkNil

`func (o *OAuthURLRequest) SetMaxItemsPerChunkNil(b bool)`

 SetMaxItemsPerChunkNil sets the value for MaxItemsPerChunk to be an explicit nil

### UnsetMaxItemsPerChunk
`func (o *OAuthURLRequest) UnsetMaxItemsPerChunk()`

UnsetMaxItemsPerChunk ensures that no value is present for MaxItemsPerChunk, not even an explicit nil
### GetSalesforceDomain

`func (o *OAuthURLRequest) GetSalesforceDomain() string`

GetSalesforceDomain returns the SalesforceDomain field if non-nil, zero value otherwise.

### GetSalesforceDomainOk

`func (o *OAuthURLRequest) GetSalesforceDomainOk() (*string, bool)`

GetSalesforceDomainOk returns a tuple with the SalesforceDomain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesforceDomain

`func (o *OAuthURLRequest) SetSalesforceDomain(v string)`

SetSalesforceDomain sets SalesforceDomain field to given value.

### HasSalesforceDomain

`func (o *OAuthURLRequest) HasSalesforceDomain() bool`

HasSalesforceDomain returns a boolean if a field has been set.

### SetSalesforceDomainNil

`func (o *OAuthURLRequest) SetSalesforceDomainNil(b bool)`

 SetSalesforceDomainNil sets the value for SalesforceDomain to be an explicit nil

### UnsetSalesforceDomain
`func (o *OAuthURLRequest) UnsetSalesforceDomain()`

UnsetSalesforceDomain ensures that no value is present for SalesforceDomain, not even an explicit nil
### GetSyncFilesOnConnection

`func (o *OAuthURLRequest) GetSyncFilesOnConnection() bool`

GetSyncFilesOnConnection returns the SyncFilesOnConnection field if non-nil, zero value otherwise.

### GetSyncFilesOnConnectionOk

`func (o *OAuthURLRequest) GetSyncFilesOnConnectionOk() (*bool, bool)`

GetSyncFilesOnConnectionOk returns a tuple with the SyncFilesOnConnection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSyncFilesOnConnection

`func (o *OAuthURLRequest) SetSyncFilesOnConnection(v bool)`

SetSyncFilesOnConnection sets SyncFilesOnConnection field to given value.

### HasSyncFilesOnConnection

`func (o *OAuthURLRequest) HasSyncFilesOnConnection() bool`

HasSyncFilesOnConnection returns a boolean if a field has been set.

### SetSyncFilesOnConnectionNil

`func (o *OAuthURLRequest) SetSyncFilesOnConnectionNil(b bool)`

 SetSyncFilesOnConnectionNil sets the value for SyncFilesOnConnection to be an explicit nil

### UnsetSyncFilesOnConnection
`func (o *OAuthURLRequest) UnsetSyncFilesOnConnection()`

UnsetSyncFilesOnConnection ensures that no value is present for SyncFilesOnConnection, not even an explicit nil
### GetSetPageAsBoundary

`func (o *OAuthURLRequest) GetSetPageAsBoundary() bool`

GetSetPageAsBoundary returns the SetPageAsBoundary field if non-nil, zero value otherwise.

### GetSetPageAsBoundaryOk

`func (o *OAuthURLRequest) GetSetPageAsBoundaryOk() (*bool, bool)`

GetSetPageAsBoundaryOk returns a tuple with the SetPageAsBoundary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetPageAsBoundary

`func (o *OAuthURLRequest) SetSetPageAsBoundary(v bool)`

SetSetPageAsBoundary sets SetPageAsBoundary field to given value.

### HasSetPageAsBoundary

`func (o *OAuthURLRequest) HasSetPageAsBoundary() bool`

HasSetPageAsBoundary returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


