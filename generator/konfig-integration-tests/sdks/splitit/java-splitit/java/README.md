# splitit-web-java-sdk<a id="splitit-web-java-sdk"></a>

Splitit's Web API

[![Maven Central](https://img.shields.io/badge/Maven%20Central-v2.2.2-blue)](https://central.sonatype.com/artifact/com.konfigthis/splitit-web-java-sdk/2.2.2)

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
  * [`javasplitit.installmentPlan.cancel`](#javasplititinstallmentplancancel)
  * [`javasplitit.installmentPlan.checkEligibility`](#javasplititinstallmentplancheckeligibility)
  * [`javasplitit.installmentPlan.get`](#javasplititinstallmentplanget)
  * [`javasplitit.installmentPlan.post`](#javasplititinstallmentplanpost)
  * [`javasplitit.installmentPlan.post2`](#javasplititinstallmentplanpost2)
  * [`javasplitit.installmentPlan.refund`](#javasplititinstallmentplanrefund)
  * [`javasplitit.installmentPlan.search`](#javasplititinstallmentplansearch)
  * [`javasplitit.installmentPlan.updateOrder`](#javasplititinstallmentplanupdateorder)
  * [`javasplitit.installmentPlan.updateOrder2`](#javasplititinstallmentplanupdateorder2)
  * [`javasplitit.installmentPlan.verifyAuthorization`](#javasplititinstallmentplanverifyauthorization)

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
  <artifactId>splitit-web-java-sdk</artifactId>
  <version>2.2.2</version>
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
   implementation "com.konfigthis:splitit-web-java-sdk:2.2.2"
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

* `target/splitit-web-java-sdk-2.2.2.jar`
* `target/lib/*.jar`

## Getting Started<a id="getting-started"></a>

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
    configuration.clientId = "clientId";
    configuration.clientSecret = "clientSecret";
    
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
## Reference<a id="reference"></a>


### `javasplitit.installmentPlan.cancel`<a id="javasplititinstallmentplancancel"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
InstallmentPlanCancelResponse result = client
        .installmentPlan
        .cancel(installmentPlanNumber, xSplititIdempotencyKey, xSplititTouchPoint)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### installmentPlanNumber: `String`<a id="installmentplannumber-string"></a>

##### xSplititIdempotencyKey: `String`<a id="xsplititidempotencykey-string"></a>

##### xSplititTouchPoint: `String`<a id="xsplitittouchpoint-string"></a>

TouchPoint

#### 🔄 Return<a id="🔄-return"></a>

[InstallmentPlanCancelResponse](./src/main/java/com/konfigthis/client/model/InstallmentPlanCancelResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/installmentplans/{installmentPlanNumber}/cancel` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `javasplitit.installmentPlan.checkEligibility`<a id="javasplititinstallmentplancheckeligibility"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
InstallmentsEligibilityResponse result = client
        .installmentPlan
        .checkEligibility(xSplititIdempotencyKey, xSplititTouchPoint)
        .planData(planData)
        .cardDetails(cardDetails)
        .billingAddress(billingAddress)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xSplititIdempotencyKey: `String`<a id="xsplititidempotencykey-string"></a>

##### xSplititTouchPoint: `String`<a id="xsplitittouchpoint-string"></a>

TouchPoint

##### PlanData: [`PlanData`](./src/main/java/com/konfigthis/client/model/PlanData.java)<a id="plandata-plandatasrcmainjavacomkonfigthisclientmodelplandatajava"></a>

##### CardDetails: [`CardData`](./src/main/java/com/konfigthis/client/model/CardData.java)<a id="carddetails-carddatasrcmainjavacomkonfigthisclientmodelcarddatajava"></a>

##### BillingAddress: [`AddressData`](./src/main/java/com/konfigthis/client/model/AddressData.java)<a id="billingaddress-addressdatasrcmainjavacomkonfigthisclientmodeladdressdatajava"></a>

#### 🔄 Return<a id="🔄-return"></a>

[InstallmentsEligibilityResponse](./src/main/java/com/konfigthis/client/model/InstallmentsEligibilityResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/installmentplans/check-eligibility` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `javasplitit.installmentPlan.get`<a id="javasplititinstallmentplanget"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
InstallmentPlanGetResponse result = client
        .installmentPlan
        .get(installmentPlanNumber, xSplititIdempotencyKey, xSplititTouchPoint)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### installmentPlanNumber: `String`<a id="installmentplannumber-string"></a>

##### xSplititIdempotencyKey: `String`<a id="xsplititidempotencykey-string"></a>

##### xSplititTouchPoint: `String`<a id="xsplitittouchpoint-string"></a>

TouchPoint

#### 🔄 Return<a id="🔄-return"></a>

[InstallmentPlanGetResponse](./src/main/java/com/konfigthis/client/model/InstallmentPlanGetResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/installmentplans/{installmentPlanNumber}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `javasplitit.installmentPlan.post`<a id="javasplititinstallmentplanpost"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
InitiatePlanResponse result = client
        .installmentPlan
        .post(autoCapture, xSplititIdempotencyKey, xSplititTouchPoint)
        .attempt3dSecure(attempt3dSecure)
        .shopper(shopper)
        .planData(planData)
        .billingAddress(billingAddress)
        .redirectUrls(redirectUrls)
        .uxSettings(uxSettings)
        .eventsEndpoints(eventsEndpoints)
        .processingData(processingData)
        .xSplititTestMode(xSplititTestMode)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### AutoCapture: `Boolean`<a id="autocapture-boolean"></a>

##### xSplititIdempotencyKey: `String`<a id="xsplititidempotencykey-string"></a>

##### xSplititTouchPoint: `String`<a id="xsplitittouchpoint-string"></a>

TouchPoint

##### Attempt3dSecure: `Boolean`<a id="attempt3dsecure-boolean"></a>

##### Shopper: [`ShopperData`](./src/main/java/com/konfigthis/client/model/ShopperData.java)<a id="shopper-shopperdatasrcmainjavacomkonfigthisclientmodelshopperdatajava"></a>

##### PlanData: [`PlanDataModel`](./src/main/java/com/konfigthis/client/model/PlanDataModel.java)<a id="plandata-plandatamodelsrcmainjavacomkonfigthisclientmodelplandatamodeljava"></a>

##### BillingAddress: [`AddressDataModel`](./src/main/java/com/konfigthis/client/model/AddressDataModel.java)<a id="billingaddress-addressdatamodelsrcmainjavacomkonfigthisclientmodeladdressdatamodeljava"></a>

##### RedirectUrls: [`InitiateRedirectionEndpointsModel`](./src/main/java/com/konfigthis/client/model/InitiateRedirectionEndpointsModel.java)<a id="redirecturls-initiateredirectionendpointsmodelsrcmainjavacomkonfigthisclientmodelinitiateredirectionendpointsmodeljava"></a>

##### UxSettings: [`UxSettingsModel`](./src/main/java/com/konfigthis/client/model/UxSettingsModel.java)<a id="uxsettings-uxsettingsmodelsrcmainjavacomkonfigthisclientmodeluxsettingsmodeljava"></a>

##### EventsEndpoints: [`EventsEndpointsModel`](./src/main/java/com/konfigthis/client/model/EventsEndpointsModel.java)<a id="eventsendpoints-eventsendpointsmodelsrcmainjavacomkonfigthisclientmodeleventsendpointsmodeljava"></a>

##### ProcessingData: [`ProcessingData`](./src/main/java/com/konfigthis/client/model/ProcessingData.java)<a id="processingdata-processingdatasrcmainjavacomkonfigthisclientmodelprocessingdatajava"></a>

##### xSplititTestMode: `String`<a id="xsplitittestmode-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[InitiatePlanResponse](./src/main/java/com/konfigthis/client/model/InitiatePlanResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/installmentplans/initiate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `javasplitit.installmentPlan.post2`<a id="javasplititinstallmentplanpost2"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
InstallmentPlanCreateResponse result = client
        .installmentPlan
        .post2(autoCapture, termsAndConditionsAccepted, xSplititIdempotencyKey, xSplititTouchPoint)
        .attempt3dSecure(attempt3dSecure)
        .shopper(shopper)
        .planData(planData)
        .billingAddress(billingAddress)
        .paymentMethod(paymentMethod)
        .redirectUrls(redirectUrls)
        .processingData(processingData)
        .eventsEndpoints(eventsEndpoints)
        .xSplititTestMode(xSplititTestMode)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### AutoCapture: `Boolean`<a id="autocapture-boolean"></a>

##### TermsAndConditionsAccepted: `Boolean`<a id="termsandconditionsaccepted-boolean"></a>

##### xSplititIdempotencyKey: `String`<a id="xsplititidempotencykey-string"></a>

##### xSplititTouchPoint: `String`<a id="xsplitittouchpoint-string"></a>

TouchPoint

##### Attempt3dSecure: `Boolean`<a id="attempt3dsecure-boolean"></a>

##### Shopper: [`ShopperData`](./src/main/java/com/konfigthis/client/model/ShopperData.java)<a id="shopper-shopperdatasrcmainjavacomkonfigthisclientmodelshopperdatajava"></a>

##### PlanData: [`PlanDataModel`](./src/main/java/com/konfigthis/client/model/PlanDataModel.java)<a id="plandata-plandatamodelsrcmainjavacomkonfigthisclientmodelplandatamodeljava"></a>

##### BillingAddress: [`AddressDataModel`](./src/main/java/com/konfigthis/client/model/AddressDataModel.java)<a id="billingaddress-addressdatamodelsrcmainjavacomkonfigthisclientmodeladdressdatamodeljava"></a>

##### PaymentMethod: [`PaymentMethodModel`](./src/main/java/com/konfigthis/client/model/PaymentMethodModel.java)<a id="paymentmethod-paymentmethodmodelsrcmainjavacomkonfigthisclientmodelpaymentmethodmodeljava"></a>

##### RedirectUrls: [`RedirectionEndpointsModel`](./src/main/java/com/konfigthis/client/model/RedirectionEndpointsModel.java)<a id="redirecturls-redirectionendpointsmodelsrcmainjavacomkonfigthisclientmodelredirectionendpointsmodeljava"></a>

##### ProcessingData: [`ProcessingData`](./src/main/java/com/konfigthis/client/model/ProcessingData.java)<a id="processingdata-processingdatasrcmainjavacomkonfigthisclientmodelprocessingdatajava"></a>

##### EventsEndpoints: [`EventsEndpointsModel`](./src/main/java/com/konfigthis/client/model/EventsEndpointsModel.java)<a id="eventsendpoints-eventsendpointsmodelsrcmainjavacomkonfigthisclientmodeleventsendpointsmodeljava"></a>

##### xSplititTestMode: `String`<a id="xsplitittestmode-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[InstallmentPlanCreateResponse](./src/main/java/com/konfigthis/client/model/InstallmentPlanCreateResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/installmentplans` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `javasplitit.installmentPlan.refund`<a id="javasplititinstallmentplanrefund"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
InstallmentPlanRefundResponse result = client
        .installmentPlan
        .refund(amount, installmentPlanNumber, xSplititIdempotencyKey, xSplititTouchPoint)
        .refundStrategy(refundStrategy)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### Amount: `Double`<a id="amount-double"></a>

##### installmentPlanNumber: `String`<a id="installmentplannumber-string"></a>

##### xSplititIdempotencyKey: `String`<a id="xsplititidempotencykey-string"></a>

##### xSplititTouchPoint: `String`<a id="xsplitittouchpoint-string"></a>

TouchPoint

##### RefundStrategy:<a id="refundstrategy"></a>

#### 🔄 Return<a id="🔄-return"></a>

[InstallmentPlanRefundResponse](./src/main/java/com/konfigthis/client/model/InstallmentPlanRefundResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/installmentplans/{installmentPlanNumber}/refund` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `javasplitit.installmentPlan.search`<a id="javasplititinstallmentplansearch"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
InstallmentPlanSearchResponse result = client
        .installmentPlan
        .search(xSplititIdempotencyKey, xSplititTouchPoint)
        .installmentPlanNumber(installmentPlanNumber)
        .refOrderNumber(refOrderNumber)
        .extendedParams(extendedParams)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xSplititIdempotencyKey: `String`<a id="xsplititidempotencykey-string"></a>

##### xSplititTouchPoint: `String`<a id="xsplitittouchpoint-string"></a>

TouchPoint

##### installmentPlanNumber: `String`<a id="installmentplannumber-string"></a>

##### refOrderNumber: `String`<a id="refordernumber-string"></a>

##### extendedParams: Map<string, `String`><a id="extendedparams-map"></a>

#### 🔄 Return<a id="🔄-return"></a>

[InstallmentPlanSearchResponse](./src/main/java/com/konfigthis/client/model/InstallmentPlanSearchResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/installmentplans/search` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `javasplitit.installmentPlan.updateOrder`<a id="javasplititinstallmentplanupdateorder"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
InstallmentPlanUpdateResponse result = client
        .installmentPlan
        .updateOrder(installmentPlanNumber, xSplititIdempotencyKey, xSplititTouchPoint)
        .trackingNumber(trackingNumber)
        .refOrderNumber(refOrderNumber)
        .shippingStatus(shippingStatus)
        .capture(capture)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### installmentPlanNumber: `String`<a id="installmentplannumber-string"></a>

##### xSplititIdempotencyKey: `String`<a id="xsplititidempotencykey-string"></a>

##### xSplititTouchPoint: `String`<a id="xsplitittouchpoint-string"></a>

TouchPoint

##### TrackingNumber: `String`<a id="trackingnumber-string"></a>

##### RefOrderNumber: `String`<a id="refordernumber-string"></a>

##### ShippingStatus:<a id="shippingstatus"></a>

##### Capture: `Boolean`<a id="capture-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[InstallmentPlanUpdateResponse](./src/main/java/com/konfigthis/client/model/InstallmentPlanUpdateResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/installmentplans/{installmentPlanNumber}/updateorder` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `javasplitit.installmentPlan.updateOrder2`<a id="javasplititinstallmentplanupdateorder2"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
InstallmentPlanUpdateResponse result = client
        .installmentPlan
        .updateOrder2(xSplititIdempotencyKey, xSplititTouchPoint)
        .refOrderNumber(refOrderNumber)
        .trackingNumber(trackingNumber)
        .capture(capture)
        .shippingStatus(shippingStatus)
        .identifier(identifier)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xSplititIdempotencyKey: `String`<a id="xsplititidempotencykey-string"></a>

##### xSplititTouchPoint: `String`<a id="xsplitittouchpoint-string"></a>

TouchPoint

##### RefOrderNumber: `String`<a id="refordernumber-string"></a>

##### TrackingNumber: `String`<a id="trackingnumber-string"></a>

##### Capture: `Boolean`<a id="capture-boolean"></a>

##### ShippingStatus:<a id="shippingstatus"></a>

##### Identifier: [`IdentifierContract`](./src/main/java/com/konfigthis/client/model/IdentifierContract.java)<a id="identifier-identifiercontractsrcmainjavacomkonfigthisclientmodelidentifiercontractjava"></a>

#### 🔄 Return<a id="🔄-return"></a>

[InstallmentPlanUpdateResponse](./src/main/java/com/konfigthis/client/model/InstallmentPlanUpdateResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/installmentplans/updateorder` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `javasplitit.installmentPlan.verifyAuthorization`<a id="javasplititinstallmentplanverifyauthorization"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
VerifyAuthorizationResponse result = client
        .installmentPlan
        .verifyAuthorization(installmentPlanNumber, xSplititIdempotencyKey, xSplititTouchPoint)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### installmentPlanNumber: `String`<a id="installmentplannumber-string"></a>

##### xSplititIdempotencyKey: `String`<a id="xsplititidempotencykey-string"></a>

##### xSplititTouchPoint: `String`<a id="xsplitittouchpoint-string"></a>

TouchPoint

#### 🔄 Return<a id="🔄-return"></a>

[VerifyAuthorizationResponse](./src/main/java/com/konfigthis/client/model/VerifyAuthorizationResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/api/installmentplans/{installmentPlanNumber}/verifyauthorization` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This Java package is automatically generated by [Konfig](https://konfigthis.com)
