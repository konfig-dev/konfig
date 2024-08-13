# ConnectionsApi

All URIs are relative to *https://api.snaptrade.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**detailBrokerageAuthorization**](ConnectionsApi.md#detailBrokerageAuthorization) | **GET** /authorizations/{authorizationId} | Get brokerage authorization details |
| [**disableBrokerageAuthorization**](ConnectionsApi.md#disableBrokerageAuthorization) | **POST** /authorizations/{authorizationId}/disable | Manually disable a connection for testing |
| [**listBrokerageAuthorizations**](ConnectionsApi.md#listBrokerageAuthorizations) | **GET** /authorizations | List all brokerage authorizations for the User |
| [**refreshBrokerageAuthorization**](ConnectionsApi.md#refreshBrokerageAuthorization) | **POST** /authorizations/{authorizationId}/refresh | Refresh holdings for a connection |
| [**removeBrokerageAuthorization**](ConnectionsApi.md#removeBrokerageAuthorization) | **DELETE** /authorizations/{authorizationId} | Delete brokerage authorization |
| [**sessionEvents**](ConnectionsApi.md#sessionEvents) | **GET** /sessionEvents | Get all session events for a user |


<a name="detailBrokerageAuthorization"></a>
# **detailBrokerageAuthorization**
> BrokerageAuthorization detailBrokerageAuthorization(authorizationId, userId, userSecret).execute();

Get brokerage authorization details

Returns a single brokerage authorization object for the specified ID.

### Example
```java
import com.konfigthis.client.ApiClient;
import com.konfigthis.client.ApiException;
import com.konfigthis.client.ApiResponse;
import com.konfigthis.client.Snaptrade;
import com.konfigthis.client.Configuration;
import com.konfigthis.client.auth.*;
import com.konfigthis.client.model.*;
import com.konfigthis.client.api.ConnectionsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.snaptrade.com/api/v1";
    configuration.clientId = System.getenv("SNAPTRADE_CLIENT_ID");
    configuration.consumerKey = System.getenv("SNAPTRADE_CONSUMER_KEY");
    
    Snaptrade client = new Snaptrade(configuration);
    UUID authorizationId = UUID.randomUUID(); // The ID of a brokerage authorization object.
    String userId = "userId_example";
    String userSecret = "userSecret_example";
    try {
      BrokerageAuthorization result = client
              .connections
              .detailBrokerageAuthorization(authorizationId, userId, userSecret)
              .execute();
      System.out.println(result);
      System.out.println(result.getId());
      System.out.println(result.getCreatedDate());
      System.out.println(result.getUpdatedDate());
      System.out.println(result.getBrokerage());
      System.out.println(result.getName());
      System.out.println(result.getType());
      System.out.println(result.getDisabled());
      System.out.println(result.getDisabledDate());
      System.out.println(result.getMeta());
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsApi#detailBrokerageAuthorization");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<BrokerageAuthorization> response = client
              .connections
              .detailBrokerageAuthorization(authorizationId, userId, userSecret)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsApi#detailBrokerageAuthorization");
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
| **authorizationId** | **UUID**| The ID of a brokerage authorization object. | |
| **userId** | **String**|  | |
| **userSecret** | **String**|  | |

### Return type

[**BrokerageAuthorization**](BrokerageAuthorization.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Authorization object for the authenticated user. |  -  |
| **0** | Unexpected error. |  -  |

<a name="disableBrokerageAuthorization"></a>
# **disableBrokerageAuthorization**
> BrokerageAuthorizationDisabledConfirmation disableBrokerageAuthorization(authorizationId, userId, userSecret).execute();

Manually disable a connection for testing

Manually disable a connection. This should only be used for testing a reconnect flow, and never used on production connections. Will trigger a disconnect as if it happened naturally, and send a CONNECTION_BROKEN webhook for the connection. Please contact us in order to use this endpoint as it is disabled by default.

### Example
```java
import com.konfigthis.client.ApiClient;
import com.konfigthis.client.ApiException;
import com.konfigthis.client.ApiResponse;
import com.konfigthis.client.Snaptrade;
import com.konfigthis.client.Configuration;
import com.konfigthis.client.auth.*;
import com.konfigthis.client.model.*;
import com.konfigthis.client.api.ConnectionsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.snaptrade.com/api/v1";
    configuration.clientId = System.getenv("SNAPTRADE_CLIENT_ID");
    configuration.consumerKey = System.getenv("SNAPTRADE_CONSUMER_KEY");
    
    Snaptrade client = new Snaptrade(configuration);
    UUID authorizationId = UUID.randomUUID(); // The ID of a brokerage authorization object.
    String userId = "userId_example";
    String userSecret = "userSecret_example";
    try {
      BrokerageAuthorizationDisabledConfirmation result = client
              .connections
              .disableBrokerageAuthorization(authorizationId, userId, userSecret)
              .execute();
      System.out.println(result);
      System.out.println(result.getDetail());
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsApi#disableBrokerageAuthorization");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<BrokerageAuthorizationDisabledConfirmation> response = client
              .connections
              .disableBrokerageAuthorization(authorizationId, userId, userSecret)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsApi#disableBrokerageAuthorization");
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
| **authorizationId** | **UUID**| The ID of a brokerage authorization object. | |
| **userId** | **String**|  | |
| **userSecret** | **String**|  | |

### Return type

[**BrokerageAuthorizationDisabledConfirmation**](BrokerageAuthorizationDisabledConfirmation.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Confirmation that the connection has been disabled |  -  |

<a name="listBrokerageAuthorizations"></a>
# **listBrokerageAuthorizations**
> List&lt;BrokerageAuthorization&gt; listBrokerageAuthorizations(userId, userSecret).execute();

List all brokerage authorizations for the User

Returns a list of Brokerage Authorization objects for the user

### Example
```java
import com.konfigthis.client.ApiClient;
import com.konfigthis.client.ApiException;
import com.konfigthis.client.ApiResponse;
import com.konfigthis.client.Snaptrade;
import com.konfigthis.client.Configuration;
import com.konfigthis.client.auth.*;
import com.konfigthis.client.model.*;
import com.konfigthis.client.api.ConnectionsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.snaptrade.com/api/v1";
    configuration.clientId = System.getenv("SNAPTRADE_CLIENT_ID");
    configuration.consumerKey = System.getenv("SNAPTRADE_CONSUMER_KEY");
    
    Snaptrade client = new Snaptrade(configuration);
    String userId = "userId_example";
    String userSecret = "userSecret_example";
    try {
      List<BrokerageAuthorization> result = client
              .connections
              .listBrokerageAuthorizations(userId, userSecret)
              .execute();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsApi#listBrokerageAuthorizations");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<List<BrokerageAuthorization>> response = client
              .connections
              .listBrokerageAuthorizations(userId, userSecret)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsApi#listBrokerageAuthorizations");
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
| **userId** | **String**|  | |
| **userSecret** | **String**|  | |

### Return type

[**List&lt;BrokerageAuthorization&gt;**](BrokerageAuthorization.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of all Authorization objects for the authenticated user. |  -  |
| **0** | Unexpected error. |  -  |

<a name="refreshBrokerageAuthorization"></a>
# **refreshBrokerageAuthorization**
> BrokerageAuthorizationRefreshConfirmation refreshBrokerageAuthorization(authorizationId, userId, userSecret).execute();

Refresh holdings for a connection

Trigger a holdings update for all accounts under this authorization. Updates will be queued asynchronously. ACCOUNT_HOLDINGS_UPDATED webhook will be sent once the sync completes. Please contact support for access as this endpoint is not enabled by default

### Example
```java
import com.konfigthis.client.ApiClient;
import com.konfigthis.client.ApiException;
import com.konfigthis.client.ApiResponse;
import com.konfigthis.client.Snaptrade;
import com.konfigthis.client.Configuration;
import com.konfigthis.client.auth.*;
import com.konfigthis.client.model.*;
import com.konfigthis.client.api.ConnectionsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.snaptrade.com/api/v1";
    configuration.clientId = System.getenv("SNAPTRADE_CLIENT_ID");
    configuration.consumerKey = System.getenv("SNAPTRADE_CONSUMER_KEY");
    
    Snaptrade client = new Snaptrade(configuration);
    UUID authorizationId = UUID.randomUUID(); // The ID of a brokerage authorization object.
    String userId = "userId_example";
    String userSecret = "userSecret_example";
    try {
      BrokerageAuthorizationRefreshConfirmation result = client
              .connections
              .refreshBrokerageAuthorization(authorizationId, userId, userSecret)
              .execute();
      System.out.println(result);
      System.out.println(result.getDetail());
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsApi#refreshBrokerageAuthorization");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<BrokerageAuthorizationRefreshConfirmation> response = client
              .connections
              .refreshBrokerageAuthorization(authorizationId, userId, userSecret)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsApi#refreshBrokerageAuthorization");
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
| **authorizationId** | **UUID**| The ID of a brokerage authorization object. | |
| **userId** | **String**|  | |
| **userSecret** | **String**|  | |

### Return type

[**BrokerageAuthorizationRefreshConfirmation**](BrokerageAuthorizationRefreshConfirmation.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Confirmation that the syncs have been scheduled |  -  |

<a name="removeBrokerageAuthorization"></a>
# **removeBrokerageAuthorization**
> removeBrokerageAuthorization(authorizationId, userId, userSecret).execute();

Delete brokerage authorization

Deletes a specified brokerage authorization given by the ID.

### Example
```java
import com.konfigthis.client.ApiClient;
import com.konfigthis.client.ApiException;
import com.konfigthis.client.ApiResponse;
import com.konfigthis.client.Snaptrade;
import com.konfigthis.client.Configuration;
import com.konfigthis.client.auth.*;
import com.konfigthis.client.model.*;
import com.konfigthis.client.api.ConnectionsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.snaptrade.com/api/v1";
    configuration.clientId = System.getenv("SNAPTRADE_CLIENT_ID");
    configuration.consumerKey = System.getenv("SNAPTRADE_CONSUMER_KEY");
    
    Snaptrade client = new Snaptrade(configuration);
    UUID authorizationId = UUID.randomUUID(); // The ID of the Authorization to delete.
    String userId = "userId_example";
    String userSecret = "userSecret_example";
    try {
      client
              .connections
              .removeBrokerageAuthorization(authorizationId, userId, userSecret)
              .execute();
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsApi#removeBrokerageAuthorization");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      client
              .connections
              .removeBrokerageAuthorization(authorizationId, userId, userSecret)
              .executeWithHttpInfo();
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsApi#removeBrokerageAuthorization");
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
| **authorizationId** | **UUID**| The ID of the Authorization to delete. | |
| **userId** | **String**|  | |
| **userSecret** | **String**|  | |

### Return type

null (empty response body)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Brokerage authorization object has been successfully deleted |  -  |
| **400** | The specified authorizationId is invalid (not a UUID string). |  -  |
| **404** | The specified authorizationId was not found. |  -  |
| **0** | Unexpected error. |  -  |

<a name="sessionEvents"></a>
# **sessionEvents**
> List&lt;SessionEvent&gt; sessionEvents(partnerClientId).userId(userId).sessionId(sessionId).execute();

Get all session events for a user

Returns a list of session events associated with a user.

### Example
```java
import com.konfigthis.client.ApiClient;
import com.konfigthis.client.ApiException;
import com.konfigthis.client.ApiResponse;
import com.konfigthis.client.Snaptrade;
import com.konfigthis.client.Configuration;
import com.konfigthis.client.auth.*;
import com.konfigthis.client.model.*;
import com.konfigthis.client.api.ConnectionsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.snaptrade.com/api/v1";
    configuration.clientId = System.getenv("SNAPTRADE_CLIENT_ID");
    configuration.consumerKey = System.getenv("SNAPTRADE_CONSUMER_KEY");
    
    Snaptrade client = new Snaptrade(configuration);
    String partnerClientId = "partnerClientId_example";
    String userId = "userId_example"; // Optional comma seperated list of user IDs used to filter the request on specific users
    String sessionId = "sessionId_example"; // Optional comma seperated list of session IDs used to filter the request on specific users
    try {
      List<SessionEvent> result = client
              .connections
              .sessionEvents(partnerClientId)
              .userId(userId)
              .sessionId(sessionId)
              .execute();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsApi#sessionEvents");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<List<SessionEvent>> response = client
              .connections
              .sessionEvents(partnerClientId)
              .userId(userId)
              .sessionId(sessionId)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling ConnectionsApi#sessionEvents");
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
| **partnerClientId** | **String**|  | |
| **userId** | **String**| Optional comma seperated list of user IDs used to filter the request on specific users | [optional] |
| **sessionId** | **String**| Optional comma seperated list of session IDs used to filter the request on specific users | [optional] |

### Return type

[**List&lt;SessionEvent&gt;**](SessionEvent.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of all Session Events for the Partner. |  -  |
| **0** | Unexpected error. |  -  |

