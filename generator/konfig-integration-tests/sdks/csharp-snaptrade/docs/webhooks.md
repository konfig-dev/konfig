# Webhooks

The SnapTrade API can be configured to send you webhook notifications when certain events happen.

To get started with webhooks, contact your Customer Success Manager. They will need the URL of your webhook handler for webhook notifications to begin to be sent.

# Verifying Webhook Authenticity

You can verify the authenticity of any SnapTrade webhook by verifying the `webhookSecret` field contained in the body of any webhook.

Contact your customer success manager to get the correct value of this secret.

Aside from webhook secrets:

- SnapTrade supports custom webhook request headers (which are useful if your webhook handler is protected by Cloudflare)
- SnapTrade does not support IP whitelisting at this time

# Handling Undeliverable Webhooks

When your webhook handler responds to our requests with a status code that is not 200 or 201, we mark that webhook as undelivered in our system.

We will attempt to resend an undeliverable webhook notification with an exponential backoff (starting at 30 minutes) until it is either delivered successfully, or 10 retry attempts have been made.

# Webhook Types

The different webhook event types are outlined below.

## USER_REGISTERED

Created when a new user is successfully registered through the `/registerUser/` endpoint.

Example payload is below:

```json
{
  "webhookId": "dbaee13a-1184-4677-9741-b6845e60ee3a",
  "clientId": "phjBdpKfpN",
  "eventTimestamp": "2022-05-31T11:16:54.658533+00:00",
  "userId": "qQYISR9xcmR8ZtVHNgg1lbYgSQcxafPqPW0ZbE0yaA6ham6n54",
  "eventType": "USER_REGISTERED",
  "webhookSecret": "lgCQWztweEFcHvjdLhHc"
}
```

## CONNECTION_ATTEMPTED

Created when a user a user attempts to make a brokerage connection, will also report the result of the attempt.

Example payload is below:

```json
{
  "webhookId": "6594d898-7377-453b-989e-03545ebde8bf",
  "clientId": "kqLsLciREm",
  "eventTimestamp": "2022-05-31T11:17:17.804976+00:00",
  "userId": "TOD1ACWHxnO9cnpq9XgNmFaRwXRMRu2taaFPpvYi6ng3uD2UN9",
  "eventType": "CONNECTION_ATTEMPTED",
  "connectionAttemptedResult": "SUCCESS",
  "brokerageId": "c8153291-0761-43a8-8ed0-4642103c2cb8",
  "webhookSecret": "PajFGRsWwxgckkOZwteW"
}
```

Possible values for the `connectionAttemptedResult` field are:

- `SUCCESS`
- `AUTH_EXPIRED`
- `INVALID_AUTH_CODE`
- `AUTH_NOT_IN_PROGRESS`
- `DUPLICATE_AUTH`
- `DIFFERENT_ACCOUNT`
- `UNCAUGHT_ERROR`
- `INVALID_CREDENTIALS`
- `INVALID_MFA_CODE`
- `NO_DATA`
- `IBKR_CANADA`
- `LOG_FAILURE`

## CONNECTION_ADDED

Sent when a new brokerage connection is created using the SnapTrade connection portal.

Example payload is below.

```coffeescript JSON
{
  "webhookId": "7467e5e4-4b59-4514-9d04-d05dbc10dea9",
  "clientId": "cJEQQgtDIb",
  "eventTimestamp": "2022-05-31T11:13:37.269120+00:00",
  "userId": "oWbLZ3OWsO3Nt8DKJnYxM32wLLD6h6SVj0ywkDmypUlkWkqsI5",
  "eventType": "CONNECTION_ADDED",
  "brokerageId": "c8153291-0761-43a8-8ed0-4642103c2cb8",
  "brokerageAuthorizationId": "a0231bd2-9b77-4732-ba78-f9c6af6a1a62",
  "webhookSecret": "ZSDkaLCRJndeZGgeaJnV"
}
```

## CONNECTION_DELETED

Sent when a user deletes an existing connection using the SnapTrade connection portal.

Example payload is below:

```json
{
  "webhookId": "85a63984-6fb6-45fb-bc3b-18582a89ab3c",
  "clientId": "gxKWQEIXGS",
  "eventTimestamp": "2022-05-31T11:35:33.753881+00:00",
  "userId": "a053epCMsmII9goant5wdQH7CaT0M00HgQiRaxWnK0MncDUF2c",
  "eventType": "CONNECTION_DELETED",
  "brokerageId": "c8153291-0761-43a8-8ed0-4642103c2cb8",
  "brokerageAuthorizationId": "a0231bd2-9b77-4732-ba78-f9c6af6a1a62",
  "webhookSecret": "lbTycRhXwzVRJPovdNSN",
  "brokerageAuthorizationId": "183d507c-d531-4e83-8315-a5cc5bc9cbfd"
}
```

## CONNECTION_BROKEN

Sent when a user's connection is broken for some reason, usually an inability to handshake with the brokerage's API.

Example payload is below:

```json
{
  "webhookId": "434d23af-5f89-44f8-9415-5029557e64c7",
  "clientId": "yLNANjmwau",
  "eventTimestamp": "2022-05-31T11:37:50.590720+00:00",
  "userId": "DbjLqtPsj6G1MlDLtZaps4YhtckD0jWOuLQjl6GPW4FmpUa8eo",
  "eventType": "CONNECTION_BROKEN",
  "webhookSecret": "SCNsZYmJcuXRiznplDdL",
  "brokerageAuthorizationId": "dc90a844-367b-4120-8b56-21040bfa6525"
}
```

## CONNECTION_FIXED

Sent when a broken connection is fixed.

Example payload is below:

