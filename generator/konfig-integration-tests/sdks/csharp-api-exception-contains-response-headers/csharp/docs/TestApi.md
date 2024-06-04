# CsharpApiExceptionContainsResponseHeaders.Net.Api.TestApi

All URIs are relative to *https://csharp-api-exception-contains-response-headers.konfigthis.com*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**Fetch**](TestApi.md#fetch) | **GET** /simple-endpoint | Fetches a JSON value based on input parameter |


# **Fetch**



Provide an input parameter to receive a JSON value with properties.

### Example
```csharp
using System;
using System.Collections.Generic;
using System.Diagnostics;
using CsharpApiExceptionContainsResponseHeaders.Net.Client;
using CsharpApiExceptionContainsResponseHeaders.Net.Model;

namespace Example
{
    public class FetchExample
    {
        public static void Main()
        {
            CsharpApiExceptionContainsResponseHeadersClient client = new CsharpApiExceptionContainsResponseHeadersClient();
            // Configure API key authorization: ApiKey
            client.SetApiKey("YOUR_API_KEY");

            
            try
            {
                // Fetches a JSON value based on input parameter
                client.Test.Fetch();
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling TestApi.Fetch: " + e.Message);
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

#### Using the FetchWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Fetches a JSON value based on input parameter
    apiInstance.FetchWithHttpInfo();
}
catch (ApiException e)
{
    Debug.Print("Exception when calling TestApi.FetchWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

void (empty response body)


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **401** | Successful response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

