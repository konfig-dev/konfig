# Recommended endpoints to get started

# Holdings

:api[AccountInformation_getUserHoldings]

Used to return holdings for a specific account a user has connected in the following format:

```Text JSON
{
  "account": account info,
  "balances": balance info,
  "positions": position info,
  "option_positions": option position info,
  "orders": recent order info,
  "errors": error encountered if any,
  "total_value": total value of the account,
}
```

Use for: Fetch Account Metadata, Positions, Balances and Orders with one API call.

Note that this endpoint can provide a slower response compared to calling only what you need individually. If looking to instead fetch only Positions, Balances or Orders separately, you can split up the calls with the endpoints listed below. These endpoints are meant to be used independently and don’t require to call the holdings endpoint in addition to them. The information returned from the holdings endpoint is also available in these endpoints.


:api[AccountInformation_listUserAccounts]

Returns a list of all the accounts a user has connected as well as the associated Metadata.

Use for: Quickest way to get info on that brokerage accounts a user has access to.


:api[AccountInformation_getUserAccountBalance]

Returns a list of all cash balances associated with the account id supplied, as well as what currency the balance is in.

Use for: Fetching only the cash balances in a user’s account.


:api[AccountInformation_getUserAccountPositions]

Returns a list of all positions associated with the account id supplied, as well as information on the security (current price, ticker, exchange, average purchase price, etc)

Use for: Quickest way to see what positions a user's account currently has.


# Orders, Transactions, Activities

:api[AccountInformation_getUserAccountOrders]

Returns a list of recent orders (buys, sells) from the brokerage

Pros:

- Implemented for all brokerages
- Realtime data 
- Includes all orders (not just executed orders)
- Has timestamps in addition to the date

Cons:

- Limited history (brokerage dependent)

:api[TransactionsAndReporting_getActivities]

Returns a list of transactions/activities for the given user. Activities will include at minimum buys, sells, dividends, contributions, withdrawals. Some brokerages will also provide transactions for things like forex transactions, share splits, and more.

Pros:

- Includes all types of transactions, not just trades
- History goes all the way back to the date the account was opened

Cons:

- Only includes executed trades
- Gets updated end of day
- Not all brokerages support this feature
- Some brokerages only include date, not time of transaction

Tips:

- Syncing may not be instant upon initial brokerage connection for some brokerages, make use of the ACCOUNT_TRANSACTIONS_INITIAL_UPDATE webhook to be notified exactly when all transactions have been loaded for an account. See [our docs on webhooks](/docs/webhooks) for more information.
