<div align="center">

[![Visit Carbon](./header.png)](https://carbon.ai)

# [Carbon](https://carbon.ai)

Connect external data to LLMs, no matter the source.

[![Go Reference](https://pkg.go.dev/badge/github.com/Carbon-for-Developers/carbon-sdks/go)](https://pkg.go.dev/github.com/Carbon-for-Developers/carbon-sdks/go@v0.1.0)

</div>

## Installation

Add to your project:

```shell
go get github.com/Carbon-for-Developers/carbon-sdks/go
```

## Getting Started

```golang
package main

import (
	"fmt"

	carbon "github.com/Carbon-for-Developers/carbon-sdks/go"
)

func main() {
	// 1) Get an access token
	configuration := carbon.NewConfiguration()
	configuration.SetApiKey("API_KEY")
	configuration.SetCustomerId("CUSTOMER_ID")
	client := carbon.NewAPIClient(configuration)
	accessTokenRequest := client.AuthApi.GetAccessToken()
	accessTokenResponse, _, _ := accessTokenRequest.Execute()
	accessToken := accessTokenResponse.GetAccessToken()

	// 2) Use the access token to make requests
	configuration = carbon.NewConfiguration()
	configuration.SetAccessToken(accessToken)
	client = carbon.NewAPIClient(configuration)

	whiteLabelingRequest := client.AuthApi.GetWhiteLabeling()
	whiteLabelingResponse, _, _ := whiteLabelingRequest.Execute()
	integrations := whiteLabelingResponse.GetIntegrations()
	fmt.Println(integrations)
}

```

## Documentation for API Endpoints

All URIs are relative to *https://api.carbon.ai*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AuthApi* | [**GetAccessToken**](docs/AuthApi.md#getaccesstoken) | **Get** /auth/v1/access_token | Get Access Token
*AuthApi* | [**GetWhiteLabeling**](docs/AuthApi.md#getwhitelabeling) | **Get** /auth/v1/white_labeling | Get White Labeling
*DataSourcesApi* | [**QueryUserDataSources**](docs/DataSourcesApi.md#queryuserdatasources) | **Post** /user_data_sources | User Data Sources
*DataSourcesApi* | [**RevokeAccessToken**](docs/DataSourcesApi.md#revokeaccesstoken) | **Post** /revoke_access_token | Revoke Access Token
*EmbeddingsApi* | [**GetDocuments**](docs/EmbeddingsApi.md#getdocuments) | **Post** /embeddings | Embeddings
*EmbeddingsApi* | [**GetEmbeddingsAndChunks**](docs/EmbeddingsApi.md#getembeddingsandchunks) | **Post** /text_chunks | Retrieve Embeddings And Content
*EmbeddingsApi* | [**UploadChunksAndEmbeddings**](docs/EmbeddingsApi.md#uploadchunksandembeddings) | **Post** /upload_chunks_and_embeddings | Upload Chunks And Embeddings
*FilesApi* | [**CreateUserFileTags**](docs/FilesApi.md#createuserfiletags) | **Post** /create_user_file_tags | Create File Tags
*FilesApi* | [**Delete**](docs/FilesApi.md#delete) | **Delete** /deletefile/{file_id} | Delete File Endpoint
*FilesApi* | [**DeleteFileTags**](docs/FilesApi.md#deletefiletags) | **Post** /delete_user_file_tags | Delete File Tags
*FilesApi* | [**DeleteMany**](docs/FilesApi.md#deletemany) | **Post** /delete_files | Delete Files Endpoint
*FilesApi* | [**GetParsedFile**](docs/FilesApi.md#getparsedfile) | **Get** /parsed_file/{file_id} | Parsed File
*FilesApi* | [**GetRawFile**](docs/FilesApi.md#getrawfile) | **Get** /raw_file/{file_id} | Raw File
*FilesApi* | [**QueryUserFiles**](docs/FilesApi.md#queryuserfiles) | **Post** /user_files_v2 | User Files V2
*FilesApi* | [**QueryUserFilesDeprecated**](docs/FilesApi.md#queryuserfilesdeprecated) | **Post** /user_files | User Files
*FilesApi* | [**Resync**](docs/FilesApi.md#resync) | **Post** /resync_file | Resync File
*FilesApi* | [**Upload**](docs/FilesApi.md#upload) | **Post** /uploadfile | Create Upload File
*FilesApi* | [**UploadFromUrl**](docs/FilesApi.md#uploadfromurl) | **Post** /upload_file_from_url | Create Upload File From Url
*FilesApi* | [**UploadText**](docs/FilesApi.md#uploadtext) | **Post** /upload_text | Create Raw Text
*HealthApi* | [**Check**](docs/HealthApi.md#check) | **Get** /health | Health
*IntegrationsApi* | [**ConnectFreshdesk**](docs/IntegrationsApi.md#connectfreshdesk) | **Post** /integrations/freshdesk | Freshdesk Connect
*IntegrationsApi* | [**ConnectGitbook**](docs/IntegrationsApi.md#connectgitbook) | **Post** /integrations/gitbook | Gitbook Connect
*IntegrationsApi* | [**CreateAwsIamUser**](docs/IntegrationsApi.md#createawsiamuser) | **Post** /integrations/s3 | S3 Auth
*IntegrationsApi* | [**GetOauthUrl**](docs/IntegrationsApi.md#getoauthurl) | **Post** /integrations/oauth_url | Get Oauth Url
*IntegrationsApi* | [**ListConfluencePages**](docs/IntegrationsApi.md#listconfluencepages) | **Post** /integrations/confluence/list | Confluence List
*IntegrationsApi* | [**ListDataSourceItems**](docs/IntegrationsApi.md#listdatasourceitems) | **Post** /integrations/items/list | List Data Source Items
*IntegrationsApi* | [**ListFolders**](docs/IntegrationsApi.md#listfolders) | **Get** /integrations/outlook/user_folders | Outlook Folders
*IntegrationsApi* | [**ListGitbookSpaces**](docs/IntegrationsApi.md#listgitbookspaces) | **Get** /integrations/gitbook/spaces | Gitbook Spaces
*IntegrationsApi* | [**ListLabels**](docs/IntegrationsApi.md#listlabels) | **Get** /integrations/gmail/user_labels | Gmail Labels
*IntegrationsApi* | [**ListOutlookCategories**](docs/IntegrationsApi.md#listoutlookcategories) | **Get** /integrations/outlook/user_categories | Outlook Categories
*IntegrationsApi* | [**SyncConfluence**](docs/IntegrationsApi.md#syncconfluence) | **Post** /integrations/confluence/sync | Confluence Sync
*IntegrationsApi* | [**SyncDataSourceItems**](docs/IntegrationsApi.md#syncdatasourceitems) | **Post** /integrations/items/sync | Sync Data Source Items
*IntegrationsApi* | [**SyncFiles**](docs/IntegrationsApi.md#syncfiles) | **Post** /integrations/files/sync | Sync Files
*IntegrationsApi* | [**SyncGitbook**](docs/IntegrationsApi.md#syncgitbook) | **Post** /integrations/gitbook/sync | Gitbook Sync
*IntegrationsApi* | [**SyncGmail**](docs/IntegrationsApi.md#syncgmail) | **Post** /integrations/gmail/sync | Gmail Sync
*IntegrationsApi* | [**SyncOutlook**](docs/IntegrationsApi.md#syncoutlook) | **Post** /integrations/outlook/sync | Outlook Sync
*IntegrationsApi* | [**SyncRssFeed**](docs/IntegrationsApi.md#syncrssfeed) | **Post** /integrations/rss_feed | Rss Feed
*IntegrationsApi* | [**SyncS3Files**](docs/IntegrationsApi.md#syncs3files) | **Post** /integrations/s3/files | S3 Files
*OrganizationsApi* | [**Get**](docs/OrganizationsApi.md#get) | **Get** /organization | Get Organization
*UsersApi* | [**Delete**](docs/UsersApi.md#delete) | **Post** /delete_users | Delete Users
*UsersApi* | [**Get**](docs/UsersApi.md#get) | **Post** /user | User Endpoint
*UsersApi* | [**ToggleUserFeatures**](docs/UsersApi.md#toggleuserfeatures) | **Post** /modify_user_configuration | Toggle User Features
*UtilitiesApi* | [**FetchUrls**](docs/UtilitiesApi.md#fetchurls) | **Get** /fetch_urls | Fetch Urls
*UtilitiesApi* | [**FetchYoutubeTranscripts**](docs/UtilitiesApi.md#fetchyoutubetranscripts) | **Get** /fetch_youtube_transcript | Fetch Youtube Transcripts
*UtilitiesApi* | [**ProcessSitemap**](docs/UtilitiesApi.md#processsitemap) | **Get** /process_sitemap | Sitemap
*UtilitiesApi* | [**ScrapeSitemap**](docs/UtilitiesApi.md#scrapesitemap) | **Post** /scrape_sitemap | Scrape Sitemap
*UtilitiesApi* | [**ScrapeWeb**](docs/UtilitiesApi.md#scrapeweb) | **Post** /web_scrape | Web Scrape
*UtilitiesApi* | [**SearchUrls**](docs/UtilitiesApi.md#searchurls) | **Get** /search_urls | Search Urls
*WebhooksApi* | [**AddUrl**](docs/WebhooksApi.md#addurl) | **Post** /add_webhook | Add Webhook Url
*WebhooksApi* | [**DeleteUrl**](docs/WebhooksApi.md#deleteurl) | **Delete** /delete_webhook/{webhook_id} | Delete Webhook Url
*WebhooksApi* | [**Urls**](docs/WebhooksApi.md#urls) | **Post** /webhooks | Webhook Urls


## Documentation For Models

 - [AddWebhookProps](docs/AddWebhookProps.md)
 - [BodyCreateUploadFileUploadfilePost](docs/BodyCreateUploadFileUploadfilePost.md)
 - [ChunkProperties](docs/ChunkProperties.md)
 - [ChunkPropertiesNullable](docs/ChunkPropertiesNullable.md)
 - [ChunksAndEmbeddings](docs/ChunksAndEmbeddings.md)
 - [ChunksAndEmbeddingsUploadInput](docs/ChunksAndEmbeddingsUploadInput.md)
 - [DataSourceLastSyncActions](docs/DataSourceLastSyncActions.md)
 - [DataSourceSyncStatuses](docs/DataSourceSyncStatuses.md)
 - [DataSourceType](docs/DataSourceType.md)
 - [DataSourceTypeNullable](docs/DataSourceTypeNullable.md)
 - [DeleteFilesQueryInput](docs/DeleteFilesQueryInput.md)
 - [DeleteUsersInput](docs/DeleteUsersInput.md)
 - [DirectoryItem](docs/DirectoryItem.md)
 - [DocumentResponse](docs/DocumentResponse.md)
 - [DocumentResponseList](docs/DocumentResponseList.md)
 - [EmbeddingAndChunk](docs/EmbeddingAndChunk.md)
 - [EmbeddingGenerators](docs/EmbeddingGenerators.md)
 - [EmbeddingGeneratorsNullable](docs/EmbeddingGeneratorsNullable.md)
 - [EmbeddingProperties](docs/EmbeddingProperties.md)
 - [EmbeddingsAndChunksFilters](docs/EmbeddingsAndChunksFilters.md)
 - [EmbeddingsAndChunksOrderByColumns](docs/EmbeddingsAndChunksOrderByColumns.md)
 - [EmbeddingsAndChunksQueryInput](docs/EmbeddingsAndChunksQueryInput.md)
 - [EmbeddingsAndChunksResponse](docs/EmbeddingsAndChunksResponse.md)
 - [ExternalFileSyncStatuses](docs/ExternalFileSyncStatuses.md)
 - [ExternalSourceItem](docs/ExternalSourceItem.md)
 - [FetchURLsResponse](docs/FetchURLsResponse.md)
 - [FileContentTypes](docs/FileContentTypes.md)
 - [FileContentTypesNullable](docs/FileContentTypesNullable.md)
 - [FileFormats](docs/FileFormats.md)
 - [FileFormatsNullable](docs/FileFormatsNullable.md)
 - [FileStatistics](docs/FileStatistics.md)
 - [FileStatisticsNullable](docs/FileStatisticsNullable.md)
 - [FreshDeskConnectRequest](docs/FreshDeskConnectRequest.md)
 - [GenericSuccessResponse](docs/GenericSuccessResponse.md)
 - [GetEmbeddingDocumentsBody](docs/GetEmbeddingDocumentsBody.md)
 - [GitbookConnectRequest](docs/GitbookConnectRequest.md)
 - [GitbookSyncRequest](docs/GitbookSyncRequest.md)
 - [GmailSyncInput](docs/GmailSyncInput.md)
 - [HTTPValidationError](docs/HTTPValidationError.md)
 - [HybridSearchTuningParams](docs/HybridSearchTuningParams.md)
 - [HybridSearchTuningParamsNullable](docs/HybridSearchTuningParamsNullable.md)
 - [ListDataSourceItemsRequest](docs/ListDataSourceItemsRequest.md)
 - [ListDataSourceItemsResponse](docs/ListDataSourceItemsResponse.md)
 - [ListRequest](docs/ListRequest.md)
 - [ListResponse](docs/ListResponse.md)
 - [LocationPropertyInner](docs/LocationPropertyInner.md)
 - [ModifyUserConfigurationInput](docs/ModifyUserConfigurationInput.md)
 - [OAuthURLRequest](docs/OAuthURLRequest.md)
 - [OrderDir](docs/OrderDir.md)
 - [OrganizationResponse](docs/OrganizationResponse.md)
 - [OrganizationUserDataSourceAPI](docs/OrganizationUserDataSourceAPI.md)
 - [OrganizationUserDataSourceFilters](docs/OrganizationUserDataSourceFilters.md)
 - [OrganizationUserDataSourceOrderByColumns](docs/OrganizationUserDataSourceOrderByColumns.md)
 - [OrganizationUserDataSourceQueryInput](docs/OrganizationUserDataSourceQueryInput.md)
 - [OrganizationUserDataSourceResponse](docs/OrganizationUserDataSourceResponse.md)
 - [OrganizationUserFileTagCreate](docs/OrganizationUserFileTagCreate.md)
 - [OrganizationUserFileTagsRemove](docs/OrganizationUserFileTagsRemove.md)
 - [OrganizationUserFilesToSyncFilters](docs/OrganizationUserFilesToSyncFilters.md)
 - [OrganizationUserFilesToSyncOrderByTypes](docs/OrganizationUserFilesToSyncOrderByTypes.md)
 - [OrganizationUserFilesToSyncQueryInput](docs/OrganizationUserFilesToSyncQueryInput.md)
 - [OutlookSyncInput](docs/OutlookSyncInput.md)
 - [Pagination](docs/Pagination.md)
 - [PresignedURLResponse](docs/PresignedURLResponse.md)
 - [RSSFeedInput](docs/RSSFeedInput.md)
 - [RankProperty](docs/RankProperty.md)
 - [RawTextInput](docs/RawTextInput.md)
 - [RawTranscriptPropertyInnerValue](docs/RawTranscriptPropertyInnerValue.md)
 - [ResyncFileQueryInput](docs/ResyncFileQueryInput.md)
 - [RevokeAccessTokenInput](docs/RevokeAccessTokenInput.md)
 - [S3AuthRequest](docs/S3AuthRequest.md)
 - [S3FileSyncInput](docs/S3FileSyncInput.md)
 - [S3GetFileInput](docs/S3GetFileInput.md)
 - [SingleChunksAndEmbeddingsUploadInput](docs/SingleChunksAndEmbeddingsUploadInput.md)
 - [SitemapScrapeRequest](docs/SitemapScrapeRequest.md)
 - [SourceProperty](docs/SourceProperty.md)
 - [SyncDirectoryRequest](docs/SyncDirectoryRequest.md)
 - [SyncFilesRequest](docs/SyncFilesRequest.md)
 - [Tags](docs/Tags.md)
 - [Tags1](docs/Tags1.md)
 - [TextEmbeddingGenerators](docs/TextEmbeddingGenerators.md)
 - [TokenResponse](docs/TokenResponse.md)
 - [UploadFileFromUrlInput](docs/UploadFileFromUrlInput.md)
 - [UserFile](docs/UserFile.md)
 - [UserFilesV2](docs/UserFilesV2.md)
 - [UserRequestContent](docs/UserRequestContent.md)
 - [UserResponse](docs/UserResponse.md)
 - [ValidationError](docs/ValidationError.md)
 - [Webhook](docs/Webhook.md)
 - [WebhookFilters](docs/WebhookFilters.md)
 - [WebhookNoKey](docs/WebhookNoKey.md)
 - [WebhookOrderByColumns](docs/WebhookOrderByColumns.md)
 - [WebhookQueryInput](docs/WebhookQueryInput.md)
 - [WebhookQueryResponse](docs/WebhookQueryResponse.md)
 - [WebscrapeRequest](docs/WebscrapeRequest.md)
 - [WhiteLabelingResponse](docs/WhiteLabelingResponse.md)
 - [YoutubeTranscriptResponse](docs/YoutubeTranscriptResponse.md)
