# SnapTrade::USExchange

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **code** | **String** |  | [optional] |
| **mic_code** | **String** |  | [optional] |
| **name** | **String** |  | [optional] |
| **timezone** | **String** |  | [optional] |
| **start_time** | **String** |  | [optional] |
| **close_time** | **String** |  | [optional] |
| **suffix** | **String** |  | [optional] |
| **allows_cryptocurrency_symbols** | **Boolean** |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::USExchange.new(
  id: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  code: ARCX,
  mic_code: ARCA,
  name: NYSE ARCA,
  timezone: America/New_York,
  start_time: 09:30:00,
  close_time: 57600,
  suffix: None,
  allows_cryptocurrency_symbols: false
)
```

