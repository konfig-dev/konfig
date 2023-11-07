# CsharpSplitit.Net.Api.InstallmentPlanApi

All URIs are relative to *https://web-api-v3.production.splitit.com*

| Method | HTTP request | Description |
|--------|--------------|-------------|
| [**Cancel**](InstallmentPlanApi.md#cancel) | **POST** /api/installmentplans/{installmentPlanNumber}/cancel |  |
| [**CheckEligibility**](InstallmentPlanApi.md#checkeligibility) | **POST** /api/installmentplans/check-eligibility |  |
| [**Get**](InstallmentPlanApi.md#get) | **GET** /api/installmentplans/{installmentPlanNumber} |  |
| [**Post**](InstallmentPlanApi.md#post) | **POST** /api/installmentplans/initiate |  |
| [**Post2**](InstallmentPlanApi.md#post2) | **POST** /api/installmentplans |  |
| [**Refund**](InstallmentPlanApi.md#refund) | **POST** /api/installmentplans/{installmentPlanNumber}/refund |  |
| [**Search**](InstallmentPlanApi.md#search) | **GET** /api/installmentplans/search |  |
| [**UpdateOrder**](InstallmentPlanApi.md#updateorder) | **PUT** /api/installmentplans/{installmentPlanNumber}/updateorder |  |
| [**UpdateOrder2**](InstallmentPlanApi.md#updateorder2) | **PUT** /api/installmentplans/updateorder |  |
| [**VerifyAuthorization**](InstallmentPlanApi.md#verifyauthorization) | **GET** /api/installmentplans/{installmentPlanNumber}/verifyauthorization |  |


# **Cancel**



### Example
```csharp
using System;
using System.Collections.Generic;
using System.Diagnostics;
using CsharpSplitit.Net.Client;
using CsharpSplitit.Net.Model;

namespace Example
{
    public class CancelExample
    {
        public static void Main()
        {
            CsharpSplititClient client = new CsharpSplititClient();
            // Configure OAuth2 credentials for "application" OAuth flow
            client.SetOAuthClientId(System.Environment.GetEnvironmentVariable("CLIENT_ID"));
            client.SetOAuthClientSecret(System.Environment.GetEnvironmentVariable("CLIENT_SECRET"));

            var installmentPlanNumber = "installmentPlanNumber_example";
            var xSplititIdempotencyKey = "xSplititIdempotencyKey_example";
            var xSplititTouchPoint = ""; // TouchPoint (default to "")
            
            try
            {
                InstallmentPlanCancelResponse result = client.InstallmentPlan.Cancel(installmentPlanNumber, xSplititIdempotencyKey, xSplititTouchPoint);
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling InstallmentPlanApi.Cancel: " + e.Message);
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

#### Using the CancelWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<InstallmentPlanCancelResponse> response = apiInstance.CancelWithHttpInfo(installmentPlanNumber, xSplititIdempotencyKey, xSplititTouchPoint);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling InstallmentPlanApi.CancelWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **installmentPlanNumber** | **string** |  |  |
| **xSplititIdempotencyKey** | **string** |  |  |
| **xSplititTouchPoint** | **string** | TouchPoint | [default to &quot;&quot;] |

### Return type

[**InstallmentPlanCancelResponse**](InstallmentPlanCancelResponse.md)


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **401** |  |  -  |
| **403** |  |  -  |
| **404** |  |  -  |
| **500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# **CheckEligibility**



### Example
```csharp
using System;
using System.Collections.Generic;
using System.Diagnostics;
using CsharpSplitit.Net.Client;
using CsharpSplitit.Net.Model;

namespace Example
{
    public class CheckEligibilityExample
    {
        public static void Main()
        {
            CsharpSplititClient client = new CsharpSplititClient();
            // Configure OAuth2 credentials for "application" OAuth flow
            client.SetOAuthClientId(System.Environment.GetEnvironmentVariable("CLIENT_ID"));
            client.SetOAuthClientSecret(System.Environment.GetEnvironmentVariable("CLIENT_SECRET"));

            var xSplititIdempotencyKey = "xSplititIdempotencyKey_example";
            var xSplititTouchPoint = ""; // TouchPoint (default to "")
            var planData = new PlanData();
            var cardDetails = new CardData();
            var billingAddress = new AddressData();
            
            var checkInstallmentsEligibilityRequest = new CheckInstallmentsEligibilityRequest(
                planData,
                cardDetails,
                billingAddress
            );
            
            try
            {
                InstallmentsEligibilityResponse result = client.InstallmentPlan.CheckEligibility(xSplititIdempotencyKey, xSplititTouchPoint, checkInstallmentsEligibilityRequest);
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling InstallmentPlanApi.CheckEligibility: " + e.Message);
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

#### Using the CheckEligibilityWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<InstallmentsEligibilityResponse> response = apiInstance.CheckEligibilityWithHttpInfo(xSplititIdempotencyKey, xSplititTouchPoint, checkInstallmentsEligibilityRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling InstallmentPlanApi.CheckEligibilityWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **xSplititIdempotencyKey** | **string** |  |  |
| **xSplititTouchPoint** | **string** | TouchPoint | [default to &quot;&quot;] |
| **checkInstallmentsEligibilityRequest** | [**CheckInstallmentsEligibilityRequest**](CheckInstallmentsEligibilityRequest.md) |  |  |

### Return type

[**InstallmentsEligibilityResponse**](InstallmentsEligibilityResponse.md)


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **401** |  |  -  |
| **403** |  |  -  |
| **404** |  |  -  |
| **500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# **Get**



### Example
```csharp
using System;
using System.Collections.Generic;
using System.Diagnostics;
using CsharpSplitit.Net.Client;
using CsharpSplitit.Net.Model;

namespace Example
{
    public class GetExample
    {
        public static void Main()
        {
            CsharpSplititClient client = new CsharpSplititClient();
            // Configure OAuth2 credentials for "application" OAuth flow
            client.SetOAuthClientId(System.Environment.GetEnvironmentVariable("CLIENT_ID"));
            client.SetOAuthClientSecret(System.Environment.GetEnvironmentVariable("CLIENT_SECRET"));

            var installmentPlanNumber = "installmentPlanNumber_example";
            var xSplititIdempotencyKey = "xSplititIdempotencyKey_example";
            var xSplititTouchPoint = ""; // TouchPoint (default to "")
            
            try
            {
                InstallmentPlanGetResponse result = client.InstallmentPlan.Get(installmentPlanNumber, xSplititIdempotencyKey, xSplititTouchPoint);
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling InstallmentPlanApi.Get: " + e.Message);
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
    ApiResponse<InstallmentPlanGetResponse> response = apiInstance.GetWithHttpInfo(installmentPlanNumber, xSplititIdempotencyKey, xSplititTouchPoint);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling InstallmentPlanApi.GetWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **installmentPlanNumber** | **string** |  |  |
| **xSplititIdempotencyKey** | **string** |  |  |
| **xSplititTouchPoint** | **string** | TouchPoint | [default to &quot;&quot;] |

### Return type

[**InstallmentPlanGetResponse**](InstallmentPlanGetResponse.md)


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **401** |  |  -  |
| **403** |  |  -  |
| **404** |  |  -  |
| **500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# **Post**



### Example
```csharp
using System;
using System.Collections.Generic;
using System.Diagnostics;
using CsharpSplitit.Net.Client;
using CsharpSplitit.Net.Model;

namespace Example
{
    public class PostExample
    {
        public static void Main()
        {
            CsharpSplititClient client = new CsharpSplititClient();
            // Configure OAuth2 credentials for "application" OAuth flow
            client.SetOAuthClientId(System.Environment.GetEnvironmentVariable("CLIENT_ID"));
            client.SetOAuthClientSecret(System.Environment.GetEnvironmentVariable("CLIENT_SECRET"));

            var xSplititIdempotencyKey = "xSplititIdempotencyKey_example";
            var xSplititTouchPoint = ""; // TouchPoint (default to "")
            var autoCapture = false;
            var attempt3dSecure = false;
            var shopper = new ShopperData();
            var planData = new PlanDataModel();
            var billingAddress = new AddressDataModel();
            var redirectUrls = new InitiateRedirectionEndpointsModel();
            var uxSettings = new UxSettingsModel();
            var eventsEndpoints = new EventsEndpointsModel();
            var processingData = new ProcessingData();
            
            var installmentPlanInitiateRequest = new InstallmentPlanInitiateRequest(
                autoCapture,
                attempt3dSecure,
                shopper,
                planData,
                billingAddress,
                redirectUrls,
                uxSettings,
                eventsEndpoints,
                processingData
            );
            var xSplititTestMode = "None";
            
            try
            {
                InitiatePlanResponse result = client.InstallmentPlan.Post(xSplititIdempotencyKey, xSplititTouchPoint, installmentPlanInitiateRequest, xSplititTestMode);
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling InstallmentPlanApi.Post: " + e.Message);
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
    ApiResponse<InitiatePlanResponse> response = apiInstance.PostWithHttpInfo(xSplititIdempotencyKey, xSplititTouchPoint, installmentPlanInitiateRequest, xSplititTestMode);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling InstallmentPlanApi.PostWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **xSplititIdempotencyKey** | **string** |  |  |
| **xSplititTouchPoint** | **string** | TouchPoint | [default to &quot;&quot;] |
| **installmentPlanInitiateRequest** | [**InstallmentPlanInitiateRequest**](InstallmentPlanInitiateRequest.md) |  |  |
| **xSplititTestMode** | **string** |  | [optional]  |

### Return type

[**InitiatePlanResponse**](InitiatePlanResponse.md)


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **403** |  |  -  |
| **404** |  |  -  |
| **500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# **Post2**



### Example
```csharp
using System;
using System.Collections.Generic;
using System.Diagnostics;
using CsharpSplitit.Net.Client;
using CsharpSplitit.Net.Model;

namespace Example
{
    public class Post2Example
    {
        public static void Main()
        {
            CsharpSplititClient client = new CsharpSplititClient();
            // Configure OAuth2 credentials for "application" OAuth flow
            client.SetOAuthClientId(System.Environment.GetEnvironmentVariable("CLIENT_ID"));
            client.SetOAuthClientSecret(System.Environment.GetEnvironmentVariable("CLIENT_SECRET"));

            var xSplititIdempotencyKey = "xSplititIdempotencyKey_example";
            var xSplititTouchPoint = ""; // TouchPoint (default to "")
            var autoCapture = false;
            var attempt3dSecure = false;
            var termsAndConditionsAccepted = false;
            var shopper = new ShopperData();
            var planData = new PlanDataModel();
            var billingAddress = new AddressDataModel();
            var paymentMethod = new PaymentMethodModel();
            var redirectUrls = new RedirectionEndpointsModel();
            var processingData = new ProcessingData();
            var eventsEndpoints = new EventsEndpointsModel();
            
            var installmentPlanCreateRequest = new InstallmentPlanCreateRequest(
                autoCapture,
                attempt3dSecure,
                termsAndConditionsAccepted,
                shopper,
                planData,
                billingAddress,
                paymentMethod,
                redirectUrls,
                processingData,
                eventsEndpoints
            );
            var xSplititTestMode = "None";
            
            try
            {
                InstallmentPlanCreateResponse result = client.InstallmentPlan.Post2(xSplititIdempotencyKey, xSplititTouchPoint, installmentPlanCreateRequest, xSplititTestMode);
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling InstallmentPlanApi.Post2: " + e.Message);
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

#### Using the Post2WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<InstallmentPlanCreateResponse> response = apiInstance.Post2WithHttpInfo(xSplititIdempotencyKey, xSplititTouchPoint, installmentPlanCreateRequest, xSplititTestMode);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling InstallmentPlanApi.Post2WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **xSplititIdempotencyKey** | **string** |  |  |
| **xSplititTouchPoint** | **string** | TouchPoint | [default to &quot;&quot;] |
| **installmentPlanCreateRequest** | [**InstallmentPlanCreateRequest**](InstallmentPlanCreateRequest.md) |  |  |
| **xSplititTestMode** | **string** |  | [optional]  |

### Return type

[**InstallmentPlanCreateResponse**](InstallmentPlanCreateResponse.md)


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **403** |  |  -  |
| **404** |  |  -  |
| **500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# **Refund**



### Example
```csharp
using System;
using System.Collections.Generic;
using System.Diagnostics;
using CsharpSplitit.Net.Client;
using CsharpSplitit.Net.Model;

namespace Example
{
    public class RefundExample
    {
        public static void Main()
        {
            CsharpSplititClient client = new CsharpSplititClient();
            // Configure OAuth2 credentials for "application" OAuth flow
            client.SetOAuthClientId(System.Environment.GetEnvironmentVariable("CLIENT_ID"));
            client.SetOAuthClientSecret(System.Environment.GetEnvironmentVariable("CLIENT_SECRET"));

            var installmentPlanNumber = "installmentPlanNumber_example";
            var xSplititIdempotencyKey = "xSplititIdempotencyKey_example";
            var xSplititTouchPoint = ""; // TouchPoint (default to "")
            var amount = default(double);
            var refundStrategy = RefundStrategy.FutureInstallmentsFirst;
            
            var installmentPlanRefundRequest = new InstallmentPlanRefundRequest(
                amount,
                refundStrategy
            );
            
            try
            {
                InstallmentPlanRefundResponse result = client.InstallmentPlan.Refund(installmentPlanNumber, xSplititIdempotencyKey, xSplititTouchPoint, installmentPlanRefundRequest);
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling InstallmentPlanApi.Refund: " + e.Message);
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

#### Using the RefundWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<InstallmentPlanRefundResponse> response = apiInstance.RefundWithHttpInfo(installmentPlanNumber, xSplititIdempotencyKey, xSplititTouchPoint, installmentPlanRefundRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling InstallmentPlanApi.RefundWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **installmentPlanNumber** | **string** |  |  |
| **xSplititIdempotencyKey** | **string** |  |  |
| **xSplititTouchPoint** | **string** | TouchPoint | [default to &quot;&quot;] |
| **installmentPlanRefundRequest** | [**InstallmentPlanRefundRequest**](InstallmentPlanRefundRequest.md) |  |  |

### Return type

[**InstallmentPlanRefundResponse**](InstallmentPlanRefundResponse.md)


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **401** |  |  -  |
| **403** |  |  -  |
| **404** |  |  -  |
| **500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# **Search**



### Example
```csharp
using System;
using System.Collections.Generic;
using System.Diagnostics;
using CsharpSplitit.Net.Client;
using CsharpSplitit.Net.Model;

namespace Example
{
    public class SearchExample
    {
        public static void Main()
        {
            CsharpSplititClient client = new CsharpSplititClient();
            // Configure OAuth2 credentials for "application" OAuth flow
            client.SetOAuthClientId(System.Environment.GetEnvironmentVariable("CLIENT_ID"));
            client.SetOAuthClientSecret(System.Environment.GetEnvironmentVariable("CLIENT_SECRET"));

            var xSplititIdempotencyKey = "xSplititIdempotencyKey_example";
            var xSplititTouchPoint = ""; // TouchPoint (default to "")
            var installmentPlanNumber = "installmentPlanNumber_example";
            var refOrderNumber = "refOrderNumber_example";
            var extendedParams = new Dictionary<string, string>(
            );
            
            try
            {
                InstallmentPlanSearchResponse result = client.InstallmentPlan.Search(xSplititIdempotencyKey, xSplititTouchPoint, installmentPlanNumber, refOrderNumber, extendedParams);
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling InstallmentPlanApi.Search: " + e.Message);
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

#### Using the SearchWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<InstallmentPlanSearchResponse> response = apiInstance.SearchWithHttpInfo(xSplititIdempotencyKey, xSplititTouchPoint, installmentPlanNumber, refOrderNumber, extendedParams);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling InstallmentPlanApi.SearchWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **xSplititIdempotencyKey** | **string** |  |  |
| **xSplititTouchPoint** | **string** | TouchPoint | [default to &quot;&quot;] |
| **installmentPlanNumber** | **string** |  | [optional]  |
| **refOrderNumber** | **string** |  | [optional]  |
| **extendedParams** | [**Dictionary&lt;string, string&gt;**](string.md) |  | [optional]  |

### Return type

[**InstallmentPlanSearchResponse**](InstallmentPlanSearchResponse.md)


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **401** |  |  -  |
| **403** |  |  -  |
| **404** |  |  -  |
| **500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# **UpdateOrder**



### Example
```csharp
using System;
using System.Collections.Generic;
using System.Diagnostics;
using CsharpSplitit.Net.Client;
using CsharpSplitit.Net.Model;

namespace Example
{
    public class UpdateOrderExample
    {
        public static void Main()
        {
            CsharpSplititClient client = new CsharpSplititClient();
            // Configure OAuth2 credentials for "application" OAuth flow
            client.SetOAuthClientId(System.Environment.GetEnvironmentVariable("CLIENT_ID"));
            client.SetOAuthClientSecret(System.Environment.GetEnvironmentVariable("CLIENT_SECRET"));

            var installmentPlanNumber = "installmentPlanNumber_example";
            var xSplititIdempotencyKey = "xSplititIdempotencyKey_example";
            var xSplititTouchPoint = ""; // TouchPoint (default to "")
            var trackingNumber = "trackingNumber_example";
            var refOrderNumber = "refOrderNumber_example";
            var shippingStatus = ShippingStatus.Pending;
            var capture = false;
            
            var updateOrderRequest = new UpdateOrderRequest(
                trackingNumber,
                refOrderNumber,
                shippingStatus,
                capture
            );
            
            try
            {
                InstallmentPlanUpdateResponse result = client.InstallmentPlan.UpdateOrder(installmentPlanNumber, xSplititIdempotencyKey, xSplititTouchPoint, updateOrderRequest);
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling InstallmentPlanApi.UpdateOrder: " + e.Message);
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

#### Using the UpdateOrderWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<InstallmentPlanUpdateResponse> response = apiInstance.UpdateOrderWithHttpInfo(installmentPlanNumber, xSplititIdempotencyKey, xSplititTouchPoint, updateOrderRequest);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling InstallmentPlanApi.UpdateOrderWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **installmentPlanNumber** | **string** |  |  |
| **xSplititIdempotencyKey** | **string** |  |  |
| **xSplititTouchPoint** | **string** | TouchPoint | [default to &quot;&quot;] |
| **updateOrderRequest** | [**UpdateOrderRequest**](UpdateOrderRequest.md) |  |  |

### Return type

[**InstallmentPlanUpdateResponse**](InstallmentPlanUpdateResponse.md)


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **401** |  |  -  |
| **403** |  |  -  |
| **404** |  |  -  |
| **500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# **UpdateOrder2**



### Example
```csharp
using System;
using System.Collections.Generic;
using System.Diagnostics;
using CsharpSplitit.Net.Client;
using CsharpSplitit.Net.Model;

namespace Example
{
    public class UpdateOrder2Example
    {
        public static void Main()
        {
            CsharpSplititClient client = new CsharpSplititClient();
            // Configure OAuth2 credentials for "application" OAuth flow
            client.SetOAuthClientId(System.Environment.GetEnvironmentVariable("CLIENT_ID"));
            client.SetOAuthClientSecret(System.Environment.GetEnvironmentVariable("CLIENT_SECRET"));

            var xSplititIdempotencyKey = "xSplititIdempotencyKey_example";
            var xSplititTouchPoint = ""; // TouchPoint (default to "")
            
            var installmentPlanUpdateRequestByIdentifier = new InstallmentPlanUpdateRequestByIdentifier(
            );
            
            try
            {
                InstallmentPlanUpdateResponse result = client.InstallmentPlan.UpdateOrder2(xSplititIdempotencyKey, xSplititTouchPoint, installmentPlanUpdateRequestByIdentifier);
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling InstallmentPlanApi.UpdateOrder2: " + e.Message);
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

#### Using the UpdateOrder2WithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<InstallmentPlanUpdateResponse> response = apiInstance.UpdateOrder2WithHttpInfo(xSplititIdempotencyKey, xSplititTouchPoint, installmentPlanUpdateRequestByIdentifier);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling InstallmentPlanApi.UpdateOrder2WithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **xSplititIdempotencyKey** | **string** |  |  |
| **xSplititTouchPoint** | **string** | TouchPoint | [default to &quot;&quot;] |
| **installmentPlanUpdateRequestByIdentifier** | [**InstallmentPlanUpdateRequestByIdentifier**](InstallmentPlanUpdateRequestByIdentifier.md) |  |  |

### Return type

[**InstallmentPlanUpdateResponse**](InstallmentPlanUpdateResponse.md)


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **401** |  |  -  |
| **403** |  |  -  |
| **404** |  |  -  |
| **500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


# **VerifyAuthorization**



### Example
```csharp
using System;
using System.Collections.Generic;
using System.Diagnostics;
using CsharpSplitit.Net.Client;
using CsharpSplitit.Net.Model;

namespace Example
{
    public class VerifyAuthorizationExample
    {
        public static void Main()
        {
            CsharpSplititClient client = new CsharpSplititClient();
            // Configure OAuth2 credentials for "application" OAuth flow
            client.SetOAuthClientId(System.Environment.GetEnvironmentVariable("CLIENT_ID"));
            client.SetOAuthClientSecret(System.Environment.GetEnvironmentVariable("CLIENT_SECRET"));

            var installmentPlanNumber = "installmentPlanNumber_example";
            var xSplititIdempotencyKey = "xSplititIdempotencyKey_example";
            var xSplititTouchPoint = ""; // TouchPoint (default to "")
            
            try
            {
                VerifyAuthorizationResponse result = client.InstallmentPlan.VerifyAuthorization(installmentPlanNumber, xSplititIdempotencyKey, xSplititTouchPoint);
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling InstallmentPlanApi.VerifyAuthorization: " + e.Message);
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

#### Using the VerifyAuthorizationWithHttpInfo variant
This returns an ApiResponse object which contains the response data, status code and headers.

```csharp
try
{
    ApiResponse<VerifyAuthorizationResponse> response = apiInstance.VerifyAuthorizationWithHttpInfo(installmentPlanNumber, xSplititIdempotencyKey, xSplititTouchPoint);
    Debug.Write("Status Code: " + response.StatusCode);
    Debug.Write("Response Headers: " + response.Headers);
    Debug.Write("Response Body: " + response.Data);
}
catch (ApiException e)
{
    Debug.Print("Exception when calling InstallmentPlanApi.VerifyAuthorizationWithHttpInfo: " + e.Message);
    Debug.Print("Status Code: " + e.ErrorCode);
    Debug.Print(e.StackTrace);
}
```

### Parameters

| Name | Type | Description | Notes |
|------|------|-------------|-------|
| **installmentPlanNumber** | **string** |  |  |
| **xSplititIdempotencyKey** | **string** |  |  |
| **xSplititTouchPoint** | **string** | TouchPoint | [default to &quot;&quot;] |

### Return type

[**VerifyAuthorizationResponse**](VerifyAuthorizationResponse.md)


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **401** |  |  -  |
| **403** |  |  -  |
| **404** |  |  -  |
| **500** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

