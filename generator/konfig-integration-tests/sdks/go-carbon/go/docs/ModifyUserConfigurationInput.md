# ModifyUserConfigurationInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConfigurationKeyName** | **string** |  | 
**Value** | **map[string]interface{}** |  | 

## Methods

### NewModifyUserConfigurationInput

`func NewModifyUserConfigurationInput(configurationKeyName string, value map[string]interface{}, ) *ModifyUserConfigurationInput`

NewModifyUserConfigurationInput instantiates a new ModifyUserConfigurationInput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModifyUserConfigurationInputWithDefaults

`func NewModifyUserConfigurationInputWithDefaults() *ModifyUserConfigurationInput`

NewModifyUserConfigurationInputWithDefaults instantiates a new ModifyUserConfigurationInput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfigurationKeyName

`func (o *ModifyUserConfigurationInput) GetConfigurationKeyName() string`

GetConfigurationKeyName returns the ConfigurationKeyName field if non-nil, zero value otherwise.

### GetConfigurationKeyNameOk

`func (o *ModifyUserConfigurationInput) GetConfigurationKeyNameOk() (*string, bool)`

GetConfigurationKeyNameOk returns a tuple with the ConfigurationKeyName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfigurationKeyName

`func (o *ModifyUserConfigurationInput) SetConfigurationKeyName(v string)`

SetConfigurationKeyName sets ConfigurationKeyName field to given value.


### GetValue

`func (o *ModifyUserConfigurationInput) GetValue() map[string]interface{}`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *ModifyUserConfigurationInput) GetValueOk() (*map[string]interface{}, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *ModifyUserConfigurationInput) SetValue(v map[string]interface{})`

SetValue sets Value field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


