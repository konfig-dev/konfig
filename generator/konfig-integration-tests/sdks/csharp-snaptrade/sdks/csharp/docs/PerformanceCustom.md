# SnapTrade.Net.Model.PerformanceCustom
Performance Custom Response Object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalEquityTimeframe** | [**List&lt;PastValue&gt;**](PastValue.md) |  | [optional] 
**Contributions** | [**NetContributions**](NetContributions.md) |  | [optional] 
**ContributionTimeframe** | [**List&lt;PastValue&gt;**](PastValue.md) |  | [optional] 
**ContributionTimeframeCumulative** | [**List&lt;PastValue&gt;**](PastValue.md) |  | [optional] 
**WithdrawalTimeframe** | [**List&lt;PastValue&gt;**](PastValue.md) |  | [optional] 
**ContributionStreak** | **double?** | Current streak of cosecutive months where contributions were made | [optional] 
**ContributionMonthsContributed** | **double?** | Number of months in the timeframe with contributions | [optional] 
**ContributionTotalMonths** | **double?** | Total months in timeframe | [optional] 
**Dividends** | [**List&lt;NetDividend&gt;**](NetDividend.md) |  | [optional] 
**DividendIncome** | **double?** | Total dividends received over the timeframe | [optional] 
**MonthlyDividends** | **double?** | Average dividends received per month over the timeframe | [optional] 
**BadTickers** | **List&lt;string&gt;** | list of tickers which may not be supported or may not have accurate price data | [optional] 
**DividendTimeline** | [**List&lt;MonthlyDividends&gt;**](MonthlyDividends.md) |  | [optional] 
**Commissions** | **double?** | commissions incurred during the timeframe | [optional] 
**ForexFees** | **double?** | forex fees incurred during the timeframe | [optional] 
**Fees** | **double?** | other fees incurred during the timeframe | [optional] 
**RateOfReturn** | **double?** | The return rate over the timeframe. Annualized if timeframe is longer than 1 year | [optional] 
**ReturnRateTimeframe** | [**List&lt;SubPeriodReturnRate&gt;**](SubPeriodReturnRate.md) |  | [optional] 
**DetailedMode** | **bool** | Whether the user has detailed mode enabled (more frequent data points for totalEquity and contribution timeframes) | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

