# InstallmentPlanInitiateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoCapture** | **bool** |  | 
**Attempt3dSecure** | Pointer to **bool** |  | [optional] 
**Shopper** | Pointer to [**ShopperData**](ShopperData.md) |  | [optional] 
**PlanData** | Pointer to [**PlanDataModel**](PlanDataModel.md) |  | [optional] 
**BillingAddress** | Pointer to [**AddressDataModel**](AddressDataModel.md) |  | [optional] 
**RedirectUrls** | Pointer to [**InitiateRedirectionEndpointsModel**](InitiateRedirectionEndpointsModel.md) |  | [optional] 
**UxSettings** | Pointer to [**UxSettingsModel**](UxSettingsModel.md) |  | [optional] 
**EventsEndpoints** | Pointer to [**EventsEndpointsModel**](EventsEndpointsModel.md) |  | [optional] 
**ProcessingData** | Pointer to [**ProcessingData**](ProcessingData.md) |  | [optional] 

## Methods

### NewInstallmentPlanInitiateRequest

`func NewInstallmentPlanInitiateRequest(autoCapture bool, ) *InstallmentPlanInitiateRequest`

NewInstallmentPlanInitiateRequest instantiates a new InstallmentPlanInitiateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInstallmentPlanInitiateRequestWithDefaults

`func NewInstallmentPlanInitiateRequestWithDefaults() *InstallmentPlanInitiateRequest`

NewInstallmentPlanInitiateRequestWithDefaults instantiates a new InstallmentPlanInitiateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAutoCapture

`func (o *InstallmentPlanInitiateRequest) GetAutoCapture() bool`

GetAutoCapture returns the AutoCapture field if non-nil, zero value otherwise.

### GetAutoCaptureOk

`func (o *InstallmentPlanInitiateRequest) GetAutoCaptureOk() (*bool, bool)`

GetAutoCaptureOk returns a tuple with the AutoCapture field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoCapture

`func (o *InstallmentPlanInitiateRequest) SetAutoCapture(v bool)`

SetAutoCapture sets AutoCapture field to given value.


### GetAttempt3dSecure

`func (o *InstallmentPlanInitiateRequest) GetAttempt3dSecure() bool`

GetAttempt3dSecure returns the Attempt3dSecure field if non-nil, zero value otherwise.

### GetAttempt3dSecureOk

`func (o *InstallmentPlanInitiateRequest) GetAttempt3dSecureOk() (*bool, bool)`

GetAttempt3dSecureOk returns a tuple with the Attempt3dSecure field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttempt3dSecure

`func (o *InstallmentPlanInitiateRequest) SetAttempt3dSecure(v bool)`

SetAttempt3dSecure sets Attempt3dSecure field to given value.

### HasAttempt3dSecure

`func (o *InstallmentPlanInitiateRequest) HasAttempt3dSecure() bool`

HasAttempt3dSecure returns a boolean if a field has been set.

### GetShopper

`func (o *InstallmentPlanInitiateRequest) GetShopper() ShopperData`

GetShopper returns the Shopper field if non-nil, zero value otherwise.

### GetShopperOk

`func (o *InstallmentPlanInitiateRequest) GetShopperOk() (*ShopperData, bool)`

GetShopperOk returns a tuple with the Shopper field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShopper

`func (o *InstallmentPlanInitiateRequest) SetShopper(v ShopperData)`

SetShopper sets Shopper field to given value.

### HasShopper

`func (o *InstallmentPlanInitiateRequest) HasShopper() bool`

HasShopper returns a boolean if a field has been set.

### GetPlanData

`func (o *InstallmentPlanInitiateRequest) GetPlanData() PlanDataModel`

GetPlanData returns the PlanData field if non-nil, zero value otherwise.

### GetPlanDataOk

`func (o *InstallmentPlanInitiateRequest) GetPlanDataOk() (*PlanDataModel, bool)`

GetPlanDataOk returns a tuple with the PlanData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlanData

`func (o *InstallmentPlanInitiateRequest) SetPlanData(v PlanDataModel)`

SetPlanData sets PlanData field to given value.

