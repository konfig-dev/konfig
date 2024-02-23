# SnapTrade::UserSettings

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **email** | **String** |  | [optional] |
| **name** | **String** |  | [optional] |
| **receive_cash_notification** | **Boolean** |  | [optional] |
| **receive_drift_notification** | **Boolean** |  | [optional] |
| **user_trial_activated** | **Boolean** |  | [optional] |
| **activated_trial_date** | **String** |  | [optional] |
| **demo** | **Boolean** |  | [optional] |
| **api_enabled** | **Boolean** |  | [optional] |
| **drift_threshold** | **Float** |  | [optional] |
| **preferred_currency** | [**Currency**](Currency.md) |  | [optional] |

## Example

```ruby
require 'snaptrade'

instance = SnapTrade::UserSettings.new(
  email: ops@snaptrade.com,
  name: James Bond,
  receive_cash_notification: true,
  receive_drift_notification: true,
  user_trial_activated: true,
  activated_trial_date: 2017-07-17T15:13:07.177712+00:00,
  demo: false,
  api_enabled: false,
  drift_threshold: 95,
  preferred_currency: null
)
```