```json
{
  "webhookId": "ae73c055-2308-4de4-bf0e-d828bbac8c91",
  "clientId": "BVmifPEScc",
  "eventTimestamp": "2022-05-31T11:52:26.803063+00:00",
  "userId": "EKDO7W7YSWEZkOZUN5v1iMGF7ipEmOGjc6bMEm89y6vCrtnebH",
  "eventType": "CONNECTION_FIXED",
  "webhookSecret": "zNKlROkqSEXjXBxfTsAu",
  "brokerageAuthorizationId": "5e942e13-2b39-47b2-b524-858b9d9849ed"
}
```

## CONNECTION_UPDATED

Sent when a brokerage connection is updated.

Example payload is below:

```json
{
  "webhookId": "57a293e4-f7eb-49ad-92e2-80ac16e01af7",
  "clientId": "IZtBuuKXEA",
  "eventTimestamp": "2022-05-31T11:53:09.437310+00:00",
  "userId": "sXQQcRdQEmGSMizpv45gBlBANBeCWgEn9uSmLlEpa1YsZ7oAW8",
  "eventType": "CONNECTION_UPDATED",
  "webhookSecret": "oHdlCBoExKtosDtTLVDc",
  "brokerageAuthorizationId": "7ed55083-7128-46ff-9317-43cd788f43ff"
}
```

## CONNECTION_FAILED

Sent when a user’s attempt to connect to a brokerage has failed.

Example payload is below:

```json
{
  "webhookId": "57a293e4-f7eb-49ad-92e2-80ac16e01af7",
  "clientId": "IZtBuuKXEA",
  "eventTimestamp": "2022-05-31T11:53:09.437310+00:00",
  "userId": "sXQQcRdQEmGSMizpv45gBlBANBeCWgEn9uSmLlEpa1YsZ7oAW8",
  "eventType": "CONNECTION_FAILED",
  "webhookSecret": "oHdlCBoExKtosDtTLVDc"
}
```

## NEW_ACCOUNT_AVAILABLE

Created when a new account is detected through a brokerage connection.

Example payload is below:

```json
{
  "webhookId": "6fe03e8c-201a-4c3f-92d0-acb825fc89cf",
  "clientId": "SjWLDemQUF",
  "eventTimestamp": "2022-05-31T12:37:18.630476+00:00",
  "userId": "hmznAjmLezKPaSnLIiNQweSGsf7MIlEvm9dcTao3gwjgBtulLK",
  "eventType": "NEW_ACCOUNT_AVAILABLE",
  "webhookSecret": "HZRnYEhLPgwyUXitkJBd",
  "accountId": "ec20134b-72e7-4e72-9b4c-9c7ddd1c479c",
  "brokerageAuthorizationId": "795de4e6-260e-45b3-815b-8f601c4cf448"
}
```

## ACCOUNT_TRANSACTIONS_INITIAL_UPDATE

Created the first time that we collect transactions data from a brokerage account.

Example payload is below:

```json
{
  "webhookId": "aa7a7d5a-4a12-40df-a329-feedc738eee9",
  "clientId": "rmCZBUGAXP",
  "eventTimestamp": "2022-05-31T12:39:47.182403+00:00",
  "userId": "7jN22b2AWHMOqOeujjaiU5kKOM8iITt11ENcUMftx6LBg9GTn2",
  "eventType": "ACCOUNT_TRANSACTIONS_INITIAL_UPDATE",
  "webhookSecret": "gQNuZIBwPYUVAsXvCfOA",
  "accountId": "d9f55a48-5dc6-4100-acee-24e5dfd8ec26",
  "brokerageAuthorizationId": "d28affae-f918-4ecd-8128-e5438e861706"
}
```

## ACCOUNT_TRANSACTIONS_UPDATED

Created when account transactions are updated.

Example payload is below:

```json
{
  "webhookId": "4eb13e1c-5778-44c2-968d-813d81cb73a1",
  "clientId": "JELZRJPqui",
  "eventTimestamp": "2022-05-31T12:40:05.944481+00:00",
  "userId": "4XTxw0mZhffRCdrgPHBG1VqdklkVJdEz5Uor0hq29hwPYlLS7s",
  "eventType": "ACCOUNT_TRANSACTIONS_UPDATED",
  "webhookSecret": "DDAVBuPPGgqwADXgbcOE",
  "accountId": "6e30be12-4ab0-4ec0-8d4d-0dfdce509e36",
  "brokerageAuthorizationId": "8105b33e-3dd6-4189-b93e-31ccaa9d3b69"
}
```

## TRADES_PLACED

Gets sent when new trades are detected in a user's account.

We send 1 webhook regardless of how many new trades are identified in your account. So if we identify 1 trade in the account, we'll send 1 webhook; and if we identify 10 trades in the account, we also only send 1 webhook.

Please contact us in order to receive these webhooks as they are disabled by default.

Example payload is below:
```json
{
  "userId": "vAzgPrUHizYheZVi_WEALTHSIMPLETRADE_oiuzalkd",
  "clientId": "PARTNERAPP",
  "webookId": "311a13f3-3929-46dd-a70f-ade6aaefc100",
  "accountId": "45a2g56a-eef6-4904-a68e-d3f90c3e07c5",
  "eventType": "TRADES_PLACED",
  "webhookId": "311a13f3-3929-46dd-a70f-ade6aaefc100",
  "brokerageId": "905872ac-a7b1-4031-a31f-790cba1bfc94",
  "webhookSecret": "yfqvPlWrTFILBcjCERPh",
  "eventTimestamp": "2023-03-01T14:38:13.111991+00:00",
  "brokerageAuthorizationId": "6bb0ahb0-b8c8-4b59-8bf9-7841d7a89c63"
}
```
