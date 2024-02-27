# SnapTrade\AuthenticationApi

All URIs are relative to https://api.snaptrade.com/api/v1, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**deleteSnapTradeUser()**](AuthenticationApi.md#deleteSnapTradeUser) | **DELETE** /snapTrade/deleteUser | Delete SnapTrade user |
| [**getUserJWT()**](AuthenticationApi.md#getUserJWT) | **GET** /snapTrade/encryptedJWT | Generate encrypted JWT token |
| [**listSnapTradeUsers()**](AuthenticationApi.md#listSnapTradeUsers) | **GET** /snapTrade/listUsers | List SnapTrade users |
| [**loginSnapTradeUser()**](AuthenticationApi.md#loginSnapTradeUser) | **POST** /snapTrade/login | Login user &amp; generate connection link |
| [**registerSnapTradeUser()**](AuthenticationApi.md#registerSnapTradeUser) | **POST** /snapTrade/registerUser | Create SnapTrade user |
| [**resetSnapTradeUserSecret()**](AuthenticationApi.md#resetSnapTradeUserSecret) | **POST** /snapTrade/resetUserSecret | Obtain a new user secret for a user |


## `deleteSnapTradeUser()`

```php
deleteSnapTradeUser($user_id): \SnapTrade\Model\DeleteUserResponse
```

Delete SnapTrade user

Deletes a user you've registered over the SnapTrade API, and any data associated with them or their investment accounts.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$snaptrade = new \SnapTrade\Client(
    clientId: getenv("SNAPTRADE_CLIENT_ID"),
    consumerKey: getenv("SNAPTRADE_CONSUMER_KEY")
);

$user_id = "John.doe@snaptrade.com";

try {
    $result = $snaptrade->authentication->deleteSnapTradeUser(
        user_id: $user_id
    );
    print_r($result->$getStatus());
    print_r($result->$getUserId());
} catch (\Exception $e) {
    echo 'Exception when calling AuthenticationApi->deleteSnapTradeUser: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **user_id** | **string**|  | |

### Return type

[**\SnapTrade\Model\DeleteUserResponse**](../Model/DeleteUserResponse.md)

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `getUserJWT()`

```php
getUserJWT($user_id, $user_secret): \SnapTrade\Model\EncryptedResponse
```

Generate encrypted JWT token

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
    $result = $snaptrade->authentication->getUserJWT(
        user_id: $user_id, 
        user_secret: $user_secret
    );
    print_r($result->$getEncryptedSharedKey());
    print_r($result->$getEncryptedMessageData());
} catch (\Exception $e) {
    echo 'Exception when calling AuthenticationApi->getUserJWT: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **user_id** | **string**|  | |
| **user_secret** | **string**|  | |

### Return type

[**\SnapTrade\Model\EncryptedResponse**](../Model/EncryptedResponse.md)

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `listSnapTradeUsers()`

```php
listSnapTradeUsers(): string[]
```

List SnapTrade users

Returns a list of users you've registered over the SnapTrade API.

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$snaptrade = new \SnapTrade\Client(
    clientId: getenv("SNAPTRADE_CLIENT_ID"),
    consumerKey: getenv("SNAPTRADE_CONSUMER_KEY")
);


try {
    $result = $snaptrade->authentication->listSnapTradeUsers();
} catch (\Exception $e) {
    echo 'Exception when calling AuthenticationApi->listSnapTradeUsers: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

**string[]**

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `loginSnapTradeUser()`

```php
loginSnapTradeUser($user_id, $user_secret, $snap_trade_login_user_request_body): \SnapTrade\Model\AuthenticationLoginSnapTradeUser200Response
```

Login user & generate connection link

Logs in a SnapTrade user and returns an authenticated connection portal URL for them to use to connect a brokerage account.

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
$broker = "ALPACA"; // Slug of the brokerage to connect the user to
$immediate_redirect = True; // When set to True, user will be redirected back to the partner's site instead of the connection portal
$custom_redirect = "https://snaptrade.com"; // URL to redirect the user to after the user connects their brokerage account
$reconnect = "8b5f262d-4bb9-365d-888a-202bd3b15fa1"; // The UUID of the brokerage connection to be reconnected. This parameter should be left empty unless you are reconnecting a disabled connection. See ‘Reconnecting Accounts’ for more information.
$connection_type = "read"; // Sets whether the connection should be read or trade
$connection_portal_version = "v2"; // Sets the version of the connection portal to render, with a default to 'v2'

try {
    $result = $snaptrade->authentication->loginSnapTradeUser(
        user_id: $user_id, 
        user_secret: $user_secret, 
        broker: $broker, 
        immediate_redirect: $immediate_redirect, 
        custom_redirect: $custom_redirect, 
        reconnect: $reconnect, 
        connection_type: $connection_type, 
        connection_portal_version: $connection_portal_version
    );
    print_r($result->$getRedirectUri());
    print_r($result->$getSessionId());
    print_r($result->$getEncryptedSharedKey());
    print_r($result->$getEncryptedMessageData());
} catch (\Exception $e) {
    echo 'Exception when calling AuthenticationApi->loginSnapTradeUser: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **user_id** | **string**|  | |
| **user_secret** | **string**|  | |
| **snap_trade_login_user_request_body** | [**\SnapTrade\Model\SnapTradeLoginUserRequestBody**](../Model/SnapTradeLoginUserRequestBody.md)|  | [optional] |

### Return type

[**\SnapTrade\Model\AuthenticationLoginSnapTradeUser200Response**](../Model/AuthenticationLoginSnapTradeUser200Response.md)

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `registerSnapTradeUser()`

```php
registerSnapTradeUser($snap_trade_register_user_request_body): \SnapTrade\Model\UserIDandSecret
```

Create SnapTrade user

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$snaptrade = new \SnapTrade\Client(
    clientId: getenv("SNAPTRADE_CLIENT_ID"),
    consumerKey: getenv("SNAPTRADE_CONSUMER_KEY")
);

$user_id = "snaptrade-user-123"; // SnapTrade User ID. Provided by SnapTrade Partner. Can be any string, as long as it's unique to a user

try {
    $result = $snaptrade->authentication->registerSnapTradeUser(
        user_id: $user_id
    );
    print_r($result->$getUserId());
    print_r($result->$getUserSecret());
} catch (\Exception $e) {
    echo 'Exception when calling AuthenticationApi->registerSnapTradeUser: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **snap_trade_register_user_request_body** | [**\SnapTrade\Model\SnapTradeRegisterUserRequestBody**](../Model/SnapTradeRegisterUserRequestBody.md)|  | |

### Return type

[**\SnapTrade\Model\UserIDandSecret**](../Model/UserIDandSecret.md)

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `resetSnapTradeUserSecret()`

```php
resetSnapTradeUserSecret($user_i_dand_secret): \SnapTrade\Model\UserIDandSecret
```

Obtain a new user secret for a user

### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$snaptrade = new \SnapTrade\Client(
    clientId: getenv("SNAPTRADE_CLIENT_ID"),
    consumerKey: getenv("SNAPTRADE_CONSUMER_KEY")
);

$user_id = "snaptrade-user-123"; // SnapTrade User ID. Provided by SnapTrade Partner. Can be any string, as long as it's unique to a user
$user_secret = "h81@cx1lkalablakwjaltkejraj11="; // SnapTrade User Secret randomly generated by SnapTrade. This should be considered priviledged information and if compromised, you should delete and re-create this SnapTrade user.

try {
    $result = $snaptrade->authentication->resetSnapTradeUserSecret(
        user_id: $user_id, 
        user_secret: $user_secret
    );
    print_r($result->$getUserId());
    print_r($result->$getUserSecret());
} catch (\Exception $e) {
    echo 'Exception when calling AuthenticationApi->resetSnapTradeUserSecret: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **user_i_dand_secret** | [**\SnapTrade\Model\UserIDandSecret**](../Model/UserIDandSecret.md)|  | |

### Return type

[**\SnapTrade\Model\UserIDandSecret**](../Model/UserIDandSecret.md)

### Authorization

[PartnerClientId](../../README.md#PartnerClientId), [PartnerSignature](../../README.md#PartnerSignature), [PartnerTimestamp](../../README.md#PartnerTimestamp)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
