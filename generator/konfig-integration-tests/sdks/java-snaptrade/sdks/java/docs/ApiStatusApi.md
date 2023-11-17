# ApiStatusApi

All URIs are relative to *https://api.snaptrade.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**check**](ApiStatusApi.md#check) | **GET** / | Get API Status |


<a name="check"></a>
# **check**
> Status check().execute();

Get API Status

Check whether the API is operational and verify timestamps.

### Example
```java
import com.konfigthis.client.ApiClient;
import com.konfigthis.client.ApiException;
import com.konfigthis.client.ApiResponse;
import com.konfigthis.client.Snaptrade;
import com.konfigthis.client.Configuration;
import com.konfigthis.client.model.*;
import com.konfigthis.client.api.ApiStatusApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.snaptrade.com/api/v1";
        configuration.clientId = System.getenv("SNAPTRADE_CLIENT_ID");
        configuration.consumerKey = System.getenv("SNAPTRADE_CONSUMER_KEY");
    
    Snaptrade client = new Snaptrade(configuration);
    try {
      Status result = client
              .apiStatus
              .check()
              .execute();
      System.out.println(result);
      System.out.println(result.getVersion());
      System.out.println(result.getTimestamp());
      System.out.println(result.getOnline());
    } catch (ApiException e) {
      System.err.println("Exception when calling ApiStatusApi#check");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<Status> response = client
              .apiStatus
              .check()
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling ApiStatusApi#check");
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

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | API is alive and kicking in some fashion |  -  |
| **0** | Unexpected error. |  -  |

