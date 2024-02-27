# SnapTrade\TradingApi

All URIs are relative to https://api.snaptrade.com/api/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**cancelUserAccountOrder()**](TradingApi.md#cancelUserAccountOrder) | **POST** /accounts/{accountId}/orders/cancel | Cancel open order in account |
| [**getOrderImpact()**](TradingApi.md#getOrderImpact) | **POST** /trade/impact | Check impact of trades on account. |
| [**getUserAccountQuotes()**](TradingApi.md#getUserAccountQuotes) | **GET** /accounts/{accountId}/quotes | Get symbol quotes |
| [**placeForceOrder()**](TradingApi.md#placeForceOrder) | **POST** /trade/place | Place a trade with NO validation. |
| [**placeOCOOrder()**](TradingApi.md#placeOCOOrder) | **POST** /trade/oco | Place a OCO (One Cancels Other) order |
| [**placeOrder()**](TradingApi.md#placeOrder) | **POST** /trade/{tradeId} | Place order |


## `cancelUserAccountOrder()`

```php
cancelUserAccountOrder($user_id, $user_secret, $account_id, $trading_cancel_user_account_order_request): \SnapTrade\Model\AccountOrderRecord
```

Cancel open order in account

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
$account_id = "accountId_example"; // The ID of the account to cancel the order in.
$brokerage_order_id = "2bcd7cc3-e922-4976-bce1-9858296801c3";

try {
    $result = $snaptrade->trading->cancelUserAccountOrder(
        user_id: $user_id, 
        user_secret: $user_secret, 
        account_id: $account_id, 
        brokerage_order_id: $brokerage_order_id
    );
    print_r($result->$getBrokerageOrderId());
    print_r($result->$getStatus());
    print_r($result->$getSymbol());
    print_r($result->$getUniversalSymbol());
    print_r($result->$getOptionSymbol());
    print_r($result->$getAction());
    print_r($result->$getTotalQuantity());
    print_r($result->$getOpenQuantity());
    print_r($result->$getCanceledQuantity());
    print_r($result->$getFilledQuantity());
    print_r($result->$getExecutionPrice());
    print_r($result->$getLimitPrice());
    print_r($result->$getStopPrice());
    print_r($result->$getOrderType());
    print_r($result->$getTimeInForce());
    print_r($result->$getTimePlaced());
    print_r($result->$getTimeUpdated());
    print_r($result->$getExpiryDate());
} catch (\Exception $e) {
    echo 'Exception when calling TradingApi->cancelUserAccountOrder: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **user_id** | **string**|  | |
| **user_secret** | **string**|  | |
| **account_id** | **string**| The ID of the account to cancel the order in. | |
| **trading_cancel_user_account_order_request** | [**\SnapTrade\Model\TradingCancelUserAccountOrderRequest**](../Model/TradingCancelUserAccountOrderRequest.md)| The Order ID to be canceled | |

### Return type

[**\SnapTrade\Model\AccountOrderRecord**](../Model/AccountOrderRecord.md)

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getOrderImpact()`

```php
getOrderImpact($user_id, $user_secret, $manual_trade_form): \SnapTrade\Model\ManualTradeAndImpact
```

Check impact of trades on account.

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
$account_id = "2bcd7cc3-e922-4976-bce1-9858296801c3";
$action = "BUY";
$order_type = "Limit";
$price = 31.33; // Trade Price if limit or stop limit order
$stop = 31.33; // Stop Price. If stop loss or stop limit order, the price to trigger the stop
$time_in_force = "FOK";
$units = 3.14;
$universal_symbol_id = "2bcd7cc3-e922-4976-bce1-9858296801c3";
$notional_value = 3.14;

try {
    $result = $snaptrade->trading->getOrderImpact(
        user_id: $user_id, 
        user_secret: $user_secret, 
        account_id: $account_id, 
        action: $action, 
        order_type: $order_type, 
        price: $price, 
        stop: $stop, 
        time_in_force: $time_in_force, 
        units: $units, 
        universal_symbol_id: $universal_symbol_id, 
        notional_value: $notional_value
    );
    print_r($result->$getTrade());
    print_r($result->$getTradeImpacts());
    print_r($result->$getCombinedRemainingBalance());
} catch (\Exception $e) {
    echo 'Exception when calling TradingApi->getOrderImpact: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **user_id** | **string**|  | |
| **user_secret** | **string**|  | |
| **manual_trade_form** | [**\SnapTrade\Model\ManualTradeForm**](../Model/ManualTradeForm.md)|  | |

### Return type

[**\SnapTrade\Model\ManualTradeAndImpact**](../Model/ManualTradeAndImpact.md)

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserAccountQuotes()`

```php
getUserAccountQuotes($user_id, $user_secret, $symbols, $account_id, $use_ticker): \SnapTrade\Model\SymbolsQuotesInner[]
```

Get symbol quotes

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
$symbols = "symbols_example"; // List of universal_symbol_id or tickers to get quotes for.
$account_id = "accountId_example"; // The ID of the account to get quotes.
$use_ticker = True; // Should be set to True if providing tickers.

try {
    $result = $snaptrade->trading->getUserAccountQuotes(
        user_id: $user_id, 
        user_secret: $user_secret, 
        symbols: $symbols, 
        account_id: $account_id, 
        use_ticker: $use_ticker
    );
    print_r($result->$getSymbol());
    print_r($result->$getBidPrice());
    print_r($result->$getAskPrice());
    print_r($result->$getLastTradePrice());
    print_r($result->$getBidSize());
    print_r($result->$getAskSize());
} catch (\Exception $e) {
    echo 'Exception when calling TradingApi->getUserAccountQuotes: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **user_id** | **string**|  | |
| **user_secret** | **string**|  | |
| **symbols** | **string**| List of universal_symbol_id or tickers to get quotes for. | |
| **account_id** | **string**| The ID of the account to get quotes. | |
| **use_ticker** | **bool**| Should be set to True if providing tickers. | [optional] |

### Return type

[**\SnapTrade\Model\SymbolsQuotesInner[]**](../Model/SymbolsQuotesInner.md)

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `placeForceOrder()`

```php
placeForceOrder($user_id, $user_secret, $manual_trade_form): \SnapTrade\Model\AccountOrderRecord
```

Place a trade with NO validation.

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
$account_id = "2bcd7cc3-e922-4976-bce1-9858296801c3";
$action = "BUY";
$order_type = "Limit";
$price = 31.33; // Trade Price if limit or stop limit order
$stop = 31.33; // Stop Price. If stop loss or stop limit order, the price to trigger the stop
$time_in_force = "FOK";
$units = 3.14;
$universal_symbol_id = "2bcd7cc3-e922-4976-bce1-9858296801c3";
$notional_value = 3.14;

try {
    $result = $snaptrade->trading->placeForceOrder(
        user_id: $user_id, 
        user_secret: $user_secret, 
        account_id: $account_id, 
        action: $action, 
        order_type: $order_type, 
        price: $price, 
        stop: $stop, 
        time_in_force: $time_in_force, 
        units: $units, 
        universal_symbol_id: $universal_symbol_id, 
        notional_value: $notional_value
    );
    print_r($result->$getBrokerageOrderId());
    print_r($result->$getStatus());
    print_r($result->$getSymbol());
    print_r($result->$getUniversalSymbol());
    print_r($result->$getOptionSymbol());
    print_r($result->$getAction());
    print_r($result->$getTotalQuantity());
    print_r($result->$getOpenQuantity());
    print_r($result->$getCanceledQuantity());
    print_r($result->$getFilledQuantity());
    print_r($result->$getExecutionPrice());
    print_r($result->$getLimitPrice());
    print_r($result->$getStopPrice());
    print_r($result->$getOrderType());
    print_r($result->$getTimeInForce());
    print_r($result->$getTimePlaced());
    print_r($result->$getTimeUpdated());
    print_r($result->$getExpiryDate());
} catch (\Exception $e) {
    echo 'Exception when calling TradingApi->placeForceOrder: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **user_id** | **string**|  | |
| **user_secret** | **string**|  | |
| **manual_trade_form** | [**\SnapTrade\Model\ManualTradeForm**](../Model/ManualTradeForm.md)|  | |

### Return type

[**\SnapTrade\Model\AccountOrderRecord**](../Model/AccountOrderRecord.md)

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `placeOCOOrder()`

```php
placeOCOOrder($user_id, $user_secret, $trading_place_oco_order_request): \SnapTrade\Model\AccountOrderRecord
```

Place a OCO (One Cancels Other) order

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
$first_trade_id = None; // The ID of first trade object obtained from trade/impact endpoint
$second_trade_id = None; // The ID of second trade object obtained from trade/impact endpoint

try {
    $result = $snaptrade->trading->placeOCOOrder(
        user_id: $user_id, 
        user_secret: $user_secret, 
        first_trade_id: $first_trade_id, 
        second_trade_id: $second_trade_id
    );
    print_r($result->$getBrokerageOrderId());
    print_r($result->$getStatus());
    print_r($result->$getSymbol());
    print_r($result->$getUniversalSymbol());
    print_r($result->$getOptionSymbol());
    print_r($result->$getAction());
    print_r($result->$getTotalQuantity());
    print_r($result->$getOpenQuantity());
    print_r($result->$getCanceledQuantity());
    print_r($result->$getFilledQuantity());
    print_r($result->$getExecutionPrice());
    print_r($result->$getLimitPrice());
    print_r($result->$getStopPrice());
    print_r($result->$getOrderType());
    print_r($result->$getTimeInForce());
    print_r($result->$getTimePlaced());
    print_r($result->$getTimeUpdated());
    print_r($result->$getExpiryDate());
} catch (\Exception $e) {
    echo 'Exception when calling TradingApi->placeOCOOrder: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **user_id** | **string**|  | |
| **user_secret** | **string**|  | |
| **trading_place_oco_order_request** | [**\SnapTrade\Model\TradingPlaceOCOOrderRequest**](../Model/TradingPlaceOCOOrderRequest.md)|  | |

### Return type

[**\SnapTrade\Model\AccountOrderRecord**](../Model/AccountOrderRecord.md)

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `placeOrder()`

```php
placeOrder($trade_id, $user_id, $user_secret, $validated_trade_body): \SnapTrade\Model\AccountOrderRecord
```

Place order

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$snaptrade = new \SnapTrade\Client(
    clientId: getenv("SNAPTRADE_CLIENT_ID"),
    consumerKey: getenv("SNAPTRADE_CONSUMER_KEY")
);

$trade_id = "tradeId_example"; // The ID of trade object obtained from trade/impact endpoint
$user_id = "John.doe@snaptrade.com";
$user_secret = "USERSECRET123";
$wait_to_confirm = True; // Optional, defaults to true. Determines if a wait is performed to check on order status. If false, latency will be reduced but orders returned will be more likely to be of status PENDING as we will not wait to check on the status before responding to the request

try {
    $result = $snaptrade->trading->placeOrder(
        trade_id: $trade_id, 
        user_id: $user_id, 
        user_secret: $user_secret, 
        wait_to_confirm: $wait_to_confirm
    );
    print_r($result->$getBrokerageOrderId());
    print_r($result->$getStatus());
    print_r($result->$getSymbol());
    print_r($result->$getUniversalSymbol());
    print_r($result->$getOptionSymbol());
    print_r($result->$getAction());
    print_r($result->$getTotalQuantity());
    print_r($result->$getOpenQuantity());
    print_r($result->$getCanceledQuantity());
    print_r($result->$getFilledQuantity());
    print_r($result->$getExecutionPrice());
    print_r($result->$getLimitPrice());
    print_r($result->$getStopPrice());
    print_r($result->$getOrderType());
    print_r($result->$getTimeInForce());
    print_r($result->$getTimePlaced());
    print_r($result->$getTimeUpdated());
    print_r($result->$getExpiryDate());
} catch (\Exception $e) {
    echo 'Exception when calling TradingApi->placeOrder: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **trade_id** | **string**| The ID of trade object obtained from trade/impact endpoint | |
| **user_id** | **string**|  | |
| **user_secret** | **string**|  | |
| **validated_trade_body** | [**\SnapTrade\Model\ValidatedTradeBody**](../Model/ValidatedTradeBody.md)|  | [optional] |

### Return type

[**\SnapTrade\Model\AccountOrderRecord**](../Model/AccountOrderRecord.md)

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
