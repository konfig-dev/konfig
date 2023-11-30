# IssueCollectRequestRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReferenceId** | **string** |  | 
**PayerUpi** | **string** |  | 
**PayeeAccount** | **string** |  | 
**Amount** | **float32** |  | 
**PurposeMessage** | **string** |  | 
**ExpiryTime** | Pointer to **int32** |  | [optional] 

## Methods

### NewIssueCollectRequestRequest

`func NewIssueCollectRequestRequest(referenceId string, payerUpi string, payeeAccount string, amount float32, purposeMessage string, ) *IssueCollectRequestRequest`

NewIssueCollectRequestRequest instantiates a new IssueCollectRequestRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIssueCollectRequestRequestWithDefaults

`func NewIssueCollectRequestRequestWithDefaults() *IssueCollectRequestRequest`

NewIssueCollectRequestRequestWithDefaults instantiates a new IssueCollectRequestRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReferenceId

`func (o *IssueCollectRequestRequest) GetReferenceId() string`

GetReferenceId returns the ReferenceId field if non-nil, zero value otherwise.

### GetReferenceIdOk

`func (o *IssueCollectRequestRequest) GetReferenceIdOk() (*string, bool)`

GetReferenceIdOk returns a tuple with the ReferenceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferenceId

`func (o *IssueCollectRequestRequest) SetReferenceId(v string)`

SetReferenceId sets ReferenceId field to given value.


### GetPayerUpi

`func (o *IssueCollectRequestRequest) GetPayerUpi() string`

GetPayerUpi returns the PayerUpi field if non-nil, zero value otherwise.

### GetPayerUpiOk

`func (o *IssueCollectRequestRequest) GetPayerUpiOk() (*string, bool)`

GetPayerUpiOk returns a tuple with the PayerUpi field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayerUpi

`func (o *IssueCollectRequestRequest) SetPayerUpi(v string)`

SetPayerUpi sets PayerUpi field to given value.


### GetPayeeAccount

`func (o *IssueCollectRequestRequest) GetPayeeAccount() string`

GetPayeeAccount returns the PayeeAccount field if non-nil, zero value otherwise.

### GetPayeeAccountOk

`func (o *IssueCollectRequestRequest) GetPayeeAccountOk() (*string, bool)`

GetPayeeAccountOk returns a tuple with the PayeeAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeAccount

`func (o *IssueCollectRequestRequest) SetPayeeAccount(v string)`

SetPayeeAccount sets PayeeAccount field to given value.


### GetAmount

`func (o *IssueCollectRequestRequest) GetAmount() float32`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *IssueCollectRequestRequest) GetAmountOk() (*float32, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *IssueCollectRequestRequest) SetAmount(v float32)`

SetAmount sets Amount field to given value.


### GetPurposeMessage

`func (o *IssueCollectRequestRequest) GetPurposeMessage() string`

GetPurposeMessage returns the PurposeMessage field if non-nil, zero value otherwise.

### GetPurposeMessageOk

`func (o *IssueCollectRequestRequest) GetPurposeMessageOk() (*string, bool)`

GetPurposeMessageOk returns a tuple with the PurposeMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurposeMessage

`func (o *IssueCollectRequestRequest) SetPurposeMessage(v string)`

SetPurposeMessage sets PurposeMessage field to given value.


### GetExpiryTime

`func (o *IssueCollectRequestRequest) GetExpiryTime() int32`

GetExpiryTime returns the ExpiryTime field if non-nil, zero value otherwise.

### GetExpiryTimeOk

`func (o *IssueCollectRequestRequest) GetExpiryTimeOk() (*int32, bool)`

GetExpiryTimeOk returns a tuple with the ExpiryTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiryTime

`func (o *IssueCollectRequestRequest) SetExpiryTime(v int32)`

SetExpiryTime sets ExpiryTime field to given value.

### HasExpiryTime

`func (o *IssueCollectRequestRequest) HasExpiryTime() bool`

HasExpiryTime returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


