# SnapTrade::Brokerage

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **name** | **String** |  | [optional] |
| **display_name** | **String** |  | [optional] |
| **description** | **String** |  | [optional] |
| **aws_s3_logo_url** | **String** |  | [optional] |
| **slug** | **String** |  | [optional] |
| **url** | **String** |  | [optional] |
| **enabled** | **Boolean** |  | [optional] |
| **maintenance_mode** | **Boolean** |  | [optional] |
| **allows_fractional_units** | **Boolean** |  | [optional] |
| **allows_trading** | **Boolean** |  | [optional] |
| **has_reporting** | **Boolean** |  | [optional] |
| **is_real_time_connection** | **Boolean** |  | [optional] |
| **allows_trading_through_snaptrade_api** | **Boolean** |  | [optional] |
| **is_scraping_integration** | **Boolean** |  | [optional] |
| **default_currency** | **String** |  | [optional] |
| **brokerage_type** | [**BrokerageType**](BrokerageType.md) |  | [optional] |
| **exchanges** | **Array&lt;Object&gt;** | List of exchange ID supported by brokerage | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::Brokerage.new(
  id: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  name: Questrade,
  display_name: Questrade,
  description: Questrade is an online brokerage firm and wealth management firm based in Canada. It is Canada&#39;s largest discount broker.,
  aws_s3_logo_url: https://www.snaptrade.com/questrade.logo,
  slug: QUESTRADE,
  url: https://www.questrade.com/,
  enabled: true,
  maintenance_mode: true,
  allows_fractional_units: true,
  allows_trading: true,
  has_reporting: true,
  is_real_time_connection: true,
  allows_trading_through_snaptrade_api: true,
  is_scraping_integration: true,
  default_currency: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  brokerage_type: null,
  exchanges: [&quot;2bcd7cc3-e922-4976-bce1-9858296801c3&quot;,&quot;4bcd8cc3-c122-4974-dc21-1858296801f4&quot;]
)
```

