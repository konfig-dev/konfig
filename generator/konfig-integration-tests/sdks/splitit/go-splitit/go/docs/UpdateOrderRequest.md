# UpdateOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TrackingNumber** | Pointer to **string** |  | [optional] 
**RefOrderNumber** | Pointer to **string** |  | [optional] 
**ShippingStatus** | Pointer to [**ShippingStatus**](ShippingStatus.md) |  | [optional] 
**Capture** | Pointer to **bool** |  | [optional] 

## Methods

### NewUpdateOrderRequest

`func NewUpdateOrderRequest() *UpdateOrderRequest`

NewUpdateOrderRequest instantiates a new UpdateOrderRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateOrderRequestWithDefaults

`func NewUpdateOrderRequestWithDefaults() *UpdateOrderRequest`

NewUpdateOrderRequestWithDefaults instantiates a new UpdateOrderRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTrackingNumber

`func (o *UpdateOrderRequest) GetTrackingNumber() string`

GetTrackingNumber returns the TrackingNumber field if non-nil, zero value otherwise.

### GetTrackingNumberOk

`func (o *UpdateOrderRequest) GetTrackingNumberOk() (*string, bool)`

GetTrackingNumberOk returns a tuple with the TrackingNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingNumber

`func (o *UpdateOrderRequest) SetTrackingNumber(v string)`

SetTrackingNumber sets TrackingNumber field to given value.

### HasTrackingNumber

`func (o *UpdateOrderRequest) HasTrackingNumber() bool`

HasTrackingNumber returns a boolean if a field has been set.

### GetRefOrderNumber

`func (o *UpdateOrderRequest) GetRefOrderNumber() string`

GetRefOrderNumber returns the RefOrderNumber field if non-nil, zero value otherwise.

### GetRefOrderNumberOk

`func (o *UpdateOrderRequest) GetRefOrderNumberOk() (*string, bool)`

GetRefOrderNumberOk returns a tuple with the RefOrderNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefOrderNumber

`func (o *UpdateOrderRequest) SetRefOrderNumber(v string)`

SetRefOrderNumber sets RefOrderNumber field to given value.

### HasRefOrderNumber

`func (o *UpdateOrderRequest) HasRefOrderNumber() bool`

HasRefOrderNumber returns a boolean if a field has been set.

### GetShippingStatus

`func (o *UpdateOrderRequest) GetShippingStatus() ShippingStatus`

GetShippingStatus returns the ShippingStatus field if non-nil, zero value otherwise.

### GetShippingStatusOk

`func (o *UpdateOrderRequest) GetShippingStatusOk() (*ShippingStatus, bool)`

GetShippingStatusOk returns a tuple with the ShippingStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShippingStatus

`func (o *UpdateOrderRequest) SetShippingStatus(v ShippingStatus)`

SetShippingStatus sets ShippingStatus field to given value.

### HasShippingStatus

`func (o *UpdateOrderRequest) HasShippingStatus() bool`

HasShippingStatus returns a boolean if a field has been set.

### GetCapture

`func (o *UpdateOrderRequest) GetCapture() bool`

GetCapture returns the Capture field if non-nil, zero value otherwise.

### GetCaptureOk

`func (o *UpdateOrderRequest) GetCaptureOk() (*bool, bool)`

GetCaptureOk returns a tuple with the Capture field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCapture

`func (o *UpdateOrderRequest) SetCapture(v bool)`

SetCapture sets Capture field to given value.

### HasCapture

`func (o *UpdateOrderRequest) HasCapture() bool`

HasCapture returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


