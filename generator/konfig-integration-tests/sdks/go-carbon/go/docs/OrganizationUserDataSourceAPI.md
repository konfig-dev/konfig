# OrganizationUserDataSourceAPI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**DataSourceExternalId** | **NullableString** |  | 
**DataSourceType** | [**DataSourceType**](DataSourceType.md) |  | 
**SyncStatus** | [**DataSourceSyncStatuses**](DataSourceSyncStatuses.md) |  | 
**SourceItemsSyncedAt** | **NullableTime** |  | 
**OrganizationUserId** | **int32** |  | 
**OrganizationId** | **int32** |  | 
**OrganizationSuppliedUserId** | **string** |  | 
**RevokedAccess** | **bool** |  | 
**LastSyncedAt** | **time.Time** |  | 
**LastSyncAction** | [**DataSourceLastSyncActions**](DataSourceLastSyncActions.md) |  | 
**CreatedAt** | **time.Time** |  | 
**UpdatedAt** | **time.Time** |  | 

## Methods

### NewOrganizationUserDataSourceAPI

`func NewOrganizationUserDataSourceAPI(id int32, dataSourceExternalId NullableString, dataSourceType DataSourceType, syncStatus DataSourceSyncStatuses, sourceItemsSyncedAt NullableTime, organizationUserId int32, organizationId int32, organizationSuppliedUserId string, revokedAccess bool, lastSyncedAt time.Time, lastSyncAction DataSourceLastSyncActions, createdAt time.Time, updatedAt time.Time, ) *OrganizationUserDataSourceAPI`

NewOrganizationUserDataSourceAPI instantiates a new OrganizationUserDataSourceAPI object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrganizationUserDataSourceAPIWithDefaults

`func NewOrganizationUserDataSourceAPIWithDefaults() *OrganizationUserDataSourceAPI`

NewOrganizationUserDataSourceAPIWithDefaults instantiates a new OrganizationUserDataSourceAPI object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *OrganizationUserDataSourceAPI) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *OrganizationUserDataSourceAPI) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *OrganizationUserDataSourceAPI) SetId(v int32)`

SetId sets Id field to given value.


### GetDataSourceExternalId

`func (o *OrganizationUserDataSourceAPI) GetDataSourceExternalId() string`

GetDataSourceExternalId returns the DataSourceExternalId field if non-nil, zero value otherwise.

### GetDataSourceExternalIdOk

`func (o *OrganizationUserDataSourceAPI) GetDataSourceExternalIdOk() (*string, bool)`

GetDataSourceExternalIdOk returns a tuple with the DataSourceExternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataSourceExternalId

`func (o *OrganizationUserDataSourceAPI) SetDataSourceExternalId(v string)`

SetDataSourceExternalId sets DataSourceExternalId field to given value.


### SetDataSourceExternalIdNil

`func (o *OrganizationUserDataSourceAPI) SetDataSourceExternalIdNil(b bool)`

 SetDataSourceExternalIdNil sets the value for DataSourceExternalId to be an explicit nil

### UnsetDataSourceExternalId
`func (o *OrganizationUserDataSourceAPI) UnsetDataSourceExternalId()`

UnsetDataSourceExternalId ensures that no value is present for DataSourceExternalId, not even an explicit nil
### GetDataSourceType

`func (o *OrganizationUserDataSourceAPI) GetDataSourceType() DataSourceType`

GetDataSourceType returns the DataSourceType field if non-nil, zero value otherwise.

### GetDataSourceTypeOk

`func (o *OrganizationUserDataSourceAPI) GetDataSourceTypeOk() (*DataSourceType, bool)`

GetDataSourceTypeOk returns a tuple with the DataSourceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataSourceType

`func (o *OrganizationUserDataSourceAPI) SetDataSourceType(v DataSourceType)`

SetDataSourceType sets DataSourceType field to given value.


### GetSyncStatus

`func (o *OrganizationUserDataSourceAPI) GetSyncStatus() DataSourceSyncStatuses`

GetSyncStatus returns the SyncStatus field if non-nil, zero value otherwise.

### GetSyncStatusOk

`func (o *OrganizationUserDataSourceAPI) GetSyncStatusOk() (*DataSourceSyncStatuses, bool)`

GetSyncStatusOk returns a tuple with the SyncStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSyncStatus

`func (o *OrganizationUserDataSourceAPI) SetSyncStatus(v DataSourceSyncStatuses)`

SetSyncStatus sets SyncStatus field to given value.


### GetSourceItemsSyncedAt

`func (o *OrganizationUserDataSourceAPI) GetSourceItemsSyncedAt() time.Time`

GetSourceItemsSyncedAt returns the SourceItemsSyncedAt field if non-nil, zero value otherwise.

### GetSourceItemsSyncedAtOk

`func (o *OrganizationUserDataSourceAPI) GetSourceItemsSyncedAtOk() (*time.Time, bool)`

GetSourceItemsSyncedAtOk returns a tuple with the SourceItemsSyncedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceItemsSyncedAt

`func (o *OrganizationUserDataSourceAPI) SetSourceItemsSyncedAt(v time.Time)`

SetSourceItemsSyncedAt sets SourceItemsSyncedAt field to given value.


### SetSourceItemsSyncedAtNil

`func (o *OrganizationUserDataSourceAPI) SetSourceItemsSyncedAtNil(b bool)`

 SetSourceItemsSyncedAtNil sets the value for SourceItemsSyncedAt to be an explicit nil

### UnsetSourceItemsSyncedAt
`func (o *OrganizationUserDataSourceAPI) UnsetSourceItemsSyncedAt()`

UnsetSourceItemsSyncedAt ensures that no value is present for SourceItemsSyncedAt, not even an explicit nil
### GetOrganizationUserId

`func (o *OrganizationUserDataSourceAPI) GetOrganizationUserId() int32`

GetOrganizationUserId returns the OrganizationUserId field if non-nil, zero value otherwise.

### GetOrganizationUserIdOk

`func (o *OrganizationUserDataSourceAPI) GetOrganizationUserIdOk() (*int32, bool)`

GetOrganizationUserIdOk returns a tuple with the OrganizationUserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationUserId

`func (o *OrganizationUserDataSourceAPI) SetOrganizationUserId(v int32)`

SetOrganizationUserId sets OrganizationUserId field to given value.


### GetOrganizationId

`func (o *OrganizationUserDataSourceAPI) GetOrganizationId() int32`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *OrganizationUserDataSourceAPI) GetOrganizationIdOk() (*int32, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *OrganizationUserDataSourceAPI) SetOrganizationId(v int32)`

