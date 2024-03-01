# EmbeddingsAndChunksQueryInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pagination** | Pointer to [**Pagination**](Pagination.md) |  | [optional] 
**OrderBy** | Pointer to [**EmbeddingsAndChunksOrderByColumns**](EmbeddingsAndChunksOrderByColumns.md) |  | [optional] 
**OrderDir** | Pointer to [**OrderDir**](OrderDir.md) |  | [optional] 
**Filters** | [**EmbeddingsAndChunksFilters**](EmbeddingsAndChunksFilters.md) |  | 
**IncludeVectors** | Pointer to **bool** |  | [optional] [default to false]

## Methods

### NewEmbeddingsAndChunksQueryInput

`func NewEmbeddingsAndChunksQueryInput(filters EmbeddingsAndChunksFilters, ) *EmbeddingsAndChunksQueryInput`

NewEmbeddingsAndChunksQueryInput instantiates a new EmbeddingsAndChunksQueryInput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEmbeddingsAndChunksQueryInputWithDefaults

`func NewEmbeddingsAndChunksQueryInputWithDefaults() *EmbeddingsAndChunksQueryInput`

NewEmbeddingsAndChunksQueryInputWithDefaults instantiates a new EmbeddingsAndChunksQueryInput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPagination

`func (o *EmbeddingsAndChunksQueryInput) GetPagination() Pagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *EmbeddingsAndChunksQueryInput) GetPaginationOk() (*Pagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *EmbeddingsAndChunksQueryInput) SetPagination(v Pagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *EmbeddingsAndChunksQueryInput) HasPagination() bool`

HasPagination returns a boolean if a field has been set.

### GetOrderBy

`func (o *EmbeddingsAndChunksQueryInput) GetOrderBy() EmbeddingsAndChunksOrderByColumns`

GetOrderBy returns the OrderBy field if non-nil, zero value otherwise.

### GetOrderByOk

`func (o *EmbeddingsAndChunksQueryInput) GetOrderByOk() (*EmbeddingsAndChunksOrderByColumns, bool)`

GetOrderByOk returns a tuple with the OrderBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderBy

`func (o *EmbeddingsAndChunksQueryInput) SetOrderBy(v EmbeddingsAndChunksOrderByColumns)`

SetOrderBy sets OrderBy field to given value.

### HasOrderBy

`func (o *EmbeddingsAndChunksQueryInput) HasOrderBy() bool`

HasOrderBy returns a boolean if a field has been set.

### GetOrderDir

`func (o *EmbeddingsAndChunksQueryInput) GetOrderDir() OrderDir`

GetOrderDir returns the OrderDir field if non-nil, zero value otherwise.

### GetOrderDirOk

`func (o *EmbeddingsAndChunksQueryInput) GetOrderDirOk() (*OrderDir, bool)`

GetOrderDirOk returns a tuple with the OrderDir field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderDir

`func (o *EmbeddingsAndChunksQueryInput) SetOrderDir(v OrderDir)`

SetOrderDir sets OrderDir field to given value.

### HasOrderDir

`func (o *EmbeddingsAndChunksQueryInput) HasOrderDir() bool`

HasOrderDir returns a boolean if a field has been set.

### GetFilters

`func (o *EmbeddingsAndChunksQueryInput) GetFilters() EmbeddingsAndChunksFilters`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *EmbeddingsAndChunksQueryInput) GetFiltersOk() (*EmbeddingsAndChunksFilters, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *EmbeddingsAndChunksQueryInput) SetFilters(v EmbeddingsAndChunksFilters)`

SetFilters sets Filters field to given value.


### GetIncludeVectors

`func (o *EmbeddingsAndChunksQueryInput) GetIncludeVectors() bool`

GetIncludeVectors returns the IncludeVectors field if non-nil, zero value otherwise.

### GetIncludeVectorsOk

`func (o *EmbeddingsAndChunksQueryInput) GetIncludeVectorsOk() (*bool, bool)`

GetIncludeVectorsOk returns a tuple with the IncludeVectors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeVectors

`func (o *EmbeddingsAndChunksQueryInput) SetIncludeVectors(v bool)`

SetIncludeVectors sets IncludeVectors field to given value.

### HasIncludeVectors

`func (o *EmbeddingsAndChunksQueryInput) HasIncludeVectors() bool`

HasIncludeVectors returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


