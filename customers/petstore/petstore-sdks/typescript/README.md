# pet-store-typescript-sdk@1.0.1

This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
## Installing

### npm
```
npm install pet-store-typescript-sdk --save
```

### yarn
```
yarn add pet-store-typescript-sdk
```

**Important note: this library is can be used in both the client-side or server-side, but using it
in client-side browser code is not recommended as you would expose security credentials.**



## Getting Started

```typescript
import { PetStore } from "pet-store-typescript-sdk";

const petstore = new PetStore({
  // Defining the base path is optional and defaults to https://petstore.swagger.io/v2
  // basePath: "https://petstore.swagger.io/v2",
  apiKey: "API_KEY",
  accessToken: "ACCESS_TOKEN",
});

const paginateResponse = await petstore.miscellaneous.paginate({});

console.log(paginateResponse);
```

## Documentation for API Endpoints

All URIs are relative to *https://petstore.swagger.io/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*MiscellaneousApi* | [**paginate**](docs/MiscellaneousApi.md#paginate) | **GET** /pagination | Pagination sandbox
*PetApi* | [**add**](docs/PetApi.md#add) | **POST** /pet | Add a new pet to the store
*PetApi* | [**delete**](docs/PetApi.md#delete) | **DELETE** /pet/{petId} | Deletes a pet
*PetApi* | [**findByStatus**](docs/PetApi.md#findByStatus) | **GET** /pet/findByStatus | Finds Pets by status
*PetApi* | [**findByTags**](docs/PetApi.md#findByTags) | **GET** /pet/findByTags | Finds Pets by tags
*PetApi* | [**getById**](docs/PetApi.md#getById) | **GET** /pet/{petId} | Find pet by ID
*PetApi* | [**update**](docs/PetApi.md#update) | **PUT** /pet | Update an existing pet
*PetApi* | [**updateWithForm**](docs/PetApi.md#updateWithForm) | **POST** /pet/{petId} | Updates a pet in the store with form data
*PetApi* | [**uploadImage**](docs/PetApi.md#uploadImage) | **POST** /pet/{petId}/uploadImage | uploads an image
*StoreApi* | [**deleteOrder**](docs/StoreApi.md#deleteOrder) | **DELETE** /store/order/{orderId} | Delete purchase order by ID
*StoreApi* | [**getInventory**](docs/StoreApi.md#getInventory) | **GET** /store/inventory | Returns pet inventories by status
*StoreApi* | [**getOrderById**](docs/StoreApi.md#getOrderById) | **GET** /store/order/{orderId} | Find purchase order by ID
*StoreApi* | [**placeOrder**](docs/StoreApi.md#placeOrder) | **POST** /store/order | Place an order for a pet
*UserApi* | [**create**](docs/UserApi.md#create) | **POST** /user | Create user
*UserApi* | [**createWithArray**](docs/UserApi.md#createWithArray) | **POST** /user/createWithArray | Creates list of users with given input array
*UserApi* | [**createWithList**](docs/UserApi.md#createWithList) | **POST** /user/createWithList | Creates list of users with given input array
*UserApi* | [**delete**](docs/UserApi.md#delete) | **DELETE** /user/{username} | Delete user
*UserApi* | [**getByName**](docs/UserApi.md#getByName) | **GET** /user/{username} | Get user by user name
*UserApi* | [**login**](docs/UserApi.md#login) | **GET** /user/login | Logs user into the system
*UserApi* | [**logout**](docs/UserApi.md#logout) | **GET** /user/logout | Logs out current logged in user session
*UserApi* | [**update**](docs/UserApi.md#update) | **PUT** /user/{username} | Updated user