SetOrganizationId sets OrganizationId field to given value.


### GetOrganizationSuppliedUserId

`func (o *OrganizationUserDataSourceAPI) GetOrganizationSuppliedUserId() string`

GetOrganizationSuppliedUserId returns the OrganizationSuppliedUserId field if non-nil, zero value otherwise.

### GetOrganizationSuppliedUserIdOk

`func (o *OrganizationUserDataSourceAPI) GetOrganizationSuppliedUserIdOk() (*string, bool)`

GetOrganizationSuppliedUserIdOk returns a tuple with the OrganizationSuppliedUserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationSuppliedUserId

`func (o *OrganizationUserDataSourceAPI) SetOrganizationSuppliedUserId(v string)`

SetOrganizationSuppliedUserId sets OrganizationSuppliedUserId field to given value.


### GetRevokedAccess

`func (o *OrganizationUserDataSourceAPI) GetRevokedAccess() bool`

GetRevokedAccess returns the RevokedAccess field if non-nil, zero value otherwise.

### GetRevokedAccessOk

`func (o *OrganizationUserDataSourceAPI) GetRevokedAccessOk() (*bool, bool)`

GetRevokedAccessOk returns a tuple with the RevokedAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevokedAccess

`func (o *OrganizationUserDataSourceAPI) SetRevokedAccess(v bool)`

SetRevokedAccess sets RevokedAccess field to given value.


### GetLastSyncedAt

`func (o *OrganizationUserDataSourceAPI) GetLastSyncedAt() time.Time`

GetLastSyncedAt returns the LastSyncedAt field if non-nil, zero value otherwise.

### GetLastSyncedAtOk

`func (o *OrganizationUserDataSourceAPI) GetLastSyncedAtOk() (*time.Time, bool)`

GetLastSyncedAtOk returns a tuple with the LastSyncedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastSyncedAt

`func (o *OrganizationUserDataSourceAPI) SetLastSyncedAt(v time.Time)`

SetLastSyncedAt sets LastSyncedAt field to given value.


### GetLastSyncAction

`func (o *OrganizationUserDataSourceAPI) GetLastSyncAction() DataSourceLastSyncActions`

GetLastSyncAction returns the LastSyncAction field if non-nil, zero value otherwise.

### GetLastSyncActionOk

`func (o *OrganizationUserDataSourceAPI) GetLastSyncActionOk() (*DataSourceLastSyncActions, bool)`

GetLastSyncActionOk returns a tuple with the LastSyncAction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastSyncAction

`func (o *OrganizationUserDataSourceAPI) SetLastSyncAction(v DataSourceLastSyncActions)`

SetLastSyncAction sets LastSyncAction field to given value.


### GetCreatedAt

`func (o *OrganizationUserDataSourceAPI) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *OrganizationUserDataSourceAPI) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *OrganizationUserDataSourceAPI) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *OrganizationUserDataSourceAPI) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *OrganizationUserDataSourceAPI) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *OrganizationUserDataSourceAPI) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


