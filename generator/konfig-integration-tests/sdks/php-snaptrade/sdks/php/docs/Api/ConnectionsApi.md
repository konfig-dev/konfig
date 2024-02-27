# SnapTrade\ConnectionsApi

All URIs are relative to https://api.snaptrade.com/api/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**detailBrokerageAuthorization()**](ConnectionsApi.md#detailBrokerageAuthorization) | **GET** /authorizations/{authorizationId} | Get brokerage authorization details |
| [**listBrokerageAuthorizations()**](ConnectionsApi.md#listBrokerageAuthorizations) | **GET** /authorizations | List all brokerage authorizations for the user |
| [**removeBrokerageAuthorization()**](ConnectionsApi.md#removeBrokerageAuthorization) | **DELETE** /authorizations/{authorizationId} | Delete brokerage authorization |
| [**sessionEvents()**](ConnectionsApi.md#sessionEvents) | **GET** /sessionEvents | List all session events for the partner |


## `detailBrokerageAuthorization()`

```php
detailBrokerageAuthorization($authorization_id, $user_id, $user_secret): \SnapTrade\Model\BrokerageAuthorization
```

Get brokerage authorization details

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$snaptrade = new \SnapTrade\Client(
    clientId: getenv("SNAPTRADE_CLIENT_ID"),
    consumerKey: getenv("SNAPTRADE_CONSUMER_KEY")
);

$authorization_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"; // The ID of a brokerage authorization object.
$user_id = "John.doe@snaptrade.com";
$user_secret = "USERSECRET123";

try {
    $result = $snaptrade->connections->detailBrokerageAuthorization(
        authorization_id: $authorization_id, 
        user_id: $user_id, 
        user_secret: $user_secret
    );
    print_r($result->$getId());
    print_r($result->$getCreatedDate());
    print_r($result->$getUpdatedDate());
    print_r($result->$getBrokerage());
    print_r($result->$getName());
    print_r($result->$getType());
    print_r($result->$getDisabled());
    print_r($result->$getDisabledDate());
    print_r($result->$getMeta());
} catch (\Exception $e) {
    echo 'Exception when calling ConnectionsApi->detailBrokerageAuthorization: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **authorization_id** | **string**| The ID of a brokerage authorization object. | |
| **user_id** | **string**|  | |
| **user_secret** | **string**|  | |

### Return type

[**\SnapTrade\Model\BrokerageAuthorization**](../Model/BrokerageAuthorization.md)

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listBrokerageAuthorizations()`

```php
listBrokerageAuthorizations($user_id, $user_secret): \SnapTrade\Model\BrokerageAuthorization[]
```

List all brokerage authorizations for the user

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
    $result = $snaptrade->connections->listBrokerageAuthorizations(
        user_id: $user_id, 
        user_secret: $user_secret
    );
    print_r($result->$getId());
    print_r($result->$getCreatedDate());
    print_r($result->$getUpdatedDate());
    print_r($result->$getBrokerage());
    print_r($result->$getName());
    print_r($result->$getType());
    print_r($result->$getDisabled());
    print_r($result->$getDisabledDate());
    print_r($result->$getMeta());
} catch (\Exception $e) {
    echo 'Exception when calling ConnectionsApi->listBrokerageAuthorizations: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **user_id** | **string**|  | |
| **user_secret** | **string**|  | |

### Return type

[**\SnapTrade\Model\BrokerageAuthorization[]**](../Model/BrokerageAuthorization.md)

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `removeBrokerageAuthorization()`

```php
removeBrokerageAuthorization($authorization_id, $user_id, $user_secret)
```

Delete brokerage authorization

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$snaptrade = new \SnapTrade\Client(
    clientId: getenv("SNAPTRADE_CLIENT_ID"),
    consumerKey: getenv("SNAPTRADE_CONSUMER_KEY")
);

$authorization_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"; // The ID of the Authorization to delete.
$user_id = "John.doe@snaptrade.com";
$user_secret = "USERSECRET123";

try {
    $snaptrade->connections->removeBrokerageAuthorization(
        authorization_id: $authorization_id, 
        user_id: $user_id, 
        user_secret: $user_secret
    );
} catch (\Exception $e) {
    echo 'Exception when calling ConnectionsApi->removeBrokerageAuthorization: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **authorization_id** | **string**| The ID of the Authorization to delete. | |
| **user_id** | **string**|  | |
| **user_secret** | **string**|  | |

### Return type

void (empty response body)

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `sessionEvents()`

```php
sessionEvents($partner_client_id, $user_id, $session_id): \SnapTrade\Model\ConnectionsSessionEvents200ResponseInner[]
```

List all session events for the partner

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$snaptrade = new \SnapTrade\Client(
    clientId: getenv("SNAPTRADE_CLIENT_ID"),
    consumerKey: getenv("SNAPTRADE_CONSUMER_KEY")
);

$partner_client_id = "SNAPTRADETEST";
$user_id = "917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2"; // Optional comma seperated list of user IDs used to filter the request on specific users
$session_id = "917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2"; // Optional comma seperated list of session IDs used to filter the request on specific users

try {
    $result = $snaptrade->connections->sessionEvents(
        partner_client_id: $partner_client_id, 
        user_id: $user_id, 
        session_id: $session_id
    );
    print_r($result->$getId());
    print_r($result->$getSessionEventType());
    print_r($result->$getSessionId());
    print_r($result->$getUserId());
    print_r($result->$getCreatedDate());
    print_r($result->$getBrokerageStatusCode());
    print_r($result->$getBrokerageAuthorizationId());
} catch (\Exception $e) {
    echo 'Exception when calling ConnectionsApi->sessionEvents: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **partner_client_id** | **string**|  | |
| **user_id** | **string**| Optional comma seperated list of user IDs used to filter the request on specific users | [optional] |
| **session_id** | **string**| Optional comma seperated list of session IDs used to filter the request on specific users | [optional] |

### Return type

[**\SnapTrade\Model\ConnectionsSessionEvents200ResponseInner[]**](../Model/ConnectionsSessionEvents200ResponseInner.md)

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
