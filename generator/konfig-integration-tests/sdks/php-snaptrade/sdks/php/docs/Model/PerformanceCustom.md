# # PerformanceCustom

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_equity_timeframe** | [**\SnapTrade\Model\PastValue[]**](PastValue.md) |  | [optional]
**contributions** | [**\SnapTrade\Model\NetContributions**](NetContributions.md) |  | [optional]
**contribution_timeframe** | [**\SnapTrade\Model\PastValue[]**](PastValue.md) |  | [optional]
**contribution_timeframe_cumulative** | [**\SnapTrade\Model\PastValue[]**](PastValue.md) |  | [optional]
**withdrawal_timeframe** | [**\SnapTrade\Model\PastValue[]**](PastValue.md) |  | [optional]
**contribution_streak** | **float** | Current streak of cosecutive months where contributions were made | [optional]
**contribution_months_contributed** | **float** | Number of months in the timeframe with contributions | [optional]
**contribution_total_months** | **float** | Total months in timeframe | [optional]
**dividends** | [**\SnapTrade\Model\NetDividend[]**](NetDividend.md) |  | [optional]
**dividend_income** | **float** | Total dividends received over the timeframe | [optional]
**monthly_dividends** | **float** | Average dividends received per month over the timeframe | [optional]
**bad_tickers** | **string[]** | list of tickers which may not be supported or may not have accurate price data | [optional]
**dividend_timeline** | [**\SnapTrade\Model\MonthlyDividends[]**](MonthlyDividends.md) |  | [optional]
**commissions** | **float** | commissions incurred during the timeframe | [optional]
**forex_fees** | **float** | forex fees incurred during the timeframe | [optional]
**fees** | **float** | other fees incurred during the timeframe | [optional]
**rate_of_return** | **float** | The return rate over the timeframe. Annualized if timeframe is longer than 1 year | [optional]
**return_rate_timeframe** | [**\SnapTrade\Model\SubPeriodReturnRate[]**](SubPeriodReturnRate.md) |  | [optional]
**detailed_mode** | **bool** | Whether the user has detailed mode enabled (more frequent data points for totalEquity and contribution timeframes) | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
