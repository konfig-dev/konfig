# Newscatcherapi.Net.Api.SourcesApi

All URIs are relative to *https://v3-api.newscatcherapi.com*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**Get**](SourcesApi.md#get) | **GET** /api/sources | [Get] Search For Sources Request |
| [**Post**](SourcesApi.md#post) | **POST** /api/sources | [Post] Search For Sources Request |


# **Get**



This endpoint allows you to get the list of sources that are available in the database. You can filter the sources by language and country. The maximum number of sources displayed is set according to your plan. You can find the list of plans and their features here: https://newscatcherapi.com/news-api#news-api-pricing

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

            var lang = "lang_example";
            var countries = "countries_example";
            var predefinedSources = "predefinedSources_example";
            var includeAdditionalInfo = true;
            var fromRank = 56;
            var toRank = 56;
            var sourceName = new Object(
            );
            var sourceUrl = "sourceUrl_example";
            
            try
            {
                // [Get] Search For Sources Request
                SourceResponse result = client.Sources.Get(lang, countries, predefinedSources, includeAdditionalInfo, fromRank, toRank, sourceName, sourceUrl);
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling SourcesApi.Get: " + e.Message);
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
    // [Get] Search For Sources Request
    ApiResponse<SourceResponse> response = apiInstance.GetWithHttpInfo(lang, countries, predefinedSources, includeAdditionalInfo, fromRank, toRank, sourceName, sourceUrl);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SourcesApi.GetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **lang** | **string** |  | [optional]  |
| **countries** | **string** |  | [optional]  |
| **predefinedSources** | **string** |  | [optional]  |
| **includeAdditionalInfo** | **bool?** |  | [optional]  |
| **fromRank** | **int?** |  | [optional]  |
| **toRank** | **int?** |  | [optional]  |
| **sourceName** | [**Object**](Object.md) |  | [optional]  |
| **sourceUrl** | **string** |  | [optional]  |

### Return type

[**SourceResponse**](SourceResponse.md)


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# **Post**



This endpoint allows you to get the list of sources that are available in the database. You can filter the sources by language and country. The maximum number of sources displayed is set according to your plan. You can find the list of plans and their features here: https://newscatcherapi.com/news-api#news-api-pricing

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

            var lang = "lang_example";
            var countries = "countries_example";
            var predefinedSources = "predefinedSources_example";
            var includeAdditionalInfo = false;
            var fromRank = default(int);
            var toRank = default(int);
            var sourceName = "sourceName_example";
            var sourceUrl = "sourceUrl_example";
            
            var sourcesRequest = new SourcesRequest(
                lang,
                countries,
                predefinedSources,
                includeAdditionalInfo,
                fromRank,
                toRank,
                sourceName,
                sourceUrl
            );
            
            try
            {
                // [Post] Search For Sources Request
                SourceResponse result = client.Sources.Post(sourcesRequest);
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling SourcesApi.Post: " + e.Message);
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
    // [Post] Search For Sources Request
    ApiResponse<SourceResponse> response = apiInstance.PostWithHttpInfo(sourcesRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SourcesApi.PostWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **sourcesRequest** | [**SourcesRequest**](SourcesRequest.md) |  |  |

### Return type

[**SourceResponse**](SourceResponse.md)


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

