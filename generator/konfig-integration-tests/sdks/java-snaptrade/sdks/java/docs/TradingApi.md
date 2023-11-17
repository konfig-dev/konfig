# TradingApi

All URIs are relative to *https://api.snaptrade.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cancelUserAccountOrder**](TradingApi.md#cancelUserAccountOrder) | **POST** /accounts/{accountId}/orders/cancel | Cancel open order in account |
| [**getOrderImpact**](TradingApi.md#getOrderImpact) | **POST** /trade/impact | Check impact of trades on account. |
| [**getUserAccountQuotes**](TradingApi.md#getUserAccountQuotes) | **GET** /accounts/{accountId}/quotes | Get symbol quotes |
| [**placeForceOrder**](TradingApi.md#placeForceOrder) | **POST** /trade/place | Place a trade with NO validation. |
| [**placeOCOOrder**](TradingApi.md#placeOCOOrder) | **POST** /trade/oco | Place a OCO (One Cancels Other) order |
| [**placeOrder**](TradingApi.md#placeOrder) | **POST** /trade/{tradeId} | Place order |


<a name="cancelUserAccountOrder"></a>
# **cancelUserAccountOrder**
> AccountOrderRecord cancelUserAccountOrder(userId, userSecret, accountId, tradingCancelUserAccountOrderRequest).execute();

Cancel open order in account

### Example
```java
import com.konfigthis.client.ApiClient;
import com.konfigthis.client.ApiException;
import com.konfigthis.client.ApiResponse;
import com.konfigthis.client.Snaptrade;
import com.konfigthis.client.Configuration;
import com.konfigthis.client.auth.*;
import com.konfigthis.client.model.*;
import com.konfigthis.client.api.TradingApi;
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
    UUID accountId = UUID.randomUUID(); // The ID of the account to cancel the order in.
    UUID brokerageOrderId = UUID.randomUUID();
    try {
      AccountOrderRecord result = client
              .trading
              .cancelUserAccountOrder(userId, userSecret, accountId)
              .brokerageOrderId(brokerageOrderId)
              .execute();
      System.out.println(result);
      System.out.println(result.getBrokerageOrderId());
      System.out.println(result.getStatus());
      System.out.println(result.getSymbol());
      System.out.println(result.getUniversalSymbol());
      System.out.println(result.getOptionSymbol());
      System.out.println(result.getAction());
      System.out.println(result.getTotalQuantity());
      System.out.println(result.getOpenQuantity());
      System.out.println(result.getCanceledQuantity());
      System.out.println(result.getFilledQuantity());
      System.out.println(result.getExecutionPrice());
      System.out.println(result.getLimitPrice());
      System.out.println(result.getStopPrice());
      System.out.println(result.getOrderType());
      System.out.println(result.getTimeInForce());
      System.out.println(result.getTimePlaced());
      System.out.println(result.getTimeUpdated());
      System.out.println(result.getExpiryDate());
    } catch (ApiException e) {
      System.err.println("Exception when calling TradingApi#cancelUserAccountOrder");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<AccountOrderRecord> response = client
              .trading
              .cancelUserAccountOrder(userId, userSecret, accountId)
              .brokerageOrderId(brokerageOrderId)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling TradingApi#cancelUserAccountOrder");
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
| **accountId** | **UUID**| The ID of the account to cancel the order in. | |
| **tradingCancelUserAccountOrderRequest** | [**TradingCancelUserAccountOrderRequest**](TradingCancelUserAccountOrderRequest.md)| The Order ID to be canceled | |

### Return type

[**AccountOrderRecord**](AccountOrderRecord.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Order Record of canceled order |  -  |

<a name="getOrderImpact"></a>
# **getOrderImpact**
> ManualTradeAndImpact getOrderImpact(userId, userSecret, manualTradeForm).execute();

Check impact of trades on account.

### Example
```java
import com.konfigthis.client.ApiClient;
import com.konfigthis.client.ApiException;
import com.konfigthis.client.ApiResponse;
import com.konfigthis.client.Snaptrade;
import com.konfigthis.client.Configuration;
import com.konfigthis.client.auth.*;
import com.konfigthis.client.model.*;
import com.konfigthis.client.api.TradingApi;
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
    UUID accountId = UUID.randomUUID();
    Action action = Action.fromValue("BUY");
    OrderType orderType = OrderType.fromValue("Limit");
    Double price = 3.4D; // Trade Price if limit or stop limit order
    Double stop = 3.4D; // Stop Price. If stop loss or stop limit order, the price to trigger the stop
    TimeInForce timeInForce = TimeInForce.fromValue("Day");
    Double units = 3.4D; // Trade Units
    UUID universalSymbolId = UUID.randomUUID();
    try {
      ManualTradeAndImpact result = client
              .trading
              .getOrderImpact(userId, userSecret)
              .accountId(accountId)
              .action(action)
              .orderType(orderType)
              .price(price)
              .stop(stop)
              .timeInForce(timeInForce)
              .units(units)
              .universalSymbolId(universalSymbolId)
              .execute();
      System.out.println(result);
      System.out.println(result.getTrade());
      System.out.println(result.getTradeImpacts());
      System.out.println(result.getCombinedRemainingBalance());
    } catch (ApiException e) {
      System.err.println("Exception when calling TradingApi#getOrderImpact");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<ManualTradeAndImpact> response = client
              .trading
              .getOrderImpact(userId, userSecret)
              .accountId(accountId)
              .action(action)
              .orderType(orderType)
              .price(price)
              .stop(stop)
              .timeInForce(timeInForce)
              .units(units)
              .universalSymbolId(universalSymbolId)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling TradingApi#getOrderImpact");
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
| **manualTradeForm** | [**ManualTradeForm**](ManualTradeForm.md)|  | |

### Return type

[**ManualTradeAndImpact**](ManualTradeAndImpact.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Return trade object and it&#39;s impact on the account |  -  |
| **500** | Unexpected Error |  -  |

<a name="getUserAccountQuotes"></a>
# **getUserAccountQuotes**
> List&lt;SymbolsQuotesInner&gt; getUserAccountQuotes(userId, userSecret, symbols, accountId).useTicker(useTicker).execute();

Get symbol quotes

### Example
```java
import com.konfigthis.client.ApiClient;
import com.konfigthis.client.ApiException;
import com.konfigthis.client.ApiResponse;
import com.konfigthis.client.Snaptrade;
import com.konfigthis.client.Configuration;
import com.konfigthis.client.auth.*;
import com.konfigthis.client.model.*;
import com.konfigthis.client.api.TradingApi;
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
    String symbols = "symbols_example"; // List of universal_symbol_id or tickers to get quotes for.
    String accountId = "accountId_example"; // The ID of the account to get quotes.
    Boolean useTicker = true; // Should be set to True if providing tickers.
    try {
      List<SymbolsQuotesInner> result = client
              .trading
              .getUserAccountQuotes(userId, userSecret, symbols, accountId)
              .useTicker(useTicker)
              .execute();
    } catch (ApiException e) {
      System.err.println("Exception when calling TradingApi#getUserAccountQuotes");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<List<SymbolsQuotesInner>> response = client
              .trading
              .getUserAccountQuotes(userId, userSecret, symbols, accountId)
              .useTicker(useTicker)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling TradingApi#getUserAccountQuotes");
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
| **symbols** | **String**| List of universal_symbol_id or tickers to get quotes for. | |
| **accountId** | **String**| The ID of the account to get quotes. | |
| **useTicker** | **Boolean**| Should be set to True if providing tickers. | [optional] |

### Return type

[**List&lt;SymbolsQuotesInner&gt;**](SymbolsQuotesInner.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Returns quotes object with different prices |  -  |

<a name="placeForceOrder"></a>
# **placeForceOrder**
> AccountOrderRecord placeForceOrder(userId, userSecret, manualTradeForm).execute();

Place a trade with NO validation.

### Example
```java
import com.konfigthis.client.ApiClient;
import com.konfigthis.client.ApiException;
import com.konfigthis.client.ApiResponse;
import com.konfigthis.client.Snaptrade;
import com.konfigthis.client.Configuration;
import com.konfigthis.client.auth.*;
import com.konfigthis.client.model.*;
import com.konfigthis.client.api.TradingApi;
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
    UUID accountId = UUID.randomUUID();
    Action action = Action.fromValue("BUY");
    OrderType orderType = OrderType.fromValue("Limit");
    Double price = 3.4D; // Trade Price if limit or stop limit order
    Double stop = 3.4D; // Stop Price. If stop loss or stop limit order, the price to trigger the stop
    TimeInForce timeInForce = TimeInForce.fromValue("Day");
    Double units = 3.4D; // Trade Units
    UUID universalSymbolId = UUID.randomUUID();
    try {
      AccountOrderRecord result = client
              .trading
              .placeForceOrder(userId, userSecret)
              .accountId(accountId)
              .action(action)
              .orderType(orderType)
              .price(price)
              .stop(stop)
              .timeInForce(timeInForce)
              .units(units)
              .universalSymbolId(universalSymbolId)
              .execute();
      System.out.println(result);
      System.out.println(result.getBrokerageOrderId());
      System.out.println(result.getStatus());
      System.out.println(result.getSymbol());
      System.out.println(result.getUniversalSymbol());
      System.out.println(result.getOptionSymbol());
      System.out.println(result.getAction());
      System.out.println(result.getTotalQuantity());
      System.out.println(result.getOpenQuantity());
      System.out.println(result.getCanceledQuantity());
      System.out.println(result.getFilledQuantity());
      System.out.println(result.getExecutionPrice());
      System.out.println(result.getLimitPrice());
      System.out.println(result.getStopPrice());
      System.out.println(result.getOrderType());
      System.out.println(result.getTimeInForce());
      System.out.println(result.getTimePlaced());
      System.out.println(result.getTimeUpdated());
      System.out.println(result.getExpiryDate());
    } catch (ApiException e) {
      System.err.println("Exception when calling TradingApi#placeForceOrder");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<AccountOrderRecord> response = client
              .trading
              .placeForceOrder(userId, userSecret)
              .accountId(accountId)
              .action(action)
              .orderType(orderType)
              .price(price)
              .stop(stop)
              .timeInForce(timeInForce)
              .units(units)
              .universalSymbolId(universalSymbolId)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling TradingApi#placeForceOrder");
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
| **manualTradeForm** | [**ManualTradeForm**](ManualTradeForm.md)|  | |

### Return type

[**AccountOrderRecord**](AccountOrderRecord.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Trade sucessfully placed |  -  |
| **500** | Unexpected Error |  -  |

<a name="placeOCOOrder"></a>
# **placeOCOOrder**
> AccountOrderRecord placeOCOOrder(userId, userSecret, tradingPlaceOCOOrderRequest).execute();

Place a OCO (One Cancels Other) order

### Example
```java
import com.konfigthis.client.ApiClient;
import com.konfigthis.client.ApiException;
import com.konfigthis.client.ApiResponse;
import com.konfigthis.client.Snaptrade;
import com.konfigthis.client.Configuration;
import com.konfigthis.client.auth.*;
import com.konfigthis.client.model.*;
import com.konfigthis.client.api.TradingApi;
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
    Object firstTradeId = null; // The ID of first trade object obtained from trade/impact endpoint
    Object secondTradeId = null; // The ID of second trade object obtained from trade/impact endpoint
    try {
      AccountOrderRecord result = client
              .trading
              .placeOCOOrder(userId, userSecret)
              .firstTradeId(firstTradeId)
              .secondTradeId(secondTradeId)
              .execute();
      System.out.println(result);
      System.out.println(result.getBrokerageOrderId());
      System.out.println(result.getStatus());
      System.out.println(result.getSymbol());
      System.out.println(result.getUniversalSymbol());
      System.out.println(result.getOptionSymbol());
      System.out.println(result.getAction());
      System.out.println(result.getTotalQuantity());
      System.out.println(result.getOpenQuantity());
      System.out.println(result.getCanceledQuantity());
      System.out.println(result.getFilledQuantity());
      System.out.println(result.getExecutionPrice());
      System.out.println(result.getLimitPrice());
      System.out.println(result.getStopPrice());
      System.out.println(result.getOrderType());
      System.out.println(result.getTimeInForce());
      System.out.println(result.getTimePlaced());
      System.out.println(result.getTimeUpdated());
      System.out.println(result.getExpiryDate());
    } catch (ApiException e) {
      System.err.println("Exception when calling TradingApi#placeOCOOrder");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<AccountOrderRecord> response = client
              .trading
              .placeOCOOrder(userId, userSecret)
              .firstTradeId(firstTradeId)
              .secondTradeId(secondTradeId)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling TradingApi#placeOCOOrder");
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
| **tradingPlaceOCOOrderRequest** | [**TradingPlaceOCOOrderRequest**](TradingPlaceOCOOrderRequest.md)|  | |

### Return type

[**AccountOrderRecord**](AccountOrderRecord.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Status of order placed |  -  |
| **500** | Unexpected Error |  -  |

<a name="placeOrder"></a>
# **placeOrder**
> AccountOrderRecord placeOrder(tradeId, userId, userSecret).execute();

Place order

### Example
```java
import com.konfigthis.client.ApiClient;
import com.konfigthis.client.ApiException;
import com.konfigthis.client.ApiResponse;
import com.konfigthis.client.Snaptrade;
import com.konfigthis.client.Configuration;
import com.konfigthis.client.auth.*;
import com.konfigthis.client.model.*;
import com.konfigthis.client.api.TradingApi;
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
    UUID tradeId = UUID.randomUUID(); // The ID of trade object obtained from trade/impact endpoint
    String userId = "userId_example";
    String userSecret = "userSecret_example";
    try {
      AccountOrderRecord result = client
              .trading
              .placeOrder(tradeId, userId, userSecret)
              .execute();
      System.out.println(result);
      System.out.println(result.getBrokerageOrderId());
      System.out.println(result.getStatus());
      System.out.println(result.getSymbol());
      System.out.println(result.getUniversalSymbol());
      System.out.println(result.getOptionSymbol());
      System.out.println(result.getAction());
      System.out.println(result.getTotalQuantity());
      System.out.println(result.getOpenQuantity());
      System.out.println(result.getCanceledQuantity());
      System.out.println(result.getFilledQuantity());
      System.out.println(result.getExecutionPrice());
      System.out.println(result.getLimitPrice());
      System.out.println(result.getStopPrice());
      System.out.println(result.getOrderType());
      System.out.println(result.getTimeInForce());
      System.out.println(result.getTimePlaced());
      System.out.println(result.getTimeUpdated());
      System.out.println(result.getExpiryDate());
    } catch (ApiException e) {
      System.err.println("Exception when calling TradingApi#placeOrder");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<AccountOrderRecord> response = client
              .trading
              .placeOrder(tradeId, userId, userSecret)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling TradingApi#placeOrder");
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
| **tradeId** | **UUID**| The ID of trade object obtained from trade/impact endpoint | |
| **userId** | **String**|  | |
| **userSecret** | **String**|  | |

### Return type

[**AccountOrderRecord**](AccountOrderRecord.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Status of order placed |  -  |
| **500** | Unexpected Error |  -  |

