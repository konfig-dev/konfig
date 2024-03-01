# APIClient.FilesApi

All URIs are relative to *https://api.carbon.ai*

Method | Path | Description
------------- | ------------- | -------------
[**CreateUserFileTags**](FilesApi.md#CreateUserFileTags) | **Post** /create_user_file_tags | Create File Tags
[**Delete**](FilesApi.md#Delete) | **Delete** /deletefile/{file_id} | Delete File Endpoint
[**DeleteFileTags**](FilesApi.md#DeleteFileTags) | **Post** /delete_user_file_tags | Delete File Tags
[**DeleteMany**](FilesApi.md#DeleteMany) | **Post** /delete_files | Delete Files Endpoint
[**GetParsedFile**](FilesApi.md#GetParsedFile) | **Get** /parsed_file/{file_id} | Parsed File
[**GetRawFile**](FilesApi.md#GetRawFile) | **Get** /raw_file/{file_id} | Raw File
[**QueryUserFiles**](FilesApi.md#QueryUserFiles) | **Post** /user_files_v2 | User Files V2
[**QueryUserFilesDeprecated**](FilesApi.md#QueryUserFilesDeprecated) | **Post** /user_files | User Files
[**Resync**](FilesApi.md#Resync) | **Post** /resync_file | Resync File
[**Upload**](FilesApi.md#Upload) | **Post** /uploadfile | Create Upload File
[**UploadFromUrl**](FilesApi.md#UploadFromUrl) | **Post** /upload_file_from_url | Create Upload File From Url
[**UploadText**](FilesApi.md#UploadText) | **Post** /upload_text | Create Raw Text



## CreateUserFileTags

Create File Tags



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

    
    organizationUserFileTagCreate := *carbon.NewOrganizationUserFileTagCreate(
        null,
        null,
    )
    
    request := client.FilesApi.CreateUserFileTags(
        organizationUserFileTagCreate,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FilesApi.CreateUserFileTags``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `CreateUserFileTags`: UserFile
    fmt.Fprintf(os.Stdout, "Response from `FilesApi.CreateUserFileTags`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.CreateUserFileTags.Tags`: %v\n", resp.Tags)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.CreateUserFileTags.Id`: %v\n", resp.Id)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.CreateUserFileTags.Source`: %v\n", resp.Source)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.CreateUserFileTags.OrganizationId`: %v\n", resp.OrganizationId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.CreateUserFileTags.OrganizationSuppliedUserId`: %v\n", resp.OrganizationSuppliedUserId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.CreateUserFileTags.OrganizationUserDataSourceId`: %v\n", resp.OrganizationUserDataSourceId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.CreateUserFileTags.ExternalFileId`: %v\n", resp.ExternalFileId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.CreateUserFileTags.ExternalUrl`: %v\n", resp.ExternalUrl)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.CreateUserFileTags.SyncStatus`: %v\n", resp.SyncStatus)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.CreateUserFileTags.SyncErrorMessage`: %v\n", resp.SyncErrorMessage)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.CreateUserFileTags.LastSync`: %v\n", resp.LastSync)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.CreateUserFileTags.FileStatistics`: %v\n", resp.FileStatistics)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.CreateUserFileTags.FileMetadata`: %v\n", resp.FileMetadata)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.CreateUserFileTags.EmbeddingProperties`: %v\n", resp.EmbeddingProperties)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.CreateUserFileTags.ChunkSize`: %v\n", resp.ChunkSize)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.CreateUserFileTags.ChunkOverlap`: %v\n", resp.ChunkOverlap)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.CreateUserFileTags.ChunkProperties`: %v\n", resp.ChunkProperties)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.CreateUserFileTags.Name`: %v\n", resp.Name)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.CreateUserFileTags.ParentId`: %v\n", resp.ParentId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.CreateUserFileTags.EnableAutoSync`: %v\n", resp.EnableAutoSync)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.CreateUserFileTags.PresignedUrl`: %v\n", resp.PresignedUrl)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.CreateUserFileTags.ParsedTextUrl`: %v\n", resp.ParsedTextUrl)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.CreateUserFileTags.AdditionalPresignedUrls`: %v\n", resp.AdditionalPresignedUrls)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.CreateUserFileTags.SkipEmbeddingGeneration`: %v\n", resp.SkipEmbeddingGeneration)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.CreateUserFileTags.SourceCreatedAt`: %v\n", resp.SourceCreatedAt)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.CreateUserFileTags.GenerateSparseVectors`: %v\n", resp.GenerateSparseVectors)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.CreateUserFileTags.CreatedAt`: %v\n", resp.CreatedAt)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.CreateUserFileTags.UpdatedAt`: %v\n", resp.UpdatedAt)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Delete

Delete File Endpoint

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

    request := client.FilesApi.Delete(
        56,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FilesApi.Delete``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `Delete`: GenericSuccessResponse
    fmt.Fprintf(os.Stdout, "Response from `FilesApi.Delete`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `GenericSuccessResponse.Delete.Success`: %v\n", resp.Success)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteFileTags

Delete File Tags

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

    
    organizationUserFileTagsRemove := *carbon.NewOrganizationUserFileTagsRemove(
        null,
        null,
    )
    
    request := client.FilesApi.DeleteFileTags(
        organizationUserFileTagsRemove,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FilesApi.DeleteFileTags``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `DeleteFileTags`: UserFile
    fmt.Fprintf(os.Stdout, "Response from `FilesApi.DeleteFileTags`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.DeleteFileTags.Tags`: %v\n", resp.Tags)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.DeleteFileTags.Id`: %v\n", resp.Id)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.DeleteFileTags.Source`: %v\n", resp.Source)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.DeleteFileTags.OrganizationId`: %v\n", resp.OrganizationId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.DeleteFileTags.OrganizationSuppliedUserId`: %v\n", resp.OrganizationSuppliedUserId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.DeleteFileTags.OrganizationUserDataSourceId`: %v\n", resp.OrganizationUserDataSourceId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.DeleteFileTags.ExternalFileId`: %v\n", resp.ExternalFileId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.DeleteFileTags.ExternalUrl`: %v\n", resp.ExternalUrl)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.DeleteFileTags.SyncStatus`: %v\n", resp.SyncStatus)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.DeleteFileTags.SyncErrorMessage`: %v\n", resp.SyncErrorMessage)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.DeleteFileTags.LastSync`: %v\n", resp.LastSync)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.DeleteFileTags.FileStatistics`: %v\n", resp.FileStatistics)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.DeleteFileTags.FileMetadata`: %v\n", resp.FileMetadata)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.DeleteFileTags.EmbeddingProperties`: %v\n", resp.EmbeddingProperties)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.DeleteFileTags.ChunkSize`: %v\n", resp.ChunkSize)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.DeleteFileTags.ChunkOverlap`: %v\n", resp.ChunkOverlap)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.DeleteFileTags.ChunkProperties`: %v\n", resp.ChunkProperties)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.DeleteFileTags.Name`: %v\n", resp.Name)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.DeleteFileTags.ParentId`: %v\n", resp.ParentId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.DeleteFileTags.EnableAutoSync`: %v\n", resp.EnableAutoSync)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.DeleteFileTags.PresignedUrl`: %v\n", resp.PresignedUrl)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.DeleteFileTags.ParsedTextUrl`: %v\n", resp.ParsedTextUrl)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.DeleteFileTags.AdditionalPresignedUrls`: %v\n", resp.AdditionalPresignedUrls)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.DeleteFileTags.SkipEmbeddingGeneration`: %v\n", resp.SkipEmbeddingGeneration)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.DeleteFileTags.SourceCreatedAt`: %v\n", resp.SourceCreatedAt)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.DeleteFileTags.GenerateSparseVectors`: %v\n", resp.GenerateSparseVectors)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.DeleteFileTags.CreatedAt`: %v\n", resp.CreatedAt)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.DeleteFileTags.UpdatedAt`: %v\n", resp.UpdatedAt)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteMany

Delete Files Endpoint

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

    
    deleteFilesQueryInput := *carbon.NewDeleteFilesQueryInput()
    deleteFilesQueryInput.SetFileIds(null)
    deleteFilesQueryInput.SetSyncStatuses(null)
    deleteFilesQueryInput.SetDeleteNonSyncedOnly(false)
    deleteFilesQueryInput.SetSendWebhook(false)
    
    request := client.FilesApi.DeleteMany(
        deleteFilesQueryInput,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FilesApi.DeleteMany``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `DeleteMany`: GenericSuccessResponse
    fmt.Fprintf(os.Stdout, "Response from `FilesApi.DeleteMany`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `GenericSuccessResponse.DeleteMany.Success`: %v\n", resp.Success)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetParsedFile

Parsed File



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

    request := client.FilesApi.GetParsedFile(
        56,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FilesApi.GetParsedFile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `GetParsedFile`: PresignedURLResponse
    fmt.Fprintf(os.Stdout, "Response from `FilesApi.GetParsedFile`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `PresignedURLResponse.GetParsedFile.PresignedUrl`: %v\n", resp.PresignedUrl)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRawFile

Raw File



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

    request := client.FilesApi.GetRawFile(
        56,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FilesApi.GetRawFile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `GetRawFile`: PresignedURLResponse
    fmt.Fprintf(os.Stdout, "Response from `FilesApi.GetRawFile`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `PresignedURLResponse.GetRawFile.PresignedUrl`: %v\n", resp.PresignedUrl)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## QueryUserFiles

User Files V2



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
    filters := *carbon.NewOrganizationUserFilesToSyncFilters()
    
    organizationUserFilesToSyncQueryInput := *carbon.NewOrganizationUserFilesToSyncQueryInput()
    organizationUserFilesToSyncQueryInput.SetPagination(pagination)
    organizationUserFilesToSyncQueryInput.SetOrderBy(null)
    organizationUserFilesToSyncQueryInput.SetOrderDir(null)
    organizationUserFilesToSyncQueryInput.SetFilters(filters)
    organizationUserFilesToSyncQueryInput.SetIncludeRawFile(null)
    organizationUserFilesToSyncQueryInput.SetIncludeParsedTextFile(null)
    organizationUserFilesToSyncQueryInput.SetIncludeAdditionalFiles(null)
    
    request := client.FilesApi.QueryUserFiles(
        organizationUserFilesToSyncQueryInput,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FilesApi.QueryUserFiles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `QueryUserFiles`: UserFilesV2
    fmt.Fprintf(os.Stdout, "Response from `FilesApi.QueryUserFiles`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `UserFilesV2.QueryUserFiles.Results`: %v\n", resp.Results)
    fmt.Fprintf(os.Stdout, "Response from `UserFilesV2.QueryUserFiles.Count`: %v\n", resp.Count)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## QueryUserFilesDeprecated

User Files



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
    filters := *carbon.NewOrganizationUserFilesToSyncFilters()
    
    organizationUserFilesToSyncQueryInput := *carbon.NewOrganizationUserFilesToSyncQueryInput()
    organizationUserFilesToSyncQueryInput.SetPagination(pagination)
    organizationUserFilesToSyncQueryInput.SetOrderBy(null)
    organizationUserFilesToSyncQueryInput.SetOrderDir(null)
    organizationUserFilesToSyncQueryInput.SetFilters(filters)
    organizationUserFilesToSyncQueryInput.SetIncludeRawFile(null)
    organizationUserFilesToSyncQueryInput.SetIncludeParsedTextFile(null)
    organizationUserFilesToSyncQueryInput.SetIncludeAdditionalFiles(null)
    
    request := client.FilesApi.QueryUserFilesDeprecated(
        organizationUserFilesToSyncQueryInput,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FilesApi.QueryUserFilesDeprecated``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `QueryUserFilesDeprecated`: []UserFile
    fmt.Fprintf(os.Stdout, "Response from `FilesApi.QueryUserFilesDeprecated`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.QueryUserFilesDeprecated.Tags`: %v\n", resp.Tags)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.QueryUserFilesDeprecated.Id`: %v\n", resp.Id)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.QueryUserFilesDeprecated.Source`: %v\n", resp.Source)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.QueryUserFilesDeprecated.OrganizationId`: %v\n", resp.OrganizationId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.QueryUserFilesDeprecated.OrganizationSuppliedUserId`: %v\n", resp.OrganizationSuppliedUserId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.QueryUserFilesDeprecated.OrganizationUserDataSourceId`: %v\n", resp.OrganizationUserDataSourceId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.QueryUserFilesDeprecated.ExternalFileId`: %v\n", resp.ExternalFileId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.QueryUserFilesDeprecated.ExternalUrl`: %v\n", resp.ExternalUrl)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.QueryUserFilesDeprecated.SyncStatus`: %v\n", resp.SyncStatus)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.QueryUserFilesDeprecated.SyncErrorMessage`: %v\n", resp.SyncErrorMessage)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.QueryUserFilesDeprecated.LastSync`: %v\n", resp.LastSync)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.QueryUserFilesDeprecated.FileStatistics`: %v\n", resp.FileStatistics)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.QueryUserFilesDeprecated.FileMetadata`: %v\n", resp.FileMetadata)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.QueryUserFilesDeprecated.EmbeddingProperties`: %v\n", resp.EmbeddingProperties)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.QueryUserFilesDeprecated.ChunkSize`: %v\n", resp.ChunkSize)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.QueryUserFilesDeprecated.ChunkOverlap`: %v\n", resp.ChunkOverlap)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.QueryUserFilesDeprecated.ChunkProperties`: %v\n", resp.ChunkProperties)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.QueryUserFilesDeprecated.Name`: %v\n", resp.Name)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.QueryUserFilesDeprecated.ParentId`: %v\n", resp.ParentId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.QueryUserFilesDeprecated.EnableAutoSync`: %v\n", resp.EnableAutoSync)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.QueryUserFilesDeprecated.PresignedUrl`: %v\n", resp.PresignedUrl)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.QueryUserFilesDeprecated.ParsedTextUrl`: %v\n", resp.ParsedTextUrl)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.QueryUserFilesDeprecated.AdditionalPresignedUrls`: %v\n", resp.AdditionalPresignedUrls)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.QueryUserFilesDeprecated.SkipEmbeddingGeneration`: %v\n", resp.SkipEmbeddingGeneration)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.QueryUserFilesDeprecated.SourceCreatedAt`: %v\n", resp.SourceCreatedAt)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.QueryUserFilesDeprecated.GenerateSparseVectors`: %v\n", resp.GenerateSparseVectors)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.QueryUserFilesDeprecated.CreatedAt`: %v\n", resp.CreatedAt)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.QueryUserFilesDeprecated.UpdatedAt`: %v\n", resp.UpdatedAt)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Resync

Resync File

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

    
    resyncFileQueryInput := *carbon.NewResyncFileQueryInput(
        null,
    )
    resyncFileQueryInput.SetChunkSize(null)
    resyncFileQueryInput.SetChunkOverlap(null)
    
    request := client.FilesApi.Resync(
        resyncFileQueryInput,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FilesApi.Resync``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `Resync`: UserFile
    fmt.Fprintf(os.Stdout, "Response from `FilesApi.Resync`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Resync.Tags`: %v\n", resp.Tags)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Resync.Id`: %v\n", resp.Id)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Resync.Source`: %v\n", resp.Source)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Resync.OrganizationId`: %v\n", resp.OrganizationId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Resync.OrganizationSuppliedUserId`: %v\n", resp.OrganizationSuppliedUserId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Resync.OrganizationUserDataSourceId`: %v\n", resp.OrganizationUserDataSourceId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Resync.ExternalFileId`: %v\n", resp.ExternalFileId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Resync.ExternalUrl`: %v\n", resp.ExternalUrl)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Resync.SyncStatus`: %v\n", resp.SyncStatus)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Resync.SyncErrorMessage`: %v\n", resp.SyncErrorMessage)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Resync.LastSync`: %v\n", resp.LastSync)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Resync.FileStatistics`: %v\n", resp.FileStatistics)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Resync.FileMetadata`: %v\n", resp.FileMetadata)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Resync.EmbeddingProperties`: %v\n", resp.EmbeddingProperties)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Resync.ChunkSize`: %v\n", resp.ChunkSize)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Resync.ChunkOverlap`: %v\n", resp.ChunkOverlap)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Resync.ChunkProperties`: %v\n", resp.ChunkProperties)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Resync.Name`: %v\n", resp.Name)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Resync.ParentId`: %v\n", resp.ParentId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Resync.EnableAutoSync`: %v\n", resp.EnableAutoSync)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Resync.PresignedUrl`: %v\n", resp.PresignedUrl)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Resync.ParsedTextUrl`: %v\n", resp.ParsedTextUrl)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Resync.AdditionalPresignedUrls`: %v\n", resp.AdditionalPresignedUrls)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Resync.SkipEmbeddingGeneration`: %v\n", resp.SkipEmbeddingGeneration)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Resync.SourceCreatedAt`: %v\n", resp.SourceCreatedAt)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Resync.GenerateSparseVectors`: %v\n", resp.GenerateSparseVectors)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Resync.CreatedAt`: %v\n", resp.CreatedAt)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Resync.UpdatedAt`: %v\n", resp.UpdatedAt)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Upload

