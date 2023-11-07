

# InstallmentPlanCreateResponse


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**installmentPlanNumber** | **String** |  |  [optional] |
|**dateCreated** | **OffsetDateTime** |  |  |
|**refOrderNumber** | **String** |  |  [optional] |
|**purchaseMethod** | **PurchaseMethod** |  |  [optional] |
|**status** | **PlanStatus** |  |  |
|**currency** | **String** |  |  [optional] |
|**originalAmount** | **Double** |  |  [optional] |
|**amount** | **Double** |  |  [optional] |
|**extendedParams** | **Map&lt;String, String&gt;** |  |  [optional] |
|**authorization** | [**AuthorizationModel**](AuthorizationModel.md) |  |  [optional] |
|**shopper** | [**ShopperData**](ShopperData.md) |  |  [optional] |
|**billingAddress** | [**AddressData**](AddressData.md) |  |  [optional] |
|**paymentMethod** | [**PaymentMethodModel**](PaymentMethodModel.md) |  |  [optional] |
|**installments** | [**List&lt;Installment&gt;**](Installment.md) |  |  [optional] |
|**links** | [**LinksData**](LinksData.md) |  |  [optional] |



