# SnapTrade::AuthenticationLoginSnapTradeUser200Response

## Class instance methods

### `openapi_one_of`

Returns the list of classes defined in oneOf.

#### Example

```ruby
require 'snaptrade'

SnapTrade::AuthenticationLoginSnapTradeUser200Response.openapi_one_of
# =>
# [
#   :'EncryptedResponse',
#   :'LoginRedirectURI'
# ]
```

### build

Find the appropriate object from the `openapi_one_of` list and casts the data into it.

#### Example

```ruby
require 'snaptrade'

SnapTrade::AuthenticationLoginSnapTradeUser200Response.build(data)
# => #<EncryptedResponse:0x00007fdd4aab02a0>

SnapTrade::AuthenticationLoginSnapTradeUser200Response.build(data_that_doesnt_match)
# => nil
```

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | **Mixed** | data to be matched against the list of oneOf items |

#### Return type

- `EncryptedResponse`
- `LoginRedirectURI`
- `nil` (if no type matches)

