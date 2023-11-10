# PlanData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TerminalId** | Pointer to **string** |  | [optional] 
**TotalAmount** | **float32** |  | 
**FirstInstallmentAmount** | Pointer to **float32** |  | [optional] 
**Currency** | Pointer to **string** |  | [optional] 
**NumberOfInstallments** | **int32** |  | 
**PurchaseMethod** | [**PurchaseMethod**](PurchaseMethod.md) |  | 
**RefOrderNumber** | Pointer to **string** |  | [optional] 
**AllowedInstallmentOptions** | Pointer to **[]int32** |  | [optional] 
**Tags** | Pointer to **map[string]string** |  | [optional] 
**ProcessingData** | Pointer to [**ProcessingData2**](ProcessingData2.md) |  | [optional] 
**FirstInstallmentDate** | Pointer to **time.Time** |  | [optional] 

## Methods

### NewPlanData

`func NewPlanData(totalAmount float32, numberOfInstallments int32, purchaseMethod PurchaseMethod, ) *PlanData`

NewPlanData instantiates a new PlanData object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPlanDataWithDefaults

`func NewPlanDataWithDefaults() *PlanData`

NewPlanDataWithDefaults instantiates a new PlanData object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTerminalId

`func (o *PlanData) GetTerminalId() string`

GetTerminalId returns the TerminalId field if non-nil, zero value otherwise.

### GetTerminalIdOk

`func (o *PlanData) GetTerminalIdOk() (*string, bool)`

GetTerminalIdOk returns a tuple with the TerminalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerminalId

`func (o *PlanData) SetTerminalId(v string)`

SetTerminalId sets TerminalId field to given value.

### HasTerminalId

`func (o *PlanData) HasTerminalId() bool`

HasTerminalId returns a boolean if a field has been set.

### GetTotalAmount

`func (o *PlanData) GetTotalAmount() float32`

GetTotalAmount returns the TotalAmount field if non-nil, zero value otherwise.

### GetTotalAmountOk

`func (o *PlanData) GetTotalAmountOk() (*float32, bool)`

GetTotalAmountOk returns a tuple with the TotalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalAmount

`func (o *PlanData) SetTotalAmount(v float32)`

SetTotalAmount sets TotalAmount field to given value.


### GetFirstInstallmentAmount

`func (o *PlanData) GetFirstInstallmentAmount() float32`

GetFirstInstallmentAmount returns the FirstInstallmentAmount field if non-nil, zero value otherwise.

### GetFirstInstallmentAmountOk

`func (o *PlanData) GetFirstInstallmentAmountOk() (*float32, bool)`

GetFirstInstallmentAmountOk returns a tuple with the FirstInstallmentAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstInstallmentAmount

`func (o *PlanData) SetFirstInstallmentAmount(v float32)`

SetFirstInstallmentAmount sets FirstInstallmentAmount field to given value.

### HasFirstInstallmentAmount

`func (o *PlanData) HasFirstInstallmentAmount() bool`

HasFirstInstallmentAmount returns a boolean if a field has been set.

### GetCurrency

`func (o *PlanData) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *PlanData) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *PlanData) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *PlanData) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetNumberOfInstallments

`func (o *PlanData) GetNumberOfInstallments() int32`

GetNumberOfInstallments returns the NumberOfInstallments field if non-nil, zero value otherwise.

### GetNumberOfInstallmentsOk

`func (o *PlanData) GetNumberOfInstallmentsOk() (*int32, bool)`

GetNumberOfInstallmentsOk returns a tuple with the NumberOfInstallments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfInstallments

`func (o *PlanData) SetNumberOfInstallments(v int32)`

SetNumberOfInstallments sets NumberOfInstallments field to given value.


### GetPurchaseMethod

`func (o *PlanData) GetPurchaseMethod() PurchaseMethod`

GetPurchaseMethod returns the PurchaseMethod field if non-nil, zero value otherwise.

### GetPurchaseMethodOk

`func (o *PlanData) GetPurchaseMethodOk() (*PurchaseMethod, bool)`

GetPurchaseMethodOk returns a tuple with the PurchaseMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurchaseMethod

`func (o *PlanData) SetPurchaseMethod(v PurchaseMethod)`

SetPurchaseMethod sets PurchaseMethod field to given value.


### GetRefOrderNumber

`func (o *PlanData) GetRefOrderNumber() string`

GetRefOrderNumber returns the RefOrderNumber field if non-nil, zero value otherwise.

### GetRefOrderNumberOk

`func (o *PlanData) GetRefOrderNumberOk() (*string, bool)`

GetRefOrderNumberOk returns a tuple with the RefOrderNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefOrderNumber

`func (o *PlanData) SetRefOrderNumber(v string)`

SetRefOrderNumber sets RefOrderNumber field to given value.

### HasRefOrderNumber

`func (o *PlanData) HasRefOrderNumber() bool`

HasRefOrderNumber returns a boolean if a field has been set.

### GetAllowedInstallmentOptions

`func (o *PlanData) GetAllowedInstallmentOptions() []int32`

GetAllowedInstallmentOptions returns the AllowedInstallmentOptions field if non-nil, zero value otherwise.

### GetAllowedInstallmentOptionsOk

`func (o *PlanData) GetAllowedInstallmentOptionsOk() (*[]int32, bool)`

GetAllowedInstallmentOptionsOk returns a tuple with the AllowedInstallmentOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowedInstallmentOptions

`func (o *PlanData) SetAllowedInstallmentOptions(v []int32)`

SetAllowedInstallmentOptions sets AllowedInstallmentOptions field to given value.

### HasAllowedInstallmentOptions

`func (o *PlanData) HasAllowedInstallmentOptions() bool`

HasAllowedInstallmentOptions returns a boolean if a field has been set.

### GetTags

`func (o *PlanData) GetTags() map[string]string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *PlanData) GetTagsOk() (*map[string]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *PlanData) SetTags(v map[string]string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *PlanData) HasTags() bool`

HasTags returns a boolean if a field has been set.

### GetProcessingData

`func (o *PlanData) GetProcessingData() ProcessingData2`

GetProcessingData returns the ProcessingData field if non-nil, zero value otherwise.

### GetProcessingDataOk

`func (o *PlanData) GetProcessingDataOk() (*ProcessingData2, bool)`

GetProcessingDataOk returns a tuple with the ProcessingData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessingData

`func (o *PlanData) SetProcessingData(v ProcessingData2)`

SetProcessingData sets ProcessingData field to given value.

### HasProcessingData

`func (o *PlanData) HasProcessingData() bool`

HasProcessingData returns a boolean if a field has been set.

### GetFirstInstallmentDate

`func (o *PlanData) GetFirstInstallmentDate() time.Time`

GetFirstInstallmentDate returns the FirstInstallmentDate field if non-nil, zero value otherwise.

### GetFirstInstallmentDateOk

`func (o *PlanData) GetFirstInstallmentDateOk() (*time.Time, bool)`

GetFirstInstallmentDateOk returns a tuple with the FirstInstallmentDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstInstallmentDate

`func (o *PlanData) SetFirstInstallmentDate(v time.Time)`

SetFirstInstallmentDate sets FirstInstallmentDate field to given value.

### HasFirstInstallmentDate

`func (o *PlanData) HasFirstInstallmentDate() bool`

HasFirstInstallmentDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


