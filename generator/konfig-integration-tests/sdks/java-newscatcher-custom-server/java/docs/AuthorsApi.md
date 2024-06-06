# AuthorsApi

All URIs are relative to *https://v3-api.newscatcherapi.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**get**](AuthorsApi.md#get) | **GET** /api/authors | [Get] Search By Author Request |
| [**post**](AuthorsApi.md#post) | **POST** /api/authors | [Post] Search By Author Request |


<a name="get"></a>
# **get**
> FSearchResponse get(authorName).notAuthorName(notAuthorName).sources(sources).predefinedSources(predefinedSources).notSources(notSources).lang(lang).notLang(notLang).countries(countries).notCountries(notCountries).from(from).to(to).publishedDatePrecision(publishedDatePrecision).byParseDate(byParseDate).sortBy(sortBy).rankedOnly(rankedOnly).fromRank(fromRank).toRank(toRank).isHeadline(isHeadline).isOpinion(isOpinion).isPaidContent(isPaidContent).parentUrl(parentUrl).allLinks(allLinks).allDomainLinks(allDomainLinks).wordCountMin(wordCountMin).wordCountMax(wordCountMax).page(page).pageSize(pageSize).includeNlpData(includeNlpData).hasNlp(hasNlp).theme(theme).notTheme(notTheme).nerName(nerName).titleSentimentMin(titleSentimentMin).titleSentimentMax(titleSentimentMax).contentSentimentMin(contentSentimentMin).contentSentimentMax(contentSentimentMax).iptcTags(iptcTags).notIptcTags(notIptcTags).iabTags(iabTags).notIabTags(notIabTags).execute();

[Get] Search By Author Request

This endpoint allows you to search for articles by author. You need to specify the author name. You can also filter by language, country, source, and more.

### Example
```java
import com.konfigthis.newscatcherapi.client.ApiClient;
import com.konfigthis.newscatcherapi.client.ApiException;
import com.konfigthis.newscatcherapi.client.ApiResponse;
import com.konfigthis.newscatcherapi.client.Newscatcher;
import com.konfigthis.newscatcherapi.client.Configuration;
import com.konfigthis.newscatcherapi.client.auth.*;
import com.konfigthis.newscatcherapi.client.model.*;
import com.konfigthis.newscatcherapi.client.api.AuthorsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://v3-api.newscatcherapi.com";
    
    configuration.apiKey  = "YOUR API KEY";
    Newscatcher client = new Newscatcher(configuration);
    String authorName = "authorName_example";
    String notAuthorName = "notAuthorName_example";
    Object sources = null;
    Object predefinedSources = null;
    Object notSources = null;
    Object lang = null;
    Object notLang = null;
    Object countries = null;
    Object notCountries = null;
    String from = "from_example";
    String to = "to_example";
    String publishedDatePrecision = "publishedDatePrecision_example";
    Boolean byParseDate = false;
    String sortBy = "relevancy";
    String rankedOnly = "rankedOnly_example";
    Integer fromRank = 56;
    Integer toRank = 56;
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
    Boolean includeNlpData = true;
    Boolean hasNlp = true;
    String theme = "theme_example";
    String notTheme = "notTheme_example";
    String nerName = "nerName_example";
    Double titleSentimentMin = 3.4D;
    Double titleSentimentMax = 3.4D;
    Double contentSentimentMin = 3.4D;
    Double contentSentimentMax = 3.4D;
    Object iptcTags = null;
    Object notIptcTags = null;
    Object iabTags = null;
    Object notIabTags = null;
    try {
      FSearchResponse result = client
              .authors
              .get(authorName)
              .notAuthorName(notAuthorName)
              .sources(sources)
              .predefinedSources(predefinedSources)
              .notSources(notSources)
              .lang(lang)
              .notLang(notLang)
              .countries(countries)
              .notCountries(notCountries)
              .from(from)
              .to(to)
              .publishedDatePrecision(publishedDatePrecision)
              .byParseDate(byParseDate)
              .sortBy(sortBy)
              .rankedOnly(rankedOnly)
              .fromRank(fromRank)
              .toRank(toRank)
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
              .includeNlpData(includeNlpData)
              .hasNlp(hasNlp)
              .theme(theme)
              .notTheme(notTheme)
              .nerName(nerName)
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
      System.out.println(result.getArticles());
      System.out.println(result.getUserInput());
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthorsApi#get");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<FSearchResponse> response = client
              .authors
              .get(authorName)
              .notAuthorName(notAuthorName)
              .sources(sources)
              .predefinedSources(predefinedSources)
              .notSources(notSources)
              .lang(lang)
              .notLang(notLang)
              .countries(countries)
              .notCountries(notCountries)
              .from(from)
              .to(to)
              .publishedDatePrecision(publishedDatePrecision)
              .byParseDate(byParseDate)
              .sortBy(sortBy)
              .rankedOnly(rankedOnly)
              .fromRank(fromRank)
              .toRank(toRank)
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
              .includeNlpData(includeNlpData)
              .hasNlp(hasNlp)
              .theme(theme)
              .notTheme(notTheme)
              .nerName(nerName)
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
      System.err.println("Exception when calling AuthorsApi#get");
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
| **authorName** | **String**|  | |
| **notAuthorName** | **String**|  | [optional] |
| **sources** | [**Object**](.md)|  | [optional] |
| **predefinedSources** | [**Object**](.md)|  | [optional] |
| **notSources** | [**Object**](.md)|  | [optional] |
| **lang** | [**Object**](.md)|  | [optional] |
| **notLang** | [**Object**](.md)|  | [optional] |
| **countries** | [**Object**](.md)|  | [optional] |
| **notCountries** | [**Object**](.md)|  | [optional] |
| **from** | **String**|  | [optional] |
| **to** | **String**|  | [optional] |
| **publishedDatePrecision** | **String**|  | [optional] |
| **byParseDate** | **Boolean**|  | [optional] [default to false] |
| **sortBy** | **String**|  | [optional] [default to relevancy] |
| **rankedOnly** | **String**|  | [optional] |
| **fromRank** | **Integer**|  | [optional] |
| **toRank** | **Integer**|  | [optional] |
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
| **includeNlpData** | **Boolean**|  | [optional] |
| **hasNlp** | **Boolean**|  | [optional] |
| **theme** | **String**|  | [optional] |
| **notTheme** | **String**|  | [optional] |
| **nerName** | **String**|  | [optional] |
| **titleSentimentMin** | **Double**|  | [optional] |
| **titleSentimentMax** | **Double**|  | [optional] |
| **contentSentimentMin** | **Double**|  | [optional] |
| **contentSentimentMax** | **Double**|  | [optional] |
| **iptcTags** | [**Object**](.md)|  | [optional] |
| **notIptcTags** | [**Object**](.md)|  | [optional] |
| **iabTags** | [**Object**](.md)|  | [optional] |
| **notIabTags** | [**Object**](.md)|  | [optional] |

### Return type

[**FSearchResponse**](FSearchResponse.md)

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
> FSearchResponse1 post(authorSearchRequest).execute();

[Post] Search By Author Request

This endpoint allows you to search for articles by author. You need to specify the author name. You can also filter by language, country, source, and more.

### Example
```java
import com.konfigthis.newscatcherapi.client.ApiClient;
import com.konfigthis.newscatcherapi.client.ApiException;
import com.konfigthis.newscatcherapi.client.ApiResponse;
import com.konfigthis.newscatcherapi.client.Newscatcher;
import com.konfigthis.newscatcherapi.client.Configuration;
import com.konfigthis.newscatcherapi.client.auth.*;
import com.konfigthis.newscatcherapi.client.model.*;
import com.konfigthis.newscatcherapi.client.api.AuthorsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://v3-api.newscatcherapi.com";
    
    configuration.apiKey  = "YOUR API KEY";
    Newscatcher client = new Newscatcher(configuration);
    String authorName = "authorName_example";
    String notAuthorName = "notAuthorName_example";
    Object sources = null;
    Object predefinedSources = null;
    Object notSources = null;
    Object lang = null;
    Object notLang = null;
    Object countries = null;
    Object notCountries = null;
    String from = "from_example";
    String to = "to_example";
    String publishedDatePrecision = "publishedDatePrecision_example";
    Boolean byParseDate = false;
    String sortBy = "relevancy";
    String rankedOnly = "rankedOnly_example";
    Integer fromRank = 56;
    Integer toRank = 56;
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
    Boolean includeNlpData = true;
    Boolean hasNlp = true;
    String theme = "theme_example";
    String notTheme = "notTheme_example";
    String nerName = "nerName_example";
    Double titleSentimentMin = 3.4D;
    Double titleSentimentMax = 3.4D;
    Double contentSentimentMin = 3.4D;
    Double contentSentimentMax = 3.4D;
    Object iptcTags = null;
    Object notIptcTags = null;
    Object iabTags = null;
    Object notIabTags = null;
    try {
      FSearchResponse1 result = client
              .authors
              .post(authorName)
              .notAuthorName(notAuthorName)
              .sources(sources)
              .predefinedSources(predefinedSources)
              .notSources(notSources)
              .lang(lang)
              .notLang(notLang)
              .countries(countries)
              .notCountries(notCountries)
              .from(from)
              .to(to)
              .publishedDatePrecision(publishedDatePrecision)
              .byParseDate(byParseDate)
              .sortBy(sortBy)
              .rankedOnly(rankedOnly)
              .fromRank(fromRank)
              .toRank(toRank)
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
              .includeNlpData(includeNlpData)
              .hasNlp(hasNlp)
              .theme(theme)
              .notTheme(notTheme)
              .nerName(nerName)
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
      System.out.println(result.getArticles());
      System.out.println(result.getUserInput());
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthorsApi#post");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<FSearchResponse1> response = client
              .authors
              .post(authorName)
              .notAuthorName(notAuthorName)
              .sources(sources)
              .predefinedSources(predefinedSources)
              .notSources(notSources)
              .lang(lang)
              .notLang(notLang)
              .countries(countries)
              .notCountries(notCountries)
              .from(from)
              .to(to)
              .publishedDatePrecision(publishedDatePrecision)
              .byParseDate(byParseDate)
              .sortBy(sortBy)
              .rankedOnly(rankedOnly)
              .fromRank(fromRank)
              .toRank(toRank)
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
              .includeNlpData(includeNlpData)
              .hasNlp(hasNlp)
              .theme(theme)
              .notTheme(notTheme)
              .nerName(nerName)
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
      System.err.println("Exception when calling AuthorsApi#post");
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
| **authorSearchRequest** | [**AuthorSearchRequest**](AuthorSearchRequest.md)|  | |

### Return type

[**FSearchResponse1**](FSearchResponse1.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

