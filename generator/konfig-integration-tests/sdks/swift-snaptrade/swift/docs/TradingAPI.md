# TradingAPI

All URIs are relative to *https://api.snaptrade.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelUserAccountOrder**](TradingAPI.md#canceluseraccountorder) | **POST** /accounts/{accountId}/orders/cancel | Cancel open order in account
[**getOrderImpact**](TradingAPI.md#getorderimpact) | **POST** /trade/impact | Check impact of trades on account.
[**getUserAccountQuotes**](TradingAPI.md#getuseraccountquotes) | **GET** /accounts/{accountId}/quotes | Get symbol quotes
[**placeForceOrder**](TradingAPI.md#placeforceorder) | **POST** /trade/place | Place a trade with NO validation.
[**placeOCOOrder**](TradingAPI.md#placeocoorder) | **POST** /trade/oco | Place a OCO (One Cancels Other) order
[**placeOrder**](TradingAPI.md#placeorder) | **POST** /trade/{tradeId} | Place order


# **cancelUserAccountOrder**
```swift
    open class func cancelUserAccountOrder(userId: String, userSecret: String, accountId: UUID, tradingCancelUserAccountOrderRequest: TradingCancelUserAccountOrderRequest, completion: @escaping (_ data: AccountOrderRecord?, _ error: Error?) -> Void)
```

Cancel open order in account

### Example
```swift
import Snaptrade

let userId = "userId_example" // String | 
let userSecret = "userSecret_example" // String | 
let accountId = 987 // UUID | The ID of the account to cancel the order in.
let tradingCancelUserAccountOrderRequest = TradingCancelUserAccountOrderRequest(brokerageOrderId: 123) // TradingCancelUserAccountOrderRequest | The Order ID to be canceled

// Cancel open order in account
TradingAPI.cancelUserAccountOrder(userId: userId, userSecret: userSecret, accountId: accountId, tradingCancelUserAccountOrderRequest: tradingCancelUserAccountOrderRequest) { (response, error) in
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
 **accountId** | **UUID** | The ID of the account to cancel the order in. | 
 **tradingCancelUserAccountOrderRequest** | [**TradingCancelUserAccountOrderRequest**](TradingCancelUserAccountOrderRequest.md) | The Order ID to be canceled | 

### Return type

[**AccountOrderRecord**](AccountOrderRecord.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **getOrderImpact**
```swift
    open class func getOrderImpact(userId: String, userSecret: String, manualTradeForm: ManualTradeForm, completion: @escaping (_ data: ManualTradeAndImpact?, _ error: Error?) -> Void)
```

Check impact of trades on account.

### Example
```swift
import Snaptrade

let userId = "userId_example" // String | 
let userSecret = "userSecret_example" // String | 
let manualTradeForm = ManualTradeForm(accountId: 123, action: Action(), orderType: OrderType(), price: 123, stop: 123, timeInForce: TimeInForceStrict(), units: 123, universalSymbolId: 123, notionalValue: 123) // ManualTradeForm | 

// Check impact of trades on account.
TradingAPI.getOrderImpact(userId: userId, userSecret: userSecret, manualTradeForm: manualTradeForm) { (response, error) in
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
 **manualTradeForm** | [**ManualTradeForm**](ManualTradeForm.md) |  | 

### Return type

[**ManualTradeAndImpact**](ManualTradeAndImpact.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **getUserAccountQuotes**
```swift
    open class func getUserAccountQuotes(userId: String, userSecret: String, symbols: String, accountId: String, useTicker: Bool? = nil, completion: @escaping (_ data: [SymbolsQuotesInner]?, _ error: Error?) -> Void)
```

Get symbol quotes

### Example
```swift
import Snaptrade

let userId = "userId_example" // String | 
let userSecret = "userSecret_example" // String | 
let symbols = "symbols_example" // String | List of universal_symbol_id or tickers to get quotes for.
let accountId = "accountId_example" // String | The ID of the account to get quotes.
let useTicker = true // Bool | Should be set to True if providing tickers. (optional)

// Get symbol quotes
TradingAPI.getUserAccountQuotes(userId: userId, userSecret: userSecret, symbols: symbols, accountId: accountId, useTicker: useTicker) { (response, error) in
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
 **symbols** | **String** | List of universal_symbol_id or tickers to get quotes for. | 
 **accountId** | **String** | The ID of the account to get quotes. | 
 **useTicker** | **Bool** | Should be set to True if providing tickers. | [optional] 

### Return type

[**[SymbolsQuotesInner]**](SymbolsQuotesInner.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **placeForceOrder**
```swift
    open class func placeForceOrder(userId: String, userSecret: String, manualTradeForm: ManualTradeForm, completion: @escaping (_ data: AccountOrderRecord?, _ error: Error?) -> Void)
```

Place a trade with NO validation.

### Example
```swift
import Snaptrade

let userId = "userId_example" // String | 
let userSecret = "userSecret_example" // String | 
let manualTradeForm = ManualTradeForm(accountId: 123, action: Action(), orderType: OrderType(), price: 123, stop: 123, timeInForce: TimeInForceStrict(), units: 123, universalSymbolId: 123, notionalValue: 123) // ManualTradeForm | 

// Place a trade with NO validation.
TradingAPI.placeForceOrder(userId: userId, userSecret: userSecret, manualTradeForm: manualTradeForm) { (response, error) in
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
 **manualTradeForm** | [**ManualTradeForm**](ManualTradeForm.md) |  | 

### Return type

[**AccountOrderRecord**](AccountOrderRecord.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **placeOCOOrder**
```swift
    open class func placeOCOOrder(userId: String, userSecret: String, tradingPlaceOCOOrderRequest: TradingPlaceOCOOrderRequest, completion: @escaping (_ data: AccountOrderRecord?, _ error: Error?) -> Void)
```

Place a OCO (One Cancels Other) order

### Example
```swift
import Snaptrade

let userId = "userId_example" // String | 
let userSecret = "userSecret_example" // String | 
let tradingPlaceOCOOrderRequest = TradingPlaceOCOOrderRequest(firstTradeId: "TODO", secondTradeId: "TODO") // TradingPlaceOCOOrderRequest | 

// Place a OCO (One Cancels Other) order
TradingAPI.placeOCOOrder(userId: userId, userSecret: userSecret, tradingPlaceOCOOrderRequest: tradingPlaceOCOOrderRequest) { (response, error) in
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
 **tradingPlaceOCOOrderRequest** | [**TradingPlaceOCOOrderRequest**](TradingPlaceOCOOrderRequest.md) |  | 

### Return type

[**AccountOrderRecord**](AccountOrderRecord.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **placeOrder**
```swift
    open class func placeOrder(tradeId: UUID, userId: String, userSecret: String, completion: @escaping (_ data: AccountOrderRecord?, _ error: Error?) -> Void)
```

Place order

### Example
```swift
import Snaptrade

let tradeId = 987 // UUID | The ID of trade object obtained from trade/impact endpoint
let userId = "userId_example" // String | 
let userSecret = "userSecret_example" // String | 

// Place order
TradingAPI.placeOrder(tradeId: tradeId, userId: userId, userSecret: userSecret) { (response, error) in
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
 **tradeId** | **UUID** | The ID of trade object obtained from trade/impact endpoint | 
 **userId** | **String** |  | 
 **userSecret** | **String** |  | 

### Return type

[**AccountOrderRecord**](AccountOrderRecord.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

