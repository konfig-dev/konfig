# CSLHResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **string** |  | [optional] [default to "ok"]
**TotalHits** | **int32** |  | 
**Page** | **int32** |  | 
**TotalPages** | **int32** |  | 
**PageSize** | **int32** |  | 
**ClustersCount** | Pointer to **int32** |  | [optional] 
**Clusters** | Pointer to [**[]Cluster1**](Cluster1.md) |  | [optional] 
**UserInput** | **map[string]interface{}** |  | 
**Articles** | Pointer to **[]map[string]interface{}** |  | [optional] 

## Methods

### NewCSLHResponse

`func NewCSLHResponse(totalHits int32, page int32, totalPages int32, pageSize int32, userInput map[string]interface{}, ) *CSLHResponse`

NewCSLHResponse instantiates a new CSLHResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCSLHResponseWithDefaults

`func NewCSLHResponseWithDefaults() *CSLHResponse`

NewCSLHResponseWithDefaults instantiates a new CSLHResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *CSLHResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CSLHResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CSLHResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *CSLHResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTotalHits

`func (o *CSLHResponse) GetTotalHits() int32`

GetTotalHits returns the TotalHits field if non-nil, zero value otherwise.

### GetTotalHitsOk

`func (o *CSLHResponse) GetTotalHitsOk() (*int32, bool)`

GetTotalHitsOk returns a tuple with the TotalHits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalHits

`func (o *CSLHResponse) SetTotalHits(v int32)`

SetTotalHits sets TotalHits field to given value.


### GetPage

`func (o *CSLHResponse) GetPage() int32`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *CSLHResponse) GetPageOk() (*int32, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *CSLHResponse) SetPage(v int32)`

SetPage sets Page field to given value.


### GetTotalPages

`func (o *CSLHResponse) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *CSLHResponse) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *CSLHResponse) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.


### GetPageSize

`func (o *CSLHResponse) GetPageSize() int32`

GetPageSize returns the PageSize field if non-nil, zero value otherwise.

### GetPageSizeOk

`func (o *CSLHResponse) GetPageSizeOk() (*int32, bool)`

GetPageSizeOk returns a tuple with the PageSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageSize

`func (o *CSLHResponse) SetPageSize(v int32)`

SetPageSize sets PageSize field to given value.


### GetClustersCount

`func (o *CSLHResponse) GetClustersCount() int32`

GetClustersCount returns the ClustersCount field if non-nil, zero value otherwise.

### GetClustersCountOk

`func (o *CSLHResponse) GetClustersCountOk() (*int32, bool)`

GetClustersCountOk returns a tuple with the ClustersCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClustersCount

`func (o *CSLHResponse) SetClustersCount(v int32)`

SetClustersCount sets ClustersCount field to given value.

### HasClustersCount

`func (o *CSLHResponse) HasClustersCount() bool`

HasClustersCount returns a boolean if a field has been set.

### GetClusters

`func (o *CSLHResponse) GetClusters() []Cluster1`

GetClusters returns the Clusters field if non-nil, zero value otherwise.

### GetClustersOk

`func (o *CSLHResponse) GetClustersOk() (*[]Cluster1, bool)`

GetClustersOk returns a tuple with the Clusters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusters

`func (o *CSLHResponse) SetClusters(v []Cluster1)`

SetClusters sets Clusters field to given value.

### HasClusters

`func (o *CSLHResponse) HasClusters() bool`

HasClusters returns a boolean if a field has been set.

### GetUserInput

`func (o *CSLHResponse) GetUserInput() map[string]interface{}`

GetUserInput returns the UserInput field if non-nil, zero value otherwise.

### GetUserInputOk

`func (o *CSLHResponse) GetUserInputOk() (*map[string]interface{}, bool)`

GetUserInputOk returns a tuple with the UserInput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserInput

`func (o *CSLHResponse) SetUserInput(v map[string]interface{})`

SetUserInput sets UserInput field to given value.


### GetArticles

`func (o *CSLHResponse) GetArticles() []map[string]interface{}`

GetArticles returns the Articles field if non-nil, zero value otherwise.

### GetArticlesOk

`func (o *CSLHResponse) GetArticlesOk() (*[]map[string]interface{}, bool)`

GetArticlesOk returns a tuple with the Articles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArticles

`func (o *CSLHResponse) SetArticles(v []map[string]interface{})`

SetArticles sets Articles field to given value.

### HasArticles

`func (o *CSLHResponse) HasArticles() bool`

HasArticles returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


