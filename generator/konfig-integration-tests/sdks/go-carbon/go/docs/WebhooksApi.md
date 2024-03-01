# APIClient.WebhooksApi

All URIs are relative to *https://api.carbon.ai*

Method | Path | Description
------------- | ------------- | -------------
[**AddUrl**](WebhooksApi.md#AddUrl) | **Post** /add_webhook | Add Webhook Url
[**DeleteUrl**](WebhooksApi.md#DeleteUrl) | **Delete** /delete_webhook/{webhook_id} | Delete Webhook Url
[**Urls**](WebhooksApi.md#Urls) | **Post** /webhooks | Webhook Urls



## AddUrl

Add Webhook Url

### Example

```go
package main

import (
    "fmt"
    "os"
    carbon "github.com/Carbon-for-Developers/carbon-sdks/go"
)

func main() {
    configuration := carbon.NewConfiguration()
    configuration.SetAccessToken("AUTHORIZATION")
    client := carbon.NewAPIClient(configuration)

    
    addWebhookProps := *carbon.NewAddWebhookProps(
        "null",
    )
    
    request := client.WebhooksApi.AddUrl(
        addWebhookProps,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `WebhooksApi.AddUrl``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `AddUrl`: Webhook
    fmt.Fprintf(os.Stdout, "Response from `WebhooksApi.AddUrl`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `Webhook.AddUrl.Id`: %v\n", resp.Id)
    fmt.Fprintf(os.Stdout, "Response from `Webhook.AddUrl.OrganizationId`: %v\n", resp.OrganizationId)
    fmt.Fprintf(os.Stdout, "Response from `Webhook.AddUrl.Url`: %v\n", resp.Url)
    fmt.Fprintf(os.Stdout, "Response from `Webhook.AddUrl.SigningKey`: %v\n", resp.SigningKey)
    fmt.Fprintf(os.Stdout, "Response from `Webhook.AddUrl.CreatedAt`: %v\n", resp.CreatedAt)
    fmt.Fprintf(os.Stdout, "Response from `Webhook.AddUrl.UpdatedAt`: %v\n", resp.UpdatedAt)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteUrl

Delete Webhook Url

### Example

```go
package main

import (
    "fmt"
    "os"
    carbon "github.com/Carbon-for-Developers/carbon-sdks/go"
)

func main() {
    configuration := carbon.NewConfiguration()
    configuration.SetAccessToken("AUTHORIZATION")
    client := carbon.NewAPIClient(configuration)

    request := client.WebhooksApi.DeleteUrl(
        56,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `WebhooksApi.DeleteUrl``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `DeleteUrl`: GenericSuccessResponse
    fmt.Fprintf(os.Stdout, "Response from `WebhooksApi.DeleteUrl`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `GenericSuccessResponse.DeleteUrl.Success`: %v\n", resp.Success)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Urls

Webhook Urls

### Example

```go
package main

import (
    "fmt"
    "os"
    carbon "github.com/Carbon-for-Developers/carbon-sdks/go"
)

func main() {
    configuration := carbon.NewConfiguration()
    configuration.SetAccessToken("AUTHORIZATION")
    client := carbon.NewAPIClient(configuration)

    pagination := *carbon.NewPagination()
    filters := *carbon.NewWebhookFilters()
    
    webhookQueryInput := *carbon.NewWebhookQueryInput()
    webhookQueryInput.SetPagination(pagination)
    webhookQueryInput.SetOrderBy(null)
    webhookQueryInput.SetOrderDir(null)
    webhookQueryInput.SetFilters(filters)
    
    request := client.WebhooksApi.Urls(
        webhookQueryInput,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `WebhooksApi.Urls``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `Urls`: WebhookQueryResponse
    fmt.Fprintf(os.Stdout, "Response from `WebhooksApi.Urls`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `WebhookQueryResponse.Urls.Results`: %v\n", resp.Results)
    fmt.Fprintf(os.Stdout, "Response from `WebhookQueryResponse.Urls.Count`: %v\n", resp.Count)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

