# FilesApi

All URIs are relative to *https://api.carbon.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createUserFileTags**](FilesApi.md#createUserFileTags) | **POST** /create_user_file_tags | Create File Tags |
| [**delete**](FilesApi.md#delete) | **DELETE** /deletefile/{file_id} | Delete File Endpoint |
| [**deleteFileTags**](FilesApi.md#deleteFileTags) | **POST** /delete_user_file_tags | Delete File Tags |
| [**deleteMany**](FilesApi.md#deleteMany) | **POST** /delete_files | Delete Files Endpoint |
| [**deleteV2**](FilesApi.md#deleteV2) | **POST** /delete_files_v2 | Delete Files V2 Endpoint |
| [**getParsedFile**](FilesApi.md#getParsedFile) | **GET** /parsed_file/{file_id} | Parsed File |
| [**getRawFile**](FilesApi.md#getRawFile) | **GET** /raw_file/{file_id} | Raw File |
| [**queryUserFiles**](FilesApi.md#queryUserFiles) | **POST** /user_files_v2 | User Files V2 |
| [**queryUserFilesDeprecated**](FilesApi.md#queryUserFilesDeprecated) | **POST** /user_files | User Files |
| [**resync**](FilesApi.md#resync) | **POST** /resync_file | Resync File |
| [**upload**](FilesApi.md#upload) | **POST** /uploadfile | Create Upload File |
| [**uploadFromUrl**](FilesApi.md#uploadFromUrl) | **POST** /upload_file_from_url | Create Upload File From Url |
| [**uploadText**](FilesApi.md#uploadText) | **POST** /upload_text | Create Raw Text |


<a name="createUserFileTags"></a>
# **createUserFileTags**
> UserFile createUserFileTags(organizationUserFileTagCreate).execute();

Create File Tags

A tag is a key-value pair that can be added to a file. This pair can then be used for searches (e.g. embedding searches) in order to narrow down the scope of the search. A file can have any number of tags. The following are reserved keys that cannot be used: - db_embedding_id - organization_id - user_id - organization_user_file_id  Carbon currently supports two data types for tag values - &#x60;string&#x60; and &#x60;list&lt;string&gt;&#x60;. Keys can only be &#x60;string&#x60;. If values other than &#x60;string&#x60; and &#x60;list&lt;string&gt;&#x60; are used, they&#39;re automatically converted to strings (e.g. 4 will become \&quot;4\&quot;).

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.FilesApi;
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
    Map<String, Object> tags = new HashMap();
    Integer organizationUserFileId = 56;
    try {
      UserFile result = client
              .files
              .createUserFileTags(tags, organizationUserFileId)
              .execute();
      System.out.println(result);
      System.out.println(result.getTags());
      System.out.println(result.getId());
      System.out.println(result.getSource());
      System.out.println(result.getOrganizationId());
      System.out.println(result.getOrganizationSuppliedUserId());
      System.out.println(result.getOrganizationUserDataSourceId());
      System.out.println(result.getExternalFileId());
      System.out.println(result.getExternalUrl());
      System.out.println(result.getSyncStatus());
      System.out.println(result.getSyncErrorMessage());
      System.out.println(result.getLastSync());
      System.out.println(result.getFileStatistics());
      System.out.println(result.getFileMetadata());
      System.out.println(result.getEmbeddingProperties());
      System.out.println(result.getChunkSize());
      System.out.println(result.getChunkOverlap());
      System.out.println(result.getChunkProperties());
      System.out.println(result.getOcrProperties());
      System.out.println(result.getOcrJobStartedAt());
      System.out.println(result.getName());
      System.out.println(result.getParentId());
      System.out.println(result.getEnableAutoSync());
      System.out.println(result.getPresignedUrl());
      System.out.println(result.getParsedTextUrl());
      System.out.println(result.getAdditionalPresignedUrls());
      System.out.println(result.getSkipEmbeddingGeneration());
      System.out.println(result.getSourceCreatedAt());
      System.out.println(result.getGenerateSparseVectors());
      System.out.println(result.getRequestId());
      System.out.println(result.getSyncProperties());
      System.out.println(result.getCreatedAt());
      System.out.println(result.getUpdatedAt());
    } catch (ApiException e) {
      System.err.println("Exception when calling FilesApi#createUserFileTags");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<UserFile> response = client
              .files
              .createUserFileTags(tags, organizationUserFileId)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling FilesApi#createUserFileTags");
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
| **organizationUserFileTagCreate** | [**OrganizationUserFileTagCreate**](OrganizationUserFileTagCreate.md)|  | |

### Return type

[**UserFile**](UserFile.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="delete"></a>
# **delete**
> GenericSuccessResponse delete(fileId).execute();

Delete File Endpoint

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.FilesApi;
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
    Integer fileId = 56;
    try {
      GenericSuccessResponse result = client
              .files
              .delete(fileId)
              .execute();
      System.out.println(result);
      System.out.println(result.getSuccess());
    } catch (ApiException e) {
      System.err.println("Exception when calling FilesApi#delete");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<GenericSuccessResponse> response = client
              .files
              .delete(fileId)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling FilesApi#delete");
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
| **fileId** | **Integer**|  | |

### Return type

[**GenericSuccessResponse**](GenericSuccessResponse.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="deleteFileTags"></a>
# **deleteFileTags**
> UserFile deleteFileTags(organizationUserFileTagsRemove).execute();

Delete File Tags

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.FilesApi;
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
    List<String> tags = Arrays.asList();
    Integer organizationUserFileId = 56;
    try {
      UserFile result = client
              .files
              .deleteFileTags(tags, organizationUserFileId)
              .execute();
      System.out.println(result);
      System.out.println(result.getTags());
      System.out.println(result.getId());
      System.out.println(result.getSource());
      System.out.println(result.getOrganizationId());
      System.out.println(result.getOrganizationSuppliedUserId());
      System.out.println(result.getOrganizationUserDataSourceId());
      System.out.println(result.getExternalFileId());
      System.out.println(result.getExternalUrl());
      System.out.println(result.getSyncStatus());
      System.out.println(result.getSyncErrorMessage());
      System.out.println(result.getLastSync());
      System.out.println(result.getFileStatistics());
      System.out.println(result.getFileMetadata());
      System.out.println(result.getEmbeddingProperties());
      System.out.println(result.getChunkSize());
      System.out.println(result.getChunkOverlap());
      System.out.println(result.getChunkProperties());
      System.out.println(result.getOcrProperties());
      System.out.println(result.getOcrJobStartedAt());
      System.out.println(result.getName());
      System.out.println(result.getParentId());
      System.out.println(result.getEnableAutoSync());
      System.out.println(result.getPresignedUrl());
      System.out.println(result.getParsedTextUrl());
      System.out.println(result.getAdditionalPresignedUrls());
      System.out.println(result.getSkipEmbeddingGeneration());
      System.out.println(result.getSourceCreatedAt());
      System.out.println(result.getGenerateSparseVectors());
      System.out.println(result.getRequestId());
      System.out.println(result.getSyncProperties());
      System.out.println(result.getCreatedAt());
      System.out.println(result.getUpdatedAt());
    } catch (ApiException e) {
      System.err.println("Exception when calling FilesApi#deleteFileTags");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<UserFile> response = client
              .files
              .deleteFileTags(tags, organizationUserFileId)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling FilesApi#deleteFileTags");
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
| **organizationUserFileTagsRemove** | [**OrganizationUserFileTagsRemove**](OrganizationUserFileTagsRemove.md)|  | |

### Return type

[**UserFile**](UserFile.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="deleteMany"></a>
# **deleteMany**
> GenericSuccessResponse deleteMany(deleteFilesQueryInput).execute();

Delete Files Endpoint

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.FilesApi;
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
    List<Integer> fileIds = Arrays.asList();
    List<ExternalFileSyncStatuses> syncStatuses = Arrays.asList();
    Boolean deleteNonSyncedOnly = false;
    Boolean sendWebhook = false;
    Boolean deleteChildFiles = false;
    try {
      GenericSuccessResponse result = client
              .files
              .deleteMany()
              .fileIds(fileIds)
              .syncStatuses(syncStatuses)
              .deleteNonSyncedOnly(deleteNonSyncedOnly)
              .sendWebhook(sendWebhook)
              .deleteChildFiles(deleteChildFiles)
              .execute();
      System.out.println(result);
      System.out.println(result.getSuccess());
    } catch (ApiException e) {
      System.err.println("Exception when calling FilesApi#deleteMany");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<GenericSuccessResponse> response = client
              .files
              .deleteMany()
              .fileIds(fileIds)
              .syncStatuses(syncStatuses)
              .deleteNonSyncedOnly(deleteNonSyncedOnly)
              .sendWebhook(sendWebhook)
              .deleteChildFiles(deleteChildFiles)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling FilesApi#deleteMany");
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
| **deleteFilesQueryInput** | [**DeleteFilesQueryInput**](DeleteFilesQueryInput.md)|  | |

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

<a name="deleteV2"></a>
# **deleteV2**
> GenericSuccessResponse deleteV2(deleteFilesV2QueryInput).execute();

Delete Files V2 Endpoint

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.FilesApi;
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
    OrganizationUserFilesToSyncFilters filters = new OrganizationUserFilesToSyncFilters();
    Boolean sendWebhook = false;
    try {
      GenericSuccessResponse result = client
              .files
              .deleteV2()
              .filters(filters)
              .sendWebhook(sendWebhook)
              .execute();
      System.out.println(result);
      System.out.println(result.getSuccess());
    } catch (ApiException e) {
      System.err.println("Exception when calling FilesApi#deleteV2");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<GenericSuccessResponse> response = client
              .files
              .deleteV2()
              .filters(filters)
              .sendWebhook(sendWebhook)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling FilesApi#deleteV2");
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
| **deleteFilesV2QueryInput** | [**DeleteFilesV2QueryInput**](DeleteFilesV2QueryInput.md)|  | |

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

<a name="getParsedFile"></a>
# **getParsedFile**
> PresignedURLResponse getParsedFile(fileId).execute();

Parsed File

This route is deprecated. Use &#x60;/user_files_v2&#x60; instead.

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.FilesApi;
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
    Integer fileId = 56;
    try {
      PresignedURLResponse result = client
              .files
              .getParsedFile(fileId)
              .execute();
      System.out.println(result);
      System.out.println(result.getPresignedUrl());
    } catch (ApiException e) {
      System.err.println("Exception when calling FilesApi#getParsedFile");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<PresignedURLResponse> response = client
              .files
              .getParsedFile(fileId)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling FilesApi#getParsedFile");
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
| **fileId** | **Integer**|  | |

### Return type

[**PresignedURLResponse**](PresignedURLResponse.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="getRawFile"></a>
# **getRawFile**
> PresignedURLResponse getRawFile(fileId).execute();

Raw File

This route is deprecated. Use &#x60;/user_files_v2&#x60; instead.

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.FilesApi;
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
    Integer fileId = 56;
    try {
      PresignedURLResponse result = client
              .files
              .getRawFile(fileId)
              .execute();
      System.out.println(result);
      System.out.println(result.getPresignedUrl());
    } catch (ApiException e) {
      System.err.println("Exception when calling FilesApi#getRawFile");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<PresignedURLResponse> response = client
              .files
              .getRawFile(fileId)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling FilesApi#getRawFile");
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
| **fileId** | **Integer**|  | |

### Return type

[**PresignedURLResponse**](PresignedURLResponse.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="queryUserFiles"></a>
# **queryUserFiles**
> UserFilesV2 queryUserFiles(organizationUserFilesToSyncQueryInput).execute();

User Files V2

For pre-filtering documents, using &#x60;tags_v2&#x60; is preferred to using &#x60;tags&#x60; (which is now deprecated). If both &#x60;tags_v2&#x60; and &#x60;tags&#x60; are specified, &#x60;tags&#x60; is ignored. &#x60;tags_v2&#x60; enables building complex filters through the use of \&quot;AND\&quot;, \&quot;OR\&quot;, and negation logic. Take the below input as an example: &#x60;&#x60;&#x60;json {     \&quot;OR\&quot;: [         {             \&quot;key\&quot;: \&quot;subject\&quot;,             \&quot;value\&quot;: \&quot;holy-bible\&quot;,             \&quot;negate\&quot;: false         },         {             \&quot;key\&quot;: \&quot;person-of-interest\&quot;,             \&quot;value\&quot;: \&quot;jesus christ\&quot;,             \&quot;negate\&quot;: false         },         {             \&quot;key\&quot;: \&quot;genre\&quot;,             \&quot;value\&quot;: \&quot;religion\&quot;,             \&quot;negate\&quot;: true         }         {             \&quot;AND\&quot;: [                 {                     \&quot;key\&quot;: \&quot;subject\&quot;,                     \&quot;value\&quot;: \&quot;tao-te-ching\&quot;,                     \&quot;negate\&quot;: false                 },                 {                     \&quot;key\&quot;: \&quot;author\&quot;,                     \&quot;value\&quot;: \&quot;lao-tzu\&quot;,                     \&quot;negate\&quot;: false                 }             ]         }     ] } &#x60;&#x60;&#x60; In this case, files will be filtered such that: 1. \&quot;subject\&quot; &#x3D; \&quot;holy-bible\&quot; OR 2. \&quot;person-of-interest\&quot; &#x3D; \&quot;jesus christ\&quot; OR 3. \&quot;genre\&quot; !&#x3D; \&quot;religion\&quot; OR 4. \&quot;subject\&quot; &#x3D; \&quot;tao-te-ching\&quot; AND \&quot;author\&quot; &#x3D; \&quot;lao-tzu\&quot;  Note that the top level of the query must be either an \&quot;OR\&quot; or \&quot;AND\&quot; array. Currently, nesting is limited to 3. For tag blocks (those with \&quot;key\&quot;, \&quot;value\&quot;, and \&quot;negate\&quot; keys), the following typing rules apply: 1. \&quot;key\&quot; isn&#39;t optional and must be a &#x60;string&#x60; 2. \&quot;value\&quot; isn&#39;t optional and can be &#x60;any&#x60; or list[&#x60;any&#x60;] 3. \&quot;negate\&quot; is optional and must be &#x60;true&#x60; or &#x60;false&#x60;. If present and &#x60;true&#x60;, then the filter block is negated in the resulting query. It is &#x60;false&#x60; by default.

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.FilesApi;
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
    Pagination pagination = new Pagination();
    OrganizationUserFilesToSyncOrderByTypes orderBy = OrganizationUserFilesToSyncOrderByTypes.fromValue("created_at");
    OrderDir orderDir = OrderDir.fromValue("desc");
    OrganizationUserFilesToSyncFilters filters = new OrganizationUserFilesToSyncFilters();
    Boolean includeRawFile = true;
    Boolean includeParsedTextFile = true;
    Boolean includeAdditionalFiles = true;
    try {
      UserFilesV2 result = client
              .files
              .queryUserFiles()
              .pagination(pagination)
              .orderBy(orderBy)
              .orderDir(orderDir)
              .filters(filters)
              .includeRawFile(includeRawFile)
              .includeParsedTextFile(includeParsedTextFile)
              .includeAdditionalFiles(includeAdditionalFiles)
              .execute();
      System.out.println(result);
      System.out.println(result.getResults());
      System.out.println(result.getCount());
    } catch (ApiException e) {
      System.err.println("Exception when calling FilesApi#queryUserFiles");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<UserFilesV2> response = client
              .files
              .queryUserFiles()
              .pagination(pagination)
              .orderBy(orderBy)
              .orderDir(orderDir)
              .filters(filters)
              .includeRawFile(includeRawFile)
              .includeParsedTextFile(includeParsedTextFile)
              .includeAdditionalFiles(includeAdditionalFiles)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling FilesApi#queryUserFiles");
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
| **organizationUserFilesToSyncQueryInput** | [**OrganizationUserFilesToSyncQueryInput**](OrganizationUserFilesToSyncQueryInput.md)|  | |

### Return type

[**UserFilesV2**](UserFilesV2.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="queryUserFilesDeprecated"></a>
# **queryUserFilesDeprecated**
> List&lt;UserFile&gt; queryUserFilesDeprecated(organizationUserFilesToSyncQueryInput).execute();

User Files

This route is deprecated. Use &#x60;/user_files_v2&#x60; instead.

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.FilesApi;
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
    Pagination pagination = new Pagination();
    OrganizationUserFilesToSyncOrderByTypes orderBy = OrganizationUserFilesToSyncOrderByTypes.fromValue("created_at");
    OrderDir orderDir = OrderDir.fromValue("desc");
    OrganizationUserFilesToSyncFilters filters = new OrganizationUserFilesToSyncFilters();
    Boolean includeRawFile = true;
    Boolean includeParsedTextFile = true;
    Boolean includeAdditionalFiles = true;
    try {
      List<UserFile> result = client
              .files
              .queryUserFilesDeprecated()
              .pagination(pagination)
              .orderBy(orderBy)
              .orderDir(orderDir)
              .filters(filters)
              .includeRawFile(includeRawFile)
              .includeParsedTextFile(includeParsedTextFile)
              .includeAdditionalFiles(includeAdditionalFiles)
              .execute();
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling FilesApi#queryUserFilesDeprecated");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<List<UserFile>> response = client
              .files
              .queryUserFilesDeprecated()
              .pagination(pagination)
              .orderBy(orderBy)
              .orderDir(orderDir)
              .filters(filters)
              .includeRawFile(includeRawFile)
              .includeParsedTextFile(includeParsedTextFile)
              .includeAdditionalFiles(includeAdditionalFiles)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling FilesApi#queryUserFilesDeprecated");
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
| **organizationUserFilesToSyncQueryInput** | [**OrganizationUserFilesToSyncQueryInput**](OrganizationUserFilesToSyncQueryInput.md)|  | |

### Return type

[**List&lt;UserFile&gt;**](UserFile.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="resync"></a>
# **resync**
> UserFile resync(resyncFileQueryInput).execute();

Resync File

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.FilesApi;
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
    Integer fileId = 56;
    Integer chunkSize = 56;
    Integer chunkOverlap = 56;
    Boolean forceEmbeddingGeneration = false;
    try {
      UserFile result = client
              .files
              .resync(fileId)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .forceEmbeddingGeneration(forceEmbeddingGeneration)
              .execute();
      System.out.println(result);
      System.out.println(result.getTags());
      System.out.println(result.getId());
      System.out.println(result.getSource());
      System.out.println(result.getOrganizationId());
      System.out.println(result.getOrganizationSuppliedUserId());
      System.out.println(result.getOrganizationUserDataSourceId());
      System.out.println(result.getExternalFileId());
      System.out.println(result.getExternalUrl());
      System.out.println(result.getSyncStatus());
      System.out.println(result.getSyncErrorMessage());
      System.out.println(result.getLastSync());
      System.out.println(result.getFileStatistics());
      System.out.println(result.getFileMetadata());
      System.out.println(result.getEmbeddingProperties());
      System.out.println(result.getChunkSize());
      System.out.println(result.getChunkOverlap());
      System.out.println(result.getChunkProperties());
      System.out.println(result.getOcrProperties());
      System.out.println(result.getOcrJobStartedAt());
      System.out.println(result.getName());
      System.out.println(result.getParentId());
      System.out.println(result.getEnableAutoSync());
      System.out.println(result.getPresignedUrl());
      System.out.println(result.getParsedTextUrl());
      System.out.println(result.getAdditionalPresignedUrls());
      System.out.println(result.getSkipEmbeddingGeneration());
      System.out.println(result.getSourceCreatedAt());
      System.out.println(result.getGenerateSparseVectors());
      System.out.println(result.getRequestId());
      System.out.println(result.getSyncProperties());
      System.out.println(result.getCreatedAt());
      System.out.println(result.getUpdatedAt());
    } catch (ApiException e) {
      System.err.println("Exception when calling FilesApi#resync");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<UserFile> response = client
              .files
              .resync(fileId)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .forceEmbeddingGeneration(forceEmbeddingGeneration)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling FilesApi#resync");
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
| **resyncFileQueryInput** | [**ResyncFileQueryInput**](ResyncFileQueryInput.md)|  | |

### Return type

[**UserFile**](UserFile.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="upload"></a>
# **upload**
> UserFile upload(_file, bodyCreateUploadFileUploadfilePost).chunkSize(chunkSize).chunkOverlap(chunkOverlap).skipEmbeddingGeneration(skipEmbeddingGeneration).setPageAsBoundary(setPageAsBoundary).embeddingModel(embeddingModel).useOcr(useOcr).generateSparseVectors(generateSparseVectors).prependFilenameToChunks(prependFilenameToChunks).maxItemsPerChunk(maxItemsPerChunk).parsePdfTablesWithOcr(parsePdfTablesWithOcr).detectAudioLanguage(detectAudioLanguage).mediaType(mediaType).execute();

Create Upload File

This endpoint is used to directly upload local files to Carbon. The &#x60;POST&#x60; request should be a multipart form request. Note that the &#x60;set_page_as_boundary&#x60; query parameter is applicable only to PDFs for now. When this value is set, PDF chunks are at most one page long. Additional information can be retrieved for each chunk, however, namely the coordinates of the bounding box around the chunk (this can be used for things like text highlighting). Following is a description of all possible query parameters: - &#x60;chunk_size&#x60;: the chunk size (in tokens) applied when splitting the document - &#x60;chunk_overlap&#x60;: the chunk overlap (in tokens) applied when splitting the document - &#x60;skip_embedding_generation&#x60;: whether or not to skip the generation of chunks and embeddings - &#x60;set_page_as_boundary&#x60;: described above - &#x60;embedding_model&#x60;: the model used to generate embeddings for the document chunks - &#x60;use_ocr&#x60;: whether or not to use OCR as a preprocessing step prior to generating chunks (only valid for PDFs currently) - &#x60;generate_sparse_vectors&#x60;: whether or not to generate sparse vectors for the file. Required for hybrid search. - &#x60;prepend_filename_to_chunks&#x60;: whether or not to prepend the filename to the chunk text   Carbon supports multiple models for use in generating embeddings for files. For images, we support Vertex AI&#39;s multimodal model; for text, we support OpenAI&#39;s &#x60;text-embedding-ada-002&#x60; and Cohere&#39;s embed-multilingual-v3.0. The model can be specified via the &#x60;embedding_model&#x60; parameter (in the POST body for &#x60;/embeddings&#x60;, and a query  parameter in &#x60;/uploadfile&#x60;). If no model is supplied, the &#x60;text-embedding-ada-002&#x60; is used by default. When performing embedding queries, embeddings from files that used the specified model will be considered in the query. For example, if files A and B have embeddings generated with &#x60;OPENAI&#x60;, and files C and D have embeddings generated with &#x60;COHERE_MULTILINGUAL_V3&#x60;, then by default, queries will only consider files A and B. If &#x60;COHERE_MULTILINGUAL_V3&#x60; is specified as the &#x60;embedding_model&#x60; in &#x60;/embeddings&#x60;, then only files C and D will be considered. Make sure that the set of all files you want considered for a query have embeddings generated via the same model. For now, **do not** set &#x60;VERTEX_MULTIMODAL&#x60; as an &#x60;embedding_model&#x60;. This model is used automatically by Carbon when it detects an image file.

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.FilesApi;
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
    File _file = new File("/path/to/file");
    Integer chunkSize = 56; // Chunk size in tiktoken tokens to be used when processing file.
    Integer chunkOverlap = 56; // Chunk overlap in tiktoken tokens to be used when processing file.
    Boolean skipEmbeddingGeneration = false; // Flag to control whether or not embeddings should be generated and stored             when processing file.
    Boolean setPageAsBoundary = false; // Flag to control whether or not to set the a page's worth of content as the maximum             amount of content that can appear in a chunk. Only valid for PDFs. See description route description for             more information.
    TMEmbeddingGenerators embeddingModel = TMEmbeddingGenerators.fromValue("OPENAI"); // Embedding model that will be used to embed file chunks.
    Boolean useOcr = false; // Whether or not to use OCR when processing files. Only valid for PDFs. Useful for documents with             tables, images, and/or scanned text.
    Boolean generateSparseVectors = false; // Whether or not to generate sparse vectors for the file. This is *required* for the file to be a             candidate for hybrid search.
    Boolean prependFilenameToChunks = false; // Whether or not to prepend the file's name to chunks.
    Integer maxItemsPerChunk = 56; // Number of objects per chunk. For csv, tsv, xlsx, and json files only.
    Boolean parsePdfTablesWithOcr = false; // Whether to use rich table parsing when `use_ocr` is enabled.
    Boolean detectAudioLanguage = false; // Whether to automatically detect the language of the uploaded audio file.
    FileContentTypesNullable mediaType = FileContentTypesNullable.fromValue("TEXT"); // The media type of the file. If not provided, it will be inferred from the file extension.
    try {
      UserFile result = client
              .files
              .upload(_file)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .skipEmbeddingGeneration(skipEmbeddingGeneration)
              .setPageAsBoundary(setPageAsBoundary)
              .embeddingModel(embeddingModel)
              .useOcr(useOcr)
              .generateSparseVectors(generateSparseVectors)
              .prependFilenameToChunks(prependFilenameToChunks)
              .maxItemsPerChunk(maxItemsPerChunk)
              .parsePdfTablesWithOcr(parsePdfTablesWithOcr)
              .detectAudioLanguage(detectAudioLanguage)
              .mediaType(mediaType)
              .execute();
      System.out.println(result);
      System.out.println(result.getTags());
      System.out.println(result.getId());
      System.out.println(result.getSource());
      System.out.println(result.getOrganizationId());
      System.out.println(result.getOrganizationSuppliedUserId());
      System.out.println(result.getOrganizationUserDataSourceId());
      System.out.println(result.getExternalFileId());
      System.out.println(result.getExternalUrl());
      System.out.println(result.getSyncStatus());
      System.out.println(result.getSyncErrorMessage());
      System.out.println(result.getLastSync());
      System.out.println(result.getFileStatistics());
      System.out.println(result.getFileMetadata());
      System.out.println(result.getEmbeddingProperties());
      System.out.println(result.getChunkSize());
      System.out.println(result.getChunkOverlap());
      System.out.println(result.getChunkProperties());
      System.out.println(result.getOcrProperties());
      System.out.println(result.getOcrJobStartedAt());
      System.out.println(result.getName());
      System.out.println(result.getParentId());
      System.out.println(result.getEnableAutoSync());
      System.out.println(result.getPresignedUrl());
      System.out.println(result.getParsedTextUrl());
      System.out.println(result.getAdditionalPresignedUrls());
      System.out.println(result.getSkipEmbeddingGeneration());
      System.out.println(result.getSourceCreatedAt());
      System.out.println(result.getGenerateSparseVectors());
      System.out.println(result.getRequestId());
      System.out.println(result.getSyncProperties());
      System.out.println(result.getCreatedAt());
      System.out.println(result.getUpdatedAt());
    } catch (ApiException e) {
      System.err.println("Exception when calling FilesApi#upload");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<UserFile> response = client
              .files
              .upload(_file)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .skipEmbeddingGeneration(skipEmbeddingGeneration)
              .setPageAsBoundary(setPageAsBoundary)
              .embeddingModel(embeddingModel)
              .useOcr(useOcr)
              .generateSparseVectors(generateSparseVectors)
              .prependFilenameToChunks(prependFilenameToChunks)
              .maxItemsPerChunk(maxItemsPerChunk)
              .parsePdfTablesWithOcr(parsePdfTablesWithOcr)
              .detectAudioLanguage(detectAudioLanguage)
              .mediaType(mediaType)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling FilesApi#upload");
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
| **_file** | **File**|  | |
| **bodyCreateUploadFileUploadfilePost** | [**BodyCreateUploadFileUploadfilePost**](BodyCreateUploadFileUploadfilePost.md)|  | |
| **chunkSize** | **Integer**| Chunk size in tiktoken tokens to be used when processing file. | [optional] |
| **chunkOverlap** | **Integer**| Chunk overlap in tiktoken tokens to be used when processing file. | [optional] |
| **skipEmbeddingGeneration** | **Boolean**| Flag to control whether or not embeddings should be generated and stored             when processing file. | [optional] [default to false] |
| **setPageAsBoundary** | **Boolean**| Flag to control whether or not to set the a page&#39;s worth of content as the maximum             amount of content that can appear in a chunk. Only valid for PDFs. See description route description for             more information. | [optional] [default to false] |
| **embeddingModel** | [**TMEmbeddingGenerators**](.md)| Embedding model that will be used to embed file chunks. | [optional] [enum: OPENAI, AZURE_OPENAI, COHERE_MULTILINGUAL_V3, OPENAI_ADA_LARGE_256, OPENAI_ADA_LARGE_1024, OPENAI_ADA_LARGE_3072, OPENAI_ADA_SMALL_512, OPENAI_ADA_SMALL_1536, AZURE_ADA_LARGE_256, AZURE_ADA_LARGE_1024, AZURE_ADA_LARGE_3072, AZURE_ADA_SMALL_512, AZURE_ADA_SMALL_1536, SOLAR_1_MINI] |
| **useOcr** | **Boolean**| Whether or not to use OCR when processing files. Only valid for PDFs. Useful for documents with             tables, images, and/or scanned text. | [optional] [default to false] |
| **generateSparseVectors** | **Boolean**| Whether or not to generate sparse vectors for the file. This is *required* for the file to be a             candidate for hybrid search. | [optional] [default to false] |
| **prependFilenameToChunks** | **Boolean**| Whether or not to prepend the file&#39;s name to chunks. | [optional] [default to false] |
| **maxItemsPerChunk** | **Integer**| Number of objects per chunk. For csv, tsv, xlsx, and json files only. | [optional] |
| **parsePdfTablesWithOcr** | **Boolean**| Whether to use rich table parsing when &#x60;use_ocr&#x60; is enabled. | [optional] [default to false] |
| **detectAudioLanguage** | **Boolean**| Whether to automatically detect the language of the uploaded audio file. | [optional] [default to false] |
| **mediaType** | [**FileContentTypesNullable**](.md)| The media type of the file. If not provided, it will be inferred from the file extension. | [optional] [default to TEXT] [enum: TEXT, IMAGE, AUDIO, VIDEO] |

### Return type

[**UserFile**](UserFile.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="uploadFromUrl"></a>
# **uploadFromUrl**
> UserFile uploadFromUrl(uploadFileFromUrlInput).execute();

Create Upload File From Url

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.FilesApi;
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
    String fileName = "fileName_example";
    Integer chunkSize = 56;
    Integer chunkOverlap = 56;
    Boolean skipEmbeddingGeneration = false;
    Boolean setPageAsBoundary = false;
    EmbeddingGenerators embeddingModel = EmbeddingGenerators.fromValue("OPENAI");
    Boolean generateSparseVectors = false;
    Boolean useTextract = false;
    Boolean prependFilenameToChunks = false;
    Integer maxItemsPerChunk = 56; // Number of objects per chunk. For csv, tsv, xlsx, and json files only.
    Boolean parsePdfTablesWithOcr = false;
    Boolean detectAudioLanguage = false;
    try {
      UserFile result = client
              .files
              .uploadFromUrl(url)
              .fileName(fileName)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .skipEmbeddingGeneration(skipEmbeddingGeneration)
              .setPageAsBoundary(setPageAsBoundary)
              .embeddingModel(embeddingModel)
              .generateSparseVectors(generateSparseVectors)
              .useTextract(useTextract)
              .prependFilenameToChunks(prependFilenameToChunks)
              .maxItemsPerChunk(maxItemsPerChunk)
              .parsePdfTablesWithOcr(parsePdfTablesWithOcr)
              .detectAudioLanguage(detectAudioLanguage)
              .execute();
      System.out.println(result);
      System.out.println(result.getTags());
      System.out.println(result.getId());
      System.out.println(result.getSource());
      System.out.println(result.getOrganizationId());
      System.out.println(result.getOrganizationSuppliedUserId());
      System.out.println(result.getOrganizationUserDataSourceId());
      System.out.println(result.getExternalFileId());
      System.out.println(result.getExternalUrl());
      System.out.println(result.getSyncStatus());
      System.out.println(result.getSyncErrorMessage());
      System.out.println(result.getLastSync());
      System.out.println(result.getFileStatistics());
      System.out.println(result.getFileMetadata());
      System.out.println(result.getEmbeddingProperties());
      System.out.println(result.getChunkSize());
      System.out.println(result.getChunkOverlap());
      System.out.println(result.getChunkProperties());
      System.out.println(result.getOcrProperties());
      System.out.println(result.getOcrJobStartedAt());
      System.out.println(result.getName());
      System.out.println(result.getParentId());
      System.out.println(result.getEnableAutoSync());
      System.out.println(result.getPresignedUrl());
      System.out.println(result.getParsedTextUrl());
      System.out.println(result.getAdditionalPresignedUrls());
      System.out.println(result.getSkipEmbeddingGeneration());
      System.out.println(result.getSourceCreatedAt());
      System.out.println(result.getGenerateSparseVectors());
      System.out.println(result.getRequestId());
      System.out.println(result.getSyncProperties());
      System.out.println(result.getCreatedAt());
      System.out.println(result.getUpdatedAt());
    } catch (ApiException e) {
      System.err.println("Exception when calling FilesApi#uploadFromUrl");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<UserFile> response = client
              .files
              .uploadFromUrl(url)
              .fileName(fileName)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .skipEmbeddingGeneration(skipEmbeddingGeneration)
              .setPageAsBoundary(setPageAsBoundary)
              .embeddingModel(embeddingModel)
              .generateSparseVectors(generateSparseVectors)
              .useTextract(useTextract)
              .prependFilenameToChunks(prependFilenameToChunks)
              .maxItemsPerChunk(maxItemsPerChunk)
              .parsePdfTablesWithOcr(parsePdfTablesWithOcr)
              .detectAudioLanguage(detectAudioLanguage)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling FilesApi#uploadFromUrl");
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
| **uploadFileFromUrlInput** | [**UploadFileFromUrlInput**](UploadFileFromUrlInput.md)|  | |

### Return type

[**UserFile**](UserFile.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="uploadText"></a>
# **uploadText**
> UserFile uploadText(rawTextInput).execute();

Create Raw Text

Carbon supports multiple models for use in generating embeddings for files. For images, we support Vertex AI&#39;s multimodal model; for text, we support OpenAI&#39;s &#x60;text-embedding-ada-002&#x60; and Cohere&#39;s embed-multilingual-v3.0. The model can be specified via the &#x60;embedding_model&#x60; parameter (in the POST body for &#x60;/embeddings&#x60;, and a query  parameter in &#x60;/uploadfile&#x60;). If no model is supplied, the &#x60;text-embedding-ada-002&#x60; is used by default. When performing embedding queries, embeddings from files that used the specified model will be considered in the query. For example, if files A and B have embeddings generated with &#x60;OPENAI&#x60;, and files C and D have embeddings generated with &#x60;COHERE_MULTILINGUAL_V3&#x60;, then by default, queries will only consider files A and B. If &#x60;COHERE_MULTILINGUAL_V3&#x60; is specified as the &#x60;embedding_model&#x60; in &#x60;/embeddings&#x60;, then only files C and D will be considered. Make sure that the set of all files you want considered for a query have embeddings generated via the same model. For now, **do not** set &#x60;VERTEX_MULTIMODAL&#x60; as an &#x60;embedding_model&#x60;. This model is used automatically by Carbon when it detects an image file.

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.FilesApi;
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
    String contents = "contents_example";
    String name = "name_example";
    Integer chunkSize = 56;
    Integer chunkOverlap = 56;
    Boolean skipEmbeddingGeneration = false;
    Integer overwriteFileId = 56;
    EmbeddingGeneratorsNullable embeddingModel = EmbeddingGeneratorsNullable.fromValue("OPENAI");
    Boolean generateSparseVectors = false;
    try {
      UserFile result = client
              .files
              .uploadText(contents)
              .name(name)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .skipEmbeddingGeneration(skipEmbeddingGeneration)
              .overwriteFileId(overwriteFileId)
              .embeddingModel(embeddingModel)
              .generateSparseVectors(generateSparseVectors)
              .execute();
      System.out.println(result);
      System.out.println(result.getTags());
      System.out.println(result.getId());
      System.out.println(result.getSource());
      System.out.println(result.getOrganizationId());
      System.out.println(result.getOrganizationSuppliedUserId());
      System.out.println(result.getOrganizationUserDataSourceId());
      System.out.println(result.getExternalFileId());
      System.out.println(result.getExternalUrl());
      System.out.println(result.getSyncStatus());
      System.out.println(result.getSyncErrorMessage());
      System.out.println(result.getLastSync());
      System.out.println(result.getFileStatistics());
      System.out.println(result.getFileMetadata());
      System.out.println(result.getEmbeddingProperties());
      System.out.println(result.getChunkSize());
      System.out.println(result.getChunkOverlap());
      System.out.println(result.getChunkProperties());
      System.out.println(result.getOcrProperties());
      System.out.println(result.getOcrJobStartedAt());
      System.out.println(result.getName());
      System.out.println(result.getParentId());
      System.out.println(result.getEnableAutoSync());
      System.out.println(result.getPresignedUrl());
      System.out.println(result.getParsedTextUrl());
      System.out.println(result.getAdditionalPresignedUrls());
      System.out.println(result.getSkipEmbeddingGeneration());
      System.out.println(result.getSourceCreatedAt());
      System.out.println(result.getGenerateSparseVectors());
      System.out.println(result.getRequestId());
      System.out.println(result.getSyncProperties());
      System.out.println(result.getCreatedAt());
      System.out.println(result.getUpdatedAt());
    } catch (ApiException e) {
      System.err.println("Exception when calling FilesApi#uploadText");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<UserFile> response = client
              .files
              .uploadText(contents)
              .name(name)
              .chunkSize(chunkSize)
              .chunkOverlap(chunkOverlap)
              .skipEmbeddingGeneration(skipEmbeddingGeneration)
              .overwriteFileId(overwriteFileId)
              .embeddingModel(embeddingModel)
              .generateSparseVectors(generateSparseVectors)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling FilesApi#uploadText");
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
| **rawTextInput** | [**RawTextInput**](RawTextInput.md)|  | |

### Return type

[**UserFile**](UserFile.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

