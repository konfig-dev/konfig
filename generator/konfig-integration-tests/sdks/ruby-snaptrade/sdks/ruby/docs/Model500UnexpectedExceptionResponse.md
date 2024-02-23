# SnapTrade::Model500UnexpectedExceptionResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **detail** | **Object** |  | [optional] |
| **status_code** | **Object** |  | [optional] |
| **code** | **Object** |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::Model500UnexpectedExceptionResponse.new(
  detail: Encountered an unexpected exception.,
  status_code: 500,
  code: 1000
)
```

