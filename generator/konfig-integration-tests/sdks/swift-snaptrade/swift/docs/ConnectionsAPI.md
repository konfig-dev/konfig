# ConnectionsAPI

All URIs are relative to *https://api.snaptrade.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**detailBrokerageAuthorization**](ConnectionsAPI.md#detailbrokerageauthorization) | **GET** /authorizations/{authorizationId} | Get brokerage authorization details
[**listBrokerageAuthorizations**](ConnectionsAPI.md#listbrokerageauthorizations) | **GET** /authorizations | List all brokerage authorizations for the user
[**removeBrokerageAuthorization**](ConnectionsAPI.md#removebrokerageauthorization) | **DELETE** /authorizations/{authorizationId} | Delete brokerage authorization
[**sessionEvents**](ConnectionsAPI.md#sessionevents) | **GET** /sessionEvents | List all session events for the partner


# **detailBrokerageAuthorization**
```swift
    open class func detailBrokerageAuthorization(authorizationId: UUID, userId: String, userSecret: String, completion: @escaping (_ data: BrokerageAuthorization?, _ error: Error?) -> Void)
```

Get brokerage authorization details

### Example
```swift
import SnapTrade

let authorizationId = 987 // UUID | The ID of a brokerage authorization object.
let userId = "userId_example" // String | 
let userSecret = "userSecret_example" // String | 

// Get brokerage authorization details
ConnectionsAPI.detailBrokerageAuthorization(authorizationId: authorizationId, userId: userId, userSecret: userSecret) { (response, error) in
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
 **authorizationId** | **UUID** | The ID of a brokerage authorization object. | 
 **userId** | **String** |  | 
 **userSecret** | **String** |  | 

### Return type

[**BrokerageAuthorization**](BrokerageAuthorization.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **listBrokerageAuthorizations**
```swift
    open class func listBrokerageAuthorizations(userId: String, userSecret: String, completion: @escaping (_ data: [BrokerageAuthorization]?, _ error: Error?) -> Void)
```

List all brokerage authorizations for the user

### Example
```swift
import SnapTrade

let userId = "userId_example" // String | 
let userSecret = "userSecret_example" // String | 

// List all brokerage authorizations for the user
ConnectionsAPI.listBrokerageAuthorizations(userId: userId, userSecret: userSecret) { (response, error) in
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

[**[BrokerageAuthorization]**](BrokerageAuthorization.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **removeBrokerageAuthorization**
```swift
    open class func removeBrokerageAuthorization(authorizationId: UUID, userId: String, userSecret: String, completion: @escaping (_ data: Void?, _ error: Error?) -> Void)
```

Delete brokerage authorization

### Example
```swift
import SnapTrade

let authorizationId = 987 // UUID | The ID of the Authorization to delete.
let userId = "userId_example" // String | 
let userSecret = "userSecret_example" // String | 

// Delete brokerage authorization
ConnectionsAPI.removeBrokerageAuthorization(authorizationId: authorizationId, userId: userId, userSecret: userSecret) { (response, error) in
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
 **authorizationId** | **UUID** | The ID of the Authorization to delete. | 
 **userId** | **String** |  | 
 **userSecret** | **String** |  | 

### Return type

Void (empty response body)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **sessionEvents**
```swift
    open class func sessionEvents(partnerClientId: String, userId: String? = nil, sessionId: String? = nil, completion: @escaping (_ data: [ConnectionsSessionEvents200ResponseInner]?, _ error: Error?) -> Void)
```

List all session events for the partner

### Example
```swift
import SnapTrade

let partnerClientId = "partnerClientId_example" // String | 
let userId = "userId_example" // String | Optional comma seperated list of user IDs used to filter the request on specific users (optional)
let sessionId = "sessionId_example" // String | Optional comma seperated list of session IDs used to filter the request on specific users (optional)

// List all session events for the partner
ConnectionsAPI.sessionEvents(partnerClientId: partnerClientId, userId: userId, sessionId: sessionId) { (response, error) in
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
 **partnerClientId** | **String** |  | 
 **userId** | **String** | Optional comma seperated list of user IDs used to filter the request on specific users | [optional] 
 **sessionId** | **String** | Optional comma seperated list of session IDs used to filter the request on specific users | [optional] 

### Return type

[**[ConnectionsSessionEvents200ResponseInner]**](ConnectionsSessionEvents200ResponseInner.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

