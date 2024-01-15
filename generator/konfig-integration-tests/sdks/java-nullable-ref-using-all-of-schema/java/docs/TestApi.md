# TestApi

All URIs are relative to *https://java-nullable-ref-using-all-of-schema.konfigthis.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**fetch**](TestApi.md#fetch) | **GET** /simple-endpoint | Fetches a JSON value based on input parameter |


<a name="fetch"></a>
# **fetch**
> Object fetch().testFetchRequestWithAllOf(testFetchRequestWithAllOf).execute();

Fetches a JSON value based on input parameter

Provide an input parameter to receive a JSON value with properties.

### Example
```java
import com.konfigthis.javanullablerefusingallofschema.client.ApiClient;
import com.konfigthis.javanullablerefusingallofschema.client.ApiException;
import com.konfigthis.javanullablerefusingallofschema.client.ApiResponse;
import com.konfigthis.javanullablerefusingallofschema.client.JavaNullableRefUsingAllOfSchemaClient;
import com.konfigthis.javanullablerefusingallofschema.client.Configuration;
import com.konfigthis.javanullablerefusingallofschema.client.auth.*;
import com.konfigthis.javanullablerefusingallofschema.client.model.*;
import com.konfigthis.javanullablerefusingallofschema.client.api.TestApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://java-nullable-ref-using-all-of-schema.konfigthis.com";
    
    configuration.apiKey  = "YOUR API KEY";
    JavaNullableRefUsingAllOfSchemaClient client = new JavaNullableRefUsingAllOfSchemaClient(configuration);
    Double input = 3.4D;
    try {
      Object result = client
              .test
              .fetch()
              .input(input)
              .execute();
    } catch (ApiException e) {
      System.err.println("Exception when calling TestApi#fetch");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<Object> response = client
              .test
              .fetch()
              .input(input)
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

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **testFetchRequestWithAllOf** | [**TestFetchRequestWithAllOf**](TestFetchRequestWithAllOf.md)|  | [optional] |

### Return type

**Object**

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

