# InstallmentPlanGetResponse

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
**Authorization** | Pointer to [**AuthorizationModel**](AuthorizationModel.md) |  | [optional] 
**Shopper** | Pointer to [**ShopperData**](ShopperData.md) |  | [optional] 
**BillingAddress** | Pointer to [**AddressData**](AddressData.md) |  | [optional] 
**PaymentMethod** | Pointer to [**PaymentMethodModel**](PaymentMethodModel.md) |  | [optional] 
**ExtendedParams** | Pointer to **map[string]string** |  | [optional] 
**Installments** | Pointer to [**[]Installment**](Installment.md) |  | [optional] 
**Refunds** | Pointer to [**[]RefundModel**](RefundModel.md) |  | [optional] 
**Links** | Pointer to [**LinksData**](LinksData.md) |  | [optional] 

## Methods

### NewInstallmentPlanGetResponse

`func NewInstallmentPlanGetResponse(dateCreated time.Time, status PlanStatus, ) *InstallmentPlanGetResponse`

NewInstallmentPlanGetResponse instantiates a new InstallmentPlanGetResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInstallmentPlanGetResponseWithDefaults

`func NewInstallmentPlanGetResponseWithDefaults() *InstallmentPlanGetResponse`

NewInstallmentPlanGetResponseWithDefaults instantiates a new InstallmentPlanGetResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInstallmentPlanNumber

`func (o *InstallmentPlanGetResponse) GetInstallmentPlanNumber() string`

GetInstallmentPlanNumber returns the InstallmentPlanNumber field if non-nil, zero value otherwise.

### GetInstallmentPlanNumberOk

`func (o *InstallmentPlanGetResponse) GetInstallmentPlanNumberOk() (*string, bool)`

GetInstallmentPlanNumberOk returns a tuple with the InstallmentPlanNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstallmentPlanNumber

`func (o *InstallmentPlanGetResponse) SetInstallmentPlanNumber(v string)`

SetInstallmentPlanNumber sets InstallmentPlanNumber field to given value.

### HasInstallmentPlanNumber

`func (o *InstallmentPlanGetResponse) HasInstallmentPlanNumber() bool`

HasInstallmentPlanNumber returns a boolean if a field has been set.

### GetDateCreated

`func (o *InstallmentPlanGetResponse) GetDateCreated() time.Time`

GetDateCreated returns the DateCreated field if non-nil, zero value otherwise.

### GetDateCreatedOk

`func (o *InstallmentPlanGetResponse) GetDateCreatedOk() (*time.Time, bool)`

GetDateCreatedOk returns a tuple with the DateCreated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateCreated

`func (o *InstallmentPlanGetResponse) SetDateCreated(v time.Time)`

SetDateCreated sets DateCreated field to given value.


### GetRefOrderNumber

`func (o *InstallmentPlanGetResponse) GetRefOrderNumber() string`

GetRefOrderNumber returns the RefOrderNumber field if non-nil, zero value otherwise.

### GetRefOrderNumberOk

`func (o *InstallmentPlanGetResponse) GetRefOrderNumberOk() (*string, bool)`

GetRefOrderNumberOk returns a tuple with the RefOrderNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefOrderNumber

`func (o *InstallmentPlanGetResponse) SetRefOrderNumber(v string)`

SetRefOrderNumber sets RefOrderNumber field to given value.

### HasRefOrderNumber

`func (o *InstallmentPlanGetResponse) HasRefOrderNumber() bool`

HasRefOrderNumber returns a boolean if a field has been set.

### GetPurchaseMethod

`func (o *InstallmentPlanGetResponse) GetPurchaseMethod() PurchaseMethod`

GetPurchaseMethod returns the PurchaseMethod field if non-nil, zero value otherwise.

### GetPurchaseMethodOk

`func (o *InstallmentPlanGetResponse) GetPurchaseMethodOk() (*PurchaseMethod, bool)`

GetPurchaseMethodOk returns a tuple with the PurchaseMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurchaseMethod

`func (o *InstallmentPlanGetResponse) SetPurchaseMethod(v PurchaseMethod)`

SetPurchaseMethod sets PurchaseMethod field to given value.

### HasPurchaseMethod

`func (o *InstallmentPlanGetResponse) HasPurchaseMethod() bool`

HasPurchaseMethod returns a boolean if a field has been set.

### GetStatus

`func (o *InstallmentPlanGetResponse) GetStatus() PlanStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *InstallmentPlanGetResponse) GetStatusOk() (*PlanStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *InstallmentPlanGetResponse) SetStatus(v PlanStatus)`

SetStatus sets Status field to given value.


### GetCurrency

