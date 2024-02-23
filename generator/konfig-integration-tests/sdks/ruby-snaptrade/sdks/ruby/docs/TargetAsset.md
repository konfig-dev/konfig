# SnapTrade::TargetAsset

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional] |
| **symbol** | [**UniversalSymbol**](UniversalSymbol.md) |  | [optional] |
| **percent** | **Float** |  | [optional] |
| **is_supported** | **Boolean** |  | [optional] |
| **is_excluded** | **Boolean** |  | [optional] |
| **meta** | **Hash&lt;String, Object&gt;** |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::TargetAsset.new(
  id: 2bcd7cc3-e922-4976-bce1-9858296801c3,
  symbol: null,
  percent: 90,
  is_supported: true,
  is_excluded: true,
  meta: null
)
```

