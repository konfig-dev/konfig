# SearchURLRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | Pointer to **interface{}** |  | [optional] 
**Links** | Pointer to **interface{}** |  | [optional] 
**Page** | Pointer to **int32** |  | [optional] [default to 1]
**PageSize** | Pointer to **int32** |  | [optional] [default to 100]

## Methods

### NewSearchURLRequest

`func NewSearchURLRequest() *SearchURLRequest`

NewSearchURLRequest instantiates a new SearchURLRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchURLRequestWithDefaults

`func NewSearchURLRequestWithDefaults() *SearchURLRequest`

NewSearchURLRequestWithDefaults instantiates a new SearchURLRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIds

`func (o *SearchURLRequest) GetIds() interface{}`

GetIds returns the Ids field if non-nil, zero value otherwise.

### GetIdsOk

`func (o *SearchURLRequest) GetIdsOk() (*interface{}, bool)`

GetIdsOk returns a tuple with the Ids field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIds

`func (o *SearchURLRequest) SetIds(v interface{})`

SetIds sets Ids field to given value.

### HasIds

`func (o *SearchURLRequest) HasIds() bool`

HasIds returns a boolean if a field has been set.

### SetIdsNil

`func (o *SearchURLRequest) SetIdsNil(b bool)`

 SetIdsNil sets the value for Ids to be an explicit nil

### UnsetIds
`func (o *SearchURLRequest) UnsetIds()`

UnsetIds ensures that no value is present for Ids, not even an explicit nil
### GetLinks

`func (o *SearchURLRequest) GetLinks() interface{}`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SearchURLRequest) GetLinksOk() (*interface{}, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SearchURLRequest) SetLinks(v interface{})`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SearchURLRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### SetLinksNil

`func (o *SearchURLRequest) SetLinksNil(b bool)`

 SetLinksNil sets the value for Links to be an explicit nil

### UnsetLinks
`func (o *SearchURLRequest) UnsetLinks()`

UnsetLinks ensures that no value is present for Links, not even an explicit nil
### GetPage

`func (o *SearchURLRequest) GetPage() int32`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *SearchURLRequest) GetPageOk() (*int32, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *SearchURLRequest) SetPage(v int32)`

SetPage sets Page field to given value.

### HasPage

`func (o *SearchURLRequest) HasPage() bool`

HasPage returns a boolean if a field has been set.

### GetPageSize

`func (o *SearchURLRequest) GetPageSize() int32`

GetPageSize returns the PageSize field if non-nil, zero value otherwise.

### GetPageSizeOk

`func (o *SearchURLRequest) GetPageSizeOk() (*int32, bool)`

GetPageSizeOk returns a tuple with the PageSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageSize

`func (o *SearchURLRequest) SetPageSize(v int32)`

SetPageSize sets PageSize field to given value.

### HasPageSize

`func (o *SearchURLRequest) HasPageSize() bool`

HasPageSize returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


