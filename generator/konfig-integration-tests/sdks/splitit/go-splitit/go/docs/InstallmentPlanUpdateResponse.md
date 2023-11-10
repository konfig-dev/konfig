# InstallmentPlanUpdateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RefOrderNumber** | Pointer to **string** |  | [optional] 
**InstallmentPlanNumber** | Pointer to **string** |  | [optional] 
**Status** | [**PlanStatus**](PlanStatus.md) |  | 
**ShippingStatus** | [**ShippingStatus**](ShippingStatus.md) |  | 

## Methods

### NewInstallmentPlanUpdateResponse

`func NewInstallmentPlanUpdateResponse(status PlanStatus, shippingStatus ShippingStatus, ) *InstallmentPlanUpdateResponse`

NewInstallmentPlanUpdateResponse instantiates a new InstallmentPlanUpdateResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInstallmentPlanUpdateResponseWithDefaults

`func NewInstallmentPlanUpdateResponseWithDefaults() *InstallmentPlanUpdateResponse`

NewInstallmentPlanUpdateResponseWithDefaults instantiates a new InstallmentPlanUpdateResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRefOrderNumber

`func (o *InstallmentPlanUpdateResponse) GetRefOrderNumber() string`

GetRefOrderNumber returns the RefOrderNumber field if non-nil, zero value otherwise.

### GetRefOrderNumberOk

`func (o *InstallmentPlanUpdateResponse) GetRefOrderNumberOk() (*string, bool)`

GetRefOrderNumberOk returns a tuple with the RefOrderNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefOrderNumber

`func (o *InstallmentPlanUpdateResponse) SetRefOrderNumber(v string)`

SetRefOrderNumber sets RefOrderNumber field to given value.

### HasRefOrderNumber

`func (o *InstallmentPlanUpdateResponse) HasRefOrderNumber() bool`

HasRefOrderNumber returns a boolean if a field has been set.

### GetInstallmentPlanNumber

`func (o *InstallmentPlanUpdateResponse) GetInstallmentPlanNumber() string`

GetInstallmentPlanNumber returns the InstallmentPlanNumber field if non-nil, zero value otherwise.

### GetInstallmentPlanNumberOk

`func (o *InstallmentPlanUpdateResponse) GetInstallmentPlanNumberOk() (*string, bool)`

GetInstallmentPlanNumberOk returns a tuple with the InstallmentPlanNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstallmentPlanNumber

`func (o *InstallmentPlanUpdateResponse) SetInstallmentPlanNumber(v string)`

SetInstallmentPlanNumber sets InstallmentPlanNumber field to given value.

### HasInstallmentPlanNumber

`func (o *InstallmentPlanUpdateResponse) HasInstallmentPlanNumber() bool`

HasInstallmentPlanNumber returns a boolean if a field has been set.

### GetStatus

`func (o *InstallmentPlanUpdateResponse) GetStatus() PlanStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *InstallmentPlanUpdateResponse) GetStatusOk() (*PlanStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *InstallmentPlanUpdateResponse) SetStatus(v PlanStatus)`

SetStatus sets Status field to given value.


### GetShippingStatus

`func (o *InstallmentPlanUpdateResponse) GetShippingStatus() ShippingStatus`

GetShippingStatus returns the ShippingStatus field if non-nil, zero value otherwise.

### GetShippingStatusOk

`func (o *InstallmentPlanUpdateResponse) GetShippingStatusOk() (*ShippingStatus, bool)`

GetShippingStatusOk returns a tuple with the ShippingStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippingStatus

`func (o *InstallmentPlanUpdateResponse) SetShippingStatus(v ShippingStatus)`

SetShippingStatus sets ShippingStatus field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


