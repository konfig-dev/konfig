# ClusteringSearchResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **string** |  | [optional] [default to "ok"]
**TotalHits** | **int32** |  | 
**Page** | **int32** |  | 
**TotalPages** | **int32** |  | 
**PageSize** | **int32** |  | 
**ClustersCount** | **int32** |  | 
**Clusters** | [**[]Cluster**](Cluster.md) |  | 
**UserInput** | **map[string]interface{}** |  | 

## Methods

### NewClusteringSearchResponse

`func NewClusteringSearchResponse(totalHits int32, page int32, totalPages int32, pageSize int32, clustersCount int32, clusters []Cluster, userInput map[string]interface{}, ) *ClusteringSearchResponse`

NewClusteringSearchResponse instantiates a new ClusteringSearchResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewClusteringSearchResponseWithDefaults

`func NewClusteringSearchResponseWithDefaults() *ClusteringSearchResponse`

NewClusteringSearchResponseWithDefaults instantiates a new ClusteringSearchResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *ClusteringSearchResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ClusteringSearchResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ClusteringSearchResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ClusteringSearchResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTotalHits

`func (o *ClusteringSearchResponse) GetTotalHits() int32`

GetTotalHits returns the TotalHits field if non-nil, zero value otherwise.

### GetTotalHitsOk

`func (o *ClusteringSearchResponse) GetTotalHitsOk() (*int32, bool)`

GetTotalHitsOk returns a tuple with the TotalHits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalHits

`func (o *ClusteringSearchResponse) SetTotalHits(v int32)`

SetTotalHits sets TotalHits field to given value.


### GetPage

`func (o *ClusteringSearchResponse) GetPage() int32`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *ClusteringSearchResponse) GetPageOk() (*int32, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *ClusteringSearchResponse) SetPage(v int32)`

SetPage sets Page field to given value.


### GetTotalPages

`func (o *ClusteringSearchResponse) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *ClusteringSearchResponse) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *ClusteringSearchResponse) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.


### GetPageSize

`func (o *ClusteringSearchResponse) GetPageSize() int32`

GetPageSize returns the PageSize field if non-nil, zero value otherwise.

### GetPageSizeOk

`func (o *ClusteringSearchResponse) GetPageSizeOk() (*int32, bool)`

GetPageSizeOk returns a tuple with the PageSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageSize

`func (o *ClusteringSearchResponse) SetPageSize(v int32)`

SetPageSize sets PageSize field to given value.


### GetClustersCount

`func (o *ClusteringSearchResponse) GetClustersCount() int32`

GetClustersCount returns the ClustersCount field if non-nil, zero value otherwise.

### GetClustersCountOk

`func (o *ClusteringSearchResponse) GetClustersCountOk() (*int32, bool)`

GetClustersCountOk returns a tuple with the ClustersCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClustersCount

`func (o *ClusteringSearchResponse) SetClustersCount(v int32)`

SetClustersCount sets ClustersCount field to given value.


### GetClusters

`func (o *ClusteringSearchResponse) GetClusters() []Cluster`

GetClusters returns the Clusters field if non-nil, zero value otherwise.

### GetClustersOk

`func (o *ClusteringSearchResponse) GetClustersOk() (*[]Cluster, bool)`

GetClustersOk returns a tuple with the Clusters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusters

`func (o *ClusteringSearchResponse) SetClusters(v []Cluster)`

SetClusters sets Clusters field to given value.


### GetUserInput

`func (o *ClusteringSearchResponse) GetUserInput() map[string]interface{}`

GetUserInput returns the UserInput field if non-nil, zero value otherwise.

### GetUserInputOk

`func (o *ClusteringSearchResponse) GetUserInputOk() (*map[string]interface{}, bool)`

GetUserInputOk returns a tuple with the UserInput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserInput

`func (o *ClusteringSearchResponse) SetUserInput(v map[string]interface{})`

SetUserInput sets UserInput field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


