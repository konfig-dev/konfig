# S3GetFileInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **NullableString** |  | [optional] 
**Bucket** | Pointer to **NullableString** |  | [optional] 

## Methods

### NewS3GetFileInput

`func NewS3GetFileInput() *S3GetFileInput`

NewS3GetFileInput instantiates a new S3GetFileInput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewS3GetFileInputWithDefaults

`func NewS3GetFileInputWithDefaults() *S3GetFileInput`

NewS3GetFileInputWithDefaults instantiates a new S3GetFileInput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *S3GetFileInput) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *S3GetFileInput) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *S3GetFileInput) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *S3GetFileInput) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *S3GetFileInput) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *S3GetFileInput) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetBucket

`func (o *S3GetFileInput) GetBucket() string`

GetBucket returns the Bucket field if non-nil, zero value otherwise.

### GetBucketOk

`func (o *S3GetFileInput) GetBucketOk() (*string, bool)`

GetBucketOk returns a tuple with the Bucket field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBucket

`func (o *S3GetFileInput) SetBucket(v string)`

SetBucket sets Bucket field to given value.

### HasBucket

`func (o *S3GetFileInput) HasBucket() bool`

HasBucket returns a boolean if a field has been set.

### SetBucketNil

`func (o *S3GetFileInput) SetBucketNil(b bool)`

 SetBucketNil sets the value for Bucket to be an explicit nil

### UnsetBucket
`func (o *S3GetFileInput) UnsetBucket()`

UnsetBucket ensures that no value is present for Bucket, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


