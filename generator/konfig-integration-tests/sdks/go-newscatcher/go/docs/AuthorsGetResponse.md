# AuthorsGetResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **string** |  | [optional] [default to "No Matches for your search"]
**TotalHits** | **int32** |  | [default to 0]
**Page** | **int32** |  | [default to 0]
**TotalPages** | **int32** |  | [default to 0]
**PageSize** | **int32** |  | [default to 0]
**Articles** | [**[]DtoResponsesAuthorSearchResponseArticleResult**](DtoResponsesAuthorSearchResponseArticleResult.md) |  | [default to []]
**UserInput** | **map[string]interface{}** |  | 

## Methods

### NewAuthorsGetResponse

`func NewAuthorsGetResponse(totalHits int32, page int32, totalPages int32, pageSize int32, articles []DtoResponsesAuthorSearchResponseArticleResult, userInput map[string]interface{}, ) *AuthorsGetResponse`

NewAuthorsGetResponse instantiates a new AuthorsGetResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthorsGetResponseWithDefaults

`func NewAuthorsGetResponseWithDefaults() *AuthorsGetResponse`

NewAuthorsGetResponseWithDefaults instantiates a new AuthorsGetResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *AuthorsGetResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AuthorsGetResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AuthorsGetResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *AuthorsGetResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTotalHits

`func (o *AuthorsGetResponse) GetTotalHits() int32`

GetTotalHits returns the TotalHits field if non-nil, zero value otherwise.

### GetTotalHitsOk

`func (o *AuthorsGetResponse) GetTotalHitsOk() (*int32, bool)`

GetTotalHitsOk returns a tuple with the TotalHits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalHits

`func (o *AuthorsGetResponse) SetTotalHits(v int32)`

SetTotalHits sets TotalHits field to given value.


### GetPage

`func (o *AuthorsGetResponse) GetPage() int32`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *AuthorsGetResponse) GetPageOk() (*int32, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *AuthorsGetResponse) SetPage(v int32)`

SetPage sets Page field to given value.


### GetTotalPages

`func (o *AuthorsGetResponse) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *AuthorsGetResponse) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *AuthorsGetResponse) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.


### GetPageSize

`func (o *AuthorsGetResponse) GetPageSize() int32`

GetPageSize returns the PageSize field if non-nil, zero value otherwise.

### GetPageSizeOk

`func (o *AuthorsGetResponse) GetPageSizeOk() (*int32, bool)`

GetPageSizeOk returns a tuple with the PageSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageSize

`func (o *AuthorsGetResponse) SetPageSize(v int32)`

SetPageSize sets PageSize field to given value.


### GetArticles

`func (o *AuthorsGetResponse) GetArticles() []DtoResponsesAuthorSearchResponseArticleResult`

GetArticles returns the Articles field if non-nil, zero value otherwise.

### GetArticlesOk

`func (o *AuthorsGetResponse) GetArticlesOk() (*[]DtoResponsesAuthorSearchResponseArticleResult, bool)`

GetArticlesOk returns a tuple with the Articles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArticles

`func (o *AuthorsGetResponse) SetArticles(v []DtoResponsesAuthorSearchResponseArticleResult)`

SetArticles sets Articles field to given value.


### GetUserInput

`func (o *AuthorsGetResponse) GetUserInput() map[string]interface{}`

GetUserInput returns the UserInput field if non-nil, zero value otherwise.

### GetUserInputOk

`func (o *AuthorsGetResponse) GetUserInputOk() (*map[string]interface{}, bool)`

GetUserInputOk returns a tuple with the UserInput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserInput

`func (o *AuthorsGetResponse) SetUserInput(v map[string]interface{})`

SetUserInput sets UserInput field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


