# FSearchResponse1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **string** |  | [optional] [default to "ok"]
**TotalHits** | Pointer to **int32** |  | [optional] 
**Page** | Pointer to **int32** |  | [optional] 
**TotalPages** | Pointer to **int32** |  | [optional] 
**PageSize** | Pointer to **int32** |  | [optional] 
**Articles** | Pointer to [**[]ArticlesPropertyInner**](ArticlesPropertyInner.md) |  | [optional] 
**UserInput** | **map[string]interface{}** |  | 

## Methods

### NewFSearchResponse1

`func NewFSearchResponse1(userInput map[string]interface{}, ) *FSearchResponse1`

NewFSearchResponse1 instantiates a new FSearchResponse1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFSearchResponse1WithDefaults

`func NewFSearchResponse1WithDefaults() *FSearchResponse1`

NewFSearchResponse1WithDefaults instantiates a new FSearchResponse1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *FSearchResponse1) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *FSearchResponse1) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *FSearchResponse1) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *FSearchResponse1) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTotalHits

`func (o *FSearchResponse1) GetTotalHits() int32`

GetTotalHits returns the TotalHits field if non-nil, zero value otherwise.

### GetTotalHitsOk

`func (o *FSearchResponse1) GetTotalHitsOk() (*int32, bool)`

GetTotalHitsOk returns a tuple with the TotalHits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalHits

`func (o *FSearchResponse1) SetTotalHits(v int32)`

SetTotalHits sets TotalHits field to given value.

### HasTotalHits

`func (o *FSearchResponse1) HasTotalHits() bool`

HasTotalHits returns a boolean if a field has been set.

### GetPage

`func (o *FSearchResponse1) GetPage() int32`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *FSearchResponse1) GetPageOk() (*int32, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *FSearchResponse1) SetPage(v int32)`

SetPage sets Page field to given value.

### HasPage

`func (o *FSearchResponse1) HasPage() bool`

HasPage returns a boolean if a field has been set.

### GetTotalPages

`func (o *FSearchResponse1) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *FSearchResponse1) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *FSearchResponse1) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *FSearchResponse1) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetPageSize

`func (o *FSearchResponse1) GetPageSize() int32`

GetPageSize returns the PageSize field if non-nil, zero value otherwise.

### GetPageSizeOk

`func (o *FSearchResponse1) GetPageSizeOk() (*int32, bool)`

GetPageSizeOk returns a tuple with the PageSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageSize

`func (o *FSearchResponse1) SetPageSize(v int32)`

SetPageSize sets PageSize field to given value.

### HasPageSize

`func (o *FSearchResponse1) HasPageSize() bool`

HasPageSize returns a boolean if a field has been set.

### GetArticles

`func (o *FSearchResponse1) GetArticles() []ArticlesPropertyInner`

GetArticles returns the Articles field if non-nil, zero value otherwise.

### GetArticlesOk

`func (o *FSearchResponse1) GetArticlesOk() (*[]ArticlesPropertyInner, bool)`

GetArticlesOk returns a tuple with the Articles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArticles

`func (o *FSearchResponse1) SetArticles(v []ArticlesPropertyInner)`

SetArticles sets Articles field to given value.

### HasArticles

`func (o *FSearchResponse1) HasArticles() bool`

HasArticles returns a boolean if a field has been set.

### GetUserInput

`func (o *FSearchResponse1) GetUserInput() map[string]interface{}`

GetUserInput returns the UserInput field if non-nil, zero value otherwise.

### GetUserInputOk

`func (o *FSearchResponse1) GetUserInputOk() (*map[string]interface{}, bool)`

GetUserInputOk returns a tuple with the UserInput field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserInput

`func (o *FSearchResponse1) SetUserInput(v map[string]interface{})`

SetUserInput sets UserInput field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


