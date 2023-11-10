# InstallmentPlanUpdateRequestByIdentifier

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RefOrderNumber** | Pointer to **string** |  | [optional] 
**TrackingNumber** | Pointer to **string** |  | [optional] 
**Capture** | Pointer to **bool** |  | [optional] 
**ShippingStatus** | Pointer to [**ShippingStatus2**](ShippingStatus2.md) |  | [optional] 
**Identifier** | Pointer to [**IdentifierContract**](IdentifierContract.md) |  | [optional] 

## Methods

### NewInstallmentPlanUpdateRequestByIdentifier

`func NewInstallmentPlanUpdateRequestByIdentifier() *InstallmentPlanUpdateRequestByIdentifier`

NewInstallmentPlanUpdateRequestByIdentifier instantiates a new InstallmentPlanUpdateRequestByIdentifier object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInstallmentPlanUpdateRequestByIdentifierWithDefaults

`func NewInstallmentPlanUpdateRequestByIdentifierWithDefaults() *InstallmentPlanUpdateRequestByIdentifier`

NewInstallmentPlanUpdateRequestByIdentifierWithDefaults instantiates a new InstallmentPlanUpdateRequestByIdentifier object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRefOrderNumber

`func (o *InstallmentPlanUpdateRequestByIdentifier) GetRefOrderNumber() string`

GetRefOrderNumber returns the RefOrderNumber field if non-nil, zero value otherwise.

### GetRefOrderNumberOk

`func (o *InstallmentPlanUpdateRequestByIdentifier) GetRefOrderNumberOk() (*string, bool)`

GetRefOrderNumberOk returns a tuple with the RefOrderNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefOrderNumber

`func (o *InstallmentPlanUpdateRequestByIdentifier) SetRefOrderNumber(v string)`

SetRefOrderNumber sets RefOrderNumber field to given value.

### HasRefOrderNumber

`func (o *InstallmentPlanUpdateRequestByIdentifier) HasRefOrderNumber() bool`

HasRefOrderNumber returns a boolean if a field has been set.

### GetTrackingNumber

`func (o *InstallmentPlanUpdateRequestByIdentifier) GetTrackingNumber() string`

GetTrackingNumber returns the TrackingNumber field if non-nil, zero value otherwise.

### GetTrackingNumberOk

`func (o *InstallmentPlanUpdateRequestByIdentifier) GetTrackingNumberOk() (*string, bool)`

GetTrackingNumberOk returns a tuple with the TrackingNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingNumber

`func (o *InstallmentPlanUpdateRequestByIdentifier) SetTrackingNumber(v string)`

SetTrackingNumber sets TrackingNumber field to given value.

### HasTrackingNumber

`func (o *InstallmentPlanUpdateRequestByIdentifier) HasTrackingNumber() bool`

HasTrackingNumber returns a boolean if a field has been set.

### GetCapture

`func (o *InstallmentPlanUpdateRequestByIdentifier) GetCapture() bool`

GetCapture returns the Capture field if non-nil, zero value otherwise.

### GetCaptureOk

`func (o *InstallmentPlanUpdateRequestByIdentifier) GetCaptureOk() (*bool, bool)`

GetCaptureOk returns a tuple with the Capture field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCapture

`func (o *InstallmentPlanUpdateRequestByIdentifier) SetCapture(v bool)`

SetCapture sets Capture field to given value.

### HasCapture

`func (o *InstallmentPlanUpdateRequestByIdentifier) HasCapture() bool`

HasCapture returns a boolean if a field has been set.

### GetShippingStatus

`func (o *InstallmentPlanUpdateRequestByIdentifier) GetShippingStatus() ShippingStatus2`

GetShippingStatus returns the ShippingStatus field if non-nil, zero value otherwise.

### GetShippingStatusOk

`func (o *InstallmentPlanUpdateRequestByIdentifier) GetShippingStatusOk() (*ShippingStatus2, bool)`

GetShippingStatusOk returns a tuple with the ShippingStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippingStatus

`func (o *InstallmentPlanUpdateRequestByIdentifier) SetShippingStatus(v ShippingStatus2)`

SetShippingStatus sets ShippingStatus field to given value.

### HasShippingStatus

`func (o *InstallmentPlanUpdateRequestByIdentifier) HasShippingStatus() bool`

HasShippingStatus returns a boolean if a field has been set.

### GetIdentifier

`func (o *InstallmentPlanUpdateRequestByIdentifier) GetIdentifier() IdentifierContract`

GetIdentifier returns the Identifier field if non-nil, zero value otherwise.

### GetIdentifierOk

`func (o *InstallmentPlanUpdateRequestByIdentifier) GetIdentifierOk() (*IdentifierContract, bool)`

GetIdentifierOk returns a tuple with the Identifier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentifier

`func (o *InstallmentPlanUpdateRequestByIdentifier) SetIdentifier(v IdentifierContract)`

SetIdentifier sets Identifier field to given value.

### HasIdentifier

`func (o *InstallmentPlanUpdateRequestByIdentifier) HasIdentifier() bool`

HasIdentifier returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


