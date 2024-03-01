# WebscrapeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Tags** | Pointer to [**map[string]Tags1**](Tags1.md) |  | [optional] [default to {}]
**Url** | **string** |  | 
**RecursionDepth** | Pointer to **NullableInt32** |  | [optional] [default to 3]
**MaxPagesToScrape** | Pointer to **NullableInt32** |  | [optional] [default to 100]
**ChunkSize** | Pointer to **NullableInt32** |  | [optional] [default to 1500]
**ChunkOverlap** | Pointer to **NullableInt32** |  | [optional] [default to 20]
**SkipEmbeddingGeneration** | Pointer to **NullableBool** |  | [optional] [default to false]
**EnableAutoSync** | Pointer to **NullableBool** |  | [optional] [default to false]
**GenerateSparseVectors** | Pointer to **NullableBool** |  | [optional] [default to false]
**PrependFilenameToChunks** | Pointer to **NullableBool** |  | [optional] [default to false]
**HtmlTagsToSkip** | Pointer to **[]string** |  | [optional] [default to []]
**CssClassesToSkip** | Pointer to **[]string** |  | [optional] [default to []]
**CssSelectorsToSkip** | Pointer to **[]string** |  | [optional] [default to []]
**EmbeddingModel** | Pointer to [**EmbeddingGenerators**](EmbeddingGenerators.md) |  | [optional] 

## Methods

### NewWebscrapeRequest

`func NewWebscrapeRequest(url string, ) *WebscrapeRequest`

NewWebscrapeRequest instantiates a new WebscrapeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWebscrapeRequestWithDefaults

`func NewWebscrapeRequestWithDefaults() *WebscrapeRequest`

NewWebscrapeRequestWithDefaults instantiates a new WebscrapeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTags

