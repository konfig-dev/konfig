# TransactionsAndReportingApi

All URIs are relative to *https://api.snaptrade.com/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getActivities**](TransactionsAndReportingApi.md#getActivities) | **GET** /activities | Get transaction history for a user |
| [**getReportingCustomRange**](TransactionsAndReportingApi.md#getReportingCustomRange) | **GET** /performance/custom | Get performance information for a specific timeframe |


<a name="getActivities"></a>
# **getActivities**
> List&lt;UniversalActivity&gt; getActivities(userId, userSecret).startDate(startDate).endDate(endDate).accounts(accounts).brokerageAuthorizations(brokerageAuthorizations).type(type).execute();

Get transaction history for a user

Returns activities (transactions) for a user. Specifing start and end date is highly recommended for better performance

### Example
```java
import com.konfigthis.client.ApiClient;
import com.konfigthis.client.ApiException;
import com.konfigthis.client.ApiResponse;
import com.konfigthis.client.Snaptrade;
import com.konfigthis.client.Configuration;
import com.konfigthis.client.auth.*;
import com.konfigthis.client.model.*;
import com.konfigthis.client.api.TransactionsAndReportingApi;
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
    LocalDate startDate = LocalDate.now();
    LocalDate endDate = LocalDate.now();
    String accounts = "accounts_example"; // Optional comma seperated list of account IDs used to filter the request on specific accounts
    String brokerageAuthorizations = "brokerageAuthorizations_example"; // Optional comma seperated list of brokerage authorization IDs used to filter the request on only accounts that belong to those authorizations
    String type = "DIVIDEND"; // Optional comma seperated list of types to filter activities by. This is not an exhaustive list, if we fail to match to these types, we will return the raw description from the brokerage. Potential values include - DIVIDEND - BUY - SELL - CONTRIBUTION - WITHDRAWAL - EXTERNAL_ASSET_TRANSFER_IN - EXTERNAL_ASSET_TRANSFER_OUT - INTERNAL_CASH_TRANSFER_IN - INTERNAL_CASH_TRANSFER_OUT - INTERNAL_ASSET_TRANSFER_IN - INTERNAL_ASSET_TRANSFER_OUT - INTEREST - REBATE - GOV_GRANT - TAX - FEE - REI - FXT
    try {
      List<UniversalActivity> result = client
              .transactionsAndReporting
              .getActivities(userId, userSecret)
              .startDate(startDate)
              .endDate(endDate)
              .accounts(accounts)
              .brokerageAuthorizations(brokerageAuthorizations)
              .type(type)
              .execute();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling TransactionsAndReportingApi#getActivities");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<List<UniversalActivity>> response = client
              .transactionsAndReporting
              .getActivities(userId, userSecret)
              .startDate(startDate)
              .endDate(endDate)
              .accounts(accounts)
              .brokerageAuthorizations(brokerageAuthorizations)
              .type(type)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling TransactionsAndReportingApi#getActivities");
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
| **startDate** | **LocalDate**|  | [optional] |
| **endDate** | **LocalDate**|  | [optional] |
| **accounts** | **String**| Optional comma seperated list of account IDs used to filter the request on specific accounts | [optional] |
| **brokerageAuthorizations** | **String**| Optional comma seperated list of brokerage authorization IDs used to filter the request on only accounts that belong to those authorizations | [optional] |
| **type** | **String**| Optional comma seperated list of types to filter activities by. This is not an exhaustive list, if we fail to match to these types, we will return the raw description from the brokerage. Potential values include - DIVIDEND - BUY - SELL - CONTRIBUTION - WITHDRAWAL - EXTERNAL_ASSET_TRANSFER_IN - EXTERNAL_ASSET_TRANSFER_OUT - INTERNAL_CASH_TRANSFER_IN - INTERNAL_CASH_TRANSFER_OUT - INTERNAL_ASSET_TRANSFER_IN - INTERNAL_ASSET_TRANSFER_OUT - INTEREST - REBATE - GOV_GRANT - TAX - FEE - REI - FXT | [optional] |

### Return type

[**List&lt;UniversalActivity&gt;**](UniversalActivity.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully retrieved transaction history |  -  |
| **0** | Unexpected error |  -  |

<a name="getReportingCustomRange"></a>
# **getReportingCustomRange**
> PerformanceCustom getReportingCustomRange(startDate, endDate, userId, userSecret).accounts(accounts).detailed(detailed).frequency(frequency).execute();

Get performance information for a specific timeframe

Returns performance information (contributions, dividends, rate of return, etc) for a specific timeframe. Total Equity Timeframe and Rate of Returns are experimental and should not be trusted to be 100% accurate

### Example
```java
import com.konfigthis.client.ApiClient;
import com.konfigthis.client.ApiException;
import com.konfigthis.client.ApiResponse;
import com.konfigthis.client.Snaptrade;
import com.konfigthis.client.Configuration;
import com.konfigthis.client.auth.*;
import com.konfigthis.client.model.*;
import com.konfigthis.client.api.TransactionsAndReportingApi;
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
    LocalDate startDate = LocalDate.now();
    LocalDate endDate = LocalDate.now();
    String userId = "userId_example";
    String userSecret = "userSecret_example";
    String accounts = "accounts_example"; // Optional comma seperated list of account IDs used to filter the request on specific accounts
    Boolean detailed = true; // Optional, increases frequency of data points for the total value and contribution charts if set to true
    String frequency = "frequency_example"; // Optional frequency for the rate of return chart (defaults to monthly). Possible values are daily, weekly, monthly, quarterly, yearly.
    try {
      PerformanceCustom result = client
              .transactionsAndReporting
              .getReportingCustomRange(startDate, endDate, userId, userSecret)
              .accounts(accounts)
              .detailed(detailed)
              .frequency(frequency)
              .execute();
      System.out.println(result);
      System.out.println(result.getTotalEquityTimeframe());
      System.out.println(result.getContributions());
      System.out.println(result.getContributionTimeframe());
      System.out.println(result.getContributionTimeframeCumulative());
      System.out.println(result.getWithdrawalTimeframe());
      System.out.println(result.getContributionStreak());
      System.out.println(result.getContributionMonthsContributed());
      System.out.println(result.getContributionTotalMonths());
      System.out.println(result.getDividends());
      System.out.println(result.getDividendIncome());
      System.out.println(result.getMonthlyDividends());
      System.out.println(result.getBadTickers());
      System.out.println(result.getDividendTimeline());
      System.out.println(result.getCommissions());
      System.out.println(result.getForexFees());
      System.out.println(result.getFees());
      System.out.println(result.getRateOfReturn());
      System.out.println(result.getReturnRateTimeframe());
      System.out.println(result.getDetailedMode());
    } catch (ApiException e) {
      System.err.println("Exception when calling TransactionsAndReportingApi#getReportingCustomRange");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<PerformanceCustom> response = client
              .transactionsAndReporting
              .getReportingCustomRange(startDate, endDate, userId, userSecret)
              .accounts(accounts)
              .detailed(detailed)
              .frequency(frequency)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling TransactionsAndReportingApi#getReportingCustomRange");
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
| **startDate** | **LocalDate**|  | |
| **endDate** | **LocalDate**|  | |
| **userId** | **String**|  | |
| **userSecret** | **String**|  | |
| **accounts** | **String**| Optional comma seperated list of account IDs used to filter the request on specific accounts | [optional] |
| **detailed** | **Boolean**| Optional, increases frequency of data points for the total value and contribution charts if set to true | [optional] |
| **frequency** | **String**| Optional frequency for the rate of return chart (defaults to monthly). Possible values are daily, weekly, monthly, quarterly, yearly. | [optional] |

### Return type

[**PerformanceCustom**](PerformanceCustom.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successfully retrieved performance data |  -  |
| **0** | Unexpected error |  -  |

