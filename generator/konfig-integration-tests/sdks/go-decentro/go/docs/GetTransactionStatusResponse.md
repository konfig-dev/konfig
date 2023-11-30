# GetTransactionStatusResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DecentroTxnId** | Pointer to **string** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 
**ResponseCode** | Pointer to **string** |  | [optional] 
**Message** | Pointer to **string** |  | [optional] 
**Data** | Pointer to [**GetTransactionStatusResponseData**](GetTransactionStatusResponseData.md) |  | [optional] 
**Error** | Pointer to [**GetTransactionStatusResponseError**](GetTransactionStatusResponseError.md) |  | [optional] 

## Methods

### NewGetTransactionStatusResponse

`func NewGetTransactionStatusResponse() *GetTransactionStatusResponse`

NewGetTransactionStatusResponse instantiates a new GetTransactionStatusResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetTransactionStatusResponseWithDefaults

`func NewGetTransactionStatusResponseWithDefaults() *GetTransactionStatusResponse`

NewGetTransactionStatusResponseWithDefaults instantiates a new GetTransactionStatusResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDecentroTxnId

`func (o *GetTransactionStatusResponse) GetDecentroTxnId() string`

GetDecentroTxnId returns the DecentroTxnId field if non-nil, zero value otherwise.

### GetDecentroTxnIdOk

`func (o *GetTransactionStatusResponse) GetDecentroTxnIdOk() (*string, bool)`

GetDecentroTxnIdOk returns a tuple with the DecentroTxnId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecentroTxnId

`func (o *GetTransactionStatusResponse) SetDecentroTxnId(v string)`

SetDecentroTxnId sets DecentroTxnId field to given value.

### HasDecentroTxnId

`func (o *GetTransactionStatusResponse) HasDecentroTxnId() bool`

HasDecentroTxnId returns a boolean if a field has been set.

### GetStatus

`func (o *GetTransactionStatusResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *GetTransactionStatusResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *GetTransactionStatusResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *GetTransactionStatusResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetResponseCode

`func (o *GetTransactionStatusResponse) GetResponseCode() string`

GetResponseCode returns the ResponseCode field if non-nil, zero value otherwise.

### GetResponseCodeOk

`func (o *GetTransactionStatusResponse) GetResponseCodeOk() (*string, bool)`

GetResponseCodeOk returns a tuple with the ResponseCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseCode

`func (o *GetTransactionStatusResponse) SetResponseCode(v string)`

SetResponseCode sets ResponseCode field to given value.

### HasResponseCode

`func (o *GetTransactionStatusResponse) HasResponseCode() bool`

HasResponseCode returns a boolean if a field has been set.

### GetMessage

`func (o *GetTransactionStatusResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetTransactionStatusResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetTransactionStatusResponse) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetTransactionStatusResponse) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetData

`func (o *GetTransactionStatusResponse) GetData() GetTransactionStatusResponseData`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *GetTransactionStatusResponse) GetDataOk() (*GetTransactionStatusResponseData, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *GetTransactionStatusResponse) SetData(v GetTransactionStatusResponseData)`

SetData sets Data field to given value.

### HasData

`func (o *GetTransactionStatusResponse) HasData() bool`

HasData returns a boolean if a field has been set.

### GetError

`func (o *GetTransactionStatusResponse) GetError() GetTransactionStatusResponseError`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetTransactionStatusResponse) GetErrorOk() (*GetTransactionStatusResponseError, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetTransactionStatusResponse) SetError(v GetTransactionStatusResponseError)`

SetError sets Error field to given value.

### HasError

`func (o *GetTransactionStatusResponse) HasError() bool`

HasError returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


