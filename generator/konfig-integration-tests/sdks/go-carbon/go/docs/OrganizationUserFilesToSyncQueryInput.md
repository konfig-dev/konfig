# OrganizationUserFilesToSyncQueryInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pagination** | Pointer to [**Pagination**](Pagination.md) |  | [optional] 
**OrderBy** | Pointer to [**OrganizationUserFilesToSyncOrderByTypes**](OrganizationUserFilesToSyncOrderByTypes.md) |  | [optional] 
**OrderDir** | Pointer to [**OrderDir**](OrderDir.md) |  | [optional] 
**Filters** | Pointer to [**OrganizationUserFilesToSyncFilters**](OrganizationUserFilesToSyncFilters.md) |  | [optional] 
**IncludeRawFile** | Pointer to **NullableBool** |  | [optional] 
**IncludeParsedTextFile** | Pointer to **NullableBool** |  | [optional] 
**IncludeAdditionalFiles** | Pointer to **NullableBool** |  | [optional] 

## Methods

### NewOrganizationUserFilesToSyncQueryInput

`func NewOrganizationUserFilesToSyncQueryInput() *OrganizationUserFilesToSyncQueryInput`

NewOrganizationUserFilesToSyncQueryInput instantiates a new OrganizationUserFilesToSyncQueryInput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrganizationUserFilesToSyncQueryInputWithDefaults

`func NewOrganizationUserFilesToSyncQueryInputWithDefaults() *OrganizationUserFilesToSyncQueryInput`

NewOrganizationUserFilesToSyncQueryInputWithDefaults instantiates a new OrganizationUserFilesToSyncQueryInput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPagination

`func (o *OrganizationUserFilesToSyncQueryInput) GetPagination() Pagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *OrganizationUserFilesToSyncQueryInput) GetPaginationOk() (*Pagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *OrganizationUserFilesToSyncQueryInput) SetPagination(v Pagination)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *OrganizationUserFilesToSyncQueryInput) HasPagination() bool`

HasPagination returns a boolean if a field has been set.

### GetOrderBy

`func (o *OrganizationUserFilesToSyncQueryInput) GetOrderBy() OrganizationUserFilesToSyncOrderByTypes`

GetOrderBy returns the OrderBy field if non-nil, zero value otherwise.

### GetOrderByOk

`func (o *OrganizationUserFilesToSyncQueryInput) GetOrderByOk() (*OrganizationUserFilesToSyncOrderByTypes, bool)`

GetOrderByOk returns a tuple with the OrderBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderBy

`func (o *OrganizationUserFilesToSyncQueryInput) SetOrderBy(v OrganizationUserFilesToSyncOrderByTypes)`

SetOrderBy sets OrderBy field to given value.

### HasOrderBy

`func (o *OrganizationUserFilesToSyncQueryInput) HasOrderBy() bool`

HasOrderBy returns a boolean if a field has been set.

### GetOrderDir

`func (o *OrganizationUserFilesToSyncQueryInput) GetOrderDir() OrderDir`

GetOrderDir returns the OrderDir field if non-nil, zero value otherwise.

### GetOrderDirOk

`func (o *OrganizationUserFilesToSyncQueryInput) GetOrderDirOk() (*OrderDir, bool)`

GetOrderDirOk returns a tuple with the OrderDir field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderDir

`func (o *OrganizationUserFilesToSyncQueryInput) SetOrderDir(v OrderDir)`

SetOrderDir sets OrderDir field to given value.

### HasOrderDir

`func (o *OrganizationUserFilesToSyncQueryInput) HasOrderDir() bool`

HasOrderDir returns a boolean if a field has been set.

### GetFilters

`func (o *OrganizationUserFilesToSyncQueryInput) GetFilters() OrganizationUserFilesToSyncFilters`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *OrganizationUserFilesToSyncQueryInput) GetFiltersOk() (*OrganizationUserFilesToSyncFilters, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *OrganizationUserFilesToSyncQueryInput) SetFilters(v OrganizationUserFilesToSyncFilters)`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *OrganizationUserFilesToSyncQueryInput) HasFilters() bool`

HasFilters returns a boolean if a field has been set.

### GetIncludeRawFile