### HasPlanData

`func (o *InstallmentPlanInitiateRequest) HasPlanData() bool`

HasPlanData returns a boolean if a field has been set.

### GetBillingAddress

`func (o *InstallmentPlanInitiateRequest) GetBillingAddress() AddressDataModel`

GetBillingAddress returns the BillingAddress field if non-nil, zero value otherwise.

### GetBillingAddressOk

`func (o *InstallmentPlanInitiateRequest) GetBillingAddressOk() (*AddressDataModel, bool)`

GetBillingAddressOk returns a tuple with the BillingAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingAddress

`func (o *InstallmentPlanInitiateRequest) SetBillingAddress(v AddressDataModel)`

SetBillingAddress sets BillingAddress field to given value.

### HasBillingAddress

`func (o *InstallmentPlanInitiateRequest) HasBillingAddress() bool`

HasBillingAddress returns a boolean if a field has been set.

### GetRedirectUrls

`func (o *InstallmentPlanInitiateRequest) GetRedirectUrls() InitiateRedirectionEndpointsModel`

GetRedirectUrls returns the RedirectUrls field if non-nil, zero value otherwise.

### GetRedirectUrlsOk

`func (o *InstallmentPlanInitiateRequest) GetRedirectUrlsOk() (*InitiateRedirectionEndpointsModel, bool)`

GetRedirectUrlsOk returns a tuple with the RedirectUrls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedirectUrls

`func (o *InstallmentPlanInitiateRequest) SetRedirectUrls(v InitiateRedirectionEndpointsModel)`

SetRedirectUrls sets RedirectUrls field to given value.

### HasRedirectUrls

`func (o *InstallmentPlanInitiateRequest) HasRedirectUrls() bool`

HasRedirectUrls returns a boolean if a field has been set.

### GetUxSettings

`func (o *InstallmentPlanInitiateRequest) GetUxSettings() UxSettingsModel`

GetUxSettings returns the UxSettings field if non-nil, zero value otherwise.

### GetUxSettingsOk

`func (o *InstallmentPlanInitiateRequest) GetUxSettingsOk() (*UxSettingsModel, bool)`

GetUxSettingsOk returns a tuple with the UxSettings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUxSettings

`func (o *InstallmentPlanInitiateRequest) SetUxSettings(v UxSettingsModel)`

SetUxSettings sets UxSettings field to given value.

### HasUxSettings

`func (o *InstallmentPlanInitiateRequest) HasUxSettings() bool`

HasUxSettings returns a boolean if a field has been set.

### GetEventsEndpoints

`func (o *InstallmentPlanInitiateRequest) GetEventsEndpoints() EventsEndpointsModel`

GetEventsEndpoints returns the EventsEndpoints field if non-nil, zero value otherwise.

### GetEventsEndpointsOk

`func (o *InstallmentPlanInitiateRequest) GetEventsEndpointsOk() (*EventsEndpointsModel, bool)`

GetEventsEndpointsOk returns a tuple with the EventsEndpoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventsEndpoints

`func (o *InstallmentPlanInitiateRequest) SetEventsEndpoints(v EventsEndpointsModel)`

SetEventsEndpoints sets EventsEndpoints field to given value.

### HasEventsEndpoints

`func (o *InstallmentPlanInitiateRequest) HasEventsEndpoints() bool`

HasEventsEndpoints returns a boolean if a field has been set.

### GetProcessingData

`func (o *InstallmentPlanInitiateRequest) GetProcessingData() ProcessingData`

GetProcessingData returns the ProcessingData field if non-nil, zero value otherwise.

### GetProcessingDataOk

`func (o *InstallmentPlanInitiateRequest) GetProcessingDataOk() (*ProcessingData, bool)`

GetProcessingDataOk returns a tuple with the ProcessingData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessingData

`func (o *InstallmentPlanInitiateRequest) SetProcessingData(v ProcessingData)`

SetProcessingData sets ProcessingData field to given value.

### HasProcessingData

`func (o *InstallmentPlanInitiateRequest) HasProcessingData() bool`

HasProcessingData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


