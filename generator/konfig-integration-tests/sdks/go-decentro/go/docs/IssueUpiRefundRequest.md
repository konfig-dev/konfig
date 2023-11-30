# IssueUpiRefundRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReferenceId** | **string** |  | 
**TransactionId** | Pointer to **string** |  | [optional] 
**BankReferenceNumber** | Pointer to **string** |  | [optional] 
**PurposeMessage** | Pointer to **string** |  | [optional] 

## Methods

### NewIssueUpiRefundRequest

`func NewIssueUpiRefundRequest(referenceId string, ) *IssueUpiRefundRequest`

NewIssueUpiRefundRequest instantiates a new IssueUpiRefundRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIssueUpiRefundRequestWithDefaults

`func NewIssueUpiRefundRequestWithDefaults() *IssueUpiRefundRequest`

NewIssueUpiRefundRequestWithDefaults instantiates a new IssueUpiRefundRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReferenceId

`func (o *IssueUpiRefundRequest) GetReferenceId() string`

GetReferenceId returns the ReferenceId field if non-nil, zero value otherwise.

### GetReferenceIdOk

`func (o *IssueUpiRefundRequest) GetReferenceIdOk() (*string, bool)`

GetReferenceIdOk returns a tuple with the ReferenceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferenceId

`func (o *IssueUpiRefundRequest) SetReferenceId(v string)`

SetReferenceId sets ReferenceId field to given value.


### GetTransactionId

`func (o *IssueUpiRefundRequest) GetTransactionId() string`

GetTransactionId returns the TransactionId field if non-nil, zero value otherwise.

### GetTransactionIdOk

`func (o *IssueUpiRefundRequest) GetTransactionIdOk() (*string, bool)`

GetTransactionIdOk returns a tuple with the TransactionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionId

`func (o *IssueUpiRefundRequest) SetTransactionId(v string)`

SetTransactionId sets TransactionId field to given value.

### HasTransactionId

`func (o *IssueUpiRefundRequest) HasTransactionId() bool`

HasTransactionId returns a boolean if a field has been set.

### GetBankReferenceNumber

`func (o *IssueUpiRefundRequest) GetBankReferenceNumber() string`

GetBankReferenceNumber returns the BankReferenceNumber field if non-nil, zero value otherwise.

### GetBankReferenceNumberOk

`func (o *IssueUpiRefundRequest) GetBankReferenceNumberOk() (*string, bool)`

GetBankReferenceNumberOk returns a tuple with the BankReferenceNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBankReferenceNumber

`func (o *IssueUpiRefundRequest) SetBankReferenceNumber(v string)`

SetBankReferenceNumber sets BankReferenceNumber field to given value.

### HasBankReferenceNumber

`func (o *IssueUpiRefundRequest) HasBankReferenceNumber() bool`

HasBankReferenceNumber returns a boolean if a field has been set.

### GetPurposeMessage

`func (o *IssueUpiRefundRequest) GetPurposeMessage() string`

GetPurposeMessage returns the PurposeMessage field if non-nil, zero value otherwise.

### GetPurposeMessageOk

`func (o *IssueUpiRefundRequest) GetPurposeMessageOk() (*string, bool)`

GetPurposeMessageOk returns a tuple with the PurposeMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurposeMessage

`func (o *IssueUpiRefundRequest) SetPurposeMessage(v string)`

SetPurposeMessage sets PurposeMessage field to given value.

### HasPurposeMessage

`func (o *IssueUpiRefundRequest) HasPurposeMessage() bool`

HasPurposeMessage returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


