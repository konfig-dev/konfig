# newscatcherapi-java-sdk

<img src='https://uploads-ssl.webflow.com/6429857b17973b636c2195c5/646c6f1eb774ff2f2997bec5_newscatcher_.svg' width='286' height='35' /> <br>  <br>Visit our website  <a href='https://newscatcherapi.com'>https://newscatcherapi.com</a>

[![Maven Central](https://img.shields.io/badge/Maven%20Central-v6.0.6-blue)](https://central.sonatype.com/artifact/com.konfigthis.newscatcherapi/newscatcherapi-java-sdk/6.0.6)

## Requirements

Building the API client library requires:

1. Java 1.8+
2. Maven (3.8.3+)/Gradle (7.2+)

If you are adding this library to an Android Application or Library:

3. Android 8.0+ (API Level 26+)

## Installation

To install the API client library to your local Maven repository, simply execute:

```shell
mvn clean install
```

To deploy it to a remote Maven repository instead, configure the settings of the repository and execute:

```shell
mvn clean deploy
```

Refer to the [OSSRH Guide](http://central.sonatype.org/pages/ossrh-guide.html) for more information.

### Maven users

Add this dependency to your project's POM:

```xml
<dependency>
  <groupId>com.konfigthis.newscatcherapi</groupId>
  <artifactId>newscatcherapi-java-sdk</artifactId>
  <version>6.0.6</version>
  <scope>compile</scope>
</dependency>
```

### Gradle users

Add this dependency to your `build.gradle`:

```groovy
// build.gradle
repositories {
  mavenCentral()
}

dependencies {
   implementation "com.konfigthis.newscatcherapi:newscatcherapi-java-sdk:6.0.6"
}
```

### Android users

Make sure your `build.gradle` file as a `minSdk` version of at least 26:
```groovy
// build.gradle
android {
    defaultConfig {
        minSdk 26
    }
}
```

Also make sure your library or application has internet permissions in your `AndroidManifest.xml`:

```xml
<!--AndroidManifest.xml-->
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">
    <uses-permission android:name="android.permission.INTERNET"/>
</manifest>
```

### Others

At first generate the JAR by executing:

```shell
mvn clean package
```

Then manually install the following JARs:

* `target/newscatcherapi-java-sdk-6.0.6.jar`
* `target/lib/*.jar`

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

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

## Documentation for API Endpoints

All URIs are relative to *https://v3-api.newscatcherapi.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AuthorsApi* | [**get**](docs/AuthorsApi.md#get) | **GET** /api/authors | [Get] Search By Author Request
*AuthorsApi* | [**post**](docs/AuthorsApi.md#post) | **POST** /api/authors | [Post] Search By Author Request
*LatestHeadlinesApi* | [**get**](docs/LatestHeadlinesApi.md#get) | **GET** /api/latest_headlines | [Get] Search For Latest Headlines Request
*LatestHeadlinesApi* | [**post**](docs/LatestHeadlinesApi.md#post) | **POST** /api/latest_headlines | [Post] Search For Latest Headlines Request
*SearchApi* | [**get**](docs/SearchApi.md#get) | **GET** /api/search | [Get] Search For Articles Request
*SearchApi* | [**post**](docs/SearchApi.md#post) | **POST** /api/search | [Post] Search For Articles Request
*SearchLinkApi* | [**get**](docs/SearchLinkApi.md#get) | **GET** /api/search_by_link | [Get] Search For Articles By Id Or Link
*SearchLinkApi* | [**post**](docs/SearchLinkApi.md#post) | **POST** /api/search_by_link | [Post] Search For Articles Request
*SearchSimilarApi* | [**get**](docs/SearchSimilarApi.md#get) | **GET** /api/search_similar | [Get] Search For Similar Articles Request
*SearchSimilarApi* | [**post**](docs/SearchSimilarApi.md#post) | **POST** /api/search_similar | [Post] Search For Similar Articles Request
*SourcesApi* | [**get**](docs/SourcesApi.md#get) | **GET** /api/sources | [Get] Search For Sources Request
*SourcesApi* | [**post**](docs/SourcesApi.md#post) | **POST** /api/sources | [Post] Search For Sources Request
*SubscriptionApi* | [**get**](docs/SubscriptionApi.md#get) | **GET** /api/subscription | [Get] Get My Plan Info
*SubscriptionApi* | [**post**](docs/SubscriptionApi.md#post) | **POST** /api/subscription | [Post] Get My Plan Info


## Documentation for Models

 - [AdditionalSourceInfo](docs/AdditionalSourceInfo.md)
 - [ArticlesPropertyInner](docs/ArticlesPropertyInner.md)
 - [ArticlesPropertyInner1](docs/ArticlesPropertyInner1.md)
 - [AuthorSearchRequest](docs/AuthorSearchRequest.md)
 - [CSLHResponse](docs/CSLHResponse.md)
 - [CSLHResponse1](docs/CSLHResponse1.md)
 - [CSearchResponse](docs/CSearchResponse.md)
 - [CSearchResponse1](docs/CSearchResponse1.md)
 - [Cluster](docs/Cluster.md)
 - [Cluster1](docs/Cluster1.md)
 - [ClusteringSearchResponse](docs/ClusteringSearchResponse.md)
 - [DtoResponsesAuthorSearchResponseArticleResult](docs/DtoResponsesAuthorSearchResponseArticleResult.md)
 - [DtoResponsesAuthorSearchResponseFailedSearchResponse](docs/DtoResponsesAuthorSearchResponseFailedSearchResponse.md)
 - [DtoResponsesAuthorSearchResponseSearchResponse](docs/DtoResponsesAuthorSearchResponseSearchResponse.md)
 - [DtoResponsesMoreLikeThisResponseArticleResult](docs/DtoResponsesMoreLikeThisResponseArticleResult.md)
 - [DtoResponsesMoreLikeThisResponseFailedSearchResponse](docs/DtoResponsesMoreLikeThisResponseFailedSearchResponse.md)
 - [DtoResponsesMoreLikeThisResponseSearchResponse](docs/DtoResponsesMoreLikeThisResponseSearchResponse.md)
 - [DtoResponsesSearchResponseSearchResponse](docs/DtoResponsesSearchResponseSearchResponse.md)
 - [FSearchResponse](docs/FSearchResponse.md)
 - [FSearchResponse1](docs/FSearchResponse1.md)
 - [FSearchResponse2](docs/FSearchResponse2.md)
 - [FSearchResponse3](docs/FSearchResponse3.md)
 - [LatestHeadlinesRequest](docs/LatestHeadlinesRequest.md)
 - [LatestHeadlinesResponse](docs/LatestHeadlinesResponse.md)
 - [MoreLikeThisRequest](docs/MoreLikeThisRequest.md)
 - [SearchRequest](docs/SearchRequest.md)
 - [SearchURLRequest](docs/SearchURLRequest.md)
 - [SimilarDocument](docs/SimilarDocument.md)
 - [SimilarDocument1](docs/SimilarDocument1.md)
 - [SourceInfo](docs/SourceInfo.md)
 - [SourceResponse](docs/SourceResponse.md)
 - [SourcesRequest](docs/SourcesRequest.md)
 - [SubscriptionResponse](docs/SubscriptionResponse.md)
 - [ValidationError](docs/ValidationError.md)


## Author
This Java package is automatically generated by [Konfig](https://konfigthis.com)
