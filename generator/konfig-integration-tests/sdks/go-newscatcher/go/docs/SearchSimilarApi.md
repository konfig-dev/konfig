# APIClient.SearchSimilarApi

All URIs are relative to *https://v3-api.newscatcherapi.com*

Method | Path | Description
------------- | ------------- | -------------
[**Get**](SearchSimilarApi.md#Get) | **Get** /api/search_similar | [Get] Search For Similar Articles Request
[**Post**](SearchSimilarApi.md#Post) | **Post** /api/search_similar | [Post] Search For Similar Articles Request



## Get

[Get] Search For Similar Articles Request



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

    request := client.SearchSimilarApi.Get(
        "q_example",
    )
    request.SearchIn(""title_content"")
    request.IncludeSimilarDocuments(false)
    request.SimilarDocumentsNumber(5)
    request.SimilarDocumentsFields(""title,content"")
    request.PredefinedSources("predefinedSources_example")
    request.Sources("sources_example")
    request.NotSources("notSources_example")
    request.Lang("lang_example")
    request.NotLang("notLang_example")
    request.Countries("countries_example")
    request.NotCountries("notCountries_example")
    request.From("from_example")
    request.To("to_example")
    request.ByParseDate(false)
    request.PublishedDatePrecision("publishedDatePrecision_example")
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
    request.IncludeNlpData(true)
    request.HasNlp(true)
    request.Theme("theme_example")
    request.NerName("nerName_example")
    request.TitleSentimentMin(8.14)
    request.TitleSentimentMax(8.14)
    request.ContentSentimentMin(8.14)
    request.ContentSentimentMax(8.14)
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SearchSimilarApi.Get``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `Get`: FSearchResponse2
    fmt.Fprintf(os.Stdout, "Response from `SearchSimilarApi.Get`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `FSearchResponse2.Get.Status`: %v\n", *resp.Status)
    fmt.Fprintf(os.Stdout, "Response from `FSearchResponse2.Get.TotalHits`: %v\n", *resp.TotalHits)
    fmt.Fprintf(os.Stdout, "Response from `FSearchResponse2.Get.Page`: %v\n", *resp.Page)
    fmt.Fprintf(os.Stdout, "Response from `FSearchResponse2.Get.TotalPages`: %v\n", *resp.TotalPages)
    fmt.Fprintf(os.Stdout, "Response from `FSearchResponse2.Get.PageSize`: %v\n", *resp.PageSize)
    fmt.Fprintf(os.Stdout, "Response from `FSearchResponse2.Get.Articles`: %v\n", *resp.Articles)
    fmt.Fprintf(os.Stdout, "Response from `FSearchResponse2.Get.UserInput`: %v\n", resp.UserInput)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Post

[Post] Search For Similar Articles Request



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

    
    moreLikeThisRequest := *newscatcherapi.NewMoreLikeThisRequest(
        "null",
    )
    moreLikeThisRequest.SetSearchIn("title_content")
    moreLikeThisRequest.SetIncludeSimilarDocuments(false)
    moreLikeThisRequest.SetSimilarDocumentsNumber(5)
    moreLikeThisRequest.SetSimilarDocumentsFields("title,content")
    moreLikeThisRequest.SetPredefinedSources("null")
    moreLikeThisRequest.SetSources("null")
    moreLikeThisRequest.SetNotSources("null")
    moreLikeThisRequest.SetLang("null")
    moreLikeThisRequest.SetNotLang("null")
    moreLikeThisRequest.SetCountries("null")
    moreLikeThisRequest.SetNotCountries("null")
    moreLikeThisRequest.SetFrom("null")
    moreLikeThisRequest.SetTo("null")
    moreLikeThisRequest.SetByParseDate(false)
    moreLikeThisRequest.SetPublishedDatePrecision("null")
    moreLikeThisRequest.SetSortBy("relevancy")
    moreLikeThisRequest.SetRankedOnly("null")
    moreLikeThisRequest.SetFromRank(null)
    moreLikeThisRequest.SetToRank(null)
    moreLikeThisRequest.SetIsHeadline(null)
    moreLikeThisRequest.SetIsPaidContent(null)
    moreLikeThisRequest.SetParentUrl("null")
    moreLikeThisRequest.SetAllLinks("null")
    moreLikeThisRequest.SetAllDomainLinks("null")
    moreLikeThisRequest.SetWordCountMin(null)
    moreLikeThisRequest.SetWordCountMax(null)
    moreLikeThisRequest.SetPage(1)
    moreLikeThisRequest.SetPageSize(100)
    moreLikeThisRequest.SetIncludeNlpData(null)
    moreLikeThisRequest.SetHasNlp(null)
    moreLikeThisRequest.SetTheme("null")
    moreLikeThisRequest.SetNerName("null")
    moreLikeThisRequest.SetTitleSentimentMin(null)
    moreLikeThisRequest.SetTitleSentimentMax(null)
    moreLikeThisRequest.SetContentSentimentMin(null)
    moreLikeThisRequest.SetContentSentimentMax(null)
    
    request := client.SearchSimilarApi.Post(
        moreLikeThisRequest,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `SearchSimilarApi.Post``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `Post`: FSearchResponse3
    fmt.Fprintf(os.Stdout, "Response from `SearchSimilarApi.Post`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `FSearchResponse3.Post.Status`: %v\n", *resp.Status)
    fmt.Fprintf(os.Stdout, "Response from `FSearchResponse3.Post.TotalHits`: %v\n", *resp.TotalHits)
    fmt.Fprintf(os.Stdout, "Response from `FSearchResponse3.Post.Page`: %v\n", *resp.Page)
    fmt.Fprintf(os.Stdout, "Response from `FSearchResponse3.Post.TotalPages`: %v\n", *resp.TotalPages)
    fmt.Fprintf(os.Stdout, "Response from `FSearchResponse3.Post.PageSize`: %v\n", *resp.PageSize)
    fmt.Fprintf(os.Stdout, "Response from `FSearchResponse3.Post.Articles`: %v\n", *resp.Articles)
    fmt.Fprintf(os.Stdout, "Response from `FSearchResponse3.Post.UserInput`: %v\n", resp.UserInput)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

