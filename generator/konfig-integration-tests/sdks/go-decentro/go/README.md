# decentro_in_collections - Decentro's Go SDK

Collections

For more information, please visit [https://decentro.tech](https://decentro.tech)

## Installation

Add to your project:

```shell
go get github.com/decentro-in/decentro-in-collections-sdk/tree/master/go
```

## Getting Started

```golang
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

## Documentation for API Endpoints

All URIs are relative to *https://in.staging.decentro.tech*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CollectionsApi* | [**GeneratePaymentLink**](docs/CollectionsApi.md#generatepaymentlink) | **Post** /v2/payments/upi/link | Generate payment link
*CollectionsApi* | [**GetTransactionStatus**](docs/CollectionsApi.md#gettransactionstatus) | **Get** /v2/payments/transaction/{transaction_id}/status | Get transaction status
*CollectionsApi* | [**IssueCollectRequest**](docs/CollectionsApi.md#issuecollectrequest) | **Post** /v2/payments/collection | Issue collect request
*CollectionsApi* | [**IssueUpiRefund**](docs/CollectionsApi.md#issueupirefund) | **Post** /v2/payments/upi/refund | Issue UPI Refund
*CollectionsApi* | [**ValidateUpiHandle**](docs/CollectionsApi.md#validateupihandle) | **Post** /v2/payments/vpa/validate | Validate UPI handle


## Documentation For Models

 - [GeneratePaymentLink400Response](docs/GeneratePaymentLink400Response.md)
 - [GeneratePaymentLinkRequest](docs/GeneratePaymentLinkRequest.md)
 - [GeneratePaymentLinkResponse](docs/GeneratePaymentLinkResponse.md)
 - [GeneratePaymentLinkResponseData](docs/GeneratePaymentLinkResponseData.md)
 - [GeneratePaymentLinkResponseDataPspUri](docs/GeneratePaymentLinkResponseDataPspUri.md)
 - [GetTransactionStatusResponse](docs/GetTransactionStatusResponse.md)
 - [GetTransactionStatusResponseData](docs/GetTransactionStatusResponseData.md)
 - [GetTransactionStatusResponseError](docs/GetTransactionStatusResponseError.md)
 - [IssueCollectRequest400Response](docs/IssueCollectRequest400Response.md)
 - [IssueCollectRequestRequest](docs/IssueCollectRequestRequest.md)
 - [IssueCollectRequestResponse](docs/IssueCollectRequestResponse.md)
 - [IssueCollectRequestResponseData](docs/IssueCollectRequestResponseData.md)
 - [IssueUpiRefund400Response](docs/IssueUpiRefund400Response.md)
 - [IssueUpiRefundRequest](docs/IssueUpiRefundRequest.md)
 - [IssueUpiRefundResponse](docs/IssueUpiRefundResponse.md)
 - [IssueUpiRefundResponseData](docs/IssueUpiRefundResponseData.md)
 - [ValidateUpiHandle400Response](docs/ValidateUpiHandle400Response.md)
 - [ValidateUpiHandleRequest](docs/ValidateUpiHandleRequest.md)
 - [ValidateUpiHandleResponse](docs/ValidateUpiHandleResponse.md)
 - [ValidateUpiHandleResponseData](docs/ValidateUpiHandleResponseData.md)
