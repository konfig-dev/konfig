# IntegrationsApi

All URIs are relative to *https://api.carbon.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**connectDataSource**](IntegrationsApi.md#connectDataSource) | **POST** /integrations/connect | Connect Data Source |
| [**connectFreshdesk**](IntegrationsApi.md#connectFreshdesk) | **POST** /integrations/freshdesk | Freshdesk Connect |
| [**connectGitbook**](IntegrationsApi.md#connectGitbook) | **POST** /integrations/gitbook | Gitbook Connect |
| [**createAwsIamUser**](IntegrationsApi.md#createAwsIamUser) | **POST** /integrations/s3 | S3 Auth |
| [**getOauthUrl**](IntegrationsApi.md#getOauthUrl) | **POST** /integrations/oauth_url | Get Oauth Url |
| [**listConfluencePages**](IntegrationsApi.md#listConfluencePages) | **POST** /integrations/confluence/list | Confluence List |
| [**listDataSourceItems**](IntegrationsApi.md#listDataSourceItems) | **POST** /integrations/items/list | List Data Source Items |
| [**listFolders**](IntegrationsApi.md#listFolders) | **GET** /integrations/outlook/user_folders | Outlook Folders |
| [**listGitbookSpaces**](IntegrationsApi.md#listGitbookSpaces) | **GET** /integrations/gitbook/spaces | Gitbook Spaces |
| [**listLabels**](IntegrationsApi.md#listLabels) | **GET** /integrations/gmail/user_labels | Gmail Labels |
| [**listOutlookCategories**](IntegrationsApi.md#listOutlookCategories) | **GET** /integrations/outlook/user_categories | Outlook Categories |
| [**listRepos**](IntegrationsApi.md#listRepos) | **GET** /integrations/github/repos | Github List Repos |
| [**syncConfluence**](IntegrationsApi.md#syncConfluence) | **POST** /integrations/confluence/sync | Confluence Sync |
| [**syncDataSourceItems**](IntegrationsApi.md#syncDataSourceItems) | **POST** /integrations/items/sync | Sync Data Source Items |
| [**syncFiles**](IntegrationsApi.md#syncFiles) | **POST** /integrations/files/sync | Sync Files |
| [**syncGitHub**](IntegrationsApi.md#syncGitHub) | **POST** /integrations/github | Github Connect |
| [**syncGitbook**](IntegrationsApi.md#syncGitbook) | **POST** /integrations/gitbook/sync | Gitbook Sync |
| [**syncGmail**](IntegrationsApi.md#syncGmail) | **POST** /integrations/gmail/sync | Gmail Sync |
| [**syncOutlook**](IntegrationsApi.md#syncOutlook) | **POST** /integrations/outlook/sync | Outlook Sync |
| [**syncRepos**](IntegrationsApi.md#syncRepos) | **POST** /integrations/github/sync_repos | Github Sync Repos |
| [**syncRssFeed**](IntegrationsApi.md#syncRssFeed) | **POST** /integrations/rss_feed | Rss Feed |
| [**syncS3Files**](IntegrationsApi.md#syncS3Files) | **POST** /integrations/s3/files | S3 Files |


<a name="connectDataSource"></a>
# **connectDataSource**
> ConnectDataSourceResponse connectDataSource(connectDataSourceInput).execute();

Connect Data Source

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.IntegrationsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.carbon.ai";
    
    configuration.accessToken  = "YOUR API KEY";
    
    configuration.apiKey  = "YOUR API KEY";
    
    configuration.customerId  = "YOUR API KEY";
    Carbon client = new Carbon(configuration);
    OANSCZGF authentication = new OANSCZGF();
    SyncOptions syncOptions = new SyncOptions();
    try {
      ConnectDataSourceResponse result = client
              .integrations
              .connectDataSource(authentication)
              .syncOptions(syncOptions)
              .execute();
      System.out.println(result);
      System.out.println(result.getDataSource());
      System.out.println(result.getSyncUrl());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#connectDataSource");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<ConnectDataSourceResponse> response = client
              .integrations
              .connectDataSource(authentication)
              .syncOptions(syncOptions)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#connectDataSource");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **connectDataSourceInput** | [**ConnectDataSourceInput**](ConnectDataSourceInput.md)|  | |

### Return type

[**ConnectDataSourceResponse**](ConnectDataSourceResponse.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="connectFreshdesk"></a>
# **connectFreshdesk**
> GenericSuccessResponse connectFreshdesk(freshDeskConnectRequest).execute();

Freshdesk Connect

Refer this article to obtain an API key https://support.freshdesk.com/en/support/solutions/articles/215517. Make sure that your API key has the permission to read solutions from your account and you are on a &lt;b&gt;paid&lt;/b&gt; plan. Once you have an API key, you can make a request to this endpoint along with your freshdesk domain. This will  trigger an automatic sync of the articles in your \&quot;solutions\&quot; tab. Additional parameters below can be used to associate  data with the synced articles or modify the sync behavior.

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.IntegrationsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.carbon.ai";
    
    configuration.accessToken  = "YOUR API KEY";
    
    configuration.apiKey  = "YOUR API KEY";
    
    configuration.customerId  = "YOUR API KEY";
    Carbon client = new Carbon(configuration);
    String domain = "domain_example";
    String apiKey = "apiKey_example";
    Object tags = null;
    Integer chunkSize = 1500;
    Integer chunkOverlap = 20;
    Boolean skipEmbeddingGeneration = false;
    EmbeddingGeneratorsNullable embeddingModel = EmbeddingGeneratorsNullable.fromValue("OPENAI");
    Boolean generateSparseVectors = false;
    Boolean prependFilenameToChunks = false;
    Boolean syncFilesOnConnection = true;
    String requestId = "requestId_example";
    Boolean syncSourceItems = true; // Enabling this flag will fetch all available content from the source to be listed via list items endpoint
    FileSyncConfigNullable fileSyncConfig = new FileSyncConfigNullable();
    try {
      GenericSuccessResponse result = client
              .integrations
              .connectFreshdesk(domain, apiKey)
              .tags(tags)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .skipEmbeddingGeneration(skipEmbeddingGeneration)
              .embeddingModel(embeddingModel)
              .generateSparseVectors(generateSparseVectors)
              .prependFilenameToChunks(prependFilenameToChunks)
              .syncFilesOnConnection(syncFilesOnConnection)
              .requestId(requestId)
              .syncSourceItems(syncSourceItems)
              .fileSyncConfig(fileSyncConfig)
              .execute();
      System.out.println(result);
      System.out.println(result.getSuccess());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#connectFreshdesk");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<GenericSuccessResponse> response = client
              .integrations
              .connectFreshdesk(domain, apiKey)
              .tags(tags)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .skipEmbeddingGeneration(skipEmbeddingGeneration)
              .embeddingModel(embeddingModel)
              .generateSparseVectors(generateSparseVectors)
              .prependFilenameToChunks(prependFilenameToChunks)
              .syncFilesOnConnection(syncFilesOnConnection)
              .requestId(requestId)
              .syncSourceItems(syncSourceItems)
              .fileSyncConfig(fileSyncConfig)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#connectFreshdesk");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **freshDeskConnectRequest** | [**FreshDeskConnectRequest**](FreshDeskConnectRequest.md)|  | |

### Return type

[**GenericSuccessResponse**](GenericSuccessResponse.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="connectGitbook"></a>
# **connectGitbook**
> GenericSuccessResponse connectGitbook(gitbookConnectRequest).execute();

Gitbook Connect

You will need an access token to connect your Gitbook account. Note that the permissions will be defined by the user  generating access token so make sure you have the permission to access spaces you will be syncing.  Refer this article for more details https://developer.gitbook.com/gitbook-api/authentication. Additionally, you need to specify the name of organization you will be syncing data from.

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.IntegrationsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.carbon.ai";
    
    configuration.accessToken  = "YOUR API KEY";
    
    configuration.apiKey  = "YOUR API KEY";
    
    configuration.customerId  = "YOUR API KEY";
    Carbon client = new Carbon(configuration);
    String organization = "organization_example";
    String accessToken = "accessToken_example";
    Object tags = null;
    Integer chunkSize = 1500;
    Integer chunkOverlap = 20;
    Boolean skipEmbeddingGeneration = false;
    EmbeddingGenerators embeddingModel = EmbeddingGenerators.fromValue("OPENAI");
    Boolean generateSparseVectors = false;
    Boolean prependFilenameToChunks = false;
    Boolean syncFilesOnConnection = true;
    String requestId = "requestId_example";
    Boolean syncSourceItems = true; // Enabling this flag will fetch all available content from the source to be listed via list items endpoint
    try {
      GenericSuccessResponse result = client
              .integrations
              .connectGitbook(organization, accessToken)
              .tags(tags)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .skipEmbeddingGeneration(skipEmbeddingGeneration)
              .embeddingModel(embeddingModel)
              .generateSparseVectors(generateSparseVectors)
              .prependFilenameToChunks(prependFilenameToChunks)
              .syncFilesOnConnection(syncFilesOnConnection)
              .requestId(requestId)
              .syncSourceItems(syncSourceItems)
              .execute();
      System.out.println(result);
      System.out.println(result.getSuccess());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#connectGitbook");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<GenericSuccessResponse> response = client
              .integrations
              .connectGitbook(organization, accessToken)
              .tags(tags)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .skipEmbeddingGeneration(skipEmbeddingGeneration)
              .embeddingModel(embeddingModel)
              .generateSparseVectors(generateSparseVectors)
              .prependFilenameToChunks(prependFilenameToChunks)
              .syncFilesOnConnection(syncFilesOnConnection)
              .requestId(requestId)
              .syncSourceItems(syncSourceItems)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#connectGitbook");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **gitbookConnectRequest** | [**GitbookConnectRequest**](GitbookConnectRequest.md)|  | |

### Return type

[**GenericSuccessResponse**](GenericSuccessResponse.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="createAwsIamUser"></a>
# **createAwsIamUser**
> OrganizationUserDataSourceAPI createAwsIamUser(s3AuthRequest).execute();

S3 Auth

Create a new IAM user with permissions to: &lt;ol&gt; &lt;li&gt;List all buckets.&lt;/li&gt; &lt;li&gt;Read from the specific buckets and objects to sync with Carbon. Ensure any future buckets or objects carry  the same permissions.&lt;/li&gt; &lt;/ol&gt; Once created, generate an access key for this user and share the credentials with us. We recommend testing this key beforehand.

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.IntegrationsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.carbon.ai";
    
    configuration.accessToken  = "YOUR API KEY";
    
    configuration.apiKey  = "YOUR API KEY";
    
    configuration.customerId  = "YOUR API KEY";
    Carbon client = new Carbon(configuration);
    String accessKey = "accessKey_example";
    String accessKeySecret = "accessKeySecret_example";
    Boolean syncSourceItems = true; // Enabling this flag will fetch all available content from the source to be listed via list items endpoint
    try {
      OrganizationUserDataSourceAPI result = client
              .integrations
              .createAwsIamUser(accessKey, accessKeySecret)
              .syncSourceItems(syncSourceItems)
              .execute();
      System.out.println(result);
      System.out.println(result.getId());
      System.out.println(result.getDataSourceExternalId());
      System.out.println(result.getDataSourceType());
      System.out.println(result.getToken());
      System.out.println(result.getSyncStatus());
      System.out.println(result.getSourceItemsSyncedAt());
      System.out.println(result.getOrganizationUserId());
      System.out.println(result.getOrganizationId());
      System.out.println(result.getOrganizationSuppliedUserId());
      System.out.println(result.getRevokedAccess());
      System.out.println(result.getLastSyncedAt());
      System.out.println(result.getLastSyncAction());
      System.out.println(result.getEnableAutoSync());
      System.out.println(result.getCreatedAt());
      System.out.println(result.getUpdatedAt());
      System.out.println(result.getFilesSyncedAt());
      System.out.println(result.getDataSourceMetadata());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#createAwsIamUser");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<OrganizationUserDataSourceAPI> response = client
              .integrations
              .createAwsIamUser(accessKey, accessKeySecret)
              .syncSourceItems(syncSourceItems)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#createAwsIamUser");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **s3AuthRequest** | [**S3AuthRequest**](S3AuthRequest.md)|  | |

### Return type

[**OrganizationUserDataSourceAPI**](OrganizationUserDataSourceAPI.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="getOauthUrl"></a>
# **getOauthUrl**
> OuthURLResponse getOauthUrl(oauthURLRequest).execute();

Get Oauth Url

This endpoint can be used to generate the following URLs - An OAuth URL for OAuth based connectors - A file syncing URL which skips the OAuth flow if the user already has a valid access token and takes them to the success state.

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.IntegrationsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.carbon.ai";
    
    configuration.accessToken  = "YOUR API KEY";
    
    configuration.apiKey  = "YOUR API KEY";
    
    configuration.customerId  = "YOUR API KEY";
    Carbon client = new Carbon(configuration);
    DataSourceType service = DataSourceType.fromValue("GOOGLE_DRIVE");
    Object tags = null;
    String scope = "scope_example";
    Integer chunkSize = 1500;
    Integer chunkOverlap = 20;
    Boolean skipEmbeddingGeneration = false;
    EmbeddingGeneratorsNullable embeddingModel = EmbeddingGeneratorsNullable.fromValue("OPENAI");
    String zendeskSubdomain = "zendeskSubdomain_example";
    String microsoftTenant = "microsoftTenant_example";
    String sharepointSiteName = "sharepointSiteName_example";
    String confluenceSubdomain = "confluenceSubdomain_example";
    Boolean generateSparseVectors = false;
    Boolean prependFilenameToChunks = false;
    Integer maxItemsPerChunk = 56; // Number of objects per chunk. For csv, tsv, xlsx, and json files only.
    String salesforceDomain = "salesforceDomain_example";
    Boolean syncFilesOnConnection = true; // Used to specify whether Carbon should attempt to sync all your files automatically when authorization         is complete. This is only supported for a subset of connectors and will be ignored for the rest. Supported         connectors: Intercom, Zendesk, Gitbook, Confluence, Salesforce, Freshdesk
    Boolean setPageAsBoundary = false;
    Integer dataSourceId = 56; // Used to specify a data source to sync from if you have multiple connected. It can be skipped if          you only have one data source of that type connected or are connecting a new account.
    Boolean connectingNewAccount = false; // Used to connect a new data source. If not specified, we will attempt to create a sync URL         for an existing data source based on type and ID.
    String requestId = "ce1b1ec8-be64-491c-9159-c40f85fa0073"; // This request id will be added to all files that get synced using the generated OAuth URL
    Boolean useOcr = false; // Enable OCR for files that support it. Supported formats: pdf
    Boolean parsePdfTablesWithOcr = false;
    Boolean enableFilePicker = true; // Enable integration's file picker for sources that support it. Supported sources: DROPBOX, SHAREPOINT, ONEDRIVE, BOX, GOOGLE_DRIVE
    Boolean syncSourceItems = true; // Enabling this flag will fetch all available content from the source to be listed via list items endpoint
    Boolean incrementalSync = false; // Only sync files if they have not already been synced or if the embedding properties have changed.         This flag is currently supported by ONEDRIVE, GOOGLE_DRIVE, BOX, DROPBOX. It will be ignored for other data sources.
    FileSyncConfigNullable fileSyncConfig = new FileSyncConfigNullable();
    try {
      OuthURLResponse result = client
              .integrations
              .getOauthUrl(service)
              .tags(tags)
              .scope(scope)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .skipEmbeddingGeneration(skipEmbeddingGeneration)
              .embeddingModel(embeddingModel)
              .zendeskSubdomain(zendeskSubdomain)
              .microsoftTenant(microsoftTenant)
              .sharepointSiteName(sharepointSiteName)
              .confluenceSubdomain(confluenceSubdomain)
              .generateSparseVectors(generateSparseVectors)
              .prependFilenameToChunks(prependFilenameToChunks)
              .maxItemsPerChunk(maxItemsPerChunk)
              .salesforceDomain(salesforceDomain)
              .syncFilesOnConnection(syncFilesOnConnection)
              .setPageAsBoundary(setPageAsBoundary)
              .dataSourceId(dataSourceId)
              .connectingNewAccount(connectingNewAccount)
              .requestId(requestId)
              .useOcr(useOcr)
              .parsePdfTablesWithOcr(parsePdfTablesWithOcr)
              .enableFilePicker(enableFilePicker)
              .syncSourceItems(syncSourceItems)
              .incrementalSync(incrementalSync)
              .fileSyncConfig(fileSyncConfig)
              .execute();
      System.out.println(result);
      System.out.println(result.getOauthUrl());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#getOauthUrl");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<OuthURLResponse> response = client
              .integrations
              .getOauthUrl(service)
              .tags(tags)
              .scope(scope)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .skipEmbeddingGeneration(skipEmbeddingGeneration)
              .embeddingModel(embeddingModel)
              .zendeskSubdomain(zendeskSubdomain)
              .microsoftTenant(microsoftTenant)
              .sharepointSiteName(sharepointSiteName)
              .confluenceSubdomain(confluenceSubdomain)
              .generateSparseVectors(generateSparseVectors)
              .prependFilenameToChunks(prependFilenameToChunks)
              .maxItemsPerChunk(maxItemsPerChunk)
              .salesforceDomain(salesforceDomain)
              .syncFilesOnConnection(syncFilesOnConnection)
              .setPageAsBoundary(setPageAsBoundary)
              .dataSourceId(dataSourceId)
              .connectingNewAccount(connectingNewAccount)
              .requestId(requestId)
              .useOcr(useOcr)
              .parsePdfTablesWithOcr(parsePdfTablesWithOcr)
              .enableFilePicker(enableFilePicker)
              .syncSourceItems(syncSourceItems)
              .incrementalSync(incrementalSync)
              .fileSyncConfig(fileSyncConfig)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#getOauthUrl");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **oauthURLRequest** | [**OAuthURLRequest**](OAuthURLRequest.md)|  | |

### Return type

[**OuthURLResponse**](OuthURLResponse.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="listConfluencePages"></a>
# **listConfluencePages**
> ListResponse listConfluencePages(listRequest).execute();

Confluence List

To begin listing a user&#39;s Confluence pages, at least a &#x60;data_source_id&#x60; of a connected Confluence account must be specified. This base request returns a list of root pages for every space the user has access to in a Confluence instance. To traverse further down the user&#39;s page directory, additional requests to this endpoint can be made with the same &#x60;data_source_id&#x60; and with &#x60;parent_id&#x60; set to the id of page from a previous request. For convenience, the &#x60;has_children&#x60; property in each directory item in the response list will flag which pages will return non-empty lists of pages when set as the &#x60;parent_id&#x60;.

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.IntegrationsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.carbon.ai";
    
    configuration.accessToken  = "YOUR API KEY";
    
    configuration.apiKey  = "YOUR API KEY";
    
    configuration.customerId  = "YOUR API KEY";
    Carbon client = new Carbon(configuration);
    Integer dataSourceId = 56;
    String parentId = "parentId_example";
    try {
      ListResponse result = client
              .integrations
              .listConfluencePages(dataSourceId)
              .parentId(parentId)
              .execute();
      System.out.println(result);
      System.out.println(result.getData());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#listConfluencePages");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<ListResponse> response = client
              .integrations
              .listConfluencePages(dataSourceId)
              .parentId(parentId)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#listConfluencePages");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **listRequest** | [**ListRequest**](ListRequest.md)|  | |

### Return type

[**ListResponse**](ListResponse.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="listDataSourceItems"></a>
# **listDataSourceItems**
> ListDataSourceItemsResponse listDataSourceItems(listDataSourceItemsRequest).execute();

List Data Source Items

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.IntegrationsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.carbon.ai";
    
    configuration.accessToken  = "YOUR API KEY";
    
    configuration.apiKey  = "YOUR API KEY";
    
    configuration.customerId  = "YOUR API KEY";
    Carbon client = new Carbon(configuration);
    Integer dataSourceId = 56;
    String parentId = "parentId_example";
    ListItemsFiltersNullable filters = new ListItemsFiltersNullable();
    Pagination pagination = new Pagination();
    ExternalSourceItemsOrderBy orderBy = ExternalSourceItemsOrderBy.fromValue("name");
    OrderDirV2 orderDir = OrderDirV2.fromValue("asc");
    try {
      ListDataSourceItemsResponse result = client
              .integrations
              .listDataSourceItems(dataSourceId)
              .parentId(parentId)
              .filters(filters)
              .pagination(pagination)
              .orderBy(orderBy)
              .orderDir(orderDir)
              .execute();
      System.out.println(result);
      System.out.println(result.getItems());
      System.out.println(result.getCount());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#listDataSourceItems");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<ListDataSourceItemsResponse> response = client
              .integrations
              .listDataSourceItems(dataSourceId)
              .parentId(parentId)
              .filters(filters)
              .pagination(pagination)
              .orderBy(orderBy)
              .orderDir(orderDir)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#listDataSourceItems");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **listDataSourceItemsRequest** | [**ListDataSourceItemsRequest**](ListDataSourceItemsRequest.md)|  | |

### Return type

[**ListDataSourceItemsResponse**](ListDataSourceItemsResponse.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="listFolders"></a>
# **listFolders**
> Object listFolders().dataSourceId(dataSourceId).execute();

Outlook Folders

After connecting your Outlook account, you can use this endpoint to list all of your folders on outlook. This includes  both system folders like \&quot;inbox\&quot; and user created folders.

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.IntegrationsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.carbon.ai";
    
    configuration.accessToken  = "YOUR API KEY";
    
    configuration.apiKey  = "YOUR API KEY";
    
    configuration.customerId  = "YOUR API KEY";
    Carbon client = new Carbon(configuration);
    Integer dataSourceId = 56;
    try {
      Object result = client
              .integrations
              .listFolders()
              .dataSourceId(dataSourceId)
              .execute();
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#listFolders");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<Object> response = client
              .integrations
              .listFolders()
              .dataSourceId(dataSourceId)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#listFolders");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **dataSourceId** | **Integer**|  | [optional] |

### Return type

**Object**

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="listGitbookSpaces"></a>
# **listGitbookSpaces**
> Object listGitbookSpaces(dataSourceId).execute();

Gitbook Spaces

After connecting your Gitbook account, you can use this endpoint to list all of your spaces under current organization.

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.IntegrationsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.carbon.ai";
    
    configuration.accessToken  = "YOUR API KEY";
    
    configuration.apiKey  = "YOUR API KEY";
    
    configuration.customerId  = "YOUR API KEY";
    Carbon client = new Carbon(configuration);
    Integer dataSourceId = 56;
    try {
      Object result = client
              .integrations
              .listGitbookSpaces(dataSourceId)
              .execute();
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#listGitbookSpaces");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<Object> response = client
              .integrations
              .listGitbookSpaces(dataSourceId)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#listGitbookSpaces");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **dataSourceId** | **Integer**|  | |

### Return type

**Object**

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="listLabels"></a>
# **listLabels**
> Object listLabels().dataSourceId(dataSourceId).execute();

Gmail Labels

After connecting your Gmail account, you can use this endpoint to list all of your labels. User created labels will have the type \&quot;user\&quot; and Gmail&#39;s default labels will have the type \&quot;system\&quot;

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.IntegrationsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.carbon.ai";
    
    configuration.accessToken  = "YOUR API KEY";
    
    configuration.apiKey  = "YOUR API KEY";
    
    configuration.customerId  = "YOUR API KEY";
    Carbon client = new Carbon(configuration);
    Integer dataSourceId = 56;
    try {
      Object result = client
              .integrations
              .listLabels()
              .dataSourceId(dataSourceId)
              .execute();
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#listLabels");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<Object> response = client
              .integrations
              .listLabels()
              .dataSourceId(dataSourceId)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#listLabels");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **dataSourceId** | **Integer**|  | [optional] |

### Return type

**Object**

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="listOutlookCategories"></a>
# **listOutlookCategories**
> Object listOutlookCategories().dataSourceId(dataSourceId).execute();

Outlook Categories

After connecting your Outlook account, you can use this endpoint to list all of your categories on outlook. We currently support listing up to 250 categories.

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.IntegrationsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.carbon.ai";
    
    configuration.accessToken  = "YOUR API KEY";
    
    configuration.apiKey  = "YOUR API KEY";
    
    configuration.customerId  = "YOUR API KEY";
    Carbon client = new Carbon(configuration);
    Integer dataSourceId = 56;
    try {
      Object result = client
              .integrations
              .listOutlookCategories()
              .dataSourceId(dataSourceId)
              .execute();
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#listOutlookCategories");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<Object> response = client
              .integrations
              .listOutlookCategories()
              .dataSourceId(dataSourceId)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#listOutlookCategories");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **dataSourceId** | **Integer**|  | [optional] |

### Return type

**Object**

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="listRepos"></a>
# **listRepos**
> Object listRepos().perPage(perPage).page(page).dataSourceId(dataSourceId).execute();

Github List Repos

Once you have connected your GitHub account, you can use this endpoint to list the      repositories your account has access to. You can use a data source ID or username to fetch from a specific account.

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.IntegrationsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.carbon.ai";
    
    configuration.accessToken  = "YOUR API KEY";
    
    configuration.apiKey  = "YOUR API KEY";
    
    configuration.customerId  = "YOUR API KEY";
    Carbon client = new Carbon(configuration);
    Integer perPage = 30;
    Integer page = 1;
    Integer dataSourceId = 56;
    try {
      Object result = client
              .integrations
              .listRepos()
              .perPage(perPage)
              .page(page)
              .dataSourceId(dataSourceId)
              .execute();
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#listRepos");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<Object> response = client
              .integrations
              .listRepos()
              .perPage(perPage)
              .page(page)
              .dataSourceId(dataSourceId)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#listRepos");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **perPage** | **Integer**|  | [optional] [default to 30] |
| **page** | **Integer**|  | [optional] [default to 1] |
| **dataSourceId** | **Integer**|  | [optional] |

### Return type

**Object**

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="syncConfluence"></a>
# **syncConfluence**
> GenericSuccessResponse syncConfluence(syncFilesRequest).execute();

Confluence Sync

After listing pages in a user&#39;s Confluence account, the set of selected page &#x60;ids&#x60; and the connected account&#39;s &#x60;data_source_id&#x60; can be passed into this endpoint to sync them into Carbon. Additional parameters listed below can be used to associate data to the selected pages or alter the behavior of the sync.

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.IntegrationsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.carbon.ai";
    
    configuration.accessToken  = "YOUR API KEY";
    
    configuration.apiKey  = "YOUR API KEY";
    
    configuration.customerId  = "YOUR API KEY";
    Carbon client = new Carbon(configuration);
    Integer dataSourceId = 56;
    List<Object> ids = Arrays.asList(null);
    Object tags = null;
    Integer chunkSize = 1500;
    Integer chunkOverlap = 20;
    Boolean skipEmbeddingGeneration = false;
    EmbeddingGeneratorsNullable embeddingModel = EmbeddingGeneratorsNullable.fromValue("OPENAI");
    Boolean generateSparseVectors = false;
    Boolean prependFilenameToChunks = false;
    Integer maxItemsPerChunk = 56; // Number of objects per chunk. For csv, tsv, xlsx, and json files only.
    Boolean setPageAsBoundary = false;
    String requestId = "9fe9190e-384f-4baa-a416-d51ed93d1be7";
    Boolean useOcr = false;
    Boolean parsePdfTablesWithOcr = false;
    Boolean incrementalSync = false; // Only sync files if they have not already been synced or if the embedding properties have changed.         This flag is currently supported by ONEDRIVE, GOOGLE_DRIVE, BOX, DROPBOX. It will be ignored for other data sources.
    FileSyncConfigNullable fileSyncConfig = new FileSyncConfigNullable();
    try {
      GenericSuccessResponse result = client
              .integrations
              .syncConfluence(dataSourceId, ids)
              .tags(tags)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .skipEmbeddingGeneration(skipEmbeddingGeneration)
              .embeddingModel(embeddingModel)
              .generateSparseVectors(generateSparseVectors)
              .prependFilenameToChunks(prependFilenameToChunks)
              .maxItemsPerChunk(maxItemsPerChunk)
              .setPageAsBoundary(setPageAsBoundary)
              .requestId(requestId)
              .useOcr(useOcr)
              .parsePdfTablesWithOcr(parsePdfTablesWithOcr)
              .incrementalSync(incrementalSync)
              .fileSyncConfig(fileSyncConfig)
              .execute();
      System.out.println(result);
      System.out.println(result.getSuccess());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#syncConfluence");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<GenericSuccessResponse> response = client
              .integrations
              .syncConfluence(dataSourceId, ids)
              .tags(tags)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .skipEmbeddingGeneration(skipEmbeddingGeneration)
              .embeddingModel(embeddingModel)
              .generateSparseVectors(generateSparseVectors)
              .prependFilenameToChunks(prependFilenameToChunks)
              .maxItemsPerChunk(maxItemsPerChunk)
              .setPageAsBoundary(setPageAsBoundary)
              .requestId(requestId)
              .useOcr(useOcr)
              .parsePdfTablesWithOcr(parsePdfTablesWithOcr)
              .incrementalSync(incrementalSync)
              .fileSyncConfig(fileSyncConfig)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#syncConfluence");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **syncFilesRequest** | [**SyncFilesRequest**](SyncFilesRequest.md)|  | |

### Return type

[**GenericSuccessResponse**](GenericSuccessResponse.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="syncDataSourceItems"></a>
# **syncDataSourceItems**
> OrganizationUserDataSourceAPI syncDataSourceItems(syncDirectoryRequest).execute();

Sync Data Source Items

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.IntegrationsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.carbon.ai";
    
    configuration.accessToken  = "YOUR API KEY";
    
    configuration.apiKey  = "YOUR API KEY";
    
    configuration.customerId  = "YOUR API KEY";
    Carbon client = new Carbon(configuration);
    Integer dataSourceId = 56;
    try {
      OrganizationUserDataSourceAPI result = client
              .integrations
              .syncDataSourceItems(dataSourceId)
              .execute();
      System.out.println(result);
      System.out.println(result.getId());
      System.out.println(result.getDataSourceExternalId());
      System.out.println(result.getDataSourceType());
      System.out.println(result.getToken());
      System.out.println(result.getSyncStatus());
      System.out.println(result.getSourceItemsSyncedAt());
      System.out.println(result.getOrganizationUserId());
      System.out.println(result.getOrganizationId());
      System.out.println(result.getOrganizationSuppliedUserId());
      System.out.println(result.getRevokedAccess());
      System.out.println(result.getLastSyncedAt());
      System.out.println(result.getLastSyncAction());
      System.out.println(result.getEnableAutoSync());
      System.out.println(result.getCreatedAt());
      System.out.println(result.getUpdatedAt());
      System.out.println(result.getFilesSyncedAt());
      System.out.println(result.getDataSourceMetadata());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#syncDataSourceItems");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<OrganizationUserDataSourceAPI> response = client
              .integrations
              .syncDataSourceItems(dataSourceId)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#syncDataSourceItems");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **syncDirectoryRequest** | [**SyncDirectoryRequest**](SyncDirectoryRequest.md)|  | |

### Return type

[**OrganizationUserDataSourceAPI**](OrganizationUserDataSourceAPI.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="syncFiles"></a>
# **syncFiles**
> GenericSuccessResponse syncFiles(syncFilesRequest).execute();

Sync Files

After listing files and folders via /integrations/items/sync and integrations/items/list, use the selected items&#39; external ids  as the ids in this endpoint to sync them into Carbon. Sharepoint items take an additional parameter root_id, which identifies the drive the file or folder is in and is stored in root_external_id. That additional paramter is optional and excluding it will tell the sync to assume the item is stored in the default Documents drive.

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.IntegrationsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.carbon.ai";
    
    configuration.accessToken  = "YOUR API KEY";
    
    configuration.apiKey  = "YOUR API KEY";
    
    configuration.customerId  = "YOUR API KEY";
    Carbon client = new Carbon(configuration);
    Integer dataSourceId = 56;
    List<Object> ids = Arrays.asList(null);
    Object tags = null;
    Integer chunkSize = 1500;
    Integer chunkOverlap = 20;
    Boolean skipEmbeddingGeneration = false;
    EmbeddingGeneratorsNullable embeddingModel = EmbeddingGeneratorsNullable.fromValue("OPENAI");
    Boolean generateSparseVectors = false;
    Boolean prependFilenameToChunks = false;
    Integer maxItemsPerChunk = 56; // Number of objects per chunk. For csv, tsv, xlsx, and json files only.
    Boolean setPageAsBoundary = false;
    String requestId = "9fe9190e-384f-4baa-a416-d51ed93d1be7";
    Boolean useOcr = false;
    Boolean parsePdfTablesWithOcr = false;
    Boolean incrementalSync = false; // Only sync files if they have not already been synced or if the embedding properties have changed.         This flag is currently supported by ONEDRIVE, GOOGLE_DRIVE, BOX, DROPBOX. It will be ignored for other data sources.
    FileSyncConfigNullable fileSyncConfig = new FileSyncConfigNullable();
    try {
      GenericSuccessResponse result = client
              .integrations
              .syncFiles(dataSourceId, ids)
              .tags(tags)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .skipEmbeddingGeneration(skipEmbeddingGeneration)
              .embeddingModel(embeddingModel)
              .generateSparseVectors(generateSparseVectors)
              .prependFilenameToChunks(prependFilenameToChunks)
              .maxItemsPerChunk(maxItemsPerChunk)
              .setPageAsBoundary(setPageAsBoundary)
              .requestId(requestId)
              .useOcr(useOcr)
              .parsePdfTablesWithOcr(parsePdfTablesWithOcr)
              .incrementalSync(incrementalSync)
              .fileSyncConfig(fileSyncConfig)
              .execute();
      System.out.println(result);
      System.out.println(result.getSuccess());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#syncFiles");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<GenericSuccessResponse> response = client
              .integrations
              .syncFiles(dataSourceId, ids)
              .tags(tags)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .skipEmbeddingGeneration(skipEmbeddingGeneration)
              .embeddingModel(embeddingModel)
              .generateSparseVectors(generateSparseVectors)
              .prependFilenameToChunks(prependFilenameToChunks)
              .maxItemsPerChunk(maxItemsPerChunk)
              .setPageAsBoundary(setPageAsBoundary)
              .requestId(requestId)
              .useOcr(useOcr)
              .parsePdfTablesWithOcr(parsePdfTablesWithOcr)
              .incrementalSync(incrementalSync)
              .fileSyncConfig(fileSyncConfig)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#syncFiles");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **syncFilesRequest** | [**SyncFilesRequest**](SyncFilesRequest.md)|  | |

### Return type

[**GenericSuccessResponse**](GenericSuccessResponse.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="syncGitHub"></a>
# **syncGitHub**
> GenericSuccessResponse syncGitHub(githubConnectRequest).execute();

Github Connect

Refer this article to obtain an access token https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens. Make sure that your access token has the permission to read content from your desired repos. Note that if your access token expires you will need to manually update it through this endpoint.

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.IntegrationsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.carbon.ai";
    
    configuration.accessToken  = "YOUR API KEY";
    
    configuration.apiKey  = "YOUR API KEY";
    
    configuration.customerId  = "YOUR API KEY";
    Carbon client = new Carbon(configuration);
    String username = "username_example";
    String accessToken = "accessToken_example";
    Boolean syncSourceItems = false; // Enabling this flag will fetch all available content from the source to be listed via list items endpoint
    try {
      GenericSuccessResponse result = client
              .integrations
              .syncGitHub(username, accessToken)
              .syncSourceItems(syncSourceItems)
              .execute();
      System.out.println(result);
      System.out.println(result.getSuccess());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#syncGitHub");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<GenericSuccessResponse> response = client
              .integrations
              .syncGitHub(username, accessToken)
              .syncSourceItems(syncSourceItems)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#syncGitHub");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **githubConnectRequest** | [**GithubConnectRequest**](GithubConnectRequest.md)|  | |

### Return type

[**GenericSuccessResponse**](GenericSuccessResponse.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="syncGitbook"></a>
# **syncGitbook**
> Object syncGitbook(gitbookSyncRequest).execute();

Gitbook Sync

You can sync upto 20 Gitbook spaces at a time using this endpoint. Additional parameters below can be used to associate  data with the synced pages or modify the sync behavior.

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.IntegrationsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.carbon.ai";
    
    configuration.accessToken  = "YOUR API KEY";
    
    configuration.apiKey  = "YOUR API KEY";
    
    configuration.customerId  = "YOUR API KEY";
    Carbon client = new Carbon(configuration);
    List<String> spaceIds = Arrays.asList();
    Integer dataSourceId = 56;
    Object tags = null;
    Integer chunkSize = 1500;
    Integer chunkOverlap = 20;
    Boolean skipEmbeddingGeneration = false;
    EmbeddingGenerators embeddingModel = EmbeddingGenerators.fromValue("OPENAI");
    Boolean generateSparseVectors = false;
    Boolean prependFilenameToChunks = false;
    String requestId = "requestId_example";
    try {
      Object result = client
              .integrations
              .syncGitbook(spaceIds, dataSourceId)
              .tags(tags)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .skipEmbeddingGeneration(skipEmbeddingGeneration)
              .embeddingModel(embeddingModel)
              .generateSparseVectors(generateSparseVectors)
              .prependFilenameToChunks(prependFilenameToChunks)
              .requestId(requestId)
              .execute();
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#syncGitbook");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<Object> response = client
              .integrations
              .syncGitbook(spaceIds, dataSourceId)
              .tags(tags)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .skipEmbeddingGeneration(skipEmbeddingGeneration)
              .embeddingModel(embeddingModel)
              .generateSparseVectors(generateSparseVectors)
              .prependFilenameToChunks(prependFilenameToChunks)
              .requestId(requestId)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#syncGitbook");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **gitbookSyncRequest** | [**GitbookSyncRequest**](GitbookSyncRequest.md)|  | |

### Return type

**Object**

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="syncGmail"></a>
# **syncGmail**
> GenericSuccessResponse syncGmail(gmailSyncInput).execute();

Gmail Sync

Once you have successfully connected your gmail account, you can choose which emails to sync with us using the filters parameter. Filters is a JSON object with key value pairs. It also supports AND and OR operations. For now, we support a limited set of keys listed below.  &lt;b&gt;label&lt;/b&gt;: Inbuilt Gmail labels, for example \&quot;Important\&quot; or a custom label you created.   &lt;b&gt;after&lt;/b&gt; or &lt;b&gt;before&lt;/b&gt;: A date in YYYY/mm/dd format (example 2023/12/31). Gets emails after/before a certain date. You can also use them in combination to get emails from a certain period.   &lt;b&gt;is&lt;/b&gt;: Can have the following values - starred, important, snoozed, and unread    Using keys or values outside of the specified values can lead to unexpected behaviour.  An example of a basic query with filters can be &#x60;&#x60;&#x60;json {     \&quot;filters\&quot;: {             \&quot;key\&quot;: \&quot;label\&quot;,             \&quot;value\&quot;: \&quot;Test\&quot;         } } &#x60;&#x60;&#x60; Which will list all emails that have the label \&quot;Test\&quot;.  You can use AND and OR operation in the following way: &#x60;&#x60;&#x60;json {     \&quot;filters\&quot;: {         \&quot;AND\&quot;: [             {                 \&quot;key\&quot;: \&quot;after\&quot;,                 \&quot;value\&quot;: \&quot;2024/01/07\&quot;             },             {                 \&quot;OR\&quot;: [                     {                         \&quot;key\&quot;: \&quot;label\&quot;,                         \&quot;value\&quot;: \&quot;Personal\&quot;                     },                     {                         \&quot;key\&quot;: \&quot;is\&quot;,                         \&quot;value\&quot;: \&quot;starred\&quot;                     }                 ]             }         ]     } } &#x60;&#x60;&#x60; This will return emails after 7th of Jan that are either starred or have the label \&quot;Personal\&quot;.  Note that this is the highest level of nesting we support, i.e. you can&#39;t add more AND/OR filters within the OR filter in the above example.

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.IntegrationsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.carbon.ai";
    
    configuration.accessToken  = "YOUR API KEY";
    
    configuration.apiKey  = "YOUR API KEY";
    
    configuration.customerId  = "YOUR API KEY";
    Carbon client = new Carbon(configuration);
    Object filters = null;
    Object tags = null;
    Integer chunkSize = 1500;
    Integer chunkOverlap = 20;
    Boolean skipEmbeddingGeneration = false;
    EmbeddingGenerators embeddingModel = EmbeddingGenerators.fromValue("OPENAI");
    Boolean generateSparseVectors = false;
    Boolean prependFilenameToChunks = false;
    Integer dataSourceId = 56;
    String requestId = "requestId_example";
    Boolean syncAttachments = false;
    FileSyncConfigNullable fileSyncConfig = new FileSyncConfigNullable();
    Boolean incrementalSync = false;
    try {
      GenericSuccessResponse result = client
              .integrations
              .syncGmail(filters)
              .tags(tags)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .skipEmbeddingGeneration(skipEmbeddingGeneration)
              .embeddingModel(embeddingModel)
              .generateSparseVectors(generateSparseVectors)
              .prependFilenameToChunks(prependFilenameToChunks)
              .dataSourceId(dataSourceId)
              .requestId(requestId)
              .syncAttachments(syncAttachments)
              .fileSyncConfig(fileSyncConfig)
              .incrementalSync(incrementalSync)
              .execute();
      System.out.println(result);
      System.out.println(result.getSuccess());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#syncGmail");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<GenericSuccessResponse> response = client
              .integrations
              .syncGmail(filters)
              .tags(tags)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .skipEmbeddingGeneration(skipEmbeddingGeneration)
              .embeddingModel(embeddingModel)
              .generateSparseVectors(generateSparseVectors)
              .prependFilenameToChunks(prependFilenameToChunks)
              .dataSourceId(dataSourceId)
              .requestId(requestId)
              .syncAttachments(syncAttachments)
              .fileSyncConfig(fileSyncConfig)
              .incrementalSync(incrementalSync)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#syncGmail");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **gmailSyncInput** | [**GmailSyncInput**](GmailSyncInput.md)|  | |

### Return type

[**GenericSuccessResponse**](GenericSuccessResponse.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="syncOutlook"></a>
# **syncOutlook**
> GenericSuccessResponse syncOutlook(outlookSyncInput).execute();

Outlook Sync

Once you have successfully connected your Outlook account, you can choose which emails to sync with us using the filters and folder parameter. \&quot;folder\&quot; should be the folder you want to sync from Outlook. By default we get messages from your inbox folder.   Filters is a JSON object with key value pairs. It also supports AND and OR operations. For now, we support a limited set of keys listed below.  &lt;b&gt;category&lt;/b&gt;: Custom categories that you created in Outlook.   &lt;b&gt;after&lt;/b&gt; or &lt;b&gt;before&lt;/b&gt;: A date in YYYY/mm/dd format (example 2023/12/31). Gets emails after/before a certain date. You can also use them in combination to get emails from a certain period.     &lt;b&gt;is&lt;/b&gt;: Can have the following values: flagged     An example of a basic query with filters can be &#x60;&#x60;&#x60;json {     \&quot;filters\&quot;: {             \&quot;key\&quot;: \&quot;category\&quot;,             \&quot;value\&quot;: \&quot;Test\&quot;         } } &#x60;&#x60;&#x60; Which will list all emails that have the category \&quot;Test\&quot;.    Specifying a custom folder in the same query &#x60;&#x60;&#x60;json {     \&quot;folder\&quot;: \&quot;Folder Name\&quot;,     \&quot;filters\&quot;: {             \&quot;key\&quot;: \&quot;category\&quot;,             \&quot;value\&quot;: \&quot;Test\&quot;         } } &#x60;&#x60;&#x60;  You can use AND and OR operation in the following way: &#x60;&#x60;&#x60;json {     \&quot;filters\&quot;: {         \&quot;AND\&quot;: [             {                 \&quot;key\&quot;: \&quot;after\&quot;,                 \&quot;value\&quot;: \&quot;2024/01/07\&quot;             },             {                 \&quot;OR\&quot;: [                     {                         \&quot;key\&quot;: \&quot;category\&quot;,                         \&quot;value\&quot;: \&quot;Personal\&quot;                     },                     {                         \&quot;key\&quot;: \&quot;category\&quot;,                         \&quot;value\&quot;: \&quot;Test\&quot;                     },                 ]             }         ]     } } &#x60;&#x60;&#x60; This will return emails after 7th of Jan that have either Personal or Test as category.  Note that this is the highest level of nesting we support, i.e. you can&#39;t add more AND/OR filters within the OR filter in the above example.

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.IntegrationsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.carbon.ai";
    
    configuration.accessToken  = "YOUR API KEY";
    
    configuration.apiKey  = "YOUR API KEY";
    
    configuration.customerId  = "YOUR API KEY";
    Carbon client = new Carbon(configuration);
    Object filters = null;
    Object tags = null;
    String folder = "Inbox";
    Integer chunkSize = 1500;
    Integer chunkOverlap = 20;
    Boolean skipEmbeddingGeneration = false;
    EmbeddingGenerators embeddingModel = EmbeddingGenerators.fromValue("OPENAI");
    Boolean generateSparseVectors = false;
    Boolean prependFilenameToChunks = false;
    Integer dataSourceId = 56;
    String requestId = "requestId_example";
    Boolean syncAttachments = false;
    FileSyncConfigNullable fileSyncConfig = new FileSyncConfigNullable();
    Boolean incrementalSync = false;
    try {
      GenericSuccessResponse result = client
              .integrations
              .syncOutlook(filters)
              .tags(tags)
              .folder(folder)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .skipEmbeddingGeneration(skipEmbeddingGeneration)
              .embeddingModel(embeddingModel)
              .generateSparseVectors(generateSparseVectors)
              .prependFilenameToChunks(prependFilenameToChunks)
              .dataSourceId(dataSourceId)
              .requestId(requestId)
              .syncAttachments(syncAttachments)
              .fileSyncConfig(fileSyncConfig)
              .incrementalSync(incrementalSync)
              .execute();
      System.out.println(result);
      System.out.println(result.getSuccess());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#syncOutlook");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<GenericSuccessResponse> response = client
              .integrations
              .syncOutlook(filters)
              .tags(tags)
              .folder(folder)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .skipEmbeddingGeneration(skipEmbeddingGeneration)
              .embeddingModel(embeddingModel)
              .generateSparseVectors(generateSparseVectors)
              .prependFilenameToChunks(prependFilenameToChunks)
              .dataSourceId(dataSourceId)
              .requestId(requestId)
              .syncAttachments(syncAttachments)
              .fileSyncConfig(fileSyncConfig)
              .incrementalSync(incrementalSync)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#syncOutlook");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **outlookSyncInput** | [**OutlookSyncInput**](OutlookSyncInput.md)|  | |

### Return type

[**GenericSuccessResponse**](GenericSuccessResponse.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="syncRepos"></a>
# **syncRepos**
> Object syncRepos(githubFetchReposRequest).execute();

Github Sync Repos

You can retreive repos your token has access to using /integrations/github/repos and sync their content.  You can also pass full name of any public repository (username/repo-name). This will store the repo content with  carbon which can be accessed through /integrations/items/list endpoint. Maximum of 25 repositories are accepted per request.

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.IntegrationsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.carbon.ai";
    
    configuration.accessToken  = "YOUR API KEY";
    
    configuration.apiKey  = "YOUR API KEY";
    
    configuration.customerId  = "YOUR API KEY";
    Carbon client = new Carbon(configuration);
    List<String> repos = Arrays.asList();
    Integer dataSourceId = 56;
    try {
      Object result = client
              .integrations
              .syncRepos(repos)
              .dataSourceId(dataSourceId)
              .execute();
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#syncRepos");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<Object> response = client
              .integrations
              .syncRepos(repos)
              .dataSourceId(dataSourceId)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#syncRepos");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **githubFetchReposRequest** | [**GithubFetchReposRequest**](GithubFetchReposRequest.md)|  | |

### Return type

**Object**

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="syncRssFeed"></a>
# **syncRssFeed**
> GenericSuccessResponse syncRssFeed(rsSFeedInput).execute();

Rss Feed

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.IntegrationsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.carbon.ai";
    
    configuration.accessToken  = "YOUR API KEY";
    
    configuration.apiKey  = "YOUR API KEY";
    
    configuration.customerId  = "YOUR API KEY";
    Carbon client = new Carbon(configuration);
    String url = "url_example";
    Object tags = null;
    Integer chunkSize = 1500;
    Integer chunkOverlap = 20;
    Boolean skipEmbeddingGeneration = false;
    EmbeddingGenerators embeddingModel = EmbeddingGenerators.fromValue("OPENAI");
    Boolean generateSparseVectors = false;
    Boolean prependFilenameToChunks = false;
    String requestId = "requestId_example";
    try {
      GenericSuccessResponse result = client
              .integrations
              .syncRssFeed(url)
              .tags(tags)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .skipEmbeddingGeneration(skipEmbeddingGeneration)
              .embeddingModel(embeddingModel)
              .generateSparseVectors(generateSparseVectors)
              .prependFilenameToChunks(prependFilenameToChunks)
              .requestId(requestId)
              .execute();
      System.out.println(result);
      System.out.println(result.getSuccess());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#syncRssFeed");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<GenericSuccessResponse> response = client
              .integrations
              .syncRssFeed(url)
              .tags(tags)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .skipEmbeddingGeneration(skipEmbeddingGeneration)
              .embeddingModel(embeddingModel)
              .generateSparseVectors(generateSparseVectors)
              .prependFilenameToChunks(prependFilenameToChunks)
              .requestId(requestId)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#syncRssFeed");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **rsSFeedInput** | [**RSSFeedInput**](RSSFeedInput.md)|  | |

### Return type

[**GenericSuccessResponse**](GenericSuccessResponse.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="syncS3Files"></a>
# **syncS3Files**
> GenericSuccessResponse syncS3Files(s3FileSyncInput).execute();

S3 Files

After optionally loading the items via /integrations/items/sync and integrations/items/list, use the bucket name  and object key as the ID in this endpoint to sync them into Carbon. Additional parameters below can associate  data with the selected items or modify the sync behavior

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.IntegrationsApi;
import java.util.List;
import java.util.Map;
import java.util.UUID;

public class Example {
  public static void main(String[] args) {
    Configuration configuration = new Configuration();
    configuration.host = "https://api.carbon.ai";
    
    configuration.accessToken  = "YOUR API KEY";
    
    configuration.apiKey  = "YOUR API KEY";
    
    configuration.customerId  = "YOUR API KEY";
    Carbon client = new Carbon(configuration);
    List<S3GetFileInput> ids = Arrays.asList();
    Object tags = null;
    Integer chunkSize = 1500;
    Integer chunkOverlap = 20;
    Boolean skipEmbeddingGeneration = false;
    EmbeddingGenerators embeddingModel = EmbeddingGenerators.fromValue("OPENAI");
    Boolean generateSparseVectors = false;
    Boolean prependFilenameToChunks = false;
    Integer maxItemsPerChunk = 56; // Number of objects per chunk. For csv, tsv, xlsx, and json files only.
    Boolean setPageAsBoundary = false;
    Integer dataSourceId = 56;
    String requestId = "requestId_example";
    Boolean useOcr = false;
    Boolean parsePdfTablesWithOcr = false;
    FileSyncConfigNullable fileSyncConfig = new FileSyncConfigNullable();
    try {
      GenericSuccessResponse result = client
              .integrations
              .syncS3Files(ids)
              .tags(tags)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .skipEmbeddingGeneration(skipEmbeddingGeneration)
              .embeddingModel(embeddingModel)
              .generateSparseVectors(generateSparseVectors)
              .prependFilenameToChunks(prependFilenameToChunks)
              .maxItemsPerChunk(maxItemsPerChunk)
              .setPageAsBoundary(setPageAsBoundary)
              .dataSourceId(dataSourceId)
              .requestId(requestId)
              .useOcr(useOcr)
              .parsePdfTablesWithOcr(parsePdfTablesWithOcr)
              .fileSyncConfig(fileSyncConfig)
              .execute();
      System.out.println(result);
      System.out.println(result.getSuccess());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#syncS3Files");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<GenericSuccessResponse> response = client
              .integrations
              .syncS3Files(ids)
              .tags(tags)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .skipEmbeddingGeneration(skipEmbeddingGeneration)
              .embeddingModel(embeddingModel)
              .generateSparseVectors(generateSparseVectors)
              .prependFilenameToChunks(prependFilenameToChunks)
              .maxItemsPerChunk(maxItemsPerChunk)
              .setPageAsBoundary(setPageAsBoundary)
              .dataSourceId(dataSourceId)
              .requestId(requestId)
              .useOcr(useOcr)
              .parsePdfTablesWithOcr(parsePdfTablesWithOcr)
              .fileSyncConfig(fileSyncConfig)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling IntegrationsApi#syncS3Files");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}

```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **s3FileSyncInput** | [**S3FileSyncInput**](S3FileSyncInput.md)|  | |

### Return type

[**GenericSuccessResponse**](GenericSuccessResponse.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

