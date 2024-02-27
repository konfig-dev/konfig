# SnapTrade::StrategyOrderRecord

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **strategy** | [**OptionStrategy**](OptionStrategy.md) |  | [optional] |
| **status** | [**StrategyOrderRecordStatus**](StrategyOrderRecordStatus.md) |  | [optional] |
| **filled_quantity** | **Float** |  | [optional] |
| **open_quantity** | **Float** |  | [optional] |
| **closed_quantity** | **Float** |  | [optional] |
| **order_type** | [**OrderType**](OrderType.md) | Order Type | [optional] |
| **time_in_force** | **String** | Trade time in force examples:   * FOK - Fill Or Kill   * Day - Day   * GTC - Good Til Canceled   * GTD - Good Til Date  | [optional] |
| **limit_price** | **Float** | Trade Price if limit or stop limit order | [optional] |
| **execution_price** | **Float** | Trade Price if limit or stop limit order | [optional] |
| **time_placed** | **String** | Time | [optional] |
| **time_updated** | **String** | Time | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::StrategyOrderRecord.new(
  strategy: null,
  status: null,
  filled_quantity: 10,
  open_quantity: 10,
  closed_quantity: 10,
  order_type: null,
  time_in_force: null,
  limit_price: 31.33,
  execution_price: 31.33,
  time_placed: 2022-01-21T20:11:19.217Z,
  time_updated: 2022-01-21T20:11:19.217Z
)
```

