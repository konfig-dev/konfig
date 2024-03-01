# APIClient.IntegrationsApi

All URIs are relative to *https://api.carbon.ai*

Method | Path | Description
------------- | ------------- | -------------
[**ConnectFreshdesk**](IntegrationsApi.md#ConnectFreshdesk) | **Post** /integrations/freshdesk | Freshdesk Connect
[**ConnectGitbook**](IntegrationsApi.md#ConnectGitbook) | **Post** /integrations/gitbook | Gitbook Connect
[**CreateAwsIamUser**](IntegrationsApi.md#CreateAwsIamUser) | **Post** /integrations/s3 | S3 Auth
[**GetOauthUrl**](IntegrationsApi.md#GetOauthUrl) | **Post** /integrations/oauth_url | Get Oauth Url
[**ListConfluencePages**](IntegrationsApi.md#ListConfluencePages) | **Post** /integrations/confluence/list | Confluence List
[**ListDataSourceItems**](IntegrationsApi.md#ListDataSourceItems) | **Post** /integrations/items/list | List Data Source Items
[**ListFolders**](IntegrationsApi.md#ListFolders) | **Get** /integrations/outlook/user_folders | Outlook Folders
[**ListGitbookSpaces**](IntegrationsApi.md#ListGitbookSpaces) | **Get** /integrations/gitbook/spaces | Gitbook Spaces
[**ListLabels**](IntegrationsApi.md#ListLabels) | **Get** /integrations/gmail/user_labels | Gmail Labels
[**ListOutlookCategories**](IntegrationsApi.md#ListOutlookCategories) | **Get** /integrations/outlook/user_categories | Outlook Categories
[**SyncConfluence**](IntegrationsApi.md#SyncConfluence) | **Post** /integrations/confluence/sync | Confluence Sync
[**SyncDataSourceItems**](IntegrationsApi.md#SyncDataSourceItems) | **Post** /integrations/items/sync | Sync Data Source Items
[**SyncFiles**](IntegrationsApi.md#SyncFiles) | **Post** /integrations/files/sync | Sync Files
[**SyncGitbook**](IntegrationsApi.md#SyncGitbook) | **Post** /integrations/gitbook/sync | Gitbook Sync
[**SyncGmail**](IntegrationsApi.md#SyncGmail) | **Post** /integrations/gmail/sync | Gmail Sync
[**SyncOutlook**](IntegrationsApi.md#SyncOutlook) | **Post** /integrations/outlook/sync | Outlook Sync
[**SyncRssFeed**](IntegrationsApi.md#SyncRssFeed) | **Post** /integrations/rss_feed | Rss Feed
[**SyncS3Files**](IntegrationsApi.md#SyncS3Files) | **Post** /integrations/s3/files | S3 Files



## ConnectFreshdesk

Freshdesk Connect



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

    
    freshDeskConnectRequest := *carbon.NewFreshDeskConnectRequest(
        "null",
        "null",
    )
    freshDeskConnectRequest.SetTags({})
    freshDeskConnectRequest.SetChunkSize(1500)
    freshDeskConnectRequest.SetChunkOverlap(20)
    freshDeskConnectRequest.SetSkipEmbeddingGeneration(false)
    freshDeskConnectRequest.SetEmbeddingModel(null)
    freshDeskConnectRequest.SetGenerateSparseVectors(false)
    freshDeskConnectRequest.SetPrependFilenameToChunks(false)
    
    request := client.IntegrationsApi.ConnectFreshdesk(
        freshDeskConnectRequest,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `IntegrationsApi.ConnectFreshdesk``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `ConnectFreshdesk`: GenericSuccessResponse
    fmt.Fprintf(os.Stdout, "Response from `IntegrationsApi.ConnectFreshdesk`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `GenericSuccessResponse.ConnectFreshdesk.Success`: %v\n", resp.Success)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ConnectGitbook

Gitbook Connect



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

    
    gitbookConnectRequest := *carbon.NewGitbookConnectRequest(
        "null",
        "null",
    )
    
    request := client.IntegrationsApi.ConnectGitbook(
        gitbookConnectRequest,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `IntegrationsApi.ConnectGitbook``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `ConnectGitbook`: GenericSuccessResponse
    fmt.Fprintf(os.Stdout, "Response from `IntegrationsApi.ConnectGitbook`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `GenericSuccessResponse.ConnectGitbook.Success`: %v\n", resp.Success)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CreateAwsIamUser

S3 Auth



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

    
    s3AuthRequest := *carbon.NewS3AuthRequest(
        "null",
        "null",
    )
    
    request := client.IntegrationsApi.CreateAwsIamUser(
        s3AuthRequest,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `IntegrationsApi.CreateAwsIamUser``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `CreateAwsIamUser`: OrganizationUserDataSourceAPI
    fmt.Fprintf(os.Stdout, "Response from `IntegrationsApi.CreateAwsIamUser`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `OrganizationUserDataSourceAPI.CreateAwsIamUser.Id`: %v\n", resp.Id)
    fmt.Fprintf(os.Stdout, "Response from `OrganizationUserDataSourceAPI.CreateAwsIamUser.DataSourceExternalId`: %v\n", resp.DataSourceExternalId)
    fmt.Fprintf(os.Stdout, "Response from `OrganizationUserDataSourceAPI.CreateAwsIamUser.DataSourceType`: %v\n", resp.DataSourceType)
    fmt.Fprintf(os.Stdout, "Response from `OrganizationUserDataSourceAPI.CreateAwsIamUser.SyncStatus`: %v\n", resp.SyncStatus)
    fmt.Fprintf(os.Stdout, "Response from `OrganizationUserDataSourceAPI.CreateAwsIamUser.SourceItemsSyncedAt`: %v\n", resp.SourceItemsSyncedAt)
    fmt.Fprintf(os.Stdout, "Response from `OrganizationUserDataSourceAPI.CreateAwsIamUser.OrganizationUserId`: %v\n", resp.OrganizationUserId)
    fmt.Fprintf(os.Stdout, "Response from `OrganizationUserDataSourceAPI.CreateAwsIamUser.OrganizationId`: %v\n", resp.OrganizationId)
    fmt.Fprintf(os.Stdout, "Response from `OrganizationUserDataSourceAPI.CreateAwsIamUser.OrganizationSuppliedUserId`: %v\n", resp.OrganizationSuppliedUserId)
    fmt.Fprintf(os.Stdout, "Response from `OrganizationUserDataSourceAPI.CreateAwsIamUser.RevokedAccess`: %v\n", resp.RevokedAccess)
    fmt.Fprintf(os.Stdout, "Response from `OrganizationUserDataSourceAPI.CreateAwsIamUser.LastSyncedAt`: %v\n", resp.LastSyncedAt)
    fmt.Fprintf(os.Stdout, "Response from `OrganizationUserDataSourceAPI.CreateAwsIamUser.LastSyncAction`: %v\n", resp.LastSyncAction)
    fmt.Fprintf(os.Stdout, "Response from `OrganizationUserDataSourceAPI.CreateAwsIamUser.CreatedAt`: %v\n", resp.CreatedAt)
    fmt.Fprintf(os.Stdout, "Response from `OrganizationUserDataSourceAPI.CreateAwsIamUser.UpdatedAt`: %v\n", resp.UpdatedAt)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetOauthUrl

Get Oauth Url

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

    
    oAuthURLRequest := *carbon.NewOAuthURLRequest(
        null,
    )
    oAuthURLRequest.SetTags(null)
    oAuthURLRequest.SetScope("null")
    oAuthURLRequest.SetChunkSize(1500)
    oAuthURLRequest.SetChunkOverlap(20)
    oAuthURLRequest.SetSkipEmbeddingGeneration(false)
    oAuthURLRequest.SetEmbeddingModel(null)
    oAuthURLRequest.SetZendeskSubdomain("null")
    oAuthURLRequest.SetMicrosoftTenant("null")
    oAuthURLRequest.SetSharepointSiteName("null")
    oAuthURLRequest.SetConfluenceSubdomain("null")
    oAuthURLRequest.SetGenerateSparseVectors(false)
    oAuthURLRequest.SetPrependFilenameToChunks(false)
    oAuthURLRequest.SetMaxItemsPerChunk(null)
    oAuthURLRequest.SetSalesforceDomain("null")
    oAuthURLRequest.SetSyncFilesOnConnection(false)
    oAuthURLRequest.SetSetPageAsBoundary(false)
    
    request := client.IntegrationsApi.GetOauthUrl(
        oAuthURLRequest,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `IntegrationsApi.GetOauthUrl``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `GetOauthUrl`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `IntegrationsApi.GetOauthUrl`: %v\n", resp)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListConfluencePages

Confluence List



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

    
    listRequest := *carbon.NewListRequest(
        null,
    )
    listRequest.SetParentId("null")
    
    request := client.IntegrationsApi.ListConfluencePages(
        listRequest,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `IntegrationsApi.ListConfluencePages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `ListConfluencePages`: ListResponse
    fmt.Fprintf(os.Stdout, "Response from `IntegrationsApi.ListConfluencePages`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `ListResponse.ListConfluencePages.Data`: %v\n", resp.Data)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListDataSourceItems

List Data Source Items

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
    
    listDataSourceItemsRequest := *carbon.NewListDataSourceItemsRequest(
        null,
    )
    listDataSourceItemsRequest.SetParentId("null")
    listDataSourceItemsRequest.SetPagination(pagination)
    
    request := client.IntegrationsApi.ListDataSourceItems(
        listDataSourceItemsRequest,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `IntegrationsApi.ListDataSourceItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `ListDataSourceItems`: ListDataSourceItemsResponse
    fmt.Fprintf(os.Stdout, "Response from `IntegrationsApi.ListDataSourceItems`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `ListDataSourceItemsResponse.ListDataSourceItems.Items`: %v\n", resp.Items)
    fmt.Fprintf(os.Stdout, "Response from `ListDataSourceItemsResponse.ListDataSourceItems.Count`: %v\n", resp.Count)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListFolders

Outlook Folders



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

    request := client.IntegrationsApi.ListFolders(
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `IntegrationsApi.ListFolders``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `ListFolders`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `IntegrationsApi.ListFolders`: %v\n", resp)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListGitbookSpaces

Gitbook Spaces



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

    request := client.IntegrationsApi.ListGitbookSpaces(
        56,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `IntegrationsApi.ListGitbookSpaces``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `ListGitbookSpaces`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `IntegrationsApi.ListGitbookSpaces`: %v\n", resp)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListLabels

Gmail Labels



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

    request := client.IntegrationsApi.ListLabels(
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `IntegrationsApi.ListLabels``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `ListLabels`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `IntegrationsApi.ListLabels`: %v\n", resp)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListOutlookCategories

Outlook Categories



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

    request := client.IntegrationsApi.ListOutlookCategories(
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `IntegrationsApi.ListOutlookCategories``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `ListOutlookCategories`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `IntegrationsApi.ListOutlookCategories`: %v\n", resp)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SyncConfluence

Confluence Sync



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

    
    syncFilesRequest := *carbon.NewSyncFilesRequest(
        null,
        null,
    )
    syncFilesRequest.SetTags({})
    syncFilesRequest.SetChunkSize(1500)
    syncFilesRequest.SetChunkOverlap(20)
    syncFilesRequest.SetSkipEmbeddingGeneration(false)
    syncFilesRequest.SetEmbeddingModel(null)
    syncFilesRequest.SetGenerateSparseVectors(false)
    syncFilesRequest.SetPrependFilenameToChunks(false)
    syncFilesRequest.SetMaxItemsPerChunk(null)
    syncFilesRequest.SetSetPageAsBoundary(false)
    
    request := client.IntegrationsApi.SyncConfluence(
        syncFilesRequest,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `IntegrationsApi.SyncConfluence``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `SyncConfluence`: GenericSuccessResponse
    fmt.Fprintf(os.Stdout, "Response from `IntegrationsApi.SyncConfluence`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `GenericSuccessResponse.SyncConfluence.Success`: %v\n", resp.Success)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SyncDataSourceItems

Sync Data Source Items

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

    
    syncDirectoryRequest := *carbon.NewSyncDirectoryRequest(
        null,
    )
    
    request := client.IntegrationsApi.SyncDataSourceItems(
        syncDirectoryRequest,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `IntegrationsApi.SyncDataSourceItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `SyncDataSourceItems`: OrganizationUserDataSourceAPI
    fmt.Fprintf(os.Stdout, "Response from `IntegrationsApi.SyncDataSourceItems`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `OrganizationUserDataSourceAPI.SyncDataSourceItems.Id`: %v\n", resp.Id)
    fmt.Fprintf(os.Stdout, "Response from `OrganizationUserDataSourceAPI.SyncDataSourceItems.DataSourceExternalId`: %v\n", resp.DataSourceExternalId)
    fmt.Fprintf(os.Stdout, "Response from `OrganizationUserDataSourceAPI.SyncDataSourceItems.DataSourceType`: %v\n", resp.DataSourceType)
    fmt.Fprintf(os.Stdout, "Response from `OrganizationUserDataSourceAPI.SyncDataSourceItems.SyncStatus`: %v\n", resp.SyncStatus)
    fmt.Fprintf(os.Stdout, "Response from `OrganizationUserDataSourceAPI.SyncDataSourceItems.SourceItemsSyncedAt`: %v\n", resp.SourceItemsSyncedAt)
    fmt.Fprintf(os.Stdout, "Response from `OrganizationUserDataSourceAPI.SyncDataSourceItems.OrganizationUserId`: %v\n", resp.OrganizationUserId)
    fmt.Fprintf(os.Stdout, "Response from `OrganizationUserDataSourceAPI.SyncDataSourceItems.OrganizationId`: %v\n", resp.OrganizationId)
    fmt.Fprintf(os.Stdout, "Response from `OrganizationUserDataSourceAPI.SyncDataSourceItems.OrganizationSuppliedUserId`: %v\n", resp.OrganizationSuppliedUserId)
    fmt.Fprintf(os.Stdout, "Response from `OrganizationUserDataSourceAPI.SyncDataSourceItems.RevokedAccess`: %v\n", resp.RevokedAccess)
    fmt.Fprintf(os.Stdout, "Response from `OrganizationUserDataSourceAPI.SyncDataSourceItems.LastSyncedAt`: %v\n", resp.LastSyncedAt)
    fmt.Fprintf(os.Stdout, "Response from `OrganizationUserDataSourceAPI.SyncDataSourceItems.LastSyncAction`: %v\n", resp.LastSyncAction)
    fmt.Fprintf(os.Stdout, "Response from `OrganizationUserDataSourceAPI.SyncDataSourceItems.CreatedAt`: %v\n", resp.CreatedAt)
    fmt.Fprintf(os.Stdout, "Response from `OrganizationUserDataSourceAPI.SyncDataSourceItems.UpdatedAt`: %v\n", resp.UpdatedAt)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SyncFiles

Sync Files

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

    
    syncFilesRequest := *carbon.NewSyncFilesRequest(
        null,
        null,
    )
    syncFilesRequest.SetTags({})
    syncFilesRequest.SetChunkSize(1500)
    syncFilesRequest.SetChunkOverlap(20)
    syncFilesRequest.SetSkipEmbeddingGeneration(false)
    syncFilesRequest.SetEmbeddingModel(null)
    syncFilesRequest.SetGenerateSparseVectors(false)
    syncFilesRequest.SetPrependFilenameToChunks(false)
    syncFilesRequest.SetMaxItemsPerChunk(null)
    syncFilesRequest.SetSetPageAsBoundary(false)
    
    request := client.IntegrationsApi.SyncFiles(
        syncFilesRequest,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `IntegrationsApi.SyncFiles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `SyncFiles`: GenericSuccessResponse
    fmt.Fprintf(os.Stdout, "Response from `IntegrationsApi.SyncFiles`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `GenericSuccessResponse.SyncFiles.Success`: %v\n", resp.Success)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SyncGitbook

Gitbook Sync



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

    
    gitbookSyncRequest := *carbon.NewGitbookSyncRequest(
        null,
        null,
    )
    gitbookSyncRequest.SetTags({})
    gitbookSyncRequest.SetChunkSize(1500)
    gitbookSyncRequest.SetChunkOverlap(20)
    gitbookSyncRequest.SetSkipEmbeddingGeneration(false)
    gitbookSyncRequest.SetEmbeddingModel(null)
    gitbookSyncRequest.SetGenerateSparseVectors(false)
    gitbookSyncRequest.SetPrependFilenameToChunks(false)
    
    request := client.IntegrationsApi.SyncGitbook(
        gitbookSyncRequest,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `IntegrationsApi.SyncGitbook``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `SyncGitbook`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `IntegrationsApi.SyncGitbook`: %v\n", resp)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SyncGmail

Gmail Sync



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

    
    gmailSyncInput := *carbon.NewGmailSyncInput(
        null,
    )
    gmailSyncInput.SetTags({})
    gmailSyncInput.SetChunkSize(1500)
    gmailSyncInput.SetChunkOverlap(20)
    gmailSyncInput.SetSkipEmbeddingGeneration(false)
    gmailSyncInput.SetEmbeddingModel(null)
    gmailSyncInput.SetGenerateSparseVectors(false)
    gmailSyncInput.SetPrependFilenameToChunks(false)
    
    request := client.IntegrationsApi.SyncGmail(
        gmailSyncInput,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `IntegrationsApi.SyncGmail``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `SyncGmail`: GenericSuccessResponse
    fmt.Fprintf(os.Stdout, "Response from `IntegrationsApi.SyncGmail`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `GenericSuccessResponse.SyncGmail.Success`: %v\n", resp.Success)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SyncOutlook

Outlook Sync



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

    
    outlookSyncInput := *carbon.NewOutlookSyncInput(
        null,
    )
    outlookSyncInput.SetTags({})
    outlookSyncInput.SetFolder("Inbox")
    outlookSyncInput.SetChunkSize(1500)
    outlookSyncInput.SetChunkOverlap(20)
    outlookSyncInput.SetSkipEmbeddingGeneration(false)
    outlookSyncInput.SetEmbeddingModel(null)
    outlookSyncInput.SetGenerateSparseVectors(false)
    outlookSyncInput.SetPrependFilenameToChunks(false)
    
    request := client.IntegrationsApi.SyncOutlook(
        outlookSyncInput,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `IntegrationsApi.SyncOutlook``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `SyncOutlook`: GenericSuccessResponse
    fmt.Fprintf(os.Stdout, "Response from `IntegrationsApi.SyncOutlook`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `GenericSuccessResponse.SyncOutlook.Success`: %v\n", resp.Success)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SyncRssFeed

Rss Feed

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

    
    rSSFeedInput := *carbon.NewRSSFeedInput(
        "null",
    )
    rSSFeedInput.SetTags({})
    rSSFeedInput.SetChunkSize(1500)
    rSSFeedInput.SetChunkOverlap(20)
    rSSFeedInput.SetSkipEmbeddingGeneration(false)
    rSSFeedInput.SetEmbeddingModel(null)
    rSSFeedInput.SetGenerateSparseVectors(false)
    rSSFeedInput.SetPrependFilenameToChunks(false)
    
    request := client.IntegrationsApi.SyncRssFeed(
        rSSFeedInput,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `IntegrationsApi.SyncRssFeed``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `SyncRssFeed`: GenericSuccessResponse
    fmt.Fprintf(os.Stdout, "Response from `IntegrationsApi.SyncRssFeed`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `GenericSuccessResponse.SyncRssFeed.Success`: %v\n", resp.Success)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SyncS3Files

S3 Files



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

    
    s3FileSyncInput := *carbon.NewS3FileSyncInput(
        null,
    )
    s3FileSyncInput.SetTags({})
    s3FileSyncInput.SetChunkSize(1500)
    s3FileSyncInput.SetChunkOverlap(20)
    s3FileSyncInput.SetSkipEmbeddingGeneration(false)
    s3FileSyncInput.SetEmbeddingModel(null)
    s3FileSyncInput.SetGenerateSparseVectors(false)
    s3FileSyncInput.SetPrependFilenameToChunks(false)
    s3FileSyncInput.SetMaxItemsPerChunk(null)
    s3FileSyncInput.SetSetPageAsBoundary(false)
    
    request := client.IntegrationsApi.SyncS3Files(
        s3FileSyncInput,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `IntegrationsApi.SyncS3Files``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `SyncS3Files`: GenericSuccessResponse
    fmt.Fprintf(os.Stdout, "Response from `IntegrationsApi.SyncS3Files`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `GenericSuccessResponse.SyncS3Files.Success`: %v\n", resp.Success)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

