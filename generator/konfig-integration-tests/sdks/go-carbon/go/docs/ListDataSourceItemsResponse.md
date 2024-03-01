# ListDataSourceItemsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]ExternalSourceItem**](ExternalSourceItem.md) |  | 
**Count** | **int32** |  | 

## Methods

### NewListDataSourceItemsResponse

`func NewListDataSourceItemsResponse(items []ExternalSourceItem, count int32, ) *ListDataSourceItemsResponse`

NewListDataSourceItemsResponse instantiates a new ListDataSourceItemsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListDataSourceItemsResponseWithDefaults

`func NewListDataSourceItemsResponseWithDefaults() *ListDataSourceItemsResponse`

NewListDataSourceItemsResponseWithDefaults instantiates a new ListDataSourceItemsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *ListDataSourceItemsResponse) GetItems() []ExternalSourceItem`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *ListDataSourceItemsResponse) GetItemsOk() (*[]ExternalSourceItem, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *ListDataSourceItemsResponse) SetItems(v []ExternalSourceItem)`

SetItems sets Items field to given value.


### GetCount

`func (o *ListDataSourceItemsResponse) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *ListDataSourceItemsResponse) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *ListDataSourceItemsResponse) SetCount(v int32)`

SetCount sets Count field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


