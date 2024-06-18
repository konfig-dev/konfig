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
    newscatcherapi "github.com/konfig-dev/newscatcher-go-sdk/go"
)

func main() {
    configuration := newscatcherapi.NewConfiguration()
    configuration.SetApiKey("X_API_TOKEN")
    client := newscatcherapi.NewAPIClient(configuration)

    request := client.SearchApi.Get(
        "q_example",
    )
    request.SearchIn(""title_content"")
    request.PredefinedSources()
    request.Sources()
    request.NotSources()
    request.Lang()
    request.NotLang()
    request.Countries()
    request.NotCountries()
    request.NotAuthorName()
    request.From("from_example")
    request.To("to_example")
    request.PublishedDatePrecision("publishedDatePrecision_example")
    request.ByParseDate(false)
    request.SortBy(""relevancy"")
    request.RankedOnly("rankedOnly_example")
    request.FromRank(56)
    request.ToRank(56)
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
    request.SourceName()
    request.IabTags()
    request.NotIabTags()
    request.ExcludeDuplicates(true)
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SearchApi.Get``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `Get`: CSearchResponse
    fmt.Fprintf(os.Stdout, "Response from `SearchApi.Get`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `CSearchResponse.Get.Status`: %v\n", *resp.Status)
    fmt.Fprintf(os.Stdout, "Response from `CSearchResponse.Get.TotalHits`: %v\n", resp.TotalHits)
    fmt.Fprintf(os.Stdout, "Response from `CSearchResponse.Get.Page`: %v\n", resp.Page)
    fmt.Fprintf(os.Stdout, "Response from `CSearchResponse.Get.TotalPages`: %v\n", resp.TotalPages)
    fmt.Fprintf(os.Stdout, "Response from `CSearchResponse.Get.PageSize`: %v\n", resp.PageSize)
    fmt.Fprintf(os.Stdout, "Response from `CSearchResponse.Get.Articles`: %v\n", *resp.Articles)
    fmt.Fprintf(os.Stdout, "Response from `CSearchResponse.Get.UserInput`: %v\n", resp.UserInput)
    fmt.Fprintf(os.Stdout, "Response from `CSearchResponse.Get.ClustersCount`: %v\n", *resp.ClustersCount)
    fmt.Fprintf(os.Stdout, "Response from `CSearchResponse.Get.Clusters`: %v\n", *resp.Clusters)
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

    
    searchRequest := *newscatcherapi.NewSearchRequest(
        "null",
    )
    searchRequest.SetSearchIn("title_content")
    searchRequest.SetPredefinedSources(null)
    searchRequest.SetSources(null)
    searchRequest.SetNotSources(null)
    searchRequest.SetLang(null)
    searchRequest.SetNotLang(null)
    searchRequest.SetCountries(null)
    searchRequest.SetNotCountries(null)
    searchRequest.SetNotAuthorName(null)
    searchRequest.SetFrom("null")
    searchRequest.SetTo("null")
    searchRequest.SetPublishedDatePrecision("null")
    searchRequest.SetByParseDate(false)
    searchRequest.SetSortBy("relevancy")
    searchRequest.SetRankedOnly("null")
    searchRequest.SetFromRank(null)
    searchRequest.SetToRank(null)
    searchRequest.SetIsHeadline(null)
    searchRequest.SetIsOpinion(null)
    searchRequest.SetIsPaidContent(null)
    searchRequest.SetParentUrl(null)
    searchRequest.SetAllLinks(null)
    searchRequest.SetAllDomainLinks(null)
    searchRequest.SetWordCountMin(null)
    searchRequest.SetWordCountMax(null)
    searchRequest.SetPage(1)
    searchRequest.SetPageSize(100)
    searchRequest.SetClusteringVariable("null")
    searchRequest.SetClusteringEnabled(null)
    searchRequest.SetClusteringThreshold(null)
    searchRequest.SetIncludeNlpData(null)
    searchRequest.SetHasNlp(null)
    searchRequest.SetTheme("null")
    searchRequest.SetNotTheme("null")
    searchRequest.SetORGEntityName("null")
    searchRequest.SetPEREntityName("null")
    searchRequest.SetLOCEntityName("null")
    searchRequest.SetMISCEntityName("null")
    searchRequest.SetTitleSentimentMin(null)
    searchRequest.SetTitleSentimentMax(null)
    searchRequest.SetContentSentimentMin(null)
    searchRequest.SetContentSentimentMax(null)
    searchRequest.SetIptcTags(null)
    searchRequest.SetNotIptcTags(null)
    searchRequest.SetSourceName(null)
    searchRequest.SetIabTags(null)
    searchRequest.SetNotIabTags(null)
    searchRequest.SetExcludeDuplicates(null)
    
    request := client.SearchApi.Post(
        searchRequest,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SearchApi.Post``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `Post`: CSearchResponse1
    fmt.Fprintf(os.Stdout, "Response from `SearchApi.Post`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `CSearchResponse1.Post.Status`: %v\n", *resp.Status)
    fmt.Fprintf(os.Stdout, "Response from `CSearchResponse1.Post.TotalHits`: %v\n", resp.TotalHits)
    fmt.Fprintf(os.Stdout, "Response from `CSearchResponse1.Post.Page`: %v\n", resp.Page)
    fmt.Fprintf(os.Stdout, "Response from `CSearchResponse1.Post.TotalPages`: %v\n", resp.TotalPages)
    fmt.Fprintf(os.Stdout, "Response from `CSearchResponse1.Post.PageSize`: %v\n", resp.PageSize)
    fmt.Fprintf(os.Stdout, "Response from `CSearchResponse1.Post.Articles`: %v\n", *resp.Articles)
    fmt.Fprintf(os.Stdout, "Response from `CSearchResponse1.Post.UserInput`: %v\n", resp.UserInput)
    fmt.Fprintf(os.Stdout, "Response from `CSearchResponse1.Post.ClustersCount`: %v\n", *resp.ClustersCount)
    fmt.Fprintf(os.Stdout, "Response from `CSearchResponse1.Post.Clusters`: %v\n", *resp.Clusters)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

