

# Brokerage


## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **UUID** |  |  [optional] |
|**name** | **String** | Full name of the brokerage. |  [optional] |
|**displayName** | **String** | A display-friendly name of the brokerage. |  [optional] |
|**description** | **String** |  |  [optional] |
|**awsS3LogoUrl** | **String** |  |  [optional] |
|**awsS3SquareLogoUrl** | **String** |  |  [optional] |
|**openUrl** | **String** |  |  [optional] |
|**slug** | **String** | A unique identifier for that brokerage. It is usually the name of the brokerage in capital letters and will never change. |  [optional] |
|**url** | **String** |  |  [optional] |
|**enabled** | **Boolean** |  |  [optional] |
|**maintenanceMode** | **Boolean** |  |  [optional] |
|**allowsFractionalUnits** | **Boolean** |  |  [optional] |
|**allowsTrading** | **Boolean** |  |  [optional] |
|**hasReporting** | **Boolean** |  |  [optional] |
|**isRealTimeConnection** | **Boolean** |  |  [optional] |
|**allowsTradingThroughSnaptradeApi** | **Boolean** |  |  [optional] |
|**isScrapingIntegration** | **Boolean** |  |  [optional] |
|**defaultCurrency** | **UUID** |  |  [optional] |
|**brokerageType** | [**BrokerageType**](BrokerageType.md) |  |  [optional] |
|**exchanges** | **List&lt;Object&gt;** | List of exchange ID supported by brokerage |  [optional] |



