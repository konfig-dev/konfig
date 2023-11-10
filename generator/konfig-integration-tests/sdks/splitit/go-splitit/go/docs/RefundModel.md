# RefundModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RefundId** | Pointer to **string** |  | [optional] 
**SubmitDate** | **time.Time** |  | 
**TotalAmount** | **float32** |  | 
**Status** | [**RefundStatus**](RefundStatus.md) |  | 
**NonCreditRefundAmount** | **float32** |  | 
**CreditRefundAmount** | **float32** |  | 

## Methods

### NewRefundModel

`func NewRefundModel(submitDate time.Time, totalAmount float32, status RefundStatus, nonCreditRefundAmount float32, creditRefundAmount float32, ) *RefundModel`

NewRefundModel instantiates a new RefundModel object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRefundModelWithDefaults

`func NewRefundModelWithDefaults() *RefundModel`

NewRefundModelWithDefaults instantiates a new RefundModel object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRefundId

`func (o *RefundModel) GetRefundId() string`

GetRefundId returns the RefundId field if non-nil, zero value otherwise.

### GetRefundIdOk

`func (o *RefundModel) GetRefundIdOk() (*string, bool)`

GetRefundIdOk returns a tuple with the RefundId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundId

`func (o *RefundModel) SetRefundId(v string)`

SetRefundId sets RefundId field to given value.

### HasRefundId

`func (o *RefundModel) HasRefundId() bool`

HasRefundId returns a boolean if a field has been set.

### GetSubmitDate

`func (o *RefundModel) GetSubmitDate() time.Time`

GetSubmitDate returns the SubmitDate field if non-nil, zero value otherwise.

### GetSubmitDateOk

`func (o *RefundModel) GetSubmitDateOk() (*time.Time, bool)`

GetSubmitDateOk returns a tuple with the SubmitDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubmitDate

`func (o *RefundModel) SetSubmitDate(v time.Time)`

SetSubmitDate sets SubmitDate field to given value.


### GetTotalAmount

`func (o *RefundModel) GetTotalAmount() float32`

GetTotalAmount returns the TotalAmount field if non-nil, zero value otherwise.

### GetTotalAmountOk

`func (o *RefundModel) GetTotalAmountOk() (*float32, bool)`

GetTotalAmountOk returns a tuple with the TotalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalAmount

`func (o *RefundModel) SetTotalAmount(v float32)`

SetTotalAmount sets TotalAmount field to given value.


### GetStatus

`func (o *RefundModel) GetStatus() RefundStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *RefundModel) GetStatusOk() (*RefundStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *RefundModel) SetStatus(v RefundStatus)`

SetStatus sets Status field to given value.


### GetNonCreditRefundAmount

`func (o *RefundModel) GetNonCreditRefundAmount() float32`

GetNonCreditRefundAmount returns the NonCreditRefundAmount field if non-nil, zero value otherwise.

### GetNonCreditRefundAmountOk

`func (o *RefundModel) GetNonCreditRefundAmountOk() (*float32, bool)`

GetNonCreditRefundAmountOk returns a tuple with the NonCreditRefundAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonCreditRefundAmount

`func (o *RefundModel) SetNonCreditRefundAmount(v float32)`

SetNonCreditRefundAmount sets NonCreditRefundAmount field to given value.


### GetCreditRefundAmount

`func (o *RefundModel) GetCreditRefundAmount() float32`

GetCreditRefundAmount returns the CreditRefundAmount field if non-nil, zero value otherwise.

### GetCreditRefundAmountOk

`func (o *RefundModel) GetCreditRefundAmountOk() (*float32, bool)`

GetCreditRefundAmountOk returns a tuple with the CreditRefundAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditRefundAmount

`func (o *RefundModel) SetCreditRefundAmount(v float32)`

SetCreditRefundAmount sets CreditRefundAmount field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


