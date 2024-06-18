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
    request.Lang()
    request.NotLang()
    request.Countries()
    request.NotCountries()
    request.Sources()
    request.PredefinedSources()
    request.NotSources()
    request.NotAuthorName()
    request.RankedOnly("rankedOnly_example")
    request.IsHeadline(true)
    request.IsOpinion(true)
    request.IsPaidContent(true)
    request.ParentUrl()
    request.AllLinks()
    request.AllDomainLinks()
    request.WordCountMin(56)
    request.WordCountMax(56)
    request.Page(1)
    request.PageSize(100)
    request.ClusteringVariable("clusteringVariable_example")
    request.ClusteringEnabled(true)
    request.ClusteringThreshold(8.14)
    request.IncludeNlpData(true)
    request.HasNlp(true)
    request.Theme("theme_example")
    request.NotTheme("notTheme_example")
    request.ORGEntityName("oRGEntityName_example")
    request.PEREntityName("pEREntityName_example")
    request.LOCEntityName("lOCEntityName_example")
    request.MISCEntityName("mISCEntityName_example")
    request.TitleSentimentMin(8.14)
    request.TitleSentimentMax(8.14)
    request.ContentSentimentMin(8.14)
    request.ContentSentimentMax(8.14)
    request.IptcTags()
    request.NotIptcTags()
    request.IabTags()
    request.NotIabTags()
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `LatestHeadlinesApi.Get``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `Get`: CSLHResponse
    fmt.Fprintf(os.Stdout, "Response from `LatestHeadlinesApi.Get`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `CSLHResponse.Get.Status`: %v\n", *resp.Status)
    fmt.Fprintf(os.Stdout, "Response from `CSLHResponse.Get.TotalHits`: %v\n", resp.TotalHits)
    fmt.Fprintf(os.Stdout, "Response from `CSLHResponse.Get.Page`: %v\n", resp.Page)
    fmt.Fprintf(os.Stdout, "Response from `CSLHResponse.Get.TotalPages`: %v\n", resp.TotalPages)
    fmt.Fprintf(os.Stdout, "Response from `CSLHResponse.Get.PageSize`: %v\n", resp.PageSize)
    fmt.Fprintf(os.Stdout, "Response from `CSLHResponse.Get.ClustersCount`: %v\n", *resp.ClustersCount)
    fmt.Fprintf(os.Stdout, "Response from `CSLHResponse.Get.Clusters`: %v\n", *resp.Clusters)
    fmt.Fprintf(os.Stdout, "Response from `CSLHResponse.Get.UserInput`: %v\n", resp.UserInput)
    fmt.Fprintf(os.Stdout, "Response from `CSLHResponse.Get.Articles`: %v\n", *resp.Articles)
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
    latestHeadlinesRequest.SetLang(null)
    latestHeadlinesRequest.SetNotLang(null)
    latestHeadlinesRequest.SetCountries(null)
    latestHeadlinesRequest.SetNotCountries(null)
    latestHeadlinesRequest.SetSources(null)
    latestHeadlinesRequest.SetPredefinedSources(null)
    latestHeadlinesRequest.SetNotSources(null)
    latestHeadlinesRequest.SetNotAuthorName(null)
    latestHeadlinesRequest.SetRankedOnly("null")
    latestHeadlinesRequest.SetIsHeadline(null)
    latestHeadlinesRequest.SetIsOpinion(null)
    latestHeadlinesRequest.SetIsPaidContent(null)
    latestHeadlinesRequest.SetParentUrl(null)
    latestHeadlinesRequest.SetAllLinks(null)
    latestHeadlinesRequest.SetAllDomainLinks(null)
    latestHeadlinesRequest.SetWordCountMin(null)
    latestHeadlinesRequest.SetWordCountMax(null)
    latestHeadlinesRequest.SetPage(1)
    latestHeadlinesRequest.SetPageSize(100)
    latestHeadlinesRequest.SetClusteringVariable("null")
    latestHeadlinesRequest.SetClusteringEnabled(null)
    latestHeadlinesRequest.SetClusteringThreshold(null)
    latestHeadlinesRequest.SetIncludeNlpData(null)
    latestHeadlinesRequest.SetHasNlp(null)
    latestHeadlinesRequest.SetTheme("null")
    latestHeadlinesRequest.SetNotTheme("null")
    latestHeadlinesRequest.SetORGEntityName("null")
    latestHeadlinesRequest.SetPEREntityName("null")
    latestHeadlinesRequest.SetLOCEntityName("null")
    latestHeadlinesRequest.SetMISCEntityName("null")
    latestHeadlinesRequest.SetTitleSentimentMin(null)
    latestHeadlinesRequest.SetTitleSentimentMax(null)
    latestHeadlinesRequest.SetContentSentimentMin(null)
    latestHeadlinesRequest.SetContentSentimentMax(null)
    latestHeadlinesRequest.SetIptcTags(null)
    latestHeadlinesRequest.SetNotIptcTags(null)
    latestHeadlinesRequest.SetIabTags(null)
    latestHeadlinesRequest.SetNotIabTags(null)
    
    request := client.LatestHeadlinesApi.Post(
        latestHeadlinesRequest,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `LatestHeadlinesApi.Post``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `Post`: CSLHResponse1
    fmt.Fprintf(os.Stdout, "Response from `LatestHeadlinesApi.Post`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `CSLHResponse1.Post.Status`: %v\n", *resp.Status)
    fmt.Fprintf(os.Stdout, "Response from `CSLHResponse1.Post.TotalHits`: %v\n", resp.TotalHits)
    fmt.Fprintf(os.Stdout, "Response from `CSLHResponse1.Post.Page`: %v\n", resp.Page)
    fmt.Fprintf(os.Stdout, "Response from `CSLHResponse1.Post.TotalPages`: %v\n", resp.TotalPages)
    fmt.Fprintf(os.Stdout, "Response from `CSLHResponse1.Post.PageSize`: %v\n", resp.PageSize)
    fmt.Fprintf(os.Stdout, "Response from `CSLHResponse1.Post.ClustersCount`: %v\n", *resp.ClustersCount)
    fmt.Fprintf(os.Stdout, "Response from `CSLHResponse1.Post.Clusters`: %v\n", *resp.Clusters)
    fmt.Fprintf(os.Stdout, "Response from `CSLHResponse1.Post.UserInput`: %v\n", resp.UserInput)
    fmt.Fprintf(os.Stdout, "Response from `CSLHResponse1.Post.Articles`: %v\n", *resp.Articles)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

