# VerifyAuthorizationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsAuthorized** | **bool** |  | 
**AuthorizationAmount** | Pointer to **float32** |  | [optional] 
**Authorization** | Pointer to [**AuthorizationModel**](AuthorizationModel.md) |  | [optional] 

## Methods

### NewVerifyAuthorizationResponse

`func NewVerifyAuthorizationResponse(isAuthorized bool, ) *VerifyAuthorizationResponse`

NewVerifyAuthorizationResponse instantiates a new VerifyAuthorizationResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVerifyAuthorizationResponseWithDefaults

`func NewVerifyAuthorizationResponseWithDefaults() *VerifyAuthorizationResponse`

NewVerifyAuthorizationResponseWithDefaults instantiates a new VerifyAuthorizationResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIsAuthorized

`func (o *VerifyAuthorizationResponse) GetIsAuthorized() bool`

GetIsAuthorized returns the IsAuthorized field if non-nil, zero value otherwise.

### GetIsAuthorizedOk

`func (o *VerifyAuthorizationResponse) GetIsAuthorizedOk() (*bool, bool)`

GetIsAuthorizedOk returns a tuple with the IsAuthorized field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsAuthorized

`func (o *VerifyAuthorizationResponse) SetIsAuthorized(v bool)`

SetIsAuthorized sets IsAuthorized field to given value.


### GetAuthorizationAmount

`func (o *VerifyAuthorizationResponse) GetAuthorizationAmount() float32`

GetAuthorizationAmount returns the AuthorizationAmount field if non-nil, zero value otherwise.

### GetAuthorizationAmountOk

`func (o *VerifyAuthorizationResponse) GetAuthorizationAmountOk() (*float32, bool)`

GetAuthorizationAmountOk returns a tuple with the AuthorizationAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationAmount

`func (o *VerifyAuthorizationResponse) SetAuthorizationAmount(v float32)`

SetAuthorizationAmount sets AuthorizationAmount field to given value.

### HasAuthorizationAmount

`func (o *VerifyAuthorizationResponse) HasAuthorizationAmount() bool`

HasAuthorizationAmount returns a boolean if a field has been set.

### GetAuthorization

`func (o *VerifyAuthorizationResponse) GetAuthorization() AuthorizationModel`

GetAuthorization returns the Authorization field if non-nil, zero value otherwise.

### GetAuthorizationOk

`func (o *VerifyAuthorizationResponse) GetAuthorizationOk() (*AuthorizationModel, bool)`

GetAuthorizationOk returns a tuple with the Authorization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorization

`func (o *VerifyAuthorizationResponse) SetAuthorization(v AuthorizationModel)`

SetAuthorization sets Authorization field to given value.

### HasAuthorization

`func (o *VerifyAuthorizationResponse) HasAuthorization() bool`

HasAuthorization returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


