# TransactionsAndReportingAPI

All URIs are relative to *https://api.snaptrade.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getActivities**](TransactionsAndReportingAPI.md#getactivities) | **GET** /activities | Get transaction history for a user
[**getReportingCustomRange**](TransactionsAndReportingAPI.md#getreportingcustomrange) | **GET** /performance/custom | Get performance information for a specific timeframe


# **getActivities**
```swift
    open class func getActivities(userId: String, userSecret: String, startDate: String? = nil, endDate: String? = nil, accounts: String? = nil, brokerageAuthorizations: String? = nil, type: String? = nil, completion: @escaping (_ data: [UniversalActivity]?, _ error: Error?) -> Void)
```

Get transaction history for a user

Returns activities (transactions) for a user. Specifying start and end date is highly recommended for better performance

### Example
```swift
import Snaptrade

let userId = "userId_example" // String | 
let userSecret = "userSecret_example" // String | 
let startDate = "startDate_example" // String |  (optional)
let endDate = "endDate_example" // String |  (optional)
let accounts = "accounts_example" // String | Optional comma seperated list of account IDs used to filter the request on specific accounts (optional)
let brokerageAuthorizations = "brokerageAuthorizations_example" // String | Optional comma seperated list of brokerage authorization IDs used to filter the request on only accounts that belong to those authorizations (optional)
let type = "type_example" // String | Optional comma seperated list of types to filter activities by. This is not an exhaustive list, if we fail to match to these types, we will return the raw description from the brokerage. Potential values include - DIVIDEND - BUY - SELL - CONTRIBUTION - WITHDRAWAL - EXTERNAL_ASSET_TRANSFER_IN - EXTERNAL_ASSET_TRANSFER_OUT - INTERNAL_CASH_TRANSFER_IN - INTERNAL_CASH_TRANSFER_OUT - INTERNAL_ASSET_TRANSFER_IN - INTERNAL_ASSET_TRANSFER_OUT - INTEREST - REBATE - GOV_GRANT - TAX - FEE - REI - FXT (optional)

// Get transaction history for a user
TransactionsAndReportingAPI.getActivities(userId: userId, userSecret: userSecret, startDate: startDate, endDate: endDate, accounts: accounts, brokerageAuthorizations: brokerageAuthorizations, type: type) { (response, error) in
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
 **startDate** | **String** |  | [optional] 
 **endDate** | **String** |  | [optional] 
 **accounts** | **String** | Optional comma seperated list of account IDs used to filter the request on specific accounts | [optional] 
 **brokerageAuthorizations** | **String** | Optional comma seperated list of brokerage authorization IDs used to filter the request on only accounts that belong to those authorizations | [optional] 
 **type** | **String** | Optional comma seperated list of types to filter activities by. This is not an exhaustive list, if we fail to match to these types, we will return the raw description from the brokerage. Potential values include - DIVIDEND - BUY - SELL - CONTRIBUTION - WITHDRAWAL - EXTERNAL_ASSET_TRANSFER_IN - EXTERNAL_ASSET_TRANSFER_OUT - INTERNAL_CASH_TRANSFER_IN - INTERNAL_CASH_TRANSFER_OUT - INTERNAL_ASSET_TRANSFER_IN - INTERNAL_ASSET_TRANSFER_OUT - INTEREST - REBATE - GOV_GRANT - TAX - FEE - REI - FXT | [optional] 

### Return type

[**[UniversalActivity]**](UniversalActivity.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

# **getReportingCustomRange**
```swift
    open class func getReportingCustomRange(startDate: String, endDate: String, userId: String, userSecret: String, accounts: String? = nil, detailed: Bool? = nil, frequency: String? = nil, completion: @escaping (_ data: PerformanceCustom?, _ error: Error?) -> Void)
```

Get performance information for a specific timeframe

Returns performance information (contributions, dividends, rate of return, etc) for a specific timeframe. Please note that Total Equity Timeframe and Rate of Returns are experimental features. Please contact support@snaptrade.com if you notice any inconsistencies.

### Example
```swift
import Snaptrade

let startDate = "startDate_example" // String | 
let endDate = "endDate_example" // String | 
let userId = "userId_example" // String | 
let userSecret = "userSecret_example" // String | 
let accounts = "accounts_example" // String | Optional comma seperated list of account IDs used to filter the request on specific accounts (optional)
let detailed = true // Bool | Optional, increases frequency of data points for the total value and contribution charts if set to true (optional)
let frequency = "frequency_example" // String | Optional frequency for the rate of return chart (defaults to monthly). Possible values are daily, weekly, monthly, quarterly, yearly. (optional)

// Get performance information for a specific timeframe
TransactionsAndReportingAPI.getReportingCustomRange(startDate: startDate, endDate: endDate, userId: userId, userSecret: userSecret, accounts: accounts, detailed: detailed, frequency: frequency) { (response, error) in
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
 **startDate** | **String** |  | 
 **endDate** | **String** |  | 
 **userId** | **String** |  | 
 **userSecret** | **String** |  | 
 **accounts** | **String** | Optional comma seperated list of account IDs used to filter the request on specific accounts | [optional] 
 **detailed** | **Bool** | Optional, increases frequency of data points for the total value and contribution charts if set to true | [optional] 
 **frequency** | **String** | Optional frequency for the rate of return chart (defaults to monthly). Possible values are daily, weekly, monthly, quarterly, yearly. | [optional] 

### Return type

[**PerformanceCustom**](PerformanceCustom.md)

### Authorization

[PartnerClientId](../README.md#PartnerClientId), [PartnerSignature](../README.md#PartnerSignature), [PartnerTimestamp](../README.md#PartnerTimestamp)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

