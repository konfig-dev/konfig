# YoutubeTranscriptResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **string** |  | 
**Error** | **NullableString** |  | 
**Data** | **NullableString** |  | 
**RawTranscript** | [**[]map[string]RawTranscriptPropertyInnerValue**](map[string]RawTranscriptPropertyInnerValue.md) |  | 

## Methods

### NewYoutubeTranscriptResponse

`func NewYoutubeTranscriptResponse(status string, error_ NullableString, data NullableString, rawTranscript []map[string]RawTranscriptPropertyInnerValue, ) *YoutubeTranscriptResponse`

NewYoutubeTranscriptResponse instantiates a new YoutubeTranscriptResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewYoutubeTranscriptResponseWithDefaults

`func NewYoutubeTranscriptResponseWithDefaults() *YoutubeTranscriptResponse`

NewYoutubeTranscriptResponseWithDefaults instantiates a new YoutubeTranscriptResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *YoutubeTranscriptResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *YoutubeTranscriptResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *YoutubeTranscriptResponse) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetError

`func (o *YoutubeTranscriptResponse) GetError() string`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *YoutubeTranscriptResponse) GetErrorOk() (*string, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *YoutubeTranscriptResponse) SetError(v string)`

SetError sets Error field to given value.


### SetErrorNil

`func (o *YoutubeTranscriptResponse) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *YoutubeTranscriptResponse) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil
### GetData

`func (o *YoutubeTranscriptResponse) GetData() string`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *YoutubeTranscriptResponse) GetDataOk() (*string, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *YoutubeTranscriptResponse) SetData(v string)`

SetData sets Data field to given value.


### SetDataNil

`func (o *YoutubeTranscriptResponse) SetDataNil(b bool)`

 SetDataNil sets the value for Data to be an explicit nil

### UnsetData
`func (o *YoutubeTranscriptResponse) UnsetData()`

UnsetData ensures that no value is present for Data, not even an explicit nil
### GetRawTranscript

`func (o *YoutubeTranscriptResponse) GetRawTranscript() []map[string]RawTranscriptPropertyInnerValue`

GetRawTranscript returns the RawTranscript field if non-nil, zero value otherwise.

### GetRawTranscriptOk

`func (o *YoutubeTranscriptResponse) GetRawTranscriptOk() (*[]map[string]RawTranscriptPropertyInnerValue, bool)`

GetRawTranscriptOk returns a tuple with the RawTranscript field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRawTranscript

`func (o *YoutubeTranscriptResponse) SetRawTranscript(v []map[string]RawTranscriptPropertyInnerValue)`

SetRawTranscript sets RawTranscript field to given value.


### SetRawTranscriptNil

`func (o *YoutubeTranscriptResponse) SetRawTranscriptNil(b bool)`

 SetRawTranscriptNil sets the value for RawTranscript to be an explicit nil

### UnsetRawTranscript
`func (o *YoutubeTranscriptResponse) UnsetRawTranscript()`

UnsetRawTranscript ensures that no value is present for RawTranscript, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


