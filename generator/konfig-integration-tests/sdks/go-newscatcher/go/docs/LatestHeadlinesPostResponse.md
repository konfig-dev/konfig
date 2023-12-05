# LatestHeadlinesPostResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **string** |  | [optional] [default to "No Matches for your search"]
**TotalHits** | **int32** |  | [default to 0]
**Page** | **int32** |  | [default to 0]
**TotalPages** | **int32** |  | [default to 0]
**PageSize** | **int32** |  | [default to 0]
**ClustersCount** | **int32** |  | 
**Clusters** | [**[]Cluster**](Cluster.md) |  | 
**UserInput** | **map[string]interface{}** |  | 
**Articles** | [**[]DtoResponsesLatestHeadlinesResponseArticleResult**](DtoResponsesLatestHeadlinesResponseArticleResult.md) |  | [default to []]

## Methods

### NewLatestHeadlinesPostResponse

`func NewLatestHeadlinesPostResponse(totalHits int32, page int32, totalPages int32, pageSize int32, clustersCount int32, clusters []Cluster, userInput map[string]interface{}, articles []DtoResponsesLatestHeadlinesResponseArticleResult, ) *LatestHeadlinesPostResponse`

NewLatestHeadlinesPostResponse instantiates a new LatestHeadlinesPostResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLatestHeadlinesPostResponseWithDefaults

`func NewLatestHeadlinesPostResponseWithDefaults() *LatestHeadlinesPostResponse`

NewLatestHeadlinesPostResponseWithDefaults instantiates a new LatestHeadlinesPostResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *LatestHeadlinesPostResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *LatestHeadlinesPostResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *LatestHeadlinesPostResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *LatestHeadlinesPostResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTotalHits

`func (o *LatestHeadlinesPostResponse) GetTotalHits() int32`

GetTotalHits returns the TotalHits field if non-nil, zero value otherwise.

### GetTotalHitsOk

`func (o *LatestHeadlinesPostResponse) GetTotalHitsOk() (*int32, bool)`

GetTotalHitsOk returns a tuple with the TotalHits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalHits

`func (o *LatestHeadlinesPostResponse) SetTotalHits(v int32)`

SetTotalHits sets TotalHits field to given value.


### GetPage

`func (o *LatestHeadlinesPostResponse) GetPage() int32`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *LatestHeadlinesPostResponse) GetPageOk() (*int32, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *LatestHeadlinesPostResponse) SetPage(v int32)`

SetPage sets Page field to given value.


### GetTotalPages

`func (o *LatestHeadlinesPostResponse) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *LatestHeadlinesPostResponse) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *LatestHeadlinesPostResponse) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.


### GetPageSize

`func (o *LatestHeadlinesPostResponse) GetPageSize() int32`

GetPageSize returns the PageSize field if non-nil, zero value otherwise.

### GetPageSizeOk

`func (o *LatestHeadlinesPostResponse) GetPageSizeOk() (*int32, bool)`

GetPageSizeOk returns a tuple with the PageSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageSize

`func (o *LatestHeadlinesPostResponse) SetPageSize(v int32)`

SetPageSize sets PageSize field to given value.


### GetClustersCount

`func (o *LatestHeadlinesPostResponse) GetClustersCount() int32`

GetClustersCount returns the ClustersCount field if non-nil, zero value otherwise.

### GetClustersCountOk

`func (o *LatestHeadlinesPostResponse) GetClustersCountOk() (*int32, bool)`

GetClustersCountOk returns a tuple with the ClustersCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClustersCount

`func (o *LatestHeadlinesPostResponse) SetClustersCount(v int32)`

SetClustersCount sets ClustersCount field to given value.


### GetClusters

`func (o *LatestHeadlinesPostResponse) GetClusters() []Cluster`

GetClusters returns the Clusters field if non-nil, zero value otherwise.

### GetClustersOk

`func (o *LatestHeadlinesPostResponse) GetClustersOk() (*[]Cluster, bool)`

GetClustersOk returns a tuple with the Clusters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusters

`func (o *LatestHeadlinesPostResponse) SetClusters(v []Cluster)`

SetClusters sets Clusters field to given value.


### GetUserInput

`func (o *LatestHeadlinesPostResponse) GetUserInput() map[string]interface{}`

GetUserInput returns the UserInput field if non-nil, zero value otherwise.

### GetUserInputOk

`func (o *LatestHeadlinesPostResponse) GetUserInputOk() (*map[string]interface{}, bool)`

GetUserInputOk returns a tuple with the UserInput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserInput

`func (o *LatestHeadlinesPostResponse) SetUserInput(v map[string]interface{})`

SetUserInput sets UserInput field to given value.


### GetArticles

`func (o *LatestHeadlinesPostResponse) GetArticles() []DtoResponsesLatestHeadlinesResponseArticleResult`

GetArticles returns the Articles field if non-nil, zero value otherwise.

### GetArticlesOk

`func (o *LatestHeadlinesPostResponse) GetArticlesOk() (*[]DtoResponsesLatestHeadlinesResponseArticleResult, bool)`

GetArticlesOk returns a tuple with the Articles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArticles

`func (o *LatestHeadlinesPostResponse) SetArticles(v []DtoResponsesLatestHeadlinesResponseArticleResult)`

SetArticles sets Articles field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


