# Newscatcherapi.Net - C#

[![NuGet](https://img.shields.io/badge/NuGet-6.0.0-blue.svg)](https://www.nuget.org/packages/Newscatcherapi.Net/6.0.0)

<img src='https://uploads-ssl.webflow.com/6429857b17973b636c2195c5/646c6f1eb774ff2f2997bec5_newscatcher_.svg' width='286' height='35' /> <br>  <br>Visit our website  <a href='https://newscatcherapi.com'>https://newscatcherapi.com</a>

## Frameworks supported
- .NET Core >=1.0
- .NET Framework >=4.6
- Mono/Xamarin >=vNext

## Installation

Using the [.NET Core command-line interface (CLI) tools][dotnet-core-cli-tools]:

```sh
dotnet add package Newscatcherapi.Net
```

Using the [NuGet Command Line Interface (CLI)][nuget-cli]:

```sh
nuget install Newscatcherapi.Net
```

Using the [Package Manager Console][package-manager-console]:

```powershell
Install-Package Newscatcherapi.Net
```

From within Visual Studio:

1. Open the Solution Explorer.
2. Right-click on a project within your solution.
3. Click on *Manage NuGet Packages...*
4. Click on the *Browse* tab and search for "Newscatcherapi.Net".
5. Click on the "Newscatcherapi.Net" package, select the appropriate version in the
   right-tab and click *Install*.

## Getting Started

```csharp
using System;
using System.Collections.Generic;
using System.Diagnostics;
using Newscatcherapi.Net.Client;
using Newscatcherapi.Net.Model;

namespace Example
{
    public class GetExample
    {
        public static void Main()
        {
            NewscatcherClient client = new NewscatcherClient();
            // Configure API key authorization: apiKey
            client.SetApiKey("YOUR_API_KEY");

            var authorName = "authorName_example";
            var sources = "sources_example";
            var predefinedSources = "predefinedSources_example";
            var notSources = "notSources_example";
            var lang = "lang_example";
            var notLang = "notLang_example";
            var countries = "countries_example";
            var notCountries = "notCountries_example";
            var from = new From(DateTime.Now);
            var to = new To(DateTime.Now);
            var publishedDatePrecision = "publishedDatePrecision_example";
            var byParseDate = false;
            var sortBy = "relevancy";
            var rankedOnly = "rankedOnly_example";
            var fromRank = 56;
            var toRank = 56;
            var isHeadline = true;
            var isPaidContent = true;
            var parentUrl = "parentUrl_example";
            var allLinks = "allLinks_example";
            var allDomainLinks = "allDomainLinks_example";
            var wordCountMin = 56;
            var wordCountMax = 56;
            var page = 1;
            var pageSize = 100;
            var includeNlpData = true;
            var hasNlp = true;
            var theme = "theme_example";
            var nerName = "nerName_example";
            var titleSentimentMin = 8.14D;
            var titleSentimentMax = 8.14D;
            var contentSentimentMin = 8.14D;
            var contentSentimentMax = 8.14D;
            
            try
            {
                // [Get] Search By Author Request
                AuthorsGetResponse result = client.Authors.Get(authorName, sources, predefinedSources, notSources, lang, notLang, countries, notCountries, from, to, publishedDatePrecision, byParseDate, sortBy, rankedOnly, fromRank, toRank, isHeadline, isPaidContent, parentUrl, allLinks, allDomainLinks, wordCountMin, wordCountMax, page, pageSize, includeNlpData, hasNlp, theme, nerName, titleSentimentMin, titleSentimentMax, contentSentimentMin, contentSentimentMax);
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling AuthorsApi.Get: " + e.Message);
                Console.WriteLine("Status Code: "+ e.ErrorCode);
                Console.WriteLine(e.StackTrace);
            }
            catch (ClientException e)
            {
                Console.WriteLine(e.Response.StatusCode);
                Console.WriteLine(e.Response.RawContent);
                Console.WriteLine(e.InnerException);
            }
        }
    }
}
```

## Documentation for API Endpoints

All URIs are relative to *https://v3-api.newscatcherapi.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AuthorsApi* | [**Get**](docs/AuthorsApi.md#get) | **GET** /api/authors | [Get] Search By Author Request
*AuthorsApi* | [**Post**](docs/AuthorsApi.md#post) | **POST** /api/authors | [Post] Search By Author Request
*LatestHeadlinesApi* | [**Get**](docs/LatestHeadlinesApi.md#get) | **GET** /api/latest_headlines | [Get] Search For Latest Headlines Request
*LatestHeadlinesApi* | [**Post**](docs/LatestHeadlinesApi.md#post) | **POST** /api/latest_headlines | [Post] Search For Latest Headlines Request
*SearchApi* | [**Get**](docs/SearchApi.md#get) | **GET** /api/search | [Get] Search For Articles Request
*SearchApi* | [**Post**](docs/SearchApi.md#post) | **POST** /api/search | [Post] Search For Articles Request
*SearchSimilarApi* | [**Get**](docs/SearchSimilarApi.md#get) | **GET** /api/search_similar | [Get] Search For Similar Articles Request
*SearchSimilarApi* | [**Post**](docs/SearchSimilarApi.md#post) | **POST** /api/search_similar | [Post] Search For Similar Articles Request
*SourcesApi* | [**Get**](docs/SourcesApi.md#get) | **GET** /api/sources | [Get] Search For Sources Request
*SourcesApi* | [**Post**](docs/SourcesApi.md#post) | **POST** /api/sources | [Post] Search For Sources Request
*SubscriptionApi* | [**Get**](docs/SubscriptionApi.md#get) | **GET** /api/subscription | [Get] Get My Plan Info
*SubscriptionApi* | [**Post**](docs/SubscriptionApi.md#post) | **POST** /api/subscription | [Post] Get My Plan Info


## Documentation for Models

 - [AllDomainLinksProperty](docs/AllDomainLinksProperty.md)
 - [AllLinksProperty](docs/AllLinksProperty.md)
 - [AuthorSearchRequest](docs/AuthorSearchRequest.md)
 - [AuthorsGetResponse](docs/AuthorsGetResponse.md)
 - [AuthorsPostResponse](docs/AuthorsPostResponse.md)
 - [AuthorsProperty](docs/AuthorsProperty.md)
 - [Cluster](docs/Cluster.md)
 - [ClusteringSearchResponse](docs/ClusteringSearchResponse.md)
 - [CountriesProperty](docs/CountriesProperty.md)
 - [DtoResponsesAuthorSearchResponseArticleResult](docs/DtoResponsesAuthorSearchResponseArticleResult.md)
 - [DtoResponsesAuthorSearchResponseFailedSearchResponse](docs/DtoResponsesAuthorSearchResponseFailedSearchResponse.md)
 - [DtoResponsesAuthorSearchResponseSearchResponse](docs/DtoResponsesAuthorSearchResponseSearchResponse.md)
 - [DtoResponsesLatestHeadlinesResponseArticleResult](docs/DtoResponsesLatestHeadlinesResponseArticleResult.md)
 - [DtoResponsesMoreLikeThisResponseArticleResult](docs/DtoResponsesMoreLikeThisResponseArticleResult.md)
 - [DtoResponsesMoreLikeThisResponseFailedSearchResponse](docs/DtoResponsesMoreLikeThisResponseFailedSearchResponse.md)
 - [DtoResponsesMoreLikeThisResponseSearchResponse](docs/DtoResponsesMoreLikeThisResponseSearchResponse.md)
 - [DtoResponsesSearchResponseArticleResult](docs/DtoResponsesSearchResponseArticleResult.md)
 - [DtoResponsesSearchResponseFailedSearchResponse](docs/DtoResponsesSearchResponseFailedSearchResponse.md)
 - [DtoResponsesSearchResponseSearchResponse](docs/DtoResponsesSearchResponseSearchResponse.md)
 - [FailedLatestHeadlinesResponse](docs/FailedLatestHeadlinesResponse.md)
 - [From](docs/From.md)
 - [HTTPValidationError](docs/HTTPValidationError.md)
 - [JournalistsProperty](docs/JournalistsProperty.md)
 - [LangProperty](docs/LangProperty.md)
 - [LatestHeadlinesGetResponse](docs/LatestHeadlinesGetResponse.md)
 - [LatestHeadlinesPostResponse](docs/LatestHeadlinesPostResponse.md)
 - [LatestHeadlinesRequest](docs/LatestHeadlinesRequest.md)
 - [LatestHeadlinesResponse](docs/LatestHeadlinesResponse.md)
 - [LocationPropertyInner](docs/LocationPropertyInner.md)
 - [MoreLikeThisRequest](docs/MoreLikeThisRequest.md)
 - [SearchGetResponse](docs/SearchGetResponse.md)
 - [SearchPostResponse](docs/SearchPostResponse.md)
 - [SearchRequest](docs/SearchRequest.md)
 - [SearchSimilarGetResponse](docs/SearchSimilarGetResponse.md)
 - [SearchSimilarPostResponse](docs/SearchSimilarPostResponse.md)
 - [SimilarDocument](docs/SimilarDocument.md)
 - [SourceResponse](docs/SourceResponse.md)
 - [SourcesRequest](docs/SourcesRequest.md)
 - [SubscriptionResponse](docs/SubscriptionResponse.md)
 - [To](docs/To.md)
 - [UserInput](docs/UserInput.md)
 - [ValidationError](docs/ValidationError.md)


## Dependencies

- [RestSharp](https://www.nuget.org/packages/RestSharp) - 106.13.0 or later
- [Json.NET](https://www.nuget.org/packages/Newtonsoft.Json/) - 13.0.1 or later
- [JsonSubTypes](https://www.nuget.org/packages/JsonSubTypes/) - 1.8.0 or later
- [System.ComponentModel.Annotations](https://www.nuget.org/packages/System.ComponentModel.Annotations) - 5.0.0 or later

## Author
This C# package is automatically generated by [Konfig](https://konfigthis.com)

[dotnet-core-cli-tools]: https://docs.microsoft.com/en-us/dotnet/core/tools/
[nuget-cli]: https://docs.microsoft.com/en-us/nuget/tools/nuget-exe-cli-reference
[package-manager-console]: https://docs.microsoft.com/en-us/nuget/tools/package-manager-console
