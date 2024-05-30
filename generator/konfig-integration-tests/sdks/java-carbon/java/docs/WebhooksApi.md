# WebhooksApi

All URIs are relative to *https://api.carbon.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addUrl**](WebhooksApi.md#addUrl) | **POST** /add_webhook | Add Webhook Url |
| [**deleteUrl**](WebhooksApi.md#deleteUrl) | **DELETE** /delete_webhook/{webhook_id} | Delete Webhook Url |
| [**urls**](WebhooksApi.md#urls) | **POST** /webhooks | Webhook Urls |


<a name="addUrl"></a>
# **addUrl**
> Webhook addUrl(addWebhookProps).execute();

Add Webhook Url

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.WebhooksApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.carbon.ai";
    
    configuration.apiKey  = "YOUR API KEY";
    Carbon client = new Carbon(configuration);
    String url = "url_example";
    try {
      Webhook result = client
              .webhooks
              .addUrl(url)
              .execute();
      System.out.println(result);
      System.out.println(result.getId());
      System.out.println(result.getOrganizationId());
      System.out.println(result.getUrl());
      System.out.println(result.getSigningKey());
      System.out.println(result.getStatus());
      System.out.println(result.getStatusReason());
      System.out.println(result.getCreatedAt());
      System.out.println(result.getUpdatedAt());
    } catch (ApiException e) {
      System.err.println("Exception when calling WebhooksApi#addUrl");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<Webhook> response = client
              .webhooks
              .addUrl(url)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling WebhooksApi#addUrl");
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
| **addWebhookProps** | [**AddWebhookProps**](AddWebhookProps.md)|  | |

### Return type

[**Webhook**](Webhook.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="deleteUrl"></a>
# **deleteUrl**
> GenericSuccessResponse deleteUrl(webhookId).execute();

Delete Webhook Url

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.WebhooksApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.carbon.ai";
    
    configuration.apiKey  = "YOUR API KEY";
    Carbon client = new Carbon(configuration);
    Integer webhookId = 56;
    try {
      GenericSuccessResponse result = client
              .webhooks
              .deleteUrl(webhookId)
              .execute();
      System.out.println(result);
      System.out.println(result.getSuccess());
    } catch (ApiException e) {
      System.err.println("Exception when calling WebhooksApi#deleteUrl");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<GenericSuccessResponse> response = client
              .webhooks
              .deleteUrl(webhookId)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling WebhooksApi#deleteUrl");
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
| **webhookId** | **Integer**|  | |

### Return type

[**GenericSuccessResponse**](GenericSuccessResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="urls"></a>
# **urls**
> WebhookQueryResponse urls(webhookQueryInput).execute();

Webhook Urls

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.WebhooksApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.carbon.ai";
    
    configuration.apiKey  = "YOUR API KEY";
    Carbon client = new Carbon(configuration);
    Pagination pagination = new Pagination();
    WebhookOrderByColumns orderBy = WebhookOrderByColumns.fromValue("created_at");
    OrderDir orderDir = OrderDir.fromValue("desc");
    WebhookFilters filters = new WebhookFilters();
    try {
      WebhookQueryResponse result = client
              .webhooks
              .urls()
              .pagination(pagination)
              .orderBy(orderBy)
              .orderDir(orderDir)
              .filters(filters)
              .execute();
      System.out.println(result);
      System.out.println(result.getResults());
      System.out.println(result.getCount());
    } catch (ApiException e) {
      System.err.println("Exception when calling WebhooksApi#urls");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<WebhookQueryResponse> response = client
              .webhooks
              .urls()
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
      System.err.println("Exception when calling WebhooksApi#urls");
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
| **webhookQueryInput** | [**WebhookQueryInput**](WebhookQueryInput.md)|  | |

### Return type

[**WebhookQueryResponse**](WebhookQueryResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

