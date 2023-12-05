# SubscriptionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Active** | **bool** |  | 
**CallsPerSeconds** | Pointer to **int32** |  | [optional] 
**PlanName** | **string** |  | 
**UsageAssignedCalls** | Pointer to **int32** |  | [optional] 
**UsageRemainingCalls** | Pointer to **int32** |  | [optional] 
**HistoricalDays** | Pointer to **int32** |  | [optional] 

## Methods

### NewSubscriptionResponse

`func NewSubscriptionResponse(active bool, planName string, ) *SubscriptionResponse`

NewSubscriptionResponse instantiates a new SubscriptionResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubscriptionResponseWithDefaults

`func NewSubscriptionResponseWithDefaults() *SubscriptionResponse`

NewSubscriptionResponseWithDefaults instantiates a new SubscriptionResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActive

`func (o *SubscriptionResponse) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *SubscriptionResponse) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *SubscriptionResponse) SetActive(v bool)`

SetActive sets Active field to given value.


### GetCallsPerSeconds

`func (o *SubscriptionResponse) GetCallsPerSeconds() int32`

GetCallsPerSeconds returns the CallsPerSeconds field if non-nil, zero value otherwise.

### GetCallsPerSecondsOk

`func (o *SubscriptionResponse) GetCallsPerSecondsOk() (*int32, bool)`

GetCallsPerSecondsOk returns a tuple with the CallsPerSeconds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallsPerSeconds

`func (o *SubscriptionResponse) SetCallsPerSeconds(v int32)`

SetCallsPerSeconds sets CallsPerSeconds field to given value.

### HasCallsPerSeconds

`func (o *SubscriptionResponse) HasCallsPerSeconds() bool`

HasCallsPerSeconds returns a boolean if a field has been set.

### GetPlanName

`func (o *SubscriptionResponse) GetPlanName() string`

GetPlanName returns the PlanName field if non-nil, zero value otherwise.

### GetPlanNameOk

`func (o *SubscriptionResponse) GetPlanNameOk() (*string, bool)`

GetPlanNameOk returns a tuple with the PlanName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlanName

`func (o *SubscriptionResponse) SetPlanName(v string)`

SetPlanName sets PlanName field to given value.


### GetUsageAssignedCalls

`func (o *SubscriptionResponse) GetUsageAssignedCalls() int32`

GetUsageAssignedCalls returns the UsageAssignedCalls field if non-nil, zero value otherwise.

### GetUsageAssignedCallsOk

`func (o *SubscriptionResponse) GetUsageAssignedCallsOk() (*int32, bool)`

GetUsageAssignedCallsOk returns a tuple with the UsageAssignedCalls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsageAssignedCalls

`func (o *SubscriptionResponse) SetUsageAssignedCalls(v int32)`

SetUsageAssignedCalls sets UsageAssignedCalls field to given value.

### HasUsageAssignedCalls

`func (o *SubscriptionResponse) HasUsageAssignedCalls() bool`

HasUsageAssignedCalls returns a boolean if a field has been set.

### GetUsageRemainingCalls

`func (o *SubscriptionResponse) GetUsageRemainingCalls() int32`

GetUsageRemainingCalls returns the UsageRemainingCalls field if non-nil, zero value otherwise.

### GetUsageRemainingCallsOk

`func (o *SubscriptionResponse) GetUsageRemainingCallsOk() (*int32, bool)`

GetUsageRemainingCallsOk returns a tuple with the UsageRemainingCalls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsageRemainingCalls

`func (o *SubscriptionResponse) SetUsageRemainingCalls(v int32)`

SetUsageRemainingCalls sets UsageRemainingCalls field to given value.

### HasUsageRemainingCalls

`func (o *SubscriptionResponse) HasUsageRemainingCalls() bool`

HasUsageRemainingCalls returns a boolean if a field has been set.

### GetHistoricalDays

`func (o *SubscriptionResponse) GetHistoricalDays() int32`

GetHistoricalDays returns the HistoricalDays field if non-nil, zero value otherwise.

### GetHistoricalDaysOk

`func (o *SubscriptionResponse) GetHistoricalDaysOk() (*int32, bool)`

GetHistoricalDaysOk returns a tuple with the HistoricalDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHistoricalDays

`func (o *SubscriptionResponse) SetHistoricalDays(v int32)`

SetHistoricalDays sets HistoricalDays field to given value.

### HasHistoricalDays

`func (o *SubscriptionResponse) HasHistoricalDays() bool`

HasHistoricalDays returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


