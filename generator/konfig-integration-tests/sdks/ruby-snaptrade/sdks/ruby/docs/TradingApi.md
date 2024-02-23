# SnapTrade::TradingApi

All URIs are relative to *https://api.snaptrade.com/api/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**cancel_user_account_order**](TradingApi.md#cancel_user_account_order) | **POST** /accounts/{accountId}/orders/cancel | Cancel open order in account |
| [**get_order_impact**](TradingApi.md#get_order_impact) | **POST** /trade/impact | Check impact of trades on account. |
| [**get_user_account_quotes**](TradingApi.md#get_user_account_quotes) | **GET** /accounts/{accountId}/quotes | Get symbol quotes |
| [**place_force_order**](TradingApi.md#place_force_order) | **POST** /trade/place | Place a trade with NO validation. |
| [**place_oco_order**](TradingApi.md#place_oco_order) | **POST** /trade/oco | Place a OCO (One Cancels Other) order |
| [**place_order**](TradingApi.md#place_order) | **POST** /trade/{tradeId} | Place order |

## cancel_user_account_order

Cancel open order in account

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"

user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
account_id = "accountId_example"
brokerage_order_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"

begin
  # Cancel open order in account
  result = SnapTrade::Trading.cancel_user_account_order(
                                                           user_id: user_id,
                                                           user_secret: user_secret,
                                                           account_id: account_id,
                                                           brokerage_order_id: brokerage_order_id,
                                                         )
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Trading.cancel_user_account_order: #{e}"
end
```

#### Using the cancel_user_account_order_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
account_id = "accountId_example"
brokerage_order_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"

begin
  # Cancel open order in account
  data, status_code, headers, response = SnapTrade::Trading.cancel_user_account_order_with_http_info(
                                                                                                        user_id: user_id,
                                                                                                        user_secret: user_secret,
                                                                                                        account_id: account_id,
                                                                                                        brokerage_order_id: brokerage_order_id,
                                                                                                      )
  p status_code # => 2xx
  p headers # => { ... }
  p data # => AccountOrderRecord
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Trading.cancel_user_account_order: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **user_id** | **String** |  |  |
| **user_secret** | **String** |  |  |
| **account_id** | **String** | The ID of the account to cancel the order in. |  |
| **trading_cancel_user_account_order_request** | [**TradingCancelUserAccountOrderRequest**](TradingCancelUserAccountOrderRequest.md) | The Order ID to be canceled |  |

### Return type

[**AccountOrderRecord**](AccountOrderRecord.md)

## get_order_impact

Check impact of trades on account.

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"

user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
account_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"
action = "BUY"
order_type = "Limit"
price = 31.33
stop = 31.33
time_in_force = "FOK"
units = 3.14
universal_symbol_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"
notional_value = 3.14

begin
  # Check impact of trades on account.
  result = SnapTrade::Trading.get_order_impact(
                                                  user_id: user_id,
                                                  user_secret: user_secret,
                                                  account_id: account_id,
                                                  action: action,
                                                  order_type: order_type,
                                                  price: price,
                                                  stop: stop,
                                                  time_in_force: time_in_force,
                                                  units: units,
                                                  universal_symbol_id: universal_symbol_id,
                                                  notional_value: notional_value,
                                                )
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Trading.get_order_impact: #{e}"
end
```

#### Using the get_order_impact_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
account_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"
action = "BUY"
order_type = "Limit"
price = 31.33
stop = 31.33
time_in_force = "FOK"
units = 3.14
universal_symbol_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"
notional_value = 3.14

begin
  # Check impact of trades on account.
  data, status_code, headers, response = SnapTrade::Trading.get_order_impact_with_http_info(
                                                                                               user_id: user_id,
                                                                                               user_secret: user_secret,
                                                                                               account_id: account_id,
                                                                                               action: action,
                                                                                               order_type: order_type,
                                                                                               price: price,
                                                                                               stop: stop,
                                                                                               time_in_force: time_in_force,
                                                                                               units: units,
                                                                                               universal_symbol_id: universal_symbol_id,
                                                                                               notional_value: notional_value,
                                                                                             )
  p status_code # => 2xx
  p headers # => { ... }
  p data # => ManualTradeAndImpact
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Trading.get_order_impact: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **user_id** | **String** |  |  |
| **user_secret** | **String** |  |  |
| **manual_trade_form** | [**ManualTradeForm**](ManualTradeForm.md) |  |  |

### Return type

[**ManualTradeAndImpact**](ManualTradeAndImpact.md)

## get_user_account_quotes

Get symbol quotes

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"

user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
symbols = "symbols_example"
account_id = "accountId_example"
use_ticker = True

begin
  # Get symbol quotes
  result = SnapTrade::Trading.get_user_account_quotes(
                                                         user_id: user_id,
                                                         user_secret: user_secret,
                                                         symbols: symbols,
                                                         account_id: account_id,
                                                         use_ticker: use_ticker,
                                                       )
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Trading.get_user_account_quotes: #{e}"
end
```

#### Using the get_user_account_quotes_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
symbols = "symbols_example"
account_id = "accountId_example"
use_ticker = True

begin
  # Get symbol quotes
  data, status_code, headers, response = SnapTrade::Trading.get_user_account_quotes_with_http_info(
                                                                                                      user_id: user_id,
                                                                                                      user_secret: user_secret,
                                                                                                      symbols: symbols,
                                                                                                      account_id: account_id,
                                                                                                      use_ticker: use_ticker,
                                                                                                    )
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Array<SymbolsQuotesInner>
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Trading.get_user_account_quotes: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **user_id** | **String** |  |  |
| **user_secret** | **String** |  |  |
| **symbols** | **String** | List of universal_symbol_id or tickers to get quotes for. |  |
| **account_id** | **String** | The ID of the account to get quotes. |  |
| **use_ticker** | **Boolean** | Should be set to True if providing tickers. | [optional] |

### Return type

[**Array&lt;SymbolsQuotesInner&gt;**](SymbolsQuotesInner.md)

## place_force_order

Place a trade with NO validation.

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"

user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
account_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"
action = "BUY"
order_type = "Limit"
price = 31.33
stop = 31.33
time_in_force = "FOK"
units = 3.14
universal_symbol_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"
notional_value = 3.14

begin
  # Place a trade with NO validation.
  result = SnapTrade::Trading.place_force_order(
                                                   user_id: user_id,
                                                   user_secret: user_secret,
                                                   account_id: account_id,
                                                   action: action,
                                                   order_type: order_type,
                                                   price: price,
                                                   stop: stop,
                                                   time_in_force: time_in_force,
                                                   units: units,
                                                   universal_symbol_id: universal_symbol_id,
                                                   notional_value: notional_value,
                                                 )
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Trading.place_force_order: #{e}"
end
```

#### Using the place_force_order_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
account_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"
action = "BUY"
order_type = "Limit"
price = 31.33
stop = 31.33
time_in_force = "FOK"
units = 3.14
universal_symbol_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"
notional_value = 3.14

begin
  # Place a trade with NO validation.
  data, status_code, headers, response = SnapTrade::Trading.place_force_order_with_http_info(
                                                                                                user_id: user_id,
                                                                                                user_secret: user_secret,
                                                                                                account_id: account_id,
                                                                                                action: action,
                                                                                                order_type: order_type,
                                                                                                price: price,
                                                                                                stop: stop,
                                                                                                time_in_force: time_in_force,
                                                                                                units: units,
                                                                                                universal_symbol_id: universal_symbol_id,
                                                                                                notional_value: notional_value,
                                                                                              )
  p status_code # => 2xx
  p headers # => { ... }
  p data # => AccountOrderRecord
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Trading.place_force_order: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **user_id** | **String** |  |  |
| **user_secret** | **String** |  |  |
| **manual_trade_form** | [**ManualTradeForm**](ManualTradeForm.md) |  |  |

### Return type

[**AccountOrderRecord**](AccountOrderRecord.md)

## place_oco_order

Place a OCO (One Cancels Other) order

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"

user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
first_trade_id = None
second_trade_id = None

begin
  # Place a OCO (One Cancels Other) order
  result = SnapTrade::Trading.place_oco_order(
                                                 user_id: user_id,
                                                 user_secret: user_secret,
                                                 first_trade_id: first_trade_id,
                                                 second_trade_id: second_trade_id,
                                               )
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Trading.place_oco_order: #{e}"
end
```

#### Using the place_oco_order_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
first_trade_id = None
second_trade_id = None

begin
  # Place a OCO (One Cancels Other) order
  data, status_code, headers, response = SnapTrade::Trading.place_oco_order_with_http_info(
                                                                                              user_id: user_id,
                                                                                              user_secret: user_secret,
                                                                                              first_trade_id: first_trade_id,
                                                                                              second_trade_id: second_trade_id,
                                                                                            )
  p status_code # => 2xx
  p headers # => { ... }
  p data # => AccountOrderRecord
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Trading.place_oco_order: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **user_id** | **String** |  |  |
| **user_secret** | **String** |  |  |
| **trading_place_oco_order_request** | [**TradingPlaceOCOOrderRequest**](TradingPlaceOCOOrderRequest.md) |  |  |

### Return type

[**AccountOrderRecord**](AccountOrderRecord.md)

## place_order

Place order

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"

trade_id = "tradeId_example"
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"

begin
  # Place order
  result = SnapTrade::Trading.place_order(
                                             trade_id: trade_id,
                                             user_id: user_id,
                                             user_secret: user_secret,
                                           )
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Trading.place_order: #{e}"
end
```

#### Using the place_order_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby
trade_id = "tradeId_example"
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"

begin
  # Place order
  data, status_code, headers, response = SnapTrade::Trading.place_order_with_http_info(
                                                                                          trade_id: trade_id,
                                                                                          user_id: user_id,
                                                                                          user_secret: user_secret,
                                                                                        )
  p status_code # => 2xx
  p headers # => { ... }
  p data # => AccountOrderRecord
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Trading.place_order: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **trade_id** | **String** | The ID of trade object obtained from trade/impact endpoint |  |
| **user_id** | **String** |  |  |
| **user_secret** | **String** |  |  |

### Return type

[**AccountOrderRecord**](AccountOrderRecord.md)

