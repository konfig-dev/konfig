# SnapTrade::AccountOrderRecord

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **brokerage_order_id** | **String** | Order id returned by brokerage | [optional] |
| **status** | [**AccountOrderRecordStatus**](AccountOrderRecordStatus.md) |  | [optional] |
| **symbol** | **String** |  | [optional] |
| **universal_symbol** | [**UniversalSymbol**](UniversalSymbol.md) |  | [optional] |
| **option_symbol** | [**OptionsSymbol**](OptionsSymbol.md) |  | [optional] |
| **action** | [**Action**](Action.md) |  | [optional] |
| **total_quantity** | **Float** | Trade Units. Cannot work with notional value. | [optional] |
| **open_quantity** | **Float** | Trade Units | [optional] |
| **canceled_quantity** | **Float** | Trade Units | [optional] |
| **filled_quantity** | **Float** | Trade Units | [optional] |
| **execution_price** | **Float** | Trade Price if limit or stop limit order | [optional] |
| **limit_price** | **Float** | Trade Price if limit or stop limit order | [optional] |
| **stop_price** | **Float** | Stop Price. If stop loss or stop limit order, the price to trigger the stop | [optional] |
| **order_type** | [**OrderType**](OrderType.md) |  | [optional] |
| **time_in_force** | **String** | Trade time in force examples:   * FOK - Fill Or Kill   * Day - Day   * GTC - Good Til Canceled   * GTD - Good Til Date  | [optional] |
| **time_placed** | **String** | Time | [optional] |
| **time_updated** | **String** | Time | [optional] |
| **expiry_date** | **String** | Time | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::AccountOrderRecord.new(
  brokerage_order_id: null,
  status: null,
  symbol: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  universal_symbol: null,
  option_symbol: null,
  action: null,
  total_quantity: null,
  open_quantity: null,
  canceled_quantity: null,
  filled_quantity: null,
  execution_price: 31.33,
  limit_price: 31.33,
  stop_price: 31.33,
  order_type: null,
  time_in_force: null,
  time_placed: 2022-01-21T20:11:19.217Z,
  time_updated: 2022-01-21T20:11:19.217Z,
  expiry_date: 2022-01-21T20:11:19.217Z
)
```

