# DeleteFilesQueryInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FileIds** | Pointer to **[]int32** |  | [optional] 
**SyncStatuses** | Pointer to [**[]ExternalFileSyncStatuses**](ExternalFileSyncStatuses.md) |  | [optional] 
**DeleteNonSyncedOnly** | Pointer to **bool** |  | [optional] [default to false]
**SendWebhook** | Pointer to **bool** |  | [optional] [default to false]

## Methods

### NewDeleteFilesQueryInput

`func NewDeleteFilesQueryInput() *DeleteFilesQueryInput`

NewDeleteFilesQueryInput instantiates a new DeleteFilesQueryInput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeleteFilesQueryInputWithDefaults

`func NewDeleteFilesQueryInputWithDefaults() *DeleteFilesQueryInput`

NewDeleteFilesQueryInputWithDefaults instantiates a new DeleteFilesQueryInput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFileIds

`func (o *DeleteFilesQueryInput) GetFileIds() []int32`

GetFileIds returns the FileIds field if non-nil, zero value otherwise.

### GetFileIdsOk

`func (o *DeleteFilesQueryInput) GetFileIdsOk() (*[]int32, bool)`

GetFileIdsOk returns a tuple with the FileIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileIds

`func (o *DeleteFilesQueryInput) SetFileIds(v []int32)`

SetFileIds sets FileIds field to given value.

### HasFileIds

`func (o *DeleteFilesQueryInput) HasFileIds() bool`

HasFileIds returns a boolean if a field has been set.

### SetFileIdsNil

`func (o *DeleteFilesQueryInput) SetFileIdsNil(b bool)`

 SetFileIdsNil sets the value for FileIds to be an explicit nil

### UnsetFileIds
`func (o *DeleteFilesQueryInput) UnsetFileIds()`

UnsetFileIds ensures that no value is present for FileIds, not even an explicit nil
### GetSyncStatuses

`func (o *DeleteFilesQueryInput) GetSyncStatuses() []ExternalFileSyncStatuses`

GetSyncStatuses returns the SyncStatuses field if non-nil, zero value otherwise.

### GetSyncStatusesOk

`func (o *DeleteFilesQueryInput) GetSyncStatusesOk() (*[]ExternalFileSyncStatuses, bool)`

GetSyncStatusesOk returns a tuple with the SyncStatuses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSyncStatuses

`func (o *DeleteFilesQueryInput) SetSyncStatuses(v []ExternalFileSyncStatuses)`

SetSyncStatuses sets SyncStatuses field to given value.

### HasSyncStatuses

`func (o *DeleteFilesQueryInput) HasSyncStatuses() bool`

HasSyncStatuses returns a boolean if a field has been set.

### SetSyncStatusesNil

`func (o *DeleteFilesQueryInput) SetSyncStatusesNil(b bool)`

 SetSyncStatusesNil sets the value for SyncStatuses to be an explicit nil

### UnsetSyncStatuses
`func (o *DeleteFilesQueryInput) UnsetSyncStatuses()`

UnsetSyncStatuses ensures that no value is present for SyncStatuses, not even an explicit nil
### GetDeleteNonSyncedOnly

`func (o *DeleteFilesQueryInput) GetDeleteNonSyncedOnly() bool`

GetDeleteNonSyncedOnly returns the DeleteNonSyncedOnly field if non-nil, zero value otherwise.

### GetDeleteNonSyncedOnlyOk

`func (o *DeleteFilesQueryInput) GetDeleteNonSyncedOnlyOk() (*bool, bool)`

GetDeleteNonSyncedOnlyOk returns a tuple with the DeleteNonSyncedOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeleteNonSyncedOnly

`func (o *DeleteFilesQueryInput) SetDeleteNonSyncedOnly(v bool)`

SetDeleteNonSyncedOnly sets DeleteNonSyncedOnly field to given value.

### HasDeleteNonSyncedOnly

`func (o *DeleteFilesQueryInput) HasDeleteNonSyncedOnly() bool`

HasDeleteNonSyncedOnly returns a boolean if a field has been set.

### GetSendWebhook

`func (o *DeleteFilesQueryInput) GetSendWebhook() bool`

GetSendWebhook returns the SendWebhook field if non-nil, zero value otherwise.

### GetSendWebhookOk

`func (o *DeleteFilesQueryInput) GetSendWebhookOk() (*bool, bool)`

GetSendWebhookOk returns a tuple with the SendWebhook field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendWebhook

`func (o *DeleteFilesQueryInput) SetSendWebhook(v bool)`

SetSendWebhook sets SendWebhook field to given value.

### HasSendWebhook

`func (o *DeleteFilesQueryInput) HasSendWebhook() bool`

HasSendWebhook returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


