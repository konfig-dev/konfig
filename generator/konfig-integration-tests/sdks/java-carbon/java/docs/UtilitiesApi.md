# UtilitiesApi

All URIs are relative to *https://api.carbon.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**fetchUrls**](UtilitiesApi.md#fetchUrls) | **GET** /fetch_urls | Fetch Urls |
| [**fetchYoutubeTranscripts**](UtilitiesApi.md#fetchYoutubeTranscripts) | **GET** /fetch_youtube_transcript | Fetch Youtube Transcripts |
| [**processSitemap**](UtilitiesApi.md#processSitemap) | **GET** /process_sitemap | Sitemap |
| [**scrapeSitemap**](UtilitiesApi.md#scrapeSitemap) | **POST** /scrape_sitemap | Scrape Sitemap |
| [**scrapeWeb**](UtilitiesApi.md#scrapeWeb) | **POST** /web_scrape | Web Scrape |
| [**searchUrls**](UtilitiesApi.md#searchUrls) | **GET** /search_urls | Search Urls |


<a name="fetchUrls"></a>
# **fetchUrls**
> FetchURLsResponse fetchUrls(url).execute();

Fetch Urls

Extracts all URLs from a webpage.   Args:     url (str): URL of the webpage  Returns:     FetchURLsResponse: A response object with a list of URLs extracted from the webpage and the webpage content.

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.UtilitiesApi;
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
    String url = "url_example";
    try {
      FetchURLsResponse result = client
              .utilities
              .fetchUrls(url)
              .execute();
      System.out.println(result);
      System.out.println(result.getUrls());
      System.out.println(result.getHtmlContent());
      System.out.println(result.getErrorMessage());
    } catch (ApiException e) {
      System.err.println("Exception when calling UtilitiesApi#fetchUrls");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<FetchURLsResponse> response = client
              .utilities
              .fetchUrls(url)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling UtilitiesApi#fetchUrls");
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
| **url** | **String**|  | |

### Return type

[**FetchURLsResponse**](FetchURLsResponse.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="fetchYoutubeTranscripts"></a>
# **fetchYoutubeTranscripts**
> YoutubeTranscriptResponse fetchYoutubeTranscripts(id).raw(raw).execute();

Fetch Youtube Transcripts

Fetches english transcripts from YouTube videos.  Args:     id (str): The ID of the YouTube video.      raw (bool): Whether to return the raw transcript or not. Defaults to False.  Returns:     dict: A dictionary with the transcript of the YouTube video.

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.UtilitiesApi;
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
    String id = "id_example";
    Boolean raw = false;
    try {
      YoutubeTranscriptResponse result = client
              .utilities
              .fetchYoutubeTranscripts(id)
              .raw(raw)
              .execute();
      System.out.println(result);
      System.out.println(result.getStatus());
      System.out.println(result.getError());
      System.out.println(result.getData());
      System.out.println(result.getRawTranscript());
    } catch (ApiException e) {
      System.err.println("Exception when calling UtilitiesApi#fetchYoutubeTranscripts");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<YoutubeTranscriptResponse> response = client
              .utilities
              .fetchYoutubeTranscripts(id)
              .raw(raw)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling UtilitiesApi#fetchYoutubeTranscripts");
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
| **id** | **String**|  | |
| **raw** | **Boolean**|  | [optional] [default to false] |

### Return type

[**YoutubeTranscriptResponse**](YoutubeTranscriptResponse.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="processSitemap"></a>
# **processSitemap**
> Object processSitemap(url).execute();

Sitemap

Retrieves all URLs from a sitemap, which can subsequently be utilized with our &#x60;web_scrape&#x60; endpoint.  &lt;!--Args:     url (str): URL of the sitemap  Returns:     dict: A dictionary with a list of URLs extracted from the sitemap.--&gt;

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.UtilitiesApi;
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
    String url = "url_example";
    try {
      Object result = client
              .utilities
              .processSitemap(url)
              .execute();
    } catch (ApiException e) {
      System.err.println("Exception when calling UtilitiesApi#processSitemap");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<Object> response = client
              .utilities
              .processSitemap(url)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling UtilitiesApi#processSitemap");
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
| **url** | **String**|  | |

### Return type

**Object**

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="scrapeSitemap"></a>
# **scrapeSitemap**
> Object scrapeSitemap(sitemapScrapeRequest).execute();

Scrape Sitemap

Extracts all URLs from a sitemap and performs a web scrape on each of them.  Args:     sitemap_url (str): URL of the sitemap  Returns:     dict: A response object with the status of the scraping job message.--&gt;

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.UtilitiesApi;
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
    String url = "url_example";
    Map<String, Object> tags = new HashMap();
    Integer maxPagesToScrape = 56;
    Integer chunkSize = 1500;
    Integer chunkOverlap = 20;
    Boolean skipEmbeddingGeneration = false;
    Boolean enableAutoSync = false;
    Boolean generateSparseVectors = false;
    Boolean prependFilenameToChunks = false;
    List<String> htmlTagsToSkip = Arrays.asList();
    List<String> cssClassesToSkip = Arrays.asList();
    List<String> cssSelectorsToSkip = Arrays.asList();
    EmbeddingGenerators embeddingModel = EmbeddingGenerators.fromValue("OPENAI");
    try {
      Object result = client
              .utilities
              .scrapeSitemap(url)
              .tags(tags)
              .maxPagesToScrape(maxPagesToScrape)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .skipEmbeddingGeneration(skipEmbeddingGeneration)
              .enableAutoSync(enableAutoSync)
              .generateSparseVectors(generateSparseVectors)
              .prependFilenameToChunks(prependFilenameToChunks)
              .htmlTagsToSkip(htmlTagsToSkip)
              .cssClassesToSkip(cssClassesToSkip)
              .cssSelectorsToSkip(cssSelectorsToSkip)
              .embeddingModel(embeddingModel)
              .execute();
    } catch (ApiException e) {
      System.err.println("Exception when calling UtilitiesApi#scrapeSitemap");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<Object> response = client
              .utilities
              .scrapeSitemap(url)
              .tags(tags)
              .maxPagesToScrape(maxPagesToScrape)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .skipEmbeddingGeneration(skipEmbeddingGeneration)
              .enableAutoSync(enableAutoSync)
              .generateSparseVectors(generateSparseVectors)
              .prependFilenameToChunks(prependFilenameToChunks)
              .htmlTagsToSkip(htmlTagsToSkip)
              .cssClassesToSkip(cssClassesToSkip)
              .cssSelectorsToSkip(cssSelectorsToSkip)
              .embeddingModel(embeddingModel)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling UtilitiesApi#scrapeSitemap");
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
| **sitemapScrapeRequest** | [**SitemapScrapeRequest**](SitemapScrapeRequest.md)|  | |

### Return type

**Object**

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="scrapeWeb"></a>
# **scrapeWeb**
> Object scrapeWeb(webscrapeRequest).execute();

Web Scrape

Conduct a web scrape on a given webpage URL. Our web scraper is fully compatible with JavaScript and supports recursion depth, enabling you to efficiently extract all content from the target website.  &lt;!--Args:     scraping_requests (List[WebscrapeRequest]): A list of WebscrapeRequest objects.       Returns:     dict: A response object with the status of the scraping job message.--&gt;

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.UtilitiesApi;
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
    try {
      Object result = client
              .utilities
              .scrapeWeb()
              .execute();
    } catch (ApiException e) {
      System.err.println("Exception when calling UtilitiesApi#scrapeWeb");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<Object> response = client
              .utilities
              .scrapeWeb()
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling UtilitiesApi#scrapeWeb");
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
| **webscrapeRequest** | [**List&lt;WebscrapeRequest&gt;**](WebscrapeRequest.md)|  | |

### Return type

**Object**

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="searchUrls"></a>
# **searchUrls**
> FetchURLsResponse searchUrls(query).execute();

Search Urls

Perform a web search and obtain a list of relevant URLs.  As an illustration, when you perform a search for “content related to MRNA,” you will receive a list of links such as the following:      - https://tomrenz.substack.com/p/mrna-and-why-it-matters      - https://www.statnews.com/2020/11/10/the-story-of-mrna-how-a-once-dismissed-idea-became-a-leading-technology-in-the-covid-vaccine-race/      - https://www.statnews.com/2022/11/16/covid-19-vaccines-were-a-success-but-mrna-still-has-a-delivery-problem/          - https://joomi.substack.com/p/were-still-being-misled-about-how  Subsequently, you can submit these links to the web_scrape endpoint in order to retrieve the content of the respective web pages.  Args:     query (str): Query to search for  Returns:     FetchURLsResponse: A response object with a list of URLs for a given search query.

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.UtilitiesApi;
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
    String query = "query_example";
    try {
      FetchURLsResponse result = client
              .utilities
              .searchUrls(query)
              .execute();
      System.out.println(result);
      System.out.println(result.getUrls());
      System.out.println(result.getHtmlContent());
      System.out.println(result.getErrorMessage());
    } catch (ApiException e) {
      System.err.println("Exception when calling UtilitiesApi#searchUrls");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<FetchURLsResponse> response = client
              .utilities
              .searchUrls(query)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling UtilitiesApi#searchUrls");
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
| **query** | **String**|  | |

### Return type

[**FetchURLsResponse**](FetchURLsResponse.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

