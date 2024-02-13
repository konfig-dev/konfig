# ReferenceDataAPI

All URIs are relative to *https://api.snaptrade.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCurrencyExchangeRatePair**](ReferenceDataAPI.md#getcurrencyexchangeratepair) | **GET** /currencies/rates/{currencyPair} | Return the exchange rate of a currency pair
[**getPartnerInfo**](ReferenceDataAPI.md#getpartnerinfo) | **GET** /snapTrade/partners | Get metadata related to Snaptrade partner
[**getSecurityTypes**](ReferenceDataAPI.md#getsecuritytypes) | **GET** /securityTypes | List of all security types
[**getStockExchanges**](ReferenceDataAPI.md#getstockexchanges) | **GET** /exchanges | List exchanges
[**getSymbols**](ReferenceDataAPI.md#getsymbols) | **POST** /symbols | Search for symbols
[**getSymbolsByTicker**](ReferenceDataAPI.md#getsymbolsbyticker) | **GET** /symbols/{query} | Get details of a symbol by the ticker or the universal_symbol_id
[**listAllBrokerageAuthorizationType**](ReferenceDataAPI.md#listallbrokerageauthorizationtype) | **GET** /brokerageAuthorizationTypes | List of all brokerage authorization types
[**listAllBrokerages**](ReferenceDataAPI.md#listallbrokerages) | **GET** /brokerages | List brokerages
[**listAllCurrencies**](ReferenceDataAPI.md#listallcurrencies) | **GET** /currencies | List currencies
[**listAllCurrenciesRates**](ReferenceDataAPI.md#listallcurrenciesrates) | **GET** /currencies/rates | List currency exchange rates
[**symbolSearchUserAccount**](ReferenceDataAPI.md#symbolsearchuseraccount) | **POST** /accounts/{accountId}/symbols | Search for symbols available in an account


# **getCurrencyExchangeRatePair**
```swift
    open class func getCurrencyExchangeRatePair(currencyPair: String, completion: @escaping (_ data: ExchangeRatePairs?, _ error: Error?) -> Void)
```

Return the exchange rate of a currency pair

### Example
```swift
import SnapTrade

let currencyPair = "currencyPair_example" // String | A currency pair based on currency code for example, {CAD-USD}

// Return the exchange rate of a currency pair
ReferenceDataAPI.getCurrencyExchangeRatePair(currencyPair: currencyPair) { (response, error) in
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
 **currencyPair** | **String** | A currency pair based on currency code for example, {CAD-USD} | 

### Return type

[**ExchangeRatePairs**](ExchangeRatePairs.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **getPartnerInfo**
```swift
    open class func getPartnerInfo(completion: @escaping (_ data: PartnerData?, _ error: Error?) -> Void)
```

Get metadata related to Snaptrade partner

### Example
```swift
import SnapTrade


// Get metadata related to Snaptrade partner
ReferenceDataAPI.getPartnerInfo() { (response, error) in
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

[**PartnerData**](PartnerData.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **getSecurityTypes**
```swift
    open class func getSecurityTypes(completion: @escaping (_ data: [SecurityType]?, _ error: Error?) -> Void)
```

List of all security types

List security types available on SnapTrade.

### Example
```swift
import SnapTrade


// List of all security types
ReferenceDataAPI.getSecurityTypes() { (response, error) in
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

[**[SecurityType]**](SecurityType.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **getStockExchanges**
```swift
    open class func getStockExchanges(completion: @escaping (_ data: [Exchange]?, _ error: Error?) -> Void)
```

List exchanges

### Example
```swift
import SnapTrade


// List exchanges
ReferenceDataAPI.getStockExchanges() { (response, error) in
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

[**[Exchange]**](Exchange.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **getSymbols**
```swift
    open class func getSymbols(symbolQuery: SymbolQuery? = nil, completion: @escaping (_ data: [UniversalSymbol]?, _ error: Error?) -> Void)
```

Search for symbols

### Example
```swift
import SnapTrade

let symbolQuery = SymbolQuery(substring: "substring_example") // SymbolQuery |  (optional)

// Search for symbols
ReferenceDataAPI.getSymbols(symbolQuery: symbolQuery) { (response, error) in
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
 **symbolQuery** | [**SymbolQuery**](SymbolQuery.md) |  | [optional] 

### Return type

[**[UniversalSymbol]**](UniversalSymbol.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **getSymbolsByTicker**
```swift
    open class func getSymbolsByTicker(query: String, completion: @escaping (_ data: UniversalSymbol?, _ error: Error?) -> Void)
```

Get details of a symbol by the ticker or the universal_symbol_id

### Example
```swift
import SnapTrade

let query = "query_example" // String | The ticker or universal_symbol_id of the UniversalSymbol to get.

// Get details of a symbol by the ticker or the universal_symbol_id
ReferenceDataAPI.getSymbolsByTicker(query: query) { (response, error) in
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
 **query** | **String** | The ticker or universal_symbol_id of the UniversalSymbol to get. | 

### Return type

[**UniversalSymbol**](UniversalSymbol.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **listAllBrokerageAuthorizationType**
```swift
    open class func listAllBrokerageAuthorizationType(brokerage: String? = nil, completion: @escaping (_ data: [BrokerageAuthorizationTypeReadOnly]?, _ error: Error?) -> Void)
```

List of all brokerage authorization types

### Example
```swift
import SnapTrade

let brokerage = "brokerage_example" // String | Comma separated value of brokerage slugs (optional)

// List of all brokerage authorization types
ReferenceDataAPI.listAllBrokerageAuthorizationType(brokerage: brokerage) { (response, error) in
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
 **brokerage** | **String** | Comma separated value of brokerage slugs | [optional] 

### Return type

[**[BrokerageAuthorizationTypeReadOnly]**](BrokerageAuthorizationTypeReadOnly.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **listAllBrokerages**
```swift
    open class func listAllBrokerages(completion: @escaping (_ data: [Brokerage]?, _ error: Error?) -> Void)
```

List brokerages

### Example
```swift
import SnapTrade


// List brokerages
ReferenceDataAPI.listAllBrokerages() { (response, error) in
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

[**[Brokerage]**](Brokerage.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **listAllCurrencies**
```swift
    open class func listAllCurrencies(completion: @escaping (_ data: [Currency]?, _ error: Error?) -> Void)
```

List currencies

### Example
```swift
import SnapTrade


// List currencies
ReferenceDataAPI.listAllCurrencies() { (response, error) in
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

[**[Currency]**](Currency.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **listAllCurrenciesRates**
```swift
    open class func listAllCurrenciesRates(completion: @escaping (_ data: [ExchangeRatePairs]?, _ error: Error?) -> Void)
```

List currency exchange rates

### Example
```swift
import SnapTrade


// List currency exchange rates
ReferenceDataAPI.listAllCurrenciesRates() { (response, error) in
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

[**[ExchangeRatePairs]**](ExchangeRatePairs.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **symbolSearchUserAccount**
```swift
    open class func symbolSearchUserAccount(userId: String, userSecret: String, accountId: String, symbolQuery: SymbolQuery? = nil, completion: @escaping (_ data: [UniversalSymbol]?, _ error: Error?) -> Void)
```

Search for symbols available in an account

### Example
```swift
import SnapTrade

let userId = "userId_example" // String | 
let userSecret = "userSecret_example" // String | 
let accountId = "accountId_example" // String | The ID of the account to search for symbols within.
let symbolQuery = SymbolQuery(substring: "substring_example") // SymbolQuery |  (optional)

// Search for symbols available in an account
ReferenceDataAPI.symbolSearchUserAccount(userId: userId, userSecret: userSecret, accountId: accountId, symbolQuery: symbolQuery) { (response, error) in
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
 **accountId** | **String** | The ID of the account to search for symbols within. | 
 **symbolQuery** | [**SymbolQuery**](SymbolQuery.md) |  | [optional] 

### Return type

[**[UniversalSymbol]**](UniversalSymbol.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

