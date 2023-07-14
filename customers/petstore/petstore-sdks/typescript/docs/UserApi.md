# UserApi

All URIs are relative to *https://petstore.swagger.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](UserApi.md#create) | **POST** /user | Create user
[**createWithArray**](UserApi.md#createWithArray) | **POST** /user/createWithArray | Creates list of users with given input array
[**createWithList**](UserApi.md#createWithList) | **POST** /user/createWithList | Creates list of users with given input array
[**delete**](UserApi.md#delete) | **DELETE** /user/{username} | Delete user
[**getByName**](UserApi.md#getByName) | **GET** /user/{username} | Get user by user name
[**login**](UserApi.md#login) | **GET** /user/login | Logs user into the system
[**logout**](UserApi.md#logout) | **GET** /user/logout | Logs out current logged in user session
[**update**](UserApi.md#update) | **PUT** /user/{username} | Updated user


# **create**

#### **POST** /user

### Description
This can only be done by the logged in user.

### Example


```typescript
import { PetStore } from "pet-store-typescript-sdk";

const petstore = new PetStore({
  // Defining the base path is optional and defaults to https://petstore.swagger.io/v2
  // basePath: "https://petstore.swagger.io/v2",
  apiKey: "API_KEY",
});

const createResponse = await petstore.user.create({});

console.log(createResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **User**| Created user object |


### Return type

void (empty response body)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **createWithArray**

#### **POST** /user/createWithArray

### Description


### Example


```typescript
import { PetStore } from "pet-store-typescript-sdk";

const petstore = new PetStore({
  // Defining the base path is optional and defaults to https://petstore.swagger.io/v2
  // basePath: "https://petstore.swagger.io/v2",
  apiKey: "API_KEY",
});

const createWithArrayResponse = await petstore.user.createWithArray({});

console.log(createWithArrayResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **Array<User>**| List of user object |


### Return type

void (empty response body)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **createWithList**

#### **POST** /user/createWithList

### Description


### Example


```typescript
import { PetStore } from "pet-store-typescript-sdk";

const petstore = new PetStore({
  // Defining the base path is optional and defaults to https://petstore.swagger.io/v2
  // basePath: "https://petstore.swagger.io/v2",
  apiKey: "API_KEY",
});

const createWithListResponse = await petstore.user.createWithList({});

console.log(createWithListResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | **Array<User>**| List of user object |


### Return type

void (empty response body)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **delete**

#### **DELETE** /user/{username}

### Description
This can only be done by the logged in user.

### Example


```typescript
import { PetStore } from "pet-store-typescript-sdk";

const petstore = new PetStore({
  // Defining the base path is optional and defaults to https://petstore.swagger.io/v2
  // basePath: "https://petstore.swagger.io/v2",
  apiKey: "API_KEY",
});

const deleteResponse = await petstore.user.delete({
  username: "username_example",
});

console.log(deleteResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | [**string**] | The name that needs to be deleted | defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid username supplied |  -  |
**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **getByName**

#### **GET** /user/{username}

### Description


### Example


```typescript
import { PetStore } from "pet-store-typescript-sdk";

const petstore = new PetStore({
  // Defining the base path is optional and defaults to https://petstore.swagger.io/v2
  // basePath: "https://petstore.swagger.io/v2",
});

const getByNameResponse = await petstore.user.getByName({
  username: "username_example",
});

console.log(getByNameResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | [**string**] | The name that needs to be fetched. Use user1 for testing. | defaults to undefined


### Return type

**User**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Invalid username supplied |  -  |
**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **login**

#### **GET** /user/login

### Description


### Example


```typescript
import { PetStore } from "pet-store-typescript-sdk";

const petstore = new PetStore({
  // Defining the base path is optional and defaults to https://petstore.swagger.io/v2
  // basePath: "https://petstore.swagger.io/v2",
});

const loginResponse = await petstore.user.login({
  username:
    "CbUUGjjNSwg0_bs9ZayIMrKdgNvb6gvxmPb9GcsM61ate1RA89q3w1l4eH4XxEz.5awLMdeXylwK0lMGUSM4jsrh4dstlnQUN5vVdMLPA",
  password: "password_example",
});

console.log(loginResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | [**string**] | The user name for login | defaults to undefined
 **password** | [**string**] | The password for login in clear text | defaults to undefined


### Return type

**string**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  * Set-Cookie - Cookie authentication key for use with the &#x60;api_key&#x60; apiKey authentication. <br>  * X-Rate-Limit - calls per hour allowed by the user <br>  * X-Expires-After - date in UTC when token expires <br>  |
**400** | Invalid username/password supplied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **logout**

#### **GET** /user/logout

### Description


### Example


```typescript
import { PetStore } from "pet-store-typescript-sdk";

const petstore = new PetStore({
  // Defining the base path is optional and defaults to https://petstore.swagger.io/v2
  // basePath: "https://petstore.swagger.io/v2",
  apiKey: "API_KEY",
});

const logoutResponse = await petstore.user.logout();

console.log(logoutResponse);
```


### Parameters
This endpoint does not need any parameter.


### Return type

void (empty response body)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **update**

#### **PUT** /user/{username}

### Description
This can only be done by the logged in user.

### Example


```typescript
import { PetStore } from "pet-store-typescript-sdk";

const petstore = new PetStore({
  // Defining the base path is optional and defaults to https://petstore.swagger.io/v2
  // basePath: "https://petstore.swagger.io/v2",
  apiKey: "API_KEY",
});

const updateResponse = await petstore.user.update({
  username: "username_example",
});

console.log(updateResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userCreateRequest** | **UserCreateRequest**| Updated user object |
 **username** | [**string**] | name that need to be deleted | defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid user supplied |  -  |
**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


