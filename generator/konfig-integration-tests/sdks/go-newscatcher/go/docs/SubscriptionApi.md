# APIClient.SubscriptionApi

All URIs are relative to *https://v3-api.newscatcherapi.com*

Method | Path | Description
------------- | ------------- | -------------
[**Get**](SubscriptionApi.md#Get) | **Get** /api/subscription | [Get] Get My Plan Info
[**Post**](SubscriptionApi.md#Post) | **Post** /api/subscription | [Post] Get My Plan Info



## Get

[Get] Get My Plan Info



### Example

```go
package main

import (
    "fmt"
    "os"
    newscatcherapi "github.com/konfig-dev/newscatcher-go-sdk/tree/main"
)

func main() {
    configuration := newscatcherapi.NewConfiguration()
    configuration.SetApiKey("X_API_TOKEN")
    client := newscatcherapi.NewAPIClient(configuration)

    request := client.SubscriptionApi.Get(
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SubscriptionApi.Get``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `Get`: SubscriptionResponse
    fmt.Fprintf(os.Stdout, "Response from `SubscriptionApi.Get`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `SubscriptionResponse.Get.Active`: %v\n", resp.Active)
    fmt.Fprintf(os.Stdout, "Response from `SubscriptionResponse.Get.CallsPerSeconds`: %v\n", *resp.CallsPerSeconds)
    fmt.Fprintf(os.Stdout, "Response from `SubscriptionResponse.Get.PlanName`: %v\n", resp.PlanName)
    fmt.Fprintf(os.Stdout, "Response from `SubscriptionResponse.Get.UsageAssignedCalls`: %v\n", *resp.UsageAssignedCalls)
    fmt.Fprintf(os.Stdout, "Response from `SubscriptionResponse.Get.UsageRemainingCalls`: %v\n", *resp.UsageRemainingCalls)
    fmt.Fprintf(os.Stdout, "Response from `SubscriptionResponse.Get.HistoricalDays`: %v\n", *resp.HistoricalDays)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Post

[Post] Get My Plan Info



### Example

```go
package main

import (
    "fmt"
    "os"
    newscatcherapi "github.com/konfig-dev/newscatcher-go-sdk/tree/main"
)

func main() {
    configuration := newscatcherapi.NewConfiguration()
    configuration.SetApiKey("X_API_TOKEN")
    client := newscatcherapi.NewAPIClient(configuration)

    request := client.SubscriptionApi.Post(
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SubscriptionApi.Post``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `Post`: SubscriptionResponse
    fmt.Fprintf(os.Stdout, "Response from `SubscriptionApi.Post`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `SubscriptionResponse.Post.Active`: %v\n", resp.Active)
    fmt.Fprintf(os.Stdout, "Response from `SubscriptionResponse.Post.CallsPerSeconds`: %v\n", *resp.CallsPerSeconds)
    fmt.Fprintf(os.Stdout, "Response from `SubscriptionResponse.Post.PlanName`: %v\n", resp.PlanName)
    fmt.Fprintf(os.Stdout, "Response from `SubscriptionResponse.Post.UsageAssignedCalls`: %v\n", *resp.UsageAssignedCalls)
    fmt.Fprintf(os.Stdout, "Response from `SubscriptionResponse.Post.UsageRemainingCalls`: %v\n", *resp.UsageRemainingCalls)
    fmt.Fprintf(os.Stdout, "Response from `SubscriptionResponse.Post.HistoricalDays`: %v\n", *resp.HistoricalDays)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

