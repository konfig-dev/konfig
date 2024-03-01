# GitbookConnectRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Organization** | **string** |  | 
**AccessToken** | **string** |  | 

## Methods

### NewGitbookConnectRequest

`func NewGitbookConnectRequest(organization string, accessToken string, ) *GitbookConnectRequest`

NewGitbookConnectRequest instantiates a new GitbookConnectRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGitbookConnectRequestWithDefaults

`func NewGitbookConnectRequestWithDefaults() *GitbookConnectRequest`

NewGitbookConnectRequestWithDefaults instantiates a new GitbookConnectRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOrganization

`func (o *GitbookConnectRequest) GetOrganization() string`

GetOrganization returns the Organization field if non-nil, zero value otherwise.

### GetOrganizationOk

`func (o *GitbookConnectRequest) GetOrganizationOk() (*string, bool)`

GetOrganizationOk returns a tuple with the Organization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganization

`func (o *GitbookConnectRequest) SetOrganization(v string)`

SetOrganization sets Organization field to given value.


### GetAccessToken

`func (o *GitbookConnectRequest) GetAccessToken() string`

GetAccessToken returns the AccessToken field if non-nil, zero value otherwise.

### GetAccessTokenOk

`func (o *GitbookConnectRequest) GetAccessTokenOk() (*string, bool)`

GetAccessTokenOk returns a tuple with the AccessToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessToken

`func (o *GitbookConnectRequest) SetAccessToken(v string)`

SetAccessToken sets AccessToken field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


