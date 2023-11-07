# splitit-web-java-sdk

[![Maven Central](https://img.shields.io/badge/Maven%20Central-v2.2.2-blue)](https://central.sonatype.com/artifact/com.konfigthis/splitit-web-java-sdk/2.2.2)

Splitit's Web API

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
  <artifactId>splitit-web-java-sdk</artifactId>
  <version>2.2.2</version>
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
   implementation "com.konfigthis:splitit-web-java-sdk:2.2.2"
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

* `target/splitit-web-java-sdk-2.2.2.jar`
* `target/lib/*.jar`

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

```java
import com.konfigthis.splitit.client.ApiClient;
import com.konfigthis.splitit.client.ApiException;
import com.konfigthis.splitit.client.ApiResponse;
import com.konfigthis.splitit.client.JavaSplitit;
import com.konfigthis.splitit.client.Configuration;
import com.konfigthis.splitit.client.auth.*;
import com.konfigthis.splitit.client.model.*;
import com.konfigthis.splitit.client.api.InstallmentPlanApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://web-api-v3.production.splitit.com";
    // Configure OAuth2 client credentials for "application" OAuth flow
    String clientId = System.getenv("CLIENT_ID");
    String clientSecret = System.getenv("CLIENT_SECRET");
    configuration.clientId = clientId
    configuration.clientSecret = clientSecret

    

    JavaSplitit client = new JavaSplitit(configuration);
    String installmentPlanNumber = "installmentPlanNumber_example";
    String xSplititIdempotencyKey = "xSplititIdempotencyKey_example";
    String xSplititTouchPoint = ""; // TouchPoint
    try {
      InstallmentPlanCancelResponse result = client
              .installmentPlan
              .cancel(installmentPlanNumber, xSplititIdempotencyKey, xSplititTouchPoint)
              .execute();
      System.out.println(result);
      System.out.println(result.getInstallmentPlanNumber());
    } catch (ApiException e) {
      System.err.println("Exception when calling InstallmentPlanApi#cancel");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<InstallmentPlanCancelResponse> response = client
              .installmentPlan
              .cancel(installmentPlanNumber, xSplititIdempotencyKey, xSplititTouchPoint)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling InstallmentPlanApi#cancel");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

## Documentation for API Endpoints

All URIs are relative to *https://web-api-v3.production.splitit.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*InstallmentPlanApi* | [**cancel**](docs/InstallmentPlanApi.md#cancel) | **POST** /api/installmentplans/{installmentPlanNumber}/cancel | 
*InstallmentPlanApi* | [**checkEligibility**](docs/InstallmentPlanApi.md#checkEligibility) | **POST** /api/installmentplans/check-eligibility | 
*InstallmentPlanApi* | [**get**](docs/InstallmentPlanApi.md#get) | **GET** /api/installmentplans/{installmentPlanNumber} | 
*InstallmentPlanApi* | [**post**](docs/InstallmentPlanApi.md#post) | **POST** /api/installmentplans/initiate | 
*InstallmentPlanApi* | [**post2**](docs/InstallmentPlanApi.md#post2) | **POST** /api/installmentplans | 
*InstallmentPlanApi* | [**refund**](docs/InstallmentPlanApi.md#refund) | **POST** /api/installmentplans/{installmentPlanNumber}/refund | 
*InstallmentPlanApi* | [**search**](docs/InstallmentPlanApi.md#search) | **GET** /api/installmentplans/search | 
*InstallmentPlanApi* | [**updateOrder**](docs/InstallmentPlanApi.md#updateOrder) | **PUT** /api/installmentplans/{installmentPlanNumber}/updateorder | 
*InstallmentPlanApi* | [**updateOrder2**](docs/InstallmentPlanApi.md#updateOrder2) | **PUT** /api/installmentplans/updateorder | 
*InstallmentPlanApi* | [**verifyAuthorization**](docs/InstallmentPlanApi.md#verifyAuthorization) | **GET** /api/installmentplans/{installmentPlanNumber}/verifyauthorization | 


## Documentation for Models

 - [AddressData](docs/AddressData.md)
 - [AddressDataModel](docs/AddressDataModel.md)
 - [AuthorizationModel](docs/AuthorizationModel.md)
 - [BluesnapVaultedShopperToken](docs/BluesnapVaultedShopperToken.md)
 - [CardBrand](docs/CardBrand.md)
 - [CardData](docs/CardData.md)
 - [CardType](docs/CardType.md)
 - [CheckInstallmentsEligibilityRequest](docs/CheckInstallmentsEligibilityRequest.md)
 - [Error](docs/Error.md)
 - [ErrorExtended](docs/ErrorExtended.md)
 - [ErrorExtendedAllOf](docs/ErrorExtendedAllOf.md)
 - [EventsEndpointsModel](docs/EventsEndpointsModel.md)
 - [GatewayTokenData](docs/GatewayTokenData.md)
 - [GwAuthorizationStatus](docs/GwAuthorizationStatus.md)
 - [IdentifierContract](docs/IdentifierContract.md)
 - [InitiatePlanResponse](docs/InitiatePlanResponse.md)
 - [InitiateRedirectionEndpointsModel](docs/InitiateRedirectionEndpointsModel.md)
 - [Installment](docs/Installment.md)
 - [InstallmentPlanCancelResponse](docs/InstallmentPlanCancelResponse.md)
 - [InstallmentPlanCreateRequest](docs/InstallmentPlanCreateRequest.md)
 - [InstallmentPlanCreateResponse](docs/InstallmentPlanCreateResponse.md)
 - [InstallmentPlanGetResponse](docs/InstallmentPlanGetResponse.md)
 - [InstallmentPlanInitiateRequest](docs/InstallmentPlanInitiateRequest.md)
 - [InstallmentPlanRefundRequest](docs/InstallmentPlanRefundRequest.md)
 - [InstallmentPlanRefundResponse](docs/InstallmentPlanRefundResponse.md)
 - [InstallmentPlanSearchResponse](docs/InstallmentPlanSearchResponse.md)
 - [InstallmentPlanUpdateRequest](docs/InstallmentPlanUpdateRequest.md)
 - [InstallmentPlanUpdateRequestByIdentifier](docs/InstallmentPlanUpdateRequestByIdentifier.md)
 - [InstallmentPlanUpdateRequestByIdentifierAllOf](docs/InstallmentPlanUpdateRequestByIdentifierAllOf.md)
 - [InstallmentPlanUpdateResponse](docs/InstallmentPlanUpdateResponse.md)
 - [InstallmentStatus](docs/InstallmentStatus.md)
 - [InstallmentsEligibilityResponse](docs/InstallmentsEligibilityResponse.md)
 - [LinksData](docs/LinksData.md)
 - [LinksModel](docs/LinksModel.md)
 - [MockerShopperToken](docs/MockerShopperToken.md)
 - [PaymentMethodModel](docs/PaymentMethodModel.md)
 - [PaymentMethodType](docs/PaymentMethodType.md)
 - [PaymentPlanOptionModel](docs/PaymentPlanOptionModel.md)
 - [PlanData](docs/PlanData.md)
 - [PlanDataModel](docs/PlanDataModel.md)
 - [PlanErrorResponse](docs/PlanErrorResponse.md)
 - [PlanErrorResponseAllOf](docs/PlanErrorResponseAllOf.md)
 - [PlanStatus](docs/PlanStatus.md)
 - [ProcessingData](docs/ProcessingData.md)
 - [ProcessingData2](docs/ProcessingData2.md)
 - [PurchaseMethod](docs/PurchaseMethod.md)
 - [RedirectionEndpointsModel](docs/RedirectionEndpointsModel.md)
 - [RefundModel](docs/RefundModel.md)
 - [RefundStatus](docs/RefundStatus.md)
 - [RefundStrategy](docs/RefundStrategy.md)
 - [RefundSummary](docs/RefundSummary.md)
 - [SearchInstallmentPlanResponseItem](docs/SearchInstallmentPlanResponseItem.md)
 - [ShippingStatus](docs/ShippingStatus.md)
 - [ShippingStatus2](docs/ShippingStatus2.md)
 - [ShopperData](docs/ShopperData.md)
 - [SpreedlyToken](docs/SpreedlyToken.md)
 - [TestModes](docs/TestModes.md)
 - [ThreeDSData](docs/ThreeDSData.md)
 - [ThreeDSData2](docs/ThreeDSData2.md)
 - [ThreeDsRedirectDataV3](docs/ThreeDsRedirectDataV3.md)
 - [UpdateOrderRequest](docs/UpdateOrderRequest.md)
 - [UxSettingsModel](docs/UxSettingsModel.md)
 - [VerifyAuthorizationResponse](docs/VerifyAuthorizationResponse.md)


## Author
This Java package is automatically generated by [Konfig](https://konfigthis.com)
