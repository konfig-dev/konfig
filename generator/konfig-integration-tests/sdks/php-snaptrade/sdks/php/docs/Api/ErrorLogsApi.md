# SnapTrade\ErrorLogsApi

All URIs are relative to https://api.snaptrade.com/api/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**listUserErrors()**](ErrorLogsApi.md#listUserErrors) | **GET** /snapTrade/listUserErrors | Retrieve error logs on behalf of your SnapTrade users |


## `listUserErrors()`

```php
listUserErrors($user_id, $user_secret): \SnapTrade\Model\UserErrorLog[]
```

Retrieve error logs on behalf of your SnapTrade users

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

try {
    $result = $snaptrade->errorLogs->listUserErrors(
        user_id: $user_id, 
        user_secret: $user_secret
    );
    print_r($result->$getRequestedAt());
    print_r($result->$getResponse());
    print_r($result->$getStatusCode());
    print_r($result->$getQueryParams());
    print_r($result->$getHttpMethod());
    print_r($result->$getEndpoint());
} catch (\Exception $e) {
    echo 'Exception when calling ErrorLogsApi->listUserErrors: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **user_id** | **string**|  | |
| **user_secret** | **string**|  | |

### Return type

[**\SnapTrade\Model\UserErrorLog[]**](../Model/UserErrorLog.md)

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
