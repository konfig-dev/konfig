# TestApi

All URIs are relative to *https://java-use-schema-title-if-possible.konfigthis.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**fetch**](TestApi.md#fetch) | **GET** /simple-endpoint | Fetches a JSON value based on input parameter |


<a name="fetch"></a>
# **fetch**
> AB fetch().execute();

Fetches a JSON value based on input parameter

Provide an input parameter to receive a JSON value with properties.

### Example
```java
import com.konfigthis.javauseschematitleifpossible.client.ApiClient;
import com.konfigthis.javauseschematitleifpossible.client.ApiException;
import com.konfigthis.javauseschematitleifpossible.client.ApiResponse;
import com.konfigthis.javauseschematitleifpossible.client.JavaUseSchemaTitleIfPossibleClient;
import com.konfigthis.javauseschematitleifpossible.client.Configuration;
import com.konfigthis.javauseschematitleifpossible.client.auth.*;
import com.konfigthis.javauseschematitleifpossible.client.model.*;
import com.konfigthis.javauseschematitleifpossible.client.api.TestApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://java-use-schema-title-if-possible.konfigthis.com";
    
    configuration.apiKey  = "YOUR API KEY";
    JavaUseSchemaTitleIfPossibleClient client = new JavaUseSchemaTitleIfPossibleClient(configuration);
    try {
      AB result = client
              .test
              .fetch()
              .execute();
      System.out.println(result);
      System.out.println(result.getA());
      System.out.println(result.getB());
    } catch (ApiException e) {
      System.err.println("Exception when calling TestApi#fetch");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<AB> response = client
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

[**AB**](AB.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

