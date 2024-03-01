# ChunksAndEmbeddings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChunkNumber** | **NullableInt32** |  | 
**Chunk** | **string** |  | 
**Embedding** | **[]float32** |  | 

## Methods

### NewChunksAndEmbeddings

`func NewChunksAndEmbeddings(chunkNumber NullableInt32, chunk string, embedding []float32, ) *ChunksAndEmbeddings`

NewChunksAndEmbeddings instantiates a new ChunksAndEmbeddings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChunksAndEmbeddingsWithDefaults

`func NewChunksAndEmbeddingsWithDefaults() *ChunksAndEmbeddings`

NewChunksAndEmbeddingsWithDefaults instantiates a new ChunksAndEmbeddings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChunkNumber

`func (o *ChunksAndEmbeddings) GetChunkNumber() int32`

GetChunkNumber returns the ChunkNumber field if non-nil, zero value otherwise.

### GetChunkNumberOk

`func (o *ChunksAndEmbeddings) GetChunkNumberOk() (*int32, bool)`

GetChunkNumberOk returns a tuple with the ChunkNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChunkNumber

`func (o *ChunksAndEmbeddings) SetChunkNumber(v int32)`

SetChunkNumber sets ChunkNumber field to given value.


### SetChunkNumberNil

`func (o *ChunksAndEmbeddings) SetChunkNumberNil(b bool)`

 SetChunkNumberNil sets the value for ChunkNumber to be an explicit nil

### UnsetChunkNumber
`func (o *ChunksAndEmbeddings) UnsetChunkNumber()`

UnsetChunkNumber ensures that no value is present for ChunkNumber, not even an explicit nil
### GetChunk

`func (o *ChunksAndEmbeddings) GetChunk() string`

GetChunk returns the Chunk field if non-nil, zero value otherwise.

### GetChunkOk

`func (o *ChunksAndEmbeddings) GetChunkOk() (*string, bool)`

GetChunkOk returns a tuple with the Chunk field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChunk

`func (o *ChunksAndEmbeddings) SetChunk(v string)`

SetChunk sets Chunk field to given value.


### GetEmbedding

`func (o *ChunksAndEmbeddings) GetEmbedding() []float32`

GetEmbedding returns the Embedding field if non-nil, zero value otherwise.

### GetEmbeddingOk

`func (o *ChunksAndEmbeddings) GetEmbeddingOk() (*[]float32, bool)`

GetEmbeddingOk returns a tuple with the Embedding field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbedding

`func (o *ChunksAndEmbeddings) SetEmbedding(v []float32)`

SetEmbedding sets Embedding field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


