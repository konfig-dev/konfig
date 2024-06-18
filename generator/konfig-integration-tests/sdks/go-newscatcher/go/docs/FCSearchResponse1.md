# FCSearchResponse1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **string** |  | [optional] [default to "ok"]
**TotalHits** | Pointer to **int32** |  | [optional] 
**Page** | Pointer to **int32** |  | [optional] 
**TotalPages** | Pointer to **int32** |  | [optional] 
**PageSize** | Pointer to **int32** |  | [optional] 
**Articles** | Pointer to [**[]ArticlesPropertyInner3**](ArticlesPropertyInner3.md) |  | [optional] 
**UserInput** | **map[string]interface{}** |  | 
**ClustersCount** | Pointer to **int32** |  | [optional] 
**Clusters** | Pointer to [**[]Cluster1**](Cluster1.md) |  | [optional] 

## Methods

### NewFCSearchResponse1

`func NewFCSearchResponse1(userInput map[string]interface{}, ) *FCSearchResponse1`

NewFCSearchResponse1 instantiates a new FCSearchResponse1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFCSearchResponse1WithDefaults

`func NewFCSearchResponse1WithDefaults() *FCSearchResponse1`

NewFCSearchResponse1WithDefaults instantiates a new FCSearchResponse1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *FCSearchResponse1) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *FCSearchResponse1) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *FCSearchResponse1) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *FCSearchResponse1) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTotalHits

`func (o *FCSearchResponse1) GetTotalHits() int32`

GetTotalHits returns the TotalHits field if non-nil, zero value otherwise.

### GetTotalHitsOk

`func (o *FCSearchResponse1) GetTotalHitsOk() (*int32, bool)`

GetTotalHitsOk returns a tuple with the TotalHits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalHits

`func (o *FCSearchResponse1) SetTotalHits(v int32)`

SetTotalHits sets TotalHits field to given value.

### HasTotalHits

`func (o *FCSearchResponse1) HasTotalHits() bool`

HasTotalHits returns a boolean if a field has been set.

### GetPage

`func (o *FCSearchResponse1) GetPage() int32`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *FCSearchResponse1) GetPageOk() (*int32, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *FCSearchResponse1) SetPage(v int32)`

SetPage sets Page field to given value.

### HasPage

`func (o *FCSearchResponse1) HasPage() bool`

HasPage returns a boolean if a field has been set.

### GetTotalPages

`func (o *FCSearchResponse1) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *FCSearchResponse1) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *FCSearchResponse1) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *FCSearchResponse1) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetPageSize

`func (o *FCSearchResponse1) GetPageSize() int32`

GetPageSize returns the PageSize field if non-nil, zero value otherwise.

### GetPageSizeOk

`func (o *FCSearchResponse1) GetPageSizeOk() (*int32, bool)`

GetPageSizeOk returns a tuple with the PageSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageSize

`func (o *FCSearchResponse1) SetPageSize(v int32)`

SetPageSize sets PageSize field to given value.

### HasPageSize

`func (o *FCSearchResponse1) HasPageSize() bool`

HasPageSize returns a boolean if a field has been set.

### GetArticles

`func (o *FCSearchResponse1) GetArticles() []ArticlesPropertyInner3`

GetArticles returns the Articles field if non-nil, zero value otherwise.

### GetArticlesOk

`func (o *FCSearchResponse1) GetArticlesOk() (*[]ArticlesPropertyInner3, bool)`

GetArticlesOk returns a tuple with the Articles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArticles

`func (o *FCSearchResponse1) SetArticles(v []ArticlesPropertyInner3)`

SetArticles sets Articles field to given value.

### HasArticles

`func (o *FCSearchResponse1) HasArticles() bool`

HasArticles returns a boolean if a field has been set.

### GetUserInput

`func (o *FCSearchResponse1) GetUserInput() map[string]interface{}`

GetUserInput returns the UserInput field if non-nil, zero value otherwise.

### GetUserInputOk

`func (o *FCSearchResponse1) GetUserInputOk() (*map[string]interface{}, bool)`

GetUserInputOk returns a tuple with the UserInput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserInput

`func (o *FCSearchResponse1) SetUserInput(v map[string]interface{})`

SetUserInput sets UserInput field to given value.


### GetClustersCount

`func (o *FCSearchResponse1) GetClustersCount() int32`

GetClustersCount returns the ClustersCount field if non-nil, zero value otherwise.

### GetClustersCountOk

`func (o *FCSearchResponse1) GetClustersCountOk() (*int32, bool)`

GetClustersCountOk returns a tuple with the ClustersCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClustersCount

`func (o *FCSearchResponse1) SetClustersCount(v int32)`

SetClustersCount sets ClustersCount field to given value.

### HasClustersCount

`func (o *FCSearchResponse1) HasClustersCount() bool`

HasClustersCount returns a boolean if a field has been set.

### GetClusters

`func (o *FCSearchResponse1) GetClusters() []Cluster1`

GetClusters returns the Clusters field if non-nil, zero value otherwise.

### GetClustersOk

`func (o *FCSearchResponse1) GetClustersOk() (*[]Cluster1, bool)`

GetClustersOk returns a tuple with the Clusters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusters

`func (o *FCSearchResponse1) SetClusters(v []Cluster1)`

SetClusters sets Clusters field to given value.

### HasClusters

`func (o *FCSearchResponse1) HasClusters() bool`

HasClusters returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


