# SnapTrade\ReferenceDataApi

All URIs are relative to https://api.snaptrade.com/api/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**getCurrencyExchangeRatePair()**](ReferenceDataApi.md#getCurrencyExchangeRatePair) | **GET** /currencies/rates/{currencyPair} | Return the exchange rate of a currency pair |
| [**getPartnerInfo()**](ReferenceDataApi.md#getPartnerInfo) | **GET** /snapTrade/partners | Get metadata related to Snaptrade partner |
| [**getSecurityTypes()**](ReferenceDataApi.md#getSecurityTypes) | **GET** /securityTypes | List of all security types |
| [**getStockExchanges()**](ReferenceDataApi.md#getStockExchanges) | **GET** /exchanges | List exchanges |
| [**getSymbols()**](ReferenceDataApi.md#getSymbols) | **POST** /symbols | Search for symbols |
| [**getSymbolsByTicker()**](ReferenceDataApi.md#getSymbolsByTicker) | **GET** /symbols/{ticker} | Get details of a symbol by the ticker |
| [**listAllBrokerageAuthorizationType()**](ReferenceDataApi.md#listAllBrokerageAuthorizationType) | **GET** /brokerageAuthorizationTypes | List of all brokerage authorization types |
| [**listAllBrokerages()**](ReferenceDataApi.md#listAllBrokerages) | **GET** /brokerages | List brokerages |
| [**listAllCurrencies()**](ReferenceDataApi.md#listAllCurrencies) | **GET** /currencies | List currencies |
| [**listAllCurrenciesRates()**](ReferenceDataApi.md#listAllCurrenciesRates) | **GET** /currencies/rates | List currency exchange rates |
| [**symbolSearchUserAccount()**](ReferenceDataApi.md#symbolSearchUserAccount) | **POST** /accounts/{accountId}/symbols | Search for symbols available in an account |


## `getCurrencyExchangeRatePair()`

```php
getCurrencyExchangeRatePair($currency_pair): \SnapTrade\Model\ExchangeRatePairs
```

Return the exchange rate of a currency pair

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$snaptrade = new \SnapTrade\Client(
    clientId: getenv("SNAPTRADE_CLIENT_ID"),
    consumerKey: getenv("SNAPTRADE_CONSUMER_KEY")
);

$currency_pair = "currencyPair_example"; // A currency pair based on currency code for example, {CAD-USD}

try {
    $result = $snaptrade->referenceData->getCurrencyExchangeRatePair(
        currency_pair: $currency_pair
    );
    print_r($result->$getSrc());
    print_r($result->$getDst());
    print_r($result->$getExchangeRate());
} catch (\Exception $e) {
    echo 'Exception when calling ReferenceDataApi->getCurrencyExchangeRatePair: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **currency_pair** | **string**| A currency pair based on currency code for example, {CAD-USD} | |

### Return type

[**\SnapTrade\Model\ExchangeRatePairs**](../Model/ExchangeRatePairs.md)

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getPartnerInfo()`

```php
getPartnerInfo(): \SnapTrade\Model\PartnerData
```

Get metadata related to Snaptrade partner

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$snaptrade = new \SnapTrade\Client(
    clientId: getenv("SNAPTRADE_CLIENT_ID"),
    consumerKey: getenv("SNAPTRADE_CONSUMER_KEY")
);


try {
    $result = $snaptrade->referenceData->getPartnerInfo();
    print_r($result->$getRedirectUri());
    print_r($result->$getAllowedBrokerages());
    print_r($result->$getName());
    print_r($result->$getSlug());
    print_r($result->$getLogoUrl());
    print_r($result->$getPinRequired());
    print_r($result->$getCanAccessTrades());
    print_r($result->$getCanAccessHoldings());
    print_r($result->$getCanAccessAccountHistory());
    print_r($result->$getCanAccessReferenceData());
    print_r($result->$getCanAccessPortfolioManagement());
    print_r($result->$getCanAccessOrders());
} catch (\Exception $e) {
    echo 'Exception when calling ReferenceDataApi->getPartnerInfo: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\SnapTrade\Model\PartnerData**](../Model/PartnerData.md)

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSecurityTypes()`

```php
getSecurityTypes(): \SnapTrade\Model\SecurityType[]
```

List of all security types

List security types available on SnapTrade.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$snaptrade = new \SnapTrade\Client(
    clientId: getenv("SNAPTRADE_CLIENT_ID"),
    consumerKey: getenv("SNAPTRADE_CONSUMER_KEY")
);


try {
    $result = $snaptrade->referenceData->getSecurityTypes();
    print_r($result->$getId());
    print_r($result->$getCode());
    print_r($result->$getDescription());
    print_r($result->$getIsSupported());
} catch (\Exception $e) {
    echo 'Exception when calling ReferenceDataApi->getSecurityTypes: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\SnapTrade\Model\SecurityType[]**](../Model/SecurityType.md)

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getStockExchanges()`

```php
getStockExchanges(): \SnapTrade\Model\Exchange[]
```

List exchanges

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$snaptrade = new \SnapTrade\Client(
    clientId: getenv("SNAPTRADE_CLIENT_ID"),
    consumerKey: getenv("SNAPTRADE_CONSUMER_KEY")
);


try {
    $result = $snaptrade->referenceData->getStockExchanges();
    print_r($result->$getId());
    print_r($result->$getCode());
    print_r($result->$getMicCode());
    print_r($result->$getName());
    print_r($result->$getTimezone());
    print_r($result->$getStartTime());
    print_r($result->$getCloseTime());
    print_r($result->$getSuffix());
} catch (\Exception $e) {
    echo 'Exception when calling ReferenceDataApi->getStockExchanges: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\SnapTrade\Model\Exchange[]**](../Model/Exchange.md)

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSymbols()`

```php
getSymbols($symbol_query): \SnapTrade\Model\UniversalSymbol[]
```

Search for symbols

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$snaptrade = new \SnapTrade\Client(
    clientId: getenv("SNAPTRADE_CLIENT_ID"),
    consumerKey: getenv("SNAPTRADE_CONSUMER_KEY")
);

$substring = "apple";

try {
    $result = $snaptrade->referenceData->getSymbols(
        substring: $substring
    );
    print_r($result->$getId());
    print_r($result->$getSymbol());
    print_r($result->$getRawSymbol());
    print_r($result->$getDescription());
    print_r($result->$getCurrency());
    print_r($result->$getExchange());
    print_r($result->$getType());
    print_r($result->$getCurrencies());
} catch (\Exception $e) {
    echo 'Exception when calling ReferenceDataApi->getSymbols: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **symbol_query** | [**\SnapTrade\Model\SymbolQuery**](../Model/SymbolQuery.md)|  | [optional] |

### Return type

[**\SnapTrade\Model\UniversalSymbol[]**](../Model/UniversalSymbol.md)

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getSymbolsByTicker()`

```php
getSymbolsByTicker($ticker, $symbol_id): \SnapTrade\Model\UniversalSymbol
```

Get details of a symbol by the ticker

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$snaptrade = new \SnapTrade\Client(
    clientId: getenv("SNAPTRADE_CLIENT_ID"),
    consumerKey: getenv("SNAPTRADE_CONSUMER_KEY")
);

$ticker = "ticker_example"; // The ticker of the UniversalSymbol to get.
$symbol_id = "046b6c7f-0b8a-43b9-b35d-6489e6daee91"; // OPTIONAL IN PATH Can be used instead of the ticker ; The ID of the UniversalSymbol to get.

try {
    $result = $snaptrade->referenceData->getSymbolsByTicker(
        ticker: $ticker, 
        symbol_id: $symbol_id
    );
    print_r($result->$getId());
    print_r($result->$getSymbol());
    print_r($result->$getRawSymbol());
    print_r($result->$getDescription());
    print_r($result->$getCurrency());
    print_r($result->$getExchange());
    print_r($result->$getType());
    print_r($result->$getCurrencies());
} catch (\Exception $e) {
    echo 'Exception when calling ReferenceDataApi->getSymbolsByTicker: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **ticker** | **string**| The ticker of the UniversalSymbol to get. | |
| **symbol_id** | **string**| OPTIONAL IN PATH Can be used instead of the ticker ; The ID of the UniversalSymbol to get. | [optional] |

### Return type

[**\SnapTrade\Model\UniversalSymbol**](../Model/UniversalSymbol.md)

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listAllBrokerageAuthorizationType()`

```php
listAllBrokerageAuthorizationType($brokerage): \SnapTrade\Model\BrokerageAuthorizationTypeReadOnly[]
```

List of all brokerage authorization types

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$snaptrade = new \SnapTrade\Client(
    clientId: getenv("SNAPTRADE_CLIENT_ID"),
    consumerKey: getenv("SNAPTRADE_CONSUMER_KEY")
);

$brokerage = "QUESTRADE,ALPACA"; // Comma separated value of brokerage slugs

try {
    $result = $snaptrade->referenceData->listAllBrokerageAuthorizationType(
        brokerage: $brokerage
    );
    print_r($result->$getId());
    print_r($result->$getType());
    print_r($result->$getAuthType());
    print_r($result->$getBrokerage());
} catch (\Exception $e) {
    echo 'Exception when calling ReferenceDataApi->listAllBrokerageAuthorizationType: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **brokerage** | **string**| Comma separated value of brokerage slugs | [optional] |

### Return type

[**\SnapTrade\Model\BrokerageAuthorizationTypeReadOnly[]**](../Model/BrokerageAuthorizationTypeReadOnly.md)

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listAllBrokerages()`

```php
listAllBrokerages(): \SnapTrade\Model\Brokerage[]
```

List brokerages

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$snaptrade = new \SnapTrade\Client(
    clientId: getenv("SNAPTRADE_CLIENT_ID"),
    consumerKey: getenv("SNAPTRADE_CONSUMER_KEY")
);


try {
    $result = $snaptrade->referenceData->listAllBrokerages();
    print_r($result->$getId());
    print_r($result->$getName());
    print_r($result->$getDisplayName());
    print_r($result->$getDescription());
    print_r($result->$getAwsS3LogoUrl());
    print_r($result->$getSlug());
    print_r($result->$getUrl());
    print_r($result->$getEnabled());
    print_r($result->$getMaintenanceMode());
    print_r($result->$getAllowsFractionalUnits());
    print_r($result->$getAllowsTrading());
    print_r($result->$getHasReporting());
    print_r($result->$getIsRealTimeConnection());
    print_r($result->$getAllowsTradingThroughSnaptradeApi());
    print_r($result->$getIsScrapingIntegration());
    print_r($result->$getDefaultCurrency());
    print_r($result->$getBrokerageType());
    print_r($result->$getExchanges());
} catch (\Exception $e) {
    echo 'Exception when calling ReferenceDataApi->listAllBrokerages: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\SnapTrade\Model\Brokerage[]**](../Model/Brokerage.md)

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listAllCurrencies()`

```php
listAllCurrencies(): \SnapTrade\Model\Currency[]
```

List currencies

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$snaptrade = new \SnapTrade\Client(
    clientId: getenv("SNAPTRADE_CLIENT_ID"),
    consumerKey: getenv("SNAPTRADE_CONSUMER_KEY")
);


try {
    $result = $snaptrade->referenceData->listAllCurrencies();
    print_r($result->$getId());
    print_r($result->$getCode());
    print_r($result->$getName());
} catch (\Exception $e) {
    echo 'Exception when calling ReferenceDataApi->listAllCurrencies: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\SnapTrade\Model\Currency[]**](../Model/Currency.md)

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listAllCurrenciesRates()`

```php
listAllCurrenciesRates(): \SnapTrade\Model\ExchangeRatePairs[]
```

List currency exchange rates

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$snaptrade = new \SnapTrade\Client(
    clientId: getenv("SNAPTRADE_CLIENT_ID"),
    consumerKey: getenv("SNAPTRADE_CONSUMER_KEY")
);


try {
    $result = $snaptrade->referenceData->listAllCurrenciesRates();
    print_r($result->$getSrc());
    print_r($result->$getDst());
    print_r($result->$getExchangeRate());
} catch (\Exception $e) {
    echo 'Exception when calling ReferenceDataApi->listAllCurrenciesRates: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**\SnapTrade\Model\ExchangeRatePairs[]**](../Model/ExchangeRatePairs.md)

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `symbolSearchUserAccount()`

```php
symbolSearchUserAccount($user_id, $user_secret, $account_id, $symbol_query): \SnapTrade\Model\UniversalSymbol[]
```

Search for symbols available in an account

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
$account_id = "accountId_example"; // The ID of the account to search for symbols within.
$substring = "apple";

try {
    $result = $snaptrade->referenceData->symbolSearchUserAccount(
        user_id: $user_id, 
        user_secret: $user_secret, 
        account_id: $account_id, 
        substring: $substring
    );
    print_r($result->$getId());
    print_r($result->$getSymbol());
    print_r($result->$getRawSymbol());
    print_r($result->$getDescription());
    print_r($result->$getCurrency());
    print_r($result->$getExchange());
    print_r($result->$getType());
    print_r($result->$getCurrencies());
} catch (\Exception $e) {
    echo 'Exception when calling ReferenceDataApi->symbolSearchUserAccount: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **user_id** | **string**|  | |
| **user_secret** | **string**|  | |
| **account_id** | **string**| The ID of the account to search for symbols within. | |
| **symbol_query** | [**\SnapTrade\Model\SymbolQuery**](../Model/SymbolQuery.md)|  | [optional] |

### Return type

[**\SnapTrade\Model\UniversalSymbol[]**](../Model/UniversalSymbol.md)

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `*/*`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
