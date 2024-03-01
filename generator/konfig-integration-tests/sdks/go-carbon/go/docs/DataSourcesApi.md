# APIClient.DataSourcesApi

All URIs are relative to *https://api.carbon.ai*

Method | Path | Description
------------- | ------------- | -------------
[**QueryUserDataSources**](DataSourcesApi.md#QueryUserDataSources) | **Post** /user_data_sources | User Data Sources
[**RevokeAccessToken**](DataSourcesApi.md#RevokeAccessToken) | **Post** /revoke_access_token | Revoke Access Token



## QueryUserDataSources

User Data Sources

### Example

```go
package main

import (
    "fmt"
    "os"
    carbon "github.com/Carbon-for-Developers/carbon-sdks/go"
)

func main() {
    configuration := carbon.NewConfiguration()
    configuration.SetAccessToken("AUTHORIZATION")
    configuration.SetApiKey("AUTHORIZATION")
    configuration.SetCustomerId("CUSTOMER_ID")
    client := carbon.NewAPIClient(configuration)

    pagination := *carbon.NewPagination()
    filters := *carbon.NewOrganizationUserDataSourceFilters()
    
    organizationUserDataSourceQueryInput := *carbon.NewOrganizationUserDataSourceQueryInput()
    organizationUserDataSourceQueryInput.SetPagination(pagination)
    organizationUserDataSourceQueryInput.SetOrderBy(null)
    organizationUserDataSourceQueryInput.SetOrderDir(null)
    organizationUserDataSourceQueryInput.SetFilters(filters)
    
    request := client.DataSourcesApi.QueryUserDataSources(
        organizationUserDataSourceQueryInput,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DataSourcesApi.QueryUserDataSources``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `QueryUserDataSources`: OrganizationUserDataSourceResponse
    fmt.Fprintf(os.Stdout, "Response from `DataSourcesApi.QueryUserDataSources`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `OrganizationUserDataSourceResponse.QueryUserDataSources.Results`: %v\n", resp.Results)
    fmt.Fprintf(os.Stdout, "Response from `OrganizationUserDataSourceResponse.QueryUserDataSources.Count`: %v\n", resp.Count)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RevokeAccessToken

Revoke Access Token

### Example

```go
package main

import (
    "fmt"
    "os"
    carbon "github.com/Carbon-for-Developers/carbon-sdks/go"
)

func main() {
    configuration := carbon.NewConfiguration()
    configuration.SetAccessToken("AUTHORIZATION")
    configuration.SetApiKey("AUTHORIZATION")
    configuration.SetCustomerId("CUSTOMER_ID")
    client := carbon.NewAPIClient(configuration)

    
    revokeAccessTokenInput := *carbon.NewRevokeAccessTokenInput(
        null,
    )
    
    request := client.DataSourcesApi.RevokeAccessToken(
        revokeAccessTokenInput,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DataSourcesApi.RevokeAccessToken``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `RevokeAccessToken`: GenericSuccessResponse
    fmt.Fprintf(os.Stdout, "Response from `DataSourcesApi.RevokeAccessToken`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `GenericSuccessResponse.RevokeAccessToken.Success`: %v\n", resp.Success)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

