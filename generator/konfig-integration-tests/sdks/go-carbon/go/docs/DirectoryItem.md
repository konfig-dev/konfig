# DirectoryItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | 
**Name** | **string** |  | 
**IsSynced** | **bool** |  | [default to false]
**HasChildren** | **bool** |  | [default to false]

## Methods

### NewDirectoryItem

`func NewDirectoryItem(id string, name string, isSynced bool, hasChildren bool, ) *DirectoryItem`

NewDirectoryItem instantiates a new DirectoryItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDirectoryItemWithDefaults

`func NewDirectoryItemWithDefaults() *DirectoryItem`

NewDirectoryItemWithDefaults instantiates a new DirectoryItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *DirectoryItem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DirectoryItem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DirectoryItem) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *DirectoryItem) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DirectoryItem) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DirectoryItem) SetName(v string)`

SetName sets Name field to given value.


### GetIsSynced

`func (o *DirectoryItem) GetIsSynced() bool`

GetIsSynced returns the IsSynced field if non-nil, zero value otherwise.

### GetIsSyncedOk

`func (o *DirectoryItem) GetIsSyncedOk() (*bool, bool)`

GetIsSyncedOk returns a tuple with the IsSynced field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsSynced

`func (o *DirectoryItem) SetIsSynced(v bool)`

SetIsSynced sets IsSynced field to given value.


### GetHasChildren

`func (o *DirectoryItem) GetHasChildren() bool`

GetHasChildren returns the HasChildren field if non-nil, zero value otherwise.

### GetHasChildrenOk

`func (o *DirectoryItem) GetHasChildrenOk() (*bool, bool)`

GetHasChildrenOk returns a tuple with the HasChildren field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasChildren

`func (o *DirectoryItem) SetHasChildren(v bool)`

SetHasChildren sets HasChildren field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


