# APIClient.InstallmentPlanApi

All URIs are relative to *https://web-api-v3.production.splitit.com*

Method | Path | Description
------------- | ------------- | -------------
[**Cancel**](InstallmentPlanApi.md#Cancel) | **Post** /api/installmentplans/{installmentPlanNumber}/cancel | 
[**CheckEligibility**](InstallmentPlanApi.md#CheckEligibility) | **Post** /api/installmentplans/check-eligibility | 
[**Get**](InstallmentPlanApi.md#Get) | **Get** /api/installmentplans/{installmentPlanNumber} | 
[**Post**](InstallmentPlanApi.md#Post) | **Post** /api/installmentplans/initiate | 
[**Post2**](InstallmentPlanApi.md#Post2) | **Post** /api/installmentplans | 
[**Refund**](InstallmentPlanApi.md#Refund) | **Post** /api/installmentplans/{installmentPlanNumber}/refund | 
[**Search**](InstallmentPlanApi.md#Search) | **Get** /api/installmentplans/search | 
[**UpdateOrder**](InstallmentPlanApi.md#UpdateOrder) | **Put** /api/installmentplans/{installmentPlanNumber}/updateorder | 
[**UpdateOrder2**](InstallmentPlanApi.md#UpdateOrder2) | **Put** /api/installmentplans/updateorder | 
[**VerifyAuthorization**](InstallmentPlanApi.md#VerifyAuthorization) | **Get** /api/installmentplans/{installmentPlanNumber}/verifyauthorization | 



## Cancel



### Example

```go
package main

import (
    "fmt"
    "os"
    splitit "github.com/konfig-dev/splitit-go-sdk/go"
)

func main() {
    configuration := splitit.NewConfiguration()
    client := splitit.NewAPIClient(configuration)

    request := client.InstallmentPlanApi.Cancel(
        "installmentPlanNumber_example",
        "xSplititIdempotencyKey_example",
        """",
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `InstallmentPlanApi.Cancel``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `Cancel`: InstallmentPlanCancelResponse
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanApi.Cancel`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanCancelResponse.Cancel.InstallmentPlanNumber`: %v\n", *resp.InstallmentPlanNumber)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CheckEligibility



### Example

```go
package main

import (
    "fmt"
    "os"
    splitit "github.com/konfig-dev/splitit-go-sdk/go"
)

func main() {
    configuration := splitit.NewConfiguration()
    client := splitit.NewAPIClient(configuration)

    planData := *splitit.NewPlanData()
    cardDetails := *splitit.NewCardData()
    billingAddress := *splitit.NewAddressData()
    
    checkInstallmentsEligibilityRequest := *splitit.NewCheckInstallmentsEligibilityRequest()
    checkInstallmentsEligibilityRequest.SetPlanData(planData)
    checkInstallmentsEligibilityRequest.SetCardDetails(cardDetails)
    checkInstallmentsEligibilityRequest.SetBillingAddress(billingAddress)
    
    request := client.InstallmentPlanApi.CheckEligibility(
        "xSplititIdempotencyKey_example",
        """",
        checkInstallmentsEligibilityRequest,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `InstallmentPlanApi.CheckEligibility``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `CheckEligibility`: InstallmentsEligibilityResponse
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanApi.CheckEligibility`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentsEligibilityResponse.CheckEligibility.InstallmentProvider`: %v\n", *resp.InstallmentProvider)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentsEligibilityResponse.CheckEligibility.PaymentPlanOptions`: %v\n", *resp.PaymentPlanOptions)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Get



### Example

```go
package main

import (
    "fmt"
    "os"
    splitit "github.com/konfig-dev/splitit-go-sdk/go"
)

func main() {
    configuration := splitit.NewConfiguration()
    client := splitit.NewAPIClient(configuration)

    request := client.InstallmentPlanApi.Get(
        "installmentPlanNumber_example",
        "xSplititIdempotencyKey_example",
        """",
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `InstallmentPlanApi.Get``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `Get`: InstallmentPlanGetResponse
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanApi.Get`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanGetResponse.Get.InstallmentPlanNumber`: %v\n", *resp.InstallmentPlanNumber)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanGetResponse.Get.DateCreated`: %v\n", resp.DateCreated)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanGetResponse.Get.RefOrderNumber`: %v\n", *resp.RefOrderNumber)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanGetResponse.Get.PurchaseMethod`: %v\n", *resp.PurchaseMethod)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanGetResponse.Get.Status`: %v\n", resp.Status)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanGetResponse.Get.Currency`: %v\n", *resp.Currency)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanGetResponse.Get.OriginalAmount`: %v\n", *resp.OriginalAmount)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanGetResponse.Get.Amount`: %v\n", *resp.Amount)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanGetResponse.Get.Authorization`: %v\n", *resp.Authorization)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanGetResponse.Get.Shopper`: %v\n", *resp.Shopper)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanGetResponse.Get.BillingAddress`: %v\n", *resp.BillingAddress)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanGetResponse.Get.PaymentMethod`: %v\n", *resp.PaymentMethod)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanGetResponse.Get.ExtendedParams`: %v\n", *resp.ExtendedParams)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanGetResponse.Get.Installments`: %v\n", *resp.Installments)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanGetResponse.Get.Refunds`: %v\n", *resp.Refunds)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanGetResponse.Get.Links`: %v\n", *resp.Links)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Post



### Example

```go
package main

import (
    "fmt"
    "os"
    splitit "github.com/konfig-dev/splitit-go-sdk/go"
)

func main() {
    configuration := splitit.NewConfiguration()
    client := splitit.NewAPIClient(configuration)

    shopper := *splitit.NewShopperData()
    planData := *splitit.NewPlanDataModel()
    billingAddress := *splitit.NewAddressDataModel()
    redirectUrls := *splitit.NewInitiateRedirectionEndpointsModel()
    uxSettings := *splitit.NewUxSettingsModel()
    eventsEndpoints := *splitit.NewEventsEndpointsModel()
    processingData := *splitit.NewProcessingData()
    
    installmentPlanInitiateRequest := *splitit.NewInstallmentPlanInitiateRequest(
        null,
    )
    installmentPlanInitiateRequest.SetAttempt3dSecure(null)
    installmentPlanInitiateRequest.SetShopper(shopper)
    installmentPlanInitiateRequest.SetPlanData(planData)
    installmentPlanInitiateRequest.SetBillingAddress(billingAddress)
    installmentPlanInitiateRequest.SetRedirectUrls(redirectUrls)
    installmentPlanInitiateRequest.SetUxSettings(uxSettings)
    installmentPlanInitiateRequest.SetEventsEndpoints(eventsEndpoints)
    installmentPlanInitiateRequest.SetProcessingData(processingData)
    
    request := client.InstallmentPlanApi.Post(
        "xSplititIdempotencyKey_example",
        """",
        installmentPlanInitiateRequest,
    )
    request.XSplititTestMode("xSplititTestMode_example")
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `InstallmentPlanApi.Post``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `Post`: InitiatePlanResponse
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanApi.Post`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `InitiatePlanResponse.Post.InstallmentPlanNumber`: %v\n", *resp.InstallmentPlanNumber)
    fmt.Fprintf(os.Stdout, "Response from `InitiatePlanResponse.Post.RefOrderNumber`: %v\n", *resp.RefOrderNumber)
    fmt.Fprintf(os.Stdout, "Response from `InitiatePlanResponse.Post.PurchaseMethod`: %v\n", *resp.PurchaseMethod)
    fmt.Fprintf(os.Stdout, "Response from `InitiatePlanResponse.Post.Status`: %v\n", resp.Status)
    fmt.Fprintf(os.Stdout, "Response from `InitiatePlanResponse.Post.Currency`: %v\n", *resp.Currency)
    fmt.Fprintf(os.Stdout, "Response from `InitiatePlanResponse.Post.Amount`: %v\n", *resp.Amount)
    fmt.Fprintf(os.Stdout, "Response from `InitiatePlanResponse.Post.ExtendedParams`: %v\n", *resp.ExtendedParams)
    fmt.Fprintf(os.Stdout, "Response from `InitiatePlanResponse.Post.Shopper`: %v\n", *resp.Shopper)
    fmt.Fprintf(os.Stdout, "Response from `InitiatePlanResponse.Post.BillingAddress`: %v\n", *resp.BillingAddress)
    fmt.Fprintf(os.Stdout, "Response from `InitiatePlanResponse.Post.CheckoutUrl`: %v\n", *resp.CheckoutUrl)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Post2



### Example

```go
package main

import (
    "fmt"
    "os"
    splitit "github.com/konfig-dev/splitit-go-sdk/go"
)

func main() {
    configuration := splitit.NewConfiguration()
    client := splitit.NewAPIClient(configuration)

    shopper := *splitit.NewShopperData()
    planData := *splitit.NewPlanDataModel()
    billingAddress := *splitit.NewAddressDataModel()
    paymentMethod := *splitit.NewPaymentMethodModel()
    redirectUrls := *splitit.NewRedirectionEndpointsModel()
    processingData := *splitit.NewProcessingData()
    eventsEndpoints := *splitit.NewEventsEndpointsModel()
    
    installmentPlanCreateRequest := *splitit.NewInstallmentPlanCreateRequest(
        null,
        null,
    )
    installmentPlanCreateRequest.SetAttempt3dSecure(null)
    installmentPlanCreateRequest.SetShopper(shopper)
    installmentPlanCreateRequest.SetPlanData(planData)
    installmentPlanCreateRequest.SetBillingAddress(billingAddress)
    installmentPlanCreateRequest.SetPaymentMethod(paymentMethod)
    installmentPlanCreateRequest.SetRedirectUrls(redirectUrls)
    installmentPlanCreateRequest.SetProcessingData(processingData)
    installmentPlanCreateRequest.SetEventsEndpoints(eventsEndpoints)
    
    request := client.InstallmentPlanApi.Post2(
        "xSplititIdempotencyKey_example",
        """",
        installmentPlanCreateRequest,
    )
    request.XSplititTestMode("xSplititTestMode_example")
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `InstallmentPlanApi.Post2``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `Post2`: InstallmentPlanCreateResponse
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanApi.Post2`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanCreateResponse.Post2.InstallmentPlanNumber`: %v\n", *resp.InstallmentPlanNumber)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanCreateResponse.Post2.DateCreated`: %v\n", resp.DateCreated)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanCreateResponse.Post2.RefOrderNumber`: %v\n", *resp.RefOrderNumber)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanCreateResponse.Post2.PurchaseMethod`: %v\n", *resp.PurchaseMethod)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanCreateResponse.Post2.Status`: %v\n", resp.Status)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanCreateResponse.Post2.Currency`: %v\n", *resp.Currency)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanCreateResponse.Post2.OriginalAmount`: %v\n", *resp.OriginalAmount)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanCreateResponse.Post2.Amount`: %v\n", *resp.Amount)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanCreateResponse.Post2.ExtendedParams`: %v\n", *resp.ExtendedParams)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanCreateResponse.Post2.Authorization`: %v\n", *resp.Authorization)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanCreateResponse.Post2.Shopper`: %v\n", *resp.Shopper)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanCreateResponse.Post2.BillingAddress`: %v\n", *resp.BillingAddress)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanCreateResponse.Post2.PaymentMethod`: %v\n", *resp.PaymentMethod)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanCreateResponse.Post2.Installments`: %v\n", *resp.Installments)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanCreateResponse.Post2.Links`: %v\n", *resp.Links)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Refund



### Example

```go
package main

import (
    "fmt"
    "os"
    splitit "github.com/konfig-dev/splitit-go-sdk/go"
)

func main() {
    configuration := splitit.NewConfiguration()
    client := splitit.NewAPIClient(configuration)

    
    installmentPlanRefundRequest := *splitit.NewInstallmentPlanRefundRequest(
        null,
    )
    installmentPlanRefundRequest.SetRefundStrategy(null)
    
    request := client.InstallmentPlanApi.Refund(
        "installmentPlanNumber_example",
        "xSplititIdempotencyKey_example",
        """",
        installmentPlanRefundRequest,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `InstallmentPlanApi.Refund``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `Refund`: InstallmentPlanRefundResponse
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanApi.Refund`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanRefundResponse.Refund.RefundId`: %v\n", *resp.RefundId)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanRefundResponse.Refund.InstallmentPlanNumber`: %v\n", *resp.InstallmentPlanNumber)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanRefundResponse.Refund.Currency`: %v\n", *resp.Currency)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanRefundResponse.Refund.NonCreditRefundAmount`: %v\n", *resp.NonCreditRefundAmount)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanRefundResponse.Refund.CreditRefundAmount`: %v\n", *resp.CreditRefundAmount)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanRefundResponse.Refund.Summary`: %v\n", *resp.Summary)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Search



### Example

```go
package main

import (
    "fmt"
    "os"
    splitit "github.com/konfig-dev/splitit-go-sdk/go"
)

func main() {
    configuration := splitit.NewConfiguration()
    client := splitit.NewAPIClient(configuration)

    request := client.InstallmentPlanApi.Search(
        "xSplititIdempotencyKey_example",
        """",
    )
    request.InstallmentPlanNumber("installmentPlanNumber_example")
    request.RefOrderNumber("refOrderNumber_example")
    request.ExtendedParams()
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `InstallmentPlanApi.Search``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `Search`: InstallmentPlanSearchResponse
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanApi.Search`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanSearchResponse.Search.PlanList`: %v\n", *resp.PlanList)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateOrder



### Example

```go
package main

import (
    "fmt"
    "os"
    splitit "github.com/konfig-dev/splitit-go-sdk/go"
)

func main() {
    configuration := splitit.NewConfiguration()
    client := splitit.NewAPIClient(configuration)

    
    updateOrderRequest := *splitit.NewUpdateOrderRequest()
    updateOrderRequest.SetTrackingNumber("null")
    updateOrderRequest.SetRefOrderNumber("null")
    updateOrderRequest.SetShippingStatus(null)
    updateOrderRequest.SetCapture(null)
    
    request := client.InstallmentPlanApi.UpdateOrder(
        "installmentPlanNumber_example",
        "xSplititIdempotencyKey_example",
        """",
        updateOrderRequest,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `InstallmentPlanApi.UpdateOrder``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `UpdateOrder`: InstallmentPlanUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanApi.UpdateOrder`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanUpdateResponse.UpdateOrder.RefOrderNumber`: %v\n", *resp.RefOrderNumber)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanUpdateResponse.UpdateOrder.InstallmentPlanNumber`: %v\n", *resp.InstallmentPlanNumber)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanUpdateResponse.UpdateOrder.Status`: %v\n", resp.Status)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanUpdateResponse.UpdateOrder.ShippingStatus`: %v\n", resp.ShippingStatus)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateOrder2



### Example

```go
package main

import (
    "fmt"
    "os"
    splitit "github.com/konfig-dev/splitit-go-sdk/go"
)

func main() {
    configuration := splitit.NewConfiguration()
    client := splitit.NewAPIClient(configuration)

    
    installmentPlanUpdateRequestByIdentifier := *splitit.NewInstallmentPlanUpdateRequestByIdentifier()
    
    request := client.InstallmentPlanApi.UpdateOrder2(
        "xSplititIdempotencyKey_example",
        """",
        installmentPlanUpdateRequestByIdentifier,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `InstallmentPlanApi.UpdateOrder2``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `UpdateOrder2`: InstallmentPlanUpdateResponse
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanApi.UpdateOrder2`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanUpdateResponse.UpdateOrder2.RefOrderNumber`: %v\n", *resp.RefOrderNumber)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanUpdateResponse.UpdateOrder2.InstallmentPlanNumber`: %v\n", *resp.InstallmentPlanNumber)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanUpdateResponse.UpdateOrder2.Status`: %v\n", resp.Status)
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanUpdateResponse.UpdateOrder2.ShippingStatus`: %v\n", resp.ShippingStatus)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## VerifyAuthorization



### Example

```go
package main

import (
    "fmt"
    "os"
    splitit "github.com/konfig-dev/splitit-go-sdk/go"
)

func main() {
    configuration := splitit.NewConfiguration()
    client := splitit.NewAPIClient(configuration)

    request := client.InstallmentPlanApi.VerifyAuthorization(
        "installmentPlanNumber_example",
        "xSplititIdempotencyKey_example",
        """",
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `InstallmentPlanApi.VerifyAuthorization``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `VerifyAuthorization`: VerifyAuthorizationResponse
    fmt.Fprintf(os.Stdout, "Response from `InstallmentPlanApi.VerifyAuthorization`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `VerifyAuthorizationResponse.VerifyAuthorization.IsAuthorized`: %v\n", resp.IsAuthorized)
    fmt.Fprintf(os.Stdout, "Response from `VerifyAuthorizationResponse.VerifyAuthorization.AuthorizationAmount`: %v\n", *resp.AuthorizationAmount)
    fmt.Fprintf(os.Stdout, "Response from `VerifyAuthorizationResponse.VerifyAuthorization.Authorization`: %v\n", *resp.Authorization)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

