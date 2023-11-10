# PlanDataModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalAmount** | **float32** |  | 
**Currency** | Pointer to **string** |  | [optional] 
**NumberOfInstallments** | Pointer to **int32** |  | [optional] 
**TerminalId** | Pointer to **string** |  | [optional] 
**PurchaseMethod** | [**PurchaseMethod**](PurchaseMethod.md) |  | 
**RefOrderNumber** | Pointer to **string** |  | [optional] 
**ExtendedParams** | Pointer to **map[string]string** |  | [optional] 
**FirstInstallmentAmount** | Pointer to **float32** |  | [optional] 
**FirstInstallmentDate** | Pointer to **time.Time** |  | [optional] 

## Methods

### NewPlanDataModel

`func NewPlanDataModel(totalAmount float32, purchaseMethod PurchaseMethod, ) *PlanDataModel`

NewPlanDataModel instantiates a new PlanDataModel object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPlanDataModelWithDefaults

`func NewPlanDataModelWithDefaults() *PlanDataModel`

NewPlanDataModelWithDefaults instantiates a new PlanDataModel object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotalAmount

`func (o *PlanDataModel) GetTotalAmount() float32`

GetTotalAmount returns the TotalAmount field if non-nil, zero value otherwise.

### GetTotalAmountOk

`func (o *PlanDataModel) GetTotalAmountOk() (*float32, bool)`

GetTotalAmountOk returns a tuple with the TotalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalAmount

`func (o *PlanDataModel) SetTotalAmount(v float32)`

SetTotalAmount sets TotalAmount field to given value.


### GetCurrency

`func (o *PlanDataModel) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *PlanDataModel) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *PlanDataModel) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *PlanDataModel) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetNumberOfInstallments

`func (o *PlanDataModel) GetNumberOfInstallments() int32`

GetNumberOfInstallments returns the NumberOfInstallments field if non-nil, zero value otherwise.

### GetNumberOfInstallmentsOk

`func (o *PlanDataModel) GetNumberOfInstallmentsOk() (*int32, bool)`

GetNumberOfInstallmentsOk returns a tuple with the NumberOfInstallments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfInstallments

`func (o *PlanDataModel) SetNumberOfInstallments(v int32)`

SetNumberOfInstallments sets NumberOfInstallments field to given value.

### HasNumberOfInstallments

`func (o *PlanDataModel) HasNumberOfInstallments() bool`

HasNumberOfInstallments returns a boolean if a field has been set.

### GetTerminalId

`func (o *PlanDataModel) GetTerminalId() string`

GetTerminalId returns the TerminalId field if non-nil, zero value otherwise.

### GetTerminalIdOk

`func (o *PlanDataModel) GetTerminalIdOk() (*string, bool)`

GetTerminalIdOk returns a tuple with the TerminalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerminalId

`func (o *PlanDataModel) SetTerminalId(v string)`

SetTerminalId sets TerminalId field to given value.

### HasTerminalId

`func (o *PlanDataModel) HasTerminalId() bool`

HasTerminalId returns a boolean if a field has been set.

### GetPurchaseMethod

`func (o *PlanDataModel) GetPurchaseMethod() PurchaseMethod`

GetPurchaseMethod returns the PurchaseMethod field if non-nil, zero value otherwise.

### GetPurchaseMethodOk

`func (o *PlanDataModel) GetPurchaseMethodOk() (*PurchaseMethod, bool)`

GetPurchaseMethodOk returns a tuple with the PurchaseMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurchaseMethod

`func (o *PlanDataModel) SetPurchaseMethod(v PurchaseMethod)`

SetPurchaseMethod sets PurchaseMethod field to given value.


### GetRefOrderNumber

`func (o *PlanDataModel) GetRefOrderNumber() string`

GetRefOrderNumber returns the RefOrderNumber field if non-nil, zero value otherwise.

### GetRefOrderNumberOk

`func (o *PlanDataModel) GetRefOrderNumberOk() (*string, bool)`

GetRefOrderNumberOk returns a tuple with the RefOrderNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefOrderNumber

`func (o *PlanDataModel) SetRefOrderNumber(v string)`

SetRefOrderNumber sets RefOrderNumber field to given value.

### HasRefOrderNumber

`func (o *PlanDataModel) HasRefOrderNumber() bool`

HasRefOrderNumber returns a boolean if a field has been set.

### GetExtendedParams

`func (o *PlanDataModel) GetExtendedParams() map[string]string`

GetExtendedParams returns the ExtendedParams field if non-nil, zero value otherwise.

### GetExtendedParamsOk

`func (o *PlanDataModel) GetExtendedParamsOk() (*map[string]string, bool)`

GetExtendedParamsOk returns a tuple with the ExtendedParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtendedParams

`func (o *PlanDataModel) SetExtendedParams(v map[string]string)`

SetExtendedParams sets ExtendedParams field to given value.

### HasExtendedParams

`func (o *PlanDataModel) HasExtendedParams() bool`

HasExtendedParams returns a boolean if a field has been set.

### GetFirstInstallmentAmount

`func (o *PlanDataModel) GetFirstInstallmentAmount() float32`

GetFirstInstallmentAmount returns the FirstInstallmentAmount field if non-nil, zero value otherwise.

### GetFirstInstallmentAmountOk

`func (o *PlanDataModel) GetFirstInstallmentAmountOk() (*float32, bool)`

GetFirstInstallmentAmountOk returns a tuple with the FirstInstallmentAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstInstallmentAmount

`func (o *PlanDataModel) SetFirstInstallmentAmount(v float32)`

SetFirstInstallmentAmount sets FirstInstallmentAmount field to given value.

### HasFirstInstallmentAmount

`func (o *PlanDataModel) HasFirstInstallmentAmount() bool`

HasFirstInstallmentAmount returns a boolean if a field has been set.

### GetFirstInstallmentDate

`func (o *PlanDataModel) GetFirstInstallmentDate() time.Time`

GetFirstInstallmentDate returns the FirstInstallmentDate field if non-nil, zero value otherwise.

### GetFirstInstallmentDateOk

`func (o *PlanDataModel) GetFirstInstallmentDateOk() (*time.Time, bool)`

GetFirstInstallmentDateOk returns a tuple with the FirstInstallmentDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstInstallmentDate

`func (o *PlanDataModel) SetFirstInstallmentDate(v time.Time)`

SetFirstInstallmentDate sets FirstInstallmentDate field to given value.

### HasFirstInstallmentDate

`func (o *PlanDataModel) HasFirstInstallmentDate() bool`

HasFirstInstallmentDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


