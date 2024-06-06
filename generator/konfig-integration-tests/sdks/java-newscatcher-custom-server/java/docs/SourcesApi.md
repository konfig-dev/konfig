# SourcesApi

All URIs are relative to *https://v3-api.newscatcherapi.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**get**](SourcesApi.md#get) | **GET** /api/sources | [Get] Search For Sources Request |
| [**post**](SourcesApi.md#post) | **POST** /api/sources | [Post] Search For Sources Request |


<a name="get"></a>
# **get**
> SourceResponse get().lang(lang).countries(countries).predefinedSources(predefinedSources).includeAdditionalInfo(includeAdditionalInfo).fromRank(fromRank).toRank(toRank).sourceName(sourceName).sourceUrl(sourceUrl).execute();

[Get] Search For Sources Request

This endpoint allows you to get the list of sources that are available in the database. You can filter the sources by language and country. The maximum number of sources displayed is set according to your plan. You can find the list of plans and their features here: https://newscatcherapi.com/news-api#news-api-pricing

### Example
```java
import com.konfigthis.newscatcherapi.client.ApiClient;
import com.konfigthis.newscatcherapi.client.ApiException;
import com.konfigthis.newscatcherapi.client.ApiResponse;
import com.konfigthis.newscatcherapi.client.Newscatcher;
import com.konfigthis.newscatcherapi.client.Configuration;
import com.konfigthis.newscatcherapi.client.auth.*;
import com.konfigthis.newscatcherapi.client.model.*;
import com.konfigthis.newscatcherapi.client.api.SourcesApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://v3-api.newscatcherapi.com";
    
    configuration.apiKey  = "YOUR API KEY";
    Newscatcher client = new Newscatcher(configuration);
    String lang = "lang_example";
    String countries = "countries_example";
    String predefinedSources = "predefinedSources_example";
    Boolean includeAdditionalInfo = true;
    Integer fromRank = 56;
    Integer toRank = 56;
    Object sourceName = null;
    String sourceUrl = "sourceUrl_example";
    try {
      SourceResponse result = client
              .sources
              .get()
              .lang(lang)
              .countries(countries)
              .predefinedSources(predefinedSources)
              .includeAdditionalInfo(includeAdditionalInfo)
              .fromRank(fromRank)
              .toRank(toRank)
              .sourceName(sourceName)
              .sourceUrl(sourceUrl)
              .execute();
      System.out.println(result);
      System.out.println(result.getMessage());
      System.out.println(result.getSources());
      System.out.println(result.getUserInput());
    } catch (ApiException e) {
      System.err.println("Exception when calling SourcesApi#get");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<SourceResponse> response = client
              .sources
              .get()
              .lang(lang)
              .countries(countries)
              .predefinedSources(predefinedSources)
              .includeAdditionalInfo(includeAdditionalInfo)
              .fromRank(fromRank)
              .toRank(toRank)
              .sourceName(sourceName)
              .sourceUrl(sourceUrl)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling SourcesApi#get");
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
| **lang** | **String**|  | [optional] |
| **countries** | **String**|  | [optional] |
| **predefinedSources** | **String**|  | [optional] |
| **includeAdditionalInfo** | **Boolean**|  | [optional] |
| **fromRank** | **Integer**|  | [optional] |
| **toRank** | **Integer**|  | [optional] |
| **sourceName** | [**Object**](.md)|  | [optional] |
| **sourceUrl** | **String**|  | [optional] |

### Return type

[**SourceResponse**](SourceResponse.md)

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
> SourceResponse post(sourcesRequest).execute();

[Post] Search For Sources Request

This endpoint allows you to get the list of sources that are available in the database. You can filter the sources by language and country. The maximum number of sources displayed is set according to your plan. You can find the list of plans and their features here: https://newscatcherapi.com/news-api#news-api-pricing

### Example
```java
import com.konfigthis.newscatcherapi.client.ApiClient;
import com.konfigthis.newscatcherapi.client.ApiException;
import com.konfigthis.newscatcherapi.client.ApiResponse;
import com.konfigthis.newscatcherapi.client.Newscatcher;
import com.konfigthis.newscatcherapi.client.Configuration;
import com.konfigthis.newscatcherapi.client.auth.*;
import com.konfigthis.newscatcherapi.client.model.*;
import com.konfigthis.newscatcherapi.client.api.SourcesApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://v3-api.newscatcherapi.com";
    
    configuration.apiKey  = "YOUR API KEY";
    Newscatcher client = new Newscatcher(configuration);
    String lang = "lang_example";
    String countries = "countries_example";
    String predefinedSources = "predefinedSources_example";
    Boolean includeAdditionalInfo = true;
    Integer fromRank = 56;
    Integer toRank = 56;
    Object sourceName = null;
    String sourceUrl = "sourceUrl_example";
    try {
      SourceResponse result = client
              .sources
              .post()
              .lang(lang)
              .countries(countries)
              .predefinedSources(predefinedSources)
              .includeAdditionalInfo(includeAdditionalInfo)
              .fromRank(fromRank)
              .toRank(toRank)
              .sourceName(sourceName)
              .sourceUrl(sourceUrl)
              .execute();
      System.out.println(result);
      System.out.println(result.getMessage());
      System.out.println(result.getSources());
      System.out.println(result.getUserInput());
    } catch (ApiException e) {
      System.err.println("Exception when calling SourcesApi#post");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<SourceResponse> response = client
              .sources
              .post()
              .lang(lang)
              .countries(countries)
              .predefinedSources(predefinedSources)
              .includeAdditionalInfo(includeAdditionalInfo)
              .fromRank(fromRank)
              .toRank(toRank)
              .sourceName(sourceName)
              .sourceUrl(sourceUrl)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling SourcesApi#post");
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
| **sourcesRequest** | [**SourcesRequest**](SourcesRequest.md)|  | |

### Return type

[**SourceResponse**](SourceResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

