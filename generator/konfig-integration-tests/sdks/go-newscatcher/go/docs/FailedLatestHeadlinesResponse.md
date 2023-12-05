# FailedLatestHeadlinesResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **string** |  | [optional] [default to "No Matches for your search"]
**TotalHits** | Pointer to **int32** |  | [optional] [default to 0]
**Page** | Pointer to **int32** |  | [optional] [default to 0]
**TotalPages** | Pointer to **int32** |  | [optional] [default to 0]
**PageSize** | Pointer to **int32** |  | [optional] [default to 0]
**Articles** | Pointer to [**[]DtoResponsesLatestHeadlinesResponseArticleResult**](DtoResponsesLatestHeadlinesResponseArticleResult.md) |  | [optional] [default to []]
**UserInput** | **map[string]interface{}** |  | 

## Methods

### NewFailedLatestHeadlinesResponse

`func NewFailedLatestHeadlinesResponse(userInput map[string]interface{}, ) *FailedLatestHeadlinesResponse`

NewFailedLatestHeadlinesResponse instantiates a new FailedLatestHeadlinesResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFailedLatestHeadlinesResponseWithDefaults

`func NewFailedLatestHeadlinesResponseWithDefaults() *FailedLatestHeadlinesResponse`

NewFailedLatestHeadlinesResponseWithDefaults instantiates a new FailedLatestHeadlinesResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *FailedLatestHeadlinesResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *FailedLatestHeadlinesResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *FailedLatestHeadlinesResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *FailedLatestHeadlinesResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTotalHits

`func (o *FailedLatestHeadlinesResponse) GetTotalHits() int32`

GetTotalHits returns the TotalHits field if non-nil, zero value otherwise.

### GetTotalHitsOk

`func (o *FailedLatestHeadlinesResponse) GetTotalHitsOk() (*int32, bool)`

GetTotalHitsOk returns a tuple with the TotalHits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalHits

`func (o *FailedLatestHeadlinesResponse) SetTotalHits(v int32)`

SetTotalHits sets TotalHits field to given value.

### HasTotalHits

`func (o *FailedLatestHeadlinesResponse) HasTotalHits() bool`

HasTotalHits returns a boolean if a field has been set.

### GetPage

`func (o *FailedLatestHeadlinesResponse) GetPage() int32`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *FailedLatestHeadlinesResponse) GetPageOk() (*int32, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *FailedLatestHeadlinesResponse) SetPage(v int32)`

SetPage sets Page field to given value.

### HasPage

`func (o *FailedLatestHeadlinesResponse) HasPage() bool`

HasPage returns a boolean if a field has been set.

### GetTotalPages

`func (o *FailedLatestHeadlinesResponse) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *FailedLatestHeadlinesResponse) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *FailedLatestHeadlinesResponse) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *FailedLatestHeadlinesResponse) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetPageSize

`func (o *FailedLatestHeadlinesResponse) GetPageSize() int32`

GetPageSize returns the PageSize field if non-nil, zero value otherwise.

### GetPageSizeOk

`func (o *FailedLatestHeadlinesResponse) GetPageSizeOk() (*int32, bool)`

GetPageSizeOk returns a tuple with the PageSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageSize

`func (o *FailedLatestHeadlinesResponse) SetPageSize(v int32)`

SetPageSize sets PageSize field to given value.

### HasPageSize

`func (o *FailedLatestHeadlinesResponse) HasPageSize() bool`

HasPageSize returns a boolean if a field has been set.

### GetArticles

`func (o *FailedLatestHeadlinesResponse) GetArticles() []DtoResponsesLatestHeadlinesResponseArticleResult`

GetArticles returns the Articles field if non-nil, zero value otherwise.

### GetArticlesOk

`func (o *FailedLatestHeadlinesResponse) GetArticlesOk() (*[]DtoResponsesLatestHeadlinesResponseArticleResult, bool)`

GetArticlesOk returns a tuple with the Articles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArticles

`func (o *FailedLatestHeadlinesResponse) SetArticles(v []DtoResponsesLatestHeadlinesResponseArticleResult)`

SetArticles sets Articles field to given value.

### HasArticles

`func (o *FailedLatestHeadlinesResponse) HasArticles() bool`

HasArticles returns a boolean if a field has been set.

### GetUserInput

`func (o *FailedLatestHeadlinesResponse) GetUserInput() map[string]interface{}`

GetUserInput returns the UserInput field if non-nil, zero value otherwise.

### GetUserInputOk

`func (o *FailedLatestHeadlinesResponse) GetUserInputOk() (*map[string]interface{}, bool)`

GetUserInputOk returns a tuple with the UserInput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserInput

`func (o *FailedLatestHeadlinesResponse) SetUserInput(v map[string]interface{})`

SetUserInput sets UserInput field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


