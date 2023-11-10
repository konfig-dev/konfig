# CheckInstallmentsEligibilityRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PlanData** | Pointer to [**PlanData**](PlanData.md) |  | [optional] 
**CardDetails** | Pointer to [**CardData**](CardData.md) |  | [optional] 
**BillingAddress** | Pointer to [**AddressData**](AddressData.md) |  | [optional] 

## Methods

### NewCheckInstallmentsEligibilityRequest

`func NewCheckInstallmentsEligibilityRequest() *CheckInstallmentsEligibilityRequest`

NewCheckInstallmentsEligibilityRequest instantiates a new CheckInstallmentsEligibilityRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCheckInstallmentsEligibilityRequestWithDefaults

`func NewCheckInstallmentsEligibilityRequestWithDefaults() *CheckInstallmentsEligibilityRequest`

NewCheckInstallmentsEligibilityRequestWithDefaults instantiates a new CheckInstallmentsEligibilityRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPlanData

`func (o *CheckInstallmentsEligibilityRequest) GetPlanData() PlanData`

GetPlanData returns the PlanData field if non-nil, zero value otherwise.

### GetPlanDataOk

`func (o *CheckInstallmentsEligibilityRequest) GetPlanDataOk() (*PlanData, bool)`

GetPlanDataOk returns a tuple with the PlanData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlanData

`func (o *CheckInstallmentsEligibilityRequest) SetPlanData(v PlanData)`

SetPlanData sets PlanData field to given value.

### HasPlanData

`func (o *CheckInstallmentsEligibilityRequest) HasPlanData() bool`

HasPlanData returns a boolean if a field has been set.

### GetCardDetails

`func (o *CheckInstallmentsEligibilityRequest) GetCardDetails() CardData`

GetCardDetails returns the CardDetails field if non-nil, zero value otherwise.

### GetCardDetailsOk

`func (o *CheckInstallmentsEligibilityRequest) GetCardDetailsOk() (*CardData, bool)`

GetCardDetailsOk returns a tuple with the CardDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardDetails

`func (o *CheckInstallmentsEligibilityRequest) SetCardDetails(v CardData)`

SetCardDetails sets CardDetails field to given value.

### HasCardDetails

`func (o *CheckInstallmentsEligibilityRequest) HasCardDetails() bool`

HasCardDetails returns a boolean if a field has been set.

### GetBillingAddress

`func (o *CheckInstallmentsEligibilityRequest) GetBillingAddress() AddressData`

GetBillingAddress returns the BillingAddress field if non-nil, zero value otherwise.

### GetBillingAddressOk

`func (o *CheckInstallmentsEligibilityRequest) GetBillingAddressOk() (*AddressData, bool)`

GetBillingAddressOk returns a tuple with the BillingAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingAddress

`func (o *CheckInstallmentsEligibilityRequest) SetBillingAddress(v AddressData)`

SetBillingAddress sets BillingAddress field to given value.

### HasBillingAddress

`func (o *CheckInstallmentsEligibilityRequest) HasBillingAddress() bool`

HasBillingAddress returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


