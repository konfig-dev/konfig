# SnapTrade::UniversalActivity

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **account** | [**AccountSimple**](AccountSimple.md) |  | [optional] |
| **amount** | **Float** |  | [optional] |
| **currency** | [**Currency**](Currency.md) |  | [optional] |
| **description** | **String** |  | [optional] |
| **fee** | **Float** |  | [optional] |
| **fx_rate** | **Float** | The forex conversion rate involved in the transaction if provided by the brokerage. Used in cases where securities of one currency are purchased in a different currency, and the forex conversion is automatic. In those cases, price, amount and fee will be in the top level currency (activity -&gt; currency) | [optional] |
| **institution** | **String** |  | [optional] |
| **option_type** | **String** | If an option transaction, then it&#39;s type (BUY_TO_OPEN, SELL_TO_CLOSE, etc), otherwise empty string | [optional] |
| **price** | **Float** |  | [optional] |
| **settlement_date** | **String** |  | [optional] |
| **external_reference_id** | **String** | Reference ID from brokerage used to identify related transactions. For example if an order comprises of several transactions (buy, fee, fx), they can be grouped if they share the same external_reference_id | [optional] |
| **symbol** | [**Symbol**](Symbol.md) |  | [optional] |
| **option_symbol** | [**OptionsSymbol**](OptionsSymbol.md) |  | [optional] |
| **trade_date** | **String** |  | [optional] |
| **type** | **String** | Potential values include (but are not limited to) - DIVIDEND - BUY - SELL - CONTRIBUTION - WITHDRAWAL - EXTERNAL_ASSET_TRANSFER_IN - EXTERNAL_ASSET_TRANSFER_OUT - INTERNAL_CASH_TRANSFER_IN - INTERNAL_CASH_TRANSFER_OUT - INTERNAL_ASSET_TRANSFER_IN - INTERNAL_ASSET_TRANSFER_OUT - INTEREST - REBATE - GOV_GRANT - TAX - FEE - REI - FXT | [optional] |
| **units** | **Float** | Usually but not necessarily an integer | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::UniversalActivity.new(
  id: 2f7dc9b3-5c33-4668-3440-2b31e056ebe6,
  account: null,
  amount: 263.82,
  currency: null,
  description: WALT DISNEY UNIT DIST ON 21 SHS REC 12/31/21 PAY 01/06/22,
  fee: 0,
  fx_rate: 1.032,
  institution: SnapTrade Investr,
  option_type: BUY_TO_OPEN,
  price: 0.4,
  settlement_date: 2022-01-06T05:00:00.000Z,
  external_reference_id: 2f7dc9b3-5c33-4668-3440-2b31e056ebe6,
  symbol: null,
  option_symbol: null,
  trade_date: 2022-01-06T05:00:00.000Z,
  type: null,
  units: 5
)
```

