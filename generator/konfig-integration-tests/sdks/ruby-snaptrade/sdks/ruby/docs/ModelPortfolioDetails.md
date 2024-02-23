# SnapTrade::ModelPortfolioDetails

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **model_portfolio** | [**ModelPortfolio**](ModelPortfolio.md) |  | [optional] |
| **model_portfolio_security** | [**Array&lt;ModelPortfolioSecurity&gt;**](ModelPortfolioSecurity.md) |  | [optional] |
| **model_portfolio_asset_class** | [**Array&lt;ModelPortfolioAssetClass&gt;**](ModelPortfolioAssetClass.md) |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::ModelPortfolioDetails.new(
  model_portfolio: null,
  model_portfolio_security: null,
  model_portfolio_asset_class: null
)
```

