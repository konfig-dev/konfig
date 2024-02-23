# SnapTrade::OptionsApi

All URIs are relative to *https://api.snaptrade.com/api/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_option_strategy**](OptionsApi.md#get_option_strategy) | **POST** /accounts/{accountId}/optionStrategy | Creates an option strategy object that will be used to place an option strategy order |
| [**get_options_chain**](OptionsApi.md#get_options_chain) | **GET** /accounts/{accountId}/optionsChain | Get the options chain |
| [**get_options_strategy_quote**](OptionsApi.md#get_options_strategy_quote) | **GET** /accounts/{accountId}/optionStrategy/{optionStrategyId} | Get latest market data of option strategy |
| [**list_option_holdings**](OptionsApi.md#list_option_holdings) | **GET** /accounts/{accountId}/options | Get the options holdings in the account |
| [**place_option_strategy**](OptionsApi.md#place_option_strategy) | **POST** /accounts/{accountId}/optionStrategy/{optionStrategyId}/execute | Place an option strategy order on the brokerage |

## get_option_strategy

Creates an option strategy object that will be used to place an option strategy order

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"

underlying_symbol_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"
legs = [
        {
            "action" => "BUY_TO_OPEN",
            "option_symbol_id" => "SPY220819P00200000",
            "quantity" => 1,
        }
    ]
strategy_type = "CUSTOM"
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
account_id = "accountId_example"

begin
  # Creates an option strategy object that will be used to place an option strategy order
  result = SnapTrade::Options.get_option_strategy(
                                                     underlying_symbol_id: underlying_symbol_id,
                                                     legs: legs,
                                                     strategy_type: strategy_type,
                                                     user_id: user_id,
                                                     user_secret: user_secret,
                                                     account_id: account_id,
                                                   )
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Options.get_option_strategy: #{e}"
end
```

#### Using the get_option_strategy_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby
underlying_symbol_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"
legs = [
        {
            "action" => "BUY_TO_OPEN",
            "option_symbol_id" => "SPY220819P00200000",
            "quantity" => 1,
        }
    ]
strategy_type = "CUSTOM"
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
account_id = "accountId_example"

begin
  # Creates an option strategy object that will be used to place an option strategy order
  data, status_code, headers, response = SnapTrade::Options.get_option_strategy_with_http_info(
                                                                                                  underlying_symbol_id: underlying_symbol_id,
                                                                                                  legs: legs,
                                                                                                  strategy_type: strategy_type,
                                                                                                  user_id: user_id,
                                                                                                  user_secret: user_secret,
                                                                                                  account_id: account_id,
                                                                                                )
  p status_code # => 2xx
  p headers # => { ... }
  p data # => StrategyQuotes
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Options.get_option_strategy: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **user_id** | **String** |  |  |
| **user_secret** | **String** |  |  |
| **account_id** | **String** | The ID of the account to create the option strategy object in. |  |
| **options_get_option_strategy_request** | [**OptionsGetOptionStrategyRequest**](OptionsGetOptionStrategyRequest.md) |  |  |

### Return type

[**StrategyQuotes**](StrategyQuotes.md)

## get_options_chain

Get the options chain

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"

user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
account_id = "accountId_example"
symbol = "symbol_example"

begin
  # Get the options chain
  result = SnapTrade::Options.get_options_chain(
                                                   user_id: user_id,
                                                   user_secret: user_secret,
                                                   account_id: account_id,
                                                   symbol: symbol,
                                                 )
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Options.get_options_chain: #{e}"
end
```

#### Using the get_options_chain_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
account_id = "accountId_example"
symbol = "symbol_example"

begin
  # Get the options chain
  data, status_code, headers, response = SnapTrade::Options.get_options_chain_with_http_info(
                                                                                                user_id: user_id,
                                                                                                user_secret: user_secret,
                                                                                                account_id: account_id,
                                                                                                symbol: symbol,
                                                                                              )
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Array<OptionChainInner>
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Options.get_options_chain: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **user_id** | **String** |  |  |
| **user_secret** | **String** |  |  |
| **account_id** | **String** | The ID of the account to get the options chain from. |  |
| **symbol** | **String** | Universal symbol ID if symbol |  |

### Return type

[**Array&lt;OptionChainInner&gt;**](OptionChainInner.md)

## get_options_strategy_quote

Get latest market data of option strategy

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"

user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
account_id = "accountId_example"
option_strategy_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"

begin
  # Get latest market data of option strategy
  result = SnapTrade::Options.get_options_strategy_quote(
                                                            user_id: user_id,
                                                            user_secret: user_secret,
                                                            account_id: account_id,
                                                            option_strategy_id: option_strategy_id,
                                                          )
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Options.get_options_strategy_quote: #{e}"
end
```

#### Using the get_options_strategy_quote_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
account_id = "accountId_example"
option_strategy_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"

begin
  # Get latest market data of option strategy
  data, status_code, headers, response = SnapTrade::Options.get_options_strategy_quote_with_http_info(
                                                                                                         user_id: user_id,
                                                                                                         user_secret: user_secret,
                                                                                                         account_id: account_id,
                                                                                                         option_strategy_id: option_strategy_id,
                                                                                                       )
  p status_code # => 2xx
  p headers # => { ... }
  p data # => StrategyQuotes
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Options.get_options_strategy_quote: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **user_id** | **String** |  |  |
| **user_secret** | **String** |  |  |
| **account_id** | **String** | The ID of the account the strategy will be placed in. |  |
| **option_strategy_id** | **String** | Option strategy id obtained from response when creating option strategy object |  |

### Return type

[**StrategyQuotes**](StrategyQuotes.md)

## list_option_holdings

Get the options holdings in the account

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"

user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
account_id = "accountId_example"

begin
  # Get the options holdings in the account
  result = SnapTrade::Options.list_option_holdings(
                                                      user_id: user_id,
                                                      user_secret: user_secret,
                                                      account_id: account_id,
                                                    )
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Options.list_option_holdings: #{e}"
end
```

#### Using the list_option_holdings_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
account_id = "accountId_example"

begin
  # Get the options holdings in the account
  data, status_code, headers, response = SnapTrade::Options.list_option_holdings_with_http_info(
                                                                                                   user_id: user_id,
                                                                                                   user_secret: user_secret,
                                                                                                   account_id: account_id,
                                                                                                 )
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Array<OptionsPosition>
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Options.list_option_holdings: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **user_id** | **String** |  |  |
| **user_secret** | **String** |  |  |
| **account_id** | **String** | The ID of the account to fetch options holdings for. |  |

### Return type

[**Array&lt;OptionsPosition&gt;**](OptionsPosition.md)

## place_option_strategy

Place an option strategy order on the brokerage

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"

order_type = "Limit"
time_in_force = "FOK"
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
account_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"
option_strategy_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"
price = 31.33

begin
  # Place an option strategy order on the brokerage
  result = SnapTrade::Options.place_option_strategy(
                                                       order_type: order_type,
                                                       time_in_force: time_in_force,
                                                       user_id: user_id,
                                                       user_secret: user_secret,
                                                       account_id: account_id,
                                                       option_strategy_id: option_strategy_id,
                                                       price: price,
                                                     )
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Options.place_option_strategy: #{e}"
end
```

#### Using the place_option_strategy_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby
order_type = "Limit"
time_in_force = "FOK"
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
account_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"
option_strategy_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"
price = 31.33

begin
  # Place an option strategy order on the brokerage
  data, status_code, headers, response = SnapTrade::Options.place_option_strategy_with_http_info(
                                                                                                    order_type: order_type,
                                                                                                    time_in_force: time_in_force,
                                                                                                    user_id: user_id,
                                                                                                    user_secret: user_secret,
                                                                                                    account_id: account_id,
                                                                                                    option_strategy_id: option_strategy_id,
                                                                                                    price: price,
                                                                                                  )
  p status_code # => 2xx
  p headers # => { ... }
  p data # => StrategyOrderRecord
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::Options.place_option_strategy: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **user_id** | **String** |  |  |
| **user_secret** | **String** |  |  |
| **account_id** | **String** | The ID of the account to execute the strategy in. |  |
| **option_strategy_id** | **String** | Option strategy id obtained from response when creating option strategy object |  |
| **options_place_option_strategy_request** | [**OptionsPlaceOptionStrategyRequest**](OptionsPlaceOptionStrategyRequest.md) |  |  |

### Return type

[**StrategyOrderRecord**](StrategyOrderRecord.md)

