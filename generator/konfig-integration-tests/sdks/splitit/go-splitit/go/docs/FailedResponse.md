# FailedResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TraceId** | Pointer to **string** |  | [optional] 
**Error** | Pointer to [**ErrorExtended**](ErrorExtended.md) |  | [optional] 

## Methods

### NewFailedResponse

`func NewFailedResponse() *FailedResponse`

NewFailedResponse instantiates a new FailedResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFailedResponseWithDefaults

`func NewFailedResponseWithDefaults() *FailedResponse`

NewFailedResponseWithDefaults instantiates a new FailedResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTraceId

`func (o *FailedResponse) GetTraceId() string`

GetTraceId returns the TraceId field if non-nil, zero value otherwise.

### GetTraceIdOk

`func (o *FailedResponse) GetTraceIdOk() (*string, bool)`

GetTraceIdOk returns a tuple with the TraceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceId

`func (o *FailedResponse) SetTraceId(v string)`

SetTraceId sets TraceId field to given value.

### HasTraceId

`func (o *FailedResponse) HasTraceId() bool`

HasTraceId returns a boolean if a field has been set.

### GetError

`func (o *FailedResponse) GetError() ErrorExtended`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *FailedResponse) GetErrorOk() (*ErrorExtended, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *FailedResponse) SetError(v ErrorExtended)`

SetError sets Error field to given value.

### HasError

`func (o *FailedResponse) HasError() bool`

HasError returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


