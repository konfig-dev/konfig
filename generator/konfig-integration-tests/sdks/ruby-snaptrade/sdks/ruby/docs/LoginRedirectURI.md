# SnapTrade::LoginRedirectURI

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **redirect_uri** | **Object** |  | [optional] |
| **session_id** | **String** |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::LoginRedirectURI.new(
  redirect_uri: https://app.snaptrade.com/snapTrade/redeemToken?token&#x3D;this$token1does2ntactu4allyexist&#x3D;&#x3D;&amp;clientId&#x3D;example,
  session_id: null
)
```

