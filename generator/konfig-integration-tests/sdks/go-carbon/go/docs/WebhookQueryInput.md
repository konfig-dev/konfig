# WebhookQueryInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pagination** | Pointer to [**Pagination**](Pagination.md) |  | [optional] 
**OrderBy** | Pointer to [**WebhookOrderByColumns**](WebhookOrderByColumns.md) |  | [optional] 
**OrderDir** | Pointer to [**OrderDir**](OrderDir.md) |  | [optional] 
**Filters** | Pointer to [**WebhookFilters**](WebhookFilters.md) |  | [optional] 

## Methods

### NewWebhookQueryInput

`func NewWebhookQueryInput() *WebhookQueryInput`

NewWebhookQueryInput instantiates a new WebhookQueryInput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWebhookQueryInputWithDefaults

`func NewWebhookQueryInputWithDefaults() *WebhookQueryInput`

NewWebhookQueryInputWithDefaults instantiates a new WebhookQueryInput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPagination

`func (o *WebhookQueryInput) GetPagination() Pagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *WebhookQueryInput) GetPaginationOk() (*Pagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *WebhookQueryInput) SetPagination(v Pagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *WebhookQueryInput) HasPagination() bool`

HasPagination returns a boolean if a field has been set.

### GetOrderBy

`func (o *WebhookQueryInput) GetOrderBy() WebhookOrderByColumns`

GetOrderBy returns the OrderBy field if non-nil, zero value otherwise.

### GetOrderByOk

`func (o *WebhookQueryInput) GetOrderByOk() (*WebhookOrderByColumns, bool)`

GetOrderByOk returns a tuple with the OrderBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderBy

`func (o *WebhookQueryInput) SetOrderBy(v WebhookOrderByColumns)`

SetOrderBy sets OrderBy field to given value.

### HasOrderBy

`func (o *WebhookQueryInput) HasOrderBy() bool`

HasOrderBy returns a boolean if a field has been set.

### GetOrderDir

`func (o *WebhookQueryInput) GetOrderDir() OrderDir`

GetOrderDir returns the OrderDir field if non-nil, zero value otherwise.

### GetOrderDirOk

`func (o *WebhookQueryInput) GetOrderDirOk() (*OrderDir, bool)`

GetOrderDirOk returns a tuple with the OrderDir field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderDir

`func (o *WebhookQueryInput) SetOrderDir(v OrderDir)`

SetOrderDir sets OrderDir field to given value.

### HasOrderDir

`func (o *WebhookQueryInput) HasOrderDir() bool`

HasOrderDir returns a boolean if a field has been set.

### GetFilters

`func (o *WebhookQueryInput) GetFilters() WebhookFilters`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *WebhookQueryInput) GetFiltersOk() (*WebhookFilters, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *WebhookQueryInput) SetFilters(v WebhookFilters)`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *WebhookQueryInput) HasFilters() bool`

HasFilters returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


