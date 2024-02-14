# OptionsAPI

All URIs are relative to *https://api.snaptrade.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOptionStrategy**](OptionsAPI.md#getoptionstrategy) | **POST** /accounts/{accountId}/optionStrategy | Creates an option strategy object that will be used to place an option strategy order
[**getOptionsChain**](OptionsAPI.md#getoptionschain) | **GET** /accounts/{accountId}/optionsChain | Get the options chain
[**getOptionsStrategyQuote**](OptionsAPI.md#getoptionsstrategyquote) | **GET** /accounts/{accountId}/optionStrategy/{optionStrategyId} | Get latest market data of option strategy
[**listOptionHoldings**](OptionsAPI.md#listoptionholdings) | **GET** /accounts/{accountId}/options | Get the options holdings in the account
[**placeOptionStrategy**](OptionsAPI.md#placeoptionstrategy) | **POST** /accounts/{accountId}/optionStrategy/{optionStrategyId}/execute | Place an option strategy order on the brokerage


# **getOptionStrategy**
```swift
    open class func getOptionStrategy(userId: String, userSecret: String, accountId: String, optionsGetOptionStrategyRequest: OptionsGetOptionStrategyRequest, completion: @escaping (_ data: StrategyQuotes?, _ error: Error?) -> Void)
```

Creates an option strategy object that will be used to place an option strategy order

### Example
```swift
import SnapTrade

let userId = "userId_example" // String | 
let userSecret = "userSecret_example" // String | 
let accountId = UUID().uuidString // String | The ID of the account to create the option strategy object in.
let optionsGetOptionStrategyRequest = OptionsGetOptionStrategyRequest(
    underlyingSymbolId: "underlyingSymbolId_example",
    legs: [
    OptionLeg(
        action: "action_example",
        optionSymbolId: "optionSymbolId_example",
        quantity: 123
    )
    ],
    strategyType: "strategyType_example"
) // OptionsGetOptionStrategyRequest | 

// Creates an option strategy object that will be used to place an option strategy order
OptionsAPI.getOptionStrategy(userId: userId, userSecret: userSecret, accountId: accountId, optionsGetOptionStrategyRequest: optionsGetOptionStrategyRequest) { (response, error) in
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
 **accountId** | **String** | The ID of the account to create the option strategy object in. | 
 **optionsGetOptionStrategyRequest** | [**OptionsGetOptionStrategyRequest**](OptionsGetOptionStrategyRequest.md) |  | 

### Return type

[**StrategyQuotes**](StrategyQuotes.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **getOptionsChain**
```swift
    open class func getOptionsChain(userId: String, userSecret: String, accountId: String, symbol: String, completion: @escaping (_ data: [OptionChainInner]?, _ error: Error?) -> Void)
```

Get the options chain

### Example
```swift
import SnapTrade

let userId = "userId_example" // String | 
let userSecret = "userSecret_example" // String | 
let accountId = UUID().uuidString // String | The ID of the account to get the options chain from.
let symbol = UUID().uuidString // String | Universal symbol ID if symbol

// Get the options chain
OptionsAPI.getOptionsChain(userId: userId, userSecret: userSecret, accountId: accountId, symbol: symbol) { (response, error) in
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
 **accountId** | **String** | The ID of the account to get the options chain from. | 
 **symbol** | **String** | Universal symbol ID if symbol | 

### Return type

[**[OptionChainInner]**](OptionChainInner.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **getOptionsStrategyQuote**
```swift
    open class func getOptionsStrategyQuote(userId: String, userSecret: String, accountId: String, optionStrategyId: String, completion: @escaping (_ data: StrategyQuotes?, _ error: Error?) -> Void)
```

Get latest market data of option strategy

### Example
```swift
import SnapTrade

let userId = "userId_example" // String | 
let userSecret = "userSecret_example" // String | 
let accountId = UUID().uuidString // String | The ID of the account the strategy will be placed in.
let optionStrategyId = UUID().uuidString // String | Option strategy id obtained from response when creating option strategy object

// Get latest market data of option strategy
OptionsAPI.getOptionsStrategyQuote(userId: userId, userSecret: userSecret, accountId: accountId, optionStrategyId: optionStrategyId) { (response, error) in
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
 **accountId** | **String** | The ID of the account the strategy will be placed in. | 
 **optionStrategyId** | **String** | Option strategy id obtained from response when creating option strategy object | 

### Return type

[**StrategyQuotes**](StrategyQuotes.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **listOptionHoldings**
```swift
    open class func listOptionHoldings(userId: String, userSecret: String, accountId: String, completion: @escaping (_ data: [OptionsPosition]?, _ error: Error?) -> Void)
```

Get the options holdings in the account

### Example
```swift
import SnapTrade

let userId = "userId_example" // String | 
let userSecret = "userSecret_example" // String | 
let accountId = UUID().uuidString // String | The ID of the account to fetch options holdings for.

// Get the options holdings in the account
OptionsAPI.listOptionHoldings(userId: userId, userSecret: userSecret, accountId: accountId) { (response, error) in
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
 **accountId** | **String** | The ID of the account to fetch options holdings for. | 

### Return type

[**[OptionsPosition]**](OptionsPosition.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **placeOptionStrategy**
```swift
    open class func placeOptionStrategy(userId: String, userSecret: String, accountId: String, optionStrategyId: String, optionsPlaceOptionStrategyRequest: OptionsPlaceOptionStrategyRequest, completion: @escaping (_ data: StrategyOrderRecord?, _ error: Error?) -> Void)
```

Place an option strategy order on the brokerage

### Example
```swift
import SnapTrade

let userId = "userId_example" // String | 
let userSecret = "userSecret_example" // String | 
let accountId = UUID().uuidString // String | The ID of the account to execute the strategy in.
let optionStrategyId = UUID().uuidString // String | Option strategy id obtained from response when creating option strategy object
let optionsPlaceOptionStrategyRequest = OptionsPlaceOptionStrategyRequest(
    orderType: OrderType.limit,
    timeInForce: TimeInForceStrict.fok,
    price: 123
) // OptionsPlaceOptionStrategyRequest | 

// Place an option strategy order on the brokerage
OptionsAPI.placeOptionStrategy(userId: userId, userSecret: userSecret, accountId: accountId, optionStrategyId: optionStrategyId, optionsPlaceOptionStrategyRequest: optionsPlaceOptionStrategyRequest) { (response, error) in
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
 **accountId** | **String** | The ID of the account to execute the strategy in. | 
 **optionStrategyId** | **String** | Option strategy id obtained from response when creating option strategy object | 
 **optionsPlaceOptionStrategyRequest** | [**OptionsPlaceOptionStrategyRequest**](OptionsPlaceOptionStrategyRequest.md) |  | 

### Return type

[**StrategyOrderRecord**](StrategyOrderRecord.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

