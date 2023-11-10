# SearchInstallmentPlanResponseItem

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

### NewSearchInstallmentPlanResponseItem

`func NewSearchInstallmentPlanResponseItem(dateCreated time.Time, status PlanStatus, ) *SearchInstallmentPlanResponseItem`

NewSearchInstallmentPlanResponseItem instantiates a new SearchInstallmentPlanResponseItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchInstallmentPlanResponseItemWithDefaults

`func NewSearchInstallmentPlanResponseItemWithDefaults() *SearchInstallmentPlanResponseItem`

NewSearchInstallmentPlanResponseItemWithDefaults instantiates a new SearchInstallmentPlanResponseItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInstallmentPlanNumber

`func (o *SearchInstallmentPlanResponseItem) GetInstallmentPlanNumber() string`

GetInstallmentPlanNumber returns the InstallmentPlanNumber field if non-nil, zero value otherwise.

### GetInstallmentPlanNumberOk

`func (o *SearchInstallmentPlanResponseItem) GetInstallmentPlanNumberOk() (*string, bool)`

GetInstallmentPlanNumberOk returns a tuple with the InstallmentPlanNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstallmentPlanNumber

`func (o *SearchInstallmentPlanResponseItem) SetInstallmentPlanNumber(v string)`

SetInstallmentPlanNumber sets InstallmentPlanNumber field to given value.

### HasInstallmentPlanNumber

`func (o *SearchInstallmentPlanResponseItem) HasInstallmentPlanNumber() bool`

HasInstallmentPlanNumber returns a boolean if a field has been set.

### GetDateCreated

`func (o *SearchInstallmentPlanResponseItem) GetDateCreated() time.Time`

GetDateCreated returns the DateCreated field if non-nil, zero value otherwise.

### GetDateCreatedOk

`func (o *SearchInstallmentPlanResponseItem) GetDateCreatedOk() (*time.Time, bool)`

GetDateCreatedOk returns a tuple with the DateCreated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateCreated

`func (o *SearchInstallmentPlanResponseItem) SetDateCreated(v time.Time)`

SetDateCreated sets DateCreated field to given value.


### GetRefOrderNumber

`func (o *SearchInstallmentPlanResponseItem) GetRefOrderNumber() string`

GetRefOrderNumber returns the RefOrderNumber field if non-nil, zero value otherwise.

### GetRefOrderNumberOk

`func (o *SearchInstallmentPlanResponseItem) GetRefOrderNumberOk() (*string, bool)`

GetRefOrderNumberOk returns a tuple with the RefOrderNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefOrderNumber

`func (o *SearchInstallmentPlanResponseItem) SetRefOrderNumber(v string)`

SetRefOrderNumber sets RefOrderNumber field to given value.

### HasRefOrderNumber

`func (o *SearchInstallmentPlanResponseItem) HasRefOrderNumber() bool`

HasRefOrderNumber returns a boolean if a field has been set.

### GetPurchaseMethod

`func (o *SearchInstallmentPlanResponseItem) GetPurchaseMethod() PurchaseMethod`

GetPurchaseMethod returns the PurchaseMethod field if non-nil, zero value otherwise.

### GetPurchaseMethodOk

`func (o *SearchInstallmentPlanResponseItem) GetPurchaseMethodOk() (*PurchaseMethod, bool)`

GetPurchaseMethodOk returns a tuple with the PurchaseMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurchaseMethod

`func (o *SearchInstallmentPlanResponseItem) SetPurchaseMethod(v PurchaseMethod)`

SetPurchaseMethod sets PurchaseMethod field to given value.

### HasPurchaseMethod

`func (o *SearchInstallmentPlanResponseItem) HasPurchaseMethod() bool`

HasPurchaseMethod returns a boolean if a field has been set.

### GetStatus

`func (o *SearchInstallmentPlanResponseItem) GetStatus() PlanStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SearchInstallmentPlanResponseItem) GetStatusOk() (*PlanStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SearchInstallmentPlanResponseItem) SetStatus(v PlanStatus)`

SetStatus sets Status field to given value.


### GetCurrency

`func (o *SearchInstallmentPlanResponseItem) GetCurrency() string`

GetCurrency returns the Currency field if non-nil, zero value otherwise.

### GetCurrencyOk

`func (o *SearchInstallmentPlanResponseItem) GetCurrencyOk() (*string, bool)`

GetCurrencyOk returns a tuple with the Currency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrency

`func (o *SearchInstallmentPlanResponseItem) SetCurrency(v string)`

SetCurrency sets Currency field to given value.

### HasCurrency

`func (o *SearchInstallmentPlanResponseItem) HasCurrency() bool`

HasCurrency returns a boolean if a field has been set.

### GetOriginalAmount

`func (o *SearchInstallmentPlanResponseItem) GetOriginalAmount() float32`

GetOriginalAmount returns the OriginalAmount field if non-nil, zero value otherwise.

### GetOriginalAmountOk

`func (o *SearchInstallmentPlanResponseItem) GetOriginalAmountOk() (*float32, bool)`

GetOriginalAmountOk returns a tuple with the OriginalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalAmount

`func (o *SearchInstallmentPlanResponseItem) SetOriginalAmount(v float32)`

SetOriginalAmount sets OriginalAmount field to given value.

