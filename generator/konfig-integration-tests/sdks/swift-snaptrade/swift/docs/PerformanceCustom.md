# PerformanceCustom

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalEquityTimeframe** | [PastValue] |  | [optional] 
**contributions** | [**NetContributions**](NetContributions.md) |  | [optional] 
**contributionTimeframe** | [PastValue] |  | [optional] 
**contributionTimeframeCumulative** | [PastValue] |  | [optional] 
**withdrawalTimeframe** | [PastValue] |  | [optional] 
**contributionStreak** | **Double** | Current streak of cosecutive months where contributions were made | [optional] 
**contributionMonthsContributed** | **Double** | Number of months in the timeframe with contributions | [optional] 
**contributionTotalMonths** | **Double** | Total months in timeframe | [optional] 
**dividends** | [NetDividend] |  | [optional] 
**dividendIncome** | **Double** | Total dividends received over the timeframe | [optional] 
**monthlyDividends** | **Double** | Average dividends received per month over the timeframe | [optional] 
**badTickers** | **[String]** | list of tickers which may not be supported or may not have accurate price data | [optional] 
**dividendTimeline** | [MonthlyDividends] |  | [optional] 
**commissions** | **Double** | commissions incurred during the timeframe | [optional] 
**forexFees** | **Double** | forex fees incurred during the timeframe | [optional] 
**fees** | **Double** | other fees incurred during the timeframe | [optional] 
**rateOfReturn** | **Double** | The return rate over the timeframe. Annualized if timeframe is longer than 1 year | [optional] 
**returnRateTimeframe** | [SubPeriodReturnRate] |  | [optional] 
**detailedMode** | **Bool** | Whether the user has detailed mode enabled (more frequent data points for totalEquity and contribution timeframes) | [optional] 

[[Back to Model list]](../README.md#models) [[Back to API list]](../README.md#api-endpoints) [[Back to README]](../README.md)


