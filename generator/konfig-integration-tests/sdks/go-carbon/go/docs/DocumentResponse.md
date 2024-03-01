# DocumentResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Tags** | [**map[string]Tags**](Tags.md) |  | 
**Content** | **string** |  | 
**FileId** | **int32** |  | 
**Source** | **NullableString** |  | 
**SourceUrl** | **NullableString** |  | 
**SourceType** | [**NullableDataSourceTypeNullable**](DataSourceTypeNullable.md) |  | 
**PresignedUrl** | **NullableString** |  | 
**Vector** | **[]float32** |  | 
**Score** | **NullableFloat32** |  | 
**Rank** | [**NullableRankProperty**](RankProperty.md) |  | 
**ContentMetadata** | **map[string]interface{}** |  | 

## Methods

### NewDocumentResponse

`func NewDocumentResponse(tags map[string]Tags, content string, fileId int32, source NullableString, sourceUrl NullableString, sourceType NullableDataSourceTypeNullable, presignedUrl NullableString, vector []float32, score NullableFloat32, rank NullableRankProperty, contentMetadata map[string]interface{}, ) *DocumentResponse`

NewDocumentResponse instantiates a new DocumentResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDocumentResponseWithDefaults

`func NewDocumentResponseWithDefaults() *DocumentResponse`

NewDocumentResponseWithDefaults instantiates a new DocumentResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTags

`func (o *DocumentResponse) GetTags() map[string]Tags`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *DocumentResponse) GetTagsOk() (*map[string]Tags, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *DocumentResponse) SetTags(v map[string]Tags)`

SetTags sets Tags field to given value.


### SetTagsNil

`func (o *DocumentResponse) SetTagsNil(b bool)`

 SetTagsNil sets the value for Tags to be an explicit nil

### UnsetTags
`func (o *DocumentResponse) UnsetTags()`

UnsetTags ensures that no value is present for Tags, not even an explicit nil
### GetContent

`func (o *DocumentResponse) GetContent() string`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *DocumentResponse) GetContentOk() (*string, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *DocumentResponse) SetContent(v string)`

SetContent sets Content field to given value.


### GetFileId

`func (o *DocumentResponse) GetFileId() int32`

GetFileId returns the FileId field if non-nil, zero value otherwise.

### GetFileIdOk

`func (o *DocumentResponse) GetFileIdOk() (*int32, bool)`

GetFileIdOk returns a tuple with the FileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileId

`func (o *DocumentResponse) SetFileId(v int32)`

SetFileId sets FileId field to given value.


### GetSource

`func (o *DocumentResponse) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *DocumentResponse) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *DocumentResponse) SetSource(v string)`

SetSource sets Source field to given value.


### SetSourceNil

`func (o *DocumentResponse) SetSourceNil(b bool)`

 SetSourceNil sets the value for Source to be an explicit nil

### UnsetSource
`func (o *DocumentResponse) UnsetSource()`

UnsetSource ensures that no value is present for Source, not even an explicit nil
### GetSourceUrl

`func (o *DocumentResponse) GetSourceUrl() string`

GetSourceUrl returns the SourceUrl field if non-nil, zero value otherwise.

### GetSourceUrlOk

`func (o *DocumentResponse) GetSourceUrlOk() (*string, bool)`

GetSourceUrlOk returns a tuple with the SourceUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceUrl

`func (o *DocumentResponse) SetSourceUrl(v string)`

SetSourceUrl sets SourceUrl field to given value.


### SetSourceUrlNil

`func (o *DocumentResponse) SetSourceUrlNil(b bool)`

 SetSourceUrlNil sets the value for SourceUrl to be an explicit nil

### UnsetSourceUrl
`func (o *DocumentResponse) UnsetSourceUrl()`

UnsetSourceUrl ensures that no value is present for SourceUrl, not even an explicit nil
### GetSourceType

`func (o *DocumentResponse) GetSourceType() DataSourceTypeNullable`

GetSourceType returns the SourceType field if non-nil, zero value otherwise.

### GetSourceTypeOk

`func (o *DocumentResponse) GetSourceTypeOk() (*DataSourceTypeNullable, bool)`

GetSourceTypeOk returns a tuple with the SourceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceType

`func (o *DocumentResponse) SetSourceType(v DataSourceTypeNullable)`

