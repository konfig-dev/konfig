# InstallmentPlanCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoCapture** | **bool** |  | 
**Attempt3dSecure** | Pointer to **bool** |  | [optional] 
**TermsAndConditionsAccepted** | **bool** |  | 
**Shopper** | Pointer to [**ShopperData**](ShopperData.md) |  | [optional] 
**PlanData** | Pointer to [**PlanDataModel**](PlanDataModel.md) |  | [optional] 
**BillingAddress** | Pointer to [**AddressDataModel**](AddressDataModel.md) |  | [optional] 
**PaymentMethod** | Pointer to [**PaymentMethodModel**](PaymentMethodModel.md) |  | [optional] 
**RedirectUrls** | Pointer to [**RedirectionEndpointsModel**](RedirectionEndpointsModel.md) |  | [optional] 
**ProcessingData** | Pointer to [**ProcessingData**](ProcessingData.md) |  | [optional] 
**EventsEndpoints** | Pointer to [**EventsEndpointsModel**](EventsEndpointsModel.md) |  | [optional] 

## Methods

### NewInstallmentPlanCreateRequest

`func NewInstallmentPlanCreateRequest(autoCapture bool, termsAndConditionsAccepted bool, ) *InstallmentPlanCreateRequest`

NewInstallmentPlanCreateRequest instantiates a new InstallmentPlanCreateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInstallmentPlanCreateRequestWithDefaults

`func NewInstallmentPlanCreateRequestWithDefaults() *InstallmentPlanCreateRequest`

NewInstallmentPlanCreateRequestWithDefaults instantiates a new InstallmentPlanCreateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAutoCapture

`func (o *InstallmentPlanCreateRequest) GetAutoCapture() bool`

GetAutoCapture returns the AutoCapture field if non-nil, zero value otherwise.

### GetAutoCaptureOk

`func (o *InstallmentPlanCreateRequest) GetAutoCaptureOk() (*bool, bool)`

GetAutoCaptureOk returns a tuple with the AutoCapture field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoCapture

`func (o *InstallmentPlanCreateRequest) SetAutoCapture(v bool)`

SetAutoCapture sets AutoCapture field to given value.


### GetAttempt3dSecure

`func (o *InstallmentPlanCreateRequest) GetAttempt3dSecure() bool`

GetAttempt3dSecure returns the Attempt3dSecure field if non-nil, zero value otherwise.

### GetAttempt3dSecureOk

`func (o *InstallmentPlanCreateRequest) GetAttempt3dSecureOk() (*bool, bool)`

GetAttempt3dSecureOk returns a tuple with the Attempt3dSecure field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttempt3dSecure

`func (o *InstallmentPlanCreateRequest) SetAttempt3dSecure(v bool)`

SetAttempt3dSecure sets Attempt3dSecure field to given value.

### HasAttempt3dSecure

`func (o *InstallmentPlanCreateRequest) HasAttempt3dSecure() bool`

HasAttempt3dSecure returns a boolean if a field has been set.

### GetTermsAndConditionsAccepted

`func (o *InstallmentPlanCreateRequest) GetTermsAndConditionsAccepted() bool`

GetTermsAndConditionsAccepted returns the TermsAndConditionsAccepted field if non-nil, zero value otherwise.

### GetTermsAndConditionsAcceptedOk

`func (o *InstallmentPlanCreateRequest) GetTermsAndConditionsAcceptedOk() (*bool, bool)`

GetTermsAndConditionsAcceptedOk returns a tuple with the TermsAndConditionsAccepted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTermsAndConditionsAccepted

`func (o *InstallmentPlanCreateRequest) SetTermsAndConditionsAccepted(v bool)`

SetTermsAndConditionsAccepted sets TermsAndConditionsAccepted field to given value.


### GetShopper

`func (o *InstallmentPlanCreateRequest) GetShopper() ShopperData`

GetShopper returns the Shopper field if non-nil, zero value otherwise.

### GetShopperOk

`func (o *InstallmentPlanCreateRequest) GetShopperOk() (*ShopperData, bool)`

GetShopperOk returns a tuple with the Shopper field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShopper

`func (o *InstallmentPlanCreateRequest) SetShopper(v ShopperData)`

SetShopper sets Shopper field to given value.

