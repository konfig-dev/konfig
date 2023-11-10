# InstallmentPlanUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RefOrderNumber** | Pointer to **string** |  | [optional] 
**TrackingNumber** | Pointer to **string** |  | [optional] 
**Capture** | Pointer to **bool** |  | [optional] 
**ShippingStatus** | Pointer to [**ShippingStatus2**](ShippingStatus2.md) |  | [optional] 

## Methods

### NewInstallmentPlanUpdateRequest

`func NewInstallmentPlanUpdateRequest() *InstallmentPlanUpdateRequest`

NewInstallmentPlanUpdateRequest instantiates a new InstallmentPlanUpdateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInstallmentPlanUpdateRequestWithDefaults

`func NewInstallmentPlanUpdateRequestWithDefaults() *InstallmentPlanUpdateRequest`

NewInstallmentPlanUpdateRequestWithDefaults instantiates a new InstallmentPlanUpdateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRefOrderNumber

`func (o *InstallmentPlanUpdateRequest) GetRefOrderNumber() string`

GetRefOrderNumber returns the RefOrderNumber field if non-nil, zero value otherwise.

### GetRefOrderNumberOk

`func (o *InstallmentPlanUpdateRequest) GetRefOrderNumberOk() (*string, bool)`

GetRefOrderNumberOk returns a tuple with the RefOrderNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefOrderNumber

`func (o *InstallmentPlanUpdateRequest) SetRefOrderNumber(v string)`

SetRefOrderNumber sets RefOrderNumber field to given value.

### HasRefOrderNumber

`func (o *InstallmentPlanUpdateRequest) HasRefOrderNumber() bool`

HasRefOrderNumber returns a boolean if a field has been set.

### GetTrackingNumber

`func (o *InstallmentPlanUpdateRequest) GetTrackingNumber() string`

GetTrackingNumber returns the TrackingNumber field if non-nil, zero value otherwise.

### GetTrackingNumberOk

`func (o *InstallmentPlanUpdateRequest) GetTrackingNumberOk() (*string, bool)`

GetTrackingNumberOk returns a tuple with the TrackingNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingNumber

`func (o *InstallmentPlanUpdateRequest) SetTrackingNumber(v string)`

SetTrackingNumber sets TrackingNumber field to given value.

### HasTrackingNumber

`func (o *InstallmentPlanUpdateRequest) HasTrackingNumber() bool`

HasTrackingNumber returns a boolean if a field has been set.

### GetCapture

`func (o *InstallmentPlanUpdateRequest) GetCapture() bool`

GetCapture returns the Capture field if non-nil, zero value otherwise.

### GetCaptureOk

`func (o *InstallmentPlanUpdateRequest) GetCaptureOk() (*bool, bool)`

GetCaptureOk returns a tuple with the Capture field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCapture

`func (o *InstallmentPlanUpdateRequest) SetCapture(v bool)`

SetCapture sets Capture field to given value.

### HasCapture

`func (o *InstallmentPlanUpdateRequest) HasCapture() bool`

HasCapture returns a boolean if a field has been set.

### GetShippingStatus

`func (o *InstallmentPlanUpdateRequest) GetShippingStatus() ShippingStatus2`

GetShippingStatus returns the ShippingStatus field if non-nil, zero value otherwise.

### GetShippingStatusOk

`func (o *InstallmentPlanUpdateRequest) GetShippingStatusOk() (*ShippingStatus2, bool)`

GetShippingStatusOk returns a tuple with the ShippingStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippingStatus

`func (o *InstallmentPlanUpdateRequest) SetShippingStatus(v ShippingStatus2)`

SetShippingStatus sets ShippingStatus field to given value.

### HasShippingStatus

`func (o *InstallmentPlanUpdateRequest) HasShippingStatus() bool`

HasShippingStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


