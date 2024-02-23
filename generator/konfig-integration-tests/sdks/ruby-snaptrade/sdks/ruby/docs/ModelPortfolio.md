# SnapTrade::ModelPortfolio

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **name** | **String** |  | [optional] |
| **model_type** | [**ModelType**](ModelType.md) |  | [optional][default to ModelType::NMINUS_1] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::ModelPortfolio.new(
  id: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  name: SnapTrade 5x Aggressive Growth Fund,
  model_type: null
)
```

