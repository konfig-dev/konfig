# APIClient.LatestHeadlinesApi

All URIs are relative to *https://v3-api.newscatcherapi.com*

Method | Path | Description
------------- | ------------- | -------------
[**Get**](LatestHeadlinesApi.md#Get) | **Get** /api/latest_headlines | [Get] Search For Latest Headlines Request
[**Post**](LatestHeadlinesApi.md#Post) | **Post** /api/latest_headlines | [Post] Search For Latest Headlines Request



## Get

[Get] Search For Latest Headlines Request



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

    request := client.LatestHeadlinesApi.Get(
    )
    request.When(""7d"")
    request.ByParseDate(false)
    request.Lang("lang_example")
    request.NotLang("notLang_example")
    request.Countries("countries_example")
    request.NotCountries("notCountries_example")
    request.Sources("sources_example")
    request.PredefinedSources("predefinedSources_example")
    request.NotSources("notSources_example")
    request.RankedOnly("rankedOnly_example")
    request.IsHeadline(true)
    request.IsPaidContent(true)
    request.ParentUrl("parentUrl_example")
    request.Theme("theme_example")
    request.AllLinks("allLinks_example")
    request.AllDomainLinks("allDomainLinks_example")
    request.WordCountMin(56)
    request.WordCountMax(56)
    request.Page(1)
    request.PageSize(100)
    request.ClusteringEnabled(true)
    request.ClusteringThreshold(8.14)
    request.ClusteringVariable("clusteringVariable_example")
    request.IncludeNlpData(true)
    request.HasNlp(true)
    request.ORGEntityName("oRGEntityName_example")
    request.PEREntityName("pEREntityName_example")
    request.LOCEntityName("lOCEntityName_example")
    request.MISCEntityName("mISCEntityName_example")
    request.TitleSentimentMin(8.14)
    request.TitleSentimentMax(8.14)
    request.ContentSentimentMin(8.14)
    request.ContentSentimentMax(8.14)
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `LatestHeadlinesApi.Get``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `Get`: CSLHFResponse
    fmt.Fprintf(os.Stdout, "Response from `LatestHeadlinesApi.Get`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `CSLHFResponse.Get.Status`: %v\n", *resp.Status)
    fmt.Fprintf(os.Stdout, "Response from `CSLHFResponse.Get.TotalHits`: %v\n", *resp.TotalHits)
    fmt.Fprintf(os.Stdout, "Response from `CSLHFResponse.Get.Page`: %v\n", *resp.Page)
    fmt.Fprintf(os.Stdout, "Response from `CSLHFResponse.Get.TotalPages`: %v\n", *resp.TotalPages)
    fmt.Fprintf(os.Stdout, "Response from `CSLHFResponse.Get.PageSize`: %v\n", *resp.PageSize)
    fmt.Fprintf(os.Stdout, "Response from `CSLHFResponse.Get.ClustersCount`: %v\n", *resp.ClustersCount)
    fmt.Fprintf(os.Stdout, "Response from `CSLHFResponse.Get.Clusters`: %v\n", *resp.Clusters)
    fmt.Fprintf(os.Stdout, "Response from `CSLHFResponse.Get.UserInput`: %v\n", resp.UserInput)
    fmt.Fprintf(os.Stdout, "Response from `CSLHFResponse.Get.Articles`: %v\n", *resp.Articles)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Post

[Post] Search For Latest Headlines Request



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

    
    latestHeadlinesRequest := *newscatcherapi.NewLatestHeadlinesRequest()
    latestHeadlinesRequest.SetWhen("7d")
    latestHeadlinesRequest.SetByParseDate(false)
    latestHeadlinesRequest.SetLang("null")
    latestHeadlinesRequest.SetNotLang("null")
    latestHeadlinesRequest.SetCountries("null")
    latestHeadlinesRequest.SetNotCountries("null")
    latestHeadlinesRequest.SetSources("null")
    latestHeadlinesRequest.SetPredefinedSources("null")
    latestHeadlinesRequest.SetNotSources("null")
    latestHeadlinesRequest.SetRankedOnly("null")
    latestHeadlinesRequest.SetIsHeadline(null)
    latestHeadlinesRequest.SetIsPaidContent(null)
    latestHeadlinesRequest.SetParentUrl("null")
    latestHeadlinesRequest.SetTheme("null")
    latestHeadlinesRequest.SetAllLinks("null")
    latestHeadlinesRequest.SetAllDomainLinks("null")
    latestHeadlinesRequest.SetWordCountMin(null)
    latestHeadlinesRequest.SetWordCountMax(null)
    latestHeadlinesRequest.SetPage(1)
    latestHeadlinesRequest.SetPageSize(100)
    latestHeadlinesRequest.SetClusteringEnabled(null)
    latestHeadlinesRequest.SetClusteringThreshold(null)
    latestHeadlinesRequest.SetClusteringVariable("null")
    latestHeadlinesRequest.SetIncludeNlpData(null)
    latestHeadlinesRequest.SetHasNlp(null)
    latestHeadlinesRequest.SetORGEntityName("null")
    latestHeadlinesRequest.SetPEREntityName("null")
    latestHeadlinesRequest.SetLOCEntityName("null")
    latestHeadlinesRequest.SetMISCEntityName("null")
    latestHeadlinesRequest.SetTitleSentimentMin(null)
    latestHeadlinesRequest.SetTitleSentimentMax(null)
    latestHeadlinesRequest.SetContentSentimentMin(null)
    latestHeadlinesRequest.SetContentSentimentMax(null)
    
    request := client.LatestHeadlinesApi.Post(
        latestHeadlinesRequest,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `LatestHeadlinesApi.Post``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `Post`: CSLHFResponse1
    fmt.Fprintf(os.Stdout, "Response from `LatestHeadlinesApi.Post`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `CSLHFResponse1.Post.Status`: %v\n", *resp.Status)
    fmt.Fprintf(os.Stdout, "Response from `CSLHFResponse1.Post.TotalHits`: %v\n", *resp.TotalHits)
    fmt.Fprintf(os.Stdout, "Response from `CSLHFResponse1.Post.Page`: %v\n", *resp.Page)
    fmt.Fprintf(os.Stdout, "Response from `CSLHFResponse1.Post.TotalPages`: %v\n", *resp.TotalPages)
    fmt.Fprintf(os.Stdout, "Response from `CSLHFResponse1.Post.PageSize`: %v\n", *resp.PageSize)
    fmt.Fprintf(os.Stdout, "Response from `CSLHFResponse1.Post.ClustersCount`: %v\n", *resp.ClustersCount)
    fmt.Fprintf(os.Stdout, "Response from `CSLHFResponse1.Post.Clusters`: %v\n", *resp.Clusters)
    fmt.Fprintf(os.Stdout, "Response from `CSLHFResponse1.Post.UserInput`: %v\n", resp.UserInput)
    fmt.Fprintf(os.Stdout, "Response from `CSLHFResponse1.Post.Articles`: %v\n", *resp.Articles)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

