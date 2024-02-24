<div align="center">

[![Visit SnapTrade](./header.png)](https://snaptrade.com)

# [SnapTrade](https://snaptrade.com)<a id="snaptrade"></a>

Connect brokerage accounts to your app for live positions and trading

[![npm](https://img.shields.io/badge/gem-v2.0.4-blue)](https://rubygems.org/gems/snaptrade/versions/2.0.4)
[![More Info](https://img.shields.io/badge/More%20Info-Click%20Here-orange)](https://snaptrade.com/)

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`snaptrade.account_information.get_all_user_holdings`](#snaptradeaccount_informationget_all_user_holdings)
  * [`snaptrade.account_information.get_user_account_balance`](#snaptradeaccount_informationget_user_account_balance)
  * [`snaptrade.account_information.get_user_account_details`](#snaptradeaccount_informationget_user_account_details)
  * [`snaptrade.account_information.get_user_account_orders`](#snaptradeaccount_informationget_user_account_orders)
  * [`snaptrade.account_information.get_user_account_positions`](#snaptradeaccount_informationget_user_account_positions)
  * [`snaptrade.account_information.get_user_holdings`](#snaptradeaccount_informationget_user_holdings)
  * [`snaptrade.account_information.list_user_accounts`](#snaptradeaccount_informationlist_user_accounts)
  * [`snaptrade.account_information.update_user_account`](#snaptradeaccount_informationupdate_user_account)
  * [`snaptrade.api_status.check`](#snaptradeapi_statuscheck)
  * [`snaptrade.authentication.delete_snap_trade_user`](#snaptradeauthenticationdelete_snap_trade_user)
  * [`snaptrade.authentication.get_user_jwt`](#snaptradeauthenticationget_user_jwt)
  * [`snaptrade.authentication.list_snap_trade_users`](#snaptradeauthenticationlist_snap_trade_users)
  * [`snaptrade.authentication.login_snap_trade_user`](#snaptradeauthenticationlogin_snap_trade_user)
  * [`snaptrade.authentication.register_snap_trade_user`](#snaptradeauthenticationregister_snap_trade_user)
  * [`snaptrade.authentication.reset_snap_trade_user_secret`](#snaptradeauthenticationreset_snap_trade_user_secret)
  * [`snaptrade.connections.detail_brokerage_authorization`](#snaptradeconnectionsdetail_brokerage_authorization)
  * [`snaptrade.connections.list_brokerage_authorizations`](#snaptradeconnectionslist_brokerage_authorizations)
  * [`snaptrade.connections.remove_brokerage_authorization`](#snaptradeconnectionsremove_brokerage_authorization)
  * [`snaptrade.connections.session_events`](#snaptradeconnectionssession_events)
  * [`snaptrade.error_logs.list_user_errors`](#snaptradeerror_logslist_user_errors)
  * [`snaptrade.options.get_option_strategy`](#snaptradeoptionsget_option_strategy)
  * [`snaptrade.options.get_options_chain`](#snaptradeoptionsget_options_chain)
  * [`snaptrade.options.get_options_strategy_quote`](#snaptradeoptionsget_options_strategy_quote)
  * [`snaptrade.options.list_option_holdings`](#snaptradeoptionslist_option_holdings)
  * [`snaptrade.options.place_option_strategy`](#snaptradeoptionsplace_option_strategy)
  * [`snaptrade.reference_data.get_currency_exchange_rate_pair`](#snaptradereference_dataget_currency_exchange_rate_pair)
  * [`snaptrade.reference_data.get_partner_info`](#snaptradereference_dataget_partner_info)
  * [`snaptrade.reference_data.get_security_types`](#snaptradereference_dataget_security_types)
  * [`snaptrade.reference_data.get_stock_exchanges`](#snaptradereference_dataget_stock_exchanges)
  * [`snaptrade.reference_data.get_symbols`](#snaptradereference_dataget_symbols)
  * [`snaptrade.reference_data.get_symbols_by_ticker`](#snaptradereference_dataget_symbols_by_ticker)
  * [`snaptrade.reference_data.list_all_brokerage_authorization_type`](#snaptradereference_datalist_all_brokerage_authorization_type)
  * [`snaptrade.reference_data.list_all_brokerages`](#snaptradereference_datalist_all_brokerages)
  * [`snaptrade.reference_data.list_all_currencies`](#snaptradereference_datalist_all_currencies)
  * [`snaptrade.reference_data.list_all_currencies_rates`](#snaptradereference_datalist_all_currencies_rates)
  * [`snaptrade.reference_data.symbol_search_user_account`](#snaptradereference_datasymbol_search_user_account)
  * [`snaptrade.trading.cancel_user_account_order`](#snaptradetradingcancel_user_account_order)
  * [`snaptrade.trading.get_order_impact`](#snaptradetradingget_order_impact)
  * [`snaptrade.trading.get_user_account_quotes`](#snaptradetradingget_user_account_quotes)
  * [`snaptrade.trading.place_force_order`](#snaptradetradingplace_force_order)
  * [`snaptrade.trading.place_oco_order`](#snaptradetradingplace_oco_order)
  * [`snaptrade.trading.place_order`](#snaptradetradingplace_order)
  * [`snaptrade.transactions_and_reporting.get_activities`](#snaptradetransactions_and_reportingget_activities)
  * [`snaptrade.transactions_and_reporting.get_reporting_custom_range`](#snaptradetransactions_and_reportingget_reporting_custom_range)

<!-- tocstop -->

## Installation<a id="installation"></a>

Add to Gemfile:

```ruby
gem 'snaptrade', '~> 2.0.4'
```

## Getting Started<a id="getting-started"></a>

```ruby
require 'snaptrade'

SnapTrade.client_id = "YOUR_CLIENT_ID"
SnapTrade.consumer_key = "YOUR_CONSUMER_KEY"
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
brokerage_authorizations = "917c8734-8470-4a3e-a18f-57c3f2ee6631"

result = snaptrade.account_information.get_all_user_holdings(
  user_id: user_id,
  user_secret: user_secret,
  brokerage_authorizations: brokerage_authorizations,
)
p result
```

## Reference<a id="reference"></a>


### `snaptrade.account_information.get_all_user_holdings`<a id="snaptradeaccount_informationget_all_user_holdings"></a>

List all accounts for the user, plus balances, positions, and orders for each account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
brokerage_authorizations = "917c8734-8470-4a3e-a18f-57c3f2ee6631"

result = snaptrade.account_information.get_all_user_holdings(
  user_id: user_id,
  user_secret: user_secret,
  brokerage_authorizations: brokerage_authorizations,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: **String**<a id="user_id-string"></a>

##### user_secret: **String**<a id="user_secret-string"></a>

##### brokerage_authorizations: **String**<a id="brokerage_authorizations-string"></a>

Optional. Comma seperated list of authorization IDs (only use if filtering is needed on one or more authorizations).

---


### `snaptrade.account_information.get_user_account_balance`<a id="snaptradeaccount_informationget_user_account_balance"></a>

A list of account balances for the specified account (one per currency that the account holds).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
account_id = "accountId_example"

result = snaptrade.account_information.get_user_account_balance(
  user_id: user_id,
  user_secret: user_secret,
  account_id: account_id,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: **String**<a id="user_id-string"></a>

##### user_secret: **String**<a id="user_secret-string"></a>

##### account_id: **String**<a id="account_id-string"></a>

The ID of the account to get balances.

---


### `snaptrade.account_information.get_user_account_details`<a id="snaptradeaccount_informationget_user_account_details"></a>

Return details of a specific investment account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
account_id = "accountId_example"

result = snaptrade.account_information.get_user_account_details(
  user_id: user_id,
  user_secret: user_secret,
  account_id: account_id,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: **String**<a id="user_id-string"></a>

##### user_secret: **String**<a id="user_secret-string"></a>

##### account_id: **String**<a id="account_id-string"></a>

The ID of the account to get detail of.

---


### `snaptrade.account_information.get_user_account_orders`<a id="snaptradeaccount_informationget_user_account_orders"></a>

Fetch all recent orders from a user's account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
account_id = "accountId_example"
state = "all"
days = 30

result = snaptrade.account_information.get_user_account_orders(
  user_id: user_id,
  user_secret: user_secret,
  account_id: account_id,
  state: state,
  days: days,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: **String**<a id="user_id-string"></a>

##### user_secret: **String**<a id="user_secret-string"></a>

##### account_id: **String**<a id="account_id-string"></a>

The ID of the account to get orders.

##### state: **String**<a id="state-string"></a>

defaults value is set to \"all\"

##### days: **Integer**<a id="days-integer"></a>

Number of days in the past to fetch the most recent orders. Defaults to the last 90 days if no value is passed in.

---


### `snaptrade.account_information.get_user_account_positions`<a id="snaptradeaccount_informationget_user_account_positions"></a>

List account positions

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
account_id = "accountId_example"

result = snaptrade.account_information.get_user_account_positions(
  user_id: user_id,
  user_secret: user_secret,
  account_id: account_id,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: **String**<a id="user_id-string"></a>

##### user_secret: **String**<a id="user_secret-string"></a>

##### account_id: **String**<a id="account_id-string"></a>

The ID of the account to get positions.

---


### `snaptrade.account_information.get_user_holdings`<a id="snaptradeaccount_informationget_user_holdings"></a>

List balances, positions and orders for the specified account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
account_id = "917c8734-8470-4a3e-a18f-57c3f2ee6631"
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"

result = snaptrade.account_information.get_user_holdings(
  account_id: account_id,
  user_id: user_id,
  user_secret: user_secret,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### account_id: **String**<a id="account_id-string"></a>

The ID of the account to fetch holdings for.

##### user_id: **String**<a id="user_id-string"></a>

##### user_secret: **String**<a id="user_secret-string"></a>

---


### `snaptrade.account_information.list_user_accounts`<a id="snaptradeaccount_informationlist_user_accounts"></a>

List accounts

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"

result = snaptrade.account_information.list_user_accounts(
  user_id: user_id,
  user_secret: user_secret,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: **String**<a id="user_id-string"></a>

##### user_secret: **String**<a id="user_secret-string"></a>

---


### `snaptrade.account_information.update_user_account`<a id="snaptradeaccount_informationupdate_user_account"></a>

Update details of an investment account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
account_id = "accountId_example"

result = snaptrade.account_information.update_user_account(
  user_id: user_id,
  user_secret: user_secret,
  account_id: account_id,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: **String**<a id="user_id-string"></a>

##### user_secret: **String**<a id="user_secret-string"></a>

##### account_id: **String**<a id="account_id-string"></a>

The ID of the account to update.

---


### `snaptrade.api_status.check`<a id="snaptradeapi_statuscheck"></a>

Check whether the API is operational and verify timestamps.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby

result = snaptrade.api_status.check
p result
```

---


### `snaptrade.authentication.delete_snap_trade_user`<a id="snaptradeauthenticationdelete_snap_trade_user"></a>

Deletes a user you've registered over the SnapTrade API, and any data associated with them or their investment accounts.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
user_id = "John.doe@snaptrade.com"

result = snaptrade.authentication.delete_snap_trade_user(
  user_id: user_id,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: **String**<a id="user_id-string"></a>

---


### `snaptrade.authentication.get_user_jwt`<a id="snaptradeauthenticationget_user_jwt"></a>

Generate encrypted JWT token

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"

result = snaptrade.authentication.get_user_jwt(
  user_id: user_id,
  user_secret: user_secret,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: **String**<a id="user_id-string"></a>

##### user_secret: **String**<a id="user_secret-string"></a>

---


### `snaptrade.authentication.list_snap_trade_users`<a id="snaptradeauthenticationlist_snap_trade_users"></a>

Returns a list of users you've registered over the SnapTrade API.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby

result = snaptrade.authentication.list_snap_trade_users
p result
```

---


### `snaptrade.authentication.login_snap_trade_user`<a id="snaptradeauthenticationlogin_snap_trade_user"></a>

Logs in a SnapTrade user and returns an authenticated connection portal URL for them to use to connect a brokerage account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
broker = "ALPACA"
immediate_redirect = True
custom_redirect = "https://snaptrade.com"
reconnect = "8b5f262d-4bb9-365d-888a-202bd3b15fa1"
connection_type = "read"
connection_portal_version = "v2"

result = snaptrade.authentication.login_snap_trade_user(
  user_id: user_id,
  user_secret: user_secret,
  broker: broker,
  immediate_redirect: immediate_redirect,
  custom_redirect: custom_redirect,
  reconnect: reconnect,
  connection_type: connection_type,
  connection_portal_version: connection_portal_version,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: **String**<a id="user_id-string"></a>

##### user_secret: **String**<a id="user_secret-string"></a>

##### broker: **String**<a id="broker-string"></a>

Slug of the brokerage to connect the user to

##### immediateRedirect: **Boolean**<a id="immediateredirect-boolean"></a>

When set to True, user will be redirected back to the partner's site instead of the connection portal

##### customRedirect: **String**<a id="customredirect-string"></a>

URL to redirect the user to after the user connects their brokerage account

##### reconnect: **String**<a id="reconnect-string"></a>

The UUID of the brokerage connection to be reconnected. This parameter should be left empty unless you are reconnecting a disabled connection. See ‘Reconnecting Accounts’ for more information.

##### connectionType: [**ConnectionType**](./lib/snaptrade/models/connection_type.rb)<a id="connectiontype-connectiontypelibsnaptrademodelsconnection_typerb"></a>

##### connectionPortalVersion: [**ConnectionPortalVersion**](./lib/snaptrade/models/connection_portal_version.rb)<a id="connectionportalversion-connectionportalversionlibsnaptrademodelsconnection_portal_versionrb"></a>

---


### `snaptrade.authentication.register_snap_trade_user`<a id="snaptradeauthenticationregister_snap_trade_user"></a>

Create SnapTrade user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
user_id = "snaptrade-user-123"

result = snaptrade.authentication.register_snap_trade_user(
  user_id: user_id,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: **String**<a id="userid-string"></a>

SnapTrade User ID. Provided by SnapTrade Partner. Can be any string, as long as it's unique to a user

---


### `snaptrade.authentication.reset_snap_trade_user_secret`<a id="snaptradeauthenticationreset_snap_trade_user_secret"></a>

Obtain a new user secret for a user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
user_id = "snaptrade-user-123"
user_secret = "h81@cx1lkalablakwjaltkejraj11="

result = snaptrade.authentication.reset_snap_trade_user_secret(
  user_id: user_id,
  user_secret: user_secret,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: **String**<a id="userid-string"></a>

SnapTrade User ID. Provided by SnapTrade Partner. Can be any string, as long as it's unique to a user

##### userSecret: **String**<a id="usersecret-string"></a>

SnapTrade User Secret randomly generated by SnapTrade. This should be considered priviledged information and if compromised, you should delete and re-create this SnapTrade user.

---


### `snaptrade.connections.detail_brokerage_authorization`<a id="snaptradeconnectionsdetail_brokerage_authorization"></a>

Get brokerage authorization details

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
authorization_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"

result = snaptrade.connections.detail_brokerage_authorization(
  authorization_id: authorization_id,
  user_id: user_id,
  user_secret: user_secret,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization_id: **String**<a id="authorization_id-string"></a>

The ID of a brokerage authorization object.

##### user_id: **String**<a id="user_id-string"></a>

##### user_secret: **String**<a id="user_secret-string"></a>

---


### `snaptrade.connections.list_brokerage_authorizations`<a id="snaptradeconnectionslist_brokerage_authorizations"></a>

List all brokerage authorizations for the user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"

result = snaptrade.connections.list_brokerage_authorizations(
  user_id: user_id,
  user_secret: user_secret,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: **String**<a id="user_id-string"></a>

##### user_secret: **String**<a id="user_secret-string"></a>

---


### `snaptrade.connections.remove_brokerage_authorization`<a id="snaptradeconnectionsremove_brokerage_authorization"></a>

Delete brokerage authorization

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
authorization_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"

snaptrade.connections.remove_brokerage_authorization(
  authorization_id: authorization_id,
  user_id: user_id,
  user_secret: user_secret,
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization_id: **String**<a id="authorization_id-string"></a>

The ID of the Authorization to delete.

##### user_id: **String**<a id="user_id-string"></a>

##### user_secret: **String**<a id="user_secret-string"></a>

---


### `snaptrade.connections.session_events`<a id="snaptradeconnectionssession_events"></a>

List all session events for the partner

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
partner_client_id = "SNAPTRADETEST"
user_id = "917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2"
session_id = "917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2"

result = snaptrade.connections.session_events(
  partner_client_id: partner_client_id,
  user_id: user_id,
  session_id: session_id,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### partner_client_id: **String**<a id="partner_client_id-string"></a>

##### user_id: **String**<a id="user_id-string"></a>

Optional comma seperated list of user IDs used to filter the request on specific users

##### session_id: **String**<a id="session_id-string"></a>

Optional comma seperated list of session IDs used to filter the request on specific users

---


### `snaptrade.error_logs.list_user_errors`<a id="snaptradeerror_logslist_user_errors"></a>

Retrieve error logs on behalf of your SnapTrade users

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"

result = snaptrade.error_logs.list_user_errors(
  user_id: user_id,
  user_secret: user_secret,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: **String**<a id="user_id-string"></a>

##### user_secret: **String**<a id="user_secret-string"></a>

---


### `snaptrade.options.get_option_strategy`<a id="snaptradeoptionsget_option_strategy"></a>

Creates an option strategy object that will be used to place an option strategy order

#### 🛠️ Usage<a id="🛠️-usage"></a>

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

result = snaptrade.options.get_option_strategy(
  underlying_symbol_id: underlying_symbol_id,
  legs: legs,
  strategy_type: strategy_type,
  user_id: user_id,
  user_secret: user_secret,
  account_id: account_id,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### underlying_symbol_id: **String**<a id="underlying_symbol_id-string"></a>

##### legs: [**Array&lt;OptionLeg&gt;**](./lib/snaptrade/models/array_option_leg.rb)<a id="legs-arrayltoptionleggtlibsnaptrademodelsarray_option_legrb"></a>

##### strategy_type: [**StrategyType**](./lib/snaptrade/models/strategy_type.rb)<a id="strategy_type-strategytypelibsnaptrademodelsstrategy_typerb"></a>

##### user_id: **String**<a id="user_id-string"></a>

##### user_secret: **String**<a id="user_secret-string"></a>

##### account_id: **String**<a id="account_id-string"></a>

The ID of the account to create the option strategy object in.

---


### `snaptrade.options.get_options_chain`<a id="snaptradeoptionsget_options_chain"></a>

Get the options chain

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
account_id = "accountId_example"
symbol = "symbol_example"

result = snaptrade.options.get_options_chain(
  user_id: user_id,
  user_secret: user_secret,
  account_id: account_id,
  symbol: symbol,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: **String**<a id="user_id-string"></a>

##### user_secret: **String**<a id="user_secret-string"></a>

##### account_id: **String**<a id="account_id-string"></a>

The ID of the account to get the options chain from.

##### symbol: **String**<a id="symbol-string"></a>

Universal symbol ID if symbol

---


### `snaptrade.options.get_options_strategy_quote`<a id="snaptradeoptionsget_options_strategy_quote"></a>

Get latest market data of option strategy

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
account_id = "accountId_example"
option_strategy_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"

result = snaptrade.options.get_options_strategy_quote(
  user_id: user_id,
  user_secret: user_secret,
  account_id: account_id,
  option_strategy_id: option_strategy_id,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: **String**<a id="user_id-string"></a>

##### user_secret: **String**<a id="user_secret-string"></a>

##### account_id: **String**<a id="account_id-string"></a>

The ID of the account the strategy will be placed in.

##### option_strategy_id: **String**<a id="option_strategy_id-string"></a>

Option strategy id obtained from response when creating option strategy object

---


### `snaptrade.options.list_option_holdings`<a id="snaptradeoptionslist_option_holdings"></a>

Get the options holdings in the account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
account_id = "accountId_example"

result = snaptrade.options.list_option_holdings(
  user_id: user_id,
  user_secret: user_secret,
  account_id: account_id,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: **String**<a id="user_id-string"></a>

##### user_secret: **String**<a id="user_secret-string"></a>

##### account_id: **String**<a id="account_id-string"></a>

The ID of the account to fetch options holdings for.

---


### `snaptrade.options.place_option_strategy`<a id="snaptradeoptionsplace_option_strategy"></a>

Place an option strategy order on the brokerage

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
order_type = "Limit"
time_in_force = "FOK"
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
account_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"
option_strategy_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"
price = 31.33

result = snaptrade.options.place_option_strategy(
  order_type: order_type,
  time_in_force: time_in_force,
  user_id: user_id,
  user_secret: user_secret,
  account_id: account_id,
  option_strategy_id: option_strategy_id,
  price: price,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### order_type: [**OrderType**](./lib/snaptrade/models/order_type.rb)<a id="order_type-ordertypelibsnaptrademodelsorder_typerb"></a>

##### time_in_force: [**TimeInForceStrict**](./lib/snaptrade/models/time_in_force_strict.rb)<a id="time_in_force-timeinforcestrictlibsnaptrademodelstime_in_force_strictrb"></a>

##### user_id: **String**<a id="user_id-string"></a>

##### user_secret: **String**<a id="user_secret-string"></a>

##### account_id: **String**<a id="account_id-string"></a>

The ID of the account to execute the strategy in.

##### option_strategy_id: **String**<a id="option_strategy_id-string"></a>

Option strategy id obtained from response when creating option strategy object

##### price: **Float**<a id="price-float"></a>

Trade Price if limit or stop limit order

---


### `snaptrade.reference_data.get_currency_exchange_rate_pair`<a id="snaptradereference_dataget_currency_exchange_rate_pair"></a>

Return the exchange rate of a currency pair

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
currency_pair = "currencyPair_example"

result = snaptrade.reference_data.get_currency_exchange_rate_pair(
  currency_pair: currency_pair,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### currency_pair: **String**<a id="currency_pair-string"></a>

A currency pair based on currency code for example, {CAD-USD}

---


### `snaptrade.reference_data.get_partner_info`<a id="snaptradereference_dataget_partner_info"></a>

Get metadata related to Snaptrade partner

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby

result = snaptrade.reference_data.get_partner_info
p result
```

---


### `snaptrade.reference_data.get_security_types`<a id="snaptradereference_dataget_security_types"></a>

List security types available on SnapTrade.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby

result = snaptrade.reference_data.get_security_types
p result
```

---


### `snaptrade.reference_data.get_stock_exchanges`<a id="snaptradereference_dataget_stock_exchanges"></a>

List exchanges

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby

result = snaptrade.reference_data.get_stock_exchanges
p result
```

---


### `snaptrade.reference_data.get_symbols`<a id="snaptradereference_dataget_symbols"></a>

Search for symbols

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
substring = "apple"

result = snaptrade.reference_data.get_symbols(
  substring: substring,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### substring: **String**<a id="substring-string"></a>

---


### `snaptrade.reference_data.get_symbols_by_ticker`<a id="snaptradereference_dataget_symbols_by_ticker"></a>

Get details of a symbol by the ticker or the universal_symbol_id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
query = "query_example"

result = snaptrade.reference_data.get_symbols_by_ticker(
  query: query,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### query: **String**<a id="query-string"></a>

The ticker or universal_symbol_id of the UniversalSymbol to get.

---


### `snaptrade.reference_data.list_all_brokerage_authorization_type`<a id="snaptradereference_datalist_all_brokerage_authorization_type"></a>

List of all brokerage authorization types

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
brokerage = "QUESTRADE,ALPACA"

result = snaptrade.reference_data.list_all_brokerage_authorization_type(
  brokerage: brokerage,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### brokerage: **String**<a id="brokerage-string"></a>

Comma separated value of brokerage slugs

---


### `snaptrade.reference_data.list_all_brokerages`<a id="snaptradereference_datalist_all_brokerages"></a>

List brokerages

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby

result = snaptrade.reference_data.list_all_brokerages
p result
```

---


### `snaptrade.reference_data.list_all_currencies`<a id="snaptradereference_datalist_all_currencies"></a>

List currencies

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby

result = snaptrade.reference_data.list_all_currencies
p result
```

---


### `snaptrade.reference_data.list_all_currencies_rates`<a id="snaptradereference_datalist_all_currencies_rates"></a>

List currency exchange rates

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby

result = snaptrade.reference_data.list_all_currencies_rates
p result
```

---


### `snaptrade.reference_data.symbol_search_user_account`<a id="snaptradereference_datasymbol_search_user_account"></a>

Search for symbols available in an account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
account_id = "accountId_example"
substring = "apple"

result = snaptrade.reference_data.symbol_search_user_account(
  user_id: user_id,
  user_secret: user_secret,
  account_id: account_id,
  substring: substring,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: **String**<a id="user_id-string"></a>

##### user_secret: **String**<a id="user_secret-string"></a>

##### account_id: **String**<a id="account_id-string"></a>

The ID of the account to search for symbols within.

##### substring: **String**<a id="substring-string"></a>

---


### `snaptrade.trading.cancel_user_account_order`<a id="snaptradetradingcancel_user_account_order"></a>

Cancel open order in account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
account_id = "accountId_example"
brokerage_order_id = "2bcd7cc3-e922-4976-bce1-9858296801c3"

result = snaptrade.trading.cancel_user_account_order(
  user_id: user_id,
  user_secret: user_secret,
  account_id: account_id,
  brokerage_order_id: brokerage_order_id,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: **String**<a id="user_id-string"></a>

##### user_secret: **String**<a id="user_secret-string"></a>

##### account_id: **String**<a id="account_id-string"></a>

The ID of the account to cancel the order in.

##### brokerage_order_id: **String**<a id="brokerage_order_id-string"></a>

---


### `snaptrade.trading.get_order_impact`<a id="snaptradetradingget_order_impact"></a>

Check impact of trades on account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

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

result = snaptrade.trading.get_order_impact(
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
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: **String**<a id="user_id-string"></a>

##### user_secret: **String**<a id="user_secret-string"></a>

##### account_id: **String**<a id="account_id-string"></a>

##### action: [**Action**](./lib/snaptrade/models/action.rb)<a id="action-actionlibsnaptrademodelsactionrb"></a>

##### order_type: [**OrderType**](./lib/snaptrade/models/order_type.rb)<a id="order_type-ordertypelibsnaptrademodelsorder_typerb"></a>

##### price: **Float**<a id="price-float"></a>

Trade Price if limit or stop limit order

##### stop: **Float**<a id="stop-float"></a>

Stop Price. If stop loss or stop limit order, the price to trigger the stop

##### time_in_force: [**TimeInForceStrict**](./lib/snaptrade/models/time_in_force_strict.rb)<a id="time_in_force-timeinforcestrictlibsnaptrademodelstime_in_force_strictrb"></a>

##### units: [**Float**](./lib/snaptrade/models/float.rb)<a id="units-floatlibsnaptrademodelsfloatrb"></a>

##### universal_symbol_id: **String**<a id="universal_symbol_id-string"></a>

##### notional_value: [**Float**](./lib/snaptrade/models/float.rb)<a id="notional_value-floatlibsnaptrademodelsfloatrb"></a>

---


### `snaptrade.trading.get_user_account_quotes`<a id="snaptradetradingget_user_account_quotes"></a>

Get symbol quotes

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
symbols = "symbols_example"
account_id = "accountId_example"
use_ticker = True

result = snaptrade.trading.get_user_account_quotes(
  user_id: user_id,
  user_secret: user_secret,
  symbols: symbols,
  account_id: account_id,
  use_ticker: use_ticker,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: **String**<a id="user_id-string"></a>

##### user_secret: **String**<a id="user_secret-string"></a>

##### symbols: **String**<a id="symbols-string"></a>

List of universal_symbol_id or tickers to get quotes for.

##### account_id: **String**<a id="account_id-string"></a>

The ID of the account to get quotes.

##### use_ticker: **Boolean**<a id="use_ticker-boolean"></a>

Should be set to True if providing tickers.

---


### `snaptrade.trading.place_force_order`<a id="snaptradetradingplace_force_order"></a>

Place a trade with NO validation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

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

result = snaptrade.trading.place_force_order(
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
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: **String**<a id="user_id-string"></a>

##### user_secret: **String**<a id="user_secret-string"></a>

##### account_id: **String**<a id="account_id-string"></a>

##### action: [**Action**](./lib/snaptrade/models/action.rb)<a id="action-actionlibsnaptrademodelsactionrb"></a>

##### order_type: [**OrderType**](./lib/snaptrade/models/order_type.rb)<a id="order_type-ordertypelibsnaptrademodelsorder_typerb"></a>

##### price: **Float**<a id="price-float"></a>

Trade Price if limit or stop limit order

##### stop: **Float**<a id="stop-float"></a>

Stop Price. If stop loss or stop limit order, the price to trigger the stop

##### time_in_force: [**TimeInForceStrict**](./lib/snaptrade/models/time_in_force_strict.rb)<a id="time_in_force-timeinforcestrictlibsnaptrademodelstime_in_force_strictrb"></a>

##### units: [**Float**](./lib/snaptrade/models/float.rb)<a id="units-floatlibsnaptrademodelsfloatrb"></a>

##### universal_symbol_id: **String**<a id="universal_symbol_id-string"></a>

##### notional_value: [**Float**](./lib/snaptrade/models/float.rb)<a id="notional_value-floatlibsnaptrademodelsfloatrb"></a>

---


### `snaptrade.trading.place_oco_order`<a id="snaptradetradingplace_oco_order"></a>

Place a OCO (One Cancels Other) order

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
first_trade_id = None
second_trade_id = None

result = snaptrade.trading.place_oco_order(
  user_id: user_id,
  user_secret: user_secret,
  first_trade_id: first_trade_id,
  second_trade_id: second_trade_id,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: **String**<a id="user_id-string"></a>

##### user_secret: **String**<a id="user_secret-string"></a>

##### first_trade_id: [**Object**](./lib/snaptrade/models/object.rb)<a id="first_trade_id-objectlibsnaptrademodelsobjectrb"></a>

The ID of first trade object obtained from trade/impact endpoint

##### second_trade_id: [**Object**](./lib/snaptrade/models/object.rb)<a id="second_trade_id-objectlibsnaptrademodelsobjectrb"></a>

The ID of second trade object obtained from trade/impact endpoint

---


### `snaptrade.trading.place_order`<a id="snaptradetradingplace_order"></a>

Place order

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
trade_id = "tradeId_example"
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"

result = snaptrade.trading.place_order(
  trade_id: trade_id,
  user_id: user_id,
  user_secret: user_secret,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### trade_id: **String**<a id="trade_id-string"></a>

The ID of trade object obtained from trade/impact endpoint

##### user_id: **String**<a id="user_id-string"></a>

##### user_secret: **String**<a id="user_secret-string"></a>

---


### `snaptrade.transactions_and_reporting.get_activities`<a id="snaptradetransactions_and_reportingget_activities"></a>

Returns activities (transactions) for a user. Specifying start and end date is highly recommended for better performance

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
start_date = "2022-01-24"
end_date = "2022-01-24"
accounts = "917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2"
brokerage_authorizations = "917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2"
type = "DIVIDEND"

result = snaptrade.transactions_and_reporting.get_activities(
  user_id: user_id,
  user_secret: user_secret,
  start_date: start_date,
  end_date: end_date,
  accounts: accounts,
  brokerage_authorizations: brokerage_authorizations,
  type: type,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: **String**<a id="user_id-string"></a>

##### user_secret: **String**<a id="user_secret-string"></a>

##### start_date: **Date**<a id="start_date-date"></a>

##### end_date: **Date**<a id="end_date-date"></a>

##### accounts: **String**<a id="accounts-string"></a>

Optional comma seperated list of account IDs used to filter the request on specific accounts

##### brokerage_authorizations: **String**<a id="brokerage_authorizations-string"></a>

Optional comma seperated list of brokerage authorization IDs used to filter the request on only accounts that belong to those authorizations

##### type: **String**<a id="type-string"></a>

Optional comma seperated list of types to filter activities by. This is not an exhaustive list, if we fail to match to these types, we will return the raw description from the brokerage. Potential values include - DIVIDEND - BUY - SELL - CONTRIBUTION - WITHDRAWAL - EXTERNAL_ASSET_TRANSFER_IN - EXTERNAL_ASSET_TRANSFER_OUT - INTERNAL_CASH_TRANSFER_IN - INTERNAL_CASH_TRANSFER_OUT - INTERNAL_ASSET_TRANSFER_IN - INTERNAL_ASSET_TRANSFER_OUT - INTEREST - REBATE - GOV_GRANT - TAX - FEE - REI - FXT

---


### `snaptrade.transactions_and_reporting.get_reporting_custom_range`<a id="snaptradetransactions_and_reportingget_reporting_custom_range"></a>

Returns performance information (contributions, dividends, rate of return, etc) for a specific timeframe. Please note that Total Equity Timeframe and Rate of Returns are experimental features. Please contact support@snaptrade.com if you notice any inconsistencies.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
start_date = "2022-01-24"
end_date = "2022-01-24"
user_id = "John.doe@snaptrade.com"
user_secret = "USERSECRET123"
accounts = "917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2"
detailed = True
frequency = "monthly"

result = snaptrade.transactions_and_reporting.get_reporting_custom_range(
  start_date: start_date,
  end_date: end_date,
  user_id: user_id,
  user_secret: user_secret,
  accounts: accounts,
  detailed: detailed,
  frequency: frequency,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### start_date: **Date**<a id="start_date-date"></a>

##### end_date: **Date**<a id="end_date-date"></a>

##### user_id: **String**<a id="user_id-string"></a>

##### user_secret: **String**<a id="user_secret-string"></a>

##### accounts: **String**<a id="accounts-string"></a>

Optional comma seperated list of account IDs used to filter the request on specific accounts

##### detailed: **Boolean**<a id="detailed-boolean"></a>

Optional, increases frequency of data points for the total value and contribution charts if set to true

##### frequency: **String**<a id="frequency-string"></a>

Optional frequency for the rate of return chart (defaults to monthly). Possible values are daily, weekly, monthly, quarterly, yearly.

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
