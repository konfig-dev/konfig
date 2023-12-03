# Newscatcherapi.Net.Api.LatestHeadlinesApi

All URIs are relative to *https://v3-api.newscatcherapi.com*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**Get**](LatestHeadlinesApi.md#get) | **GET** /api/latest_headlines | [Get] Search For Latest Headlines Request |
| [**Post**](LatestHeadlinesApi.md#post) | **POST** /api/latest_headlines | [Post] Search For Latest Headlines Request |


# **Get**



This endpoint allows you to get latest headlines. You need to specify since when you want to get the latest headlines. You can also filter by language, country, source, and more.

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

            var when = "7d";
            var byParseDate = false;
            var lang = "lang_example";
            var notLang = "notLang_example";
            var countries = "countries_example";
            var notCountries = "notCountries_example";
            var sources = "sources_example";
            var predefinedSources = "predefinedSources_example";
            var notSources = "notSources_example";
            var rankedOnly = "rankedOnly_example";
            var isHeadline = true;
            var isPaidContent = true;
            var parentUrl = "parentUrl_example";
            var theme = "theme_example";
            var allLinks = "allLinks_example";
            var allDomainLinks = "allDomainLinks_example";
            var wordCountMin = 56;
            var wordCountMax = 56;
            var page = 1;
            var pageSize = 100;
            var clusteringEnabled = true;
            var clusteringThreshold = 8.14D;
            var clusteringVariable = "clusteringVariable_example";
            var includeNlpData = true;
            var hasNlp = true;
            var oRGEntityName = "oRGEntityName_example";
            var pEREntityName = "pEREntityName_example";
            var lOCEntityName = "lOCEntityName_example";
            var mISCEntityName = "mISCEntityName_example";
            var titleSentimentMin = 8.14D;
            var titleSentimentMax = 8.14D;
            var contentSentimentMin = 8.14D;
            var contentSentimentMax = 8.14D;
            
            try
            {
                // [Get] Search For Latest Headlines Request
                LatestHeadlinesGetResponse result = client.LatestHeadlines.Get(when, byParseDate, lang, notLang, countries, notCountries, sources, predefinedSources, notSources, rankedOnly, isHeadline, isPaidContent, parentUrl, theme, allLinks, allDomainLinks, wordCountMin, wordCountMax, page, pageSize, clusteringEnabled, clusteringThreshold, clusteringVariable, includeNlpData, hasNlp, oRGEntityName, pEREntityName, lOCEntityName, mISCEntityName, titleSentimentMin, titleSentimentMax, contentSentimentMin, contentSentimentMax);
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling LatestHeadlinesApi.Get: " + e.Message);
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
    // [Get] Search For Latest Headlines Request
    ApiResponse<LatestHeadlinesGetResponse> response = apiInstance.GetWithHttpInfo(when, byParseDate, lang, notLang, countries, notCountries, sources, predefinedSources, notSources, rankedOnly, isHeadline, isPaidContent, parentUrl, theme, allLinks, allDomainLinks, wordCountMin, wordCountMax, page, pageSize, clusteringEnabled, clusteringThreshold, clusteringVariable, includeNlpData, hasNlp, oRGEntityName, pEREntityName, lOCEntityName, mISCEntityName, titleSentimentMin, titleSentimentMax, contentSentimentMin, contentSentimentMax);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LatestHeadlinesApi.GetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **when** | **string** |  | [optional] [default to &quot;7d&quot;] |
| **byParseDate** | **bool?** |  | [optional] [default to false] |
| **lang** | **string** |  | [optional]  |
| **notLang** | **string** |  | [optional]  |
| **countries** | **string** |  | [optional]  |
| **notCountries** | **string** |  | [optional]  |
| **sources** | **string** |  | [optional]  |
| **predefinedSources** | **string** |  | [optional]  |
| **notSources** | **string** |  | [optional]  |
| **rankedOnly** | **string** |  | [optional]  |
| **isHeadline** | **bool?** |  | [optional]  |
| **isPaidContent** | **bool?** |  | [optional]  |
| **parentUrl** | **string** |  | [optional]  |
| **theme** | **string** |  | [optional]  |
| **allLinks** | **string** |  | [optional]  |
| **allDomainLinks** | **string** |  | [optional]  |
| **wordCountMin** | **int?** |  | [optional]  |
| **wordCountMax** | **int?** |  | [optional]  |
| **page** | **int?** |  | [optional] [default to 1] |
| **pageSize** | **int?** |  | [optional] [default to 100] |
| **clusteringEnabled** | **bool?** |  | [optional]  |
| **clusteringThreshold** | **double?** |  | [optional]  |
| **clusteringVariable** | **string** |  | [optional]  |
| **includeNlpData** | **bool?** |  | [optional]  |
| **hasNlp** | **bool?** |  | [optional]  |
| **oRGEntityName** | **string** |  | [optional]  |
| **pEREntityName** | **string** |  | [optional]  |
| **lOCEntityName** | **string** |  | [optional]  |
| **mISCEntityName** | **string** |  | [optional]  |
| **titleSentimentMin** | **double?** |  | [optional]  |
| **titleSentimentMax** | **double?** |  | [optional]  |
| **contentSentimentMin** | **double?** |  | [optional]  |
| **contentSentimentMax** | **double?** |  | [optional]  |

### Return type

[**LatestHeadlinesGetResponse**](LatestHeadlinesGetResponse.md)


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# **Post**



This endpoint allows you to get latest headlines. You need to specify since when you want to get the latest headlines. You can also filter by language, country, source, and more.

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

            var when = "7d";
            var byParseDate = false;
            var lang = "lang_example";
            var notLang = "notLang_example";
            var countries = "countries_example";
            var notCountries = "notCountries_example";
            var sources = "sources_example";
            var predefinedSources = "predefinedSources_example";
            var notSources = "notSources_example";
            var rankedOnly = "rankedOnly_example";
            var isHeadline = false;
            var isPaidContent = false;
            var parentUrl = "parentUrl_example";
            var theme = "theme_example";
            var allLinks = "allLinks_example";
            var allDomainLinks = "allDomainLinks_example";
            var wordCountMin = default(int);
            var wordCountMax = default(int);
            var page = 1;
            var pageSize = 100;
            var clusteringEnabled = false;
            var clusteringThreshold = default(double);
            var clusteringVariable = "clusteringVariable_example";
            var includeNlpData = false;
            var hasNlp = false;
            var oRGEntityName = "oRGEntityName_example";
            var pEREntityName = "pEREntityName_example";
            var lOCEntityName = "lOCEntityName_example";
            var mISCEntityName = "mISCEntityName_example";
            var titleSentimentMin = default(double);
            var titleSentimentMax = default(double);
            var contentSentimentMin = default(double);
            var contentSentimentMax = default(double);
            
            var latestHeadlinesRequest = new LatestHeadlinesRequest(
                when,
                byParseDate,
                lang,
                notLang,
                countries,
                notCountries,
                sources,
                predefinedSources,
                notSources,
                rankedOnly,
                isHeadline,
                isPaidContent,
                parentUrl,
                theme,
                allLinks,
                allDomainLinks,
                wordCountMin,
                wordCountMax,
                page,
                pageSize,
                clusteringEnabled,
                clusteringThreshold,
                clusteringVariable,
                includeNlpData,
                hasNlp,
                oRGEntityName,
                pEREntityName,
                lOCEntityName,
                mISCEntityName,
                titleSentimentMin,
                titleSentimentMax,
                contentSentimentMin,
                contentSentimentMax
            );
            
            try
            {
                // [Post] Search For Latest Headlines Request
                LatestHeadlinesPostResponse result = client.LatestHeadlines.Post(latestHeadlinesRequest);
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling LatestHeadlinesApi.Post: " + e.Message);
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
    // [Post] Search For Latest Headlines Request
    ApiResponse<LatestHeadlinesPostResponse> response = apiInstance.PostWithHttpInfo(latestHeadlinesRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling LatestHeadlinesApi.PostWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **latestHeadlinesRequest** | [**LatestHeadlinesRequest**](LatestHeadlinesRequest.md) |  |  |

### Return type

[**LatestHeadlinesPostResponse**](LatestHeadlinesPostResponse.md)


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

