# WebhookQueryResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Results** | [**[]WebhookNoKey**](WebhookNoKey.md) |  | 
**Count** | **int32** |  | 

## Methods

### NewWebhookQueryResponse

`func NewWebhookQueryResponse(results []WebhookNoKey, count int32, ) *WebhookQueryResponse`

NewWebhookQueryResponse instantiates a new WebhookQueryResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWebhookQueryResponseWithDefaults

`func NewWebhookQueryResponseWithDefaults() *WebhookQueryResponse`

NewWebhookQueryResponseWithDefaults instantiates a new WebhookQueryResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetResults

`func (o *WebhookQueryResponse) GetResults() []WebhookNoKey`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *WebhookQueryResponse) GetResultsOk() (*[]WebhookNoKey, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *WebhookQueryResponse) SetResults(v []WebhookNoKey)`

SetResults sets Results field to given value.


### GetCount

`func (o *WebhookQueryResponse) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *WebhookQueryResponse) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *WebhookQueryResponse) SetCount(v int32)`

SetCount sets Count field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


