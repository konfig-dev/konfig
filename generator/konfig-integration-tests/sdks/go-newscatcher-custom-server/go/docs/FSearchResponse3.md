# FSearchResponse3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **string** |  | [optional] [default to "ok"]
**TotalHits** | Pointer to **int32** |  | [optional] 
**Page** | Pointer to **int32** |  | [optional] 
**TotalPages** | Pointer to **int32** |  | [optional] 
**PageSize** | Pointer to **int32** |  | [optional] 
**Articles** | Pointer to [**[]ArticlesPropertyInner1**](ArticlesPropertyInner1.md) |  | [optional] 
**UserInput** | **map[string]interface{}** |  | 

## Methods

### NewFSearchResponse3

`func NewFSearchResponse3(userInput map[string]interface{}, ) *FSearchResponse3`

NewFSearchResponse3 instantiates a new FSearchResponse3 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFSearchResponse3WithDefaults

`func NewFSearchResponse3WithDefaults() *FSearchResponse3`

NewFSearchResponse3WithDefaults instantiates a new FSearchResponse3 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *FSearchResponse3) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *FSearchResponse3) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *FSearchResponse3) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *FSearchResponse3) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTotalHits

`func (o *FSearchResponse3) GetTotalHits() int32`

GetTotalHits returns the TotalHits field if non-nil, zero value otherwise.

### GetTotalHitsOk

`func (o *FSearchResponse3) GetTotalHitsOk() (*int32, bool)`

GetTotalHitsOk returns a tuple with the TotalHits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalHits

`func (o *FSearchResponse3) SetTotalHits(v int32)`

SetTotalHits sets TotalHits field to given value.

### HasTotalHits

`func (o *FSearchResponse3) HasTotalHits() bool`

HasTotalHits returns a boolean if a field has been set.

### GetPage

`func (o *FSearchResponse3) GetPage() int32`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *FSearchResponse3) GetPageOk() (*int32, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *FSearchResponse3) SetPage(v int32)`

SetPage sets Page field to given value.

### HasPage

`func (o *FSearchResponse3) HasPage() bool`

HasPage returns a boolean if a field has been set.

### GetTotalPages

`func (o *FSearchResponse3) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *FSearchResponse3) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *FSearchResponse3) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *FSearchResponse3) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetPageSize

`func (o *FSearchResponse3) GetPageSize() int32`

GetPageSize returns the PageSize field if non-nil, zero value otherwise.

### GetPageSizeOk

`func (o *FSearchResponse3) GetPageSizeOk() (*int32, bool)`

GetPageSizeOk returns a tuple with the PageSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageSize

`func (o *FSearchResponse3) SetPageSize(v int32)`

SetPageSize sets PageSize field to given value.

### HasPageSize

`func (o *FSearchResponse3) HasPageSize() bool`

HasPageSize returns a boolean if a field has been set.

### GetArticles

`func (o *FSearchResponse3) GetArticles() []ArticlesPropertyInner1`

GetArticles returns the Articles field if non-nil, zero value otherwise.

### GetArticlesOk

`func (o *FSearchResponse3) GetArticlesOk() (*[]ArticlesPropertyInner1, bool)`

GetArticlesOk returns a tuple with the Articles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArticles

`func (o *FSearchResponse3) SetArticles(v []ArticlesPropertyInner1)`

SetArticles sets Articles field to given value.

### HasArticles

`func (o *FSearchResponse3) HasArticles() bool`

HasArticles returns a boolean if a field has been set.

### GetUserInput

`func (o *FSearchResponse3) GetUserInput() map[string]interface{}`

GetUserInput returns the UserInput field if non-nil, zero value otherwise.

### GetUserInputOk

`func (o *FSearchResponse3) GetUserInputOk() (*map[string]interface{}, bool)`

GetUserInputOk returns a tuple with the UserInput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserInput

`func (o *FSearchResponse3) SetUserInput(v map[string]interface{})`

SetUserInput sets UserInput field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


