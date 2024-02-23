# snaptrade

Connect brokerage accounts to your app for live positions and trading

For more information, please visit [https://snaptrade.com/](https://snaptrade.com/)

## Installation

Add to Gemfile:

```ruby
gem 'snaptrade', '~> 2.0.4'
```

## Getting Started

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"

user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
brokerage_authorizations = "917c8734-8470-4a3e-a18f-57c3f2ee6631"

begin
  # List all accounts for the user, plus balances, positions, and orders for each account.
  result = SnapTrade::AccountInformation.get_all_user_holdings(
                                                                  user_id: user_id,
                                                                  user_secret: user_secret,
                                                                  brokerage_authorizations: brokerage_authorizations,
                                                                )
  p result
rescue SnapTrade::ApiError => e
  puts "Exception when calling SnapTrade::AccountInformation.get_all_user_holdings: #{e}"
end
```

## Documentation for API Endpoints

All URIs are relative to *https://api.snaptrade.com/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SnapTrade::AccountInformationApi* | [**get_all_user_holdings**](docs/AccountInformationApi.md#get_all_user_holdings) | **GET** /holdings | List all accounts for the user, plus balances, positions, and orders for each account.
*SnapTrade::AccountInformationApi* | [**get_user_account_balance**](docs/AccountInformationApi.md#get_user_account_balance) | **GET** /accounts/{accountId}/balances | List account balances
*SnapTrade::AccountInformationApi* | [**get_user_account_details**](docs/AccountInformationApi.md#get_user_account_details) | **GET** /accounts/{accountId} | Return details of a specific investment account
*SnapTrade::AccountInformationApi* | [**get_user_account_orders**](docs/AccountInformationApi.md#get_user_account_orders) | **GET** /accounts/{accountId}/orders | List account orders
*SnapTrade::AccountInformationApi* | [**get_user_account_positions**](docs/AccountInformationApi.md#get_user_account_positions) | **GET** /accounts/{accountId}/positions | List account positions
*SnapTrade::AccountInformationApi* | [**get_user_holdings**](docs/AccountInformationApi.md#get_user_holdings) | **GET** /accounts/{accountId}/holdings | List balances, positions and orders for the specified account
*SnapTrade::AccountInformationApi* | [**list_user_accounts**](docs/AccountInformationApi.md#list_user_accounts) | **GET** /accounts | List accounts
*SnapTrade::AccountInformationApi* | [**update_user_account**](docs/AccountInformationApi.md#update_user_account) | **PUT** /accounts/{accountId} | Update details of an investment account
*SnapTrade::APIStatusApi* | [**check**](docs/APIStatusApi.md#check) | **GET** / | Get API Status
*SnapTrade::AuthenticationApi* | [**delete_snap_trade_user**](docs/AuthenticationApi.md#delete_snap_trade_user) | **DELETE** /snapTrade/deleteUser | Delete SnapTrade user
*SnapTrade::AuthenticationApi* | [**get_user_jwt**](docs/AuthenticationApi.md#get_user_jwt) | **GET** /snapTrade/encryptedJWT | Generate encrypted JWT token
*SnapTrade::AuthenticationApi* | [**list_snap_trade_users**](docs/AuthenticationApi.md#list_snap_trade_users) | **GET** /snapTrade/listUsers | List SnapTrade users
*SnapTrade::AuthenticationApi* | [**login_snap_trade_user**](docs/AuthenticationApi.md#login_snap_trade_user) | **POST** /snapTrade/login | Login user & generate connection link
*SnapTrade::AuthenticationApi* | [**register_snap_trade_user**](docs/AuthenticationApi.md#register_snap_trade_user) | **POST** /snapTrade/registerUser | Create SnapTrade user
*SnapTrade::AuthenticationApi* | [**reset_snap_trade_user_secret**](docs/AuthenticationApi.md#reset_snap_trade_user_secret) | **POST** /snapTrade/resetUserSecret | Obtain a new user secret for a user
*SnapTrade::ConnectionsApi* | [**detail_brokerage_authorization**](docs/ConnectionsApi.md#detail_brokerage_authorization) | **GET** /authorizations/{authorizationId} | Get brokerage authorization details
*SnapTrade::ConnectionsApi* | [**list_brokerage_authorizations**](docs/ConnectionsApi.md#list_brokerage_authorizations) | **GET** /authorizations | List all brokerage authorizations for the user
*SnapTrade::ConnectionsApi* | [**remove_brokerage_authorization**](docs/ConnectionsApi.md#remove_brokerage_authorization) | **DELETE** /authorizations/{authorizationId} | Delete brokerage authorization
*SnapTrade::ConnectionsApi* | [**session_events**](docs/ConnectionsApi.md#session_events) | **GET** /sessionEvents | List all session events for the partner
*SnapTrade::ErrorLogsApi* | [**list_user_errors**](docs/ErrorLogsApi.md#list_user_errors) | **GET** /snapTrade/listUserErrors | Retrieve error logs on behalf of your SnapTrade users
*SnapTrade::OptionsApi* | [**get_option_strategy**](docs/OptionsApi.md#get_option_strategy) | **POST** /accounts/{accountId}/optionStrategy | Creates an option strategy object that will be used to place an option strategy order
*SnapTrade::OptionsApi* | [**get_options_chain**](docs/OptionsApi.md#get_options_chain) | **GET** /accounts/{accountId}/optionsChain | Get the options chain
*SnapTrade::OptionsApi* | [**get_options_strategy_quote**](docs/OptionsApi.md#get_options_strategy_quote) | **GET** /accounts/{accountId}/optionStrategy/{optionStrategyId} | Get latest market data of option strategy
*SnapTrade::OptionsApi* | [**list_option_holdings**](docs/OptionsApi.md#list_option_holdings) | **GET** /accounts/{accountId}/options | Get the options holdings in the account
*SnapTrade::OptionsApi* | [**place_option_strategy**](docs/OptionsApi.md#place_option_strategy) | **POST** /accounts/{accountId}/optionStrategy/{optionStrategyId}/execute | Place an option strategy order on the brokerage
*SnapTrade::ReferenceDataApi* | [**get_currency_exchange_rate_pair**](docs/ReferenceDataApi.md#get_currency_exchange_rate_pair) | **GET** /currencies/rates/{currencyPair} | Return the exchange rate of a currency pair
*SnapTrade::ReferenceDataApi* | [**get_partner_info**](docs/ReferenceDataApi.md#get_partner_info) | **GET** /snapTrade/partners | Get metadata related to Snaptrade partner
*SnapTrade::ReferenceDataApi* | [**get_security_types**](docs/ReferenceDataApi.md#get_security_types) | **GET** /securityTypes | List of all security types
*SnapTrade::ReferenceDataApi* | [**get_stock_exchanges**](docs/ReferenceDataApi.md#get_stock_exchanges) | **GET** /exchanges | List exchanges
*SnapTrade::ReferenceDataApi* | [**get_symbols**](docs/ReferenceDataApi.md#get_symbols) | **POST** /symbols | Search for symbols
*SnapTrade::ReferenceDataApi* | [**get_symbols_by_ticker**](docs/ReferenceDataApi.md#get_symbols_by_ticker) | **GET** /symbols/{query} | Get details of a symbol by the ticker or the universal_symbol_id
*SnapTrade::ReferenceDataApi* | [**list_all_brokerage_authorization_type**](docs/ReferenceDataApi.md#list_all_brokerage_authorization_type) | **GET** /brokerageAuthorizationTypes | List of all brokerage authorization types
*SnapTrade::ReferenceDataApi* | [**list_all_brokerages**](docs/ReferenceDataApi.md#list_all_brokerages) | **GET** /brokerages | List brokerages
*SnapTrade::ReferenceDataApi* | [**list_all_currencies**](docs/ReferenceDataApi.md#list_all_currencies) | **GET** /currencies | List currencies
*SnapTrade::ReferenceDataApi* | [**list_all_currencies_rates**](docs/ReferenceDataApi.md#list_all_currencies_rates) | **GET** /currencies/rates | List currency exchange rates
*SnapTrade::ReferenceDataApi* | [**symbol_search_user_account**](docs/ReferenceDataApi.md#symbol_search_user_account) | **POST** /accounts/{accountId}/symbols | Search for symbols available in an account
*SnapTrade::TradingApi* | [**cancel_user_account_order**](docs/TradingApi.md#cancel_user_account_order) | **POST** /accounts/{accountId}/orders/cancel | Cancel open order in account
*SnapTrade::TradingApi* | [**get_order_impact**](docs/TradingApi.md#get_order_impact) | **POST** /trade/impact | Check impact of trades on account.
*SnapTrade::TradingApi* | [**get_user_account_quotes**](docs/TradingApi.md#get_user_account_quotes) | **GET** /accounts/{accountId}/quotes | Get symbol quotes
*SnapTrade::TradingApi* | [**place_force_order**](docs/TradingApi.md#place_force_order) | **POST** /trade/place | Place a trade with NO validation.
*SnapTrade::TradingApi* | [**place_oco_order**](docs/TradingApi.md#place_oco_order) | **POST** /trade/oco | Place a OCO (One Cancels Other) order
*SnapTrade::TradingApi* | [**place_order**](docs/TradingApi.md#place_order) | **POST** /trade/{tradeId} | Place order
*SnapTrade::TransactionsAndReportingApi* | [**get_activities**](docs/TransactionsAndReportingApi.md#get_activities) | **GET** /activities | Get transaction history for a user
*SnapTrade::TransactionsAndReportingApi* | [**get_reporting_custom_range**](docs/TransactionsAndReportingApi.md#get_reporting_custom_range) | **GET** /performance/custom | Get performance information for a specific timeframe


## Documentation for Models

 - [SnapTrade::Account](docs/Account.md)
 - [SnapTrade::AccountBalance](docs/AccountBalance.md)
 - [SnapTrade::AccountBalanceTotal](docs/AccountBalanceTotal.md)
 - [SnapTrade::AccountHoldings](docs/AccountHoldings.md)
 - [SnapTrade::AccountHoldingsAccount](docs/AccountHoldingsAccount.md)
 - [SnapTrade::AccountOrderRecord](docs/AccountOrderRecord.md)
 - [SnapTrade::AccountOrderRecordStatus](docs/AccountOrderRecordStatus.md)
 - [SnapTrade::AccountSimple](docs/AccountSimple.md)
 - [SnapTrade::AccountSyncStatus](docs/AccountSyncStatus.md)
 - [SnapTrade::Action](docs/Action.md)
 - [SnapTrade::Amount](docs/Amount.md)
 - [SnapTrade::AuthType](docs/AuthType.md)
 - [SnapTrade::AuthenticationLoginSnapTradeUser200Response](docs/AuthenticationLoginSnapTradeUser200Response.md)
 - [SnapTrade::Balance](docs/Balance.md)
 - [SnapTrade::Brokerage](docs/Brokerage.md)
 - [SnapTrade::BrokerageAuthorization](docs/BrokerageAuthorization.md)
 - [SnapTrade::BrokerageAuthorizationType](docs/BrokerageAuthorizationType.md)
 - [SnapTrade::BrokerageAuthorizationTypeReadOnly](docs/BrokerageAuthorizationTypeReadOnly.md)
 - [SnapTrade::BrokerageAuthorizationTypeReadOnlyBrokerage](docs/BrokerageAuthorizationTypeReadOnlyBrokerage.md)
 - [SnapTrade::BrokerageAuthorizationTypeReadOnlyType](docs/BrokerageAuthorizationTypeReadOnlyType.md)
 - [SnapTrade::BrokerageAuthorizationTypeType](docs/BrokerageAuthorizationTypeType.md)
 - [SnapTrade::BrokerageSymbol](docs/BrokerageSymbol.md)
 - [SnapTrade::BrokerageSymbolOptionSymbol](docs/BrokerageSymbolOptionSymbol.md)
 - [SnapTrade::BrokerageSymbolSymbol](docs/BrokerageSymbolSymbol.md)
 - [SnapTrade::BrokerageType](docs/BrokerageType.md)
 - [SnapTrade::CalculatedTrade](docs/CalculatedTrade.md)
 - [SnapTrade::CashRestriction](docs/CashRestriction.md)
 - [SnapTrade::ConnectionPortalVersion](docs/ConnectionPortalVersion.md)
 - [SnapTrade::ConnectionType](docs/ConnectionType.md)
 - [SnapTrade::ConnectionsSessionEvents200ResponseInner](docs/ConnectionsSessionEvents200ResponseInner.md)
 - [SnapTrade::Currency](docs/Currency.md)
 - [SnapTrade::DeleteUserResponse](docs/DeleteUserResponse.md)
 - [SnapTrade::DividendAtDate](docs/DividendAtDate.md)
 - [SnapTrade::EncryptedResponse](docs/EncryptedResponse.md)
 - [SnapTrade::EncryptedResponseEncryptedMessageData](docs/EncryptedResponseEncryptedMessageData.md)
 - [SnapTrade::Exchange](docs/Exchange.md)
 - [SnapTrade::ExchangeRatePairs](docs/ExchangeRatePairs.md)
 - [SnapTrade::ExcludedAsset](docs/ExcludedAsset.md)
 - [SnapTrade::JWT](docs/JWT.md)
 - [SnapTrade::LoginRedirectURI](docs/LoginRedirectURI.md)
 - [SnapTrade::ManualTrade](docs/ManualTrade.md)
 - [SnapTrade::ManualTradeAndImpact](docs/ManualTradeAndImpact.md)
 - [SnapTrade::ManualTradeBalance](docs/ManualTradeBalance.md)
 - [SnapTrade::ManualTradeForm](docs/ManualTradeForm.md)
 - [SnapTrade::ManualTradeSymbol](docs/ManualTradeSymbol.md)
 - [SnapTrade::Model400FailedRequestResponse](docs/Model400FailedRequestResponse.md)
 - [SnapTrade::Model401FailedRequestResponse](docs/Model401FailedRequestResponse.md)
 - [SnapTrade::Model403FailedRequestResponse](docs/Model403FailedRequestResponse.md)
 - [SnapTrade::Model404FailedRequestResponse](docs/Model404FailedRequestResponse.md)
 - [SnapTrade::Model500UnexpectedExceptionResponse](docs/Model500UnexpectedExceptionResponse.md)
 - [SnapTrade::ModelAssetClass](docs/ModelAssetClass.md)
 - [SnapTrade::ModelAssetClassDetails](docs/ModelAssetClassDetails.md)
 - [SnapTrade::ModelAssetClassTarget](docs/ModelAssetClassTarget.md)
 - [SnapTrade::ModelPortfolio](docs/ModelPortfolio.md)
 - [SnapTrade::ModelPortfolioAssetClass](docs/ModelPortfolioAssetClass.md)
 - [SnapTrade::ModelPortfolioDetails](docs/ModelPortfolioDetails.md)
 - [SnapTrade::ModelPortfolioSecurity](docs/ModelPortfolioSecurity.md)
 - [SnapTrade::ModelType](docs/ModelType.md)
 - [SnapTrade::MonthlyDividends](docs/MonthlyDividends.md)
 - [SnapTrade::NetContributions](docs/NetContributions.md)
 - [SnapTrade::NetDividend](docs/NetDividend.md)
 - [SnapTrade::OptionChainInner](docs/OptionChainInner.md)
 - [SnapTrade::OptionChainInnerChainPerRootInner](docs/OptionChainInnerChainPerRootInner.md)
 - [SnapTrade::OptionChainInnerChainPerRootInnerChainPerStrikePriceInner](docs/OptionChainInnerChainPerRootInnerChainPerStrikePriceInner.md)
 - [SnapTrade::OptionLeg](docs/OptionLeg.md)
 - [SnapTrade::OptionLegAction](docs/OptionLegAction.md)
 - [SnapTrade::OptionStrategy](docs/OptionStrategy.md)
 - [SnapTrade::OptionStrategyLegsInner](docs/OptionStrategyLegsInner.md)
 - [SnapTrade::OptionType](docs/OptionType.md)
 - [SnapTrade::OptionsGetOptionStrategyRequest](docs/OptionsGetOptionStrategyRequest.md)
 - [SnapTrade::OptionsHoldings](docs/OptionsHoldings.md)
 - [SnapTrade::OptionsPlaceOptionStrategyRequest](docs/OptionsPlaceOptionStrategyRequest.md)
 - [SnapTrade::OptionsPosition](docs/OptionsPosition.md)
 - [SnapTrade::OptionsPositionCurrency](docs/OptionsPositionCurrency.md)
 - [SnapTrade::OptionsSymbol](docs/OptionsSymbol.md)
 - [SnapTrade::OrderType](docs/OrderType.md)
 - [SnapTrade::PartnerData](docs/PartnerData.md)
 - [SnapTrade::PastValue](docs/PastValue.md)
 - [SnapTrade::PerformanceCustom](docs/PerformanceCustom.md)
 - [SnapTrade::PortfolioGroup](docs/PortfolioGroup.md)
 - [SnapTrade::PortfolioGroupInfo](docs/PortfolioGroupInfo.md)
 - [SnapTrade::PortfolioGroupPosition](docs/PortfolioGroupPosition.md)
 - [SnapTrade::PortfolioGroupSettings](docs/PortfolioGroupSettings.md)
 - [SnapTrade::Position](docs/Position.md)
 - [SnapTrade::PositionSymbol](docs/PositionSymbol.md)
 - [SnapTrade::RedirectTokenandPin](docs/RedirectTokenandPin.md)
 - [SnapTrade::SecurityType](docs/SecurityType.md)
 - [SnapTrade::SessionEvent](docs/SessionEvent.md)
 - [SnapTrade::SessionEventType](docs/SessionEventType.md)
 - [SnapTrade::SnapTradeAPIDisclaimerAcceptStatus](docs/SnapTradeAPIDisclaimerAcceptStatus.md)
 - [SnapTrade::SnapTradeHoldingsAccount](docs/SnapTradeHoldingsAccount.md)
 - [SnapTrade::SnapTradeHoldingsAccountAccountId](docs/SnapTradeHoldingsAccountAccountId.md)
 - [SnapTrade::SnapTradeHoldingsTotalValue](docs/SnapTradeHoldingsTotalValue.md)
 - [SnapTrade::SnapTradeLoginUserRequestBody](docs/SnapTradeLoginUserRequestBody.md)
 - [SnapTrade::SnapTradeRegisterUserRequestBody](docs/SnapTradeRegisterUserRequestBody.md)
 - [SnapTrade::State](docs/State.md)
 - [SnapTrade::Status](docs/Status.md)
 - [SnapTrade::StrategyImpact](docs/StrategyImpact.md)
 - [SnapTrade::StrategyImpactLegsInner](docs/StrategyImpactLegsInner.md)
 - [SnapTrade::StrategyOrderPlace](docs/StrategyOrderPlace.md)
 - [SnapTrade::StrategyOrderPlaceOrdersInner](docs/StrategyOrderPlaceOrdersInner.md)
 - [SnapTrade::StrategyOrderPlaceOrdersInnerLegsInner](docs/StrategyOrderPlaceOrdersInnerLegsInner.md)
 - [SnapTrade::StrategyOrderRecord](docs/StrategyOrderRecord.md)
 - [SnapTrade::StrategyOrderRecordStatus](docs/StrategyOrderRecordStatus.md)
 - [SnapTrade::StrategyQuotes](docs/StrategyQuotes.md)
 - [SnapTrade::StrategyQuotesGreek](docs/StrategyQuotesGreek.md)
 - [SnapTrade::StrategyType](docs/StrategyType.md)
 - [SnapTrade::SubPeriodReturnRate](docs/SubPeriodReturnRate.md)
 - [SnapTrade::Symbol](docs/Symbol.md)
 - [SnapTrade::SymbolQuery](docs/SymbolQuery.md)
 - [SnapTrade::SymbolsQuotesInner](docs/SymbolsQuotesInner.md)
 - [SnapTrade::TargetAsset](docs/TargetAsset.md)
 - [SnapTrade::TimeInForceStrict](docs/TimeInForceStrict.md)
 - [SnapTrade::Trade](docs/Trade.md)
 - [SnapTrade::TradeAction](docs/TradeAction.md)
 - [SnapTrade::TradeExecutionStatus](docs/TradeExecutionStatus.md)
 - [SnapTrade::TradeExecutionStatusAction](docs/TradeExecutionStatusAction.md)
 - [SnapTrade::TradeImpact](docs/TradeImpact.md)
 - [SnapTrade::TradingCancelUserAccountOrderRequest](docs/TradingCancelUserAccountOrderRequest.md)
 - [SnapTrade::TradingPlaceOCOOrderRequest](docs/TradingPlaceOCOOrderRequest.md)
 - [SnapTrade::TransactionsStatus](docs/TransactionsStatus.md)
 - [SnapTrade::Type](docs/Type.md)
 - [SnapTrade::USExchange](docs/USExchange.md)
 - [SnapTrade::UnderlyingSymbol](docs/UnderlyingSymbol.md)
 - [SnapTrade::UniversalActivity](docs/UniversalActivity.md)
 - [SnapTrade::UniversalSymbol](docs/UniversalSymbol.md)
 - [SnapTrade::UserErrorLog](docs/UserErrorLog.md)
 - [SnapTrade::UserIDandSecret](docs/UserIDandSecret.md)
 - [SnapTrade::UserSettings](docs/UserSettings.md)

