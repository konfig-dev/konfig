# InstallmentPlanCreateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InstallmentPlanNumber** | Pointer to **string** |  | [optional] 
**DateCreated** | **time.Time** |  | 
**RefOrderNumber** | Pointer to **string** |  | [optional] 
**PurchaseMethod** | Pointer to [**PurchaseMethod**](PurchaseMethod.md) |  | [optional] 
**Status** | [**PlanStatus**](PlanStatus.md) |  | 
**Currency** | Pointer to **string** |  | [optional] 
**OriginalAmount** | Pointer to **float32** |  | [optional] 
**Amount** | Pointer to **float32** |  | [optional] 
**ExtendedParams** | Pointer to **map[string]string** |  | [optional] 
**Authorization** | Pointer to [**AuthorizationModel**](AuthorizationModel.md) |  | [optional] 
**Shopper** | Pointer to [**ShopperData**](ShopperData.md) |  | [optional] 
**BillingAddress** | Pointer to [**AddressData**](AddressData.md) |  | [optional] 
**PaymentMethod** | Pointer to [**PaymentMethodModel**](PaymentMethodModel.md) |  | [optional] 
**Installments** | Pointer to [**[]Installment**](Installment.md) |  | [optional] 
**Links** | Pointer to [**LinksData**](LinksData.md) |  | [optional] 

## Methods

### NewInstallmentPlanCreateResponse

`func NewInstallmentPlanCreateResponse(dateCreated time.Time, status PlanStatus, ) *InstallmentPlanCreateResponse`

NewInstallmentPlanCreateResponse instantiates a new InstallmentPlanCreateResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInstallmentPlanCreateResponseWithDefaults

`func NewInstallmentPlanCreateResponseWithDefaults() *InstallmentPlanCreateResponse`

NewInstallmentPlanCreateResponseWithDefaults instantiates a new InstallmentPlanCreateResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInstallmentPlanNumber

`func (o *InstallmentPlanCreateResponse) GetInstallmentPlanNumber() string`

GetInstallmentPlanNumber returns the InstallmentPlanNumber field if non-nil, zero value otherwise.

### GetInstallmentPlanNumberOk

`func (o *InstallmentPlanCreateResponse) GetInstallmentPlanNumberOk() (*string, bool)`

GetInstallmentPlanNumberOk returns a tuple with the InstallmentPlanNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstallmentPlanNumber

`func (o *InstallmentPlanCreateResponse) SetInstallmentPlanNumber(v string)`

SetInstallmentPlanNumber sets InstallmentPlanNumber field to given value.

### HasInstallmentPlanNumber

`func (o *InstallmentPlanCreateResponse) HasInstallmentPlanNumber() bool`

HasInstallmentPlanNumber returns a boolean if a field has been set.

### GetDateCreated

`func (o *InstallmentPlanCreateResponse) GetDateCreated() time.Time`

GetDateCreated returns the DateCreated field if non-nil, zero value otherwise.

### GetDateCreatedOk

`func (o *InstallmentPlanCreateResponse) GetDateCreatedOk() (*time.Time, bool)`

GetDateCreatedOk returns a tuple with the DateCreated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateCreated

`func (o *InstallmentPlanCreateResponse) SetDateCreated(v time.Time)`

SetDateCreated sets DateCreated field to given value.


### GetRefOrderNumber

`func (o *InstallmentPlanCreateResponse) GetRefOrderNumber() string`

GetRefOrderNumber returns the RefOrderNumber field if non-nil, zero value otherwise.

### GetRefOrderNumberOk

`func (o *InstallmentPlanCreateResponse) GetRefOrderNumberOk() (*string, bool)`

GetRefOrderNumberOk returns a tuple with the RefOrderNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefOrderNumber

`func (o *InstallmentPlanCreateResponse) SetRefOrderNumber(v string)`

SetRefOrderNumber sets RefOrderNumber field to given value.

### HasRefOrderNumber

`func (o *InstallmentPlanCreateResponse) HasRefOrderNumber() bool`

HasRefOrderNumber returns a boolean if a field has been set.

### GetPurchaseMethod

`func (o *InstallmentPlanCreateResponse) GetPurchaseMethod() PurchaseMethod`

GetPurchaseMethod returns the PurchaseMethod field if non-nil, zero value otherwise.

### GetPurchaseMethodOk

`func (o *InstallmentPlanCreateResponse) GetPurchaseMethodOk() (*PurchaseMethod, bool)`

GetPurchaseMethodOk returns a tuple with the PurchaseMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurchaseMethod

`func (o *InstallmentPlanCreateResponse) SetPurchaseMethod(v PurchaseMethod)`

SetPurchaseMethod sets PurchaseMethod field to given value.

### HasPurchaseMethod

`func (o *InstallmentPlanCreateResponse) HasPurchaseMethod() bool`

HasPurchaseMethod returns a boolean if a field has been set.

### GetStatus

`func (o *InstallmentPlanCreateResponse) GetStatus() PlanStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *InstallmentPlanCreateResponse) GetStatusOk() (*PlanStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *InstallmentPlanCreateResponse) SetStatus(v PlanStatus)`

SetStatus sets Status field to given value.


