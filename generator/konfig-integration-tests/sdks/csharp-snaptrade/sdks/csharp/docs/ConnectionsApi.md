# SnapTrade.Net.Api.ConnectionsApi

All URIs are relative to *https://api.snaptrade.com/api/v1*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**DetailBrokerageAuthorization**](ConnectionsApi.md#detailbrokerageauthorization) | **GET** /authorizations/{authorizationId} | Get brokerage authorization details |
| [**ListBrokerageAuthorizations**](ConnectionsApi.md#listbrokerageauthorizations) | **GET** /authorizations | List all brokerage authorizations for the user |
| [**RemoveBrokerageAuthorization**](ConnectionsApi.md#removebrokerageauthorization) | **DELETE** /authorizations/{authorizationId} | Delete brokerage authorization |
| [**SessionEvents**](ConnectionsApi.md#sessionevents) | **GET** /sessionEvents | List all session events for the partner |


# **DetailBrokerageAuthorization**

Get brokerage authorization details

### Example
```csharp
using System;
using System.Collections.Generic;
using System.Diagnostics;
using SnapTrade.Net.Client;
using SnapTrade.Net.Model;

namespace Example
{
    public class DetailBrokerageAuthorizationExample
    {
        public static void Main()
        {
            Snaptrade client = new Snaptrade();
            // Configure custom BasePath if desired
            // client.SetBasePath("https://api.snaptrade.com/api/v1");
            client.SetClientId("test");
            client.SetConsumerKey("test");

            var authorizationId = "authorizationId_example"; // The ID of a brokerage authorization object.
            var userId = "userId_example";
            var userSecret = "userSecret_example";
            
            try
            {
                // Get brokerage authorization details
                BrokerageAuthorization result = client.Connections.DetailBrokerageAuthorization(authorizationId, userId, userSecret);
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling ConnectionsApi.DetailBrokerageAuthorization: " + e.Message);
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

#### Using the DetailBrokerageAuthorizationWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Get brokerage authorization details
    ApiResponse<BrokerageAuthorization> response = apiInstance.DetailBrokerageAuthorizationWithHttpInfo(authorizationId, userId, userSecret);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ConnectionsApi.DetailBrokerageAuthorizationWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **authorizationId** | **string** | The ID of a brokerage authorization object. |  |
| **userId** | **string** |  |  |
| **userSecret** | **string** |  |  |

### Return type

[**BrokerageAuthorization**](BrokerageAuthorization.md)


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Authorization object for the authenticated user. |  -  |
| **0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# **ListBrokerageAuthorizations**

List all brokerage authorizations for the user

### Example
```csharp
using System;
using System.Collections.Generic;
using System.Diagnostics;
using SnapTrade.Net.Client;
using SnapTrade.Net.Model;

namespace Example
{
    public class ListBrokerageAuthorizationsExample
    {
        public static void Main()
        {
            Snaptrade client = new Snaptrade();
            // Configure custom BasePath if desired
            // client.SetBasePath("https://api.snaptrade.com/api/v1");
            client.SetClientId("test");
            client.SetConsumerKey("test");

            var userId = "userId_example";
            var userSecret = "userSecret_example";
            
            try
            {
                // List all brokerage authorizations for the user
                List<BrokerageAuthorization> result = client.Connections.ListBrokerageAuthorizations(userId, userSecret);
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling ConnectionsApi.ListBrokerageAuthorizations: " + e.Message);
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

#### Using the ListBrokerageAuthorizationsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List all brokerage authorizations for the user
    ApiResponse<List<BrokerageAuthorization>> response = apiInstance.ListBrokerageAuthorizationsWithHttpInfo(userId, userSecret);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ConnectionsApi.ListBrokerageAuthorizationsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **userId** | **string** |  |  |
| **userSecret** | **string** |  |  |

### Return type

[**List&lt;BrokerageAuthorization&gt;**](BrokerageAuthorization.md)


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of all Authorization objects for the authenticated user. |  -  |
| **0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# **RemoveBrokerageAuthorization**

Delete brokerage authorization

### Example
```csharp
using System;
using System.Collections.Generic;
using System.Diagnostics;
using SnapTrade.Net.Client;
using SnapTrade.Net.Model;

namespace Example
{
    public class RemoveBrokerageAuthorizationExample
    {
        public static void Main()
        {
            Snaptrade client = new Snaptrade();
            // Configure custom BasePath if desired
            // client.SetBasePath("https://api.snaptrade.com/api/v1");
            client.SetClientId("test");
            client.SetConsumerKey("test");

            var authorizationId = "authorizationId_example"; // The ID of the Authorization to delete.
            var userId = "userId_example";
            var userSecret = "userSecret_example";
            
            try
            {
                // Delete brokerage authorization
                client.Connections.RemoveBrokerageAuthorization(authorizationId, userId, userSecret);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling ConnectionsApi.RemoveBrokerageAuthorization: " + e.Message);
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

#### Using the RemoveBrokerageAuthorizationWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // Delete brokerage authorization
    apiInstance.RemoveBrokerageAuthorizationWithHttpInfo(authorizationId, userId, userSecret);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ConnectionsApi.RemoveBrokerageAuthorizationWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **authorizationId** | **string** | The ID of the Authorization to delete. |  |
| **userId** | **string** |  |  |
| **userSecret** | **string** |  |  |

### Return type

void (empty response body)


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Brokerage authorization object has been successfully deleted |  -  |
| **400** | The specified authorizationId is invalid (not a UUID string). |  -  |
| **404** | The specified authorizationId was not found. |  -  |
| **0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# **SessionEvents**

List all session events for the partner

### Example
```csharp
using System;
using System.Collections.Generic;
using System.Diagnostics;
using SnapTrade.Net.Client;
using SnapTrade.Net.Model;

namespace Example
{
    public class SessionEventsExample
    {
        public static void Main()
        {
            Snaptrade client = new Snaptrade();
            // Configure custom BasePath if desired
            // client.SetBasePath("https://api.snaptrade.com/api/v1");
            client.SetClientId("test");
            client.SetConsumerKey("test");

            var partnerClientId = "partnerClientId_example";
            var userId = "userId_example"; // Optional comma seperated list of user IDs used to filter the request on specific users (optional) 
            var sessionId = "sessionId_example"; // Optional comma seperated list of session IDs used to filter the request on specific users (optional) 
            
            try
            {
                // List all session events for the partner
                List<ConnectionsSessionEvents200ResponseInner> result = client.Connections.SessionEvents(partnerClientId, userId, sessionId);
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling ConnectionsApi.SessionEvents: " + e.Message);
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

#### Using the SessionEventsWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    // List all session events for the partner
    ApiResponse<List<ConnectionsSessionEvents200ResponseInner>> response = apiInstance.SessionEventsWithHttpInfo(partnerClientId, userId, sessionId);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling ConnectionsApi.SessionEventsWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **partnerClientId** | **string** |  |  |
| **userId** | **string** | Optional comma seperated list of user IDs used to filter the request on specific users | [optional]  |
| **sessionId** | **string** | Optional comma seperated list of session IDs used to filter the request on specific users | [optional]  |

### Return type

[**List&lt;ConnectionsSessionEvents200ResponseInner&gt;**](ConnectionsSessionEvents200ResponseInner.md)


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of all Session Events for the Partner. |  -  |
| **0** | Unexpected error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

