# PetApi

All URIs are relative to *https://petstore.swagger.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add**](PetApi.md#add) | **POST** /pet | Add a new pet to the store
[**delete**](PetApi.md#delete) | **DELETE** /pet/{petId} | Deletes a pet
[**findByStatus**](PetApi.md#findByStatus) | **GET** /pet/findByStatus | Finds Pets by status
[**findByTags**](PetApi.md#findByTags) | **GET** /pet/findByTags | Finds Pets by tags
[**getById**](PetApi.md#getById) | **GET** /pet/{petId} | Find pet by ID
[**update**](PetApi.md#update) | **PUT** /pet | Update an existing pet
[**updateWithForm**](PetApi.md#updateWithForm) | **POST** /pet/{petId} | Updates a pet in the store with form data
[**uploadImage**](PetApi.md#uploadImage) | **POST** /pet/{petId}/uploadImage | uploads an image


# **add**

#### **POST** /pet

### Description


### Example


```typescript
import { PetStore } from "pet-store-typescript-sdk";

const petstore = new PetStore({
  // Defining the base path is optional and defaults to https://petstore.swagger.io/v2
  // basePath: "https://petstore.swagger.io/v2",
  accessToken: "ACCESS_TOKEN",
});

const addResponse = await petstore.pet.add({
  name: "doggie",
  photo_urls: ["photo_urls_example"],
  status: "available",
});

console.log(addResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pet** | **Pet**| Pet object that needs to be added to the store |


### Return type

**Pet**

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**405** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **delete**

#### **DELETE** /pet/{petId}

### Description


### Example


```typescript
import { PetStore } from "pet-store-typescript-sdk";

const petstore = new PetStore({
  // Defining the base path is optional and defaults to https://petstore.swagger.io/v2
  // basePath: "https://petstore.swagger.io/v2",
  apiKey: "API_KEY",
  accessToken: "ACCESS_TOKEN",
});

const deleteResponse = await petstore.pet.delete({
  petId: 1,
});

console.log(deleteResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petId** | [**number**] | Pet id to delete | defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Invalid pet value |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **findByStatus**

#### **GET** /pet/findByStatus

### Description
Multiple status values can be provided with comma separated strings

### Example


```typescript
import { PetStore } from "pet-store-typescript-sdk";

const petstore = new PetStore({
  // Defining the base path is optional and defaults to https://petstore.swagger.io/v2
  // basePath: "https://petstore.swagger.io/v2",
  accessToken: "ACCESS_TOKEN",
});

const findByStatusResponse = await petstore.pet.findByStatus({
  status: ["available"],
});

console.log(findByStatusResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | 'available', 'pending', 'sold' | Status values that need to be considered for filter | defaults to undefined


### Return type

**Array<Pet>**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Invalid status value |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **findByTags**

#### **GET** /pet/findByTags

### Description
Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

### Example


```typescript
import { PetStore } from "pet-store-typescript-sdk";

const petstore = new PetStore({
  // Defining the base path is optional and defaults to https://petstore.swagger.io/v2
  // basePath: "https://petstore.swagger.io/v2",
  accessToken: "ACCESS_TOKEN",
});

const findByTagsResponse = await petstore.pet.findByTags({
  tags: ["tags_example"],
});

console.log(findByTagsResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tags** | **Array<string>** | Tags to filter by | defaults to undefined


### Return type

**Array<Pet>**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Invalid tag value |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **getById**

#### **GET** /pet/{petId}

### Description
Returns a single pet

### Example


```typescript
import { PetStore } from "pet-store-typescript-sdk";

const petstore = new PetStore({
  // Defining the base path is optional and defaults to https://petstore.swagger.io/v2
  // basePath: "https://petstore.swagger.io/v2",
  apiKey: "API_KEY",
});

const getByIdResponse = await petstore.pet.getById({
  petId: 1,
});

console.log(getByIdResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petId** | [**number**] | ID of pet to return | defaults to undefined


### Return type

**Pet**

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Invalid ID supplied |  -  |
**404** | Pet not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **update**

#### **PUT** /pet

### Description


### Example


```typescript
import { PetStore } from "pet-store-typescript-sdk";

const petstore = new PetStore({
  // Defining the base path is optional and defaults to https://petstore.swagger.io/v2
  // basePath: "https://petstore.swagger.io/v2",
  accessToken: "ACCESS_TOKEN",
});

const updateResponse = await petstore.pet.update({
  name: "doggie",
  photo_urls: ["photo_urls_example"],
  status: "available",
});

console.log(updateResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pet** | **Pet**| Pet object that needs to be added to the store |


### Return type

**Pet**

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**400** | Invalid ID supplied |  -  |
**404** | Pet not found |  -  |
**405** | Validation exception |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **updateWithForm**

#### **POST** /pet/{petId}

### Description


### Example


```typescript
import { PetStore } from "pet-store-typescript-sdk";

const petstore = new PetStore({
  // Defining the base path is optional and defaults to https://petstore.swagger.io/v2
  // basePath: "https://petstore.swagger.io/v2",
  accessToken: "ACCESS_TOKEN",
});

const updateWithFormResponse = await petstore.pet.updateWithForm({
  petId: 1,
});

console.log(updateWithFormResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petId** | [**number**] | ID of pet that needs to be updated | defaults to undefined
 **name** | [**string**] | Updated name of the pet | (optional) defaults to undefined
 **status** | [**string**] | Updated status of the pet | (optional) defaults to undefined


### Return type

void (empty response body)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**0** | Invalid input |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

# **uploadImage**

#### **POST** /pet/{petId}/uploadImage

### Description


### Example


```typescript
import { PetStore } from "pet-store-typescript-sdk";

const petstore = new PetStore({
  // Defining the base path is optional and defaults to https://petstore.swagger.io/v2
  // basePath: "https://petstore.swagger.io/v2",
  accessToken: "ACCESS_TOKEN",
});

const uploadImageResponse = await petstore.pet.uploadImage({
  petId: 1,
});

console.log(uploadImageResponse);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **petId** | [**number**] | ID of pet to update | defaults to undefined
 **additionalMetadata** | [**string**] | Additional data to pass to server | (optional) defaults to undefined
 **file** | [**Uint8Array | File**] | file to upload | (optional) defaults to undefined


### Return type

**ApiResponse**

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


