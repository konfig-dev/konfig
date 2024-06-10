# Newscatcherapi.Net.Api.SearchLinkApi

All URIs are relative to *https://v3-api.newscatcherapi.com*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**Get**](SearchLinkApi.md#get) | **GET** /api/search_by_link | [Get] Search For Articles By Id Or Link |
| [**Post**](SearchLinkApi.md#post) | **POST** /api/search_by_link | [Post] Search For Articles Request |


# **Get**



This endpoint allows you to search for articles. You can search for articles by id(s) or link(s).

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

            var ids = new Object(
            );
            var links = new Object(
            );
            var page = 1;
            var pageSize = 100;
            
            try
            {
                // [Get] Search For Articles By Id Or Link
                DtoResponsesSearchResponseSearchResponse result = client.SearchLink.Get(ids, links, page, pageSize);
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling SearchLinkApi.Get: " + e.Message);
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
    // [Get] Search For Articles By Id Or Link
    ApiResponse<DtoResponsesSearchResponseSearchResponse> response = apiInstance.GetWithHttpInfo(ids, links, page, pageSize);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SearchLinkApi.GetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **ids** | [**Object**](Object.md) |  | [optional]  |
| **links** | [**Object**](Object.md) |  | [optional]  |
| **page** | **int?** |  | [optional] [default to 1] |
| **pageSize** | **int?** |  | [optional] [default to 100] |

### Return type

[**DtoResponsesSearchResponseSearchResponse**](DtoResponsesSearchResponseSearchResponse.md)


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# **Post**



This endpoint allows you to search for articles. You can search for articles by id(s) or link(s).

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

            var ids = "ids_example";
            var links = "links_example";
            var page = 1;
            var pageSize = 100;
            
            var searchURLRequest = new SearchURLRequest(
                ids,
                links,
                page,
                pageSize
            );
            
            try
            {
                // [Post] Search For Articles Request
                DtoResponsesSearchResponseSearchResponse result = client.SearchLink.Post(searchURLRequest);
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling SearchLinkApi.Post: " + e.Message);
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
    // [Post] Search For Articles Request
    ApiResponse<DtoResponsesSearchResponseSearchResponse> response = apiInstance.PostWithHttpInfo(searchURLRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SearchLinkApi.PostWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **searchURLRequest** | [**SearchURLRequest**](SearchURLRequest.md) |  |  |

### Return type

[**DtoResponsesSearchResponseSearchResponse**](DtoResponsesSearchResponseSearchResponse.md)


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