`func (o *WebscrapeRequest) GetTags() map[string]Tags1`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *WebscrapeRequest) GetTagsOk() (*map[string]Tags1, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *WebscrapeRequest) SetTags(v map[string]Tags1)`

SetTags sets Tags field to given value.

### HasTags

`func (o *WebscrapeRequest) HasTags() bool`

HasTags returns a boolean if a field has been set.

### SetTagsNil

`func (o *WebscrapeRequest) SetTagsNil(b bool)`

 SetTagsNil sets the value for Tags to be an explicit nil

### UnsetTags
`func (o *WebscrapeRequest) UnsetTags()`

UnsetTags ensures that no value is present for Tags, not even an explicit nil
### GetUrl

`func (o *WebscrapeRequest) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *WebscrapeRequest) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *WebscrapeRequest) SetUrl(v string)`

SetUrl sets Url field to given value.


### GetRecursionDepth

`func (o *WebscrapeRequest) GetRecursionDepth() int32`

GetRecursionDepth returns the RecursionDepth field if non-nil, zero value otherwise.

### GetRecursionDepthOk

`func (o *WebscrapeRequest) GetRecursionDepthOk() (*int32, bool)`

GetRecursionDepthOk returns a tuple with the RecursionDepth field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecursionDepth

`func (o *WebscrapeRequest) SetRecursionDepth(v int32)`

SetRecursionDepth sets RecursionDepth field to given value.

### HasRecursionDepth

`func (o *WebscrapeRequest) HasRecursionDepth() bool`

HasRecursionDepth returns a boolean if a field has been set.

### SetRecursionDepthNil

`func (o *WebscrapeRequest) SetRecursionDepthNil(b bool)`

 SetRecursionDepthNil sets the value for RecursionDepth to be an explicit nil

### UnsetRecursionDepth
`func (o *WebscrapeRequest) UnsetRecursionDepth()`

UnsetRecursionDepth ensures that no value is present for RecursionDepth, not even an explicit nil
### GetMaxPagesToScrape

`func (o *WebscrapeRequest) GetMaxPagesToScrape() int32`

GetMaxPagesToScrape returns the MaxPagesToScrape field if non-nil, zero value otherwise.

### GetMaxPagesToScrapeOk

`func (o *WebscrapeRequest) GetMaxPagesToScrapeOk() (*int32, bool)`

GetMaxPagesToScrapeOk returns a tuple with the MaxPagesToScrape field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxPagesToScrape

`func (o *WebscrapeRequest) SetMaxPagesToScrape(v int32)`

SetMaxPagesToScrape sets MaxPagesToScrape field to given value.

### HasMaxPagesToScrape

`func (o *WebscrapeRequest) HasMaxPagesToScrape() bool`

HasMaxPagesToScrape returns a boolean if a field has been set.

### SetMaxPagesToScrapeNil

`func (o *WebscrapeRequest) SetMaxPagesToScrapeNil(b bool)`

 SetMaxPagesToScrapeNil sets the value for MaxPagesToScrape to be an explicit nil

### UnsetMaxPagesToScrape
`func (o *WebscrapeRequest) UnsetMaxPagesToScrape()`

UnsetMaxPagesToScrape ensures that no value is present for MaxPagesToScrape, not even an explicit nil
### GetChunkSize

`func (o *WebscrapeRequest) GetChunkSize() int32`

GetChunkSize returns the ChunkSize field if non-nil, zero value otherwise.

### GetChunkSizeOk

`func (o *WebscrapeRequest) GetChunkSizeOk() (*int32, bool)`

GetChunkSizeOk returns a tuple with the ChunkSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChunkSize

`func (o *WebscrapeRequest) SetChunkSize(v int32)`

SetChunkSize sets ChunkSize field to given value.

### HasChunkSize

`func (o *WebscrapeRequest) HasChunkSize() bool`

HasChunkSize returns a boolean if a field has been set.

### SetChunkSizeNil

`func (o *WebscrapeRequest) SetChunkSizeNil(b bool)`

 SetChunkSizeNil sets the value for ChunkSize to be an explicit nil

### UnsetChunkSize
`func (o *WebscrapeRequest) UnsetChunkSize()`

UnsetChunkSize ensures that no value is present for ChunkSize, not even an explicit nil
### GetChunkOverlap

`func (o *WebscrapeRequest) GetChunkOverlap() int32`

GetChunkOverlap returns the ChunkOverlap field if non-nil, zero value otherwise.

### GetChunkOverlapOk

`func (o *WebscrapeRequest) GetChunkOverlapOk() (*int32, bool)`

GetChunkOverlapOk returns a tuple with the ChunkOverlap field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChunkOverlap

`func (o *WebscrapeRequest) SetChunkOverlap(v int32)`

SetChunkOverlap sets ChunkOverlap field to given value.

### HasChunkOverlap

`func (o *WebscrapeRequest) HasChunkOverlap() bool`

HasChunkOverlap returns a boolean if a field has been set.

### SetChunkOverlapNil

`func (o *WebscrapeRequest) SetChunkOverlapNil(b bool)`

 SetChunkOverlapNil sets the value for ChunkOverlap to be an explicit nil

### UnsetChunkOverlap
`func (o *WebscrapeRequest) UnsetChunkOverlap()`

UnsetChunkOverlap ensures that no value is present for ChunkOverlap, not even an explicit nil
### GetSkipEmbeddingGeneration

`func (o *WebscrapeRequest) GetSkipEmbeddingGeneration() bool`

GetSkipEmbeddingGeneration returns the SkipEmbeddingGeneration field if non-nil, zero value otherwise.

### GetSkipEmbeddingGenerationOk

`func (o *WebscrapeRequest) GetSkipEmbeddingGenerationOk() (*bool, bool)`

GetSkipEmbeddingGenerationOk returns a tuple with the SkipEmbeddingGeneration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSkipEmbeddingGeneration

`func (o *WebscrapeRequest) SetSkipEmbeddingGeneration(v bool)`

SetSkipEmbeddingGeneration sets SkipEmbeddingGeneration field to given value.

### HasSkipEmbeddingGeneration

`func (o *WebscrapeRequest) HasSkipEmbeddingGeneration() bool`

HasSkipEmbeddingGeneration returns a boolean if a field has been set.

### SetSkipEmbeddingGenerationNil

`func (o *WebscrapeRequest) SetSkipEmbeddingGenerationNil(b bool)`

 SetSkipEmbeddingGenerationNil sets the value for SkipEmbeddingGeneration to be an explicit nil

### UnsetSkipEmbeddingGeneration
`func (o *WebscrapeRequest) UnsetSkipEmbeddingGeneration()`

UnsetSkipEmbeddingGeneration ensures that no value is present for SkipEmbeddingGeneration, not even an explicit nil
### GetEnableAutoSync

`func (o *WebscrapeRequest) GetEnableAutoSync() bool`

GetEnableAutoSync returns the EnableAutoSync field if non-nil, zero value otherwise.

### GetEnableAutoSyncOk

`func (o *WebscrapeRequest) GetEnableAutoSyncOk() (*bool, bool)`

GetEnableAutoSyncOk returns a tuple with the EnableAutoSync field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnableAutoSync

`func (o *WebscrapeRequest) SetEnableAutoSync(v bool)`

SetEnableAutoSync sets EnableAutoSync field to given value.

### HasEnableAutoSync

`func (o *WebscrapeRequest) HasEnableAutoSync() bool`

HasEnableAutoSync returns a boolean if a field has been set.

### SetEnableAutoSyncNil

`func (o *WebscrapeRequest) SetEnableAutoSyncNil(b bool)`

 SetEnableAutoSyncNil sets the value for EnableAutoSync to be an explicit nil

### UnsetEnableAutoSync
`func (o *WebscrapeRequest) UnsetEnableAutoSync()`

UnsetEnableAutoSync ensures that no value is present for EnableAutoSync, not even an explicit nil
### GetGenerateSparseVectors

`func (o *WebscrapeRequest) GetGenerateSparseVectors() bool`

GetGenerateSparseVectors returns the GenerateSparseVectors field if non-nil, zero value otherwise.

### GetGenerateSparseVectorsOk

`func (o *WebscrapeRequest) GetGenerateSparseVectorsOk() (*bool, bool)`

GetGenerateSparseVectorsOk returns a tuple with the GenerateSparseVectors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenerateSparseVectors

`func (o *WebscrapeRequest) SetGenerateSparseVectors(v bool)`

SetGenerateSparseVectors sets GenerateSparseVectors field to given value.

### HasGenerateSparseVectors

`func (o *WebscrapeRequest) HasGenerateSparseVectors() bool`

HasGenerateSparseVectors returns a boolean if a field has been set.

### SetGenerateSparseVectorsNil

`func (o *WebscrapeRequest) SetGenerateSparseVectorsNil(b bool)`

 SetGenerateSparseVectorsNil sets the value for GenerateSparseVectors to be an explicit nil

### UnsetGenerateSparseVectors
`func (o *WebscrapeRequest) UnsetGenerateSparseVectors()`

UnsetGenerateSparseVectors ensures that no value is present for GenerateSparseVectors, not even an explicit nil
### GetPrependFilenameToChunks

`func (o *WebscrapeRequest) GetPrependFilenameToChunks() bool`

GetPrependFilenameToChunks returns the PrependFilenameToChunks field if non-nil, zero value otherwise.

### GetPrependFilenameToChunksOk

`func (o *WebscrapeRequest) GetPrependFilenameToChunksOk() (*bool, bool)`

GetPrependFilenameToChunksOk returns a tuple with the PrependFilenameToChunks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrependFilenameToChunks

`func (o *WebscrapeRequest) SetPrependFilenameToChunks(v bool)`

SetPrependFilenameToChunks sets PrependFilenameToChunks field to given value.

### HasPrependFilenameToChunks

`func (o *WebscrapeRequest) HasPrependFilenameToChunks() bool`

HasPrependFilenameToChunks returns a boolean if a field has been set.

### SetPrependFilenameToChunksNil

`func (o *WebscrapeRequest) SetPrependFilenameToChunksNil(b bool)`

 SetPrependFilenameToChunksNil sets the value for PrependFilenameToChunks to be an explicit nil

### UnsetPrependFilenameToChunks
`func (o *WebscrapeRequest) UnsetPrependFilenameToChunks()`

UnsetPrependFilenameToChunks ensures that no value is present for PrependFilenameToChunks, not even an explicit nil
### GetHtmlTagsToSkip

`func (o *WebscrapeRequest) GetHtmlTagsToSkip() []string`

GetHtmlTagsToSkip returns the HtmlTagsToSkip field if non-nil, zero value otherwise.

### GetHtmlTagsToSkipOk

`func (o *WebscrapeRequest) GetHtmlTagsToSkipOk() (*[]string, bool)`

GetHtmlTagsToSkipOk returns a tuple with the HtmlTagsToSkip field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHtmlTagsToSkip

`func (o *WebscrapeRequest) SetHtmlTagsToSkip(v []string)`

SetHtmlTagsToSkip sets HtmlTagsToSkip field to given value.

### HasHtmlTagsToSkip

`func (o *WebscrapeRequest) HasHtmlTagsToSkip() bool`

HasHtmlTagsToSkip returns a boolean if a field has been set.

### SetHtmlTagsToSkipNil

`func (o *WebscrapeRequest) SetHtmlTagsToSkipNil(b bool)`

 SetHtmlTagsToSkipNil sets the value for HtmlTagsToSkip to be an explicit nil

### UnsetHtmlTagsToSkip
`func (o *WebscrapeRequest) UnsetHtmlTagsToSkip()`

UnsetHtmlTagsToSkip ensures that no value is present for HtmlTagsToSkip, not even an explicit nil
### GetCssClassesToSkip

`func (o *WebscrapeRequest) GetCssClassesToSkip() []string`

GetCssClassesToSkip returns the CssClassesToSkip field if non-nil, zero value otherwise.

### GetCssClassesToSkipOk

`func (o *WebscrapeRequest) GetCssClassesToSkipOk() (*[]string, bool)`

GetCssClassesToSkipOk returns a tuple with the CssClassesToSkip field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCssClassesToSkip

`func (o *WebscrapeRequest) SetCssClassesToSkip(v []string)`

SetCssClassesToSkip sets CssClassesToSkip field to given value.

### HasCssClassesToSkip

`func (o *WebscrapeRequest) HasCssClassesToSkip() bool`

HasCssClassesToSkip returns a boolean if a field has been set.

### SetCssClassesToSkipNil

`func (o *WebscrapeRequest) SetCssClassesToSkipNil(b bool)`

 SetCssClassesToSkipNil sets the value for CssClassesToSkip to be an explicit nil

### UnsetCssClassesToSkip
`func (o *WebscrapeRequest) UnsetCssClassesToSkip()`

UnsetCssClassesToSkip ensures that no value is present for CssClassesToSkip, not even an explicit nil
### GetCssSelectorsToSkip

`func (o *WebscrapeRequest) GetCssSelectorsToSkip() []string`

GetCssSelectorsToSkip returns the CssSelectorsToSkip field if non-nil, zero value otherwise.

### GetCssSelectorsToSkipOk

`func (o *WebscrapeRequest) GetCssSelectorsToSkipOk() (*[]string, bool)`

GetCssSelectorsToSkipOk returns a tuple with the CssSelectorsToSkip field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCssSelectorsToSkip

`func (o *WebscrapeRequest) SetCssSelectorsToSkip(v []string)`

SetCssSelectorsToSkip sets CssSelectorsToSkip field to given value.

### HasCssSelectorsToSkip

`func (o *WebscrapeRequest) HasCssSelectorsToSkip() bool`

HasCssSelectorsToSkip returns a boolean if a field has been set.

### SetCssSelectorsToSkipNil

`func (o *WebscrapeRequest) SetCssSelectorsToSkipNil(b bool)`

 SetCssSelectorsToSkipNil sets the value for CssSelectorsToSkip to be an explicit nil

### UnsetCssSelectorsToSkip
`func (o *WebscrapeRequest) UnsetCssSelectorsToSkip()`

UnsetCssSelectorsToSkip ensures that no value is present for CssSelectorsToSkip, not even an explicit nil
### GetEmbeddingModel

`func (o *WebscrapeRequest) GetEmbeddingModel() EmbeddingGenerators`

GetEmbeddingModel returns the EmbeddingModel field if non-nil, zero value otherwise.

### GetEmbeddingModelOk

`func (o *WebscrapeRequest) GetEmbeddingModelOk() (*EmbeddingGenerators, bool)`

GetEmbeddingModelOk returns a tuple with the EmbeddingModel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmbeddingModel

`func (o *WebscrapeRequest) SetEmbeddingModel(v EmbeddingGenerators)`

SetEmbeddingModel sets EmbeddingModel field to given value.

### HasEmbeddingModel

`func (o *WebscrapeRequest) HasEmbeddingModel() bool`

HasEmbeddingModel returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


