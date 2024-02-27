# SnapTrade\TransactionsAndReportingApi

All URIs are relative to https://api.snaptrade.com/api/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getActivities()**](TransactionsAndReportingApi.md#getActivities) | **GET** /activities | Get transaction history for a user |
| [**getReportingCustomRange()**](TransactionsAndReportingApi.md#getReportingCustomRange) | **GET** /performance/custom | Get performance information for a specific timeframe |


## `getActivities()`

```php
getActivities($user_id, $user_secret, $start_date, $end_date, $accounts, $brokerage_authorizations, $type): \SnapTrade\Model\UniversalActivity[]
```

Get transaction history for a user

Returns activities (transactions) for a user. Specifying start and end date is highly recommended for better performance

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$snaptrade = new \SnapTrade\Client(
    clientId: getenv("SNAPTRADE_CLIENT_ID"),
    consumerKey: getenv("SNAPTRADE_CONSUMER_KEY")
);

$user_id = "John.doe@snaptrade.com";
$user_secret = "USERSECRET123";
$start_date = "2022-01-24";
$end_date = "2022-01-24";
$accounts = "917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2"; // Optional comma seperated list of account IDs used to filter the request on specific accounts
$brokerage_authorizations = "917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2"; // Optional comma seperated list of brokerage authorization IDs used to filter the request on only accounts that belong to those authorizations
$type = "DIVIDEND"; // Optional comma seperated list of types to filter activities by. This is not an exhaustive list, if we fail to match to these types, we will return the raw description from the brokerage. Potential values include - DIVIDEND - BUY - SELL - CONTRIBUTION - WITHDRAWAL - EXTERNAL_ASSET_TRANSFER_IN - EXTERNAL_ASSET_TRANSFER_OUT - INTERNAL_CASH_TRANSFER_IN - INTERNAL_CASH_TRANSFER_OUT - INTERNAL_ASSET_TRANSFER_IN - INTERNAL_ASSET_TRANSFER_OUT - INTEREST - REBATE - GOV_GRANT - TAX - FEE - REI - FXT

try {
    $result = $snaptrade->transactionsAndReporting->getActivities(
        user_id: $user_id, 
        user_secret: $user_secret, 
        start_date: $start_date, 
        end_date: $end_date, 
        accounts: $accounts, 
        brokerage_authorizations: $brokerage_authorizations, 
        type: $type
    );
    print_r($result->$getId());
    print_r($result->$getAccount());
    print_r($result->$getAmount());
    print_r($result->$getCurrency());
    print_r($result->$getDescription());
    print_r($result->$getFee());
    print_r($result->$getFxRate());
    print_r($result->$getInstitution());
    print_r($result->$getOptionType());
    print_r($result->$getPrice());
    print_r($result->$getSettlementDate());
    print_r($result->$getExternalReferenceId());
    print_r($result->$getSymbol());
    print_r($result->$getOptionSymbol());
    print_r($result->$getTradeDate());
    print_r($result->$getType());
    print_r($result->$getUnits());
} catch (\Exception $e) {
    echo 'Exception when calling TransactionsAndReportingApi->getActivities: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **user_id** | **string**|  | |
| **user_secret** | **string**|  | |
| **start_date** | **\DateTime**|  | [optional] |
| **end_date** | **\DateTime**|  | [optional] |
| **accounts** | **string**| Optional comma seperated list of account IDs used to filter the request on specific accounts | [optional] |
| **brokerage_authorizations** | **string**| Optional comma seperated list of brokerage authorization IDs used to filter the request on only accounts that belong to those authorizations | [optional] |
| **type** | **string**| Optional comma seperated list of types to filter activities by. This is not an exhaustive list, if we fail to match to these types, we will return the raw description from the brokerage. Potential values include - DIVIDEND - BUY - SELL - CONTRIBUTION - WITHDRAWAL - EXTERNAL_ASSET_TRANSFER_IN - EXTERNAL_ASSET_TRANSFER_OUT - INTERNAL_CASH_TRANSFER_IN - INTERNAL_CASH_TRANSFER_OUT - INTERNAL_ASSET_TRANSFER_IN - INTERNAL_ASSET_TRANSFER_OUT - INTEREST - REBATE - GOV_GRANT - TAX - FEE - REI - FXT | [optional] |

### Return type

[**\SnapTrade\Model\UniversalActivity[]**](../Model/UniversalActivity.md)

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getReportingCustomRange()`

```php
getReportingCustomRange($start_date, $end_date, $user_id, $user_secret, $accounts, $detailed, $frequency): \SnapTrade\Model\PerformanceCustom
```

Get performance information for a specific timeframe

Returns performance information (contributions, dividends, rate of return, etc) for a specific timeframe. Please note that Total Equity Timeframe and Rate of Returns are experimental features. Please contact support@snaptrade.com if you notice any inconsistencies.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$snaptrade = new \SnapTrade\Client(
    clientId: getenv("SNAPTRADE_CLIENT_ID"),
    consumerKey: getenv("SNAPTRADE_CONSUMER_KEY")
);

$start_date = "2022-01-24";
$end_date = "2022-01-24";
$user_id = "John.doe@snaptrade.com";
$user_secret = "USERSECRET123";
$accounts = "917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2"; // Optional comma seperated list of account IDs used to filter the request on specific accounts
$detailed = True; // Optional, increases frequency of data points for the total value and contribution charts if set to true
$frequency = "monthly"; // Optional frequency for the rate of return chart (defaults to monthly). Possible values are daily, weekly, monthly, quarterly, yearly.

try {
    $result = $snaptrade->transactionsAndReporting->getReportingCustomRange(
        start_date: $start_date, 
        end_date: $end_date, 
        user_id: $user_id, 
        user_secret: $user_secret, 
        accounts: $accounts, 
        detailed: $detailed, 
        frequency: $frequency
    );
    print_r($result->$getTotalEquityTimeframe());
    print_r($result->$getContributions());
    print_r($result->$getContributionTimeframe());
    print_r($result->$getContributionTimeframeCumulative());
    print_r($result->$getWithdrawalTimeframe());
    print_r($result->$getContributionStreak());
    print_r($result->$getContributionMonthsContributed());
    print_r($result->$getContributionTotalMonths());
    print_r($result->$getDividends());
    print_r($result->$getDividendIncome());
    print_r($result->$getMonthlyDividends());
    print_r($result->$getBadTickers());
    print_r($result->$getDividendTimeline());
    print_r($result->$getCommissions());
    print_r($result->$getForexFees());
    print_r($result->$getFees());
    print_r($result->$getRateOfReturn());
    print_r($result->$getReturnRateTimeframe());
    print_r($result->$getDetailedMode());
} catch (\Exception $e) {
    echo 'Exception when calling TransactionsAndReportingApi->getReportingCustomRange: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **start_date** | **\DateTime**|  | |
| **end_date** | **\DateTime**|  | |
| **user_id** | **string**|  | |
| **user_secret** | **string**|  | |
| **accounts** | **string**| Optional comma seperated list of account IDs used to filter the request on specific accounts | [optional] |
| **detailed** | **bool**| Optional, increases frequency of data points for the total value and contribution charts if set to true | [optional] |
| **frequency** | **string**| Optional frequency for the rate of return chart (defaults to monthly). Possible values are daily, weekly, monthly, quarterly, yearly. | [optional] |

### Return type

[**\SnapTrade\Model\PerformanceCustom**](../Model/PerformanceCustom.md)

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
