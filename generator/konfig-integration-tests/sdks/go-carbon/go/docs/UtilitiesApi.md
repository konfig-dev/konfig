# APIClient.UtilitiesApi

All URIs are relative to *https://api.carbon.ai*

Method | Path | Description
------------- | ------------- | -------------
[**FetchUrls**](UtilitiesApi.md#FetchUrls) | **Get** /fetch_urls | Fetch Urls
[**FetchYoutubeTranscripts**](UtilitiesApi.md#FetchYoutubeTranscripts) | **Get** /fetch_youtube_transcript | Fetch Youtube Transcripts
[**ProcessSitemap**](UtilitiesApi.md#ProcessSitemap) | **Get** /process_sitemap | Sitemap
[**ScrapeSitemap**](UtilitiesApi.md#ScrapeSitemap) | **Post** /scrape_sitemap | Scrape Sitemap
[**ScrapeWeb**](UtilitiesApi.md#ScrapeWeb) | **Post** /web_scrape | Web Scrape
[**SearchUrls**](UtilitiesApi.md#SearchUrls) | **Get** /search_urls | Search Urls



## FetchUrls

Fetch Urls



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
    configuration.SetApiKey("AUTHORIZATION")
    configuration.SetCustomerId("CUSTOMER_ID")
    client := carbon.NewAPIClient(configuration)

    request := client.UtilitiesApi.FetchUrls(
        "url_example",
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `UtilitiesApi.FetchUrls``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `FetchUrls`: FetchURLsResponse
    fmt.Fprintf(os.Stdout, "Response from `UtilitiesApi.FetchUrls`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `FetchURLsResponse.FetchUrls.Urls`: %v\n", resp.Urls)
    fmt.Fprintf(os.Stdout, "Response from `FetchURLsResponse.FetchUrls.HtmlContent`: %v\n", resp.HtmlContent)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## FetchYoutubeTranscripts

Fetch Youtube Transcripts



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
    configuration.SetApiKey("AUTHORIZATION")
    configuration.SetCustomerId("CUSTOMER_ID")
    client := carbon.NewAPIClient(configuration)

    request := client.UtilitiesApi.FetchYoutubeTranscripts(
        "id_example",
    )
    request.Raw(false)
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `UtilitiesApi.FetchYoutubeTranscripts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `FetchYoutubeTranscripts`: YoutubeTranscriptResponse
    fmt.Fprintf(os.Stdout, "Response from `UtilitiesApi.FetchYoutubeTranscripts`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `YoutubeTranscriptResponse.FetchYoutubeTranscripts.Status`: %v\n", resp.Status)
    fmt.Fprintf(os.Stdout, "Response from `YoutubeTranscriptResponse.FetchYoutubeTranscripts.Error`: %v\n", resp.Error)
    fmt.Fprintf(os.Stdout, "Response from `YoutubeTranscriptResponse.FetchYoutubeTranscripts.Data`: %v\n", resp.Data)
    fmt.Fprintf(os.Stdout, "Response from `YoutubeTranscriptResponse.FetchYoutubeTranscripts.RawTranscript`: %v\n", resp.RawTranscript)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ProcessSitemap

Sitemap



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
    configuration.SetApiKey("AUTHORIZATION")
    configuration.SetCustomerId("CUSTOMER_ID")
    client := carbon.NewAPIClient(configuration)

    request := client.UtilitiesApi.ProcessSitemap(
        "url_example",
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `UtilitiesApi.ProcessSitemap``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `ProcessSitemap`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `UtilitiesApi.ProcessSitemap`: %v\n", resp)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ScrapeSitemap

Scrape Sitemap



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
    configuration.SetApiKey("AUTHORIZATION")
    configuration.SetCustomerId("CUSTOMER_ID")
    client := carbon.NewAPIClient(configuration)

    
    sitemapScrapeRequest := *carbon.NewSitemapScrapeRequest(
        "null",
    )
    sitemapScrapeRequest.SetTags({})
    sitemapScrapeRequest.SetMaxPagesToScrape(null)
    sitemapScrapeRequest.SetChunkSize(1500)
    sitemapScrapeRequest.SetChunkOverlap(20)
    sitemapScrapeRequest.SetSkipEmbeddingGeneration(false)
    sitemapScrapeRequest.SetEnableAutoSync(false)
    sitemapScrapeRequest.SetGenerateSparseVectors(false)
    sitemapScrapeRequest.SetPrependFilenameToChunks(false)
    sitemapScrapeRequest.SetHtmlTagsToSkip([])
    sitemapScrapeRequest.SetCssClassesToSkip([])
    sitemapScrapeRequest.SetCssSelectorsToSkip([])
    sitemapScrapeRequest.SetEmbeddingModel(null)
    
    request := client.UtilitiesApi.ScrapeSitemap(
        sitemapScrapeRequest,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `UtilitiesApi.ScrapeSitemap``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `ScrapeSitemap`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `UtilitiesApi.ScrapeSitemap`: %v\n", resp)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ScrapeWeb

Web Scrape



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
    configuration.SetApiKey("AUTHORIZATION")
    configuration.SetCustomerId("CUSTOMER_ID")
    client := carbon.NewAPIClient(configuration)

    
    webscrapeRequest := *carbon.New[]WebscrapeRequest()
    
    request := client.UtilitiesApi.ScrapeWeb(
        ,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `UtilitiesApi.ScrapeWeb``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `ScrapeWeb`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `UtilitiesApi.ScrapeWeb`: %v\n", resp)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SearchUrls

Search Urls



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
    configuration.SetApiKey("AUTHORIZATION")
    configuration.SetCustomerId("CUSTOMER_ID")
    client := carbon.NewAPIClient(configuration)

    request := client.UtilitiesApi.SearchUrls(
        "query_example",
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `UtilitiesApi.SearchUrls``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `SearchUrls`: FetchURLsResponse
    fmt.Fprintf(os.Stdout, "Response from `UtilitiesApi.SearchUrls`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `FetchURLsResponse.SearchUrls.Urls`: %v\n", resp.Urls)
    fmt.Fprintf(os.Stdout, "Response from `FetchURLsResponse.SearchUrls.HtmlContent`: %v\n", resp.HtmlContent)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

