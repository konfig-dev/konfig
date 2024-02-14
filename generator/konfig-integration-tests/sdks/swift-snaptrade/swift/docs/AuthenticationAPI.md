# AuthenticationAPI

All URIs are relative to *https://api.snaptrade.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSnapTradeUser**](AuthenticationAPI.md#deletesnaptradeuser) | **DELETE** /snapTrade/deleteUser | Delete SnapTrade user
[**getUserJWT**](AuthenticationAPI.md#getuserjwt) | **GET** /snapTrade/encryptedJWT | Generate encrypted JWT token
[**listSnapTradeUsers**](AuthenticationAPI.md#listsnaptradeusers) | **GET** /snapTrade/listUsers | List SnapTrade users
[**loginSnapTradeUser**](AuthenticationAPI.md#loginsnaptradeuser) | **POST** /snapTrade/login | Login user &amp; generate connection link
[**registerSnapTradeUser**](AuthenticationAPI.md#registersnaptradeuser) | **POST** /snapTrade/registerUser | Create SnapTrade user
[**resetSnapTradeUserSecret**](AuthenticationAPI.md#resetsnaptradeusersecret) | **POST** /snapTrade/resetUserSecret | Obtain a new user secret for a user


# **deleteSnapTradeUser**
```swift
    open class func deleteSnapTradeUser(userId: String, completion: @escaping (_ data: DeleteUserResponse?, _ error: Error?) -> Void)
```

Delete SnapTrade user

Deletes a user you've registered over the SnapTrade API, and any data associated with them or their investment accounts.

### Example
```swift
import SnapTrade

let userId = "userId_example" // String | 

// Delete SnapTrade user
AuthenticationAPI.deleteSnapTradeUser(userId: userId) { (response, error) in
    guard error == nil else {
        print(error!)
        return
    }

    if response != nil {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String** |  | 

### Return type

[**DeleteUserResponse**](DeleteUserResponse.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **getUserJWT**
```swift
    open class func getUserJWT(userId: String, userSecret: String, completion: @escaping (_ data: EncryptedResponse?, _ error: Error?) -> Void)
```

Generate encrypted JWT token

### Example
```swift
import SnapTrade

let userId = "userId_example" // String | 
let userSecret = "userSecret_example" // String | 

// Generate encrypted JWT token
AuthenticationAPI.getUserJWT(userId: userId, userSecret: userSecret) { (response, error) in
    guard error == nil else {
        print(error!)
        return
    }

    if response != nil {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String** |  | 
 **userSecret** | **String** |  | 

### Return type

[**EncryptedResponse**](EncryptedResponse.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **listSnapTradeUsers**
```swift
    open class func listSnapTradeUsers(completion: @escaping (_ data: [String]?, _ error: Error?) -> Void)
```

List SnapTrade users

Returns a list of users you've registered over the SnapTrade API.

### Example
```swift
import SnapTrade


// List SnapTrade users
AuthenticationAPI.listSnapTradeUsers() { (response, error) in
    guard error == nil else {
        print(error!)
        return
    }

    if response != nil {
        dump(response)
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[String]**

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **loginSnapTradeUser**
```swift
    open class func loginSnapTradeUser(userId: String, userSecret: String, snapTradeLoginUserRequestBody: SnapTradeLoginUserRequestBody? = nil, completion: @escaping (_ data: AuthenticationLoginSnapTradeUser200Response?, _ error: Error?) -> Void)
```

Login user & generate connection link

Logs in a SnapTrade user and returns an authenticated connection portal URL for them to use to connect a brokerage account.

### Example
```swift
import SnapTrade

let userId = "userId_example" // String | 
let userSecret = "userSecret_example" // String | 
let snapTradeLoginUserRequestBody = SnapTradeLoginUserRequestBody(
    broker: "broker_example",
    immediateRedirect: true,
    customRedirect: "customRedirect_example",
    reconnect: "reconnect_example",
    connectionType: "connectionType_example",
    connectionPortalVersion: "connectionPortalVersion_example"
) // SnapTradeLoginUserRequestBody |  (optional)

// Login user & generate connection link
AuthenticationAPI.loginSnapTradeUser(userId: userId, userSecret: userSecret, snapTradeLoginUserRequestBody: snapTradeLoginUserRequestBody) { (response, error) in
    guard error == nil else {
        print(error!)
        return
    }

    if response != nil {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String** |  | 
 **userSecret** | **String** |  | 
 **snapTradeLoginUserRequestBody** | [**SnapTradeLoginUserRequestBody**](SnapTradeLoginUserRequestBody.md) |  | [optional] 

### Return type

[**AuthenticationLoginSnapTradeUser200Response**](AuthenticationLoginSnapTradeUser200Response.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **registerSnapTradeUser**
```swift
    open class func registerSnapTradeUser(snapTradeRegisterUserRequestBody: SnapTradeRegisterUserRequestBody, completion: @escaping (_ data: UserIDandSecret?, _ error: Error?) -> Void)
```

Create SnapTrade user

### Example
```swift
import SnapTrade

let snapTradeRegisterUserRequestBody = SnapTradeRegisterUserRequestBody(
    userId: "userId_example"
) // SnapTradeRegisterUserRequestBody | 

// Create SnapTrade user
AuthenticationAPI.registerSnapTradeUser(snapTradeRegisterUserRequestBody: snapTradeRegisterUserRequestBody) { (response, error) in
    guard error == nil else {
        print(error!)
        return
    }

    if response != nil {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **snapTradeRegisterUserRequestBody** | [**SnapTradeRegisterUserRequestBody**](SnapTradeRegisterUserRequestBody.md) |  | 

### Return type

[**UserIDandSecret**](UserIDandSecret.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **resetSnapTradeUserSecret**
```swift
    open class func resetSnapTradeUserSecret(userIDandSecret: UserIDandSecret, completion: @escaping (_ data: UserIDandSecret?, _ error: Error?) -> Void)
```

Obtain a new user secret for a user

### Example
```swift
import SnapTrade

let userIDandSecret = UserIDandSecret(
    userId: "userId_example",
    userSecret: "userSecret_example"
) // UserIDandSecret | 

// Obtain a new user secret for a user
AuthenticationAPI.resetSnapTradeUserSecret(userIDandSecret: userIDandSecret) { (response, error) in
    guard error == nil else {
        print(error!)
        return
    }

    if response != nil {
        dump(response)
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userIDandSecret** | [**UserIDandSecret**](UserIDandSecret.md) |  | 

### Return type

[**UserIDandSecret**](UserIDandSecret.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

