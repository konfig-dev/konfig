# Newscatcherapi.Net.Api.SubscriptionApi

All URIs are relative to *https://v3-api.newscatcherapi.com*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**Get**](SubscriptionApi.md#get) | **GET** /api/subscription | [Get] Get My Plan Info |
| [**Post**](SubscriptionApi.md#post) | **POST** /api/subscription | [Post] Get My Plan Info |


# **Get**



This endpoint allows you to get info about your subscription plan.

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

            
            try
            {
                // [Get] Get My Plan Info
                SubscriptionResponse result = client.Subscription.Get();
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling SubscriptionApi.Get: " + e.Message);
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
    // [Get] Get My Plan Info
    ApiResponse<SubscriptionResponse> response = apiInstance.GetWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionApi.GetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

[**SubscriptionResponse**](SubscriptionResponse.md)


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# **Post**



This endpoint allows you to get info about your subscription plan.

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

            
            try
            {
                // [Post] Get My Plan Info
                SubscriptionResponse result = client.Subscription.Post();
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling SubscriptionApi.Post: " + e.Message);
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
    // [Post] Get My Plan Info
    ApiResponse<SubscriptionResponse> response = apiInstance.PostWithHttpInfo();
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling SubscriptionApi.PostWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters
This endpoint does not need any parameter.
### Return type

[**SubscriptionResponse**](SubscriptionResponse.md)


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |
| **422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

