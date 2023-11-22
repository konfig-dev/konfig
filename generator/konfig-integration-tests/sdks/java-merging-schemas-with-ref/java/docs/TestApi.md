# TestApi

All URIs are relative to *https://java-merging-schemas-with-ref.konfigthis.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**fetch**](TestApi.md#fetch) | **GET** /simple-endpoint | Fetches a JSON value based on input parameter |


<a name="fetch"></a>
# **fetch**
> AOrAA fetch().execute();

Fetches a JSON value based on input parameter

Provide an input parameter to receive a JSON value with properties.

### Example
```java
import com.konfigthis.javamergingschemaswithref.client.ApiClient;
import com.konfigthis.javamergingschemaswithref.client.ApiException;
import com.konfigthis.javamergingschemaswithref.client.ApiResponse;
import com.konfigthis.javamergingschemaswithref.client.JavaMergingSchemasWithRefClient;
import com.konfigthis.javamergingschemaswithref.client.Configuration;
import com.konfigthis.javamergingschemaswithref.client.auth.*;
import com.konfigthis.javamergingschemaswithref.client.model.*;
import com.konfigthis.javamergingschemaswithref.client.api.TestApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://java-merging-schemas-with-ref.konfigthis.com";
    
    configuration.apiKey  = "YOUR API KEY";
    JavaMergingSchemasWithRefClient client = new JavaMergingSchemasWithRefClient(configuration);
    try {
      AOrAA result = client
              .test
              .fetch()
              .execute();
      System.out.println(result);
      System.out.println(result.getA());
    } catch (ApiException e) {
      System.err.println("Exception when calling TestApi#fetch");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<AOrAA> response = client
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

[**AOrAA**](AOrAA.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

