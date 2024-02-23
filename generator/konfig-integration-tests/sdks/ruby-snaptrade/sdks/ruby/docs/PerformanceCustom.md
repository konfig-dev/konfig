# SnapTrade::PerformanceCustom

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **total_equity_timeframe** | [**Array&lt;PastValue&gt;**](PastValue.md) |  | [optional] |
| **contributions** | [**NetContributions**](NetContributions.md) |  | [optional] |
| **contribution_timeframe** | [**Array&lt;PastValue&gt;**](PastValue.md) |  | [optional] |
| **contribution_timeframe_cumulative** | [**Array&lt;PastValue&gt;**](PastValue.md) |  | [optional] |
| **withdrawal_timeframe** | [**Array&lt;PastValue&gt;**](PastValue.md) |  | [optional] |
| **contribution_streak** | **Float** | Current streak of cosecutive months where contributions were made | [optional] |
| **contribution_months_contributed** | **Float** | Number of months in the timeframe with contributions | [optional] |
| **contribution_total_months** | **Float** | Total months in timeframe | [optional] |
| **dividends** | [**Array&lt;NetDividend&gt;**](NetDividend.md) |  | [optional] |
| **dividend_income** | **Float** | Total dividends received over the timeframe | [optional] |
| **monthly_dividends** | **Float** | Average dividends received per month over the timeframe | [optional] |
| **bad_tickers** | **Array&lt;String&gt;** | list of tickers which may not be supported or may not have accurate price data | [optional] |
| **dividend_timeline** | [**Array&lt;MonthlyDividends&gt;**](MonthlyDividends.md) |  | [optional] |
| **commissions** | **Float** | commissions incurred during the timeframe | [optional] |
| **forex_fees** | **Float** | forex fees incurred during the timeframe | [optional] |
| **fees** | **Float** | other fees incurred during the timeframe | [optional] |
| **rate_of_return** | **Float** | The return rate over the timeframe. Annualized if timeframe is longer than 1 year | [optional] |
| **return_rate_timeframe** | [**Array&lt;SubPeriodReturnRate&gt;**](SubPeriodReturnRate.md) |  | [optional] |
| **detailed_mode** | **Boolean** | Whether the user has detailed mode enabled (more frequent data points for totalEquity and contribution timeframes) | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::PerformanceCustom.new(
  total_equity_timeframe: null,
  contributions: null,
  contribution_timeframe: null,
  contribution_timeframe_cumulative: null,
  withdrawal_timeframe: null,
  contribution_streak: 5,
  contribution_months_contributed: 10,
  contribution_total_months: 13,
  dividends: null,
  dividend_income: 135.97,
  monthly_dividends: 26.37,
  bad_tickers: null,
  dividend_timeline: null,
  commissions: 3.26,
  forex_fees: 5.26,
  fees: 2.72,
  rate_of_return: 0.082312367452,
  return_rate_timeframe: null,
  detailed_mode: null
)
```

