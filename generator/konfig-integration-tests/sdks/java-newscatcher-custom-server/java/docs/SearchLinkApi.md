# SearchLinkApi

All URIs are relative to *https://v3-api.newscatcherapi.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**get**](SearchLinkApi.md#get) | **GET** /api/search_by_link | [Get] Search For Articles By Id Or Link |
| [**post**](SearchLinkApi.md#post) | **POST** /api/search_by_link | [Post] Search For Articles Request |


<a name="get"></a>
# **get**
> DtoResponsesSearchResponseSearchResponse get().ids(ids).links(links).page(page).pageSize(pageSize).execute();

[Get] Search For Articles By Id Or Link

This endpoint allows you to search for articles. You can search for articles by id(s) or link(s).

### Example
```java
import com.konfigthis.newscatcherapi.client.ApiClient;
import com.konfigthis.newscatcherapi.client.ApiException;
import com.konfigthis.newscatcherapi.client.ApiResponse;
import com.konfigthis.newscatcherapi.client.Newscatcher;
import com.konfigthis.newscatcherapi.client.Configuration;
import com.konfigthis.newscatcherapi.client.auth.*;
import com.konfigthis.newscatcherapi.client.model.*;
import com.konfigthis.newscatcherapi.client.api.SearchLinkApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://v3-api.newscatcherapi.com";
    
    configuration.apiKey  = "YOUR API KEY";
    Newscatcher client = new Newscatcher(configuration);
    Object ids = null;
    Object links = null;
    Integer page = 1;
    Integer pageSize = 100;
    try {
      DtoResponsesSearchResponseSearchResponse result = client
              .searchLink
              .get()
              .ids(ids)
              .links(links)
              .page(page)
              .pageSize(pageSize)
              .execute();
      System.out.println(result);
      System.out.println(result.getStatus());
      System.out.println(result.getTotalHits());
      System.out.println(result.getPage());
      System.out.println(result.getTotalPages());
      System.out.println(result.getPageSize());
      System.out.println(result.getArticles());
      System.out.println(result.getUserInput());
      System.out.println(result.getClustersCount());
      System.out.println(result.getClusters());
    } catch (ApiException e) {
      System.err.println("Exception when calling SearchLinkApi#get");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<DtoResponsesSearchResponseSearchResponse> response = client
              .searchLink
              .get()
              .ids(ids)
              .links(links)
              .page(page)
              .pageSize(pageSize)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling SearchLinkApi#get");
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
| **ids** | [**Object**](.md)|  | [optional] |
| **links** | [**Object**](.md)|  | [optional] |
| **page** | **Integer**|  | [optional] [default to 1] |
| **pageSize** | **Integer**|  | [optional] [default to 100] |

### Return type

[**DtoResponsesSearchResponseSearchResponse**](DtoResponsesSearchResponseSearchResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="post"></a>
# **post**
> DtoResponsesSearchResponseSearchResponse post(searchURLRequest).execute();

[Post] Search For Articles Request

This endpoint allows you to search for articles. You can search for articles by id(s) or link(s).

### Example
```java
import com.konfigthis.newscatcherapi.client.ApiClient;
import com.konfigthis.newscatcherapi.client.ApiException;
import com.konfigthis.newscatcherapi.client.ApiResponse;
import com.konfigthis.newscatcherapi.client.Newscatcher;
import com.konfigthis.newscatcherapi.client.Configuration;
import com.konfigthis.newscatcherapi.client.auth.*;
import com.konfigthis.newscatcherapi.client.model.*;
import com.konfigthis.newscatcherapi.client.api.SearchLinkApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://v3-api.newscatcherapi.com";
    
    configuration.apiKey  = "YOUR API KEY";
    Newscatcher client = new Newscatcher(configuration);
    Object ids = null;
    Object links = null;
    Integer page = 1;
    Integer pageSize = 100;
    try {
      DtoResponsesSearchResponseSearchResponse result = client
              .searchLink
              .post()
              .ids(ids)
              .links(links)
              .page(page)
              .pageSize(pageSize)
              .execute();
      System.out.println(result);
      System.out.println(result.getStatus());
      System.out.println(result.getTotalHits());
      System.out.println(result.getPage());
      System.out.println(result.getTotalPages());
      System.out.println(result.getPageSize());
      System.out.println(result.getArticles());
      System.out.println(result.getUserInput());
      System.out.println(result.getClustersCount());
      System.out.println(result.getClusters());
    } catch (ApiException e) {
      System.err.println("Exception when calling SearchLinkApi#post");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<DtoResponsesSearchResponseSearchResponse> response = client
              .searchLink
              .post()
              .ids(ids)
              .links(links)
              .page(page)
              .pageSize(pageSize)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling SearchLinkApi#post");
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
| **searchURLRequest** | [**SearchURLRequest**](SearchURLRequest.md)|  | |

### Return type

[**DtoResponsesSearchResponseSearchResponse**](DtoResponsesSearchResponseSearchResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

