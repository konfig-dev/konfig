# SingleChunksAndEmbeddingsUploadInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FileId** | **int32** |  | 
**ChunkSize** | Pointer to **NullableInt32** |  | [optional] 
**ChunkOverlap** | Pointer to **NullableInt32** |  | [optional] 
**ChunksAndEmbeddings** | [**[]ChunksAndEmbeddings**](ChunksAndEmbeddings.md) |  | 

## Methods

### NewSingleChunksAndEmbeddingsUploadInput

`func NewSingleChunksAndEmbeddingsUploadInput(fileId int32, chunksAndEmbeddings []ChunksAndEmbeddings, ) *SingleChunksAndEmbeddingsUploadInput`

NewSingleChunksAndEmbeddingsUploadInput instantiates a new SingleChunksAndEmbeddingsUploadInput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSingleChunksAndEmbeddingsUploadInputWithDefaults

`func NewSingleChunksAndEmbeddingsUploadInputWithDefaults() *SingleChunksAndEmbeddingsUploadInput`

NewSingleChunksAndEmbeddingsUploadInputWithDefaults instantiates a new SingleChunksAndEmbeddingsUploadInput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFileId

`func (o *SingleChunksAndEmbeddingsUploadInput) GetFileId() int32`

GetFileId returns the FileId field if non-nil, zero value otherwise.

### GetFileIdOk

`func (o *SingleChunksAndEmbeddingsUploadInput) GetFileIdOk() (*int32, bool)`

GetFileIdOk returns a tuple with the FileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileId

`func (o *SingleChunksAndEmbeddingsUploadInput) SetFileId(v int32)`

SetFileId sets FileId field to given value.


### GetChunkSize

`func (o *SingleChunksAndEmbeddingsUploadInput) GetChunkSize() int32`

GetChunkSize returns the ChunkSize field if non-nil, zero value otherwise.

### GetChunkSizeOk

`func (o *SingleChunksAndEmbeddingsUploadInput) GetChunkSizeOk() (*int32, bool)`

GetChunkSizeOk returns a tuple with the ChunkSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChunkSize

`func (o *SingleChunksAndEmbeddingsUploadInput) SetChunkSize(v int32)`

SetChunkSize sets ChunkSize field to given value.

### HasChunkSize

`func (o *SingleChunksAndEmbeddingsUploadInput) HasChunkSize() bool`

HasChunkSize returns a boolean if a field has been set.

### SetChunkSizeNil

`func (o *SingleChunksAndEmbeddingsUploadInput) SetChunkSizeNil(b bool)`

 SetChunkSizeNil sets the value for ChunkSize to be an explicit nil

### UnsetChunkSize
`func (o *SingleChunksAndEmbeddingsUploadInput) UnsetChunkSize()`

UnsetChunkSize ensures that no value is present for ChunkSize, not even an explicit nil
### GetChunkOverlap

`func (o *SingleChunksAndEmbeddingsUploadInput) GetChunkOverlap() int32`

GetChunkOverlap returns the ChunkOverlap field if non-nil, zero value otherwise.

### GetChunkOverlapOk

`func (o *SingleChunksAndEmbeddingsUploadInput) GetChunkOverlapOk() (*int32, bool)`

GetChunkOverlapOk returns a tuple with the ChunkOverlap field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChunkOverlap

`func (o *SingleChunksAndEmbeddingsUploadInput) SetChunkOverlap(v int32)`

SetChunkOverlap sets ChunkOverlap field to given value.

### HasChunkOverlap

`func (o *SingleChunksAndEmbeddingsUploadInput) HasChunkOverlap() bool`

HasChunkOverlap returns a boolean if a field has been set.

### SetChunkOverlapNil

`func (o *SingleChunksAndEmbeddingsUploadInput) SetChunkOverlapNil(b bool)`

 SetChunkOverlapNil sets the value for ChunkOverlap to be an explicit nil

### UnsetChunkOverlap
`func (o *SingleChunksAndEmbeddingsUploadInput) UnsetChunkOverlap()`

UnsetChunkOverlap ensures that no value is present for ChunkOverlap, not even an explicit nil
### GetChunksAndEmbeddings

`func (o *SingleChunksAndEmbeddingsUploadInput) GetChunksAndEmbeddings() []ChunksAndEmbeddings`

GetChunksAndEmbeddings returns the ChunksAndEmbeddings field if non-nil, zero value otherwise.

### GetChunksAndEmbeddingsOk

`func (o *SingleChunksAndEmbeddingsUploadInput) GetChunksAndEmbeddingsOk() (*[]ChunksAndEmbeddings, bool)`

GetChunksAndEmbeddingsOk returns a tuple with the ChunksAndEmbeddings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChunksAndEmbeddings

`func (o *SingleChunksAndEmbeddingsUploadInput) SetChunksAndEmbeddings(v []ChunksAndEmbeddings)`

SetChunksAndEmbeddings sets ChunksAndEmbeddings field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


