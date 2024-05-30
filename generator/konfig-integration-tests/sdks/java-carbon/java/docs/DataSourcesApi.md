# DataSourcesApi

All URIs are relative to *https://api.carbon.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**queryUserDataSources**](DataSourcesApi.md#queryUserDataSources) | **POST** /user_data_sources | User Data Sources |
| [**revokeAccessToken**](DataSourcesApi.md#revokeAccessToken) | **POST** /revoke_access_token | Revoke Access Token |


<a name="queryUserDataSources"></a>
# **queryUserDataSources**
> OrganizationUserDataSourceResponse queryUserDataSources(organizationUserDataSourceQueryInput).execute();

User Data Sources

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.DataSourcesApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.carbon.ai";
    
    configuration.accessToken  = "YOUR API KEY";
    
    configuration.apiKey  = "YOUR API KEY";
    
    configuration.customerId  = "YOUR API KEY";
    Carbon client = new Carbon(configuration);
    Pagination pagination = new Pagination();
    OrganizationUserDataSourceOrderByColumns orderBy = OrganizationUserDataSourceOrderByColumns.fromValue("created_at");
    OrderDir orderDir = OrderDir.fromValue("desc");
    OrganizationUserDataSourceFilters filters = new OrganizationUserDataSourceFilters();
    try {
      OrganizationUserDataSourceResponse result = client
              .dataSources
              .queryUserDataSources()
              .pagination(pagination)
              .orderBy(orderBy)
              .orderDir(orderDir)
              .filters(filters)
              .execute();
      System.out.println(result);
      System.out.println(result.getResults());
      System.out.println(result.getCount());
    } catch (ApiException e) {
      System.err.println("Exception when calling DataSourcesApi#queryUserDataSources");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<OrganizationUserDataSourceResponse> response = client
              .dataSources
              .queryUserDataSources()
              .pagination(pagination)
              .orderBy(orderBy)
              .orderDir(orderDir)
              .filters(filters)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling DataSourcesApi#queryUserDataSources");
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
| **organizationUserDataSourceQueryInput** | [**OrganizationUserDataSourceQueryInput**](OrganizationUserDataSourceQueryInput.md)|  | |

### Return type

[**OrganizationUserDataSourceResponse**](OrganizationUserDataSourceResponse.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="revokeAccessToken"></a>
# **revokeAccessToken**
> GenericSuccessResponse revokeAccessToken(revokeAccessTokenInput).execute();

Revoke Access Token

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.DataSourcesApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.carbon.ai";
    
    configuration.accessToken  = "YOUR API KEY";
    
    configuration.apiKey  = "YOUR API KEY";
    
    configuration.customerId  = "YOUR API KEY";
    Carbon client = new Carbon(configuration);
    Integer dataSourceId = 56;
    try {
      GenericSuccessResponse result = client
              .dataSources
              .revokeAccessToken(dataSourceId)
              .execute();
      System.out.println(result);
      System.out.println(result.getSuccess());
    } catch (ApiException e) {
      System.err.println("Exception when calling DataSourcesApi#revokeAccessToken");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<GenericSuccessResponse> response = client
              .dataSources
              .revokeAccessToken(dataSourceId)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling DataSourcesApi#revokeAccessToken");
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
| **revokeAccessTokenInput** | [**RevokeAccessTokenInput**](RevokeAccessTokenInput.md)|  | |

### Return type

[**GenericSuccessResponse**](GenericSuccessResponse.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

