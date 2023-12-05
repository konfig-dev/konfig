# DtoResponsesAuthorSearchResponseFailedSearchResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **string** |  | [optional] [default to "No Matches for your search"]
**TotalHits** | Pointer to **int32** |  | [optional] [default to 0]
**Page** | Pointer to **int32** |  | [optional] [default to 0]
**TotalPages** | Pointer to **int32** |  | [optional] [default to 0]
**PageSize** | Pointer to **int32** |  | [optional] [default to 0]
**Articles** | Pointer to [**[]DtoResponsesAuthorSearchResponseArticleResult**](DtoResponsesAuthorSearchResponseArticleResult.md) |  | [optional] [default to []]
**UserInput** | **map[string]interface{}** |  | 

## Methods

### NewDtoResponsesAuthorSearchResponseFailedSearchResponse

`func NewDtoResponsesAuthorSearchResponseFailedSearchResponse(userInput map[string]interface{}, ) *DtoResponsesAuthorSearchResponseFailedSearchResponse`

NewDtoResponsesAuthorSearchResponseFailedSearchResponse instantiates a new DtoResponsesAuthorSearchResponseFailedSearchResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDtoResponsesAuthorSearchResponseFailedSearchResponseWithDefaults

`func NewDtoResponsesAuthorSearchResponseFailedSearchResponseWithDefaults() *DtoResponsesAuthorSearchResponseFailedSearchResponse`

NewDtoResponsesAuthorSearchResponseFailedSearchResponseWithDefaults instantiates a new DtoResponsesAuthorSearchResponseFailedSearchResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *DtoResponsesAuthorSearchResponseFailedSearchResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *DtoResponsesAuthorSearchResponseFailedSearchResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *DtoResponsesAuthorSearchResponseFailedSearchResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *DtoResponsesAuthorSearchResponseFailedSearchResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTotalHits

`func (o *DtoResponsesAuthorSearchResponseFailedSearchResponse) GetTotalHits() int32`

GetTotalHits returns the TotalHits field if non-nil, zero value otherwise.

### GetTotalHitsOk

`func (o *DtoResponsesAuthorSearchResponseFailedSearchResponse) GetTotalHitsOk() (*int32, bool)`

GetTotalHitsOk returns a tuple with the TotalHits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalHits

`func (o *DtoResponsesAuthorSearchResponseFailedSearchResponse) SetTotalHits(v int32)`

SetTotalHits sets TotalHits field to given value.

### HasTotalHits

`func (o *DtoResponsesAuthorSearchResponseFailedSearchResponse) HasTotalHits() bool`

HasTotalHits returns a boolean if a field has been set.

### GetPage

`func (o *DtoResponsesAuthorSearchResponseFailedSearchResponse) GetPage() int32`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *DtoResponsesAuthorSearchResponseFailedSearchResponse) GetPageOk() (*int32, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *DtoResponsesAuthorSearchResponseFailedSearchResponse) SetPage(v int32)`

SetPage sets Page field to given value.

### HasPage

`func (o *DtoResponsesAuthorSearchResponseFailedSearchResponse) HasPage() bool`

HasPage returns a boolean if a field has been set.

### GetTotalPages

`func (o *DtoResponsesAuthorSearchResponseFailedSearchResponse) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *DtoResponsesAuthorSearchResponseFailedSearchResponse) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *DtoResponsesAuthorSearchResponseFailedSearchResponse) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *DtoResponsesAuthorSearchResponseFailedSearchResponse) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetPageSize

`func (o *DtoResponsesAuthorSearchResponseFailedSearchResponse) GetPageSize() int32`

GetPageSize returns the PageSize field if non-nil, zero value otherwise.

### GetPageSizeOk

`func (o *DtoResponsesAuthorSearchResponseFailedSearchResponse) GetPageSizeOk() (*int32, bool)`

GetPageSizeOk returns a tuple with the PageSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageSize

`func (o *DtoResponsesAuthorSearchResponseFailedSearchResponse) SetPageSize(v int32)`

SetPageSize sets PageSize field to given value.

### HasPageSize

`func (o *DtoResponsesAuthorSearchResponseFailedSearchResponse) HasPageSize() bool`

HasPageSize returns a boolean if a field has been set.

### GetArticles

`func (o *DtoResponsesAuthorSearchResponseFailedSearchResponse) GetArticles() []DtoResponsesAuthorSearchResponseArticleResult`

GetArticles returns the Articles field if non-nil, zero value otherwise.

### GetArticlesOk

`func (o *DtoResponsesAuthorSearchResponseFailedSearchResponse) GetArticlesOk() (*[]DtoResponsesAuthorSearchResponseArticleResult, bool)`

GetArticlesOk returns a tuple with the Articles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArticles

`func (o *DtoResponsesAuthorSearchResponseFailedSearchResponse) SetArticles(v []DtoResponsesAuthorSearchResponseArticleResult)`

SetArticles sets Articles field to given value.

### HasArticles

`func (o *DtoResponsesAuthorSearchResponseFailedSearchResponse) HasArticles() bool`

HasArticles returns a boolean if a field has been set.

### GetUserInput

`func (o *DtoResponsesAuthorSearchResponseFailedSearchResponse) GetUserInput() map[string]interface{}`

GetUserInput returns the UserInput field if non-nil, zero value otherwise.

### GetUserInputOk

`func (o *DtoResponsesAuthorSearchResponseFailedSearchResponse) GetUserInputOk() (*map[string]interface{}, bool)`

GetUserInputOk returns a tuple with the UserInput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserInput

`func (o *DtoResponsesAuthorSearchResponseFailedSearchResponse) SetUserInput(v map[string]interface{})`

SetUserInput sets UserInput field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