Create Upload File



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

    
    bodyCreateUploadFileUploadfilePost := *carbon.NewBodyCreateUploadFileUploadfilePost(
        os.NewFile(1234, "some_file"),
    )
    
    request := client.FilesApi.Upload(
        os.NewFile(1234, "some_file"),
        bodyCreateUploadFileUploadfilePost,
    )
    request.ChunkSize(56)
    request.ChunkOverlap(56)
    request.SkipEmbeddingGeneration(false)
    request.SetPageAsBoundary(false)
    request.EmbeddingModel()
    request.UseOcr(false)
    request.GenerateSparseVectors(false)
    request.PrependFilenameToChunks(false)
    request.MaxItemsPerChunk(56)
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FilesApi.Upload``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `Upload`: UserFile
    fmt.Fprintf(os.Stdout, "Response from `FilesApi.Upload`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Upload.Tags`: %v\n", resp.Tags)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Upload.Id`: %v\n", resp.Id)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Upload.Source`: %v\n", resp.Source)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Upload.OrganizationId`: %v\n", resp.OrganizationId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Upload.OrganizationSuppliedUserId`: %v\n", resp.OrganizationSuppliedUserId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Upload.OrganizationUserDataSourceId`: %v\n", resp.OrganizationUserDataSourceId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Upload.ExternalFileId`: %v\n", resp.ExternalFileId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Upload.ExternalUrl`: %v\n", resp.ExternalUrl)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Upload.SyncStatus`: %v\n", resp.SyncStatus)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Upload.SyncErrorMessage`: %v\n", resp.SyncErrorMessage)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Upload.LastSync`: %v\n", resp.LastSync)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Upload.FileStatistics`: %v\n", resp.FileStatistics)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Upload.FileMetadata`: %v\n", resp.FileMetadata)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Upload.EmbeddingProperties`: %v\n", resp.EmbeddingProperties)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Upload.ChunkSize`: %v\n", resp.ChunkSize)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Upload.ChunkOverlap`: %v\n", resp.ChunkOverlap)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Upload.ChunkProperties`: %v\n", resp.ChunkProperties)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Upload.Name`: %v\n", resp.Name)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Upload.ParentId`: %v\n", resp.ParentId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Upload.EnableAutoSync`: %v\n", resp.EnableAutoSync)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Upload.PresignedUrl`: %v\n", resp.PresignedUrl)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Upload.ParsedTextUrl`: %v\n", resp.ParsedTextUrl)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Upload.AdditionalPresignedUrls`: %v\n", resp.AdditionalPresignedUrls)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Upload.SkipEmbeddingGeneration`: %v\n", resp.SkipEmbeddingGeneration)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Upload.SourceCreatedAt`: %v\n", resp.SourceCreatedAt)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Upload.GenerateSparseVectors`: %v\n", resp.GenerateSparseVectors)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Upload.CreatedAt`: %v\n", resp.CreatedAt)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.Upload.UpdatedAt`: %v\n", resp.UpdatedAt)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UploadFromUrl