### GetCurrency

`func (o *InstallmentPlanCreateResponse) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *InstallmentPlanCreateResponse) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *InstallmentPlanCreateResponse) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *InstallmentPlanCreateResponse) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetOriginalAmount

`func (o *InstallmentPlanCreateResponse) GetOriginalAmount() float32`

GetOriginalAmount returns the OriginalAmount field if non-nil, zero value otherwise.

### GetOriginalAmountOk

`func (o *InstallmentPlanCreateResponse) GetOriginalAmountOk() (*float32, bool)`

GetOriginalAmountOk returns a tuple with the OriginalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalAmount

`func (o *InstallmentPlanCreateResponse) SetOriginalAmount(v float32)`

SetOriginalAmount sets OriginalAmount field to given value.

### HasOriginalAmount

`func (o *InstallmentPlanCreateResponse) HasOriginalAmount() bool`

HasOriginalAmount returns a boolean if a field has been set.

### GetAmount

`func (o *InstallmentPlanCreateResponse) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *InstallmentPlanCreateResponse) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *InstallmentPlanCreateResponse) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *InstallmentPlanCreateResponse) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetExtendedParams

`func (o *InstallmentPlanCreateResponse) GetExtendedParams() map[string]string`

GetExtendedParams returns the ExtendedParams field if non-nil, zero value otherwise.

### GetExtendedParamsOk

`func (o *InstallmentPlanCreateResponse) GetExtendedParamsOk() (*map[string]string, bool)`

GetExtendedParamsOk returns a tuple with the ExtendedParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtendedParams

`func (o *InstallmentPlanCreateResponse) SetExtendedParams(v map[string]string)`

SetExtendedParams sets ExtendedParams field to given value.

### HasExtendedParams

`func (o *InstallmentPlanCreateResponse) HasExtendedParams() bool`

HasExtendedParams returns a boolean if a field has been set.

### GetAuthorization

`func (o *InstallmentPlanCreateResponse) GetAuthorization() AuthorizationModel`

GetAuthorization returns the Authorization field if non-nil, zero value otherwise.

### GetAuthorizationOk

`func (o *InstallmentPlanCreateResponse) GetAuthorizationOk() (*AuthorizationModel, bool)`

GetAuthorizationOk returns a tuple with the Authorization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorization

`func (o *InstallmentPlanCreateResponse) SetAuthorization(v AuthorizationModel)`

SetAuthorization sets Authorization field to given value.

### HasAuthorization

`func (o *InstallmentPlanCreateResponse) HasAuthorization() bool`

HasAuthorization returns a boolean if a field has been set.

### GetShopper

`func (o *InstallmentPlanCreateResponse) GetShopper() ShopperData`

GetShopper returns the Shopper field if non-nil, zero value otherwise.

### GetShopperOk

`func (o *InstallmentPlanCreateResponse) GetShopperOk() (*ShopperData, bool)`

GetShopperOk returns a tuple with the Shopper field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShopper

`func (o *InstallmentPlanCreateResponse) SetShopper(v ShopperData)`

SetShopper sets Shopper field to given value.

### HasShopper

`func (o *InstallmentPlanCreateResponse) HasShopper() bool`

HasShopper returns a boolean if a field has been set.

### GetBillingAddress

`func (o *InstallmentPlanCreateResponse) GetBillingAddress() AddressData`

GetBillingAddress returns the BillingAddress field if non-nil, zero value otherwise.

### GetBillingAddressOk

`func (o *InstallmentPlanCreateResponse) GetBillingAddressOk() (*AddressData, bool)`

GetBillingAddressOk returns a tuple with the BillingAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingAddress

`func (o *InstallmentPlanCreateResponse) SetBillingAddress(v AddressData)`

SetBillingAddress sets BillingAddress field to given value.

### HasBillingAddress

`func (o *InstallmentPlanCreateResponse) HasBillingAddress() bool`

HasBillingAddress returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *InstallmentPlanCreateResponse) GetPaymentMethod() PaymentMethodModel`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *InstallmentPlanCreateResponse) GetPaymentMethodOk() (*PaymentMethodModel, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *InstallmentPlanCreateResponse) SetPaymentMethod(v PaymentMethodModel)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *InstallmentPlanCreateResponse) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetInstallments

`func (o *InstallmentPlanCreateResponse) GetInstallments() []Installment`

GetInstallments returns the Installments field if non-nil, zero value otherwise.

### GetInstallmentsOk

`func (o *InstallmentPlanCreateResponse) GetInstallmentsOk() (*[]Installment, bool)`

GetInstallmentsOk returns a tuple with the Installments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstallments

`func (o *InstallmentPlanCreateResponse) SetInstallments(v []Installment)`

SetInstallments sets Installments field to given value.

### HasInstallments

`func (o *InstallmentPlanCreateResponse) HasInstallments() bool`

HasInstallments returns a boolean if a field has been set.

### GetLinks

`func (o *InstallmentPlanCreateResponse) GetLinks() LinksData`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *InstallmentPlanCreateResponse) GetLinksOk() (*LinksData, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *InstallmentPlanCreateResponse) SetLinks(v LinksData)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *InstallmentPlanCreateResponse) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


