<div align="center">

[![Visit SnapTrade](https://raw.githubusercontent.com/passiv/snaptrade-sdks/HEAD/sdks/python/header.png)](https://snaptrade.com)

# SnapTrade<a id="snaptrade"></a>

Connect brokerage accounts to your app for live positions and trading


[![PyPI](https://img.shields.io/badge/PyPI-v11.0.12-blue)](https://pypi.org/project/snaptrade-python-sdk/11.0.12)
[![README.md](https://img.shields.io/badge/README-Click%20Here-green)](https://github.com/passiv/snaptrade-sdks/tree/master/sdks/python#readme)
[![More Info](https://img.shields.io/badge/More%20Info-Click%20Here-orange)](https://snaptrade.com/)

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Requirements](#requirements)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Async](#async)
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

## Requirements<a id="requirements"></a>

Python >=3.7

## Installation<a id="installation"></a>

```sh
pip install snaptrade-python-sdk==11.0.12
```

## Getting Started<a id="getting-started"></a>

```python
import os
import uuid
from pprint import pprint
from snaptrade_client import SnapTrade

# 1) Initialize a client with your clientID and consumerKey.
snaptrade = SnapTrade(
    consumer_key=os.environ["SNAPTRADE_CONSUMER_KEY"],
    client_id=os.environ["SNAPTRADE_CLIENT_ID"],
)

# 2) Check that the client is able to make a request to the API server.
api_response = snaptrade.api_status.check()
pprint(api_response.body)

# 3) Create a new user on SnapTrade
user_id = str(uuid.uuid4())
register_response = snaptrade.authentication.register_snap_trade_user(
    body={"userId": user_id}
)
pprint(register_response.body)

# Note: A user secret is only generated once. It's required to access
# resources for certain endpoints.
user_secret = register_response.body["userSecret"]

# 4) Get a redirect URI. Users will need this to connect
# their brokerage to the SnapTrade server.
redirect_uri = snaptrade.authentication.login_snap_trade_user(
    query_params={"userId": user_id, "userSecret": user_secret}
)
print(redirect_uri.body)

# 5) Obtaining account holdings data
holdings = snaptrade.account_information.get_all_user_holdings(
    query_params={"userId": user_id, "userSecret": user_secret}
)
pprint(holdings.body)

# 6) Deleting a user
deleted_response = snaptrade.authentication.delete_snap_trade_user(
    query_params={"userId": user_id}
)
pprint(deleted_response.body)
```

## Async<a id="async"></a>

`async` support is available by prepending `a` to any method.

```python
import asyncio
from pprint import pprint
from snaptrade_client import SnapTrade, ApiException

snaptrade = SnapTrade(
    consumer_key="YOUR_CONSUMER_KEY",
    client_id="YOUR_CLIENT_ID",
)


async def main():
    try:
        # List all accounts for the user, plus balances, positions, and orders for each account.
        get_all_user_holdings_response = (
            await snaptrade.account_information.aget_all_user_holdings(
                user_id="John.doe@snaptrade.com",
                user_secret="USERSECRET123",
                brokerage_authorizations="917c8734-8470-4a3e-a18f-57c3f2ee6631",
            )
        )
        pprint(get_all_user_holdings_response.body)
        pprint(get_all_user_holdings_response.body["account"])
        pprint(get_all_user_holdings_response.body["balances"])
        pprint(get_all_user_holdings_response.body["positions"])
        pprint(get_all_user_holdings_response.body["total_value"])
        pprint(get_all_user_holdings_response.headers)
        pprint(get_all_user_holdings_response.status)
        pprint(get_all_user_holdings_response.round_trip_time)
    except ApiException as e:
        print(
            "Exception when calling AccountInformationApi.get_all_user_holdings: %s\n"
            % e
        )
        pprint(e.body)
        pprint(e.headers)
        pprint(e.status)
        pprint(e.reason)
        pprint(e.round_trip_time)


asyncio.run(main())
```


## Reference<a id="reference"></a>
### `snaptrade.account_information.get_all_user_holdings`<a id="snaptradeaccount_informationget_all_user_holdings"></a>

List all accounts for the user, plus balances, positions, and orders for each account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
get_all_user_holdings_response = snaptrade.account_information.get_all_user_holdings(
    user_id="John.doe@snaptrade.com",
    user_secret="USERSECRET123",
    brokerage_authorizations="917c8734-8470-4a3e-a18f-57c3f2ee6631",
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `str`<a id="user_id-str"></a>

##### user_secret: `str`<a id="user_secret-str"></a>

##### brokerage_authorizations: `str`<a id="brokerage_authorizations-str"></a>

Optional. Comma seperated list of authorization IDs (only use if filtering is needed on one or more authorizations).

#### 🔄 Return<a id="🔄-return"></a>

[`AccountHoldings`](./snaptrade_client/type/account_holdings.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/holdings` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.account_information.get_user_account_balance`<a id="snaptradeaccount_informationget_user_account_balance"></a>

A list of account balances for the specified account (one per currency that the account holds).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
get_user_account_balance_response = (
    snaptrade.account_information.get_user_account_balance(
        user_id="John.doe@snaptrade.com",
        user_secret="USERSECRET123",
        account_id="917c8734-8470-4a3e-a18f-57c3f2ee6631",
    )
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `str`<a id="user_id-str"></a>

##### user_secret: `str`<a id="user_secret-str"></a>

##### account_id: `str`<a id="account_id-str"></a>

The ID of the account to get balances.

#### 🔄 Return<a id="🔄-return"></a>

[`Balance`](./snaptrade_client/type/balance.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/balances` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.account_information.get_user_account_details`<a id="snaptradeaccount_informationget_user_account_details"></a>

Return details of a specific investment account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
get_user_account_details_response = (
    snaptrade.account_information.get_user_account_details(
        user_id="John.doe@snaptrade.com",
        user_secret="USERSECRET123",
        account_id="917c8734-8470-4a3e-a18f-57c3f2ee6631",
    )
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `str`<a id="user_id-str"></a>

##### user_secret: `str`<a id="user_secret-str"></a>

##### account_id: `str`<a id="account_id-str"></a>

The ID of the account to get detail of.

#### 🔄 Return<a id="🔄-return"></a>

[`Account`](./snaptrade_client/type/account.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.account_information.get_user_account_orders`<a id="snaptradeaccount_informationget_user_account_orders"></a>

Fetch all recent orders from a user's account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
get_user_account_orders_response = (
    snaptrade.account_information.get_user_account_orders(
        user_id="John.doe@snaptrade.com",
        user_secret="USERSECRET123",
        account_id="917c8734-8470-4a3e-a18f-57c3f2ee6631",
        state="all",
        days=30,
    )
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `str`<a id="user_id-str"></a>

##### user_secret: `str`<a id="user_secret-str"></a>

##### account_id: `str`<a id="account_id-str"></a>

The ID of the account to get orders.

##### state: `str`<a id="state-str"></a>

defaults value is set to \"all\"

##### days: `int`<a id="days-int"></a>

Number of days in the past to fetch the most recent orders. Defaults to the last 30 days if no value is passed in.

#### 🔄 Return<a id="🔄-return"></a>

[`AccountOrderRecord`](./snaptrade_client/type/account_order_record.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/orders` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.account_information.get_user_account_positions`<a id="snaptradeaccount_informationget_user_account_positions"></a>

List account positions

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
get_user_account_positions_response = (
    snaptrade.account_information.get_user_account_positions(
        user_id="John.doe@snaptrade.com",
        user_secret="USERSECRET123",
        account_id="917c8734-8470-4a3e-a18f-57c3f2ee6631",
    )
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `str`<a id="user_id-str"></a>

##### user_secret: `str`<a id="user_secret-str"></a>

##### account_id: `str`<a id="account_id-str"></a>

The ID of the account to get positions.

#### 🔄 Return<a id="🔄-return"></a>

[`Position`](./snaptrade_client/type/position.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/positions` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.account_information.get_user_holdings`<a id="snaptradeaccount_informationget_user_holdings"></a>

List balances, positions and orders for the specified account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
get_user_holdings_response = snaptrade.account_information.get_user_holdings(
    account_id="917c8734-8470-4a3e-a18f-57c3f2ee6631",
    user_id="John.doe@snaptrade.com",
    user_secret="USERSECRET123",
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### account_id: `str`<a id="account_id-str"></a>

The ID of the account to fetch holdings for.

##### user_id: `str`<a id="user_id-str"></a>

##### user_secret: `str`<a id="user_secret-str"></a>

#### 🔄 Return<a id="🔄-return"></a>

[`AccountHoldingsAccount`](./snaptrade_client/type/account_holdings_account.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/holdings` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.account_information.list_user_accounts`<a id="snaptradeaccount_informationlist_user_accounts"></a>

List accounts

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
list_user_accounts_response = snaptrade.account_information.list_user_accounts(
    user_id="John.doe@snaptrade.com",
    user_secret="USERSECRET123",
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `str`<a id="user_id-str"></a>

##### user_secret: `str`<a id="user_secret-str"></a>

#### 🔄 Return<a id="🔄-return"></a>

[`Account`](./snaptrade_client/type/account.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.account_information.update_user_account`<a id="snaptradeaccount_informationupdate_user_account"></a>

Update details of an investment account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
update_user_account_response = snaptrade.account_information.update_user_account(
    user_id="John.doe@snaptrade.com",
    user_secret="USERSECRET123",
    account_id="accountId_example",
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `str`<a id="user_id-str"></a>

##### user_secret: `str`<a id="user_secret-str"></a>

##### account_id: `str`<a id="account_id-str"></a>

The ID of the account to update.

#### 🔄 Return<a id="🔄-return"></a>

[`Account`](./snaptrade_client/type/account.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}` `put`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.api_status.check`<a id="snaptradeapi_statuscheck"></a>

Check whether the API is operational and verify timestamps.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
check_response = snaptrade.api_status.check()
```

#### 🔄 Return<a id="🔄-return"></a>

[`Status`](./snaptrade_client/type/status.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.authentication.delete_snap_trade_user`<a id="snaptradeauthenticationdelete_snap_trade_user"></a>

Deletes a user you've registered over the SnapTrade API, and any data associated with them or their investment accounts.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
delete_snap_trade_user_response = snaptrade.authentication.delete_snap_trade_user(
    user_id="John.doe@snaptrade.com",
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `str`<a id="user_id-str"></a>

#### 🔄 Return<a id="🔄-return"></a>

[`DeleteUserResponse`](./snaptrade_client/type/delete_user_response.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/snapTrade/deleteUser` `delete`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.authentication.get_user_jwt`<a id="snaptradeauthenticationget_user_jwt"></a>

Generate encrypted JWT token

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
get_user_jwt_response = snaptrade.authentication.get_user_jwt(
    user_id="John.doe@snaptrade.com",
    user_secret="USERSECRET123",
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `str`<a id="user_id-str"></a>

##### user_secret: `str`<a id="user_secret-str"></a>

#### 🔄 Return<a id="🔄-return"></a>

[`EncryptedResponse`](./snaptrade_client/type/encrypted_response.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/snapTrade/encryptedJWT` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.authentication.list_snap_trade_users`<a id="snaptradeauthenticationlist_snap_trade_users"></a>

Returns a list of users you've registered over the SnapTrade API.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
list_snap_trade_users_response = snaptrade.authentication.list_snap_trade_users()
```

#### 🔄 Return<a id="🔄-return"></a>

[`UserList`](./snaptrade_client/type/user_list.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/snapTrade/listUsers` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.authentication.login_snap_trade_user`<a id="snaptradeauthenticationlogin_snap_trade_user"></a>

Logs in a SnapTrade user and returns an authenticated connection portal URL for them to use to connect a brokerage account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
login_snap_trade_user_response = snaptrade.authentication.login_snap_trade_user(
    user_id="John.doe@snaptrade.com",
    user_secret="USERSECRET123",
    broker="ALPACA",
    immediate_redirect=True,
    custom_redirect="https://snaptrade.com",
    reconnect="8b5f262d-4bb9-365d-888a-202bd3b15fa1",
    connection_type="read",
    connection_portal_version="v2",
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `str`<a id="user_id-str"></a>

##### user_secret: `str`<a id="user_secret-str"></a>

##### broker: `str`<a id="broker-str"></a>

Slug of the brokerage to connect the user to

##### immediate_redirect: `bool`<a id="immediate_redirect-bool"></a>

When set to True, user will be redirected back to the partner's site instead of the connection portal

##### custom_redirect: `str`<a id="custom_redirect-str"></a>

URL to redirect the user to after the user connects their brokerage account

##### reconnect: `str`<a id="reconnect-str"></a>

The UUID of the brokerage connection to be reconnected. This parameter should be left empty unless you are reconnecting a disabled connection. See ‘Reconnecting Accounts’ for more information.

##### connection_type: `str`<a id="connection_type-str"></a>

Sets whether the connection should be read or trade

##### connection_portal_version: `str`<a id="connection_portal_version-str"></a>

Sets the version of the connection portal to render, with a default to 'v2'

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`SnapTradeLoginUserRequestBody`](./snaptrade_client/type/snap_trade_login_user_request_body.py)
#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/snapTrade/login` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.authentication.register_snap_trade_user`<a id="snaptradeauthenticationregister_snap_trade_user"></a>

Create SnapTrade user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
register_snap_trade_user_response = snaptrade.authentication.register_snap_trade_user(
    user_id="snaptrade-user-123",
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `str`<a id="user_id-str"></a>

SnapTrade User ID. Provided by SnapTrade Partner. Can be any string, as long as it's unique to a user

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`SnapTradeRegisterUserRequestBody`](./snaptrade_client/type/snap_trade_register_user_request_body.py)
#### 🔄 Return<a id="🔄-return"></a>

[`UserIDandSecret`](./snaptrade_client/type/user_i_dand_secret.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/snapTrade/registerUser` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.authentication.reset_snap_trade_user_secret`<a id="snaptradeauthenticationreset_snap_trade_user_secret"></a>

Obtain a new user secret for a user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
reset_snap_trade_user_secret_response = (
    snaptrade.authentication.reset_snap_trade_user_secret(
        user_id="snaptrade-user-123",
        user_secret="h81@cx1lkalablakwjaltkejraj11=",
    )
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `str`<a id="user_id-str"></a>

SnapTrade User ID. Provided by SnapTrade Partner. Can be any string, as long as it's unique to a user

##### user_secret: `str`<a id="user_secret-str"></a>

SnapTrade User Secret randomly generated by SnapTrade. This should be considered priviledged information and if compromised, you should delete and re-create this SnapTrade user.

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`UserIDandSecret`](./snaptrade_client/type/user_i_dand_secret.py)
#### 🔄 Return<a id="🔄-return"></a>

[`UserIDandSecret`](./snaptrade_client/type/user_i_dand_secret.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/snapTrade/resetUserSecret` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.connections.detail_brokerage_authorization`<a id="snaptradeconnectionsdetail_brokerage_authorization"></a>

Get brokerage authorization details

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
detail_brokerage_authorization_response = (
    snaptrade.connections.detail_brokerage_authorization(
        authorization_id="2bcd7cc3-e922-4976-bce1-9858296801c3",
        user_id="John.doe@snaptrade.com",
        user_secret="USERSECRET123",
    )
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization_id: `str`<a id="authorization_id-str"></a>

The ID of a brokerage authorization object.

##### user_id: `str`<a id="user_id-str"></a>

##### user_secret: `str`<a id="user_secret-str"></a>

#### 🔄 Return<a id="🔄-return"></a>

[`BrokerageAuthorization`](./snaptrade_client/type/brokerage_authorization.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/authorizations/{authorizationId}` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.connections.list_brokerage_authorizations`<a id="snaptradeconnectionslist_brokerage_authorizations"></a>

List all brokerage authorizations for the user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
list_brokerage_authorizations_response = (
    snaptrade.connections.list_brokerage_authorizations(
        user_id="John.doe@snaptrade.com",
        user_secret="USERSECRET123",
    )
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `str`<a id="user_id-str"></a>

##### user_secret: `str`<a id="user_secret-str"></a>

#### 🔄 Return<a id="🔄-return"></a>

[`BrokerageAuthorization`](./snaptrade_client/type/brokerage_authorization.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/authorizations` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.connections.remove_brokerage_authorization`<a id="snaptradeconnectionsremove_brokerage_authorization"></a>

Delete brokerage authorization

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
snaptrade.connections.remove_brokerage_authorization(
    authorization_id="2bcd7cc3-e922-4976-bce1-9858296801c3",
    user_id="John.doe@snaptrade.com",
    user_secret="USERSECRET123",
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authorization_id: `str`<a id="authorization_id-str"></a>

The ID of the Authorization to delete.

##### user_id: `str`<a id="user_id-str"></a>

##### user_secret: `str`<a id="user_secret-str"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/authorizations/{authorizationId}` `delete`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.connections.session_events`<a id="snaptradeconnectionssession_events"></a>

List all session events for the partner

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
session_events_response = snaptrade.connections.session_events(
    partner_client_id="SNAPTRADETEST",
    user_id="917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2",
    session_id="917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2",
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### partner_client_id: `str`<a id="partner_client_id-str"></a>

##### user_id: `str`<a id="user_id-str"></a>

Optional comma seperated list of user IDs used to filter the request on specific users

##### session_id: `str`<a id="session_id-str"></a>

Optional comma seperated list of session IDs used to filter the request on specific users

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/sessionEvents` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.options.get_option_strategy`<a id="snaptradeoptionsget_option_strategy"></a>

Creates an option strategy object that will be used to place an option strategy order

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
get_option_strategy_response = snaptrade.options.get_option_strategy(
    underlying_symbol_id="2bcd7cc3-e922-4976-bce1-9858296801c3",
    legs=[
        {
            "action": "BUY_TO_OPEN",
            "option_symbol_id": "SPY220819P00200000",
            "quantity": 1,
        }
    ],
    strategy_type="CUSTOM",
    user_id="John.doe@snaptrade.com",
    user_secret="USERSECRET123",
    account_id="accountId_example",
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### underlying_symbol_id: `str`<a id="underlying_symbol_id-str"></a>

##### legs: List[`OptionLeg`]<a id="legs-listoptionleg"></a>

##### strategy_type: `str`<a id="strategy_type-str"></a>

##### user_id: `str`<a id="user_id-str"></a>

##### user_secret: `str`<a id="user_secret-str"></a>

##### account_id: `str`<a id="account_id-str"></a>

The ID of the account to create the option strategy object in.

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`Any`](./snaptrade_client/type/typing_any.py)
#### 🔄 Return<a id="🔄-return"></a>

[`StrategyQuotes`](./snaptrade_client/type/strategy_quotes.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/optionStrategy` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.options.get_options_chain`<a id="snaptradeoptionsget_options_chain"></a>

Get the options chain

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
get_options_chain_response = snaptrade.options.get_options_chain(
    user_id="John.doe@snaptrade.com",
    user_secret="USERSECRET123",
    account_id="accountId_example",
    symbol="symbol_example",
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `str`<a id="user_id-str"></a>

##### user_secret: `str`<a id="user_secret-str"></a>

##### account_id: `str`<a id="account_id-str"></a>

The ID of the account to get the options chain from.

##### symbol: `str`<a id="symbol-str"></a>

Universal symbol ID if symbol

#### 🔄 Return<a id="🔄-return"></a>

[`OptionChain`](./snaptrade_client/type/option_chain.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/optionsChain` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.options.get_options_strategy_quote`<a id="snaptradeoptionsget_options_strategy_quote"></a>

Get latest market data of option strategy

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
get_options_strategy_quote_response = snaptrade.options.get_options_strategy_quote(
    user_id="John.doe@snaptrade.com",
    user_secret="USERSECRET123",
    account_id="accountId_example",
    option_strategy_id="2bcd7cc3-e922-4976-bce1-9858296801c3",
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `str`<a id="user_id-str"></a>

##### user_secret: `str`<a id="user_secret-str"></a>

##### account_id: `str`<a id="account_id-str"></a>

The ID of the account the strategy will be placed in.

##### option_strategy_id: `str`<a id="option_strategy_id-str"></a>

Option strategy id obtained from response when creating option strategy object

#### 🔄 Return<a id="🔄-return"></a>

[`StrategyQuotes`](./snaptrade_client/type/strategy_quotes.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/optionStrategy/{optionStrategyId}` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.options.list_option_holdings`<a id="snaptradeoptionslist_option_holdings"></a>

Get the options holdings in the account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
list_option_holdings_response = snaptrade.options.list_option_holdings(
    user_id="John.doe@snaptrade.com",
    user_secret="USERSECRET123",
    account_id="accountId_example",
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `str`<a id="user_id-str"></a>

##### user_secret: `str`<a id="user_secret-str"></a>

##### account_id: `str`<a id="account_id-str"></a>

The ID of the account to fetch options holdings for.

#### 🔄 Return<a id="🔄-return"></a>

[`OptionsPosition`](./snaptrade_client/type/options_position.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/options` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.options.place_option_strategy`<a id="snaptradeoptionsplace_option_strategy"></a>

Place an option strategy order on the brokerage

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
place_option_strategy_response = snaptrade.options.place_option_strategy(
    order_type="Limit",
    time_in_force="FOK",
    user_id="John.doe@snaptrade.com",
    user_secret="USERSECRET123",
    account_id="2bcd7cc3-e922-4976-bce1-9858296801c3",
    option_strategy_id="2bcd7cc3-e922-4976-bce1-9858296801c3",
    price=31.33,
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### order_type: [`OrderType`](./snaptrade_client/type/order_type.py)<a id="order_type-ordertypesnaptrade_clienttypeorder_typepy"></a>

##### time_in_force: [`TimeInForceStrict`](./snaptrade_client/type/time_in_force_strict.py)<a id="time_in_force-timeinforcestrictsnaptrade_clienttypetime_in_force_strictpy"></a>

##### user_id: `str`<a id="user_id-str"></a>

##### user_secret: `str`<a id="user_secret-str"></a>

##### account_id: `str`<a id="account_id-str"></a>

The ID of the account to execute the strategy in.

##### option_strategy_id: `str`<a id="option_strategy_id-str"></a>

Option strategy id obtained from response when creating option strategy object

##### price: [`Price`](./snaptrade_client/type/price.py)<a id="price-pricesnaptrade_clienttypepricepy"></a>

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`Any`](./snaptrade_client/type/typing_any.py)
#### 🔄 Return<a id="🔄-return"></a>

[`StrategyOrderRecord`](./snaptrade_client/type/strategy_order_record.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/optionStrategy/{optionStrategyId}/execute` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.reference_data.get_currency_exchange_rate_pair`<a id="snaptradereference_dataget_currency_exchange_rate_pair"></a>

Return the exchange rate of a currency pair

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
get_currency_exchange_rate_pair_response = (
    snaptrade.reference_data.get_currency_exchange_rate_pair(
        currency_pair="currencyPair_example",
    )
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### currency_pair: `str`<a id="currency_pair-str"></a>

A currency pair based on currency code for example, {CAD-USD}

#### 🔄 Return<a id="🔄-return"></a>

[`ExchangeRatePairs`](./snaptrade_client/type/exchange_rate_pairs.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/currencies/rates/{currencyPair}` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.reference_data.get_partner_info`<a id="snaptradereference_dataget_partner_info"></a>

Get metadata related to Snaptrade partner

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
get_partner_info_response = snaptrade.reference_data.get_partner_info()
```

#### 🔄 Return<a id="🔄-return"></a>

[`PartnerData`](./snaptrade_client/type/partner_data.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/snapTrade/partners` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.reference_data.get_security_types`<a id="snaptradereference_dataget_security_types"></a>

List security types available on SnapTrade.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
get_security_types_response = snaptrade.reference_data.get_security_types()
```

#### 🔄 Return<a id="🔄-return"></a>

[`SecurityType`](./snaptrade_client/type/security_type.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/securityTypes` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.reference_data.get_stock_exchanges`<a id="snaptradereference_dataget_stock_exchanges"></a>

List exchanges

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
get_stock_exchanges_response = snaptrade.reference_data.get_stock_exchanges()
```

#### 🔄 Return<a id="🔄-return"></a>

[`Exchange`](./snaptrade_client/type/exchange.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/exchanges` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.reference_data.get_symbols`<a id="snaptradereference_dataget_symbols"></a>

Search for symbols

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
get_symbols_response = snaptrade.reference_data.get_symbols(
    substring="apple",
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### substring: `str`<a id="substring-str"></a>

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`SymbolQuery`](./snaptrade_client/type/symbol_query.py)
#### 🔄 Return<a id="🔄-return"></a>

[`UniversalSymbol`](./snaptrade_client/type/universal_symbol.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/symbols` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.reference_data.get_symbols_by_ticker`<a id="snaptradereference_dataget_symbols_by_ticker"></a>

Get details of a symbol by the ticker or the universal_symbol_id

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
get_symbols_by_ticker_response = snaptrade.reference_data.get_symbols_by_ticker(
    query="query_example",
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### query: `str`<a id="query-str"></a>

The ticker or universal_symbol_id of the UniversalSymbol to get.

#### 🔄 Return<a id="🔄-return"></a>

[`UniversalSymbol`](./snaptrade_client/type/universal_symbol.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/symbols/{query}` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.reference_data.list_all_brokerage_authorization_type`<a id="snaptradereference_datalist_all_brokerage_authorization_type"></a>

List of all brokerage authorization types

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
list_all_brokerage_authorization_type_response = (
    snaptrade.reference_data.list_all_brokerage_authorization_type(
        brokerage="QUESTRADE,ALPACA",
    )
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### brokerage: `str`<a id="brokerage-str"></a>

Comma separated value of brokerage slugs

#### 🔄 Return<a id="🔄-return"></a>

[`BrokerageAuthorizationTypeReadOnly`](./snaptrade_client/type/brokerage_authorization_type_read_only.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/brokerageAuthorizationTypes` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.reference_data.list_all_brokerages`<a id="snaptradereference_datalist_all_brokerages"></a>

List brokerages

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
list_all_brokerages_response = snaptrade.reference_data.list_all_brokerages()
```

#### 🔄 Return<a id="🔄-return"></a>

[`Brokerage`](./snaptrade_client/type/brokerage.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/brokerages` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.reference_data.list_all_currencies`<a id="snaptradereference_datalist_all_currencies"></a>

List currencies

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
list_all_currencies_response = snaptrade.reference_data.list_all_currencies()
```

#### 🔄 Return<a id="🔄-return"></a>

[`Currency`](./snaptrade_client/type/currency.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/currencies` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.reference_data.list_all_currencies_rates`<a id="snaptradereference_datalist_all_currencies_rates"></a>

List currency exchange rates

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
list_all_currencies_rates_response = (
    snaptrade.reference_data.list_all_currencies_rates()
)
```

#### 🔄 Return<a id="🔄-return"></a>

[`ExchangeRatePairs`](./snaptrade_client/type/exchange_rate_pairs.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/currencies/rates` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.reference_data.symbol_search_user_account`<a id="snaptradereference_datasymbol_search_user_account"></a>

Search for symbols available in an account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
symbol_search_user_account_response = (
    snaptrade.reference_data.symbol_search_user_account(
        user_id="John.doe@snaptrade.com",
        user_secret="USERSECRET123",
        account_id="917c8734-8470-4a3e-a18f-57c3f2ee6631",
        substring="apple",
    )
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `str`<a id="user_id-str"></a>

##### user_secret: `str`<a id="user_secret-str"></a>

##### account_id: `str`<a id="account_id-str"></a>

The ID of the account to search for symbols within.

##### substring: `str`<a id="substring-str"></a>

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`SymbolQuery`](./snaptrade_client/type/symbol_query.py)
#### 🔄 Return<a id="🔄-return"></a>

[`UniversalSymbol`](./snaptrade_client/type/universal_symbol.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/symbols` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.trading.cancel_user_account_order`<a id="snaptradetradingcancel_user_account_order"></a>

Cancel open order in account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
cancel_user_account_order_response = snaptrade.trading.cancel_user_account_order(
    user_id="John.doe@snaptrade.com",
    user_secret="USERSECRET123",
    account_id="917c8734-8470-4a3e-a18f-57c3f2ee6631",
    brokerage_order_id="2bcd7cc3-e922-4976-bce1-9858296801c3",
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `str`<a id="user_id-str"></a>

##### user_secret: `str`<a id="user_secret-str"></a>

##### account_id: `str`<a id="account_id-str"></a>

The ID of the account to cancel the order in.

##### brokerage_order_id: `str`<a id="brokerage_order_id-str"></a>

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`Any`](./snaptrade_client/type/typing_any.py)
The Order ID to be canceled

#### 🔄 Return<a id="🔄-return"></a>

[`AccountOrderRecord`](./snaptrade_client/type/account_order_record.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/orders/cancel` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.trading.get_order_impact`<a id="snaptradetradingget_order_impact"></a>

Check impact of trades on account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
get_order_impact_response = snaptrade.trading.get_order_impact(
    user_id="John.doe@snaptrade.com",
    user_secret="USERSECRET123",
    account_id="2bcd7cc3-e922-4976-bce1-9858296801c3",
    action="BUY",
    order_type="Limit",
    price=31.33,
    stop=31.33,
    time_in_force="FOK",
    units=3.14,
    universal_symbol_id="2bcd7cc3-e922-4976-bce1-9858296801c3",
    notional_value=100,
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `str`<a id="user_id-str"></a>

##### user_secret: `str`<a id="user_secret-str"></a>

##### account_id: `str`<a id="account_id-str"></a>

##### action: [`Action`](./snaptrade_client/type/action.py)<a id="action-actionsnaptrade_clienttypeactionpy"></a>

##### order_type: [`OrderType`](./snaptrade_client/type/order_type.py)<a id="order_type-ordertypesnaptrade_clienttypeorder_typepy"></a>

##### price: [`Price`](./snaptrade_client/type/price.py)<a id="price-pricesnaptrade_clienttypepricepy"></a>

##### stop: [`StopPrice`](./snaptrade_client/type/stop_price.py)<a id="stop-stoppricesnaptrade_clienttypestop_pricepy"></a>

##### time_in_force: [`TimeInForceStrict`](./snaptrade_client/type/time_in_force_strict.py)<a id="time_in_force-timeinforcestrictsnaptrade_clienttypetime_in_force_strictpy"></a>

##### units: [`UnitsNullable`](./snaptrade_client/type/units_nullable.py)<a id="units-unitsnullablesnaptrade_clienttypeunits_nullablepy"></a>

##### universal_symbol_id: `str`<a id="universal_symbol_id-str"></a>

##### notional_value: [`NotionalValueNullable`](./snaptrade_client/type/notional_value_nullable.py)<a id="notional_value-notionalvaluenullablesnaptrade_clienttypenotional_value_nullablepy"></a>

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`ManualTradeForm`](./snaptrade_client/type/manual_trade_form.py)
#### 🔄 Return<a id="🔄-return"></a>

[`ManualTradeAndImpact`](./snaptrade_client/type/manual_trade_and_impact.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/trade/impact` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.trading.get_user_account_quotes`<a id="snaptradetradingget_user_account_quotes"></a>

Get symbol quotes

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
get_user_account_quotes_response = snaptrade.trading.get_user_account_quotes(
    user_id="John.doe@snaptrade.com",
    user_secret="USERSECRET123",
    symbols="symbols_example",
    account_id="917c8734-8470-4a3e-a18f-57c3f2ee6631",
    use_ticker=True,
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `str`<a id="user_id-str"></a>

##### user_secret: `str`<a id="user_secret-str"></a>

##### symbols: `str`<a id="symbols-str"></a>

List of universal_symbol_id or tickers to get quotes for.

##### account_id: `str`<a id="account_id-str"></a>

The ID of the account to get quotes.

##### use_ticker: `bool`<a id="use_ticker-bool"></a>

Should be set to True if providing tickers.

#### 🔄 Return<a id="🔄-return"></a>

[`SymbolsQuotes`](./snaptrade_client/type/symbols_quotes.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{accountId}/quotes` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.trading.place_force_order`<a id="snaptradetradingplace_force_order"></a>

Place a trade with NO validation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
place_force_order_response = snaptrade.trading.place_force_order(
    user_id="John.doe@snaptrade.com",
    user_secret="USERSECRET123",
    account_id="2bcd7cc3-e922-4976-bce1-9858296801c3",
    action="BUY",
    order_type="Limit",
    price=31.33,
    stop=31.33,
    time_in_force="FOK",
    units=3.14,
    universal_symbol_id="2bcd7cc3-e922-4976-bce1-9858296801c3",
    notional_value=100,
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `str`<a id="user_id-str"></a>

##### user_secret: `str`<a id="user_secret-str"></a>

##### account_id: `str`<a id="account_id-str"></a>

##### action: [`Action`](./snaptrade_client/type/action.py)<a id="action-actionsnaptrade_clienttypeactionpy"></a>

##### order_type: [`OrderType`](./snaptrade_client/type/order_type.py)<a id="order_type-ordertypesnaptrade_clienttypeorder_typepy"></a>

##### price: [`Price`](./snaptrade_client/type/price.py)<a id="price-pricesnaptrade_clienttypepricepy"></a>

##### stop: [`StopPrice`](./snaptrade_client/type/stop_price.py)<a id="stop-stoppricesnaptrade_clienttypestop_pricepy"></a>

##### time_in_force: [`TimeInForceStrict`](./snaptrade_client/type/time_in_force_strict.py)<a id="time_in_force-timeinforcestrictsnaptrade_clienttypetime_in_force_strictpy"></a>

##### units: [`UnitsNullable`](./snaptrade_client/type/units_nullable.py)<a id="units-unitsnullablesnaptrade_clienttypeunits_nullablepy"></a>

##### universal_symbol_id: `str`<a id="universal_symbol_id-str"></a>

##### notional_value: [`NotionalValueNullable`](./snaptrade_client/type/notional_value_nullable.py)<a id="notional_value-notionalvaluenullablesnaptrade_clienttypenotional_value_nullablepy"></a>

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`ManualTradeForm`](./snaptrade_client/type/manual_trade_form.py)
#### 🔄 Return<a id="🔄-return"></a>

[`AccountOrderRecord`](./snaptrade_client/type/account_order_record.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/trade/place` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.trading.place_oco_order`<a id="snaptradetradingplace_oco_order"></a>

Place a OCO (One Cancels Other) order

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
place_oco_order_response = snaptrade.trading.place_oco_order(
    user_id="John.doe@snaptrade.com",
    user_secret="USERSECRET123",
    first_trade_id=None,
    second_trade_id=None,
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `str`<a id="user_id-str"></a>

##### user_secret: `str`<a id="user_secret-str"></a>

##### first_trade_id: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./snaptrade_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="first_trade_id-unionbool-date-datetime-dict-float-int-list-str-nonesnaptrade_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

The ID of first trade object obtained from trade/impact endpoint

##### second_trade_id: [`Union[bool, date, datetime, dict, float, int, list, str, None]`](./snaptrade_client/type/typing_union_bool_date_datetime_dict_float_int_list_str_none.py)<a id="second_trade_id-unionbool-date-datetime-dict-float-int-list-str-nonesnaptrade_clienttypetyping_union_bool_date_datetime_dict_float_int_list_str_nonepy"></a>

The ID of second trade object obtained from trade/impact endpoint

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`Any`](./snaptrade_client/type/typing_any.py)
#### 🔄 Return<a id="🔄-return"></a>

[`AccountOrderRecord`](./snaptrade_client/type/account_order_record.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/trade/oco` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.trading.place_order`<a id="snaptradetradingplace_order"></a>

Place order

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
place_order_response = snaptrade.trading.place_order(
    trade_id="tradeId_example",
    user_id="John.doe@snaptrade.com",
    user_secret="USERSECRET123",
    wait_to_confirm=True,
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### trade_id: `str`<a id="trade_id-str"></a>

The ID of trade object obtained from trade/impact endpoint

##### user_id: `str`<a id="user_id-str"></a>

##### user_secret: `str`<a id="user_secret-str"></a>

##### wait_to_confirm: `Optional[bool]`<a id="wait_to_confirm-optionalbool"></a>

Optional, defaults to true. Determines if a wait is performed to check on order status. If false, latency will be reduced but orders returned will be more likely to be of status PENDING as we will not wait to check on the status before responding to the request

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`ValidatedTradeBody`](./snaptrade_client/type/validated_trade_body.py)
#### 🔄 Return<a id="🔄-return"></a>

[`AccountOrderRecord`](./snaptrade_client/type/account_order_record.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/trade/{tradeId}` `post`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.transactions_and_reporting.get_activities`<a id="snaptradetransactions_and_reportingget_activities"></a>

Returns activities (transactions) for a user. Specifying start and end date is highly recommended for better performance

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
get_activities_response = snaptrade.transactions_and_reporting.get_activities(
    user_id="John.doe@snaptrade.com",
    user_secret="USERSECRET123",
    start_date="2022-01-24",
    end_date="2022-01-24",
    accounts="917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2",
    brokerage_authorizations="917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2",
    type="DIVIDEND",
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `str`<a id="user_id-str"></a>

##### user_secret: `str`<a id="user_secret-str"></a>

##### start_date: `date`<a id="start_date-date"></a>

##### end_date: `date`<a id="end_date-date"></a>

##### accounts: `str`<a id="accounts-str"></a>

Optional comma seperated list of account IDs used to filter the request on specific accounts

##### brokerage_authorizations: `str`<a id="brokerage_authorizations-str"></a>

Optional comma seperated list of brokerage authorization IDs used to filter the request on only accounts that belong to those authorizations

##### type: `str`<a id="type-str"></a>

Optional comma seperated list of types to filter activities by. This is not an exhaustive list, if we fail to match to these types, we will return the raw description from the brokerage. Potential values include - DIVIDEND - BUY - SELL - CONTRIBUTION - WITHDRAWAL - EXTERNAL_ASSET_TRANSFER_IN - EXTERNAL_ASSET_TRANSFER_OUT - INTERNAL_CASH_TRANSFER_IN - INTERNAL_CASH_TRANSFER_OUT - INTERNAL_ASSET_TRANSFER_IN - INTERNAL_ASSET_TRANSFER_OUT - INTEREST - REBATE - GOV_GRANT - TAX - FEE - REI - FXT

#### 🔄 Return<a id="🔄-return"></a>

[`UniversalActivity`](./snaptrade_client/type/universal_activity.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/activities` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---

### `snaptrade.transactions_and_reporting.get_reporting_custom_range`<a id="snaptradetransactions_and_reportingget_reporting_custom_range"></a>

Returns performance information (contributions, dividends, rate of return, etc) for a specific timeframe. Please note that Total Equity Timeframe and Rate of Returns are experimental features. Please contact support@snaptrade.com if you notice any inconsistencies.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```python
get_reporting_custom_range_response = snaptrade.transactions_and_reporting.get_reporting_custom_range(
    start_date="2022-01-24",
    end_date="2022-01-24",
    user_id="John.doe@snaptrade.com",
    user_secret="USERSECRET123",
    accounts="917c8734-8470-4a3e-a18f-57c3f2ee6631,65e839a3-9103-4cfb-9b72-2071ef80c5f2",
    detailed=True,
    frequency="monthly",
)
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### start_date: `date`<a id="start_date-date"></a>

##### end_date: `date`<a id="end_date-date"></a>

##### user_id: `str`<a id="user_id-str"></a>

##### user_secret: `str`<a id="user_secret-str"></a>

##### accounts: `str`<a id="accounts-str"></a>

Optional comma seperated list of account IDs used to filter the request on specific accounts

##### detailed: `bool`<a id="detailed-bool"></a>

Optional, increases frequency of data points for the total value and contribution charts if set to true

##### frequency: `str`<a id="frequency-str"></a>

Optional frequency for the rate of return chart (defaults to monthly). Possible values are daily, weekly, monthly, quarterly, yearly.

#### 🔄 Return<a id="🔄-return"></a>

[`PerformanceCustom`](./snaptrade_client/type/performance_custom.py)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/performance/custom` `get`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This Python package is automatically generated by [Konfig](https://konfigthis.com)
