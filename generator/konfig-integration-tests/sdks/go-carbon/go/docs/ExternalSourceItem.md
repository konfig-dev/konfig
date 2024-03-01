# ExternalSourceItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **int32** |  | 
**ExternalId** | **string** |  | 
**Source** | [**DataSourceType**](DataSourceType.md) |  | 
**Name** | **string** |  | 
**SyncedAt** | **time.Time** |  | 
**IsSelectable** | **NullableBool** |  | 
**IsExpandable** | **NullableBool** |  | 
**OrganizationId** | **int32** |  | 
**OrganizationSuppliedUserId** | **string** |  | 
**OrganizationUserId** | **int32** |  | 
**OrganizationUserDataSourceId** | **int32** |  | 
**OrganizationUserFileToSyncId** | **NullableInt32** |  | 
**ParentExternalId** | **NullableString** |  | 
**ItemType** | **NullableString** |  | 
**RootExternalId** | **NullableString** |  | 
**CreatedAt** | **time.Time** |  | 
**UpdatedAt** | **time.Time** |  | 

## Methods

### NewExternalSourceItem

`func NewExternalSourceItem(id int32, externalId string, source DataSourceType, name string, syncedAt time.Time, isSelectable NullableBool, isExpandable NullableBool, organizationId int32, organizationSuppliedUserId string, organizationUserId int32, organizationUserDataSourceId int32, organizationUserFileToSyncId NullableInt32, parentExternalId NullableString, itemType NullableString, rootExternalId NullableString, createdAt time.Time, updatedAt time.Time, ) *ExternalSourceItem`

NewExternalSourceItem instantiates a new ExternalSourceItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExternalSourceItemWithDefaults

`func NewExternalSourceItemWithDefaults() *ExternalSourceItem`

NewExternalSourceItemWithDefaults instantiates a new ExternalSourceItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ExternalSourceItem) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ExternalSourceItem) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ExternalSourceItem) SetId(v int32)`

SetId sets Id field to given value.


### GetExternalId

`func (o *ExternalSourceItem) GetExternalId() string`

GetExternalId returns the ExternalId field if non-nil, zero value otherwise.

### GetExternalIdOk

`func (o *ExternalSourceItem) GetExternalIdOk() (*string, bool)`

GetExternalIdOk returns a tuple with the ExternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalId

`func (o *ExternalSourceItem) SetExternalId(v string)`

SetExternalId sets ExternalId field to given value.


### GetSource

`func (o *ExternalSourceItem) GetSource() DataSourceType`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *ExternalSourceItem) GetSourceOk() (*DataSourceType, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *ExternalSourceItem) SetSource(v DataSourceType)`

SetSource sets Source field to given value.


### GetName

`func (o *ExternalSourceItem) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ExternalSourceItem) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ExternalSourceItem) SetName(v string)`

SetName sets Name field to given value.


### GetSyncedAt

`func (o *ExternalSourceItem) GetSyncedAt() time.Time`

GetSyncedAt returns the SyncedAt field if non-nil, zero value otherwise.

### GetSyncedAtOk

`func (o *ExternalSourceItem) GetSyncedAtOk() (*time.Time, bool)`

GetSyncedAtOk returns a tuple with the SyncedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSyncedAt

`func (o *ExternalSourceItem) SetSyncedAt(v time.Time)`

SetSyncedAt sets SyncedAt field to given value.


### GetIsSelectable

`func (o *ExternalSourceItem) GetIsSelectable() bool`

GetIsSelectable returns the IsSelectable field if non-nil, zero value otherwise.

### GetIsSelectableOk

`func (o *ExternalSourceItem) GetIsSelectableOk() (*bool, bool)`

GetIsSelectableOk returns a tuple with the IsSelectable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsSelectable

`func (o *ExternalSourceItem) SetIsSelectable(v bool)`

SetIsSelectable sets IsSelectable field to given value.


### SetIsSelectableNil

`func (o *ExternalSourceItem) SetIsSelectableNil(b bool)`

 SetIsSelectableNil sets the value for IsSelectable to be an explicit nil

### UnsetIsSelectable
`func (o *ExternalSourceItem) UnsetIsSelectable()`

UnsetIsSelectable ensures that no value is present for IsSelectable, not even an explicit nil
### GetIsExpandable

`func (o *ExternalSourceItem) GetIsExpandable() bool`

GetIsExpandable returns the IsExpandable field if non-nil, zero value otherwise.

### GetIsExpandableOk

`func (o *ExternalSourceItem) GetIsExpandableOk() (*bool, bool)`

GetIsExpandableOk returns a tuple with the IsExpandable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsExpandable

`func (o *ExternalSourceItem) SetIsExpandable(v bool)`

SetIsExpandable sets IsExpandable field to given value.


### SetIsExpandableNil

`func (o *ExternalSourceItem) SetIsExpandableNil(b bool)`

 SetIsExpandableNil sets the value for IsExpandable to be an explicit nil

### UnsetIsExpandable
`func (o *ExternalSourceItem) UnsetIsExpandable()`

UnsetIsExpandable ensures that no value is present for IsExpandable, not even an explicit nil
### GetOrganizationId

