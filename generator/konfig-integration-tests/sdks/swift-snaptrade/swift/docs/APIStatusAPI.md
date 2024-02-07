# APIStatusAPI

All URIs are relative to *https://api.snaptrade.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**check**](APIStatusAPI.md#check) | **GET** / | Get API Status


# **check**
```swift
    open class func check(completion: @escaping (_ data: Status?, _ error: Error?) -> Void)
```

Get API Status

Check whether the API is operational and verify timestamps.

### Example
```swift
import SnapTrade


// Get API Status
APIStatusAPI.check() { (response, error) in
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

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

