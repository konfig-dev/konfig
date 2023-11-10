# InstallmentPlanRefundResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RefundId** | Pointer to **string** |  | [optional] 
**InstallmentPlanNumber** | Pointer to **string** |  | [optional] 
**Currency** | Pointer to **string** |  | [optional] 
**NonCreditRefundAmount** | Pointer to **float32** |  | [optional] 
**CreditRefundAmount** | Pointer to **float32** |  | [optional] 
**Summary** | Pointer to [**RefundSummary**](RefundSummary.md) |  | [optional] 

## Methods

### NewInstallmentPlanRefundResponse

`func NewInstallmentPlanRefundResponse() *InstallmentPlanRefundResponse`

NewInstallmentPlanRefundResponse instantiates a new InstallmentPlanRefundResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInstallmentPlanRefundResponseWithDefaults

`func NewInstallmentPlanRefundResponseWithDefaults() *InstallmentPlanRefundResponse`

NewInstallmentPlanRefundResponseWithDefaults instantiates a new InstallmentPlanRefundResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRefundId

`func (o *InstallmentPlanRefundResponse) GetRefundId() string`

GetRefundId returns the RefundId field if non-nil, zero value otherwise.

### GetRefundIdOk

`func (o *InstallmentPlanRefundResponse) GetRefundIdOk() (*string, bool)`

GetRefundIdOk returns a tuple with the RefundId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefundId

`func (o *InstallmentPlanRefundResponse) SetRefundId(v string)`

SetRefundId sets RefundId field to given value.

### HasRefundId

`func (o *InstallmentPlanRefundResponse) HasRefundId() bool`

HasRefundId returns a boolean if a field has been set.

### GetInstallmentPlanNumber

`func (o *InstallmentPlanRefundResponse) GetInstallmentPlanNumber() string`

GetInstallmentPlanNumber returns the InstallmentPlanNumber field if non-nil, zero value otherwise.

### GetInstallmentPlanNumberOk

`func (o *InstallmentPlanRefundResponse) GetInstallmentPlanNumberOk() (*string, bool)`

GetInstallmentPlanNumberOk returns a tuple with the InstallmentPlanNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstallmentPlanNumber

`func (o *InstallmentPlanRefundResponse) SetInstallmentPlanNumber(v string)`

SetInstallmentPlanNumber sets InstallmentPlanNumber field to given value.

### HasInstallmentPlanNumber

`func (o *InstallmentPlanRefundResponse) HasInstallmentPlanNumber() bool`

HasInstallmentPlanNumber returns a boolean if a field has been set.

### GetCurrency

`func (o *InstallmentPlanRefundResponse) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *InstallmentPlanRefundResponse) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *InstallmentPlanRefundResponse) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *InstallmentPlanRefundResponse) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetNonCreditRefundAmount

`func (o *InstallmentPlanRefundResponse) GetNonCreditRefundAmount() float32`

GetNonCreditRefundAmount returns the NonCreditRefundAmount field if non-nil, zero value otherwise.

### GetNonCreditRefundAmountOk

`func (o *InstallmentPlanRefundResponse) GetNonCreditRefundAmountOk() (*float32, bool)`

GetNonCreditRefundAmountOk returns a tuple with the NonCreditRefundAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonCreditRefundAmount

`func (o *InstallmentPlanRefundResponse) SetNonCreditRefundAmount(v float32)`

SetNonCreditRefundAmount sets NonCreditRefundAmount field to given value.

### HasNonCreditRefundAmount

`func (o *InstallmentPlanRefundResponse) HasNonCreditRefundAmount() bool`

HasNonCreditRefundAmount returns a boolean if a field has been set.

### GetCreditRefundAmount

`func (o *InstallmentPlanRefundResponse) GetCreditRefundAmount() float32`

GetCreditRefundAmount returns the CreditRefundAmount field if non-nil, zero value otherwise.

### GetCreditRefundAmountOk

`func (o *InstallmentPlanRefundResponse) GetCreditRefundAmountOk() (*float32, bool)`

GetCreditRefundAmountOk returns a tuple with the CreditRefundAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditRefundAmount

`func (o *InstallmentPlanRefundResponse) SetCreditRefundAmount(v float32)`

SetCreditRefundAmount sets CreditRefundAmount field to given value.

### HasCreditRefundAmount

`func (o *InstallmentPlanRefundResponse) HasCreditRefundAmount() bool`

HasCreditRefundAmount returns a boolean if a field has been set.

### GetSummary

`func (o *InstallmentPlanRefundResponse) GetSummary() RefundSummary`

GetSummary returns the Summary field if non-nil, zero value otherwise.

### GetSummaryOk

`func (o *InstallmentPlanRefundResponse) GetSummaryOk() (*RefundSummary, bool)`

GetSummaryOk returns a tuple with the Summary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSummary

`func (o *InstallmentPlanRefundResponse) SetSummary(v RefundSummary)`

SetSummary sets Summary field to given value.

### HasSummary

`func (o *InstallmentPlanRefundResponse) HasSummary() bool`

HasSummary returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


