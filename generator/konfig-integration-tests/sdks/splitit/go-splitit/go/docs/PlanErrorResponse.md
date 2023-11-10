# PlanErrorResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TraceId** | Pointer to **string** |  | [optional] 
**Error** | Pointer to [**ErrorExtended**](ErrorExtended.md) |  | [optional] 
**InstallmentPlanNumber** | Pointer to **string** |  | [optional] 

## Methods

### NewPlanErrorResponse

`func NewPlanErrorResponse() *PlanErrorResponse`

NewPlanErrorResponse instantiates a new PlanErrorResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPlanErrorResponseWithDefaults

`func NewPlanErrorResponseWithDefaults() *PlanErrorResponse`

NewPlanErrorResponseWithDefaults instantiates a new PlanErrorResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTraceId

`func (o *PlanErrorResponse) GetTraceId() string`

GetTraceId returns the TraceId field if non-nil, zero value otherwise.

### GetTraceIdOk

`func (o *PlanErrorResponse) GetTraceIdOk() (*string, bool)`

GetTraceIdOk returns a tuple with the TraceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceId

`func (o *PlanErrorResponse) SetTraceId(v string)`

SetTraceId sets TraceId field to given value.

### HasTraceId

`func (o *PlanErrorResponse) HasTraceId() bool`

HasTraceId returns a boolean if a field has been set.

### GetError

`func (o *PlanErrorResponse) GetError() ErrorExtended`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *PlanErrorResponse) GetErrorOk() (*ErrorExtended, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *PlanErrorResponse) SetError(v ErrorExtended)`

SetError sets Error field to given value.

### HasError

`func (o *PlanErrorResponse) HasError() bool`

HasError returns a boolean if a field has been set.

### GetInstallmentPlanNumber

`func (o *PlanErrorResponse) GetInstallmentPlanNumber() string`

GetInstallmentPlanNumber returns the InstallmentPlanNumber field if non-nil, zero value otherwise.

### GetInstallmentPlanNumberOk

`func (o *PlanErrorResponse) GetInstallmentPlanNumberOk() (*string, bool)`

GetInstallmentPlanNumberOk returns a tuple with the InstallmentPlanNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstallmentPlanNumber

`func (o *PlanErrorResponse) SetInstallmentPlanNumber(v string)`

SetInstallmentPlanNumber sets InstallmentPlanNumber field to given value.

### HasInstallmentPlanNumber

`func (o *PlanErrorResponse) HasInstallmentPlanNumber() bool`

HasInstallmentPlanNumber returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


