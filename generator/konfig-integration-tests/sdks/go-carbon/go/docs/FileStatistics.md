# FileStatistics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FileFormat** | [**NullableFileFormatsNullable**](FileFormatsNullable.md) |  | 
**FileSize** | **NullableInt32** |  | 
**NumCharacters** | **NullableInt32** |  | 
**NumTokens** | **NullableInt32** |  | 
**NumEmbeddings** | **NullableInt32** |  | 

## Methods

### NewFileStatistics

`func NewFileStatistics(fileFormat NullableFileFormatsNullable, fileSize NullableInt32, numCharacters NullableInt32, numTokens NullableInt32, numEmbeddings NullableInt32, ) *FileStatistics`

NewFileStatistics instantiates a new FileStatistics object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFileStatisticsWithDefaults

`func NewFileStatisticsWithDefaults() *FileStatistics`

NewFileStatisticsWithDefaults instantiates a new FileStatistics object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFileFormat

`func (o *FileStatistics) GetFileFormat() FileFormatsNullable`

GetFileFormat returns the FileFormat field if non-nil, zero value otherwise.

### GetFileFormatOk

`func (o *FileStatistics) GetFileFormatOk() (*FileFormatsNullable, bool)`

GetFileFormatOk returns a tuple with the FileFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileFormat

`func (o *FileStatistics) SetFileFormat(v FileFormatsNullable)`

SetFileFormat sets FileFormat field to given value.


### SetFileFormatNil

`func (o *FileStatistics) SetFileFormatNil(b bool)`

 SetFileFormatNil sets the value for FileFormat to be an explicit nil

### UnsetFileFormat
`func (o *FileStatistics) UnsetFileFormat()`

UnsetFileFormat ensures that no value is present for FileFormat, not even an explicit nil
### GetFileSize

`func (o *FileStatistics) GetFileSize() int32`

GetFileSize returns the FileSize field if non-nil, zero value otherwise.

### GetFileSizeOk

`func (o *FileStatistics) GetFileSizeOk() (*int32, bool)`

GetFileSizeOk returns a tuple with the FileSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileSize

`func (o *FileStatistics) SetFileSize(v int32)`

SetFileSize sets FileSize field to given value.


### SetFileSizeNil

`func (o *FileStatistics) SetFileSizeNil(b bool)`

 SetFileSizeNil sets the value for FileSize to be an explicit nil

### UnsetFileSize
`func (o *FileStatistics) UnsetFileSize()`

UnsetFileSize ensures that no value is present for FileSize, not even an explicit nil
### GetNumCharacters

`func (o *FileStatistics) GetNumCharacters() int32`

GetNumCharacters returns the NumCharacters field if non-nil, zero value otherwise.

### GetNumCharactersOk

`func (o *FileStatistics) GetNumCharactersOk() (*int32, bool)`

GetNumCharactersOk returns a tuple with the NumCharacters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumCharacters

`func (o *FileStatistics) SetNumCharacters(v int32)`

SetNumCharacters sets NumCharacters field to given value.


### SetNumCharactersNil

`func (o *FileStatistics) SetNumCharactersNil(b bool)`

 SetNumCharactersNil sets the value for NumCharacters to be an explicit nil

### UnsetNumCharacters
`func (o *FileStatistics) UnsetNumCharacters()`

UnsetNumCharacters ensures that no value is present for NumCharacters, not even an explicit nil
### GetNumTokens

`func (o *FileStatistics) GetNumTokens() int32`

GetNumTokens returns the NumTokens field if non-nil, zero value otherwise.

### GetNumTokensOk

`func (o *FileStatistics) GetNumTokensOk() (*int32, bool)`

GetNumTokensOk returns a tuple with the NumTokens field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumTokens

`func (o *FileStatistics) SetNumTokens(v int32)`

SetNumTokens sets NumTokens field to given value.


### SetNumTokensNil

`func (o *FileStatistics) SetNumTokensNil(b bool)`

 SetNumTokensNil sets the value for NumTokens to be an explicit nil

### UnsetNumTokens
`func (o *FileStatistics) UnsetNumTokens()`

UnsetNumTokens ensures that no value is present for NumTokens, not even an explicit nil
### GetNumEmbeddings

`func (o *FileStatistics) GetNumEmbeddings() int32`

GetNumEmbeddings returns the NumEmbeddings field if non-nil, zero value otherwise.

### GetNumEmbeddingsOk

`func (o *FileStatistics) GetNumEmbeddingsOk() (*int32, bool)`

GetNumEmbeddingsOk returns a tuple with the NumEmbeddings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumEmbeddings

`func (o *FileStatistics) SetNumEmbeddings(v int32)`

SetNumEmbeddings sets NumEmbeddings field to given value.


### SetNumEmbeddingsNil

`func (o *FileStatistics) SetNumEmbeddingsNil(b bool)`

 SetNumEmbeddingsNil sets the value for NumEmbeddings to be an explicit nil

### UnsetNumEmbeddings
`func (o *FileStatistics) UnsetNumEmbeddings()`

UnsetNumEmbeddings ensures that no value is present for NumEmbeddings, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


