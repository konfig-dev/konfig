# ReferenceDataApi

All URIs are relative to *https://api.snaptrade.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCurrencyExchangeRatePair**](ReferenceDataApi.md#getCurrencyExchangeRatePair) | **GET** /currencies/rates/{currencyPair} | Return the exchange rate of a currency pair |
| [**getPartnerInfo**](ReferenceDataApi.md#getPartnerInfo) | **GET** /snapTrade/partners | Get metadata related to Snaptrade partner |
| [**getSecurityTypes**](ReferenceDataApi.md#getSecurityTypes) | **GET** /securityTypes | List of all security types |
| [**getStockExchanges**](ReferenceDataApi.md#getStockExchanges) | **GET** /exchanges | List exchanges |
| [**getSymbols**](ReferenceDataApi.md#getSymbols) | **POST** /symbols | Search for symbols |
| [**getSymbolsByTicker**](ReferenceDataApi.md#getSymbolsByTicker) | **GET** /symbols/{ticker} | Get details of a symbol by the ticker |
| [**listAllBrokerageAuthorizationType**](ReferenceDataApi.md#listAllBrokerageAuthorizationType) | **GET** /brokerageAuthorizationTypes | List of all brokerage authorization types |
| [**listAllBrokerages**](ReferenceDataApi.md#listAllBrokerages) | **GET** /brokerages | List brokerages |
| [**listAllCurrencies**](ReferenceDataApi.md#listAllCurrencies) | **GET** /currencies | List currencies |
| [**listAllCurrenciesRates**](ReferenceDataApi.md#listAllCurrenciesRates) | **GET** /currencies/rates | List currency exchange rates |
| [**symbolSearchUserAccount**](ReferenceDataApi.md#symbolSearchUserAccount) | **POST** /accounts/{accountId}/symbols | Search for symbols available in an account |


<a name="getCurrencyExchangeRatePair"></a>
# **getCurrencyExchangeRatePair**
> ExchangeRatePairs getCurrencyExchangeRatePair(currencyPair).execute();

Return the exchange rate of a currency pair

### Example
```java
import com.konfigthis.client.ApiClient;
import com.konfigthis.client.ApiException;
import com.konfigthis.client.ApiResponse;
import com.konfigthis.client.Snaptrade;
import com.konfigthis.client.Configuration;
import com.konfigthis.client.auth.*;
import com.konfigthis.client.model.*;
import com.konfigthis.client.api.ReferenceDataApi;
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
    String currencyPair = "currencyPair_example"; // A currency pair based on currency code for example, {CAD-USD}
    try {
      ExchangeRatePairs result = client
              .referenceData
              .getCurrencyExchangeRatePair(currencyPair)
              .execute();
      System.out.println(result);
      System.out.println(result.getSrc());
      System.out.println(result.getDst());
      System.out.println(result.getExchangeRate());
    } catch (ApiException e) {
      System.err.println("Exception when calling ReferenceDataApi#getCurrencyExchangeRatePair");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<ExchangeRatePairs> response = client
              .referenceData
              .getCurrencyExchangeRatePair(currencyPair)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling ReferenceDataApi#getCurrencyExchangeRatePair");
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
| **currencyPair** | **String**| A currency pair based on currency code for example, {CAD-USD} | |

### Return type

[**ExchangeRatePairs**](ExchangeRatePairs.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of all exchange rates pairs for supported currencies |  -  |

<a name="getPartnerInfo"></a>
# **getPartnerInfo**
> PartnerData getPartnerInfo().execute();

Get metadata related to Snaptrade partner

### Example
```java
import com.konfigthis.client.ApiClient;
import com.konfigthis.client.ApiException;
import com.konfigthis.client.ApiResponse;
import com.konfigthis.client.Snaptrade;
import com.konfigthis.client.Configuration;
import com.konfigthis.client.auth.*;
import com.konfigthis.client.model.*;
import com.konfigthis.client.api.ReferenceDataApi;
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
    try {
      PartnerData result = client
              .referenceData
              .getPartnerInfo()
              .execute();
      System.out.println(result);
      System.out.println(result.getRedirectUri());
      System.out.println(result.getAllowedBrokerages());
      System.out.println(result.getName());
      System.out.println(result.getSlug());
      System.out.println(result.getLogoUrl());
      System.out.println(result.getPinRequired());
      System.out.println(result.getCanAccessTrades());
      System.out.println(result.getCanAccessHoldings());
      System.out.println(result.getCanAccessAccountHistory());
      System.out.println(result.getCanAccessReferenceData());
      System.out.println(result.getCanAccessPortfolioManagement());
      System.out.println(result.getCanAccessOrders());
    } catch (ApiException e) {
      System.err.println("Exception when calling ReferenceDataApi#getPartnerInfo");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<PartnerData> response = client
              .referenceData
              .getPartnerInfo()
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling ReferenceDataApi#getPartnerInfo");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**PartnerData**](PartnerData.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully obtained encrypted JWT data. See description on how to object JWT token |  -  |
| **500** | Unexpected Error |  -  |

<a name="getSecurityTypes"></a>
# **getSecurityTypes**
> List&lt;SecurityType&gt; getSecurityTypes().execute();

List of all security types

List security types available on SnapTrade.

### Example
```java
import com.konfigthis.client.ApiClient;
import com.konfigthis.client.ApiException;
import com.konfigthis.client.ApiResponse;
import com.konfigthis.client.Snaptrade;
import com.konfigthis.client.Configuration;
import com.konfigthis.client.auth.*;
import com.konfigthis.client.model.*;
import com.konfigthis.client.api.ReferenceDataApi;
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
    try {
      List<SecurityType> result = client
              .referenceData
              .getSecurityTypes()
              .execute();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReferenceDataApi#getSecurityTypes");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<List<SecurityType>> response = client
              .referenceData
              .getSecurityTypes()
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling ReferenceDataApi#getSecurityTypes");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;SecurityType&gt;**](SecurityType.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of all defined Security Type objects. |  -  |
| **0** | Unexpected error. |  -  |

<a name="getStockExchanges"></a>
# **getStockExchanges**
> List&lt;Exchange&gt; getStockExchanges().execute();

List exchanges

### Example
```java
import com.konfigthis.client.ApiClient;
import com.konfigthis.client.ApiException;
import com.konfigthis.client.ApiResponse;
import com.konfigthis.client.Snaptrade;
import com.konfigthis.client.Configuration;
import com.konfigthis.client.auth.*;
import com.konfigthis.client.model.*;
import com.konfigthis.client.api.ReferenceDataApi;
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
    try {
      List<Exchange> result = client
              .referenceData
              .getStockExchanges()
              .execute();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReferenceDataApi#getStockExchanges");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<List<Exchange>> response = client
              .referenceData
              .getStockExchanges()
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling ReferenceDataApi#getStockExchanges");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;Exchange&gt;**](Exchange.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of all supported stock exchanges |  -  |

<a name="getSymbols"></a>
# **getSymbols**
> List&lt;UniversalSymbol&gt; getSymbols().symbolQuery(symbolQuery).execute();

Search for symbols

### Example
```java
import com.konfigthis.client.ApiClient;
import com.konfigthis.client.ApiException;
import com.konfigthis.client.ApiResponse;
import com.konfigthis.client.Snaptrade;
import com.konfigthis.client.Configuration;
import com.konfigthis.client.auth.*;
import com.konfigthis.client.model.*;
import com.konfigthis.client.api.ReferenceDataApi;
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
    String substring = "substring_example";
    try {
      List<UniversalSymbol> result = client
              .referenceData
              .getSymbols()
              .substring(substring)
              .execute();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReferenceDataApi#getSymbols");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<List<UniversalSymbol>> response = client
              .referenceData
              .getSymbols()
              .substring(substring)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling ReferenceDataApi#getSymbols");
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
| **symbolQuery** | [**SymbolQuery**](SymbolQuery.md)|  | [optional] |

### Return type

[**List&lt;UniversalSymbol&gt;**](UniversalSymbol.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of UniversalSymbol objects which match the specified substring |  -  |
| **0** | Unexpected error. |  -  |

<a name="getSymbolsByTicker"></a>
# **getSymbolsByTicker**
> UniversalSymbol getSymbolsByTicker(ticker).symbolId(symbolId).execute();

Get details of a symbol by the ticker

### Example
```java
import com.konfigthis.client.ApiClient;
import com.konfigthis.client.ApiException;
import com.konfigthis.client.ApiResponse;
import com.konfigthis.client.Snaptrade;
import com.konfigthis.client.Configuration;
import com.konfigthis.client.auth.*;
import com.konfigthis.client.model.*;
import com.konfigthis.client.api.ReferenceDataApi;
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
    String ticker = "ticker_example"; // The ticker of the UniversalSymbol to get.
    UUID symbolId = UUID.randomUUID(); // OPTIONAL IN PATH Can be used instead of the ticker ; The ID of the UniversalSymbol to get.
    try {
      UniversalSymbol result = client
              .referenceData
              .getSymbolsByTicker(ticker)
              .symbolId(symbolId)
              .execute();
      System.out.println(result);
      System.out.println(result.getId());
      System.out.println(result.getSymbol());
      System.out.println(result.getRawSymbol());
      System.out.println(result.getDescription());
      System.out.println(result.getCurrency());
      System.out.println(result.getExchange());
      System.out.println(result.getType());
      System.out.println(result.getCurrencies());
    } catch (ApiException e) {
      System.err.println("Exception when calling ReferenceDataApi#getSymbolsByTicker");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<UniversalSymbol> response = client
              .referenceData
              .getSymbolsByTicker(ticker)
              .symbolId(symbolId)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling ReferenceDataApi#getSymbolsByTicker");
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
| **ticker** | **String**| The ticker of the UniversalSymbol to get. | |
| **symbolId** | **UUID**| OPTIONAL IN PATH Can be used instead of the ticker ; The ID of the UniversalSymbol to get. | [optional] |

### Return type

[**UniversalSymbol**](UniversalSymbol.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully gets a symbol |  -  |
| **404** | No symbol with the specified ticker found. |  -  |
| **0** | Unexpected error |  -  |

<a name="listAllBrokerageAuthorizationType"></a>
# **listAllBrokerageAuthorizationType**
> List&lt;BrokerageAuthorizationTypeReadOnly&gt; listAllBrokerageAuthorizationType().brokerage(brokerage).execute();

List of all brokerage authorization types

### Example
```java
import com.konfigthis.client.ApiClient;
import com.konfigthis.client.ApiException;
import com.konfigthis.client.ApiResponse;
import com.konfigthis.client.Snaptrade;
import com.konfigthis.client.Configuration;
import com.konfigthis.client.auth.*;
import com.konfigthis.client.model.*;
import com.konfigthis.client.api.ReferenceDataApi;
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
    String brokerage = "QUESTRADE,ALPACA"; // Comma separated value of brokerage slugs
    try {
      List<BrokerageAuthorizationTypeReadOnly> result = client
              .referenceData
              .listAllBrokerageAuthorizationType()
              .brokerage(brokerage)
              .execute();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReferenceDataApi#listAllBrokerageAuthorizationType");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<List<BrokerageAuthorizationTypeReadOnly>> response = client
              .referenceData
              .listAllBrokerageAuthorizationType()
              .brokerage(brokerage)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling ReferenceDataApi#listAllBrokerageAuthorizationType");
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
| **brokerage** | **String**| Comma separated value of brokerage slugs | [optional] |

### Return type

[**List&lt;BrokerageAuthorizationTypeReadOnly&gt;**](BrokerageAuthorizationTypeReadOnly.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of all defined Brokerage Authorization Type objects. |  -  |
| **0** | Unexpected error. |  -  |

<a name="listAllBrokerages"></a>
# **listAllBrokerages**
> List&lt;Brokerage&gt; listAllBrokerages().execute();

List brokerages

### Example
```java
import com.konfigthis.client.ApiClient;
import com.konfigthis.client.ApiException;
import com.konfigthis.client.ApiResponse;
import com.konfigthis.client.Snaptrade;
import com.konfigthis.client.Configuration;
import com.konfigthis.client.auth.*;
import com.konfigthis.client.model.*;
import com.konfigthis.client.api.ReferenceDataApi;
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
    try {
      List<Brokerage> result = client
              .referenceData
              .listAllBrokerages()
              .execute();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReferenceDataApi#listAllBrokerages");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<List<Brokerage>> response = client
              .referenceData
              .listAllBrokerages()
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling ReferenceDataApi#listAllBrokerages");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;Brokerage&gt;**](Brokerage.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of all defined Brokerage objects. |  -  |
| **0** | Unexpected error. |  -  |

<a name="listAllCurrencies"></a>
# **listAllCurrencies**
> List&lt;Currency&gt; listAllCurrencies().execute();

List currencies

### Example
```java
import com.konfigthis.client.ApiClient;
import com.konfigthis.client.ApiException;
import com.konfigthis.client.ApiResponse;
import com.konfigthis.client.Snaptrade;
import com.konfigthis.client.Configuration;
import com.konfigthis.client.auth.*;
import com.konfigthis.client.model.*;
import com.konfigthis.client.api.ReferenceDataApi;
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
    try {
      List<Currency> result = client
              .referenceData
              .listAllCurrencies()
              .execute();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReferenceDataApi#listAllCurrencies");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<List<Currency>> response = client
              .referenceData
              .listAllCurrencies()
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling ReferenceDataApi#listAllCurrencies");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;Currency&gt;**](Currency.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of all currencies. |  -  |
| **0** | Unexpected error. |  -  |

<a name="listAllCurrenciesRates"></a>
# **listAllCurrenciesRates**
> List&lt;ExchangeRatePairs&gt; listAllCurrenciesRates().execute();

List currency exchange rates

### Example
```java
import com.konfigthis.client.ApiClient;
import com.konfigthis.client.ApiException;
import com.konfigthis.client.ApiResponse;
import com.konfigthis.client.Snaptrade;
import com.konfigthis.client.Configuration;
import com.konfigthis.client.auth.*;
import com.konfigthis.client.model.*;
import com.konfigthis.client.api.ReferenceDataApi;
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
    try {
      List<ExchangeRatePairs> result = client
              .referenceData
              .listAllCurrenciesRates()
              .execute();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReferenceDataApi#listAllCurrenciesRates");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<List<ExchangeRatePairs>> response = client
              .referenceData
              .listAllCurrenciesRates()
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling ReferenceDataApi#listAllCurrenciesRates");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;ExchangeRatePairs&gt;**](ExchangeRatePairs.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of all exchange rates pairs for supported currencies |  -  |

<a name="symbolSearchUserAccount"></a>
# **symbolSearchUserAccount**
> List&lt;UniversalSymbol&gt; symbolSearchUserAccount(userId, userSecret, accountId).symbolQuery(symbolQuery).execute();

Search for symbols available in an account

### Example
```java
import com.konfigthis.client.ApiClient;
import com.konfigthis.client.ApiException;
import com.konfigthis.client.ApiResponse;
import com.konfigthis.client.Snaptrade;
import com.konfigthis.client.Configuration;
import com.konfigthis.client.auth.*;
import com.konfigthis.client.model.*;
import com.konfigthis.client.api.ReferenceDataApi;
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
    UUID accountId = UUID.randomUUID(); // The ID of the account to search for symbols within.
    String substring = "substring_example";
    try {
      List<UniversalSymbol> result = client
              .referenceData
              .symbolSearchUserAccount(userId, userSecret, accountId)
              .substring(substring)
              .execute();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ReferenceDataApi#symbolSearchUserAccount");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<List<UniversalSymbol>> response = client
              .referenceData
              .symbolSearchUserAccount(userId, userSecret, accountId)
              .substring(substring)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling ReferenceDataApi#symbolSearchUserAccount");
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
| **accountId** | **UUID**| The ID of the account to search for symbols within. | |
| **symbolQuery** | [**SymbolQuery**](SymbolQuery.md)|  | [optional] |

### Return type

[**List&lt;UniversalSymbol&gt;**](UniversalSymbol.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Array of universal symbol supported by account based on substring sent it |  -  |
| **0** | Unexpected error |  -  |

