# PaymentPlanOptionModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NumberOfInstallments** | **int32** |  | 
**FirstInstallmentAmount** | **float32** |  | 
**InstallmentAmount** | **float32** |  | 
**LastInstallmentAmount** | **float32** |  | 
**Links** | Pointer to [**LinksModel**](LinksModel.md) |  | [optional] 
**TermsAndConditionsBrief** | Pointer to **string** |  | [optional] 
**InstallmentFrequency** | Pointer to **string** |  | [optional] 

## Methods

### NewPaymentPlanOptionModel

`func NewPaymentPlanOptionModel(numberOfInstallments int32, firstInstallmentAmount float32, installmentAmount float32, lastInstallmentAmount float32, ) *PaymentPlanOptionModel`

NewPaymentPlanOptionModel instantiates a new PaymentPlanOptionModel object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentPlanOptionModelWithDefaults

`func NewPaymentPlanOptionModelWithDefaults() *PaymentPlanOptionModel`

NewPaymentPlanOptionModelWithDefaults instantiates a new PaymentPlanOptionModel object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNumberOfInstallments

`func (o *PaymentPlanOptionModel) GetNumberOfInstallments() int32`

GetNumberOfInstallments returns the NumberOfInstallments field if non-nil, zero value otherwise.

### GetNumberOfInstallmentsOk

`func (o *PaymentPlanOptionModel) GetNumberOfInstallmentsOk() (*int32, bool)`

GetNumberOfInstallmentsOk returns a tuple with the NumberOfInstallments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfInstallments

`func (o *PaymentPlanOptionModel) SetNumberOfInstallments(v int32)`

SetNumberOfInstallments sets NumberOfInstallments field to given value.


### GetFirstInstallmentAmount

`func (o *PaymentPlanOptionModel) GetFirstInstallmentAmount() float32`

GetFirstInstallmentAmount returns the FirstInstallmentAmount field if non-nil, zero value otherwise.

### GetFirstInstallmentAmountOk

`func (o *PaymentPlanOptionModel) GetFirstInstallmentAmountOk() (*float32, bool)`

GetFirstInstallmentAmountOk returns a tuple with the FirstInstallmentAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFirstInstallmentAmount

`func (o *PaymentPlanOptionModel) SetFirstInstallmentAmount(v float32)`

SetFirstInstallmentAmount sets FirstInstallmentAmount field to given value.


### GetInstallmentAmount

`func (o *PaymentPlanOptionModel) GetInstallmentAmount() float32`

GetInstallmentAmount returns the InstallmentAmount field if non-nil, zero value otherwise.

### GetInstallmentAmountOk

`func (o *PaymentPlanOptionModel) GetInstallmentAmountOk() (*float32, bool)`

GetInstallmentAmountOk returns a tuple with the InstallmentAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstallmentAmount

`func (o *PaymentPlanOptionModel) SetInstallmentAmount(v float32)`

SetInstallmentAmount sets InstallmentAmount field to given value.


### GetLastInstallmentAmount

`func (o *PaymentPlanOptionModel) GetLastInstallmentAmount() float32`

GetLastInstallmentAmount returns the LastInstallmentAmount field if non-nil, zero value otherwise.

### GetLastInstallmentAmountOk

`func (o *PaymentPlanOptionModel) GetLastInstallmentAmountOk() (*float32, bool)`

GetLastInstallmentAmountOk returns a tuple with the LastInstallmentAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastInstallmentAmount

`func (o *PaymentPlanOptionModel) SetLastInstallmentAmount(v float32)`

SetLastInstallmentAmount sets LastInstallmentAmount field to given value.


### GetLinks

`func (o *PaymentPlanOptionModel) GetLinks() LinksModel`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PaymentPlanOptionModel) GetLinksOk() (*LinksModel, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PaymentPlanOptionModel) SetLinks(v LinksModel)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PaymentPlanOptionModel) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTermsAndConditionsBrief

`func (o *PaymentPlanOptionModel) GetTermsAndConditionsBrief() string`

GetTermsAndConditionsBrief returns the TermsAndConditionsBrief field if non-nil, zero value otherwise.

### GetTermsAndConditionsBriefOk

`func (o *PaymentPlanOptionModel) GetTermsAndConditionsBriefOk() (*string, bool)`

GetTermsAndConditionsBriefOk returns a tuple with the TermsAndConditionsBrief field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTermsAndConditionsBrief

`func (o *PaymentPlanOptionModel) SetTermsAndConditionsBrief(v string)`

SetTermsAndConditionsBrief sets TermsAndConditionsBrief field to given value.

### HasTermsAndConditionsBrief

`func (o *PaymentPlanOptionModel) HasTermsAndConditionsBrief() bool`

HasTermsAndConditionsBrief returns a boolean if a field has been set.

### GetInstallmentFrequency

`func (o *PaymentPlanOptionModel) GetInstallmentFrequency() string`

GetInstallmentFrequency returns the InstallmentFrequency field if non-nil, zero value otherwise.

### GetInstallmentFrequencyOk

`func (o *PaymentPlanOptionModel) GetInstallmentFrequencyOk() (*string, bool)`

GetInstallmentFrequencyOk returns a tuple with the InstallmentFrequency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstallmentFrequency

`func (o *PaymentPlanOptionModel) SetInstallmentFrequency(v string)`

SetInstallmentFrequency sets InstallmentFrequency field to given value.

### HasInstallmentFrequency

`func (o *PaymentPlanOptionModel) HasInstallmentFrequency() bool`

HasInstallmentFrequency returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


