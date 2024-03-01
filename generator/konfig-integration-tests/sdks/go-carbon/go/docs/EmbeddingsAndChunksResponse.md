# EmbeddingsAndChunksResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Results** | [**[]EmbeddingAndChunk**](EmbeddingAndChunk.md) |  | 
**Count** | **int32** |  | 

## Methods

### NewEmbeddingsAndChunksResponse

`func NewEmbeddingsAndChunksResponse(results []EmbeddingAndChunk, count int32, ) *EmbeddingsAndChunksResponse`

NewEmbeddingsAndChunksResponse instantiates a new EmbeddingsAndChunksResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEmbeddingsAndChunksResponseWithDefaults

`func NewEmbeddingsAndChunksResponseWithDefaults() *EmbeddingsAndChunksResponse`

NewEmbeddingsAndChunksResponseWithDefaults instantiates a new EmbeddingsAndChunksResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetResults

`func (o *EmbeddingsAndChunksResponse) GetResults() []EmbeddingAndChunk`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *EmbeddingsAndChunksResponse) GetResultsOk() (*[]EmbeddingAndChunk, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *EmbeddingsAndChunksResponse) SetResults(v []EmbeddingAndChunk)`

SetResults sets Results field to given value.


### GetCount

`func (o *EmbeddingsAndChunksResponse) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *EmbeddingsAndChunksResponse) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *EmbeddingsAndChunksResponse) SetCount(v int32)`

SetCount sets Count field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


