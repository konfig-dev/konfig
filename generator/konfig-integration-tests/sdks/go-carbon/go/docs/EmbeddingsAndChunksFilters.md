# EmbeddingsAndChunksFilters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserFileId** | **int32** |  | 
**EmbeddingModel** | Pointer to [**NullableEmbeddingGeneratorsNullable**](EmbeddingGeneratorsNullable.md) |  | [optional] [default to EMBEDDINGGENERATORSNULLABLE_OPENAI]

## Methods

### NewEmbeddingsAndChunksFilters

`func NewEmbeddingsAndChunksFilters(userFileId int32, ) *EmbeddingsAndChunksFilters`

NewEmbeddingsAndChunksFilters instantiates a new EmbeddingsAndChunksFilters object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEmbeddingsAndChunksFiltersWithDefaults

`func NewEmbeddingsAndChunksFiltersWithDefaults() *EmbeddingsAndChunksFilters`

NewEmbeddingsAndChunksFiltersWithDefaults instantiates a new EmbeddingsAndChunksFilters object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUserFileId

`func (o *EmbeddingsAndChunksFilters) GetUserFileId() int32`

GetUserFileId returns the UserFileId field if non-nil, zero value otherwise.

### GetUserFileIdOk

`func (o *EmbeddingsAndChunksFilters) GetUserFileIdOk() (*int32, bool)`

GetUserFileIdOk returns a tuple with the UserFileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserFileId

`func (o *EmbeddingsAndChunksFilters) SetUserFileId(v int32)`

SetUserFileId sets UserFileId field to given value.


### GetEmbeddingModel

`func (o *EmbeddingsAndChunksFilters) GetEmbeddingModel() EmbeddingGeneratorsNullable`

GetEmbeddingModel returns the EmbeddingModel field if non-nil, zero value otherwise.

### GetEmbeddingModelOk

`func (o *EmbeddingsAndChunksFilters) GetEmbeddingModelOk() (*EmbeddingGeneratorsNullable, bool)`

GetEmbeddingModelOk returns a tuple with the EmbeddingModel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbeddingModel

`func (o *EmbeddingsAndChunksFilters) SetEmbeddingModel(v EmbeddingGeneratorsNullable)`

SetEmbeddingModel sets EmbeddingModel field to given value.

### HasEmbeddingModel

`func (o *EmbeddingsAndChunksFilters) HasEmbeddingModel() bool`

HasEmbeddingModel returns a boolean if a field has been set.

### SetEmbeddingModelNil

`func (o *EmbeddingsAndChunksFilters) SetEmbeddingModelNil(b bool)`

 SetEmbeddingModelNil sets the value for EmbeddingModel to be an explicit nil

### UnsetEmbeddingModel
`func (o *EmbeddingsAndChunksFilters) UnsetEmbeddingModel()`

UnsetEmbeddingModel ensures that no value is present for EmbeddingModel, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


