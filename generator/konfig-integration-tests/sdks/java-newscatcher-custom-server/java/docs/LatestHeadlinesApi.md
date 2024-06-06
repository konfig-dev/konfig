# LatestHeadlinesApi

All URIs are relative to *https://v3-api.newscatcherapi.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**get**](LatestHeadlinesApi.md#get) | **GET** /api/latest_headlines | [Get] Search For Latest Headlines Request |
| [**post**](LatestHeadlinesApi.md#post) | **POST** /api/latest_headlines | [Post] Search For Latest Headlines Request |


<a name="get"></a>
# **get**
> CSLHResponse get().when(when).byParseDate(byParseDate).lang(lang).notLang(notLang).countries(countries).notCountries(notCountries).sources(sources).predefinedSources(predefinedSources).notSources(notSources).notAuthorName(notAuthorName).rankedOnly(rankedOnly).isHeadline(isHeadline).isOpinion(isOpinion).isPaidContent(isPaidContent).parentUrl(parentUrl).allLinks(allLinks).allDomainLinks(allDomainLinks).wordCountMin(wordCountMin).wordCountMax(wordCountMax).page(page).pageSize(pageSize).clusteringVariable(clusteringVariable).clusteringEnabled(clusteringEnabled).clusteringThreshold(clusteringThreshold).includeNlpData(includeNlpData).hasNlp(hasNlp).theme(theme).notTheme(notTheme).orGEntityName(orGEntityName).peREntityName(peREntityName).loCEntityName(loCEntityName).miSCEntityName(miSCEntityName).titleSentimentMin(titleSentimentMin).titleSentimentMax(titleSentimentMax).contentSentimentMin(contentSentimentMin).contentSentimentMax(contentSentimentMax).iptcTags(iptcTags).notIptcTags(notIptcTags).iabTags(iabTags).notIabTags(notIabTags).execute();

[Get] Search For Latest Headlines Request

This endpoint allows you to get latest headlines. You need to specify since when you want to get the latest headlines. You can also filter by language, country, source, and more.

### Example
```java
import com.konfigthis.newscatcherapi.client.ApiClient;
import com.konfigthis.newscatcherapi.client.ApiException;
import com.konfigthis.newscatcherapi.client.ApiResponse;
import com.konfigthis.newscatcherapi.client.Newscatcher;
import com.konfigthis.newscatcherapi.client.Configuration;
import com.konfigthis.newscatcherapi.client.auth.*;
import com.konfigthis.newscatcherapi.client.model.*;
import com.konfigthis.newscatcherapi.client.api.LatestHeadlinesApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://v3-api.newscatcherapi.com";
    
    configuration.apiKey  = "YOUR API KEY";
    Newscatcher client = new Newscatcher(configuration);
    String when = "7d";
    Boolean byParseDate = false;
    Object lang = null;
    Object notLang = null;
    Object countries = null;
    Object notCountries = null;
    Object sources = null;
    Object predefinedSources = null;
    Object notSources = null;
    Object notAuthorName = null;
    String rankedOnly = "rankedOnly_example";
    Boolean isHeadline = true;
    Boolean isOpinion = true;
    Boolean isPaidContent = true;
    Object parentUrl = null;
    Object allLinks = null;
    Object allDomainLinks = null;
    Integer wordCountMin = 56;
    Integer wordCountMax = 56;
    Integer page = 1;
    Integer pageSize = 100;
    String clusteringVariable = "clusteringVariable_example";
    Boolean clusteringEnabled = true;
    Double clusteringThreshold = 3.4D;
    Boolean includeNlpData = true;
    Boolean hasNlp = true;
    String theme = "theme_example";
    String notTheme = "notTheme_example";
    String orGEntityName = "orGEntityName_example";
    String peREntityName = "peREntityName_example";
    String loCEntityName = "loCEntityName_example";
    String miSCEntityName = "miSCEntityName_example";
    Double titleSentimentMin = 3.4D;
    Double titleSentimentMax = 3.4D;
    Double contentSentimentMin = 3.4D;
    Double contentSentimentMax = 3.4D;
    Object iptcTags = null;
    Object notIptcTags = null;
    Object iabTags = null;
    Object notIabTags = null;
    try {
      CSLHResponse result = client
              .latestHeadlines
              .get()
              .when(when)
              .byParseDate(byParseDate)
              .lang(lang)
              .notLang(notLang)
              .countries(countries)
              .notCountries(notCountries)
              .sources(sources)
              .predefinedSources(predefinedSources)
              .notSources(notSources)
              .notAuthorName(notAuthorName)
              .rankedOnly(rankedOnly)
              .isHeadline(isHeadline)
              .isOpinion(isOpinion)
              .isPaidContent(isPaidContent)
              .parentUrl(parentUrl)
              .allLinks(allLinks)
              .allDomainLinks(allDomainLinks)
              .wordCountMin(wordCountMin)
              .wordCountMax(wordCountMax)
              .page(page)
              .pageSize(pageSize)
              .clusteringVariable(clusteringVariable)
              .clusteringEnabled(clusteringEnabled)
              .clusteringThreshold(clusteringThreshold)
              .includeNlpData(includeNlpData)
              .hasNlp(hasNlp)
              .theme(theme)
              .notTheme(notTheme)
              .orGEntityName(orGEntityName)
              .peREntityName(peREntityName)
              .loCEntityName(loCEntityName)
              .miSCEntityName(miSCEntityName)
              .titleSentimentMin(titleSentimentMin)
              .titleSentimentMax(titleSentimentMax)
              .contentSentimentMin(contentSentimentMin)
              .contentSentimentMax(contentSentimentMax)
              .iptcTags(iptcTags)
              .notIptcTags(notIptcTags)
              .iabTags(iabTags)
              .notIabTags(notIabTags)
              .execute();
      System.out.println(result);
      System.out.println(result.getStatus());
      System.out.println(result.getTotalHits());
      System.out.println(result.getPage());
      System.out.println(result.getTotalPages());
      System.out.println(result.getPageSize());
      System.out.println(result.getClustersCount());
      System.out.println(result.getClusters());
      System.out.println(result.getUserInput());
      System.out.println(result.getArticles());
    } catch (ApiException e) {
      System.err.println("Exception when calling LatestHeadlinesApi#get");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<CSLHResponse> response = client
              .latestHeadlines
              .get()
              .when(when)
              .byParseDate(byParseDate)
              .lang(lang)
              .notLang(notLang)
              .countries(countries)
              .notCountries(notCountries)
              .sources(sources)
              .predefinedSources(predefinedSources)
              .notSources(notSources)
              .notAuthorName(notAuthorName)
              .rankedOnly(rankedOnly)
              .isHeadline(isHeadline)
              .isOpinion(isOpinion)
              .isPaidContent(isPaidContent)
              .parentUrl(parentUrl)
              .allLinks(allLinks)
              .allDomainLinks(allDomainLinks)
              .wordCountMin(wordCountMin)
              .wordCountMax(wordCountMax)
              .page(page)
              .pageSize(pageSize)
              .clusteringVariable(clusteringVariable)
              .clusteringEnabled(clusteringEnabled)
              .clusteringThreshold(clusteringThreshold)
              .includeNlpData(includeNlpData)
              .hasNlp(hasNlp)
              .theme(theme)
              .notTheme(notTheme)
              .orGEntityName(orGEntityName)
              .peREntityName(peREntityName)
              .loCEntityName(loCEntityName)
              .miSCEntityName(miSCEntityName)
              .titleSentimentMin(titleSentimentMin)
              .titleSentimentMax(titleSentimentMax)
              .contentSentimentMin(contentSentimentMin)
              .contentSentimentMax(contentSentimentMax)
              .iptcTags(iptcTags)
              .notIptcTags(notIptcTags)
              .iabTags(iabTags)
              .notIabTags(notIabTags)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling LatestHeadlinesApi#get");
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
| **when** | **String**|  | [optional] [default to 7d] |
| **byParseDate** | **Boolean**|  | [optional] [default to false] |
| **lang** | [**Object**](.md)|  | [optional] |
| **notLang** | [**Object**](.md)|  | [optional] |
| **countries** | [**Object**](.md)|  | [optional] |
| **notCountries** | [**Object**](.md)|  | [optional] |
| **sources** | [**Object**](.md)|  | [optional] |
| **predefinedSources** | [**Object**](.md)|  | [optional] |
| **notSources** | [**Object**](.md)|  | [optional] |
| **notAuthorName** | [**Object**](.md)|  | [optional] |
| **rankedOnly** | **String**|  | [optional] |
| **isHeadline** | **Boolean**|  | [optional] |
| **isOpinion** | **Boolean**|  | [optional] |
| **isPaidContent** | **Boolean**|  | [optional] |
| **parentUrl** | [**Object**](.md)|  | [optional] |
| **allLinks** | [**Object**](.md)|  | [optional] |
| **allDomainLinks** | [**Object**](.md)|  | [optional] |
| **wordCountMin** | **Integer**|  | [optional] |
| **wordCountMax** | **Integer**|  | [optional] |
| **page** | **Integer**|  | [optional] [default to 1] |
| **pageSize** | **Integer**|  | [optional] [default to 100] |
| **clusteringVariable** | **String**|  | [optional] |
| **clusteringEnabled** | **Boolean**|  | [optional] |
| **clusteringThreshold** | **Double**|  | [optional] |
| **includeNlpData** | **Boolean**|  | [optional] |
| **hasNlp** | **Boolean**|  | [optional] |
| **theme** | **String**|  | [optional] |
| **notTheme** | **String**|  | [optional] |
| **orGEntityName** | **String**|  | [optional] |
| **peREntityName** | **String**|  | [optional] |
| **loCEntityName** | **String**|  | [optional] |
| **miSCEntityName** | **String**|  | [optional] |
| **titleSentimentMin** | **Double**|  | [optional] |
| **titleSentimentMax** | **Double**|  | [optional] |
| **contentSentimentMin** | **Double**|  | [optional] |
| **contentSentimentMax** | **Double**|  | [optional] |
| **iptcTags** | [**Object**](.md)|  | [optional] |
| **notIptcTags** | [**Object**](.md)|  | [optional] |
| **iabTags** | [**Object**](.md)|  | [optional] |
| **notIabTags** | [**Object**](.md)|  | [optional] |

### Return type

[**CSLHResponse**](CSLHResponse.md)

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
> CSLHResponse1 post(latestHeadlinesRequest).execute();

[Post] Search For Latest Headlines Request

This endpoint allows you to get latest headlines. You need to specify since when you want to get the latest headlines. You can also filter by language, country, source, and more.

### Example
```java
import com.konfigthis.newscatcherapi.client.ApiClient;
import com.konfigthis.newscatcherapi.client.ApiException;
import com.konfigthis.newscatcherapi.client.ApiResponse;
import com.konfigthis.newscatcherapi.client.Newscatcher;
import com.konfigthis.newscatcherapi.client.Configuration;
import com.konfigthis.newscatcherapi.client.auth.*;
import com.konfigthis.newscatcherapi.client.model.*;
import com.konfigthis.newscatcherapi.client.api.LatestHeadlinesApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://v3-api.newscatcherapi.com";
    
    configuration.apiKey  = "YOUR API KEY";
    Newscatcher client = new Newscatcher(configuration);
    String when = "7d";
    Boolean byParseDate = false;
    Object lang = null;
    Object notLang = null;
    Object countries = null;
    Object notCountries = null;
    Object sources = null;
    Object predefinedSources = null;
    Object notSources = null;
    Object notAuthorName = null;
    String rankedOnly = "rankedOnly_example";
    Boolean isHeadline = true;
    Boolean isOpinion = true;
    Boolean isPaidContent = true;
    Object parentUrl = null;
    Object allLinks = null;
    Object allDomainLinks = null;
    Integer wordCountMin = 56;
    Integer wordCountMax = 56;
    Integer page = 1;
    Integer pageSize = 100;
    String clusteringVariable = "clusteringVariable_example";
    Boolean clusteringEnabled = true;
    Double clusteringThreshold = 3.4D;
    Boolean includeNlpData = true;
    Boolean hasNlp = true;
    String theme = "theme_example";
    String notTheme = "notTheme_example";
    String orGEntityName = "orGEntityName_example";
    String peREntityName = "peREntityName_example";
    String loCEntityName = "loCEntityName_example";
    String miSCEntityName = "miSCEntityName_example";
    Double titleSentimentMin = 3.4D;
    Double titleSentimentMax = 3.4D;
    Double contentSentimentMin = 3.4D;
    Double contentSentimentMax = 3.4D;
    Object iptcTags = null;
    Object notIptcTags = null;
    Object iabTags = null;
    Object notIabTags = null;
    try {
      CSLHResponse1 result = client
              .latestHeadlines
              .post()
              .when(when)
              .byParseDate(byParseDate)
              .lang(lang)
              .notLang(notLang)
              .countries(countries)
              .notCountries(notCountries)
              .sources(sources)
              .predefinedSources(predefinedSources)
              .notSources(notSources)
              .notAuthorName(notAuthorName)
              .rankedOnly(rankedOnly)
              .isHeadline(isHeadline)
              .isOpinion(isOpinion)
              .isPaidContent(isPaidContent)
              .parentUrl(parentUrl)
              .allLinks(allLinks)
              .allDomainLinks(allDomainLinks)
              .wordCountMin(wordCountMin)
              .wordCountMax(wordCountMax)
              .page(page)
              .pageSize(pageSize)
              .clusteringVariable(clusteringVariable)
              .clusteringEnabled(clusteringEnabled)
              .clusteringThreshold(clusteringThreshold)
              .includeNlpData(includeNlpData)
              .hasNlp(hasNlp)
              .theme(theme)
              .notTheme(notTheme)
              .orGEntityName(orGEntityName)
              .peREntityName(peREntityName)
              .loCEntityName(loCEntityName)
              .miSCEntityName(miSCEntityName)
              .titleSentimentMin(titleSentimentMin)
              .titleSentimentMax(titleSentimentMax)
              .contentSentimentMin(contentSentimentMin)
              .contentSentimentMax(contentSentimentMax)
              .iptcTags(iptcTags)
              .notIptcTags(notIptcTags)
              .iabTags(iabTags)
              .notIabTags(notIabTags)
              .execute();
      System.out.println(result);
      System.out.println(result.getStatus());
      System.out.println(result.getTotalHits());
      System.out.println(result.getPage());
      System.out.println(result.getTotalPages());
      System.out.println(result.getPageSize());
      System.out.println(result.getClustersCount());
      System.out.println(result.getClusters());
      System.out.println(result.getUserInput());
      System.out.println(result.getArticles());
    } catch (ApiException e) {
      System.err.println("Exception when calling LatestHeadlinesApi#post");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<CSLHResponse1> response = client
              .latestHeadlines
              .post()
              .when(when)
              .byParseDate(byParseDate)
              .lang(lang)
              .notLang(notLang)
              .countries(countries)
              .notCountries(notCountries)
              .sources(sources)
              .predefinedSources(predefinedSources)
              .notSources(notSources)
              .notAuthorName(notAuthorName)
              .rankedOnly(rankedOnly)
              .isHeadline(isHeadline)
              .isOpinion(isOpinion)
              .isPaidContent(isPaidContent)
              .parentUrl(parentUrl)
              .allLinks(allLinks)
              .allDomainLinks(allDomainLinks)
              .wordCountMin(wordCountMin)
              .wordCountMax(wordCountMax)
              .page(page)
              .pageSize(pageSize)
              .clusteringVariable(clusteringVariable)
              .clusteringEnabled(clusteringEnabled)
              .clusteringThreshold(clusteringThreshold)
              .includeNlpData(includeNlpData)
              .hasNlp(hasNlp)
              .theme(theme)
              .notTheme(notTheme)
              .orGEntityName(orGEntityName)
              .peREntityName(peREntityName)
              .loCEntityName(loCEntityName)
              .miSCEntityName(miSCEntityName)
              .titleSentimentMin(titleSentimentMin)
              .titleSentimentMax(titleSentimentMax)
              .contentSentimentMin(contentSentimentMin)
              .contentSentimentMax(contentSentimentMax)
              .iptcTags(iptcTags)
              .notIptcTags(notIptcTags)
              .iabTags(iabTags)
              .notIabTags(notIabTags)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling LatestHeadlinesApi#post");
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
| **latestHeadlinesRequest** | [**LatestHeadlinesRequest**](LatestHeadlinesRequest.md)|  | |

### Return type

[**CSLHResponse1**](CSLHResponse1.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

