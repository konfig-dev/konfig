# java-api-exception-contains-response-headers

A simple API based for testing java-api-exception-contains-response-headers.

[![Maven Central](https://img.shields.io/badge/Maven%20Central-v1.0.0-blue)](https://central.sonatype.com/artifact/com.konfigthis/java-api-exception-contains-response-headers/1.0.0)
[![More Info](https://img.shields.io/badge/More%20Info-Click%20Here-orange)](http://example.com/support)

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
  <groupId>com.konfigthis</groupId>
  <artifactId>java-api-exception-contains-response-headers</artifactId>
  <version>1.0.0</version>
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
   implementation "com.konfigthis:java-api-exception-contains-response-headers:1.0.0"
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

* `target/java-api-exception-contains-response-headers-1.0.0.jar`
* `target/lib/*.jar`

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

```java
import com.konfigthis.javaapiexceptioncontainsresponseheaders.client.ApiClient;
import com.konfigthis.javaapiexceptioncontainsresponseheaders.client.ApiException;
import com.konfigthis.javaapiexceptioncontainsresponseheaders.client.ApiResponse;
import com.konfigthis.javaapiexceptioncontainsresponseheaders.client.JavaApiExceptionContainsResponseHeadersClient;
import com.konfigthis.javaapiexceptioncontainsresponseheaders.client.Configuration;
import com.konfigthis.javaapiexceptioncontainsresponseheaders.client.auth.*;
import com.konfigthis.javaapiexceptioncontainsresponseheaders.client.model.*;
import com.konfigthis.javaapiexceptioncontainsresponseheaders.client.api.TestApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://java-api-exception-contains-response-headers.konfigthis.com";
    
    configuration.apiKey  = "YOUR API KEY";
    JavaApiExceptionContainsResponseHeadersClient client = new JavaApiExceptionContainsResponseHeadersClient(configuration);
    try {
      client
              .test
              .fetch()
              .execute();
    } catch (ApiException e) {
      System.err.println("Exception when calling TestApi#fetch");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      client
              .test
              .fetch()
              .executeWithHttpInfo();
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

## Documentation for API Endpoints

All URIs are relative to *https://java-api-exception-contains-response-headers.konfigthis.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TestApi* | [**fetch**](docs/TestApi.md#fetch) | **GET** /simple-endpoint | Fetches a JSON value based on input parameter


## Documentation for Models



## Author
This Java package is automatically generated by [Konfig](https://konfigthis.com)