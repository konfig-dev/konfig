# OrganizationUserDataSourceResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Results** | [**[]OrganizationUserDataSourceAPI**](OrganizationUserDataSourceAPI.md) |  | 
**Count** | **int32** |  | 

## Methods

### NewOrganizationUserDataSourceResponse

`func NewOrganizationUserDataSourceResponse(results []OrganizationUserDataSourceAPI, count int32, ) *OrganizationUserDataSourceResponse`

NewOrganizationUserDataSourceResponse instantiates a new OrganizationUserDataSourceResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrganizationUserDataSourceResponseWithDefaults

`func NewOrganizationUserDataSourceResponseWithDefaults() *OrganizationUserDataSourceResponse`

NewOrganizationUserDataSourceResponseWithDefaults instantiates a new OrganizationUserDataSourceResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetResults

`func (o *OrganizationUserDataSourceResponse) GetResults() []OrganizationUserDataSourceAPI`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *OrganizationUserDataSourceResponse) GetResultsOk() (*[]OrganizationUserDataSourceAPI, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *OrganizationUserDataSourceResponse) SetResults(v []OrganizationUserDataSourceAPI)`

SetResults sets Results field to given value.


### GetCount

`func (o *OrganizationUserDataSourceResponse) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *OrganizationUserDataSourceResponse) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *OrganizationUserDataSourceResponse) SetCount(v int32)`

SetCount sets Count field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


