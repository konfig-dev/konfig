# SnapTrade::EncryptedResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **encrypted_shared_key** | **String** |  | [optional] |
| **encrypted_message_data** | [**EncryptedResponseEncryptedMessageData**](EncryptedResponseEncryptedMessageData.md) |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::EncryptedResponse.new(
  encrypted_shared_key: 5UEaY9QGzcNTr8y2jGDUI79jY1OdfK9x,
  encrypted_message_data: null
)
```