### HasShopper

`func (o *InstallmentPlanCreateRequest) HasShopper() bool`

HasShopper returns a boolean if a field has been set.

### GetPlanData

`func (o *InstallmentPlanCreateRequest) GetPlanData() PlanDataModel`

GetPlanData returns the PlanData field if non-nil, zero value otherwise.

### GetPlanDataOk

`func (o *InstallmentPlanCreateRequest) GetPlanDataOk() (*PlanDataModel, bool)`

GetPlanDataOk returns a tuple with the PlanData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlanData

`func (o *InstallmentPlanCreateRequest) SetPlanData(v PlanDataModel)`

SetPlanData sets PlanData field to given value.

### HasPlanData

`func (o *InstallmentPlanCreateRequest) HasPlanData() bool`

HasPlanData returns a boolean if a field has been set.

### GetBillingAddress

`func (o *InstallmentPlanCreateRequest) GetBillingAddress() AddressDataModel`

GetBillingAddress returns the BillingAddress field if non-nil, zero value otherwise.

### GetBillingAddressOk

`func (o *InstallmentPlanCreateRequest) GetBillingAddressOk() (*AddressDataModel, bool)`

GetBillingAddressOk returns a tuple with the BillingAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingAddress

`func (o *InstallmentPlanCreateRequest) SetBillingAddress(v AddressDataModel)`

SetBillingAddress sets BillingAddress field to given value.

### HasBillingAddress

`func (o *InstallmentPlanCreateRequest) HasBillingAddress() bool`

HasBillingAddress returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *InstallmentPlanCreateRequest) GetPaymentMethod() PaymentMethodModel`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *InstallmentPlanCreateRequest) GetPaymentMethodOk() (*PaymentMethodModel, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *InstallmentPlanCreateRequest) SetPaymentMethod(v PaymentMethodModel)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *InstallmentPlanCreateRequest) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetRedirectUrls

`func (o *InstallmentPlanCreateRequest) GetRedirectUrls() RedirectionEndpointsModel`

GetRedirectUrls returns the RedirectUrls field if non-nil, zero value otherwise.

### GetRedirectUrlsOk

`func (o *InstallmentPlanCreateRequest) GetRedirectUrlsOk() (*RedirectionEndpointsModel, bool)`

GetRedirectUrlsOk returns a tuple with the RedirectUrls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedirectUrls

`func (o *InstallmentPlanCreateRequest) SetRedirectUrls(v RedirectionEndpointsModel)`

SetRedirectUrls sets RedirectUrls field to given value.

### HasRedirectUrls

`func (o *InstallmentPlanCreateRequest) HasRedirectUrls() bool`

HasRedirectUrls returns a boolean if a field has been set.

### GetProcessingData

`func (o *InstallmentPlanCreateRequest) GetProcessingData() ProcessingData`

GetProcessingData returns the ProcessingData field if non-nil, zero value otherwise.

### GetProcessingDataOk

`func (o *InstallmentPlanCreateRequest) GetProcessingDataOk() (*ProcessingData, bool)`

GetProcessingDataOk returns a tuple with the ProcessingData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessingData

`func (o *InstallmentPlanCreateRequest) SetProcessingData(v ProcessingData)`

SetProcessingData sets ProcessingData field to given value.

### HasProcessingData

`func (o *InstallmentPlanCreateRequest) HasProcessingData() bool`

HasProcessingData returns a boolean if a field has been set.

### GetEventsEndpoints

`func (o *InstallmentPlanCreateRequest) GetEventsEndpoints() EventsEndpointsModel`

GetEventsEndpoints returns the EventsEndpoints field if non-nil, zero value otherwise.

### GetEventsEndpointsOk

`func (o *InstallmentPlanCreateRequest) GetEventsEndpointsOk() (*EventsEndpointsModel, bool)`

GetEventsEndpointsOk returns a tuple with the EventsEndpoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventsEndpoints

`func (o *InstallmentPlanCreateRequest) SetEventsEndpoints(v EventsEndpointsModel)`

SetEventsEndpoints sets EventsEndpoints field to given value.

### HasEventsEndpoints

`func (o *InstallmentPlanCreateRequest) HasEventsEndpoints() bool`

HasEventsEndpoints returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


