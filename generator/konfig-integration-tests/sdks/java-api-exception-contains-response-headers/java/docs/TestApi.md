# TestApi

All URIs are relative to *https://java-api-exception-contains-response-headers.konfigthis.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**fetch**](TestApi.md#fetch) | **GET** /simple-endpoint | Fetches a JSON value based on input parameter |


<a name="fetch"></a>
# **fetch**
> fetch().execute();

Fetches a JSON value based on input parameter

Provide an input parameter to receive a JSON value with properties.

### Example
```java
import com.konfigthis.javaapiexceptioncontainsresponseheaders.client.ApiClient;
import com.konfigthis.javaapiexceptioncontainsresponseheaders.client.ApiException;
import com.konfigthis.javaapiexceptioncontainsresponseheaders.client.ApiResponse;
import com.konfigthis.javaapiexceptioncontainsresponseheaders.client.JavaApiExceptionContainsResponseHeadersClient;
import com.konfigthis.javaapiexceptioncontainsresponseheaders.client.Configuration;
import com.konfigthis.javaapiexceptioncontainsresponseheaders.client.auth.*;
import com.konfigthis.javaapiexceptioncontainsresponseheaders.client.model.*;
import com.konfigthis.javaapiexceptioncontainsresponseheaders.client.api.TestApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://java-api-exception-contains-response-headers.konfigthis.com";
    
    configuration.apiKey  = "YOUR API KEY";
    JavaApiExceptionContainsResponseHeadersClient client = new JavaApiExceptionContainsResponseHeadersClient(configuration);
    try {
      client
              .test
              .fetch()
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
      client
              .test
              .fetch()
              .executeWithHttpInfo();
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

null (empty response body)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


