# SnapTrade::SnapTradeLoginUserRequestBody

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **broker** | **String** | Slug of the brokerage to connect the user to | [optional] |
| **immediate_redirect** | **Boolean** | When set to True, user will be redirected back to the partner&#39;s site instead of the connection portal | [optional] |
| **custom_redirect** | **String** | URL to redirect the user to after the user connects their brokerage account | [optional] |
| **reconnect** | **String** | The UUID of the brokerage connection to be reconnected. This parameter should be left empty unless you are reconnecting a disabled connection. See ‘Reconnecting Accounts’ for more information. | [optional] |
| **connection_type** | [**ConnectionType**](ConnectionType.md) | Sets whether the connection should be read or trade | [optional] |
| **connection_portal_version** | [**ConnectionPortalVersion**](ConnectionPortalVersion.md) | Sets the version of the connection portal to render, with a default to &#39;v2&#39; | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::SnapTradeLoginUserRequestBody.new(
  broker: ALPACA,
  immediate_redirect: true,
  custom_redirect: https://snaptrade.com,
  reconnect: 8b5f262d-4bb9-365d-888a-202bd3b15fa1,
  connection_type: null,
  connection_portal_version: null
)
```

