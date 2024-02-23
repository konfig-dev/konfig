# SnapTrade::SubPeriodReturnRate

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **period_start** | **Date** | Date used to specify timeframe for a reporting call (in YYYY-MM-DD format) | [optional] |
| **period_end** | **Date** | Date used to specify timeframe for a reporting call (in YYYY-MM-DD format) | [optional] |
| **rate_of_return** | **Float** | The return rate for the given period | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::SubPeriodReturnRate.new(
  period_start: Sun Jan 23 16:00:00 PST 2022,
  period_end: Sun Jan 23 16:00:00 PST 2022,
  rate_of_return: 0.012312367452
)
```

