# java-use-schema-title-if-possible<a id="java-use-schema-title-if-possible"></a>

A simple API based for testing java-use-schema-title-if-possible.

[![Maven Central](https://img.shields.io/badge/Maven%20Central-v1.0.0-blue)](https://central.sonatype.com/artifact/com.konfigthis/java-use-schema-title-if-possible/1.0.0)
[![More Info](https://img.shields.io/badge/More%20Info-Click%20Here-orange)](http://example.com/support)

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Requirements](#requirements)
- [Installation](#installation)
  * [Maven users](#maven-users)
  * [Gradle users](#gradle-users)
  * [Android users](#android-users)
  * [Others](#others)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`javauseschematitleifpossibleclient.test.fetch`](#javauseschematitleifpossibleclienttestfetch)

<!-- tocstop -->

## Requirements<a id="requirements"></a>

Building the API client library requires:

1. Java 1.8+
2. Maven (3.8.3+)/Gradle (7.2+)

If you are adding this library to an Android Application or Library:

3. Android 8.0+ (API Level 26+)

## Installation<a id="installation"></a>

To install the API client library to your local Maven repository, simply execute:

```shell
mvn clean install
```

To deploy it to a remote Maven repository instead, configure the settings of the repository and execute:

```shell
mvn clean deploy
```

Refer to the [OSSRH Guide](http://central.sonatype.org/pages/ossrh-guide.html) for more information.

### Maven users<a id="maven-users"></a>

Add this dependency to your project's POM:

```xml
<dependency>
  <groupId>com.konfigthis</groupId>
  <artifactId>java-use-schema-title-if-possible</artifactId>
  <version>1.0.0</version>
  <scope>compile</scope>
</dependency>
```

### Gradle users<a id="gradle-users"></a>

Add this dependency to your `build.gradle`:

```groovy
// build.gradle
repositories {
  mavenCentral()
}

dependencies {
   implementation "com.konfigthis:java-use-schema-title-if-possible:1.0.0"
}
```

### Android users<a id="android-users"></a>

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

### Others<a id="others"></a>

At first generate the JAR by executing:

```shell
mvn clean package
```

Then manually install the following JARs:

* `target/java-use-schema-title-if-possible-1.0.0.jar`
* `target/lib/*.jar`

## Getting Started<a id="getting-started"></a>

Please follow the [installation](#installation) instruction and execute the following Java code:

```java
import com.konfigthis.javauseschematitleifpossible.client.ApiClient;
import com.konfigthis.javauseschematitleifpossible.client.ApiException;
import com.konfigthis.javauseschematitleifpossible.client.ApiResponse;
import com.konfigthis.javauseschematitleifpossible.client.JavaUseSchemaTitleIfPossibleClient;
import com.konfigthis.javauseschematitleifpossible.client.Configuration;
import com.konfigthis.javauseschematitleifpossible.client.auth.*;
import com.konfigthis.javauseschematitleifpossible.client.model.*;
import com.konfigthis.javauseschematitleifpossible.client.api.TestApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://java-use-schema-title-if-possible.konfigthis.com";
    
    configuration.apiKey  = "YOUR API KEY";
    JavaUseSchemaTitleIfPossibleClient client = new JavaUseSchemaTitleIfPossibleClient(configuration);
    try {
      AB result = client
              .test
              .fetch()
              .execute();
      System.out.println(result);
      System.out.println(result.getA());
      System.out.println(result.getB());
    } catch (ApiException e) {
      System.err.println("Exception when calling TestApi#fetch");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<AB> response = client
              .test
              .fetch()
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
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
## Reference<a id="reference"></a>


### `javauseschematitleifpossibleclient.test.fetch`<a id="javauseschematitleifpossibleclienttestfetch"></a>

Provide an input parameter to receive a JSON value with properties.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
AB result = client
        .test
        .fetch()
        .execute();
```

#### 🔄 Return<a id="🔄-return"></a>

[AB](./src/main/java/com/konfigthis/client/model/AB.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/simple-endpoint` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This Java package is automatically generated by [Konfig](https://konfigthis.com)
