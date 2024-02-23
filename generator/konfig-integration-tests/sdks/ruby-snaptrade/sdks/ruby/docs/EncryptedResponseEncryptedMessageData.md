# SnapTrade::EncryptedResponseEncryptedMessageData

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **encrypted_message** | **String** |  | [optional] |
| **tag** | **String** |  | [optional] |
| **nonce** | **String** |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::EncryptedResponseEncryptedMessageData.new(
  encrypted_message: 9Xy05vqZOfp0OpW5fLAaDw&#x3D;&#x3D;,
  tag: mWZPkpQh5ktbcz6N7cTRmQ&#x3D;&#x3D;,
  nonce: None
)
```

