# EmbeddingsApi

All URIs are relative to *https://api.carbon.ai*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getDocuments**](EmbeddingsApi.md#getDocuments) | **POST** /embeddings | Embeddings |
| [**getEmbeddingsAndChunks**](EmbeddingsApi.md#getEmbeddingsAndChunks) | **POST** /text_chunks | Retrieve Embeddings And Content |
| [**uploadChunksAndEmbeddings**](EmbeddingsApi.md#uploadChunksAndEmbeddings) | **POST** /upload_chunks_and_embeddings | Upload Chunks And Embeddings |


<a name="getDocuments"></a>
# **getDocuments**
> DocumentResponseList getDocuments(getEmbeddingDocumentsBody).execute();

Embeddings

For pre-filtering documents, using &#x60;tags_v2&#x60; is preferred to using &#x60;tags&#x60; (which is now deprecated). If both &#x60;tags_v2&#x60; and &#x60;tags&#x60; are specified, &#x60;tags&#x60; is ignored. &#x60;tags_v2&#x60; enables building complex filters through the use of \&quot;AND\&quot;, \&quot;OR\&quot;, and negation logic. Take the below input as an example: &#x60;&#x60;&#x60;json {     \&quot;OR\&quot;: [         {             \&quot;key\&quot;: \&quot;subject\&quot;,             \&quot;value\&quot;: \&quot;holy-bible\&quot;,             \&quot;negate\&quot;: false         },         {             \&quot;key\&quot;: \&quot;person-of-interest\&quot;,             \&quot;value\&quot;: \&quot;jesus christ\&quot;,             \&quot;negate\&quot;: false         },         {             \&quot;key\&quot;: \&quot;genre\&quot;,             \&quot;value\&quot;: \&quot;religion\&quot;,             \&quot;negate\&quot;: true         }         {             \&quot;AND\&quot;: [                 {                     \&quot;key\&quot;: \&quot;subject\&quot;,                     \&quot;value\&quot;: \&quot;tao-te-ching\&quot;,                     \&quot;negate\&quot;: false                 },                 {                     \&quot;key\&quot;: \&quot;author\&quot;,                     \&quot;value\&quot;: \&quot;lao-tzu\&quot;,                     \&quot;negate\&quot;: false                 }             ]         }     ] } &#x60;&#x60;&#x60; In this case, files will be filtered such that: 1. \&quot;subject\&quot; &#x3D; \&quot;holy-bible\&quot; OR 2. \&quot;person-of-interest\&quot; &#x3D; \&quot;jesus christ\&quot; OR 3. \&quot;genre\&quot; !&#x3D; \&quot;religion\&quot; OR 4. \&quot;subject\&quot; &#x3D; \&quot;tao-te-ching\&quot; AND \&quot;author\&quot; &#x3D; \&quot;lao-tzu\&quot;  Note that the top level of the query must be either an \&quot;OR\&quot; or \&quot;AND\&quot; array. Currently, nesting is limited to 3. For tag blocks (those with \&quot;key\&quot;, \&quot;value\&quot;, and \&quot;negate\&quot; keys), the following typing rules apply: 1. \&quot;key\&quot; isn&#39;t optional and must be a &#x60;string&#x60; 2. \&quot;value\&quot; isn&#39;t optional and can be &#x60;any&#x60; or list[&#x60;any&#x60;] 3. \&quot;negate\&quot; is optional and must be &#x60;true&#x60; or &#x60;false&#x60;. If present and &#x60;true&#x60;, then the filter block is negated in the resulting query. It is &#x60;false&#x60; by default.   When querying embeddings, you can optionally specify the &#x60;media_type&#x60; parameter in your request. By default (if not set), it is equal to \&quot;TEXT\&quot;. This means that the query will be performed over files that have been parsed as text (for now, this covers all files except image files). If it is equal to \&quot;IMAGE\&quot;, the query will be performed over image files (for now, &#x60;.jpg&#x60; and &#x60;.png&#x60; files). You can think of this field as an additional filter on top of any filters set in &#x60;file_ids&#x60; and   When &#x60;hybrid_search&#x60; is set to true, a combination of keyword search and semantic search are used to rank and select candidate embeddings during information retrieval. By default, these search methods are weighted equally during the ranking process. To adjust the weight (or \&quot;importance\&quot;) of each search method, you can use the &#x60;hybrid_search_tuning_parameters&#x60; property. The description for the different tuning parameters are: - &#x60;weight_a&#x60;: weight to assign to semantic search - &#x60;weight_b&#x60;: weight to assign to keyword search  You must ensure that &#x60;sum(weight_a, weight_b,..., weight_n)&#x60; for all *n* weights is equal to 1. The equality has an error tolerance of 0.001 to account for possible floating point issues.  In order to use hybrid search for a customer across a set of documents, two flags need to be enabled: 1. Use the &#x60;/modify_user_configuration&#x60; endpoint to to enable &#x60;sparse_vectors&#x60; for the customer. The payload body for this request is below: &#x60;&#x60;&#x60; {   \&quot;configuration_key_name\&quot;: \&quot;sparse_vectors\&quot;,   \&quot;value\&quot;: {     \&quot;enabled\&quot;: true   } } &#x60;&#x60;&#x60; 2. Make sure hybrid search is enabled for the documents across which you want to perform the search. For the &#x60;/uploadfile&#x60; endpoint, this can be done by setting the following query parameter: &#x60;generate_sparse_vectors&#x3D;true&#x60;   Carbon supports multiple models for use in generating embeddings for files. For images, we support Vertex AI&#39;s multimodal model; for text, we support OpenAI&#39;s &#x60;text-embedding-ada-002&#x60; and Cohere&#39;s embed-multilingual-v3.0. The model can be specified via the &#x60;embedding_model&#x60; parameter (in the POST body for &#x60;/embeddings&#x60;, and a query  parameter in &#x60;/uploadfile&#x60;). If no model is supplied, the &#x60;text-embedding-ada-002&#x60; is used by default. When performing embedding queries, embeddings from files that used the specified model will be considered in the query. For example, if files A and B have embeddings generated with &#x60;OPENAI&#x60;, and files C and D have embeddings generated with &#x60;COHERE_MULTILINGUAL_V3&#x60;, then by default, queries will only consider files A and B. If &#x60;COHERE_MULTILINGUAL_V3&#x60; is specified as the &#x60;embedding_model&#x60; in &#x60;/embeddings&#x60;, then only files C and D will be considered. Make sure that the set of all files you want considered for a query have embeddings generated via the same model. For now, **do not** set &#x60;VERTEX_MULTIMODAL&#x60; as an &#x60;embedding_model&#x60;. This model is used automatically by Carbon when it detects an image file.

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.EmbeddingsApi;
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
    String query = "query_example"; // Query for which to get related chunks and embeddings.
    Integer k = 56; // Number of related chunks to return.
    Map<String, Object> tags = new HashMap(); // A set of tags to limit the search to. Deprecated and may be removed in the future.
    List<Double> queryVector = Arrays.asList(); // Optional query vector for which to get related chunks and embeddings. It must have been         generated by the same model used to generate the embeddings across which the search is being conducted. Cannot         provide both `query` and `query_vector`.
    List<Integer> fileIds = Arrays.asList(); // Optional list of file IDs to limit the search to
    List<Integer> parentFileIds = Arrays.asList(); // Optional list of parent file IDs to limit the search to. A parent file describes a file to which         another file belongs (e.g. a folder)
    Boolean includeAllChildren = false; // Flag to control whether or not to include all children of filtered files in the embedding search.
    Object tagsV2 = null; // A set of tags to limit the search to. Use this instead of `tags`, which is deprecated.
    Boolean includeTags = true; // Flag to control whether or not to include tags for each chunk in the response.
    Boolean includeVectors = true; // Flag to control whether or not to include embedding vectors in the response.
    Boolean includeRawFile = true; // Flag to control whether or not to include a signed URL to the raw file containing each chunk         in the response.
    Boolean hybridSearch = true; // Flag to control whether or not to perform hybrid search.
    HybridSearchTuningParamsNullable hybridSearchTuningParameters = new HybridSearchTuningParamsNullable();
    FileContentTypesNullable mediaType = FileContentTypesNullable.fromValue("TEXT");
    EmbeddingGeneratorsNullable embeddingModel = EmbeddingGeneratorsNullable.fromValue("OPENAI");
    try {
      DocumentResponseList result = client
              .embeddings
              .getDocuments(query, k)
              .tags(tags)
              .queryVector(queryVector)
              .fileIds(fileIds)
              .parentFileIds(parentFileIds)
              .includeAllChildren(includeAllChildren)
              .tagsV2(tagsV2)
              .includeTags(includeTags)
              .includeVectors(includeVectors)
              .includeRawFile(includeRawFile)
              .hybridSearch(hybridSearch)
              .hybridSearchTuningParameters(hybridSearchTuningParameters)
              .mediaType(mediaType)
              .embeddingModel(embeddingModel)
              .execute();
      System.out.println(result);
      System.out.println(result.getDocuments());
    } catch (ApiException e) {
      System.err.println("Exception when calling EmbeddingsApi#getDocuments");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<DocumentResponseList> response = client
              .embeddings
              .getDocuments(query, k)
              .tags(tags)
              .queryVector(queryVector)
              .fileIds(fileIds)
              .parentFileIds(parentFileIds)
              .includeAllChildren(includeAllChildren)
              .tagsV2(tagsV2)
              .includeTags(includeTags)
              .includeVectors(includeVectors)
              .includeRawFile(includeRawFile)
              .hybridSearch(hybridSearch)
              .hybridSearchTuningParameters(hybridSearchTuningParameters)
              .mediaType(mediaType)
              .embeddingModel(embeddingModel)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling EmbeddingsApi#getDocuments");
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
| **getEmbeddingDocumentsBody** | [**GetEmbeddingDocumentsBody**](GetEmbeddingDocumentsBody.md)|  | |

### Return type

[**DocumentResponseList**](DocumentResponseList.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="getEmbeddingsAndChunks"></a>
# **getEmbeddingsAndChunks**
> EmbeddingsAndChunksResponse getEmbeddingsAndChunks(embeddingsAndChunksQueryInput).execute();

Retrieve Embeddings And Content

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.EmbeddingsApi;
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
    EmbeddingsAndChunksFilters filters = new EmbeddingsAndChunksFilters();
    Pagination pagination = new Pagination();
    EmbeddingsAndChunksOrderByColumns orderBy = EmbeddingsAndChunksOrderByColumns.fromValue("created_at");
    OrderDir orderDir = OrderDir.fromValue("desc");
    Boolean includeVectors = false;
    try {
      EmbeddingsAndChunksResponse result = client
              .embeddings
              .getEmbeddingsAndChunks(filters)
              .pagination(pagination)
              .orderBy(orderBy)
              .orderDir(orderDir)
              .includeVectors(includeVectors)
              .execute();
      System.out.println(result);
      System.out.println(result.getResults());
      System.out.println(result.getCount());
    } catch (ApiException e) {
      System.err.println("Exception when calling EmbeddingsApi#getEmbeddingsAndChunks");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<EmbeddingsAndChunksResponse> response = client
              .embeddings
              .getEmbeddingsAndChunks(filters)
              .pagination(pagination)
              .orderBy(orderBy)
              .orderDir(orderDir)
              .includeVectors(includeVectors)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling EmbeddingsApi#getEmbeddingsAndChunks");
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
| **embeddingsAndChunksQueryInput** | [**EmbeddingsAndChunksQueryInput**](EmbeddingsAndChunksQueryInput.md)|  | |

### Return type

[**EmbeddingsAndChunksResponse**](EmbeddingsAndChunksResponse.md)

### Authorization

[accessToken](../README.md#accessToken), [apiKey](../README.md#apiKey), [customerId](../README.md#customerId)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful Response |  -  |

<a name="uploadChunksAndEmbeddings"></a>
# **uploadChunksAndEmbeddings**
> GenericSuccessResponse uploadChunksAndEmbeddings(chunksAndEmbeddingsUploadInput).execute();

Upload Chunks And Embeddings

### Example
```java
import com.konfigthis.carbonai.client.ApiClient;
import com.konfigthis.carbonai.client.ApiException;
import com.konfigthis.carbonai.client.ApiResponse;
import com.konfigthis.carbonai.client.Carbon;
import com.konfigthis.carbonai.client.Configuration;
import com.konfigthis.carbonai.client.auth.*;
import com.konfigthis.carbonai.client.model.*;
import com.konfigthis.carbonai.client.api.EmbeddingsApi;
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
    EmbeddingGenerators embeddingModel = EmbeddingGenerators.fromValue("OPENAI");
    List<SingleChunksAndEmbeddingsUploadInput> chunksAndEmbeddings = Arrays.asList();
    Boolean overwriteExisting = false;
    Boolean chunksOnly = false;
    Map<String, Object> customCredentials = new HashMap();
    try {
      GenericSuccessResponse result = client
              .embeddings
              .uploadChunksAndEmbeddings(embeddingModel, chunksAndEmbeddings)
              .overwriteExisting(overwriteExisting)
              .chunksOnly(chunksOnly)
              .customCredentials(customCredentials)
              .execute();
      System.out.println(result);
      System.out.println(result.getSuccess());
    } catch (ApiException e) {
      System.err.println("Exception when calling EmbeddingsApi#uploadChunksAndEmbeddings");
      System.err.println("Status code: " + e.getStatusCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }

    // Use .executeWithHttpInfo() to retrieve HTTP Status Code, Headers and Request
    try {
      ApiResponse<GenericSuccessResponse> response = client
              .embeddings
              .uploadChunksAndEmbeddings(embeddingModel, chunksAndEmbeddings)
              .overwriteExisting(overwriteExisting)
              .chunksOnly(chunksOnly)
              .customCredentials(customCredentials)
              .executeWithHttpInfo();
      System.out.println(response.getResponseBody());
      System.out.println(response.getResponseHeaders());
      System.out.println(response.getStatusCode());
      System.out.println(response.getRoundTripTime());
      System.out.println(response.getRequest());
    } catch (ApiException e) {
      System.err.println("Exception when calling EmbeddingsApi#uploadChunksAndEmbeddings");
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
| **chunksAndEmbeddingsUploadInput** | [**ChunksAndEmbeddingsUploadInput**](ChunksAndEmbeddingsUploadInput.md)|  | |

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

