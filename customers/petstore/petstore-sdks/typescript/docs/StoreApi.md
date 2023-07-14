# StoreApi

All URIs are relative to *https://petstore.swagger.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteOrder**](StoreApi.md#deleteOrder) | **DELETE** /store/order/{orderId} | Delete purchase order by ID
[**getInventory**](StoreApi.md#getInventory) | **GET** /store/inventory | Returns pet inventories by status
[**getOrderById**](StoreApi.md#getOrderById) | **GET** /store/order/{orderId} | Find purchase order by ID
[**placeOrder**](StoreApi.md#placeOrder) | **POST** /store/order | Place an order for a pet


# **deleteOrder**

#### **DELETE** /store/order/{orderId}

### Description
For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors

### Example


```typescript
import { PetStore } from "pet-store-typescript-sdk";

const petstore = new PetStore({
  // Defining the base path is optional and defaults to https://petstore.swagger.io/v2
  // basePath: "https://petstore.swagger.io/v2",
});

const deleteOrderResponse = await petstore.store.deleteOrder({
  orderId: "orderId_example",
});

console.log(deleteOrderResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**string**] | ID of the order that needs to be deleted | defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid ID supplied |  -  |
**404** | Order not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **getInventory**

#### **GET** /store/inventory

### Description
Returns a map of status codes to quantities

### Example


```typescript
import { PetStore } from "pet-store-typescript-sdk";

const petstore = new PetStore({
  // Defining the base path is optional and defaults to https://petstore.swagger.io/v2
  // basePath: "https://petstore.swagger.io/v2",
  apiKey: "API_KEY",
});

const getInventoryResponse = await petstore.store.getInventory();

console.log(getInventoryResponse);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**{ [key: string]: number; }**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **getOrderById**

#### **GET** /store/order/{orderId}

### Description
For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions

### Example


```typescript
import { PetStore } from "pet-store-typescript-sdk";

const petstore = new PetStore({
  // Defining the base path is optional and defaults to https://petstore.swagger.io/v2
  // basePath: "https://petstore.swagger.io/v2",
});

const getOrderByIdResponse = await petstore.store.getOrderById({
  orderId: 1,
});

console.log(getOrderByIdResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**number**] | ID of pet that needs to be fetched | defaults to undefined


### Return type

**Order**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Invalid ID supplied |  -  |
**404** | Order not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **placeOrder**

#### **POST** /store/order

### Description


### Example


```typescript
import { PetStore } from "pet-store-typescript-sdk";

const petstore = new PetStore({
  // Defining the base path is optional and defaults to https://petstore.swagger.io/v2
  // basePath: "https://petstore.swagger.io/v2",
});

const placeOrderResponse = await petstore.store.placeOrder({
  status: "placed",
  complete: false,
});

console.log(placeOrderResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | **Order**| order placed for purchasing the pet |


### Return type

**Order**

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Invalid Order |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


