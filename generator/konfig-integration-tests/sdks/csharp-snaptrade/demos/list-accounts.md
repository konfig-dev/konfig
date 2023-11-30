# Get Account Holdings for a User

### 1) Initialize a client with your clientId and consumerKey

You can get your `clientId` and `consumerKey` by contacting [api@snaptrade.com](mailto:api@snaptrade.com)

:::form

::input{name=SNAPTRADE_CLIENT_ID label="Client ID" placeholder="YOUR_CLIENT_ID" type="password"}

::input{name=SNAPTRADE_CONSUMER_KEY label="Consumer Key" placeholder="YOUR_CONSUMER_KEY" type="password"}

::input{name=USER_ID label="User ID" placeholder="YOUR_USER_ID" type="password"}

::input{name=USER_SECRET label="User Secret" placeholder="YOUR_USER_SECRET" type="password"}

```python
from snaptrade_client import SnapTrade
import json
import uuid
import os

snaptrade = SnapTrade(
consumer_key=SNAPTRADE_CONSUMER_KEY,
client_id=SNAPTRADE_CLIENT_ID,
)

print("Successfully initiated client")

user_id = USER_ID
user_secret = USER_SECRET

print("Initialized user_id and user_secret")
```

::button[Initialize SDK Client]

:::

### 2) List accounts

You can see the account IDs by calling `list_user_accounts`.

:::form

```python
accounts = snaptrade.account_information.list_user_accounts(
    user_id=user_id,
    user_secret=user_secret
)
print(json.dumps(accounts.body, indent=2))

for account in accounts.body:
    print("::SAVE[ACCOUNTS]/{}".format(account["id"]))
```

::button[List Accounts]

:::

### 3) Get account holdings data for a user

In order to retrieve user holdings for a specific account, you can call the
Holdings endpoint by passing the clientId, timestamp, userId and list of account
numbers (accounts) to filter the holdings. In the response, you should get an
array of objects containing each account holdings data.

:::form

::enum{name=ACCOUNT_ID label="Account ID" placeholder="ACCOUNT_ID" savedData=ACCOUNTS description="The ID of the account to pull holdings for. The available values are pulled from the 'List User Accounts' step."}

```python
holdings = snaptrade.account_information.get_user_holdings(
    account_id=ACCOUNT_ID,
    user_id=user_id,
    user_secret=user_secret
)
print(json.dumps(holdings.body, indent=2))
```

::button[Get Account Holdings]

:::
