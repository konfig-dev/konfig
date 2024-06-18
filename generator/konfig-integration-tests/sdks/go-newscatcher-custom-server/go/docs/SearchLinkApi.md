# APIClient.SearchLinkApi

All URIs are relative to *https://v3-api.newscatcherapi.com*

Method | Path | Description
------------- | ------------- | -------------
[**Get**](SearchLinkApi.md#Get) | **Get** /api/search_by_link | [Get] Search For Articles By Id Or Link
[**Post**](SearchLinkApi.md#Post) | **Post** /api/search_by_link | [Post] Search For Articles Request



## Get

[Get] Search For Articles By Id Or Link



### Example

```go
package main

import (
    "fmt"
    "os"
    newscatcherapi "github.com/konfig-dev/newscatcher-go-sdk/go"
)

func main() {
    configuration := newscatcherapi.NewConfiguration()
    configuration.SetApiKey("X_API_TOKEN")
    client := newscatcherapi.NewAPIClient(configuration)

    request := client.SearchLinkApi.Get(
    )
    request.Ids()
    request.Links()
    request.Page(1)
    request.PageSize(100)
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SearchLinkApi.Get``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `Get`: DtoResponsesSearchResponseSearchResponse
    fmt.Fprintf(os.Stdout, "Response from `SearchLinkApi.Get`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `DtoResponsesSearchResponseSearchResponse.Get.Status`: %v\n", *resp.Status)
    fmt.Fprintf(os.Stdout, "Response from `DtoResponsesSearchResponseSearchResponse.Get.TotalHits`: %v\n", resp.TotalHits)
    fmt.Fprintf(os.Stdout, "Response from `DtoResponsesSearchResponseSearchResponse.Get.Page`: %v\n", resp.Page)
    fmt.Fprintf(os.Stdout, "Response from `DtoResponsesSearchResponseSearchResponse.Get.TotalPages`: %v\n", resp.TotalPages)
    fmt.Fprintf(os.Stdout, "Response from `DtoResponsesSearchResponseSearchResponse.Get.PageSize`: %v\n", resp.PageSize)
    fmt.Fprintf(os.Stdout, "Response from `DtoResponsesSearchResponseSearchResponse.Get.Articles`: %v\n", *resp.Articles)
    fmt.Fprintf(os.Stdout, "Response from `DtoResponsesSearchResponseSearchResponse.Get.UserInput`: %v\n", resp.UserInput)
    fmt.Fprintf(os.Stdout, "Response from `DtoResponsesSearchResponseSearchResponse.Get.ClustersCount`: %v\n", *resp.ClustersCount)
    fmt.Fprintf(os.Stdout, "Response from `DtoResponsesSearchResponseSearchResponse.Get.Clusters`: %v\n", *resp.Clusters)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Post

[Post] Search For Articles Request



### Example

```go
package main

import (
    "fmt"
    "os"
    newscatcherapi "github.com/konfig-dev/newscatcher-go-sdk/go"
)

func main() {
    configuration := newscatcherapi.NewConfiguration()
    configuration.SetApiKey("X_API_TOKEN")
    client := newscatcherapi.NewAPIClient(configuration)

    
    searchURLRequest := *newscatcherapi.NewSearchURLRequest()
    searchURLRequest.SetIds(null)
    searchURLRequest.SetLinks(null)
    searchURLRequest.SetPage(1)
    searchURLRequest.SetPageSize(100)
    
    request := client.SearchLinkApi.Post(
        searchURLRequest,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SearchLinkApi.Post``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `Post`: DtoResponsesSearchResponseSearchResponse
    fmt.Fprintf(os.Stdout, "Response from `SearchLinkApi.Post`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `DtoResponsesSearchResponseSearchResponse.Post.Status`: %v\n", *resp.Status)
    fmt.Fprintf(os.Stdout, "Response from `DtoResponsesSearchResponseSearchResponse.Post.TotalHits`: %v\n", resp.TotalHits)
    fmt.Fprintf(os.Stdout, "Response from `DtoResponsesSearchResponseSearchResponse.Post.Page`: %v\n", resp.Page)
    fmt.Fprintf(os.Stdout, "Response from `DtoResponsesSearchResponseSearchResponse.Post.TotalPages`: %v\n", resp.TotalPages)
    fmt.Fprintf(os.Stdout, "Response from `DtoResponsesSearchResponseSearchResponse.Post.PageSize`: %v\n", resp.PageSize)
    fmt.Fprintf(os.Stdout, "Response from `DtoResponsesSearchResponseSearchResponse.Post.Articles`: %v\n", *resp.Articles)
    fmt.Fprintf(os.Stdout, "Response from `DtoResponsesSearchResponseSearchResponse.Post.UserInput`: %v\n", resp.UserInput)
    fmt.Fprintf(os.Stdout, "Response from `DtoResponsesSearchResponseSearchResponse.Post.ClustersCount`: %v\n", *resp.ClustersCount)
    fmt.Fprintf(os.Stdout, "Response from `DtoResponsesSearchResponseSearchResponse.Post.Clusters`: %v\n", *resp.Clusters)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

