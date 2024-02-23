# SnapTrade::TransactionsAndReportingApi

All URIs are relative to *https://api.snaptrade.com/api/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_activities**](TransactionsAndReportingApi.md#get_activities) | **GET** /activities | Get transaction history for a user |
| [**get_reporting_custom_range**](TransactionsAndReportingApi.md#get_reporting_custom_range) | **GET** /performance/custom | Get performance information for a specific timeframe |

## get_activities

Get transaction history for a user

Returns activities (transactions) for a user. Specifying start and end date is highly recommended for better performance

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"

user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
start_date = "2022-01-24"
end_date = "2022-01-24"
accounts = "917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2"
brokerage_authorizations = "917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2"
type = "DIVIDEND"

begin
  # Get transaction history for a user
  result = SnapTrade::TransactionsAndReporting.get_activities(
                                                                 user_id: user_id,
                                                                 user_secret: user_secret,
                                                                 start_date: start_date,
                                                                 end_date: end_date,
                                                                 accounts: accounts,
                                                                 brokerage_authorizations: brokerage_authorizations,
                                                                 type: type,
                                                               )
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::TransactionsAndReporting.get_activities: #{e}"
end
```

#### Using the get_activities_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
start_date = "2022-01-24"
end_date = "2022-01-24"
accounts = "917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2"
brokerage_authorizations = "917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2"
type = "DIVIDEND"

begin
  # Get transaction history for a user
  data, status_code, headers, response = SnapTrade::TransactionsAndReporting.get_activities_with_http_info(
                                                                                                              user_id: user_id,
                                                                                                              user_secret: user_secret,
                                                                                                              start_date: start_date,
                                                                                                              end_date: end_date,
                                                                                                              accounts: accounts,
                                                                                                              brokerage_authorizations: brokerage_authorizations,
                                                                                                              type: type,
                                                                                                            )
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Array<UniversalActivity>
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::TransactionsAndReporting.get_activities: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **user_id** | **String** |  |  |
| **user_secret** | **String** |  |  |
| **start_date** | **Date** |  | [optional] |
| **end_date** | **Date** |  | [optional] |
| **accounts** | **String** | Optional comma seperated list of account IDs used to filter the request on specific accounts | [optional] |
| **brokerage_authorizations** | **String** | Optional comma seperated list of brokerage authorization IDs used to filter the request on only accounts that belong to those authorizations | [optional] |
| **type** | **String** | Optional comma seperated list of types to filter activities by. This is not an exhaustive list, if we fail to match to these types, we will return the raw description from the brokerage. Potential values include - DIVIDEND - BUY - SELL - CONTRIBUTION - WITHDRAWAL - EXTERNAL_ASSET_TRANSFER_IN - EXTERNAL_ASSET_TRANSFER_OUT - INTERNAL_CASH_TRANSFER_IN - INTERNAL_CASH_TRANSFER_OUT - INTERNAL_ASSET_TRANSFER_IN - INTERNAL_ASSET_TRANSFER_OUT - INTEREST - REBATE - GOV_GRANT - TAX - FEE - REI - FXT | [optional] |

### Return type

[**Array&lt;UniversalActivity&gt;**](UniversalActivity.md)

## get_reporting_custom_range

Get performance information for a specific timeframe

Returns performance information (contributions, dividends, rate of return, etc) for a specific timeframe. Please note that Total Equity Timeframe and Rate of Returns are experimental features. Please contact support@snaptrade.com if you notice any inconsistencies.

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"

start_date = "2022-01-24"
end_date = "2022-01-24"
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
accounts = "917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2"
detailed = True
frequency = "monthly"

begin
  # Get performance information for a specific timeframe
  result = SnapTrade::TransactionsAndReporting.get_reporting_custom_range(
                                                                             start_date: start_date,
                                                                             end_date: end_date,
                                                                             user_id: user_id,
                                                                             user_secret: user_secret,
                                                                             accounts: accounts,
                                                                             detailed: detailed,
                                                                             frequency: frequency,
                                                                           )
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::TransactionsAndReporting.get_reporting_custom_range: #{e}"
end
```

#### Using the get_reporting_custom_range_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby
start_date = "2022-01-24"
end_date = "2022-01-24"
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
accounts = "917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2"
detailed = True
frequency = "monthly"

begin
  # Get performance information for a specific timeframe
  data, status_code, headers, response = SnapTrade::TransactionsAndReporting.get_reporting_custom_range_with_http_info(
                                                                                                                          start_date: start_date,
                                                                                                                          end_date: end_date,
                                                                                                                          user_id: user_id,
                                                                                                                          user_secret: user_secret,
                                                                                                                          accounts: accounts,
                                                                                                                          detailed: detailed,
                                                                                                                          frequency: frequency,
                                                                                                                        )
  p status_code # => 2xx
  p headers # => { ... }
  p data # => PerformanceCustom
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::TransactionsAndReporting.get_reporting_custom_range: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **start_date** | **Date** |  |  |
| **end_date** | **Date** |  |  |
| **user_id** | **String** |  |  |
| **user_secret** | **String** |  |  |
| **accounts** | **String** | Optional comma seperated list of account IDs used to filter the request on specific accounts | [optional] |
| **detailed** | **Boolean** | Optional, increases frequency of data points for the total value and contribution charts if set to true | [optional] |
| **frequency** | **String** | Optional frequency for the rate of return chart (defaults to monthly). Possible values are daily, weekly, monthly, quarterly, yearly. | [optional] |

### Return type

[**PerformanceCustom**](PerformanceCustom.md)

