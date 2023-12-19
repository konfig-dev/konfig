# APIClient.AuthorsApi

All URIs are relative to *https://v3-api.newscatcherapi.com*

Method | Path | Description
------------- | ------------- | -------------
[**Get**](AuthorsApi.md#Get) | **Get** /api/authors | [Get] Search By Author Request
[**Post**](AuthorsApi.md#Post) | **Post** /api/authors | [Post] Search By Author Request



## Get

[Get] Search By Author Request



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

    request := client.AuthorsApi.Get(
        "authorName_example",
    )
    request.Sources("sources_example")
    request.PredefinedSources("predefinedSources_example")
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
        fmt.Fprintf(os.Stderr, "Error when calling `AuthorsApi.Get``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `Get`: AuthorsGetResponse
    fmt.Fprintf(os.Stdout, "Response from `AuthorsApi.Get`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `AuthorsGetResponse.Get.Status`: %v\n", *resp.Status)
    fmt.Fprintf(os.Stdout, "Response from `AuthorsGetResponse.Get.TotalHits`: %v\n", resp.TotalHits)
    fmt.Fprintf(os.Stdout, "Response from `AuthorsGetResponse.Get.Page`: %v\n", resp.Page)
    fmt.Fprintf(os.Stdout, "Response from `AuthorsGetResponse.Get.TotalPages`: %v\n", resp.TotalPages)
    fmt.Fprintf(os.Stdout, "Response from `AuthorsGetResponse.Get.PageSize`: %v\n", resp.PageSize)
    fmt.Fprintf(os.Stdout, "Response from `AuthorsGetResponse.Get.Articles`: %v\n", resp.Articles)
    fmt.Fprintf(os.Stdout, "Response from `AuthorsGetResponse.Get.UserInput`: %v\n", resp.UserInput)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Post

[Post] Search By Author Request



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

    from := *newscatcherapi.NewFrom()
    to := *newscatcherapi.NewTo()
    
    authorSearchRequest := *newscatcherapi.NewAuthorSearchRequest(
        "null",
    )
    authorSearchRequest.SetSources("null")
    authorSearchRequest.SetPredefinedSources("null")
    authorSearchRequest.SetNotSources("null")
    authorSearchRequest.SetLang("null")
    authorSearchRequest.SetNotLang("null")
    authorSearchRequest.SetCountries("null")
    authorSearchRequest.SetNotCountries("null")
    authorSearchRequest.SetFrom(from)
    authorSearchRequest.SetTo(to)
    authorSearchRequest.SetPublishedDatePrecision("null")
    authorSearchRequest.SetByParseDate(false)
    authorSearchRequest.SetSortBy("relevancy")
    authorSearchRequest.SetRankedOnly("null")
    authorSearchRequest.SetFromRank(null)
    authorSearchRequest.SetToRank(null)
    authorSearchRequest.SetIsHeadline(null)
    authorSearchRequest.SetIsPaidContent(null)
    authorSearchRequest.SetParentUrl("null")
    authorSearchRequest.SetAllLinks("null")
    authorSearchRequest.SetAllDomainLinks("null")
    authorSearchRequest.SetWordCountMin(null)
    authorSearchRequest.SetWordCountMax(null)
    authorSearchRequest.SetPage(1)
    authorSearchRequest.SetPageSize(100)
    authorSearchRequest.SetIncludeNlpData(null)
    authorSearchRequest.SetHasNlp(null)
    authorSearchRequest.SetTheme("null")
    authorSearchRequest.SetNerName("null")
    authorSearchRequest.SetTitleSentimentMin(null)
    authorSearchRequest.SetTitleSentimentMax(null)
    authorSearchRequest.SetContentSentimentMin(null)
    authorSearchRequest.SetContentSentimentMax(null)
    
    request := client.AuthorsApi.Post(
        authorSearchRequest,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AuthorsApi.Post``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `Post`: AuthorsPostResponse
    fmt.Fprintf(os.Stdout, "Response from `AuthorsApi.Post`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `AuthorsPostResponse.Post.Status`: %v\n", *resp.Status)
    fmt.Fprintf(os.Stdout, "Response from `AuthorsPostResponse.Post.TotalHits`: %v\n", resp.TotalHits)
    fmt.Fprintf(os.Stdout, "Response from `AuthorsPostResponse.Post.Page`: %v\n", resp.Page)
    fmt.Fprintf(os.Stdout, "Response from `AuthorsPostResponse.Post.TotalPages`: %v\n", resp.TotalPages)
    fmt.Fprintf(os.Stdout, "Response from `AuthorsPostResponse.Post.PageSize`: %v\n", resp.PageSize)
    fmt.Fprintf(os.Stdout, "Response from `AuthorsPostResponse.Post.Articles`: %v\n", resp.Articles)
    fmt.Fprintf(os.Stdout, "Response from `AuthorsPostResponse.Post.UserInput`: %v\n", resp.UserInput)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

