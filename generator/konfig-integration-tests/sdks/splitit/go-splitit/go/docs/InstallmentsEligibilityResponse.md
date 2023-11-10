# InstallmentsEligibilityResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InstallmentProvider** | Pointer to **string** |  | [optional] 
**PaymentPlanOptions** | Pointer to [**[]PaymentPlanOptionModel**](PaymentPlanOptionModel.md) |  | [optional] 

## Methods

### NewInstallmentsEligibilityResponse

`func NewInstallmentsEligibilityResponse() *InstallmentsEligibilityResponse`

NewInstallmentsEligibilityResponse instantiates a new InstallmentsEligibilityResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInstallmentsEligibilityResponseWithDefaults

`func NewInstallmentsEligibilityResponseWithDefaults() *InstallmentsEligibilityResponse`

NewInstallmentsEligibilityResponseWithDefaults instantiates a new InstallmentsEligibilityResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInstallmentProvider

`func (o *InstallmentsEligibilityResponse) GetInstallmentProvider() string`

GetInstallmentProvider returns the InstallmentProvider field if non-nil, zero value otherwise.

### GetInstallmentProviderOk

`func (o *InstallmentsEligibilityResponse) GetInstallmentProviderOk() (*string, bool)`

GetInstallmentProviderOk returns a tuple with the InstallmentProvider field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstallmentProvider

`func (o *InstallmentsEligibilityResponse) SetInstallmentProvider(v string)`

SetInstallmentProvider sets InstallmentProvider field to given value.

### HasInstallmentProvider

`func (o *InstallmentsEligibilityResponse) HasInstallmentProvider() bool`

HasInstallmentProvider returns a boolean if a field has been set.

### GetPaymentPlanOptions

`func (o *InstallmentsEligibilityResponse) GetPaymentPlanOptions() []PaymentPlanOptionModel`

GetPaymentPlanOptions returns the PaymentPlanOptions field if non-nil, zero value otherwise.

### GetPaymentPlanOptionsOk

`func (o *InstallmentsEligibilityResponse) GetPaymentPlanOptionsOk() (*[]PaymentPlanOptionModel, bool)`

GetPaymentPlanOptionsOk returns a tuple with the PaymentPlanOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentPlanOptions

`func (o *InstallmentsEligibilityResponse) SetPaymentPlanOptions(v []PaymentPlanOptionModel)`

SetPaymentPlanOptions sets PaymentPlanOptions field to given value.

### HasPaymentPlanOptions

`func (o *InstallmentsEligibilityResponse) HasPaymentPlanOptions() bool`

HasPaymentPlanOptions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


