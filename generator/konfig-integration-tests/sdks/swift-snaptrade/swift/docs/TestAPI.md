# TestAPI

All URIs are relative to *https://swift-snaptrade.konfigthis.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetch**](TestAPI.md#fetch) | **GET** /simple-endpoint | Fetches a JSON value based on input parameter


# **fetch**
```swift
    open class func fetch(completion: @escaping (_ data: AnyCodable?, _ error: Error?) -> Void)
```

Fetches a JSON value based on input parameter

Provide an input parameter to receive a JSON value with properties.

### Example
```swift
import Snaptrade


// Fetches a JSON value based on input parameter
TestAPI.fetch() { (response, error) in
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

[**AnyCodable**](AnyCodable.md)

### Authorization

[ApiKey](../README.md#ApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

