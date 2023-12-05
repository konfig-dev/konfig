# SearchGetResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **string** |  | [optional] [default to "ok"]
**TotalHits** | **int32** |  | 
**Page** | **int32** |  | 
**TotalPages** | **int32** |  | 
**PageSize** | **int32** |  | 
**Articles** | [**[]DtoResponsesSearchResponseArticleResult**](DtoResponsesSearchResponseArticleResult.md) |  | [default to []]
**UserInput** | **map[string]interface{}** |  | 
**ClustersCount** | **int32** |  | 
**Clusters** | [**[]Cluster**](Cluster.md) |  | 

## Methods

### NewSearchGetResponse

`func NewSearchGetResponse(totalHits int32, page int32, totalPages int32, pageSize int32, articles []DtoResponsesSearchResponseArticleResult, userInput map[string]interface{}, clustersCount int32, clusters []Cluster, ) *SearchGetResponse`

NewSearchGetResponse instantiates a new SearchGetResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchGetResponseWithDefaults

`func NewSearchGetResponseWithDefaults() *SearchGetResponse`

NewSearchGetResponseWithDefaults instantiates a new SearchGetResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *SearchGetResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SearchGetResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SearchGetResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *SearchGetResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTotalHits

`func (o *SearchGetResponse) GetTotalHits() int32`

GetTotalHits returns the TotalHits field if non-nil, zero value otherwise.

### GetTotalHitsOk

`func (o *SearchGetResponse) GetTotalHitsOk() (*int32, bool)`

GetTotalHitsOk returns a tuple with the TotalHits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalHits

`func (o *SearchGetResponse) SetTotalHits(v int32)`

SetTotalHits sets TotalHits field to given value.


### GetPage

`func (o *SearchGetResponse) GetPage() int32`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *SearchGetResponse) GetPageOk() (*int32, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *SearchGetResponse) SetPage(v int32)`

SetPage sets Page field to given value.


### GetTotalPages

`func (o *SearchGetResponse) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *SearchGetResponse) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *SearchGetResponse) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.


### GetPageSize

`func (o *SearchGetResponse) GetPageSize() int32`

GetPageSize returns the PageSize field if non-nil, zero value otherwise.

### GetPageSizeOk

`func (o *SearchGetResponse) GetPageSizeOk() (*int32, bool)`

GetPageSizeOk returns a tuple with the PageSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageSize

`func (o *SearchGetResponse) SetPageSize(v int32)`

SetPageSize sets PageSize field to given value.


### GetArticles

`func (o *SearchGetResponse) GetArticles() []DtoResponsesSearchResponseArticleResult`

GetArticles returns the Articles field if non-nil, zero value otherwise.

### GetArticlesOk

`func (o *SearchGetResponse) GetArticlesOk() (*[]DtoResponsesSearchResponseArticleResult, bool)`

GetArticlesOk returns a tuple with the Articles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArticles

`func (o *SearchGetResponse) SetArticles(v []DtoResponsesSearchResponseArticleResult)`

SetArticles sets Articles field to given value.


### GetUserInput

`func (o *SearchGetResponse) GetUserInput() map[string]interface{}`

GetUserInput returns the UserInput field if non-nil, zero value otherwise.

### GetUserInputOk

`func (o *SearchGetResponse) GetUserInputOk() (*map[string]interface{}, bool)`

GetUserInputOk returns a tuple with the UserInput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserInput

`func (o *SearchGetResponse) SetUserInput(v map[string]interface{})`

SetUserInput sets UserInput field to given value.


### GetClustersCount

`func (o *SearchGetResponse) GetClustersCount() int32`

GetClustersCount returns the ClustersCount field if non-nil, zero value otherwise.

### GetClustersCountOk

`func (o *SearchGetResponse) GetClustersCountOk() (*int32, bool)`

GetClustersCountOk returns a tuple with the ClustersCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClustersCount

`func (o *SearchGetResponse) SetClustersCount(v int32)`

SetClustersCount sets ClustersCount field to given value.


### GetClusters

`func (o *SearchGetResponse) GetClusters() []Cluster`

GetClusters returns the Clusters field if non-nil, zero value otherwise.

### GetClustersOk

`func (o *SearchGetResponse) GetClustersOk() (*[]Cluster, bool)`

GetClustersOk returns a tuple with the Clusters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusters

`func (o *SearchGetResponse) SetClusters(v []Cluster)`

SetClusters sets Clusters field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


