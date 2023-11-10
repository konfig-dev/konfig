# # SearchInstallmentPlanResponseItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**installment_plan_number** | **string** |  | [optional]
**date_created** | **\DateTime** |  |
**ref_order_number** | **string** |  | [optional]
**purchase_method** | [**\Splitit\Model\PurchaseMethod**](PurchaseMethod.md) |  | [optional]
**status** | [**\Splitit\Model\PlanStatus**](PlanStatus.md) |  |
**currency** | **string** |  | [optional]
**original_amount** | **float** |  | [optional]
**amount** | **float** |  | [optional]
**authorization** | [**\Splitit\Model\AuthorizationModel**](AuthorizationModel.md) |  | [optional]
**shopper** | [**\Splitit\Model\ShopperData**](ShopperData.md) |  | [optional]
**billing_address** | [**\Splitit\Model\AddressData**](AddressData.md) |  | [optional]
**payment_method** | [**\Splitit\Model\PaymentMethodModel**](PaymentMethodModel.md) |  | [optional]
**extended_params** | **array<string,string>** |  | [optional]
**installments** | [**\Splitit\Model\Installment[]**](Installment.md) |  | [optional]
**refunds** | [**\Splitit\Model\RefundModel[]**](RefundModel.md) |  | [optional]
**links** | [**\Splitit\Model\LinksData**](LinksData.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
