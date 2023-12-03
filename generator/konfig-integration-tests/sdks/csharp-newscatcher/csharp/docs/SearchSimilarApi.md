# Newscatcherapi.Net.Api.SearchSimilarApi

All URIs are relative to *https://v3-api.newscatcherapi.com*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**Get**](SearchSimilarApi.md#get) | **GET** /api/search_similar | [Get] Search For Similar Articles Request |
| [**Post**](SearchSimilarApi.md#post) | **POST** /api/search_similar | [Post] Search For Similar Articles Request |


# **Get**



This endpoint returns a list of articles that are similar to the query provided. You also have the option to get similar articles for the results of a search.

### Example
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

            var q = "q_example";
            var searchIn = "title_content";
            var includeSimilarDocuments = false;
            var similarDocumentsNumber = 5;
            var similarDocumentsFields = "title,content";
            var predefinedSources = "predefinedSources_example";
            var sources = "sources_example";
            var notSources = "notSources_example";
            var lang = "lang_example";
            var notLang = "notLang_example";
            var countries = "countries_example";
            var notCountries = "notCountries_example";
            var from = new From(DateTime.Now);
            var to = new To(DateTime.Now);
            var byParseDate = false;
            var publishedDatePrecision = "publishedDatePrecision_example";
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
                // [Get] Search For Similar Articles Request
                SearchSimilarGetResponse result = client.SearchSimilar.Get(q, searchIn, includeSimilarDocuments, similarDocumentsNumber, similarDocumentsFields, predefinedSources, sources, notSources, lang, notLang, countries, notCountries, from, to, byParseDate, publishedDatePrecision, sortBy, rankedOnly, fromRank, toRank, isHeadline, isPaidContent, parentUrl, allLinks, allDomainLinks, wordCountMin, wordCountMax, page, pageSize, includeNlpData, hasNlp, theme, nerName, titleSentimentMin, titleSentimentMax, contentSentimentMin, contentSentimentMax);
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling SearchSimilarApi.Get: " + e.Message);
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

#### Using the GetWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // [Get] Search For Similar Articles Request
    ApiResponse<SearchSimilarGetResponse> response = apiInstance.GetWithHttpInfo(q, searchIn, includeSimilarDocuments, similarDocumentsNumber, similarDocumentsFields, predefinedSources, sources, notSources, lang, notLang, countries, notCountries, from, to, byParseDate, publishedDatePrecision, sortBy, rankedOnly, fromRank, toRank, isHeadline, isPaidContent, parentUrl, allLinks, allDomainLinks, wordCountMin, wordCountMax, page, pageSize, includeNlpData, hasNlp, theme, nerName, titleSentimentMin, titleSentimentMax, contentSentimentMin, contentSentimentMax);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SearchSimilarApi.GetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **q** | **string** |  |  |
| **searchIn** | **string** |  | [optional] [default to &quot;title_content&quot;] |
| **includeSimilarDocuments** | **bool?** |  | [optional] [default to false] |
| **similarDocumentsNumber** | **int?** |  | [optional] [default to 5] |
| **similarDocumentsFields** | **string** |  | [optional] [default to &quot;title,content&quot;] |
| **predefinedSources** | **string** |  | [optional]  |
| **sources** | **string** |  | [optional]  |
| **notSources** | **string** |  | [optional]  |
| **lang** | **string** |  | [optional]  |
| **notLang** | **string** |  | [optional]  |
| **countries** | **string** |  | [optional]  |
| **notCountries** | **string** |  | [optional]  |
| **from** | [**From**](From.md) |  | [optional]  |
| **to** | [**To**](To.md) |  | [optional]  |
| **byParseDate** | **bool?** |  | [optional] [default to false] |
| **publishedDatePrecision** | **string** |  | [optional]  |
| **sortBy** | **string** |  | [optional] [default to &quot;relevancy&quot;] |
| **rankedOnly** | **string** |  | [optional]  |
| **fromRank** | **int?** |  | [optional]  |
| **toRank** | **int?** |  | [optional]  |
| **isHeadline** | **bool?** |  | [optional]  |
| **isPaidContent** | **bool?** |  | [optional]  |
| **parentUrl** | **string** |  | [optional]  |
| **allLinks** | **string** |  | [optional]  |
| **allDomainLinks** | **string** |  | [optional]  |
| **wordCountMin** | **int?** |  | [optional]  |
| **wordCountMax** | **int?** |  | [optional]  |
| **page** | **int?** |  | [optional] [default to 1] |
| **pageSize** | **int?** |  | [optional] [default to 100] |
| **includeNlpData** | **bool?** |  | [optional]  |
| **hasNlp** | **bool?** |  | [optional]  |
| **theme** | **string** |  | [optional]  |
| **nerName** | **string** |  | [optional]  |
| **titleSentimentMin** | **double?** |  | [optional]  |
| **titleSentimentMax** | **double?** |  | [optional]  |
| **contentSentimentMin** | **double?** |  | [optional]  |
| **contentSentimentMax** | **double?** |  | [optional]  |

### Return type

[**SearchSimilarGetResponse**](SearchSimilarGetResponse.md)


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# **Post**



This endpoint returns a list of articles that are similar to the query provided. You also have the option to get similar articles for the results of a search.

### Example
```csharp
using System;
using System.Collections.Generic;
using System.Diagnostics;
using Newscatcherapi.Net.Client;
using Newscatcherapi.Net.Model;

namespace Example
{
    public class PostExample
    {
        public static void Main()
        {
            NewscatcherClient client = new NewscatcherClient();
            // Configure API key authorization: apiKey
            client.SetApiKey("YOUR_API_KEY");

            var q = "q_example";
            var searchIn = "title_content";
            var includeSimilarDocuments = false;
            var similarDocumentsNumber = 5;
            var similarDocumentsFields = "title,content";
            var predefinedSources = "predefinedSources_example";
            var sources = "sources_example";
            var notSources = "notSources_example";
            var lang = "lang_example";
            var notLang = "notLang_example";
            var countries = "countries_example";
            var notCountries = "notCountries_example";
            var from = new From(DateTime.Now);
            var to = new To(DateTime.Now);
            var byParseDate = false;
            var publishedDatePrecision = "publishedDatePrecision_example";
            var sortBy = "relevancy";
            var rankedOnly = "rankedOnly_example";
            var fromRank = default(int);
            var toRank = default(int);
            var isHeadline = false;
            var isPaidContent = false;
            var parentUrl = "parentUrl_example";
            var allLinks = "allLinks_example";
            var allDomainLinks = "allDomainLinks_example";
            var wordCountMin = default(int);
            var wordCountMax = default(int);
            var page = 1;
            var pageSize = 100;
            var includeNlpData = false;
            var hasNlp = false;
            var theme = "theme_example";
            var nerName = "nerName_example";
            var titleSentimentMin = default(double);
            var titleSentimentMax = default(double);
            var contentSentimentMin = default(double);
            var contentSentimentMax = default(double);
            
            var moreLikeThisRequest = new MoreLikeThisRequest(
                q,
                searchIn,
                includeSimilarDocuments,
                similarDocumentsNumber,
                similarDocumentsFields,
                predefinedSources,
                sources,
                notSources,
                lang,
                notLang,
                countries,
                notCountries,
                from,
                to,
                byParseDate,
                publishedDatePrecision,
                sortBy,
                rankedOnly,
                fromRank,
                toRank,
                isHeadline,
                isPaidContent,
                parentUrl,
                allLinks,
                allDomainLinks,
                wordCountMin,
                wordCountMax,
                page,
                pageSize,
                includeNlpData,
                hasNlp,
                theme,
                nerName,
                titleSentimentMin,
                titleSentimentMax,
                contentSentimentMin,
                contentSentimentMax
            );
            
            try
            {
                // [Post] Search For Similar Articles Request
                SearchSimilarPostResponse result = client.SearchSimilar.Post(moreLikeThisRequest);
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling SearchSimilarApi.Post: " + e.Message);
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

#### Using the PostWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // [Post] Search For Similar Articles Request
    ApiResponse<SearchSimilarPostResponse> response = apiInstance.PostWithHttpInfo(moreLikeThisRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SearchSimilarApi.PostWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **moreLikeThisRequest** | [**MoreLikeThisRequest**](MoreLikeThisRequest.md) |  |  |

### Return type

[**SearchSimilarPostResponse**](SearchSimilarPostResponse.md)


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

