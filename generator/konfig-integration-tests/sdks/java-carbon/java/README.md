<div align="center">

[![Visit Carbon](https://raw.githubusercontent.com/Carbon-for-Developers/carbon-sdks/HEAD/java/header.png)](https://carbon.ai)

# [Carbon](https://carbon.ai)

Connect external data to LLMs, no matter the source.

[![Maven Central](https://img.shields.io/badge/Maven%20Central-v0.1.0-blue)](https://central.sonatype.com/artifact/com.konfigthis.carbonai/carbonai-java-sdk/0.1.0)

</div>

## Requirements

Building the API client library requires:

1. Java 1.8+
2. Maven (3.8.3+)/Gradle (7.2+)

If you are adding this library to an Android Application or Library:

3. Android 8.0+ (API Level 26+)

## Installation

To install the API client library to your local Maven repository, simply execute:

```shell
mvn clean install
```

To deploy it to a remote Maven repository instead, configure the settings of the repository and execute:

```shell
mvn clean deploy
```

Refer to the [OSSRH Guide](http://central.sonatype.org/pages/ossrh-guide.html) for more information.

### Maven users

Add this dependency to your project's POM:

```xml
<dependency>
  <groupId>com.konfigthis.carbonai</groupId>
  <artifactId>carbonai-java-sdk</artifactId>
  <version>0.1.0</version>
  <scope>compile</scope>
</dependency>
```

### Gradle users

Add this dependency to your `build.gradle`:

```groovy
// build.gradle
repositories {
  mavenCentral()
}

dependencies {
   implementation "com.konfigthis.carbonai:carbonai-java-sdk:0.1.0"
}
```

### Android users

Make sure your `build.gradle` file as a `minSdk` version of at least 26:
```groovy
// build.gradle
android {
    defaultConfig {
        minSdk 26
    }
}
```

Also make sure your library or application has internet permissions in your `AndroidManifest.xml`:

```xml
<!--AndroidManifest.xml-->
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">
    <uses-permission android:name="android.permission.INTERNET"/>
</manifest>
```

### Others

At first generate the JAR by executing:

```shell
mvn clean package
```

Then manually install the following JARs:

* `target/carbonai-java-sdk-0.1.0.jar`
* `target/lib/*.jar`

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

```java
import com.konfigthis.carbonai.*;

public class GettingStarted {
    public static void main(String[] args) {
        // 1) Get an access token for a customer
        Configuration configuration = new Configuration();
        configuration.apiKey = "YOUR API KEY";
        configuration.customerId = "YOUR CUSTOMER ID";
        Carbon carbon = new Carbon(configuration);

        TokenResponse token = null;
        try {
            token = carbon.auth.getAccessToken().execute();
        } catch (ApiException e) {
            e.printStackTrace();
        }

        // 2) Use the access token to authenticate moving forward
        Configuration configuration2 = new Configuration();
        configuration2.accessToken = token.getAccessToken();
        Carbon carbon2 = new Carbon(configuration2);

        // use SDK as usual
        WhiteLabelingResponse whiteLabeling = null;
        try {
            whiteLabeling = carbon2.auth.getWhiteLabeling().execute();
        } catch (ApiException e) {
            e.printStackTrace();
        }
        // etc.
    }
}
```

## Documentation for API Endpoints

All URIs are relative to *https://api.carbon.ai*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AuthApi* | [**getAccessToken**](docs/AuthApi.md#getAccessToken) | **GET** /auth/v1/access_token | Get Access Token
*AuthApi* | [**getWhiteLabeling**](docs/AuthApi.md#getWhiteLabeling) | **GET** /auth/v1/white_labeling | Get White Labeling
*DataSourcesApi* | [**queryUserDataSources**](docs/DataSourcesApi.md#queryUserDataSources) | **POST** /user_data_sources | User Data Sources
*DataSourcesApi* | [**revokeAccessToken**](docs/DataSourcesApi.md#revokeAccessToken) | **POST** /revoke_access_token | Revoke Access Token
*EmbeddingsApi* | [**getDocuments**](docs/EmbeddingsApi.md#getDocuments) | **POST** /embeddings | Embeddings
*EmbeddingsApi* | [**getEmbeddingsAndChunks**](docs/EmbeddingsApi.md#getEmbeddingsAndChunks) | **POST** /text_chunks | Retrieve Embeddings And Content
*EmbeddingsApi* | [**uploadChunksAndEmbeddings**](docs/EmbeddingsApi.md#uploadChunksAndEmbeddings) | **POST** /upload_chunks_and_embeddings | Upload Chunks And Embeddings
*FilesApi* | [**createUserFileTags**](docs/FilesApi.md#createUserFileTags) | **POST** /create_user_file_tags | Create File Tags
*FilesApi* | [**delete**](docs/FilesApi.md#delete) | **DELETE** /deletefile/{file_id} | Delete File Endpoint
*FilesApi* | [**deleteFileTags**](docs/FilesApi.md#deleteFileTags) | **POST** /delete_user_file_tags | Delete File Tags
*FilesApi* | [**deleteMany**](docs/FilesApi.md#deleteMany) | **POST** /delete_files | Delete Files Endpoint
*FilesApi* | [**deleteV2**](docs/FilesApi.md#deleteV2) | **POST** /delete_files_v2 | Delete Files V2 Endpoint
*FilesApi* | [**getParsedFile**](docs/FilesApi.md#getParsedFile) | **GET** /parsed_file/{file_id} | Parsed File
*FilesApi* | [**getRawFile**](docs/FilesApi.md#getRawFile) | **GET** /raw_file/{file_id} | Raw File
*FilesApi* | [**queryUserFiles**](docs/FilesApi.md#queryUserFiles) | **POST** /user_files_v2 | User Files V2
*FilesApi* | [**queryUserFilesDeprecated**](docs/FilesApi.md#queryUserFilesDeprecated) | **POST** /user_files | User Files
*FilesApi* | [**resync**](docs/FilesApi.md#resync) | **POST** /resync_file | Resync File
*FilesApi* | [**upload**](docs/FilesApi.md#upload) | **POST** /uploadfile | Create Upload File
*FilesApi* | [**uploadFromUrl**](docs/FilesApi.md#uploadFromUrl) | **POST** /upload_file_from_url | Create Upload File From Url
*FilesApi* | [**uploadText**](docs/FilesApi.md#uploadText) | **POST** /upload_text | Create Raw Text
*HealthApi* | [**check**](docs/HealthApi.md#check) | **GET** /health | Health
*IntegrationsApi* | [**connectDataSource**](docs/IntegrationsApi.md#connectDataSource) | **POST** /integrations/connect | Connect Data Source
*IntegrationsApi* | [**connectFreshdesk**](docs/IntegrationsApi.md#connectFreshdesk) | **POST** /integrations/freshdesk | Freshdesk Connect
*IntegrationsApi* | [**connectGitbook**](docs/IntegrationsApi.md#connectGitbook) | **POST** /integrations/gitbook | Gitbook Connect
*IntegrationsApi* | [**createAwsIamUser**](docs/IntegrationsApi.md#createAwsIamUser) | **POST** /integrations/s3 | S3 Auth
*IntegrationsApi* | [**getOauthUrl**](docs/IntegrationsApi.md#getOauthUrl) | **POST** /integrations/oauth_url | Get Oauth Url
*IntegrationsApi* | [**listConfluencePages**](docs/IntegrationsApi.md#listConfluencePages) | **POST** /integrations/confluence/list | Confluence List
*IntegrationsApi* | [**listDataSourceItems**](docs/IntegrationsApi.md#listDataSourceItems) | **POST** /integrations/items/list | List Data Source Items
*IntegrationsApi* | [**listFolders**](docs/IntegrationsApi.md#listFolders) | **GET** /integrations/outlook/user_folders | Outlook Folders
*IntegrationsApi* | [**listGitbookSpaces**](docs/IntegrationsApi.md#listGitbookSpaces) | **GET** /integrations/gitbook/spaces | Gitbook Spaces
*IntegrationsApi* | [**listLabels**](docs/IntegrationsApi.md#listLabels) | **GET** /integrations/gmail/user_labels | Gmail Labels
*IntegrationsApi* | [**listOutlookCategories**](docs/IntegrationsApi.md#listOutlookCategories) | **GET** /integrations/outlook/user_categories | Outlook Categories
*IntegrationsApi* | [**listRepos**](docs/IntegrationsApi.md#listRepos) | **GET** /integrations/github/repos | Github List Repos
*IntegrationsApi* | [**syncConfluence**](docs/IntegrationsApi.md#syncConfluence) | **POST** /integrations/confluence/sync | Confluence Sync
*IntegrationsApi* | [**syncDataSourceItems**](docs/IntegrationsApi.md#syncDataSourceItems) | **POST** /integrations/items/sync | Sync Data Source Items
*IntegrationsApi* | [**syncFiles**](docs/IntegrationsApi.md#syncFiles) | **POST** /integrations/files/sync | Sync Files
*IntegrationsApi* | [**syncGitHub**](docs/IntegrationsApi.md#syncGitHub) | **POST** /integrations/github | Github Connect
*IntegrationsApi* | [**syncGitbook**](docs/IntegrationsApi.md#syncGitbook) | **POST** /integrations/gitbook/sync | Gitbook Sync
*IntegrationsApi* | [**syncGmail**](docs/IntegrationsApi.md#syncGmail) | **POST** /integrations/gmail/sync | Gmail Sync
*IntegrationsApi* | [**syncOutlook**](docs/IntegrationsApi.md#syncOutlook) | **POST** /integrations/outlook/sync | Outlook Sync
*IntegrationsApi* | [**syncRepos**](docs/IntegrationsApi.md#syncRepos) | **POST** /integrations/github/sync_repos | Github Sync Repos
*IntegrationsApi* | [**syncRssFeed**](docs/IntegrationsApi.md#syncRssFeed) | **POST** /integrations/rss_feed | Rss Feed
*IntegrationsApi* | [**syncS3Files**](docs/IntegrationsApi.md#syncS3Files) | **POST** /integrations/s3/files | S3 Files
*OrganizationsApi* | [**get**](docs/OrganizationsApi.md#get) | **GET** /organization | Get Organization
*OrganizationsApi* | [**update**](docs/OrganizationsApi.md#update) | **POST** /organization/update | Update Organization
*OrganizationsApi* | [**updateStats**](docs/OrganizationsApi.md#updateStats) | **POST** /organization/statistics | Update Organization Statistics
*UsersApi* | [**delete**](docs/UsersApi.md#delete) | **POST** /delete_users | Delete Users
*UsersApi* | [**get**](docs/UsersApi.md#get) | **POST** /user | User Endpoint
*UsersApi* | [**toggleUserFeatures**](docs/UsersApi.md#toggleUserFeatures) | **POST** /modify_user_configuration | Toggle User Features
*UsersApi* | [**updateUsers**](docs/UsersApi.md#updateUsers) | **POST** /update_users | Update Users
*UtilitiesApi* | [**fetchUrls**](docs/UtilitiesApi.md#fetchUrls) | **GET** /fetch_urls | Fetch Urls
*UtilitiesApi* | [**fetchYoutubeTranscripts**](docs/UtilitiesApi.md#fetchYoutubeTranscripts) | **GET** /fetch_youtube_transcript | Fetch Youtube Transcripts
*UtilitiesApi* | [**processSitemap**](docs/UtilitiesApi.md#processSitemap) | **GET** /process_sitemap | Sitemap
*UtilitiesApi* | [**scrapeSitemap**](docs/UtilitiesApi.md#scrapeSitemap) | **POST** /scrape_sitemap | Scrape Sitemap
*UtilitiesApi* | [**scrapeWeb**](docs/UtilitiesApi.md#scrapeWeb) | **POST** /web_scrape | Web Scrape
*UtilitiesApi* | [**searchUrls**](docs/UtilitiesApi.md#searchUrls) | **GET** /search_urls | Search Urls
*WebhooksApi* | [**addUrl**](docs/WebhooksApi.md#addUrl) | **POST** /add_webhook | Add Webhook Url
*WebhooksApi* | [**deleteUrl**](docs/WebhooksApi.md#deleteUrl) | **DELETE** /delete_webhook/{webhook_id} | Delete Webhook Url
*WebhooksApi* | [**urls**](docs/WebhooksApi.md#urls) | **POST** /webhooks | Webhook Urls


## Documentation for Models

 - [AddWebhookProps](docs/AddWebhookProps.md)
 - [BodyCreateUploadFileUploadfilePost](docs/BodyCreateUploadFileUploadfilePost.md)
 - [ChunkProperties](docs/ChunkProperties.md)
 - [ChunkPropertiesNullable](docs/ChunkPropertiesNullable.md)
 - [ChunksAndEmbeddings](docs/ChunksAndEmbeddings.md)
 - [ChunksAndEmbeddingsUploadInput](docs/ChunksAndEmbeddingsUploadInput.md)
 - [ConfluenceAuthentication](docs/ConfluenceAuthentication.md)
 - [ConnectDataSourceInput](docs/ConnectDataSourceInput.md)
 - [ConnectDataSourceResponse](docs/ConnectDataSourceResponse.md)
 - [CustomCredentialsType](docs/CustomCredentialsType.md)
 - [DataSourceLastSyncActions](docs/DataSourceLastSyncActions.md)
 - [DataSourceSyncStatuses](docs/DataSourceSyncStatuses.md)
 - [DataSourceType](docs/DataSourceType.md)
 - [DataSourceTypeNullable](docs/DataSourceTypeNullable.md)
 - [DeleteFilesQueryInput](docs/DeleteFilesQueryInput.md)
 - [DeleteFilesV2QueryInput](docs/DeleteFilesV2QueryInput.md)
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
 - [ExternalSourceItemsOrderBy](docs/ExternalSourceItemsOrderBy.md)
 - [FetchURLsResponse](docs/FetchURLsResponse.md)
 - [FileContentTypes](docs/FileContentTypes.md)
 - [FileContentTypesNullable](docs/FileContentTypesNullable.md)
 - [FileFormats](docs/FileFormats.md)
 - [FileFormatsNullable](docs/FileFormatsNullable.md)
 - [FileStatistics](docs/FileStatistics.md)
 - [FileStatisticsNullable](docs/FileStatisticsNullable.md)
 - [FileSyncConfig](docs/FileSyncConfig.md)
 - [FileSyncConfigNullable](docs/FileSyncConfigNullable.md)
 - [FreshDeskConnectRequest](docs/FreshDeskConnectRequest.md)
 - [FreskdeskAuthentication](docs/FreskdeskAuthentication.md)
 - [GenericSuccessResponse](docs/GenericSuccessResponse.md)
 - [GetEmbeddingDocumentsBody](docs/GetEmbeddingDocumentsBody.md)
 - [GitbookAuthetication](docs/GitbookAuthetication.md)
 - [GitbookConnectRequest](docs/GitbookConnectRequest.md)
 - [GitbookSyncRequest](docs/GitbookSyncRequest.md)
 - [GithubAuthentication](docs/GithubAuthentication.md)
 - [GithubConnectRequest](docs/GithubConnectRequest.md)
 - [GithubFetchReposRequest](docs/GithubFetchReposRequest.md)
 - [GmailSyncInput](docs/GmailSyncInput.md)
 - [HelpdeskFileTypes](docs/HelpdeskFileTypes.md)
 - [HybridSearchTuningParams](docs/HybridSearchTuningParams.md)
 - [HybridSearchTuningParamsNullable](docs/HybridSearchTuningParamsNullable.md)
 - [ListDataSourceItemsRequest](docs/ListDataSourceItemsRequest.md)
 - [ListDataSourceItemsResponse](docs/ListDataSourceItemsResponse.md)
 - [ListItemsFilters](docs/ListItemsFilters.md)
 - [ListItemsFiltersNullable](docs/ListItemsFiltersNullable.md)
 - [ListRequest](docs/ListRequest.md)
 - [ListResponse](docs/ListResponse.md)
 - [ModifyUserConfigurationInput](docs/ModifyUserConfigurationInput.md)
 - [NotionAuthentication](docs/NotionAuthentication.md)
 - [OANSCZGF](docs/OANSCZGF.md)
 - [OAuthAuthentication](docs/OAuthAuthentication.md)
 - [OAuthURLRequest](docs/OAuthURLRequest.md)
 - [OrderDir](docs/OrderDir.md)
 - [OrderDirV2](docs/OrderDirV2.md)
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
 - [OuthURLResponse](docs/OuthURLResponse.md)
 - [OutlookSyncInput](docs/OutlookSyncInput.md)
 - [Pagination](docs/Pagination.md)
 - [PresignedURLResponse](docs/PresignedURLResponse.md)
 - [RSSFeedInput](docs/RSSFeedInput.md)
 - [RawTextInput](docs/RawTextInput.md)
 - [ResyncFileQueryInput](docs/ResyncFileQueryInput.md)
 - [RevokeAccessTokenInput](docs/RevokeAccessTokenInput.md)
 - [S3AuthRequest](docs/S3AuthRequest.md)
 - [S3Authentication](docs/S3Authentication.md)
 - [S3FileSyncInput](docs/S3FileSyncInput.md)
 - [S3GetFileInput](docs/S3GetFileInput.md)
 - [SalesforceAuthentication](docs/SalesforceAuthentication.md)
 - [SharepointAuthentication](docs/SharepointAuthentication.md)
 - [SimpleOAuthDataSources](docs/SimpleOAuthDataSources.md)
 - [SingleChunksAndEmbeddingsUploadInput](docs/SingleChunksAndEmbeddingsUploadInput.md)
 - [SitemapScrapeRequest](docs/SitemapScrapeRequest.md)
 - [SyncDirectoryRequest](docs/SyncDirectoryRequest.md)
 - [SyncFilesIds](docs/SyncFilesIds.md)
 - [SyncFilesRequest](docs/SyncFilesRequest.md)
 - [SyncOptions](docs/SyncOptions.md)
 - [TMEmbeddingGenerators](docs/TMEmbeddingGenerators.md)
 - [TextEmbeddingGenerators](docs/TextEmbeddingGenerators.md)
 - [TokenResponse](docs/TokenResponse.md)
 - [UpdateOrganizationInput](docs/UpdateOrganizationInput.md)
 - [UpdateUsersInput](docs/UpdateUsersInput.md)
 - [UploadFileFromUrlInput](docs/UploadFileFromUrlInput.md)
 - [UserConfiguration](docs/UserConfiguration.md)
 - [UserConfigurationNullable](docs/UserConfigurationNullable.md)
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
 - [WebhookStatus](docs/WebhookStatus.md)
 - [WebscrapeRequest](docs/WebscrapeRequest.md)
 - [WhiteLabelingResponse](docs/WhiteLabelingResponse.md)
 - [YoutubeTranscriptResponse](docs/YoutubeTranscriptResponse.md)
 - [ZendeskAuthentication](docs/ZendeskAuthentication.md)
 - [ZoteroAuthentication](docs/ZoteroAuthentication.md)


## Author
This Java package is automatically generated by [Konfig](https://konfigthis.com)
