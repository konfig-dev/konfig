# APIClient.SourcesApi

All URIs are relative to *https://v3-api.newscatcherapi.com*

Method | Path | Description
------------- | ------------- | -------------
[**Get**](SourcesApi.md#Get) | **Get** /api/sources | [Get] Search For Sources Request
[**Post**](SourcesApi.md#Post) | **Post** /api/sources | [Post] Search For Sources Request



## Get

[Get] Search For Sources Request



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

    request := client.SourcesApi.Get(
    )
    request.Lang("lang_example")
    request.Countries("countries_example")
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SourcesApi.Get``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `Get`: SourceResponse
    fmt.Fprintf(os.Stdout, "Response from `SourcesApi.Get`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `SourceResponse.Get.Message`: %v\n", resp.Message)
    fmt.Fprintf(os.Stdout, "Response from `SourceResponse.Get.Sources`: %v\n", resp.Sources)
    fmt.Fprintf(os.Stdout, "Response from `SourceResponse.Get.UserInput`: %v\n", resp.UserInput)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Post

[Post] Search For Sources Request



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

    
    sourcesRequest := *newscatcherapi.NewSourcesRequest()
    sourcesRequest.SetLang("null")
    sourcesRequest.SetCountries("null")
    
    request := client.SourcesApi.Post(
        sourcesRequest,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SourcesApi.Post``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `Post`: SourceResponse
    fmt.Fprintf(os.Stdout, "Response from `SourcesApi.Post`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `SourceResponse.Post.Message`: %v\n", resp.Message)
    fmt.Fprintf(os.Stdout, "Response from `SourceResponse.Post.Sources`: %v\n", resp.Sources)
    fmt.Fprintf(os.Stdout, "Response from `SourceResponse.Post.UserInput`: %v\n", resp.UserInput)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

