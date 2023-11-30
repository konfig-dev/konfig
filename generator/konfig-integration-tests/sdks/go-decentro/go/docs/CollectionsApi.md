# APIClient.CollectionsApi

All URIs are relative to *https://in.staging.decentro.tech*

Method | Path | Description
------------- | ------------- | -------------
[**GeneratePaymentLink**](CollectionsApi.md#GeneratePaymentLink) | **Post** /v2/payments/upi/link | Generate payment link
[**GetTransactionStatus**](CollectionsApi.md#GetTransactionStatus) | **Get** /v2/payments/transaction/{transaction_id}/status | Get transaction status
[**IssueCollectRequest**](CollectionsApi.md#IssueCollectRequest) | **Post** /v2/payments/collection | Issue collect request
[**IssueUpiRefund**](CollectionsApi.md#IssueUpiRefund) | **Post** /v2/payments/upi/refund | Issue UPI Refund
[**ValidateUpiHandle**](CollectionsApi.md#ValidateUpiHandle) | **Post** /v2/payments/vpa/validate | Validate UPI handle



## GeneratePaymentLink

Generate payment link

### Example

```go
package main

import (
    "fmt"
    "os"
    decentro_in_collections "github.com/decentro-in/decentro-in-collections-sdk/tree/master/go"
)

func main() {
    configuration := decentro_in_collections.NewConfiguration()
    configuration.SetClientId("CLIENT_ID")
    configuration.SetClientSecret("CLIENT_SECRET")
    configuration.SetModuleSecret("MODULE_SECRET")
    configuration.SetProviderSecret("PROVIDER_SECRET")
    client := decentro_in_collections.NewAPIClient(configuration)

    
    generatePaymentLinkRequest := *decentro_in_collections.NewGeneratePaymentLinkRequest(
        "ABCDEF12345",
        "00000000000000000",
        4,
        "Welcome to Decentro",
        0,
    )
    generatePaymentLinkRequest.SetExpiryTime(10)
    generatePaymentLinkRequest.SetCustomizedQrWithLogo(0)
    generatePaymentLinkRequest.SetGenerateUri(0)
    
    request := client.CollectionsApi.GeneratePaymentLink(
        generatePaymentLinkRequest,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CollectionsApi.GeneratePaymentLink``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `GeneratePaymentLink`: GeneratePaymentLinkResponse
    fmt.Fprintf(os.Stdout, "Response from `CollectionsApi.GeneratePaymentLink`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `GeneratePaymentLinkResponse.GeneratePaymentLink.DecentroTxnId`: %v\n", *resp.DecentroTxnId)
    fmt.Fprintf(os.Stdout, "Response from `GeneratePaymentLinkResponse.GeneratePaymentLink.Status`: %v\n", *resp.Status)
    fmt.Fprintf(os.Stdout, "Response from `GeneratePaymentLinkResponse.GeneratePaymentLink.ResponseCode`: %v\n", *resp.ResponseCode)
    fmt.Fprintf(os.Stdout, "Response from `GeneratePaymentLinkResponse.GeneratePaymentLink.Message`: %v\n", *resp.Message)
    fmt.Fprintf(os.Stdout, "Response from `GeneratePaymentLinkResponse.GeneratePaymentLink.Data`: %v\n", *resp.Data)
    fmt.Fprintf(os.Stdout, "Response from `GeneratePaymentLinkResponse.GeneratePaymentLink.ResponseKey`: %v\n", *resp.ResponseKey)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTransactionStatus

Get transaction status

### Example

```go
package main

import (
    "fmt"
    "os"
    decentro_in_collections "github.com/decentro-in/decentro-in-collections-sdk/tree/master/go"
)

func main() {
    configuration := decentro_in_collections.NewConfiguration()
    configuration.SetClientId("CLIENT_ID")
    configuration.SetClientSecret("CLIENT_SECRET")
    configuration.SetModuleSecret("MODULE_SECRET")
    configuration.SetProviderSecret("PROVIDER_SECRET")
    client := decentro_in_collections.NewAPIClient(configuration)

    request := client.CollectionsApi.GetTransactionStatus(
        "transactionId_example",
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CollectionsApi.GetTransactionStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `GetTransactionStatus`: GetTransactionStatusResponse
    fmt.Fprintf(os.Stdout, "Response from `CollectionsApi.GetTransactionStatus`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `GetTransactionStatusResponse.GetTransactionStatus.DecentroTxnId`: %v\n", *resp.DecentroTxnId)
    fmt.Fprintf(os.Stdout, "Response from `GetTransactionStatusResponse.GetTransactionStatus.Status`: %v\n", *resp.Status)
    fmt.Fprintf(os.Stdout, "Response from `GetTransactionStatusResponse.GetTransactionStatus.ResponseCode`: %v\n", *resp.ResponseCode)
    fmt.Fprintf(os.Stdout, "Response from `GetTransactionStatusResponse.GetTransactionStatus.Message`: %v\n", *resp.Message)
    fmt.Fprintf(os.Stdout, "Response from `GetTransactionStatusResponse.GetTransactionStatus.Data`: %v\n", *resp.Data)
    fmt.Fprintf(os.Stdout, "Response from `GetTransactionStatusResponse.GetTransactionStatus.Error`: %v\n", *resp.Error)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## IssueCollectRequest

Issue collect request

### Example

```go
package main

import (
    "fmt"
    "os"
    decentro_in_collections "github.com/decentro-in/decentro-in-collections-sdk/tree/master/go"
)

func main() {
    configuration := decentro_in_collections.NewConfiguration()
    configuration.SetClientId("CLIENT_ID")
    configuration.SetClientSecret("CLIENT_SECRET")
    configuration.SetModuleSecret("MODULE_SECRET")
    configuration.SetProviderSecret("PROVIDER_SECRET")
    client := decentro_in_collections.NewAPIClient(configuration)

    
    issueCollectRequestRequest := *decentro_in_collections.NewIssueCollectRequestRequest(
        "ABCDEF12345",
        "test001@abc",
        "00000000000000000",
        1,
        "Welcome to Decentro",
    )
    issueCollectRequestRequest.SetExpiryTime(30)
    
    request := client.CollectionsApi.IssueCollectRequest(
        issueCollectRequestRequest,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CollectionsApi.IssueCollectRequest``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `IssueCollectRequest`: IssueCollectRequestResponse
    fmt.Fprintf(os.Stdout, "Response from `CollectionsApi.IssueCollectRequest`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `IssueCollectRequestResponse.IssueCollectRequest.DecentroTxnId`: %v\n", *resp.DecentroTxnId)
    fmt.Fprintf(os.Stdout, "Response from `IssueCollectRequestResponse.IssueCollectRequest.Status`: %v\n", *resp.Status)
    fmt.Fprintf(os.Stdout, "Response from `IssueCollectRequestResponse.IssueCollectRequest.ResponseCode`: %v\n", *resp.ResponseCode)
    fmt.Fprintf(os.Stdout, "Response from `IssueCollectRequestResponse.IssueCollectRequest.Message`: %v\n", *resp.Message)
    fmt.Fprintf(os.Stdout, "Response from `IssueCollectRequestResponse.IssueCollectRequest.Data`: %v\n", *resp.Data)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## IssueUpiRefund

Issue UPI Refund

### Example

```go
package main

import (
    "fmt"
    "os"
    decentro_in_collections "github.com/decentro-in/decentro-in-collections-sdk/tree/master/go"
)

func main() {
    configuration := decentro_in_collections.NewConfiguration()
    configuration.SetClientId("CLIENT_ID")
    configuration.SetClientSecret("CLIENT_SECRET")
    configuration.SetModuleSecret("MODULE_SECRET")
    configuration.SetProviderSecret("PROVIDER_SECRET")
    client := decentro_in_collections.NewAPIClient(configuration)

    
    issueUpiRefundRequest := *decentro_in_collections.NewIssueUpiRefundRequest(
        "ABCDEF12345",
    )
    issueUpiRefundRequest.SetTransactionId("4CE9587AE3D143CDAC72E7D0CF14D028")
    issueUpiRefundRequest.SetBankReferenceNumber("111111111111")
    issueUpiRefundRequest.SetPurposeMessage("Welcome to Decentro")
    
    request := client.CollectionsApi.IssueUpiRefund(
        issueUpiRefundRequest,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CollectionsApi.IssueUpiRefund``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `IssueUpiRefund`: IssueUpiRefundResponse
    fmt.Fprintf(os.Stdout, "Response from `CollectionsApi.IssueUpiRefund`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `IssueUpiRefundResponse.IssueUpiRefund.DecentroTxnId`: %v\n", *resp.DecentroTxnId)
    fmt.Fprintf(os.Stdout, "Response from `IssueUpiRefundResponse.IssueUpiRefund.Status`: %v\n", *resp.Status)
    fmt.Fprintf(os.Stdout, "Response from `IssueUpiRefundResponse.IssueUpiRefund.ResponseCode`: %v\n", *resp.ResponseCode)
    fmt.Fprintf(os.Stdout, "Response from `IssueUpiRefundResponse.IssueUpiRefund.Message`: %v\n", *resp.Message)
    fmt.Fprintf(os.Stdout, "Response from `IssueUpiRefundResponse.IssueUpiRefund.Data`: %v\n", *resp.Data)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ValidateUpiHandle

Validate UPI handle

### Example

```go
package main

import (
    "fmt"
    "os"
    decentro_in_collections "github.com/decentro-in/decentro-in-collections-sdk/tree/master/go"
)

func main() {
    configuration := decentro_in_collections.NewConfiguration()
    configuration.SetClientId("CLIENT_ID")
    configuration.SetClientSecret("CLIENT_SECRET")
    configuration.SetModuleSecret("MODULE_SECRET")
    configuration.SetProviderSecret("PROVIDER_SECRET")
    client := decentro_in_collections.NewAPIClient(configuration)

    
    validateUpiHandleRequest := *decentro_in_collections.NewValidateUpiHandleRequest(
        "ABCDEF12345",
        "test001@abc",
    )
    validateUpiHandleRequest.SetType("BASIC")
    
    request := client.CollectionsApi.ValidateUpiHandle(
        validateUpiHandleRequest,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CollectionsApi.ValidateUpiHandle``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `ValidateUpiHandle`: ValidateUpiHandleResponse
    fmt.Fprintf(os.Stdout, "Response from `CollectionsApi.ValidateUpiHandle`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `ValidateUpiHandleResponse.ValidateUpiHandle.DecentroTxnId`: %v\n", *resp.DecentroTxnId)
    fmt.Fprintf(os.Stdout, "Response from `ValidateUpiHandleResponse.ValidateUpiHandle.Status`: %v\n", *resp.Status)
    fmt.Fprintf(os.Stdout, "Response from `ValidateUpiHandleResponse.ValidateUpiHandle.ResponseCode`: %v\n", *resp.ResponseCode)
    fmt.Fprintf(os.Stdout, "Response from `ValidateUpiHandleResponse.ValidateUpiHandle.Message`: %v\n", *resp.Message)
    fmt.Fprintf(os.Stdout, "Response from `ValidateUpiHandleResponse.ValidateUpiHandle.Data`: %v\n", *resp.Data)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

