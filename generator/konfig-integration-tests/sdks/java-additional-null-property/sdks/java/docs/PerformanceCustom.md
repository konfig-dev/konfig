

# PerformanceCustom

Performance Custom Response Object

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**totalEquityTimeframe** | [**List&lt;PastValue&gt;**](PastValue.md) |  |  [optional] |
|**contributions** | [**NetContributions**](NetContributions.md) |  |  [optional] |
|**contributionTimeframe** | [**List&lt;PastValue&gt;**](PastValue.md) |  |  [optional] |
|**contributionTimeframeCumulative** | [**List&lt;PastValue&gt;**](PastValue.md) |  |  [optional] |
|**withdrawalTimeframe** | [**List&lt;PastValue&gt;**](PastValue.md) |  |  [optional] |
|**contributionStreak** | **Double** | Current streak of cosecutive months where contributions were made |  [optional] |
|**contributionMonthsContributed** | **Double** | Number of months in the timeframe with contributions |  [optional] |
|**contributionTotalMonths** | **Double** | Total months in timeframe |  [optional] |
|**dividends** | [**List&lt;NetDividend&gt;**](NetDividend.md) |  |  [optional] |
|**dividendIncome** | **Double** | Total dividends received over the timeframe |  [optional] |
|**monthlyDividends** | **Double** | Average dividends received per month over the timeframe |  [optional] |
|**badTickers** | **List&lt;String&gt;** | list of tickers which may not be supported or may not have accurate price data |  [optional] |
|**dividendTimeline** | [**List&lt;MonthlyDividends&gt;**](MonthlyDividends.md) |  |  [optional] |
|**commissions** | **Double** | commissions incurred during the timeframe |  [optional] |
|**forexFees** | **Double** | forex fees incurred during the timeframe |  [optional] |
|**fees** | **Double** | other fees incurred during the timeframe |  [optional] |
|**rateOfReturn** | **Double** | The return rate over the timeframe. Annualized if timeframe is longer than 1 year |  [optional] |
|**returnRateTimeframe** | [**List&lt;SubPeriodReturnRate&gt;**](SubPeriodReturnRate.md) |  |  [optional] |
|**detailedMode** | **Boolean** | Whether the user has detailed mode enabled (more frequent data points for totalEquity and contribution timeframes) |  [optional] |