`func (o *OrganizationUserFilesToSyncQueryInput) GetIncludeRawFile() bool`

GetIncludeRawFile returns the IncludeRawFile field if non-nil, zero value otherwise.

### GetIncludeRawFileOk

`func (o *OrganizationUserFilesToSyncQueryInput) GetIncludeRawFileOk() (*bool, bool)`

GetIncludeRawFileOk returns a tuple with the IncludeRawFile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeRawFile

`func (o *OrganizationUserFilesToSyncQueryInput) SetIncludeRawFile(v bool)`

SetIncludeRawFile sets IncludeRawFile field to given value.

### HasIncludeRawFile

`func (o *OrganizationUserFilesToSyncQueryInput) HasIncludeRawFile() bool`

HasIncludeRawFile returns a boolean if a field has been set.

### SetIncludeRawFileNil

`func (o *OrganizationUserFilesToSyncQueryInput) SetIncludeRawFileNil(b bool)`

 SetIncludeRawFileNil sets the value for IncludeRawFile to be an explicit nil

### UnsetIncludeRawFile
`func (o *OrganizationUserFilesToSyncQueryInput) UnsetIncludeRawFile()`

UnsetIncludeRawFile ensures that no value is present for IncludeRawFile, not even an explicit nil
### GetIncludeParsedTextFile

`func (o *OrganizationUserFilesToSyncQueryInput) GetIncludeParsedTextFile() bool`

GetIncludeParsedTextFile returns the IncludeParsedTextFile field if non-nil, zero value otherwise.

### GetIncludeParsedTextFileOk

`func (o *OrganizationUserFilesToSyncQueryInput) GetIncludeParsedTextFileOk() (*bool, bool)`

GetIncludeParsedTextFileOk returns a tuple with the IncludeParsedTextFile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeParsedTextFile

`func (o *OrganizationUserFilesToSyncQueryInput) SetIncludeParsedTextFile(v bool)`

SetIncludeParsedTextFile sets IncludeParsedTextFile field to given value.

### HasIncludeParsedTextFile

`func (o *OrganizationUserFilesToSyncQueryInput) HasIncludeParsedTextFile() bool`

HasIncludeParsedTextFile returns a boolean if a field has been set.

### SetIncludeParsedTextFileNil

`func (o *OrganizationUserFilesToSyncQueryInput) SetIncludeParsedTextFileNil(b bool)`

 SetIncludeParsedTextFileNil sets the value for IncludeParsedTextFile to be an explicit nil

### UnsetIncludeParsedTextFile
`func (o *OrganizationUserFilesToSyncQueryInput) UnsetIncludeParsedTextFile()`

UnsetIncludeParsedTextFile ensures that no value is present for IncludeParsedTextFile, not even an explicit nil
### GetIncludeAdditionalFiles

`func (o *OrganizationUserFilesToSyncQueryInput) GetIncludeAdditionalFiles() bool`

GetIncludeAdditionalFiles returns the IncludeAdditionalFiles field if non-nil, zero value otherwise.

### GetIncludeAdditionalFilesOk

`func (o *OrganizationUserFilesToSyncQueryInput) GetIncludeAdditionalFilesOk() (*bool, bool)`

GetIncludeAdditionalFilesOk returns a tuple with the IncludeAdditionalFiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeAdditionalFiles

`func (o *OrganizationUserFilesToSyncQueryInput) SetIncludeAdditionalFiles(v bool)`

SetIncludeAdditionalFiles sets IncludeAdditionalFiles field to given value.

### HasIncludeAdditionalFiles

`func (o *OrganizationUserFilesToSyncQueryInput) HasIncludeAdditionalFiles() bool`

HasIncludeAdditionalFiles returns a boolean if a field has been set.

### SetIncludeAdditionalFilesNil

`func (o *OrganizationUserFilesToSyncQueryInput) SetIncludeAdditionalFilesNil(b bool)`

 SetIncludeAdditionalFilesNil sets the value for IncludeAdditionalFiles to be an explicit nil

### UnsetIncludeAdditionalFiles
`func (o *OrganizationUserFilesToSyncQueryInput) UnsetIncludeAdditionalFiles()`

UnsetIncludeAdditionalFiles ensures that no value is present for IncludeAdditionalFiles, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