Create Upload File From Url

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

    
    uploadFileFromUrlInput := *carbon.NewUploadFileFromUrlInput(
        "null",
    )
    uploadFileFromUrlInput.SetFileName("null")
    uploadFileFromUrlInput.SetChunkSize(null)
    uploadFileFromUrlInput.SetChunkOverlap(null)
    uploadFileFromUrlInput.SetSkipEmbeddingGeneration(false)
    uploadFileFromUrlInput.SetSetPageAsBoundary(false)
    uploadFileFromUrlInput.SetEmbeddingModel(null)
    uploadFileFromUrlInput.SetGenerateSparseVectors(false)
    uploadFileFromUrlInput.SetUseTextract(false)
    uploadFileFromUrlInput.SetPrependFilenameToChunks(false)
    uploadFileFromUrlInput.SetMaxItemsPerChunk(null)
    
    request := client.FilesApi.UploadFromUrl(
        uploadFileFromUrlInput,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FilesApi.UploadFromUrl``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `UploadFromUrl`: UserFile
    fmt.Fprintf(os.Stdout, "Response from `FilesApi.UploadFromUrl`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadFromUrl.Tags`: %v\n", resp.Tags)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadFromUrl.Id`: %v\n", resp.Id)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadFromUrl.Source`: %v\n", resp.Source)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadFromUrl.OrganizationId`: %v\n", resp.OrganizationId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadFromUrl.OrganizationSuppliedUserId`: %v\n", resp.OrganizationSuppliedUserId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadFromUrl.OrganizationUserDataSourceId`: %v\n", resp.OrganizationUserDataSourceId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadFromUrl.ExternalFileId`: %v\n", resp.ExternalFileId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadFromUrl.ExternalUrl`: %v\n", resp.ExternalUrl)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadFromUrl.SyncStatus`: %v\n", resp.SyncStatus)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadFromUrl.SyncErrorMessage`: %v\n", resp.SyncErrorMessage)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadFromUrl.LastSync`: %v\n", resp.LastSync)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadFromUrl.FileStatistics`: %v\n", resp.FileStatistics)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadFromUrl.FileMetadata`: %v\n", resp.FileMetadata)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadFromUrl.EmbeddingProperties`: %v\n", resp.EmbeddingProperties)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadFromUrl.ChunkSize`: %v\n", resp.ChunkSize)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadFromUrl.ChunkOverlap`: %v\n", resp.ChunkOverlap)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadFromUrl.ChunkProperties`: %v\n", resp.ChunkProperties)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadFromUrl.Name`: %v\n", resp.Name)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadFromUrl.ParentId`: %v\n", resp.ParentId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadFromUrl.EnableAutoSync`: %v\n", resp.EnableAutoSync)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadFromUrl.PresignedUrl`: %v\n", resp.PresignedUrl)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadFromUrl.ParsedTextUrl`: %v\n", resp.ParsedTextUrl)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadFromUrl.AdditionalPresignedUrls`: %v\n", resp.AdditionalPresignedUrls)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadFromUrl.SkipEmbeddingGeneration`: %v\n", resp.SkipEmbeddingGeneration)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadFromUrl.SourceCreatedAt`: %v\n", resp.SourceCreatedAt)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadFromUrl.GenerateSparseVectors`: %v\n", resp.GenerateSparseVectors)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadFromUrl.CreatedAt`: %v\n", resp.CreatedAt)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadFromUrl.UpdatedAt`: %v\n", resp.UpdatedAt)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UploadText

