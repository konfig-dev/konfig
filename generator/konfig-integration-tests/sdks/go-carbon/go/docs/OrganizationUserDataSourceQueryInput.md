# OrganizationUserDataSourceQueryInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pagination** | Pointer to [**Pagination**](Pagination.md) |  | [optional] 
**OrderBy** | Pointer to [**OrganizationUserDataSourceOrderByColumns**](OrganizationUserDataSourceOrderByColumns.md) |  | [optional] 
**OrderDir** | Pointer to [**OrderDir**](OrderDir.md) |  | [optional] 
**Filters** | Pointer to [**OrganizationUserDataSourceFilters**](OrganizationUserDataSourceFilters.md) |  | [optional] 

## Methods

### NewOrganizationUserDataSourceQueryInput

`func NewOrganizationUserDataSourceQueryInput() *OrganizationUserDataSourceQueryInput`

NewOrganizationUserDataSourceQueryInput instantiates a new OrganizationUserDataSourceQueryInput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrganizationUserDataSourceQueryInputWithDefaults

`func NewOrganizationUserDataSourceQueryInputWithDefaults() *OrganizationUserDataSourceQueryInput`

NewOrganizationUserDataSourceQueryInputWithDefaults instantiates a new OrganizationUserDataSourceQueryInput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPagination

`func (o *OrganizationUserDataSourceQueryInput) GetPagination() Pagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *OrganizationUserDataSourceQueryInput) GetPaginationOk() (*Pagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *OrganizationUserDataSourceQueryInput) SetPagination(v Pagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *OrganizationUserDataSourceQueryInput) HasPagination() bool`

HasPagination returns a boolean if a field has been set.

### GetOrderBy

`func (o *OrganizationUserDataSourceQueryInput) GetOrderBy() OrganizationUserDataSourceOrderByColumns`

GetOrderBy returns the OrderBy field if non-nil, zero value otherwise.

### GetOrderByOk

`func (o *OrganizationUserDataSourceQueryInput) GetOrderByOk() (*OrganizationUserDataSourceOrderByColumns, bool)`

GetOrderByOk returns a tuple with the OrderBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderBy

`func (o *OrganizationUserDataSourceQueryInput) SetOrderBy(v OrganizationUserDataSourceOrderByColumns)`

SetOrderBy sets OrderBy field to given value.

### HasOrderBy

`func (o *OrganizationUserDataSourceQueryInput) HasOrderBy() bool`

HasOrderBy returns a boolean if a field has been set.

### GetOrderDir

`func (o *OrganizationUserDataSourceQueryInput) GetOrderDir() OrderDir`

GetOrderDir returns the OrderDir field if non-nil, zero value otherwise.

### GetOrderDirOk

`func (o *OrganizationUserDataSourceQueryInput) GetOrderDirOk() (*OrderDir, bool)`

GetOrderDirOk returns a tuple with the OrderDir field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderDir

`func (o *OrganizationUserDataSourceQueryInput) SetOrderDir(v OrderDir)`

SetOrderDir sets OrderDir field to given value.

### HasOrderDir

`func (o *OrganizationUserDataSourceQueryInput) HasOrderDir() bool`

HasOrderDir returns a boolean if a field has been set.

### GetFilters

`func (o *OrganizationUserDataSourceQueryInput) GetFilters() OrganizationUserDataSourceFilters`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *OrganizationUserDataSourceQueryInput) GetFiltersOk() (*OrganizationUserDataSourceFilters, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *OrganizationUserDataSourceQueryInput) SetFilters(v OrganizationUserDataSourceFilters)`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *OrganizationUserDataSourceQueryInput) HasFilters() bool`

HasFilters returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


