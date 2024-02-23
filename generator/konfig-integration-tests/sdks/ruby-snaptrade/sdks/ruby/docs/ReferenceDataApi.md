# SnapTrade::ReferenceDataApi

All URIs are relative to *https://api.snaptrade.com/api/v1*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_currency_exchange_rate_pair**](ReferenceDataApi.md#get_currency_exchange_rate_pair) | **GET** /currencies/rates/{currencyPair} | Return the exchange rate of a currency pair |
| [**get_partner_info**](ReferenceDataApi.md#get_partner_info) | **GET** /snapTrade/partners | Get metadata related to Snaptrade partner |
| [**get_security_types**](ReferenceDataApi.md#get_security_types) | **GET** /securityTypes | List of all security types |
| [**get_stock_exchanges**](ReferenceDataApi.md#get_stock_exchanges) | **GET** /exchanges | List exchanges |
| [**get_symbols**](ReferenceDataApi.md#get_symbols) | **POST** /symbols | Search for symbols |
| [**get_symbols_by_ticker**](ReferenceDataApi.md#get_symbols_by_ticker) | **GET** /symbols/{query} | Get details of a symbol by the ticker or the universal_symbol_id |
| [**list_all_brokerage_authorization_type**](ReferenceDataApi.md#list_all_brokerage_authorization_type) | **GET** /brokerageAuthorizationTypes | List of all brokerage authorization types |
| [**list_all_brokerages**](ReferenceDataApi.md#list_all_brokerages) | **GET** /brokerages | List brokerages |
| [**list_all_currencies**](ReferenceDataApi.md#list_all_currencies) | **GET** /currencies | List currencies |
| [**list_all_currencies_rates**](ReferenceDataApi.md#list_all_currencies_rates) | **GET** /currencies/rates | List currency exchange rates |
| [**symbol_search_user_account**](ReferenceDataApi.md#symbol_search_user_account) | **POST** /accounts/{accountId}/symbols | Search for symbols available in an account |

## get_currency_exchange_rate_pair

Return the exchange rate of a currency pair

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"

currency_pair = "currencyPair_example"

begin
  # Return the exchange rate of a currency pair
  result = SnapTrade::ReferenceData.get_currency_exchange_rate_pair(
                                                                       currency_pair: currency_pair,
                                                                     )
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::ReferenceData.get_currency_exchange_rate_pair: #{e}"
end
```

#### Using the get_currency_exchange_rate_pair_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby
currency_pair = "currencyPair_example"

begin
  # Return the exchange rate of a currency pair
  data, status_code, headers, response = SnapTrade::ReferenceData.get_currency_exchange_rate_pair_with_http_info(
                                                                                                                    currency_pair: currency_pair,
                                                                                                                  )
  p status_code # => 2xx
  p headers # => { ... }
  p data # => ExchangeRatePairs
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::ReferenceData.get_currency_exchange_rate_pair: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **currency_pair** | **String** | A currency pair based on currency code for example, {CAD-USD} |  |

### Return type

[**ExchangeRatePairs**](ExchangeRatePairs.md)

## get_partner_info

Get metadata related to Snaptrade partner

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"


begin
  # Get metadata related to Snaptrade partner
  result = SnapTrade::ReferenceData.get_partner_info
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::ReferenceData.get_partner_info: #{e}"
end
```

#### Using the get_partner_info_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby

begin
  # Get metadata related to Snaptrade partner
  data, status_code, headers, response = SnapTrade::ReferenceData.get_partner_info_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => PartnerData
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::ReferenceData.get_partner_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**PartnerData**](PartnerData.md)

## get_security_types

List of all security types

List security types available on SnapTrade.

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"


begin
  # List of all security types
  result = SnapTrade::ReferenceData.get_security_types
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::ReferenceData.get_security_types: #{e}"
end
```

#### Using the get_security_types_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby

begin
  # List of all security types
  data, status_code, headers, response = SnapTrade::ReferenceData.get_security_types_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Array<SecurityType>
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::ReferenceData.get_security_types: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;SecurityType&gt;**](SecurityType.md)

## get_stock_exchanges

List exchanges

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"


begin
  # List exchanges
  result = SnapTrade::ReferenceData.get_stock_exchanges
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::ReferenceData.get_stock_exchanges: #{e}"
end
```

#### Using the get_stock_exchanges_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby

begin
  # List exchanges
  data, status_code, headers, response = SnapTrade::ReferenceData.get_stock_exchanges_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Array<Exchange>
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::ReferenceData.get_stock_exchanges: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;Exchange&gt;**](Exchange.md)

## get_symbols

Search for symbols

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"

substring = "apple"

begin
  # Search for symbols
  result = SnapTrade::ReferenceData.get_symbols(
                                                   substring: substring,
                                                 )
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::ReferenceData.get_symbols: #{e}"
end
```

#### Using the get_symbols_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby
substring = "apple"

begin
  # Search for symbols
  data, status_code, headers, response = SnapTrade::ReferenceData.get_symbols_with_http_info(
                                                                                                substring: substring,
                                                                                              )
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Array<UniversalSymbol>
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::ReferenceData.get_symbols: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **symbol_query** | [**SymbolQuery**](SymbolQuery.md) |  | [optional] |

### Return type

[**Array&lt;UniversalSymbol&gt;**](UniversalSymbol.md)

## get_symbols_by_ticker

Get details of a symbol by the ticker or the universal_symbol_id

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"

query = "query_example"

begin
  # Get details of a symbol by the ticker or the universal_symbol_id
  result = SnapTrade::ReferenceData.get_symbols_by_ticker(
                                                             query: query,
                                                           )
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::ReferenceData.get_symbols_by_ticker: #{e}"
end
```

#### Using the get_symbols_by_ticker_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby
query = "query_example"

begin
  # Get details of a symbol by the ticker or the universal_symbol_id
  data, status_code, headers, response = SnapTrade::ReferenceData.get_symbols_by_ticker_with_http_info(
                                                                                                          query: query,
                                                                                                        )
  p status_code # => 2xx
  p headers # => { ... }
  p data # => UniversalSymbol
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::ReferenceData.get_symbols_by_ticker: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **query** | **String** | The ticker or universal_symbol_id of the UniversalSymbol to get. |  |

### Return type

[**UniversalSymbol**](UniversalSymbol.md)

## list_all_brokerage_authorization_type

List of all brokerage authorization types

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"

brokerage = "QUESTRADE,ALPACA"

begin
  # List of all brokerage authorization types
  result = SnapTrade::ReferenceData.list_all_brokerage_authorization_type(
                                                                             brokerage: brokerage,
                                                                           )
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::ReferenceData.list_all_brokerage_authorization_type: #{e}"
end
```

#### Using the list_all_brokerage_authorization_type_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby
brokerage = "QUESTRADE,ALPACA"

begin
  # List of all brokerage authorization types
  data, status_code, headers, response = SnapTrade::ReferenceData.list_all_brokerage_authorization_type_with_http_info(
                                                                                                                          brokerage: brokerage,
                                                                                                                        )
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Array<BrokerageAuthorizationTypeReadOnly>
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::ReferenceData.list_all_brokerage_authorization_type: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **brokerage** | **String** | Comma separated value of brokerage slugs | [optional] |

### Return type

[**Array&lt;BrokerageAuthorizationTypeReadOnly&gt;**](BrokerageAuthorizationTypeReadOnly.md)

## list_all_brokerages

List brokerages

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"


begin
  # List brokerages
  result = SnapTrade::ReferenceData.list_all_brokerages
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::ReferenceData.list_all_brokerages: #{e}"
end
```

#### Using the list_all_brokerages_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby

begin
  # List brokerages
  data, status_code, headers, response = SnapTrade::ReferenceData.list_all_brokerages_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Array<Brokerage>
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::ReferenceData.list_all_brokerages: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;Brokerage&gt;**](Brokerage.md)

## list_all_currencies

List currencies

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"


begin
  # List currencies
  result = SnapTrade::ReferenceData.list_all_currencies
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::ReferenceData.list_all_currencies: #{e}"
end
```

#### Using the list_all_currencies_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby

begin
  # List currencies
  data, status_code, headers, response = SnapTrade::ReferenceData.list_all_currencies_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Array<Currency>
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::ReferenceData.list_all_currencies: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;Currency&gt;**](Currency.md)

## list_all_currencies_rates

List currency exchange rates

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"


begin
  # List currency exchange rates
  result = SnapTrade::ReferenceData.list_all_currencies_rates
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::ReferenceData.list_all_currencies_rates: #{e}"
end
```

#### Using the list_all_currencies_rates_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby

begin
  # List currency exchange rates
  data, status_code, headers, response = SnapTrade::ReferenceData.list_all_currencies_rates_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Array<ExchangeRatePairs>
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::ReferenceData.list_all_currencies_rates: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;ExchangeRatePairs&gt;**](ExchangeRatePairs.md)

## symbol_search_user_account

Search for symbols available in an account

### Example

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"

user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
account_id = "accountId_example"
substring = "apple"

begin
  # Search for symbols available in an account
  result = SnapTrade::ReferenceData.symbol_search_user_account(
                                                                  user_id: user_id,
                                                                  user_secret: user_secret,
                                                                  account_id: account_id,
                                                                  substring: substring,
                                                                )
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::ReferenceData.symbol_search_user_account: #{e}"
end
```

#### Using the symbol_search_user_account_with_http_info variant

This returns an Array which contains the response data, status code and headers.

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
account_id = "accountId_example"
substring = "apple"

begin
  # Search for symbols available in an account
  data, status_code, headers, response = SnapTrade::ReferenceData.symbol_search_user_account_with_http_info(
                                                                                                               user_id: user_id,
                                                                                                               user_secret: user_secret,
                                                                                                               account_id: account_id,
                                                                                                               substring: substring,
                                                                                                             )
  p status_code # => 2xx
  p headers # => { ... }
  p data # => Array<UniversalSymbol>
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::ReferenceData.symbol_search_user_account: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **user_id** | **String** |  |  |
| **user_secret** | **String** |  |  |
| **account_id** | **String** | The ID of the account to search for symbols within. |  |
| **symbol_query** | [**SymbolQuery**](SymbolQuery.md) |  | [optional] |

### Return type

[**Array&lt;UniversalSymbol&gt;**](UniversalSymbol.md)

