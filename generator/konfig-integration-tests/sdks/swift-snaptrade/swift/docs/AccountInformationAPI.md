# AccountInformationAPI

All URIs are relative to *https://api.snaptrade.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllUserHoldings**](AccountInformationAPI.md#getalluserholdings) | **GET** /holdings | List all accounts for the user, plus balances, positions, and orders for each account.
[**getUserAccountBalance**](AccountInformationAPI.md#getuseraccountbalance) | **GET** /accounts/{accountId}/balances | List account balances
[**getUserAccountDetails**](AccountInformationAPI.md#getuseraccountdetails) | **GET** /accounts/{accountId} | Return details of a specific investment account
[**getUserAccountOrders**](AccountInformationAPI.md#getuseraccountorders) | **GET** /accounts/{accountId}/orders | List account orders
[**getUserAccountPositions**](AccountInformationAPI.md#getuseraccountpositions) | **GET** /accounts/{accountId}/positions | List account positions
[**getUserHoldings**](AccountInformationAPI.md#getuserholdings) | **GET** /accounts/{accountId}/holdings | List balances, positions and orders for the specified account
[**listUserAccounts**](AccountInformationAPI.md#listuseraccounts) | **GET** /accounts | List accounts
[**updateUserAccount**](AccountInformationAPI.md#updateuseraccount) | **PUT** /accounts/{accountId} | Update details of an investment account


# **getAllUserHoldings**
```swift
    open class func getAllUserHoldings(userId: String, userSecret: String, brokerageAuthorizations: String? = nil, completion: @escaping (_ data: [AccountHoldings]?, _ error: Error?) -> Void)
```

List all accounts for the user, plus balances, positions, and orders for each account.

### Example
```swift
import SnapTrade

let userId = "userId_example" // String | 
let userSecret = "userSecret_example" // String | 
let brokerageAuthorizations = "brokerageAuthorizations_example" // String | Optional. Comma seperated list of authorization IDs (only use if filtering is needed on one or more authorizations). (optional)

// List all accounts for the user, plus balances, positions, and orders for each account.
AccountInformationAPI.getAllUserHoldings(userId: userId, userSecret: userSecret, brokerageAuthorizations: brokerageAuthorizations) { (response, error) in
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
 **brokerageAuthorizations** | **String** | Optional. Comma seperated list of authorization IDs (only use if filtering is needed on one or more authorizations). | [optional] 

### Return type

[**[AccountHoldings]**](AccountHoldings.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **getUserAccountBalance**
```swift
    open class func getUserAccountBalance(userId: String, userSecret: String, accountId: String, completion: @escaping (_ data: [Balance]?, _ error: Error?) -> Void)
```

List account balances

A list of account balances for the specified account (one per currency that the account holds).

### Example
```swift
import SnapTrade

let userId = "userId_example" // String | 
let userSecret = "userSecret_example" // String | 
let accountId = "accountId_example" // String | The ID of the account to get balances.

// List account balances
AccountInformationAPI.getUserAccountBalance(userId: userId, userSecret: userSecret, accountId: accountId) { (response, error) in
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
 **accountId** | **String** | The ID of the account to get balances. | 

### Return type

[**[Balance]**](Balance.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **getUserAccountDetails**
```swift
    open class func getUserAccountDetails(userId: String, userSecret: String, accountId: String, completion: @escaping (_ data: Account?, _ error: Error?) -> Void)
```

Return details of a specific investment account

### Example
```swift
import SnapTrade

let userId = "userId_example" // String | 
let userSecret = "userSecret_example" // String | 
let accountId = "accountId_example" // String | The ID of the account to get detail of.

// Return details of a specific investment account
AccountInformationAPI.getUserAccountDetails(userId: userId, userSecret: userSecret, accountId: accountId) { (response, error) in
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
 **accountId** | **String** | The ID of the account to get detail of. | 

### Return type

[**Account**](Account.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **getUserAccountOrders**
```swift
    open class func getUserAccountOrders(userId: String, userSecret: String, accountId: String, state: State_getUserAccountOrders? = nil, days: Int? = nil, completion: @escaping (_ data: [AccountOrderRecord]?, _ error: Error?) -> Void)
```

List account orders

Fetch all recent orders from a user's account.

### Example
```swift
import SnapTrade

let userId = "userId_example" // String | 
let userSecret = "userSecret_example" // String | 
let accountId = "accountId_example" // String | The ID of the account to get orders.
let state = "state_example" // String | defaults value is set to \"all\" (optional)
let days = 987 // Int | Number of days in the past to fetch the most recent orders. Defaults to the last 90 days if no value is passed in. (optional)

// List account orders
AccountInformationAPI.getUserAccountOrders(userId: userId, userSecret: userSecret, accountId: accountId, state: state, days: days) { (response, error) in
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
 **accountId** | **String** | The ID of the account to get orders. | 
 **state** | **String** | defaults value is set to \&quot;all\&quot; | [optional] 
 **days** | **Int** | Number of days in the past to fetch the most recent orders. Defaults to the last 90 days if no value is passed in. | [optional] 

### Return type

[**[AccountOrderRecord]**](AccountOrderRecord.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **getUserAccountPositions**
```swift
    open class func getUserAccountPositions(userId: String, userSecret: String, accountId: String, completion: @escaping (_ data: [Position]?, _ error: Error?) -> Void)
```

List account positions

### Example
```swift
import SnapTrade

let userId = "userId_example" // String | 
let userSecret = "userSecret_example" // String | 
let accountId = "accountId_example" // String | The ID of the account to get positions.

// List account positions
AccountInformationAPI.getUserAccountPositions(userId: userId, userSecret: userSecret, accountId: accountId) { (response, error) in
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
 **accountId** | **String** | The ID of the account to get positions. | 

### Return type

[**[Position]**](Position.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **getUserHoldings**
```swift
    open class func getUserHoldings(accountId: String, userId: String, userSecret: String, completion: @escaping (_ data: AccountHoldingsAccount?, _ error: Error?) -> Void)
```

List balances, positions and orders for the specified account

### Example
```swift
import SnapTrade

let accountId = "accountId_example" // String | The ID of the account to fetch holdings for.
let userId = "userId_example" // String | 
let userSecret = "userSecret_example" // String | 

// List balances, positions and orders for the specified account
AccountInformationAPI.getUserHoldings(accountId: accountId, userId: userId, userSecret: userSecret) { (response, error) in
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
 **accountId** | **String** | The ID of the account to fetch holdings for. | 
 **userId** | **String** |  | 
 **userSecret** | **String** |  | 

### Return type

[**AccountHoldingsAccount**](AccountHoldingsAccount.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **listUserAccounts**
```swift
    open class func listUserAccounts(userId: String, userSecret: String, completion: @escaping (_ data: [Account]?, _ error: Error?) -> Void)
```

List accounts

### Example
```swift
import SnapTrade

let userId = "userId_example" // String | 
let userSecret = "userSecret_example" // String | 

// List accounts
AccountInformationAPI.listUserAccounts(userId: userId, userSecret: userSecret) { (response, error) in
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

[**[Account]**](Account.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **updateUserAccount**
```swift
    open class func updateUserAccount(userId: String, userSecret: String, accountId: String, completion: @escaping (_ data: [Account]?, _ error: Error?) -> Void)
```

Update details of an investment account

### Example
```swift
import SnapTrade

let userId = "userId_example" // String | 
let userSecret = "userSecret_example" // String | 
let accountId = "accountId_example" // String | The ID of the account to update.

// Update details of an investment account
AccountInformationAPI.updateUserAccount(userId: userId, userSecret: userSecret, accountId: accountId) { (response, error) in
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
 **accountId** | **String** | The ID of the account to update. | 

### Return type

[**[Account]**](Account.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

