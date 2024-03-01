# ChunksAndEmbeddingsUploadInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EmbeddingModel** | [**EmbeddingGenerators**](EmbeddingGenerators.md) |  | 
**ChunksAndEmbeddings** | [**[]SingleChunksAndEmbeddingsUploadInput**](SingleChunksAndEmbeddingsUploadInput.md) |  | 
**OverwriteExisting** | Pointer to **bool** |  | [optional] [default to false]

## Methods

### NewChunksAndEmbeddingsUploadInput

`func NewChunksAndEmbeddingsUploadInput(embeddingModel EmbeddingGenerators, chunksAndEmbeddings []SingleChunksAndEmbeddingsUploadInput, ) *ChunksAndEmbeddingsUploadInput`

NewChunksAndEmbeddingsUploadInput instantiates a new ChunksAndEmbeddingsUploadInput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChunksAndEmbeddingsUploadInputWithDefaults

`func NewChunksAndEmbeddingsUploadInputWithDefaults() *ChunksAndEmbeddingsUploadInput`

NewChunksAndEmbeddingsUploadInputWithDefaults instantiates a new ChunksAndEmbeddingsUploadInput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmbeddingModel

`func (o *ChunksAndEmbeddingsUploadInput) GetEmbeddingModel() EmbeddingGenerators`

GetEmbeddingModel returns the EmbeddingModel field if non-nil, zero value otherwise.

### GetEmbeddingModelOk

`func (o *ChunksAndEmbeddingsUploadInput) GetEmbeddingModelOk() (*EmbeddingGenerators, bool)`

GetEmbeddingModelOk returns a tuple with the EmbeddingModel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbeddingModel

`func (o *ChunksAndEmbeddingsUploadInput) SetEmbeddingModel(v EmbeddingGenerators)`

SetEmbeddingModel sets EmbeddingModel field to given value.


### GetChunksAndEmbeddings

`func (o *ChunksAndEmbeddingsUploadInput) GetChunksAndEmbeddings() []SingleChunksAndEmbeddingsUploadInput`

GetChunksAndEmbeddings returns the ChunksAndEmbeddings field if non-nil, zero value otherwise.

### GetChunksAndEmbeddingsOk

`func (o *ChunksAndEmbeddingsUploadInput) GetChunksAndEmbeddingsOk() (*[]SingleChunksAndEmbeddingsUploadInput, bool)`

GetChunksAndEmbeddingsOk returns a tuple with the ChunksAndEmbeddings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChunksAndEmbeddings

`func (o *ChunksAndEmbeddingsUploadInput) SetChunksAndEmbeddings(v []SingleChunksAndEmbeddingsUploadInput)`

SetChunksAndEmbeddings sets ChunksAndEmbeddings field to given value.


### GetOverwriteExisting

`func (o *ChunksAndEmbeddingsUploadInput) GetOverwriteExisting() bool`

GetOverwriteExisting returns the OverwriteExisting field if non-nil, zero value otherwise.

### GetOverwriteExistingOk

`func (o *ChunksAndEmbeddingsUploadInput) GetOverwriteExistingOk() (*bool, bool)`

GetOverwriteExistingOk returns a tuple with the OverwriteExisting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverwriteExisting

`func (o *ChunksAndEmbeddingsUploadInput) SetOverwriteExisting(v bool)`

SetOverwriteExisting sets OverwriteExisting field to given value.

### HasOverwriteExisting

`func (o *ChunksAndEmbeddingsUploadInput) HasOverwriteExisting() bool`

HasOverwriteExisting returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