`func (o *InstallmentPlanGetResponse) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *InstallmentPlanGetResponse) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *InstallmentPlanGetResponse) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *InstallmentPlanGetResponse) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetOriginalAmount

`func (o *InstallmentPlanGetResponse) GetOriginalAmount() float32`

GetOriginalAmount returns the OriginalAmount field if non-nil, zero value otherwise.

### GetOriginalAmountOk

`func (o *InstallmentPlanGetResponse) GetOriginalAmountOk() (*float32, bool)`

GetOriginalAmountOk returns a tuple with the OriginalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalAmount

`func (o *InstallmentPlanGetResponse) SetOriginalAmount(v float32)`

SetOriginalAmount sets OriginalAmount field to given value.

### HasOriginalAmount

`func (o *InstallmentPlanGetResponse) HasOriginalAmount() bool`

HasOriginalAmount returns a boolean if a field has been set.

### GetAmount

`func (o *InstallmentPlanGetResponse) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *InstallmentPlanGetResponse) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *InstallmentPlanGetResponse) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *InstallmentPlanGetResponse) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetAuthorization

`func (o *InstallmentPlanGetResponse) GetAuthorization() AuthorizationModel`

GetAuthorization returns the Authorization field if non-nil, zero value otherwise.

### GetAuthorizationOk

`func (o *InstallmentPlanGetResponse) GetAuthorizationOk() (*AuthorizationModel, bool)`

GetAuthorizationOk returns a tuple with the Authorization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorization

`func (o *InstallmentPlanGetResponse) SetAuthorization(v AuthorizationModel)`

SetAuthorization sets Authorization field to given value.

### HasAuthorization

`func (o *InstallmentPlanGetResponse) HasAuthorization() bool`

HasAuthorization returns a boolean if a field has been set.

### GetShopper

`func (o *InstallmentPlanGetResponse) GetShopper() ShopperData`

GetShopper returns the Shopper field if non-nil, zero value otherwise.

### GetShopperOk

`func (o *InstallmentPlanGetResponse) GetShopperOk() (*ShopperData, bool)`

GetShopperOk returns a tuple with the Shopper field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShopper

`func (o *InstallmentPlanGetResponse) SetShopper(v ShopperData)`

SetShopper sets Shopper field to given value.

### HasShopper

`func (o *InstallmentPlanGetResponse) HasShopper() bool`

HasShopper returns a boolean if a field has been set.

### GetBillingAddress

`func (o *InstallmentPlanGetResponse) GetBillingAddress() AddressData`

GetBillingAddress returns the BillingAddress field if non-nil, zero value otherwise.

### GetBillingAddressOk

`func (o *InstallmentPlanGetResponse) GetBillingAddressOk() (*AddressData, bool)`

GetBillingAddressOk returns a tuple with the BillingAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingAddress

`func (o *InstallmentPlanGetResponse) SetBillingAddress(v AddressData)`

SetBillingAddress sets BillingAddress field to given value.

### HasBillingAddress

`func (o *InstallmentPlanGetResponse) HasBillingAddress() bool`

HasBillingAddress returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *InstallmentPlanGetResponse) GetPaymentMethod() PaymentMethodModel`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *InstallmentPlanGetResponse) GetPaymentMethodOk() (*PaymentMethodModel, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *InstallmentPlanGetResponse) SetPaymentMethod(v PaymentMethodModel)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *InstallmentPlanGetResponse) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetExtendedParams

`func (o *InstallmentPlanGetResponse) GetExtendedParams() map[string]string`

GetExtendedParams returns the ExtendedParams field if non-nil, zero value otherwise.

### GetExtendedParamsOk

`func (o *InstallmentPlanGetResponse) GetExtendedParamsOk() (*map[string]string, bool)`

GetExtendedParamsOk returns a tuple with the ExtendedParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtendedParams

`func (o *InstallmentPlanGetResponse) SetExtendedParams(v map[string]string)`

SetExtendedParams sets ExtendedParams field to given value.

### HasExtendedParams

`func (o *InstallmentPlanGetResponse) HasExtendedParams() bool`

HasExtendedParams returns a boolean if a field has been set.

### GetInstallments

`func (o *InstallmentPlanGetResponse) GetInstallments() []Installment`

GetInstallments returns the Installments field if non-nil, zero value otherwise.

### GetInstallmentsOk

`func (o *InstallmentPlanGetResponse) GetInstallmentsOk() (*[]Installment, bool)`

GetInstallmentsOk returns a tuple with the Installments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstallments

`func (o *InstallmentPlanGetResponse) SetInstallments(v []Installment)`

SetInstallments sets Installments field to given value.

### HasInstallments

`func (o *InstallmentPlanGetResponse) HasInstallments() bool`

HasInstallments returns a boolean if a field has been set.

### GetRefunds

`func (o *InstallmentPlanGetResponse) GetRefunds() []RefundModel`

GetRefunds returns the Refunds field if non-nil, zero value otherwise.

### GetRefundsOk

`func (o *InstallmentPlanGetResponse) GetRefundsOk() (*[]RefundModel, bool)`

GetRefundsOk returns a tuple with the Refunds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefunds

`func (o *InstallmentPlanGetResponse) SetRefunds(v []RefundModel)`

SetRefunds sets Refunds field to given value.

### HasRefunds

`func (o *InstallmentPlanGetResponse) HasRefunds() bool`

HasRefunds returns a boolean if a field has been set.

### GetLinks

`func (o *InstallmentPlanGetResponse) GetLinks() LinksData`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *InstallmentPlanGetResponse) GetLinksOk() (*LinksData, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *InstallmentPlanGetResponse) SetLinks(v LinksData)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *InstallmentPlanGetResponse) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


