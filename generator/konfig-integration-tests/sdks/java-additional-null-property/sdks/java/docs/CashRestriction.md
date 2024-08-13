

# CashRestriction

Cash restriction rules that apply to this account when undergoing portfolio rebalance calculations.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**id** | **UUID** |  |  [optional] |
|**account** | **UUID** |  |  [optional] |
|**currency** | **UUID** |  |  [optional] |
|**type** | [**TypeEnum**](#TypeEnum) |  |  [optional] |
|**amount** | **Double** |  |  [optional] |



## Enum: TypeEnum

| Name | Value |
|---- | -----|
| ALLOCATE_MAX | &quot;ALLOCATE_MAX&quot; |
| RETAIN_MIN | &quot;RETAIN_MIN&quot; |



