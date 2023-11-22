# TestApi

All URIs are relative to *https://java-merge-anyof-object-schemas.konfigthis.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**fetch**](TestApi.md#fetch) | **GET** /simple-endpoint | Fetches a JSON value based on input parameter |
| [**mergeDifferent**](TestApi.md#mergeDifferent) | **GET** /merge-different | merge different |
| [**mergeSame**](TestApi.md#mergeSame) | **GET** /merge-same | merge same |


<a name="fetch"></a>
# **fetch**
> ABC fetch().execute();

Fetches a JSON value based on input parameter

Provide an input parameter to receive a JSON value with properties.

### Example
```java
import com.konfigthis.javamergeanyofobjectschemas.client.ApiClient;
import com.konfigthis.javamergeanyofobjectschemas.client.ApiException;
import com.konfigthis.javamergeanyofobjectschemas.client.ApiResponse;
import com.konfigthis.javamergeanyofobjectschemas.client.JavaMergeAnyofObjectSchemasClient;
import com.konfigthis.javamergeanyofobjectschemas.client.Configuration;
import com.konfigthis.javamergeanyofobjectschemas.client.auth.*;
import com.konfigthis.javamergeanyofobjectschemas.client.model.*;
import com.konfigthis.javamergeanyofobjectschemas.client.api.TestApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://java-merge-anyof-object-schemas.konfigthis.com";
    
    configuration.apiKey  = "YOUR API KEY";
    JavaMergeAnyofObjectSchemasClient client = new JavaMergeAnyofObjectSchemasClient(configuration);
    try {
      ABC result = client
              .test
              .fetch()
              .execute();
      System.out.println(result);
      System.out.println(result.getA());
      System.out.println(result.getB());
      System.out.println(result.getC());
    } catch (ApiException e) {
      System.err.println("Exception when calling TestApi#fetch");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<ABC> response = client
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

[**ABC**](ABC.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a name="mergeDifferent"></a>
# **mergeDifferent**
> A1 mergeDifferent().execute();

merge different

merge different

### Example
```java
import com.konfigthis.javamergeanyofobjectschemas.client.ApiClient;
import com.konfigthis.javamergeanyofobjectschemas.client.ApiException;
import com.konfigthis.javamergeanyofobjectschemas.client.ApiResponse;
import com.konfigthis.javamergeanyofobjectschemas.client.JavaMergeAnyofObjectSchemasClient;
import com.konfigthis.javamergeanyofobjectschemas.client.Configuration;
import com.konfigthis.javamergeanyofobjectschemas.client.auth.*;
import com.konfigthis.javamergeanyofobjectschemas.client.model.*;
import com.konfigthis.javamergeanyofobjectschemas.client.api.TestApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://java-merge-anyof-object-schemas.konfigthis.com";
    
    configuration.apiKey  = "YOUR API KEY";
    JavaMergeAnyofObjectSchemasClient client = new JavaMergeAnyofObjectSchemasClient(configuration);
    try {
      A1 result = client
              .test
              .mergeDifferent()
              .execute();
      System.out.println(result);
      System.out.println(result.getA());
      System.out.println(result.getB());
      System.out.println(result.getC());
    } catch (ApiException e) {
      System.err.println("Exception when calling TestApi#mergeDifferent");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<A1> response = client
              .test
              .mergeDifferent()
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling TestApi#mergeDifferent");
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

[**A1**](A1.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

<a name="mergeSame"></a>
# **mergeSame**
> B1 mergeSame().execute();

merge same

merge same

### Example
```java
import com.konfigthis.javamergeanyofobjectschemas.client.ApiClient;
import com.konfigthis.javamergeanyofobjectschemas.client.ApiException;
import com.konfigthis.javamergeanyofobjectschemas.client.ApiResponse;
import com.konfigthis.javamergeanyofobjectschemas.client.JavaMergeAnyofObjectSchemasClient;
import com.konfigthis.javamergeanyofobjectschemas.client.Configuration;
import com.konfigthis.javamergeanyofobjectschemas.client.auth.*;
import com.konfigthis.javamergeanyofobjectschemas.client.model.*;
import com.konfigthis.javamergeanyofobjectschemas.client.api.TestApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://java-merge-anyof-object-schemas.konfigthis.com";
    
    configuration.apiKey  = "YOUR API KEY";
    JavaMergeAnyofObjectSchemasClient client = new JavaMergeAnyofObjectSchemasClient(configuration);
    try {
      B1 result = client
              .test
              .mergeSame()
              .execute();
      System.out.println(result);
      System.out.println(result.getB());
    } catch (ApiException e) {
      System.err.println("Exception when calling TestApi#mergeSame");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<B1> response = client
              .test
              .mergeSame()
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling TestApi#mergeSame");
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

[**B1**](B1.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful response |  -  |

