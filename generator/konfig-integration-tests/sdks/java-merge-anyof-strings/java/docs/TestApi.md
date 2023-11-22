# TestApi

All URIs are relative to *https://java-merge-anyof-strings.konfigthis.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**fetch**](TestApi.md#fetch) | **GET** /simple-endpoint | Fetches a JSON value based on input parameter |


<a name="fetch"></a>
# **fetch**
> TestFetchResponse fetch().execute();

Fetches a JSON value based on input parameter

Provide an input parameter to receive a JSON value with properties.

### Example
```java
import com.konfigthis.javamergeanyofstrings.client.ApiClient;
import com.konfigthis.javamergeanyofstrings.client.ApiException;
import com.konfigthis.javamergeanyofstrings.client.ApiResponse;
import com.konfigthis.javamergeanyofstrings.client.JavaMergeAnyofStringsClient;
import com.konfigthis.javamergeanyofstrings.client.Configuration;
import com.konfigthis.javamergeanyofstrings.client.auth.*;
import com.konfigthis.javamergeanyofstrings.client.model.*;
import com.konfigthis.javamergeanyofstrings.client.api.TestApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://java-merge-anyof-strings.konfigthis.com";
    
    configuration.apiKey  = "YOUR API KEY";
    JavaMergeAnyofStringsClient client = new JavaMergeAnyofStringsClient(configuration);
    try {
      TestFetchResponse result = client
              .test
              .fetch()
              .execute();
      System.out.println(result);
      System.out.println(result.getValue());
    } catch (ApiException e) {
      System.err.println("Exception when calling TestApi#fetch");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<TestFetchResponse> response = client
              .test
              .fetch()
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling TestApi#fetch");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TestFetchResponse**](TestFetchResponse.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