Create Raw Text



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

    
    rawTextInput := *carbon.NewRawTextInput(
        "null",
    )
    rawTextInput.SetName("null")
    rawTextInput.SetChunkSize(null)
    rawTextInput.SetChunkOverlap(null)
    rawTextInput.SetSkipEmbeddingGeneration(false)
    rawTextInput.SetOverwriteFileId(null)
    rawTextInput.SetEmbeddingModel(null)
    rawTextInput.SetGenerateSparseVectors(false)
    
    request := client.FilesApi.UploadText(
        rawTextInput,
    )
    
    resp, httpRes, err := request.Execute()

    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FilesApi.UploadText``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", httpRes)
    }
    // response from `UploadText`: UserFile
    fmt.Fprintf(os.Stdout, "Response from `FilesApi.UploadText`: %v\n", resp)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadText.Tags`: %v\n", resp.Tags)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadText.Id`: %v\n", resp.Id)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadText.Source`: %v\n", resp.Source)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadText.OrganizationId`: %v\n", resp.OrganizationId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadText.OrganizationSuppliedUserId`: %v\n", resp.OrganizationSuppliedUserId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadText.OrganizationUserDataSourceId`: %v\n", resp.OrganizationUserDataSourceId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadText.ExternalFileId`: %v\n", resp.ExternalFileId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadText.ExternalUrl`: %v\n", resp.ExternalUrl)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadText.SyncStatus`: %v\n", resp.SyncStatus)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadText.SyncErrorMessage`: %v\n", resp.SyncErrorMessage)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadText.LastSync`: %v\n", resp.LastSync)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadText.FileStatistics`: %v\n", resp.FileStatistics)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadText.FileMetadata`: %v\n", resp.FileMetadata)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadText.EmbeddingProperties`: %v\n", resp.EmbeddingProperties)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadText.ChunkSize`: %v\n", resp.ChunkSize)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadText.ChunkOverlap`: %v\n", resp.ChunkOverlap)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadText.ChunkProperties`: %v\n", resp.ChunkProperties)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadText.Name`: %v\n", resp.Name)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadText.ParentId`: %v\n", resp.ParentId)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadText.EnableAutoSync`: %v\n", resp.EnableAutoSync)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadText.PresignedUrl`: %v\n", resp.PresignedUrl)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadText.ParsedTextUrl`: %v\n", resp.ParsedTextUrl)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadText.AdditionalPresignedUrls`: %v\n", resp.AdditionalPresignedUrls)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadText.SkipEmbeddingGeneration`: %v\n", resp.SkipEmbeddingGeneration)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadText.SourceCreatedAt`: %v\n", resp.SourceCreatedAt)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadText.GenerateSparseVectors`: %v\n", resp.GenerateSparseVectors)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadText.CreatedAt`: %v\n", resp.CreatedAt)
    fmt.Fprintf(os.Stdout, "Response from `UserFile.UploadText.UpdatedAt`: %v\n", resp.UpdatedAt)
}
```

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