SetSourceType sets SourceType field to given value.


### SetSourceTypeNil

`func (o *DocumentResponse) SetSourceTypeNil(b bool)`

 SetSourceTypeNil sets the value for SourceType to be an explicit nil

### UnsetSourceType
`func (o *DocumentResponse) UnsetSourceType()`

UnsetSourceType ensures that no value is present for SourceType, not even an explicit nil
### GetPresignedUrl

`func (o *DocumentResponse) GetPresignedUrl() string`

GetPresignedUrl returns the PresignedUrl field if non-nil, zero value otherwise.

### GetPresignedUrlOk

`func (o *DocumentResponse) GetPresignedUrlOk() (*string, bool)`

GetPresignedUrlOk returns a tuple with the PresignedUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPresignedUrl

`func (o *DocumentResponse) SetPresignedUrl(v string)`

SetPresignedUrl sets PresignedUrl field to given value.


### SetPresignedUrlNil

`func (o *DocumentResponse) SetPresignedUrlNil(b bool)`

 SetPresignedUrlNil sets the value for PresignedUrl to be an explicit nil

### UnsetPresignedUrl
`func (o *DocumentResponse) UnsetPresignedUrl()`

UnsetPresignedUrl ensures that no value is present for PresignedUrl, not even an explicit nil
### GetVector

`func (o *DocumentResponse) GetVector() []float32`

GetVector returns the Vector field if non-nil, zero value otherwise.

### GetVectorOk

`func (o *DocumentResponse) GetVectorOk() (*[]float32, bool)`

GetVectorOk returns a tuple with the Vector field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVector

`func (o *DocumentResponse) SetVector(v []float32)`

SetVector sets Vector field to given value.


### SetVectorNil

`func (o *DocumentResponse) SetVectorNil(b bool)`

 SetVectorNil sets the value for Vector to be an explicit nil

### UnsetVector
`func (o *DocumentResponse) UnsetVector()`

UnsetVector ensures that no value is present for Vector, not even an explicit nil
### GetScore

`func (o *DocumentResponse) GetScore() float32`

GetScore returns the Score field if non-nil, zero value otherwise.

### GetScoreOk

`func (o *DocumentResponse) GetScoreOk() (*float32, bool)`

GetScoreOk returns a tuple with the Score field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScore

`func (o *DocumentResponse) SetScore(v float32)`

SetScore sets Score field to given value.


### SetScoreNil

`func (o *DocumentResponse) SetScoreNil(b bool)`

 SetScoreNil sets the value for Score to be an explicit nil

### UnsetScore
`func (o *DocumentResponse) UnsetScore()`

UnsetScore ensures that no value is present for Score, not even an explicit nil
### GetRank

`func (o *DocumentResponse) GetRank() RankProperty`

GetRank returns the Rank field if non-nil, zero value otherwise.

### GetRankOk

`func (o *DocumentResponse) GetRankOk() (*RankProperty, bool)`

GetRankOk returns a tuple with the Rank field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRank

`func (o *DocumentResponse) SetRank(v RankProperty)`

SetRank sets Rank field to given value.


### SetRankNil

`func (o *DocumentResponse) SetRankNil(b bool)`

 SetRankNil sets the value for Rank to be an explicit nil

### UnsetRank
`func (o *DocumentResponse) UnsetRank()`

UnsetRank ensures that no value is present for Rank, not even an explicit nil
### GetContentMetadata

`func (o *DocumentResponse) GetContentMetadata() map[string]interface{}`

GetContentMetadata returns the ContentMetadata field if non-nil, zero value otherwise.

### GetContentMetadataOk

`func (o *DocumentResponse) GetContentMetadataOk() (*map[string]interface{}, bool)`

GetContentMetadataOk returns a tuple with the ContentMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContentMetadata

`func (o *DocumentResponse) SetContentMetadata(v map[string]interface{})`

SetContentMetadata sets ContentMetadata field to given value.


### SetContentMetadataNil

`func (o *DocumentResponse) SetContentMetadataNil(b bool)`

 SetContentMetadataNil sets the value for ContentMetadata to be an explicit nil

### UnsetContentMetadata
`func (o *DocumentResponse) UnsetContentMetadata()`

UnsetContentMetadata ensures that no value is present for ContentMetadata, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