### HasOriginalAmount

`func (o *SearchInstallmentPlanResponseItem) HasOriginalAmount() bool`

HasOriginalAmount returns a boolean if a field has been set.

### GetAmount

`func (o *SearchInstallmentPlanResponseItem) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *SearchInstallmentPlanResponseItem) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *SearchInstallmentPlanResponseItem) SetAmount(v float32)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *SearchInstallmentPlanResponseItem) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetAuthorization

`func (o *SearchInstallmentPlanResponseItem) GetAuthorization() AuthorizationModel`

GetAuthorization returns the Authorization field if non-nil, zero value otherwise.

### GetAuthorizationOk

`func (o *SearchInstallmentPlanResponseItem) GetAuthorizationOk() (*AuthorizationModel, bool)`

GetAuthorizationOk returns a tuple with the Authorization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorization

`func (o *SearchInstallmentPlanResponseItem) SetAuthorization(v AuthorizationModel)`

SetAuthorization sets Authorization field to given value.

### HasAuthorization

`func (o *SearchInstallmentPlanResponseItem) HasAuthorization() bool`

HasAuthorization returns a boolean if a field has been set.

### GetShopper

`func (o *SearchInstallmentPlanResponseItem) GetShopper() ShopperData`

GetShopper returns the Shopper field if non-nil, zero value otherwise.

### GetShopperOk

`func (o *SearchInstallmentPlanResponseItem) GetShopperOk() (*ShopperData, bool)`

GetShopperOk returns a tuple with the Shopper field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShopper

`func (o *SearchInstallmentPlanResponseItem) SetShopper(v ShopperData)`

SetShopper sets Shopper field to given value.

### HasShopper

`func (o *SearchInstallmentPlanResponseItem) HasShopper() bool`

HasShopper returns a boolean if a field has been set.

### GetBillingAddress

`func (o *SearchInstallmentPlanResponseItem) GetBillingAddress() AddressData`

GetBillingAddress returns the BillingAddress field if non-nil, zero value otherwise.

### GetBillingAddressOk

`func (o *SearchInstallmentPlanResponseItem) GetBillingAddressOk() (*AddressData, bool)`

GetBillingAddressOk returns a tuple with the BillingAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingAddress

`func (o *SearchInstallmentPlanResponseItem) SetBillingAddress(v AddressData)`

SetBillingAddress sets BillingAddress field to given value.

### HasBillingAddress

`func (o *SearchInstallmentPlanResponseItem) HasBillingAddress() bool`

HasBillingAddress returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *SearchInstallmentPlanResponseItem) GetPaymentMethod() PaymentMethodModel`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *SearchInstallmentPlanResponseItem) GetPaymentMethodOk() (*PaymentMethodModel, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *SearchInstallmentPlanResponseItem) SetPaymentMethod(v PaymentMethodModel)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *SearchInstallmentPlanResponseItem) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetExtendedParams

`func (o *SearchInstallmentPlanResponseItem) GetExtendedParams() map[string]string`

GetExtendedParams returns the ExtendedParams field if non-nil, zero value otherwise.

### GetExtendedParamsOk

`func (o *SearchInstallmentPlanResponseItem) GetExtendedParamsOk() (*map[string]string, bool)`

GetExtendedParamsOk returns a tuple with the ExtendedParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtendedParams

`func (o *SearchInstallmentPlanResponseItem) SetExtendedParams(v map[string]string)`

SetExtendedParams sets ExtendedParams field to given value.

### HasExtendedParams

`func (o *SearchInstallmentPlanResponseItem) HasExtendedParams() bool`

HasExtendedParams returns a boolean if a field has been set.

### GetInstallments

`func (o *SearchInstallmentPlanResponseItem) GetInstallments() []Installment`

GetInstallments returns the Installments field if non-nil, zero value otherwise.

### GetInstallmentsOk

`func (o *SearchInstallmentPlanResponseItem) GetInstallmentsOk() (*[]Installment, bool)`

GetInstallmentsOk returns a tuple with the Installments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstallments

`func (o *SearchInstallmentPlanResponseItem) SetInstallments(v []Installment)`

SetInstallments sets Installments field to given value.

### HasInstallments

`func (o *SearchInstallmentPlanResponseItem) HasInstallments() bool`

HasInstallments returns a boolean if a field has been set.

### GetRefunds

`func (o *SearchInstallmentPlanResponseItem) GetRefunds() []RefundModel`

GetRefunds returns the Refunds field if non-nil, zero value otherwise.

### GetRefundsOk

`func (o *SearchInstallmentPlanResponseItem) GetRefundsOk() (*[]RefundModel, bool)`

GetRefundsOk returns a tuple with the Refunds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefunds

`func (o *SearchInstallmentPlanResponseItem) SetRefunds(v []RefundModel)`

SetRefunds sets Refunds field to given value.

### HasRefunds

`func (o *SearchInstallmentPlanResponseItem) HasRefunds() bool`

HasRefunds returns a boolean if a field has been set.

### GetLinks

`func (o *SearchInstallmentPlanResponseItem) GetLinks() LinksData`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SearchInstallmentPlanResponseItem) GetLinksOk() (*LinksData, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SearchInstallmentPlanResponseItem) SetLinks(v LinksData)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SearchInstallmentPlanResponseItem) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


