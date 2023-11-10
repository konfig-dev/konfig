# InstallmentPlanRefundRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | **float32** |  | 
**RefundStrategy** | Pointer to [**RefundStrategy**](RefundStrategy.md) |  | [optional] 

## Methods

### NewInstallmentPlanRefundRequest

`func NewInstallmentPlanRefundRequest(amount float32, ) *InstallmentPlanRefundRequest`

NewInstallmentPlanRefundRequest instantiates a new InstallmentPlanRefundRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInstallmentPlanRefundRequestWithDefaults

`func NewInstallmentPlanRefundRequestWithDefaults() *InstallmentPlanRefundRequest`

NewInstallmentPlanRefundRequestWithDefaults instantiates a new InstallmentPlanRefundRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *InstallmentPlanRefundRequest) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *InstallmentPlanRefundRequest) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *InstallmentPlanRefundRequest) SetAmount(v float32)`

SetAmount sets Amount field to given value.


### GetRefundStrategy

`func (o *InstallmentPlanRefundRequest) GetRefundStrategy() RefundStrategy`

GetRefundStrategy returns the RefundStrategy field if non-nil, zero value otherwise.

### GetRefundStrategyOk

`func (o *InstallmentPlanRefundRequest) GetRefundStrategyOk() (*RefundStrategy, bool)`

GetRefundStrategyOk returns a tuple with the RefundStrategy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundStrategy

`func (o *InstallmentPlanRefundRequest) SetRefundStrategy(v RefundStrategy)`

SetRefundStrategy sets RefundStrategy field to given value.

### HasRefundStrategy

`func (o *InstallmentPlanRefundRequest) HasRefundStrategy() bool`

HasRefundStrategy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


