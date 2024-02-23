# SnapTrade::Status

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **version** | **Integer** |  | [optional] |
| **timestamp** | **String** |  | [optional] |
| **online** | **Boolean** |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::Status.new(
  version: 151,
  timestamp: 2022-11-04T01:47:00.377Z,
  online: true
)
```

