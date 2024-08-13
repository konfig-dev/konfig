

# SnapTradeHoldingsAccountAccountId

A single brokerage account at a financial institution.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **UUID** | Unique identifier for the connected brokerage account. This is the UUID used to reference the account in SnapTrade. |  [optional] |
|**brokerageAuthorization** | **UUID** | Unique identifier for the connection (brokerage authorization). This is the UUID used to reference the connection in SnapTrade. |  [optional] |
|**portfolioGroup** | **UUID** | Portfolio Group ID. Portfolio Groups have been deprecated. Please contact support if you have a usecase for it. |  [optional] |
|**name** | **String** | A display name for the account. Either assigned by the user or by the financial institution itself. For certain institutions, SnapTrade appends the institution name to the account name for clarity. |  [optional] |
|**number** | **String** | The account number assigned by the financial institution. |  [optional] |
|**institutionName** | **String** | The name of the financial institution that holds the account. |  [optional] |
|**balance** | [**AccountBalanceNullable**](AccountBalanceNullable.md) |  |  [optional] |
|**meta** | **Map&lt;String, Object&gt;** | Additional information about the account, such as account type, status, etc. This information is specific to the financial institution and there&#39;s no standard format for this data. Please use at your own risk. |  [optional] |
|**cashRestrictions** | [**List&lt;CashRestriction&gt;**](CashRestriction.md) | This field is deprecated. |  [optional] |
|**createdDate** | **OffsetDateTime** | Timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format indicating when the account was created in SnapTrade. This is _not_ the account opening date at the financial institution. |  [optional] |



