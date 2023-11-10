# Splitit\InstallmentPlanApi

All URIs are relative to https://web-api-v3.production.splitit.com, except if the operation defines another base path.

| Method | HTTP request | Description |
| ------------- | ------------- | ------------- |
| [**cancel()**](InstallmentPlanApi.md#cancel) | **POST** /api/installmentplans/{installmentPlanNumber}/cancel |  |
| [**checkEligibility()**](InstallmentPlanApi.md#checkEligibility) | **POST** /api/installmentplans/check-eligibility |  |
| [**get()**](InstallmentPlanApi.md#get) | **GET** /api/installmentplans/{installmentPlanNumber} |  |
| [**post()**](InstallmentPlanApi.md#post) | **POST** /api/installmentplans/initiate |  |
| [**post2()**](InstallmentPlanApi.md#post2) | **POST** /api/installmentplans |  |
| [**refund()**](InstallmentPlanApi.md#refund) | **POST** /api/installmentplans/{installmentPlanNumber}/refund |  |
| [**search()**](InstallmentPlanApi.md#search) | **GET** /api/installmentplans/search |  |
| [**updateOrder()**](InstallmentPlanApi.md#updateOrder) | **PUT** /api/installmentplans/{installmentPlanNumber}/updateorder |  |
| [**updateOrder2()**](InstallmentPlanApi.md#updateOrder2) | **PUT** /api/installmentplans/updateorder |  |
| [**verifyAuthorization()**](InstallmentPlanApi.md#verifyAuthorization) | **GET** /api/installmentplans/{installmentPlanNumber}/verifyauthorization |  |


## `cancel()`

```php
cancel($installment_plan_number, $x_splitit_idempotency_key, $x_splitit_touch_point): \Splitit\Model\InstallmentPlanCancelResponse
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$splitit = new \Splitit\Client(
    getenv("SPLITIT_CLIENT_ID"),
    getenv("SPLITIT_CLIENT_SECRET")
);

$installment_plan_number = "installmentPlanNumber_example";
$x_splitit_idempotency_key = "X-Splitit-IdempotencyKey_example";
$x_splitit_touch_point = ""; // TouchPoint

try {
    $result = $splitit->installmentPlan->cancel(
        $installment_plan_number, 
        $x_splitit_idempotency_key, 
        $x_splitit_touch_point
    );
    print_r($result->$getInstallmentPlanNumber());
} catch (\Exception $e) {
    echo 'Exception when calling InstallmentPlanApi->cancel: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **installment_plan_number** | **string**|  | |
| **x_splitit_idempotency_key** | **string**|  | |
| **x_splitit_touch_point** | **string**| TouchPoint | [default to &#39;&#39;] |

### Return type

[**\Splitit\Model\InstallmentPlanCancelResponse**](../Model/InstallmentPlanCancelResponse.md)

### Authorization

[oauth](../../README.md#oauth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/plain`, `application/json`, `text/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `checkEligibility()`

```php
checkEligibility($x_splitit_idempotency_key, $x_splitit_touch_point, $check_installments_eligibility_request): \Splitit\Model\InstallmentsEligibilityResponse
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$splitit = new \Splitit\Client(
    getenv("SPLITIT_CLIENT_ID"),
    getenv("SPLITIT_CLIENT_SECRET")
);

$x_splitit_idempotency_key = "X-Splitit-IdempotencyKey_example";
$x_splitit_touch_point = ""; // TouchPoint
$plan_data = [
        "total_amount" => 3.14,
        "number_of_installments" => 1,
        "purchase_method" => "InStore",
    ];
$card_details = [
        "card_brand" => "Mastercard",
        "card_type" => "Credit",
    ];
$billing_address = [
    ];

try {
    $result = $splitit->installmentPlan->checkEligibility(
        $x_splitit_idempotency_key, 
        $x_splitit_touch_point, 
        $plan_data, 
        $card_details, 
        $billing_address
    );
    print_r($result->$getInstallmentProvider());
    print_r($result->$getPaymentPlanOptions());
} catch (\Exception $e) {
    echo 'Exception when calling InstallmentPlanApi->checkEligibility: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **x_splitit_idempotency_key** | **string**|  | |
| **x_splitit_touch_point** | **string**| TouchPoint | [default to &#39;&#39;] |
| **check_installments_eligibility_request** | [**\Splitit\Model\CheckInstallmentsEligibilityRequest**](../Model/CheckInstallmentsEligibilityRequest.md)|  | |

### Return type

[**\Splitit\Model\InstallmentsEligibilityResponse**](../Model/InstallmentsEligibilityResponse.md)

### Authorization

[oauth](../../README.md#oauth)

### HTTP request headers

- **Content-Type**: `application/json-patch+json`, `application/json`, `text/json`, `application/*+json`
- **Accept**: `text/plain`, `application/json`, `text/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `get()`

```php
get($installment_plan_number, $x_splitit_idempotency_key, $x_splitit_touch_point): \Splitit\Model\InstallmentPlanGetResponse
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$splitit = new \Splitit\Client(
    getenv("SPLITIT_CLIENT_ID"),
    getenv("SPLITIT_CLIENT_SECRET")
);

$installment_plan_number = "installmentPlanNumber_example";
$x_splitit_idempotency_key = "X-Splitit-IdempotencyKey_example";
$x_splitit_touch_point = ""; // TouchPoint

try {
    $result = $splitit->installmentPlan->get(
        $installment_plan_number, 
        $x_splitit_idempotency_key, 
        $x_splitit_touch_point
    );
    print_r($result->$getInstallmentPlanNumber());
    print_r($result->$getDateCreated());
    print_r($result->$getRefOrderNumber());
    print_r($result->$getPurchaseMethod());
    print_r($result->$getStatus());
    print_r($result->$getCurrency());
    print_r($result->$getOriginalAmount());
    print_r($result->$getAmount());
    print_r($result->$getAuthorization());
    print_r($result->$getShopper());
    print_r($result->$getBillingAddress());
    print_r($result->$getPaymentMethod());
    print_r($result->$getExtendedParams());
    print_r($result->$getInstallments());
    print_r($result->$getRefunds());
    print_r($result->$getLinks());
} catch (\Exception $e) {
    echo 'Exception when calling InstallmentPlanApi->get: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **installment_plan_number** | **string**|  | |
| **x_splitit_idempotency_key** | **string**|  | |
| **x_splitit_touch_point** | **string**| TouchPoint | [default to &#39;&#39;] |

### Return type

[**\Splitit\Model\InstallmentPlanGetResponse**](../Model/InstallmentPlanGetResponse.md)

### Authorization

[oauth](../../README.md#oauth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/plain`, `application/json`, `text/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `post()`

```php
post($x_splitit_idempotency_key, $x_splitit_touch_point, $installment_plan_initiate_request, $x_splitit_test_mode): \Splitit\Model\InitiatePlanResponse
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$splitit = new \Splitit\Client(
    getenv("SPLITIT_CLIENT_ID"),
    getenv("SPLITIT_CLIENT_SECRET")
);

$auto_capture = True;
$x_splitit_idempotency_key = "X-Splitit-IdempotencyKey_example";
$x_splitit_touch_point = ""; // TouchPoint
$attempt3d_secure = True;
$shopper = [
    ];
$plan_data = [
        "total_amount" => 3.14,
        "purchase_method" => "InStore",
    ];
$billing_address = [
    ];
$redirect_urls = [
    ];
$ux_settings = [
    ];
$events_endpoints = [
    ];
$processing_data = [
    ];
$x_splitit_test_mode = "None";

try {
    $result = $splitit->installmentPlan->post(
        $auto_capture, 
        $x_splitit_idempotency_key, 
        $x_splitit_touch_point, 
        $attempt3d_secure, 
        $shopper, 
        $plan_data, 
        $billing_address, 
        $redirect_urls, 
        $ux_settings, 
        $events_endpoints, 
        $processing_data, 
        $x_splitit_test_mode
    );
    print_r($result->$getInstallmentPlanNumber());
    print_r($result->$getRefOrderNumber());
    print_r($result->$getPurchaseMethod());
    print_r($result->$getStatus());
    print_r($result->$getCurrency());
    print_r($result->$getAmount());
    print_r($result->$getExtendedParams());
    print_r($result->$getShopper());
    print_r($result->$getBillingAddress());
    print_r($result->$getCheckoutUrl());
} catch (\Exception $e) {
    echo 'Exception when calling InstallmentPlanApi->post: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **x_splitit_idempotency_key** | **string**|  | |
| **x_splitit_touch_point** | **string**| TouchPoint | [default to &#39;&#39;] |
| **installment_plan_initiate_request** | [**\Splitit\Model\InstallmentPlanInitiateRequest**](../Model/InstallmentPlanInitiateRequest.md)|  | |
| **x_splitit_test_mode** | **string**|  | [optional] |

### Return type

[**\Splitit\Model\InitiatePlanResponse**](../Model/InitiatePlanResponse.md)

### Authorization

[oauth](../../README.md#oauth)

### HTTP request headers

- **Content-Type**: `application/json-patch+json`, `application/json`, `text/json`, `application/*+json`
- **Accept**: `text/plain`, `application/json`, `text/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `post2()`

```php
post2($x_splitit_idempotency_key, $x_splitit_touch_point, $installment_plan_create_request, $x_splitit_test_mode): \Splitit\Model\InstallmentPlanCreateResponse
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$splitit = new \Splitit\Client(
    getenv("SPLITIT_CLIENT_ID"),
    getenv("SPLITIT_CLIENT_SECRET")
);

$auto_capture = True;
$terms_and_conditions_accepted = True;
$x_splitit_idempotency_key = "X-Splitit-IdempotencyKey_example";
$x_splitit_touch_point = ""; // TouchPoint
$attempt3d_secure = True;
$shopper = [
    ];
$plan_data = [
        "total_amount" => 3.14,
        "purchase_method" => "InStore",
    ];
$billing_address = [
    ];
$payment_method = [
        "type" => "Card",
    ];
$redirect_urls = [
    ];
$processing_data = [
    ];
$events_endpoints = [
    ];
$x_splitit_test_mode = "None";

try {
    $result = $splitit->installmentPlan->post2(
        $auto_capture, 
        $terms_and_conditions_accepted, 
        $x_splitit_idempotency_key, 
        $x_splitit_touch_point, 
        $attempt3d_secure, 
        $shopper, 
        $plan_data, 
        $billing_address, 
        $payment_method, 
        $redirect_urls, 
        $processing_data, 
        $events_endpoints, 
        $x_splitit_test_mode
    );
    print_r($result->$getInstallmentPlanNumber());
    print_r($result->$getDateCreated());
    print_r($result->$getRefOrderNumber());
    print_r($result->$getPurchaseMethod());
    print_r($result->$getStatus());
    print_r($result->$getCurrency());
    print_r($result->$getOriginalAmount());
    print_r($result->$getAmount());
    print_r($result->$getExtendedParams());
    print_r($result->$getAuthorization());
    print_r($result->$getShopper());
    print_r($result->$getBillingAddress());
    print_r($result->$getPaymentMethod());
    print_r($result->$getInstallments());
    print_r($result->$getLinks());
} catch (\Exception $e) {
    echo 'Exception when calling InstallmentPlanApi->post2: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **x_splitit_idempotency_key** | **string**|  | |
| **x_splitit_touch_point** | **string**| TouchPoint | [default to &#39;&#39;] |
| **installment_plan_create_request** | [**\Splitit\Model\InstallmentPlanCreateRequest**](../Model/InstallmentPlanCreateRequest.md)|  | |
| **x_splitit_test_mode** | **string**|  | [optional] |

### Return type

[**\Splitit\Model\InstallmentPlanCreateResponse**](../Model/InstallmentPlanCreateResponse.md)

### Authorization

[oauth](../../README.md#oauth)

### HTTP request headers

- **Content-Type**: `application/json-patch+json`, `application/json`, `text/json`, `application/*+json`
- **Accept**: `text/plain`, `application/json`, `text/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `refund()`

```php
refund($installment_plan_number, $x_splitit_idempotency_key, $x_splitit_touch_point, $installment_plan_refund_request): \Splitit\Model\InstallmentPlanRefundResponse
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$splitit = new \Splitit\Client(
    getenv("SPLITIT_CLIENT_ID"),
    getenv("SPLITIT_CLIENT_SECRET")
);

$amount = 3.14;
$installment_plan_number = "installmentPlanNumber_example";
$x_splitit_idempotency_key = "X-Splitit-IdempotencyKey_example";
$x_splitit_touch_point = ""; // TouchPoint
$refund_strategy = "FutureInstallmentsFirst";

try {
    $result = $splitit->installmentPlan->refund(
        $amount, 
        $installment_plan_number, 
        $x_splitit_idempotency_key, 
        $x_splitit_touch_point, 
        $refund_strategy
    );
    print_r($result->$getRefundId());
    print_r($result->$getInstallmentPlanNumber());
    print_r($result->$getCurrency());
    print_r($result->$getNonCreditRefundAmount());
    print_r($result->$getCreditRefundAmount());
    print_r($result->$getSummary());
} catch (\Exception $e) {
    echo 'Exception when calling InstallmentPlanApi->refund: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **installment_plan_number** | **string**|  | |
| **x_splitit_idempotency_key** | **string**|  | |
| **x_splitit_touch_point** | **string**| TouchPoint | [default to &#39;&#39;] |
| **installment_plan_refund_request** | [**\Splitit\Model\InstallmentPlanRefundRequest**](../Model/InstallmentPlanRefundRequest.md)|  | |

### Return type

[**\Splitit\Model\InstallmentPlanRefundResponse**](../Model/InstallmentPlanRefundResponse.md)

### Authorization

[oauth](../../README.md#oauth)

### HTTP request headers

- **Content-Type**: `application/json-patch+json`, `application/json`, `text/json`, `application/*+json`
- **Accept**: `text/plain`, `application/json`, `text/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `search()`

```php
search($x_splitit_idempotency_key, $x_splitit_touch_point, $installment_plan_number, $ref_order_number, $extended_params): \Splitit\Model\InstallmentPlanSearchResponse
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$splitit = new \Splitit\Client(
    getenv("SPLITIT_CLIENT_ID"),
    getenv("SPLITIT_CLIENT_SECRET")
);

$x_splitit_idempotency_key = "X-Splitit-IdempotencyKey_example";
$x_splitit_touch_point = ""; // TouchPoint
$installment_plan_number = "string_example";
$ref_order_number = "string_example";
$extended_params = [
        "key": "string_example",
    ];

try {
    $result = $splitit->installmentPlan->search(
        $x_splitit_idempotency_key, 
        $x_splitit_touch_point, 
        $installment_plan_number, 
        $ref_order_number, 
        $extended_params
    );
    print_r($result->$getPlanList());
} catch (\Exception $e) {
    echo 'Exception when calling InstallmentPlanApi->search: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **x_splitit_idempotency_key** | **string**|  | |
| **x_splitit_touch_point** | **string**| TouchPoint | [default to &#39;&#39;] |
| **installment_plan_number** | **string**|  | [optional] |
| **ref_order_number** | **string**|  | [optional] |
| **extended_params** | [**array<string,string>**](../Model/string.md)|  | [optional] |

### Return type

[**\Splitit\Model\InstallmentPlanSearchResponse**](../Model/InstallmentPlanSearchResponse.md)

### Authorization

[oauth](../../README.md#oauth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/plain`, `application/json`, `text/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateOrder()`

```php
updateOrder($installment_plan_number, $x_splitit_idempotency_key, $x_splitit_touch_point, $update_order_request): \Splitit\Model\InstallmentPlanUpdateResponse
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$splitit = new \Splitit\Client(
    getenv("SPLITIT_CLIENT_ID"),
    getenv("SPLITIT_CLIENT_SECRET")
);

$installment_plan_number = "installmentPlanNumber_example";
$x_splitit_idempotency_key = "X-Splitit-IdempotencyKey_example";
$x_splitit_touch_point = ""; // TouchPoint
$tracking_number = "string_example";
$ref_order_number = "string_example";
$shipping_status = "Pending";
$capture = True;

try {
    $result = $splitit->installmentPlan->updateOrder(
        $installment_plan_number, 
        $x_splitit_idempotency_key, 
        $x_splitit_touch_point, 
        $tracking_number, 
        $ref_order_number, 
        $shipping_status, 
        $capture
    );
    print_r($result->$getRefOrderNumber());
    print_r($result->$getInstallmentPlanNumber());
    print_r($result->$getStatus());
    print_r($result->$getShippingStatus());
} catch (\Exception $e) {
    echo 'Exception when calling InstallmentPlanApi->updateOrder: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **installment_plan_number** | **string**|  | |
| **x_splitit_idempotency_key** | **string**|  | |
| **x_splitit_touch_point** | **string**| TouchPoint | [default to &#39;&#39;] |
| **update_order_request** | [**\Splitit\Model\UpdateOrderRequest**](../Model/UpdateOrderRequest.md)|  | |

### Return type

[**\Splitit\Model\InstallmentPlanUpdateResponse**](../Model/InstallmentPlanUpdateResponse.md)

### Authorization

[oauth](../../README.md#oauth)

### HTTP request headers

- **Content-Type**: `application/json-patch+json`, `application/json`, `text/json`, `application/*+json`
- **Accept**: `text/plain`, `application/json`, `text/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `updateOrder2()`

```php
updateOrder2($x_splitit_idempotency_key, $x_splitit_touch_point, $installment_plan_update_request_by_identifier): \Splitit\Model\InstallmentPlanUpdateResponse
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$splitit = new \Splitit\Client(
    getenv("SPLITIT_CLIENT_ID"),
    getenv("SPLITIT_CLIENT_SECRET")
);

$x_splitit_idempotency_key = "X-Splitit-IdempotencyKey_example";
$x_splitit_touch_point = ""; // TouchPoint
$ref_order_number = "string_example";
$tracking_number = "string_example";
$capture = True;
$shipping_status = "Shipped";
$identifier = [
    ];

try {
    $result = $splitit->installmentPlan->updateOrder2(
        $x_splitit_idempotency_key, 
        $x_splitit_touch_point, 
        $ref_order_number, 
        $tracking_number, 
        $capture, 
        $shipping_status, 
        $identifier
    );
    print_r($result->$getRefOrderNumber());
    print_r($result->$getInstallmentPlanNumber());
    print_r($result->$getStatus());
    print_r($result->$getShippingStatus());
} catch (\Exception $e) {
    echo 'Exception when calling InstallmentPlanApi->updateOrder2: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **x_splitit_idempotency_key** | **string**|  | |
| **x_splitit_touch_point** | **string**| TouchPoint | [default to &#39;&#39;] |
| **installment_plan_update_request_by_identifier** | [**\Splitit\Model\InstallmentPlanUpdateRequestByIdentifier**](../Model/InstallmentPlanUpdateRequestByIdentifier.md)|  | |

### Return type

[**\Splitit\Model\InstallmentPlanUpdateResponse**](../Model/InstallmentPlanUpdateResponse.md)

### Authorization

[oauth](../../README.md#oauth)

### HTTP request headers

- **Content-Type**: `application/json-patch+json`, `application/json`, `text/json`, `application/*+json`
- **Accept**: `text/plain`, `application/json`, `text/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)

## `verifyAuthorization()`

```php
verifyAuthorization($installment_plan_number, $x_splitit_idempotency_key, $x_splitit_touch_point): \Splitit\Model\VerifyAuthorizationResponse
```



### Example

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$splitit = new \Splitit\Client(
    getenv("SPLITIT_CLIENT_ID"),
    getenv("SPLITIT_CLIENT_SECRET")
);

$installment_plan_number = "installmentPlanNumber_example";
$x_splitit_idempotency_key = "X-Splitit-IdempotencyKey_example";
$x_splitit_touch_point = ""; // TouchPoint

try {
    $result = $splitit->installmentPlan->verifyAuthorization(
        $installment_plan_number, 
        $x_splitit_idempotency_key, 
        $x_splitit_touch_point
    );
    print_r($result->$getIsAuthorized());
    print_r($result->$getAuthorizationAmount());
    print_r($result->$getAuthorization());
} catch (\Exception $e) {
    echo 'Exception when calling InstallmentPlanApi->verifyAuthorization: ', $e->getMessage(), PHP_EOL;
}
```

### Parameters

| Name | Type | Description  | Notes |
| ------------- | ------------- | ------------- | ------------- |
| **installment_plan_number** | **string**|  | |
| **x_splitit_idempotency_key** | **string**|  | |
| **x_splitit_touch_point** | **string**| TouchPoint | [default to &#39;&#39;] |

### Return type

[**\Splitit\Model\VerifyAuthorizationResponse**](../Model/VerifyAuthorizationResponse.md)

### Authorization

[oauth](../../README.md#oauth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/plain`, `application/json`, `text/json`

[[Back to top]](#) [[Back to API list]](../../README.md#endpoints)
[[Back to Model list]](../../README.md#models)
[[Back to README]](../../README.md)
