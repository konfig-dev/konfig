# ErrorLogsAPI

All URIs are relative to *https://api.snaptrade.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listUserErrors**](ErrorLogsAPI.md#listusererrors) | **GET** /snapTrade/listUserErrors | Retrieve error logs on behalf of your SnapTrade users


# **listUserErrors**
```swift
    open class func listUserErrors(userId: String, userSecret: String, completion: @escaping (_ data: [UserErrorLog]?, _ error: Error?) -> Void)
```

Retrieve error logs on behalf of your SnapTrade users

### Example
```swift
import SnapTrade

let userId = "userId_example" // String | 
let userSecret = "userSecret_example" // String | 

// Retrieve error logs on behalf of your SnapTrade users
ErrorLogsAPI.listUserErrors(userId: userId, userSecret: userSecret) { (response, error) in
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

[**[UserErrorLog]**](UserErrorLog.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

