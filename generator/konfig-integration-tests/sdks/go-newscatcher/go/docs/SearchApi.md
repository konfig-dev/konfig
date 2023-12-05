# APIClient.SearchApi

All URIs are relative to *https://v3-api.newscatcherapi.com*

Method | Path | Description
------------- | ------------- | -------------
[**Get**](SearchApi.md#Get) | **Get** /api/search | [Get] Search For Articles Request
[**Post**](SearchApi.md#Post) | **Post** /api/search | [Post] Search For Articles Request



## Get

[Get] Search For Articles Request



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

    request := client.SearchApi.Get(
        "q_example",
    )
    request.SearchIn(""title_content"")
    request.PredefinedSources("predefinedSources_example")
    request.Sources("sources_example")
    request.NotSources("notSources_example")
    request.Lang("lang_example")
    request.NotLang("notLang_example")
    request.Countries("countries_example")
    request.NotCountries("notCountries_example")
    request.From(from)
    request.To(to)
    request.PublishedDatePrecision("publishedDatePrecision_example")
    request.ByParseDate(false)
    request.SortBy(""relevancy"")
    request.RankedOnly("rankedOnly_example")
    request.FromRank(56)
    request.ToRank(56)
    request.IsHeadline(true)
    request.IsPaidContent(true)
    request.ParentUrl("parentUrl_example")
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
    request.Theme("theme_example")
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
        fmt.Fprintf(os.Stderr, "Error when calling `SearchApi.Get``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `Get`: SearchGetResponse
    fmt.Fprintf(os.Stdout, "Response from `SearchApi.Get`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `SearchGetResponse.Get.Status`: %v\n", *resp.Status)
    fmt.Fprintf(os.Stdout, "Response from `SearchGetResponse.Get.TotalHits`: %v\n", resp.TotalHits)
    fmt.Fprintf(os.Stdout, "Response from `SearchGetResponse.Get.Page`: %v\n", resp.Page)
    fmt.Fprintf(os.Stdout, "Response from `SearchGetResponse.Get.TotalPages`: %v\n", resp.TotalPages)
    fmt.Fprintf(os.Stdout, "Response from `SearchGetResponse.Get.PageSize`: %v\n", resp.PageSize)
    fmt.Fprintf(os.Stdout, "Response from `SearchGetResponse.Get.Articles`: %v\n", resp.Articles)
    fmt.Fprintf(os.Stdout, "Response from `SearchGetResponse.Get.UserInput`: %v\n", resp.UserInput)
    fmt.Fprintf(os.Stdout, "Response from `SearchGetResponse.Get.ClustersCount`: %v\n", resp.ClustersCount)
    fmt.Fprintf(os.Stdout, "Response from `SearchGetResponse.Get.Clusters`: %v\n", resp.Clusters)
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
    newscatcherapi "github.com/konfig-dev/newscatcher-go-sdk/tree/main"
)

func main() {
    configuration := newscatcherapi.NewConfiguration()
    configuration.SetApiKey("X_API_TOKEN")
    client := newscatcherapi.NewAPIClient(configuration)

    from := *newscatcherapi.NewFrom()
    to := *newscatcherapi.NewTo()
    
    searchRequest := *newscatcherapi.NewSearchRequest(
        "null",
    )
    searchRequest.SetSearchIn("title_content")
    searchRequest.SetPredefinedSources("null")
    searchRequest.SetSources("null")
    searchRequest.SetNotSources("null")
    searchRequest.SetLang("null")
    searchRequest.SetNotLang("null")
    searchRequest.SetCountries("null")
    searchRequest.SetNotCountries("null")
    searchRequest.SetFrom(from)
    searchRequest.SetTo(to)
    searchRequest.SetPublishedDatePrecision("null")
    searchRequest.SetByParseDate(false)
    searchRequest.SetSortBy("relevancy")
    searchRequest.SetRankedOnly("null")
    searchRequest.SetFromRank(null)
    searchRequest.SetToRank(null)
    searchRequest.SetIsHeadline(null)
    searchRequest.SetIsPaidContent(null)
    searchRequest.SetParentUrl("null")
    searchRequest.SetAllLinks("null")
    searchRequest.SetAllDomainLinks("null")
    searchRequest.SetWordCountMin(null)
    searchRequest.SetWordCountMax(null)
    searchRequest.SetPage(1)
    searchRequest.SetPageSize(100)
    searchRequest.SetClusteringEnabled(null)
    searchRequest.SetClusteringThreshold(null)
    searchRequest.SetClusteringVariable("null")
    searchRequest.SetIncludeNlpData(null)
    searchRequest.SetHasNlp(null)
    searchRequest.SetTheme("null")
    searchRequest.SetORGEntityName("null")
    searchRequest.SetPEREntityName("null")
    searchRequest.SetLOCEntityName("null")
    searchRequest.SetMISCEntityName("null")
    searchRequest.SetTitleSentimentMin(null)
    searchRequest.SetTitleSentimentMax(null)
    searchRequest.SetContentSentimentMin(null)
    searchRequest.SetContentSentimentMax(null)
    
    request := client.SearchApi.Post(
        searchRequest,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SearchApi.Post``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `Post`: SearchPostResponse
    fmt.Fprintf(os.Stdout, "Response from `SearchApi.Post`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `SearchPostResponse.Post.Status`: %v\n", *resp.Status)
    fmt.Fprintf(os.Stdout, "Response from `SearchPostResponse.Post.TotalHits`: %v\n", resp.TotalHits)
    fmt.Fprintf(os.Stdout, "Response from `SearchPostResponse.Post.Page`: %v\n", resp.Page)
    fmt.Fprintf(os.Stdout, "Response from `SearchPostResponse.Post.TotalPages`: %v\n", resp.TotalPages)
    fmt.Fprintf(os.Stdout, "Response from `SearchPostResponse.Post.PageSize`: %v\n", resp.PageSize)
    fmt.Fprintf(os.Stdout, "Response from `SearchPostResponse.Post.Articles`: %v\n", resp.Articles)
    fmt.Fprintf(os.Stdout, "Response from `SearchPostResponse.Post.UserInput`: %v\n", resp.UserInput)
    fmt.Fprintf(os.Stdout, "Response from `SearchPostResponse.Post.ClustersCount`: %v\n", resp.ClustersCount)
    fmt.Fprintf(os.Stdout, "Response from `SearchPostResponse.Post.Clusters`: %v\n", resp.Clusters)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

