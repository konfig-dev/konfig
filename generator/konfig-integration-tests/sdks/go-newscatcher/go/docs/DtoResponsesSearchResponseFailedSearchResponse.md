# DtoResponsesSearchResponseFailedSearchResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **string** |  | [optional] [default to "No Matches for your search"]
**TotalHits** | Pointer to **int32** |  | [optional] [default to 0]
**Page** | Pointer to **int32** |  | [optional] [default to 0]
**TotalPages** | Pointer to **int32** |  | [optional] [default to 0]
**PageSize** | Pointer to **int32** |  | [optional] [default to 0]
**Articles** | Pointer to [**[]DtoResponsesSearchResponseArticleResult**](DtoResponsesSearchResponseArticleResult.md) |  | [optional] [default to []]
**UserInput** | **map[string]interface{}** |  | 

## Methods

### NewDtoResponsesSearchResponseFailedSearchResponse

`func NewDtoResponsesSearchResponseFailedSearchResponse(userInput map[string]interface{}, ) *DtoResponsesSearchResponseFailedSearchResponse`

NewDtoResponsesSearchResponseFailedSearchResponse instantiates a new DtoResponsesSearchResponseFailedSearchResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDtoResponsesSearchResponseFailedSearchResponseWithDefaults

`func NewDtoResponsesSearchResponseFailedSearchResponseWithDefaults() *DtoResponsesSearchResponseFailedSearchResponse`

NewDtoResponsesSearchResponseFailedSearchResponseWithDefaults instantiates a new DtoResponsesSearchResponseFailedSearchResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *DtoResponsesSearchResponseFailedSearchResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *DtoResponsesSearchResponseFailedSearchResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *DtoResponsesSearchResponseFailedSearchResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *DtoResponsesSearchResponseFailedSearchResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTotalHits

`func (o *DtoResponsesSearchResponseFailedSearchResponse) GetTotalHits() int32`

GetTotalHits returns the TotalHits field if non-nil, zero value otherwise.

### GetTotalHitsOk

`func (o *DtoResponsesSearchResponseFailedSearchResponse) GetTotalHitsOk() (*int32, bool)`

GetTotalHitsOk returns a tuple with the TotalHits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalHits

`func (o *DtoResponsesSearchResponseFailedSearchResponse) SetTotalHits(v int32)`

SetTotalHits sets TotalHits field to given value.

### HasTotalHits

`func (o *DtoResponsesSearchResponseFailedSearchResponse) HasTotalHits() bool`

HasTotalHits returns a boolean if a field has been set.

### GetPage

`func (o *DtoResponsesSearchResponseFailedSearchResponse) GetPage() int32`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *DtoResponsesSearchResponseFailedSearchResponse) GetPageOk() (*int32, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *DtoResponsesSearchResponseFailedSearchResponse) SetPage(v int32)`

SetPage sets Page field to given value.

### HasPage

`func (o *DtoResponsesSearchResponseFailedSearchResponse) HasPage() bool`

HasPage returns a boolean if a field has been set.

### GetTotalPages

`func (o *DtoResponsesSearchResponseFailedSearchResponse) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *DtoResponsesSearchResponseFailedSearchResponse) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *DtoResponsesSearchResponseFailedSearchResponse) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *DtoResponsesSearchResponseFailedSearchResponse) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetPageSize

`func (o *DtoResponsesSearchResponseFailedSearchResponse) GetPageSize() int32`

GetPageSize returns the PageSize field if non-nil, zero value otherwise.

### GetPageSizeOk

`func (o *DtoResponsesSearchResponseFailedSearchResponse) GetPageSizeOk() (*int32, bool)`

GetPageSizeOk returns a tuple with the PageSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageSize

`func (o *DtoResponsesSearchResponseFailedSearchResponse) SetPageSize(v int32)`

SetPageSize sets PageSize field to given value.

### HasPageSize

`func (o *DtoResponsesSearchResponseFailedSearchResponse) HasPageSize() bool`

HasPageSize returns a boolean if a field has been set.

### GetArticles

`func (o *DtoResponsesSearchResponseFailedSearchResponse) GetArticles() []DtoResponsesSearchResponseArticleResult`

GetArticles returns the Articles field if non-nil, zero value otherwise.

### GetArticlesOk

`func (o *DtoResponsesSearchResponseFailedSearchResponse) GetArticlesOk() (*[]DtoResponsesSearchResponseArticleResult, bool)`

GetArticlesOk returns a tuple with the Articles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArticles

`func (o *DtoResponsesSearchResponseFailedSearchResponse) SetArticles(v []DtoResponsesSearchResponseArticleResult)`

SetArticles sets Articles field to given value.

### HasArticles

`func (o *DtoResponsesSearchResponseFailedSearchResponse) HasArticles() bool`

HasArticles returns a boolean if a field has been set.

### GetUserInput

`func (o *DtoResponsesSearchResponseFailedSearchResponse) GetUserInput() map[string]interface{}`

GetUserInput returns the UserInput field if non-nil, zero value otherwise.

### GetUserInputOk

`func (o *DtoResponsesSearchResponseFailedSearchResponse) GetUserInputOk() (*map[string]interface{}, bool)`

GetUserInputOk returns a tuple with the UserInput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserInput

`func (o *DtoResponsesSearchResponseFailedSearchResponse) SetUserInput(v map[string]interface{})`

SetUserInput sets UserInput field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


