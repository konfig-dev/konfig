# DtoResponsesSearchResponseSearchResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **string** |  | [optional] [default to "ok"]
**TotalHits** | **int32** |  | 
**Page** | **int32** |  | 
**TotalPages** | **int32** |  | 
**PageSize** | **int32** |  | 
**Articles** | **[]map[string]interface{}** |  | 
**UserInput** | **map[string]interface{}** |  | 

## Methods

### NewDtoResponsesSearchResponseSearchResponse

`func NewDtoResponsesSearchResponseSearchResponse(totalHits int32, page int32, totalPages int32, pageSize int32, articles []map[string]interface{}, userInput map[string]interface{}, ) *DtoResponsesSearchResponseSearchResponse`

NewDtoResponsesSearchResponseSearchResponse instantiates a new DtoResponsesSearchResponseSearchResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDtoResponsesSearchResponseSearchResponseWithDefaults

`func NewDtoResponsesSearchResponseSearchResponseWithDefaults() *DtoResponsesSearchResponseSearchResponse`

NewDtoResponsesSearchResponseSearchResponseWithDefaults instantiates a new DtoResponsesSearchResponseSearchResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *DtoResponsesSearchResponseSearchResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *DtoResponsesSearchResponseSearchResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *DtoResponsesSearchResponseSearchResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *DtoResponsesSearchResponseSearchResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTotalHits

`func (o *DtoResponsesSearchResponseSearchResponse) GetTotalHits() int32`

GetTotalHits returns the TotalHits field if non-nil, zero value otherwise.

### GetTotalHitsOk

`func (o *DtoResponsesSearchResponseSearchResponse) GetTotalHitsOk() (*int32, bool)`

GetTotalHitsOk returns a tuple with the TotalHits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalHits

`func (o *DtoResponsesSearchResponseSearchResponse) SetTotalHits(v int32)`

SetTotalHits sets TotalHits field to given value.


### GetPage

`func (o *DtoResponsesSearchResponseSearchResponse) GetPage() int32`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *DtoResponsesSearchResponseSearchResponse) GetPageOk() (*int32, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *DtoResponsesSearchResponseSearchResponse) SetPage(v int32)`

SetPage sets Page field to given value.


### GetTotalPages

`func (o *DtoResponsesSearchResponseSearchResponse) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *DtoResponsesSearchResponseSearchResponse) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *DtoResponsesSearchResponseSearchResponse) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.


### GetPageSize

`func (o *DtoResponsesSearchResponseSearchResponse) GetPageSize() int32`

GetPageSize returns the PageSize field if non-nil, zero value otherwise.

### GetPageSizeOk

`func (o *DtoResponsesSearchResponseSearchResponse) GetPageSizeOk() (*int32, bool)`

GetPageSizeOk returns a tuple with the PageSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageSize

`func (o *DtoResponsesSearchResponseSearchResponse) SetPageSize(v int32)`

SetPageSize sets PageSize field to given value.


### GetArticles

`func (o *DtoResponsesSearchResponseSearchResponse) GetArticles() []map[string]interface{}`

GetArticles returns the Articles field if non-nil, zero value otherwise.

### GetArticlesOk

`func (o *DtoResponsesSearchResponseSearchResponse) GetArticlesOk() (*[]map[string]interface{}, bool)`

GetArticlesOk returns a tuple with the Articles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArticles

`func (o *DtoResponsesSearchResponseSearchResponse) SetArticles(v []map[string]interface{})`

SetArticles sets Articles field to given value.


### GetUserInput

`func (o *DtoResponsesSearchResponseSearchResponse) GetUserInput() map[string]interface{}`

GetUserInput returns the UserInput field if non-nil, zero value otherwise.

### GetUserInputOk

`func (o *DtoResponsesSearchResponseSearchResponse) GetUserInputOk() (*map[string]interface{}, bool)`

GetUserInputOk returns a tuple with the UserInput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserInput

`func (o *DtoResponsesSearchResponseSearchResponse) SetUserInput(v map[string]interface{})`

SetUserInput sets UserInput field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


