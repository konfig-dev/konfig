# SnapTrade::NetContributions

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **date** | **Date** | Date used to specify timeframe for a reporting call (in YYYY-MM-DD format) | [optional] |
| **contributions** | **Float** |  | [optional] |
| **currency** | **String** |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::NetContributions.new(
  date: Sun Jan 23 16:00:00 PST 2022,
  contributions: 524.74,
  currency: CAD
)
```

