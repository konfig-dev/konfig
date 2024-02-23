# SnapTrade::StrategyOrderPlaceOrdersInner

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **Integer** |  | [optional] |
| **symbol** | **String** |  | [optional] |
| **symbol_id** | **Integer** |  | [optional] |
| **total_quantity** | **Integer** |  | [optional] |
| **open_quantity** | **Integer** |  | [optional] |
| **filled_quantity** | **Integer** |  | [optional] |
| **canceled_quantity** | **Integer** |  | [optional] |
| **side** | **String** |  | [optional] |
| **order_type** | **String** |  | [optional] |
| **limit_price** | **String** |  | [optional] |
| **stop_price** | **String** |  | [optional] |
| **is_all_or_none** | **Boolean** |  | [optional] |
| **is_anonymous** | **Boolean** |  | [optional] |
| **iceberg_quantity** | **String** |  | [optional] |
| **min_quantity** | **String** |  | [optional] |
| **avg_exec_price** | **Integer** |  | [optional] |
| **last_exec_price** | **String** |  | [optional] |
| **source** | **String** |  | [optional] |
| **time_in_force** | **String** |  | [optional] |
| **gtd_date** | **String** |  | [optional] |
| **state** | **String** |  | [optional] |
| **rejection_reason** | **String** |  | [optional] |
| **chain_id** | **Integer** |  | [optional] |
| **creation_time** | **String** |  | [optional] |
| **update_time** | **String** |  | [optional] |
| **notes** | **String** |  | [optional] |
| **primary_route** | **String** |  | [optional] |
| **secondary_route** | **String** |  | [optional] |
| **order_route** | **String** |  | [optional] |
| **venue_holding_order** | **String** |  | [optional] |
| **comission_charged** | **Integer** |  | [optional] |
| **exchange_order_id** | **String** |  | [optional] |
| **is_significant_share_holder** | **Boolean** |  | [optional] |
| **is_insider** | **Boolean** |  | [optional] |
| **is_limit_offset_in_dollar** | **Boolean** |  | [optional] |
| **user_id** | **Integer** |  | [optional] |
| **placement_commission** | **String** |  | [optional] |
| **legs** | [**Array&lt;StrategyOrderPlaceOrdersInnerLegsInner&gt;**](StrategyOrderPlaceOrdersInnerLegsInner.md) |  | [optional] |
| **strategy_type** | **String** |  | [optional] |
| **trigger_stop_price** | **String** |  | [optional] |
| **order_group_id** | **Integer** |  | [optional] |
| **order_class** | **String** |  | [optional] |
| **is_cross_zero** | **Boolean** |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::StrategyOrderPlaceOrdersInner.new(
  id: 1069605761,
  symbol: AC.TO,
  symbol_id: 7960447,
  total_quantity: 1,
  open_quantity: 1,
  filled_quantity: 0,
  canceled_quantity: 0,
  side: Buy,
  order_type: Market,
  limit_price: null,
  stop_price: null,
  is_all_or_none: null,
  is_anonymous: null,
  iceberg_quantity: null,
  min_quantity: null,
  avg_exec_price: 0,
  last_exec_price: null,
  source: TradingAPI,
  time_in_force: Day,
  gtd_date: null,
  state: Pending,
  rejection_reason: None,
  chain_id: 1069605761,
  creation_time: 2022-07-19T19:53:47.915Z,
  update_time: 2022-07-19T19:53:47.939Z,
  notes: None,
  primary_route: AUTO,
  secondary_route: AUTO,
  order_route: MX,
  venue_holding_order: None,
  comission_charged: 0,
  exchange_order_id: None,
  is_significant_share_holder: null,
  is_insider: null,
  is_limit_offset_in_dollar: null,
  user_id: 514603,
  placement_commission: null,
  legs: null,
  strategy_type: Strangle,
  trigger_stop_price: null,
  order_group_id: 0,
  order_class: null,
  is_cross_zero: null
)
```

