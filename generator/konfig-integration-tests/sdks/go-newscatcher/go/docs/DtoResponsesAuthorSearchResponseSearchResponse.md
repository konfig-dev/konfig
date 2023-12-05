# DtoResponsesAuthorSearchResponseSearchResponse

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

### NewDtoResponsesAuthorSearchResponseSearchResponse

`func NewDtoResponsesAuthorSearchResponseSearchResponse(totalHits int32, page int32, totalPages int32, pageSize int32, articles []map[string]interface{}, userInput map[string]interface{}, ) *DtoResponsesAuthorSearchResponseSearchResponse`

NewDtoResponsesAuthorSearchResponseSearchResponse instantiates a new DtoResponsesAuthorSearchResponseSearchResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDtoResponsesAuthorSearchResponseSearchResponseWithDefaults

`func NewDtoResponsesAuthorSearchResponseSearchResponseWithDefaults() *DtoResponsesAuthorSearchResponseSearchResponse`

NewDtoResponsesAuthorSearchResponseSearchResponseWithDefaults instantiates a new DtoResponsesAuthorSearchResponseSearchResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *DtoResponsesAuthorSearchResponseSearchResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *DtoResponsesAuthorSearchResponseSearchResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *DtoResponsesAuthorSearchResponseSearchResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *DtoResponsesAuthorSearchResponseSearchResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTotalHits

`func (o *DtoResponsesAuthorSearchResponseSearchResponse) GetTotalHits() int32`

GetTotalHits returns the TotalHits field if non-nil, zero value otherwise.

### GetTotalHitsOk

`func (o *DtoResponsesAuthorSearchResponseSearchResponse) GetTotalHitsOk() (*int32, bool)`

GetTotalHitsOk returns a tuple with the TotalHits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalHits

`func (o *DtoResponsesAuthorSearchResponseSearchResponse) SetTotalHits(v int32)`

SetTotalHits sets TotalHits field to given value.


### GetPage

`func (o *DtoResponsesAuthorSearchResponseSearchResponse) GetPage() int32`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *DtoResponsesAuthorSearchResponseSearchResponse) GetPageOk() (*int32, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *DtoResponsesAuthorSearchResponseSearchResponse) SetPage(v int32)`

SetPage sets Page field to given value.


### GetTotalPages

`func (o *DtoResponsesAuthorSearchResponseSearchResponse) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *DtoResponsesAuthorSearchResponseSearchResponse) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *DtoResponsesAuthorSearchResponseSearchResponse) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.


### GetPageSize

`func (o *DtoResponsesAuthorSearchResponseSearchResponse) GetPageSize() int32`

GetPageSize returns the PageSize field if non-nil, zero value otherwise.

### GetPageSizeOk

`func (o *DtoResponsesAuthorSearchResponseSearchResponse) GetPageSizeOk() (*int32, bool)`

GetPageSizeOk returns a tuple with the PageSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageSize

`func (o *DtoResponsesAuthorSearchResponseSearchResponse) SetPageSize(v int32)`

SetPageSize sets PageSize field to given value.


### GetArticles

`func (o *DtoResponsesAuthorSearchResponseSearchResponse) GetArticles() []map[string]interface{}`

GetArticles returns the Articles field if non-nil, zero value otherwise.

### GetArticlesOk

`func (o *DtoResponsesAuthorSearchResponseSearchResponse) GetArticlesOk() (*[]map[string]interface{}, bool)`

GetArticlesOk returns a tuple with the Articles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArticles

`func (o *DtoResponsesAuthorSearchResponseSearchResponse) SetArticles(v []map[string]interface{})`

SetArticles sets Articles field to given value.


### GetUserInput

`func (o *DtoResponsesAuthorSearchResponseSearchResponse) GetUserInput() map[string]interface{}`

GetUserInput returns the UserInput field if non-nil, zero value otherwise.

### GetUserInputOk

`func (o *DtoResponsesAuthorSearchResponseSearchResponse) GetUserInputOk() (*map[string]interface{}, bool)`

GetUserInputOk returns a tuple with the UserInput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserInput

`func (o *DtoResponsesAuthorSearchResponseSearchResponse) SetUserInput(v map[string]interface{})`

SetUserInput sets UserInput field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


