# SnapTrade::Model404FailedRequestResponse

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **default_detail** | **Object** |  | [optional] |
| **default_code** | **Object** |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::Model404FailedRequestResponse.new(
  default_detail: The requested resource does not exist.,
  default_code: 1011
)
```