`func (o *ExternalSourceItem) GetOrganizationId() int32`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *ExternalSourceItem) GetOrganizationIdOk() (*int32, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *ExternalSourceItem) SetOrganizationId(v int32)`

SetOrganizationId sets OrganizationId field to given value.


### GetOrganizationSuppliedUserId

`func (o *ExternalSourceItem) GetOrganizationSuppliedUserId() string`

GetOrganizationSuppliedUserId returns the OrganizationSuppliedUserId field if non-nil, zero value otherwise.

### GetOrganizationSuppliedUserIdOk

`func (o *ExternalSourceItem) GetOrganizationSuppliedUserIdOk() (*string, bool)`

GetOrganizationSuppliedUserIdOk returns a tuple with the OrganizationSuppliedUserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationSuppliedUserId

`func (o *ExternalSourceItem) SetOrganizationSuppliedUserId(v string)`

SetOrganizationSuppliedUserId sets OrganizationSuppliedUserId field to given value.


### GetOrganizationUserId

`func (o *ExternalSourceItem) GetOrganizationUserId() int32`

GetOrganizationUserId returns the OrganizationUserId field if non-nil, zero value otherwise.

### GetOrganizationUserIdOk

`func (o *ExternalSourceItem) GetOrganizationUserIdOk() (*int32, bool)`

GetOrganizationUserIdOk returns a tuple with the OrganizationUserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationUserId

`func (o *ExternalSourceItem) SetOrganizationUserId(v int32)`

SetOrganizationUserId sets OrganizationUserId field to given value.


### GetOrganizationUserDataSourceId

`func (o *ExternalSourceItem) GetOrganizationUserDataSourceId() int32`

GetOrganizationUserDataSourceId returns the OrganizationUserDataSourceId field if non-nil, zero value otherwise.

### GetOrganizationUserDataSourceIdOk

`func (o *ExternalSourceItem) GetOrganizationUserDataSourceIdOk() (*int32, bool)`

GetOrganizationUserDataSourceIdOk returns a tuple with the OrganizationUserDataSourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationUserDataSourceId

`func (o *ExternalSourceItem) SetOrganizationUserDataSourceId(v int32)`

SetOrganizationUserDataSourceId sets OrganizationUserDataSourceId field to given value.


### GetOrganizationUserFileToSyncId

`func (o *ExternalSourceItem) GetOrganizationUserFileToSyncId() int32`

GetOrganizationUserFileToSyncId returns the OrganizationUserFileToSyncId field if non-nil, zero value otherwise.

### GetOrganizationUserFileToSyncIdOk

`func (o *ExternalSourceItem) GetOrganizationUserFileToSyncIdOk() (*int32, bool)`

GetOrganizationUserFileToSyncIdOk returns a tuple with the OrganizationUserFileToSyncId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationUserFileToSyncId

`func (o *ExternalSourceItem) SetOrganizationUserFileToSyncId(v int32)`

SetOrganizationUserFileToSyncId sets OrganizationUserFileToSyncId field to given value.


### SetOrganizationUserFileToSyncIdNil

`func (o *ExternalSourceItem) SetOrganizationUserFileToSyncIdNil(b bool)`

 SetOrganizationUserFileToSyncIdNil sets the value for OrganizationUserFileToSyncId to be an explicit nil

### UnsetOrganizationUserFileToSyncId
`func (o *ExternalSourceItem) UnsetOrganizationUserFileToSyncId()`

UnsetOrganizationUserFileToSyncId ensures that no value is present for OrganizationUserFileToSyncId, not even an explicit nil
### GetParentExternalId

`func (o *ExternalSourceItem) GetParentExternalId() string`

GetParentExternalId returns the ParentExternalId field if non-nil, zero value otherwise.

### GetParentExternalIdOk

`func (o *ExternalSourceItem) GetParentExternalIdOk() (*string, bool)`

GetParentExternalIdOk returns a tuple with the ParentExternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentExternalId

`func (o *ExternalSourceItem) SetParentExternalId(v string)`

SetParentExternalId sets ParentExternalId field to given value.


### SetParentExternalIdNil

`func (o *ExternalSourceItem) SetParentExternalIdNil(b bool)`

 SetParentExternalIdNil sets the value for ParentExternalId to be an explicit nil

### UnsetParentExternalId
`func (o *ExternalSourceItem) UnsetParentExternalId()`

UnsetParentExternalId ensures that no value is present for ParentExternalId, not even an explicit nil
### GetItemType

`func (o *ExternalSourceItem) GetItemType() string`

GetItemType returns the ItemType field if non-nil, zero value otherwise.

### GetItemTypeOk

`func (o *ExternalSourceItem) GetItemTypeOk() (*string, bool)`

GetItemTypeOk returns a tuple with the ItemType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemType

`func (o *ExternalSourceItem) SetItemType(v string)`

SetItemType sets ItemType field to given value.


### SetItemTypeNil

`func (o *ExternalSourceItem) SetItemTypeNil(b bool)`

 SetItemTypeNil sets the value for ItemType to be an explicit nil

### UnsetItemType
`func (o *ExternalSourceItem) UnsetItemType()`

UnsetItemType ensures that no value is present for ItemType, not even an explicit nil
### GetRootExternalId

`func (o *ExternalSourceItem) GetRootExternalId() string`

GetRootExternalId returns the RootExternalId field if non-nil, zero value otherwise.

### GetRootExternalIdOk

`func (o *ExternalSourceItem) GetRootExternalIdOk() (*string, bool)`

GetRootExternalIdOk returns a tuple with the RootExternalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRootExternalId

`func (o *ExternalSourceItem) SetRootExternalId(v string)`

SetRootExternalId sets RootExternalId field to given value.


### SetRootExternalIdNil

`func (o *ExternalSourceItem) SetRootExternalIdNil(b bool)`

 SetRootExternalIdNil sets the value for RootExternalId to be an explicit nil

### UnsetRootExternalId
`func (o *ExternalSourceItem) UnsetRootExternalId()`

UnsetRootExternalId ensures that no value is present for RootExternalId, not even an explicit nil
### GetCreatedAt

`func (o *ExternalSourceItem) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ExternalSourceItem) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ExternalSourceItem) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *ExternalSourceItem) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *ExternalSourceItem) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *ExternalSourceItem) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


