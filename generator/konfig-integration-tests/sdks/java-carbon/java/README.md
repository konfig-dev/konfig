<div align="center">

[![Visit Carbon](https://raw.githubusercontent.com/Carbon-for-Developers/carbon-sdks/HEAD/java/header.png)](https://carbon.ai)

# [Carbon](https://carbon.ai)<a id="carbon"></a>

Connect external data to LLMs, no matter the source.

[![Maven Central](https://img.shields.io/badge/Maven%20Central-v0.1.0-blue)](https://central.sonatype.com/artifact/com.konfigthis.carbonai/carbonai-java-sdk/0.1.0)

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Requirements](#requirements)
- [Installation](#installation)
  * [Maven users](#maven-users)
  * [Gradle users](#gradle-users)
  * [Android users](#android-users)
  * [Others](#others)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`carbon.auth.getAccessToken`](#carbonauthgetaccesstoken)
  * [`carbon.auth.getWhiteLabeling`](#carbonauthgetwhitelabeling)
  * [`carbon.dataSources.queryUserDataSources`](#carbondatasourcesqueryuserdatasources)
  * [`carbon.dataSources.revokeAccessToken`](#carbondatasourcesrevokeaccesstoken)
  * [`carbon.embeddings.getDocuments`](#carbonembeddingsgetdocuments)
  * [`carbon.embeddings.getEmbeddingsAndChunks`](#carbonembeddingsgetembeddingsandchunks)
  * [`carbon.embeddings.uploadChunksAndEmbeddings`](#carbonembeddingsuploadchunksandembeddings)
  * [`carbon.files.createUserFileTags`](#carbonfilescreateuserfiletags)
  * [`carbon.files.delete`](#carbonfilesdelete)
  * [`carbon.files.deleteFileTags`](#carbonfilesdeletefiletags)
  * [`carbon.files.deleteMany`](#carbonfilesdeletemany)
  * [`carbon.files.deleteV2`](#carbonfilesdeletev2)
  * [`carbon.files.getParsedFile`](#carbonfilesgetparsedfile)
  * [`carbon.files.getRawFile`](#carbonfilesgetrawfile)
  * [`carbon.files.queryUserFiles`](#carbonfilesqueryuserfiles)
  * [`carbon.files.queryUserFilesDeprecated`](#carbonfilesqueryuserfilesdeprecated)
  * [`carbon.files.resync`](#carbonfilesresync)
  * [`carbon.files.upload`](#carbonfilesupload)
  * [`carbon.files.uploadFromUrl`](#carbonfilesuploadfromurl)
  * [`carbon.files.uploadText`](#carbonfilesuploadtext)
  * [`carbon.health.check`](#carbonhealthcheck)
  * [`carbon.integrations.connectDataSource`](#carbonintegrationsconnectdatasource)
  * [`carbon.integrations.connectFreshdesk`](#carbonintegrationsconnectfreshdesk)
  * [`carbon.integrations.connectGitbook`](#carbonintegrationsconnectgitbook)
  * [`carbon.integrations.createAwsIamUser`](#carbonintegrationscreateawsiamuser)
  * [`carbon.integrations.getOauthUrl`](#carbonintegrationsgetoauthurl)
  * [`carbon.integrations.listConfluencePages`](#carbonintegrationslistconfluencepages)
  * [`carbon.integrations.listDataSourceItems`](#carbonintegrationslistdatasourceitems)
  * [`carbon.integrations.listFolders`](#carbonintegrationslistfolders)
  * [`carbon.integrations.listGitbookSpaces`](#carbonintegrationslistgitbookspaces)
  * [`carbon.integrations.listLabels`](#carbonintegrationslistlabels)
  * [`carbon.integrations.listOutlookCategories`](#carbonintegrationslistoutlookcategories)
  * [`carbon.integrations.listRepos`](#carbonintegrationslistrepos)
  * [`carbon.integrations.syncConfluence`](#carbonintegrationssyncconfluence)
  * [`carbon.integrations.syncDataSourceItems`](#carbonintegrationssyncdatasourceitems)
  * [`carbon.integrations.syncFiles`](#carbonintegrationssyncfiles)
  * [`carbon.integrations.syncGitHub`](#carbonintegrationssyncgithub)
  * [`carbon.integrations.syncGitbook`](#carbonintegrationssyncgitbook)
  * [`carbon.integrations.syncGmail`](#carbonintegrationssyncgmail)
  * [`carbon.integrations.syncOutlook`](#carbonintegrationssyncoutlook)
  * [`carbon.integrations.syncRepos`](#carbonintegrationssyncrepos)
  * [`carbon.integrations.syncRssFeed`](#carbonintegrationssyncrssfeed)
  * [`carbon.integrations.syncS3Files`](#carbonintegrationssyncs3files)
  * [`carbon.organizations.get`](#carbonorganizationsget)
  * [`carbon.organizations.update`](#carbonorganizationsupdate)
  * [`carbon.organizations.updateStats`](#carbonorganizationsupdatestats)
  * [`carbon.users.delete`](#carbonusersdelete)
  * [`carbon.users.get`](#carbonusersget)
  * [`carbon.users.toggleUserFeatures`](#carbonuserstoggleuserfeatures)
  * [`carbon.users.updateUsers`](#carbonusersupdateusers)
  * [`carbon.utilities.fetchUrls`](#carbonutilitiesfetchurls)
  * [`carbon.utilities.fetchYoutubeTranscripts`](#carbonutilitiesfetchyoutubetranscripts)
  * [`carbon.utilities.processSitemap`](#carbonutilitiesprocesssitemap)
  * [`carbon.utilities.scrapeSitemap`](#carbonutilitiesscrapesitemap)
  * [`carbon.utilities.scrapeWeb`](#carbonutilitiesscrapeweb)
  * [`carbon.utilities.searchUrls`](#carbonutilitiessearchurls)
  * [`carbon.webhooks.addUrl`](#carbonwebhooksaddurl)
  * [`carbon.webhooks.deleteUrl`](#carbonwebhooksdeleteurl)
  * [`carbon.webhooks.urls`](#carbonwebhooksurls)

<!-- tocstop -->

## Requirements<a id="requirements"></a>

Building the API client library requires:

1. Java 1.8+
2. Maven (3.8.3+)/Gradle (7.2+)

If you are adding this library to an Android Application or Library:

3. Android 8.0+ (API Level 26+)

## Installation<a id="installation"></a>

To install the API client library to your local Maven repository, simply execute:

```shell
mvn clean install
```

To deploy it to a remote Maven repository instead, configure the settings of the repository and execute:

```shell
mvn clean deploy
```

Refer to the [OSSRH Guide](http://central.sonatype.org/pages/ossrh-guide.html) for more information.

### Maven users<a id="maven-users"></a>

Add this dependency to your project's POM:

```xml
<dependency>
  <groupId>com.konfigthis.carbonai</groupId>
  <artifactId>carbonai-java-sdk</artifactId>
  <version>0.1.0</version>
  <scope>compile</scope>
</dependency>
```

### Gradle users<a id="gradle-users"></a>

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

### Android users<a id="android-users"></a>

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

### Others<a id="others"></a>

At first generate the JAR by executing:

```shell
mvn clean package
```

Then manually install the following JARs:

* `target/carbonai-java-sdk-0.1.0.jar`
* `target/lib/*.jar`

## Getting Started<a id="getting-started"></a>

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
## Reference<a id="reference"></a>


### `carbon.auth.getAccessToken`<a id="carbonauthgetaccesstoken"></a>

Get Access Token

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
TokenResponse result = client
        .auth
        .getAccessToken()
        .execute();
```

#### 🔄 Return<a id="🔄-return"></a>

[TokenResponse](./src/main/java/com/konfigthis/client/model/TokenResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/auth/v1/access_token` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.auth.getWhiteLabeling`<a id="carbonauthgetwhitelabeling"></a>

Returns whether or not the organization is white labeled and which integrations are white labeled

:param current_user: the current user
:param db: the database session
:return: a WhiteLabelingResponse

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
WhiteLabelingResponse result = client
        .auth
        .getWhiteLabeling()
        .execute();
```

#### 🔄 Return<a id="🔄-return"></a>

[WhiteLabelingResponse](./src/main/java/com/konfigthis/client/model/WhiteLabelingResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/auth/v1/white_labeling` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.dataSources.queryUserDataSources`<a id="carbondatasourcesqueryuserdatasources"></a>

User Data Sources

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
OrganizationUserDataSourceResponse result = client
        .dataSources
        .queryUserDataSources()
        .pagination(pagination)
        .orderBy(orderBy)
        .orderDir(orderDir)
        .filters(filters)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pagination: [`Pagination`](./src/main/java/com/konfigthis/client/model/Pagination.java)<a id="pagination-paginationsrcmainjavacomkonfigthisclientmodelpaginationjava"></a>

##### order_by:<a id="order_by"></a>

##### order_dir:<a id="order_dir"></a>

##### filters: [`OrganizationUserDataSourceFilters`](./src/main/java/com/konfigthis/client/model/OrganizationUserDataSourceFilters.java)<a id="filters-organizationuserdatasourcefilterssrcmainjavacomkonfigthisclientmodelorganizationuserdatasourcefiltersjava"></a>

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationUserDataSourceResponse](./src/main/java/com/konfigthis/client/model/OrganizationUserDataSourceResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/user_data_sources` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.dataSources.revokeAccessToken`<a id="carbondatasourcesrevokeaccesstoken"></a>

Revoke Access Token

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
GenericSuccessResponse result = client
        .dataSources
        .revokeAccessToken(dataSourceId)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data_source_id: `Integer`<a id="data_source_id-integer"></a>

#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./src/main/java/com/konfigthis/client/model/GenericSuccessResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/revoke_access_token` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.embeddings.getDocuments`<a id="carbonembeddingsgetdocuments"></a>

For pre-filtering documents, using `tags_v2` is preferred to using `tags` (which is now deprecated). If both `tags_v2`
and `tags` are specified, `tags` is ignored. `tags_v2` enables
building complex filters through the use of "AND", "OR", and negation logic. Take the below input as an example:
```json
{
    "OR": [
        {
            "key": "subject",
            "value": "holy-bible",
            "negate": false
        },
        {
            "key": "person-of-interest",
            "value": "jesus christ",
            "negate": false
        },
        {
            "key": "genre",
            "value": "religion",
            "negate": true
        }
        {
            "AND": [
                {
                    "key": "subject",
                    "value": "tao-te-ching",
                    "negate": false
                },
                {
                    "key": "author",
                    "value": "lao-tzu",
                    "negate": false
                }
            ]
        }
    ]
}
```
In this case, files will be filtered such that:
1. "subject" = "holy-bible" OR
2. "person-of-interest" = "jesus christ" OR
3. "genre" != "religion" OR
4. "subject" = "tao-te-ching" AND "author" = "lao-tzu"

Note that the top level of the query must be either an "OR" or "AND" array. Currently, nesting is limited to 3.
For tag blocks (those with "key", "value", and "negate" keys), the following typing rules apply:
1. "key" isn't optional and must be a `string`
2. "value" isn't optional and can be `any` or list[`any`]
3. "negate" is optional and must be `true` or `false`. If present and `true`, then the filter block is negated in
the resulting query. It is `false` by default.


When querying embeddings, you can optionally specify the `media_type` parameter in your request. By default (if
not set), it is equal to "TEXT". This means that the query will be performed over files that have
been parsed as text (for now, this covers all files except image files). If it is equal to "IMAGE",
the query will be performed over image files (for now, `.jpg` and `.png` files). You can think of this
field as an additional filter on top of any filters set in `file_ids` and


When `hybrid_search` is set to true, a combination of keyword search and semantic search are used to rank
and select candidate embeddings during information retrieval. By default, these search methods are weighted
equally during the ranking process. To adjust the weight (or "importance") of each search method, you can use
the `hybrid_search_tuning_parameters` property. The description for the different tuning parameters are:
- `weight_a`: weight to assign to semantic search
- `weight_b`: weight to assign to keyword search

You must ensure that `sum(weight_a, weight_b,..., weight_n)` for all *n* weights is equal to 1. The equality
has an error tolerance of 0.001 to account for possible floating point issues.

In order to use hybrid search for a customer across a set of documents, two flags need to be enabled:
1. Use the `/modify_user_configuration` endpoint to to enable `sparse_vectors` for the customer. The payload
body for this request is below:
```
{
  "configuration_key_name": "sparse_vectors",
  "value": {
    "enabled": true
  }
}
```
2. Make sure hybrid search is enabled for the documents across which you want to perform the search. For the
`/uploadfile` endpoint, this can be done by setting the following query parameter: `generate_sparse_vectors=true`


Carbon supports multiple models for use in generating embeddings for files. For images, we support Vertex AI's
multimodal model; for text, we support OpenAI's `text-embedding-ada-002` and Cohere's embed-multilingual-v3.0.
The model can be specified via the `embedding_model` parameter (in the POST body for `/embeddings`, and a query 
parameter in `/uploadfile`). If no model is supplied, the `text-embedding-ada-002` is used by default. When performing
embedding queries, embeddings from files that used the specified model will be considered in the query.
For example, if files A and B have embeddings generated with `OPENAI`, and files C and D have embeddings generated with
`COHERE_MULTILINGUAL_V3`, then by default, queries will only consider files A and B. If `COHERE_MULTILINGUAL_V3` is
specified as the `embedding_model` in `/embeddings`, then only files C and D will be considered. Make sure that
the set of all files you want considered for a query have embeddings generated via the same model. For now, **do not**
set `VERTEX_MULTIMODAL` as an `embedding_model`. This model is used automatically by Carbon when it detects an image file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
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
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### query: `String`<a id="query-string"></a>

Query for which to get related chunks and embeddings.

##### k: `Integer`<a id="k-integer"></a>

Number of related chunks to return.

##### tags: `Map<String, Object>`<a id="tags-map"></a>

A set of tags to limit the search to. Deprecated and may be removed in the future.

##### query_vector: List<`Double`><a id="query_vector-list"></a>

Optional query vector for which to get related chunks and embeddings. It must have been         generated by the same model used to generate the embeddings across which the search is being conducted. Cannot         provide both `query` and `query_vector`.

##### file_ids: List<`Integer`><a id="file_ids-list"></a>

Optional list of file IDs to limit the search to

##### parent_file_ids: List<`Integer`><a id="parent_file_ids-list"></a>

Optional list of parent file IDs to limit the search to. A parent file describes a file to which         another file belongs (e.g. a folder)

##### include_all_children: `Boolean`<a id="include_all_children-boolean"></a>

Flag to control whether or not to include all children of filtered files in the embedding search.

##### tags_v2: `Object`<a id="tags_v2-object"></a>

A set of tags to limit the search to. Use this instead of `tags`, which is deprecated.

##### include_tags: `Boolean`<a id="include_tags-boolean"></a>

Flag to control whether or not to include tags for each chunk in the response.

##### include_vectors: `Boolean`<a id="include_vectors-boolean"></a>

Flag to control whether or not to include embedding vectors in the response.

##### include_raw_file: `Boolean`<a id="include_raw_file-boolean"></a>

Flag to control whether or not to include a signed URL to the raw file containing each chunk         in the response.

##### hybrid_search: `Boolean`<a id="hybrid_search-boolean"></a>

Flag to control whether or not to perform hybrid search.

##### hybrid_search_tuning_parameters: [`HybridSearchTuningParamsNullable`](./src/main/java/com/konfigthis/client/model/HybridSearchTuningParamsNullable.java)<a id="hybrid_search_tuning_parameters-hybridsearchtuningparamsnullablesrcmainjavacomkonfigthisclientmodelhybridsearchtuningparamsnullablejava"></a>

##### media_type:<a id="media_type"></a>

##### embedding_model:<a id="embedding_model"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DocumentResponseList](./src/main/java/com/konfigthis/client/model/DocumentResponseList.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/embeddings` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.embeddings.getEmbeddingsAndChunks`<a id="carbonembeddingsgetembeddingsandchunks"></a>

Retrieve Embeddings And Content

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
EmbeddingsAndChunksResponse result = client
        .embeddings
        .getEmbeddingsAndChunks(filters)
        .pagination(pagination)
        .orderBy(orderBy)
        .orderDir(orderDir)
        .includeVectors(includeVectors)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filters: [`EmbeddingsAndChunksFilters`](./src/main/java/com/konfigthis/client/model/EmbeddingsAndChunksFilters.java)<a id="filters-embeddingsandchunksfilterssrcmainjavacomkonfigthisclientmodelembeddingsandchunksfiltersjava"></a>

##### pagination: [`Pagination`](./src/main/java/com/konfigthis/client/model/Pagination.java)<a id="pagination-paginationsrcmainjavacomkonfigthisclientmodelpaginationjava"></a>

##### order_by:<a id="order_by"></a>

##### order_dir:<a id="order_dir"></a>

##### include_vectors: `Boolean`<a id="include_vectors-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EmbeddingsAndChunksResponse](./src/main/java/com/konfigthis/client/model/EmbeddingsAndChunksResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/text_chunks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.embeddings.uploadChunksAndEmbeddings`<a id="carbonembeddingsuploadchunksandembeddings"></a>

Upload Chunks And Embeddings

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
GenericSuccessResponse result = client
        .embeddings
        .uploadChunksAndEmbeddings(embeddingModel, chunksAndEmbeddings)
        .overwriteExisting(overwriteExisting)
        .chunksOnly(chunksOnly)
        .customCredentials(customCredentials)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### embedding_model:<a id="embedding_model"></a>

##### chunks_and_embeddings: List<[`SingleChunksAndEmbeddingsUploadInput`](./src/main/java/com/konfigthis/client/model/SingleChunksAndEmbeddingsUploadInput.java)><a id="chunks_and_embeddings-list"></a>

##### overwrite_existing: `Boolean`<a id="overwrite_existing-boolean"></a>

##### chunks_only: `Boolean`<a id="chunks_only-boolean"></a>

##### custom_credentials: `Map<String, Object>`<a id="custom_credentials-map"></a>

#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./src/main/java/com/konfigthis/client/model/GenericSuccessResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/upload_chunks_and_embeddings` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.createUserFileTags`<a id="carbonfilescreateuserfiletags"></a>

A tag is a key-value pair that can be added to a file. This pair can then be used
for searches (e.g. embedding searches) in order to narrow down the scope of the search.
A file can have any number of tags. The following are reserved keys that cannot be used:
- db_embedding_id
- organization_id
- user_id
- organization_user_file_id

Carbon currently supports two data types for tag values - `string` and `list<string>`.
Keys can only be `string`. If values other than `string` and `list<string>` are used,
they're automatically converted to strings (e.g. 4 will become "4").

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
UserFile result = client
        .files
        .createUserFileTags(tags, organizationUserFileId)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tags: `Map<String, Object>`<a id="tags-map"></a>

##### organization_user_file_id: `Integer`<a id="organization_user_file_id-integer"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UserFile](./src/main/java/com/konfigthis/client/model/UserFile.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/create_user_file_tags` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.delete`<a id="carbonfilesdelete"></a>
![Deprecated](https://img.shields.io/badge/deprecated-yellow)

Delete File Endpoint

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
GenericSuccessResponse result = client
        .files
        .delete(fileId)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `Integer`<a id="fileid-integer"></a>

#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./src/main/java/com/konfigthis/client/model/GenericSuccessResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/deletefile/{file_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.deleteFileTags`<a id="carbonfilesdeletefiletags"></a>

Delete File Tags

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
UserFile result = client
        .files
        .deleteFileTags(tags, organizationUserFileId)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tags: List<`String`><a id="tags-list"></a>

##### organization_user_file_id: `Integer`<a id="organization_user_file_id-integer"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UserFile](./src/main/java/com/konfigthis/client/model/UserFile.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/delete_user_file_tags` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.deleteMany`<a id="carbonfilesdeletemany"></a>
![Deprecated](https://img.shields.io/badge/deprecated-yellow)

Delete Files Endpoint

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
GenericSuccessResponse result = client
        .files
        .deleteMany()
        .fileIds(fileIds)
        .syncStatuses(syncStatuses)
        .deleteNonSyncedOnly(deleteNonSyncedOnly)
        .sendWebhook(sendWebhook)
        .deleteChildFiles(deleteChildFiles)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### file_ids: List<`Integer`><a id="file_ids-list"></a>

##### sync_statuses: List><a id="sync_statuses-list"></a>

##### delete_non_synced_only: `Boolean`<a id="delete_non_synced_only-boolean"></a>

##### send_webhook: `Boolean`<a id="send_webhook-boolean"></a>

##### delete_child_files: `Boolean`<a id="delete_child_files-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./src/main/java/com/konfigthis/client/model/GenericSuccessResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/delete_files` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.deleteV2`<a id="carbonfilesdeletev2"></a>

Delete Files V2 Endpoint

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
GenericSuccessResponse result = client
        .files
        .deleteV2()
        .filters(filters)
        .sendWebhook(sendWebhook)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filters: [`OrganizationUserFilesToSyncFilters`](./src/main/java/com/konfigthis/client/model/OrganizationUserFilesToSyncFilters.java)<a id="filters-organizationuserfilestosyncfilterssrcmainjavacomkonfigthisclientmodelorganizationuserfilestosyncfiltersjava"></a>

##### send_webhook: `Boolean`<a id="send_webhook-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./src/main/java/com/konfigthis/client/model/GenericSuccessResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/delete_files_v2` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.getParsedFile`<a id="carbonfilesgetparsedfile"></a>
![Deprecated](https://img.shields.io/badge/deprecated-yellow)

This route is deprecated. Use `/user_files_v2` instead.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
PresignedURLResponse result = client
        .files
        .getParsedFile(fileId)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `Integer`<a id="fileid-integer"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PresignedURLResponse](./src/main/java/com/konfigthis/client/model/PresignedURLResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/parsed_file/{file_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.getRawFile`<a id="carbonfilesgetrawfile"></a>
![Deprecated](https://img.shields.io/badge/deprecated-yellow)

This route is deprecated. Use `/user_files_v2` instead.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
PresignedURLResponse result = client
        .files
        .getRawFile(fileId)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `Integer`<a id="fileid-integer"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PresignedURLResponse](./src/main/java/com/konfigthis/client/model/PresignedURLResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/raw_file/{file_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.queryUserFiles`<a id="carbonfilesqueryuserfiles"></a>

For pre-filtering documents, using `tags_v2` is preferred to using `tags` (which is now deprecated). If both `tags_v2`
and `tags` are specified, `tags` is ignored. `tags_v2` enables
building complex filters through the use of "AND", "OR", and negation logic. Take the below input as an example:
```json
{
    "OR": [
        {
            "key": "subject",
            "value": "holy-bible",
            "negate": false
        },
        {
            "key": "person-of-interest",
            "value": "jesus christ",
            "negate": false
        },
        {
            "key": "genre",
            "value": "religion",
            "negate": true
        }
        {
            "AND": [
                {
                    "key": "subject",
                    "value": "tao-te-ching",
                    "negate": false
                },
                {
                    "key": "author",
                    "value": "lao-tzu",
                    "negate": false
                }
            ]
        }
    ]
}
```
In this case, files will be filtered such that:
1. "subject" = "holy-bible" OR
2. "person-of-interest" = "jesus christ" OR
3. "genre" != "religion" OR
4. "subject" = "tao-te-ching" AND "author" = "lao-tzu"

Note that the top level of the query must be either an "OR" or "AND" array. Currently, nesting is limited to 3.
For tag blocks (those with "key", "value", and "negate" keys), the following typing rules apply:
1. "key" isn't optional and must be a `string`
2. "value" isn't optional and can be `any` or list[`any`]
3. "negate" is optional and must be `true` or `false`. If present and `true`, then the filter block is negated in
the resulting query. It is `false` by default.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
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
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pagination: [`Pagination`](./src/main/java/com/konfigthis/client/model/Pagination.java)<a id="pagination-paginationsrcmainjavacomkonfigthisclientmodelpaginationjava"></a>

##### order_by:<a id="order_by"></a>

##### order_dir:<a id="order_dir"></a>

##### filters: [`OrganizationUserFilesToSyncFilters`](./src/main/java/com/konfigthis/client/model/OrganizationUserFilesToSyncFilters.java)<a id="filters-organizationuserfilestosyncfilterssrcmainjavacomkonfigthisclientmodelorganizationuserfilestosyncfiltersjava"></a>

##### include_raw_file: `Boolean`<a id="include_raw_file-boolean"></a>

##### include_parsed_text_file: `Boolean`<a id="include_parsed_text_file-boolean"></a>

##### include_additional_files: `Boolean`<a id="include_additional_files-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UserFilesV2](./src/main/java/com/konfigthis/client/model/UserFilesV2.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/user_files_v2` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.queryUserFilesDeprecated`<a id="carbonfilesqueryuserfilesdeprecated"></a>
![Deprecated](https://img.shields.io/badge/deprecated-yellow)

This route is deprecated. Use `/user_files_v2` instead.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
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
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pagination: [`Pagination`](./src/main/java/com/konfigthis/client/model/Pagination.java)<a id="pagination-paginationsrcmainjavacomkonfigthisclientmodelpaginationjava"></a>

##### order_by:<a id="order_by"></a>

##### order_dir:<a id="order_dir"></a>

##### filters: [`OrganizationUserFilesToSyncFilters`](./src/main/java/com/konfigthis/client/model/OrganizationUserFilesToSyncFilters.java)<a id="filters-organizationuserfilestosyncfilterssrcmainjavacomkonfigthisclientmodelorganizationuserfilestosyncfiltersjava"></a>

##### include_raw_file: `Boolean`<a id="include_raw_file-boolean"></a>

##### include_parsed_text_file: `Boolean`<a id="include_parsed_text_file-boolean"></a>

##### include_additional_files: `Boolean`<a id="include_additional_files-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UserFile](./src/main/java/com/konfigthis/client/model/UserFile.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/user_files` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.resync`<a id="carbonfilesresync"></a>

Resync File

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
UserFile result = client
        .files
        .resync(fileId)
        .chunkSize(chunkSize)
        .chunkOverlap(chunkOverlap)
        .forceEmbeddingGeneration(forceEmbeddingGeneration)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### file_id: `Integer`<a id="file_id-integer"></a>

##### chunk_size: `Integer`<a id="chunk_size-integer"></a>

##### chunk_overlap: `Integer`<a id="chunk_overlap-integer"></a>

##### force_embedding_generation: `Boolean`<a id="force_embedding_generation-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UserFile](./src/main/java/com/konfigthis/client/model/UserFile.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/resync_file` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.upload`<a id="carbonfilesupload"></a>

This endpoint is used to directly upload local files to Carbon. The `POST` request should be a multipart form request.
Note that the `set_page_as_boundary` query parameter is applicable only to PDFs for now. When this value is set,
PDF chunks are at most one page long. Additional information can be retrieved for each chunk, however, namely the coordinates
of the bounding box around the chunk (this can be used for things like text highlighting). Following is a description
of all possible query parameters:
- `chunk_size`: the chunk size (in tokens) applied when splitting the document
- `chunk_overlap`: the chunk overlap (in tokens) applied when splitting the document
- `skip_embedding_generation`: whether or not to skip the generation of chunks and embeddings
- `set_page_as_boundary`: described above
- `embedding_model`: the model used to generate embeddings for the document chunks
- `use_ocr`: whether or not to use OCR as a preprocessing step prior to generating chunks (only valid for PDFs currently)
- `generate_sparse_vectors`: whether or not to generate sparse vectors for the file. Required for hybrid search.
- `prepend_filename_to_chunks`: whether or not to prepend the filename to the chunk text


Carbon supports multiple models for use in generating embeddings for files. For images, we support Vertex AI's
multimodal model; for text, we support OpenAI's `text-embedding-ada-002` and Cohere's embed-multilingual-v3.0.
The model can be specified via the `embedding_model` parameter (in the POST body for `/embeddings`, and a query 
parameter in `/uploadfile`). If no model is supplied, the `text-embedding-ada-002` is used by default. When performing
embedding queries, embeddings from files that used the specified model will be considered in the query.
For example, if files A and B have embeddings generated with `OPENAI`, and files C and D have embeddings generated with
`COHERE_MULTILINGUAL_V3`, then by default, queries will only consider files A and B. If `COHERE_MULTILINGUAL_V3` is
specified as the `embedding_model` in `/embeddings`, then only files C and D will be considered. Make sure that
the set of all files you want considered for a query have embeddings generated via the same model. For now, **do not**
set `VERTEX_MULTIMODAL` as an `embedding_model`. This model is used automatically by Carbon when it detects an image file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
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
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### _file: `File`<a id="_file-file"></a>

##### chunkSize: `Integer`<a id="chunksize-integer"></a>

Chunk size in tiktoken tokens to be used when processing file.

##### chunkOverlap: `Integer`<a id="chunkoverlap-integer"></a>

Chunk overlap in tiktoken tokens to be used when processing file.

##### skipEmbeddingGeneration: `Boolean`<a id="skipembeddinggeneration-boolean"></a>

Flag to control whether or not embeddings should be generated and stored             when processing file.

##### setPageAsBoundary: `Boolean`<a id="setpageasboundary-boolean"></a>

Flag to control whether or not to set the a page's worth of content as the maximum             amount of content that can appear in a chunk. Only valid for PDFs. See description route description for             more information.

##### embeddingModel:<a id="embeddingmodel"></a>

Embedding model that will be used to embed file chunks.

##### useOcr: `Boolean`<a id="useocr-boolean"></a>

Whether or not to use OCR when processing files. Only valid for PDFs. Useful for documents with             tables, images, and/or scanned text.

##### generateSparseVectors: `Boolean`<a id="generatesparsevectors-boolean"></a>

Whether or not to generate sparse vectors for the file. This is *required* for the file to be a             candidate for hybrid search.

##### prependFilenameToChunks: `Boolean`<a id="prependfilenametochunks-boolean"></a>

Whether or not to prepend the file's name to chunks.

##### maxItemsPerChunk: `Integer`<a id="maxitemsperchunk-integer"></a>

Number of objects per chunk. For csv, tsv, xlsx, and json files only.

##### parsePdfTablesWithOcr: `Boolean`<a id="parsepdftableswithocr-boolean"></a>

Whether to use rich table parsing when `use_ocr` is enabled.

##### detectAudioLanguage: `Boolean`<a id="detectaudiolanguage-boolean"></a>

Whether to automatically detect the language of the uploaded audio file.

##### mediaType:<a id="mediatype"></a>

The media type of the file. If not provided, it will be inferred from the file extension.

#### 🔄 Return<a id="🔄-return"></a>

[UserFile](./src/main/java/com/konfigthis/client/model/UserFile.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/uploadfile` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.uploadFromUrl`<a id="carbonfilesuploadfromurl"></a>

Create Upload File From Url

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
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
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `String`<a id="url-string"></a>

##### file_name: `String`<a id="file_name-string"></a>

##### chunk_size: `Integer`<a id="chunk_size-integer"></a>

##### chunk_overlap: `Integer`<a id="chunk_overlap-integer"></a>

##### skip_embedding_generation: `Boolean`<a id="skip_embedding_generation-boolean"></a>

##### set_page_as_boundary: `Boolean`<a id="set_page_as_boundary-boolean"></a>

##### embedding_model:<a id="embedding_model"></a>

##### generate_sparse_vectors: `Boolean`<a id="generate_sparse_vectors-boolean"></a>

##### use_textract: `Boolean`<a id="use_textract-boolean"></a>

##### prepend_filename_to_chunks: `Boolean`<a id="prepend_filename_to_chunks-boolean"></a>

##### max_items_per_chunk: `Integer`<a id="max_items_per_chunk-integer"></a>

Number of objects per chunk. For csv, tsv, xlsx, and json files only.

##### parse_pdf_tables_with_ocr: `Boolean`<a id="parse_pdf_tables_with_ocr-boolean"></a>

##### detect_audio_language: `Boolean`<a id="detect_audio_language-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UserFile](./src/main/java/com/konfigthis/client/model/UserFile.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/upload_file_from_url` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.uploadText`<a id="carbonfilesuploadtext"></a>

Carbon supports multiple models for use in generating embeddings for files. For images, we support Vertex AI's
multimodal model; for text, we support OpenAI's `text-embedding-ada-002` and Cohere's embed-multilingual-v3.0.
The model can be specified via the `embedding_model` parameter (in the POST body for `/embeddings`, and a query 
parameter in `/uploadfile`). If no model is supplied, the `text-embedding-ada-002` is used by default. When performing
embedding queries, embeddings from files that used the specified model will be considered in the query.
For example, if files A and B have embeddings generated with `OPENAI`, and files C and D have embeddings generated with
`COHERE_MULTILINGUAL_V3`, then by default, queries will only consider files A and B. If `COHERE_MULTILINGUAL_V3` is
specified as the `embedding_model` in `/embeddings`, then only files C and D will be considered. Make sure that
the set of all files you want considered for a query have embeddings generated via the same model. For now, **do not**
set `VERTEX_MULTIMODAL` as an `embedding_model`. This model is used automatically by Carbon when it detects an image file.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
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
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contents: `String`<a id="contents-string"></a>

##### name: `String`<a id="name-string"></a>

##### chunk_size: `Integer`<a id="chunk_size-integer"></a>

##### chunk_overlap: `Integer`<a id="chunk_overlap-integer"></a>

##### skip_embedding_generation: `Boolean`<a id="skip_embedding_generation-boolean"></a>

##### overwrite_file_id: `Integer`<a id="overwrite_file_id-integer"></a>

##### embedding_model:<a id="embedding_model"></a>

##### generate_sparse_vectors: `Boolean`<a id="generate_sparse_vectors-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UserFile](./src/main/java/com/konfigthis/client/model/UserFile.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/upload_text` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.health.check`<a id="carbonhealthcheck"></a>

Health

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
Object result = client
        .health
        .check()
        .execute();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.connectDataSource`<a id="carbonintegrationsconnectdatasource"></a>

Connect Data Source

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
ConnectDataSourceResponse result = client
        .integrations
        .connectDataSource(authentication)
        .syncOptions(syncOptions)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### authentication: [`OANSCZGF`](./src/main/java/com/konfigthis/client/model/OANSCZGF.java)<a id="authentication-oansczgfsrcmainjavacomkonfigthisclientmodeloansczgfjava"></a>

##### sync_options: [`SyncOptions`](./src/main/java/com/konfigthis/client/model/SyncOptions.java)<a id="sync_options-syncoptionssrcmainjavacomkonfigthisclientmodelsyncoptionsjava"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ConnectDataSourceResponse](./src/main/java/com/konfigthis/client/model/ConnectDataSourceResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/connect` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.connectFreshdesk`<a id="carbonintegrationsconnectfreshdesk"></a>

Refer this article to obtain an API key https://support.freshdesk.com/en/support/solutions/articles/215517.
Make sure that your API key has the permission to read solutions from your account and you are on a <b>paid</b> plan.
Once you have an API key, you can make a request to this endpoint along with your freshdesk domain. This will 
trigger an automatic sync of the articles in your "solutions" tab. Additional parameters below can be used to associate 
data with the synced articles or modify the sync behavior.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
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
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### domain: `String`<a id="domain-string"></a>

##### api_key: `String`<a id="api_key-string"></a>

##### tags: `Object`<a id="tags-object"></a>

##### chunk_size: `Integer`<a id="chunk_size-integer"></a>

##### chunk_overlap: `Integer`<a id="chunk_overlap-integer"></a>

##### skip_embedding_generation: `Boolean`<a id="skip_embedding_generation-boolean"></a>

##### embedding_model:<a id="embedding_model"></a>

##### generate_sparse_vectors: `Boolean`<a id="generate_sparse_vectors-boolean"></a>

##### prepend_filename_to_chunks: `Boolean`<a id="prepend_filename_to_chunks-boolean"></a>

##### sync_files_on_connection: `Boolean`<a id="sync_files_on_connection-boolean"></a>

##### request_id: `String`<a id="request_id-string"></a>

##### sync_source_items: `Boolean`<a id="sync_source_items-boolean"></a>

Enabling this flag will fetch all available content from the source to be listed via list items endpoint

##### file_sync_config: [`FileSyncConfigNullable`](./src/main/java/com/konfigthis/client/model/FileSyncConfigNullable.java)<a id="file_sync_config-filesyncconfignullablesrcmainjavacomkonfigthisclientmodelfilesyncconfignullablejava"></a>

#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./src/main/java/com/konfigthis/client/model/GenericSuccessResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/freshdesk` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.connectGitbook`<a id="carbonintegrationsconnectgitbook"></a>

You will need an access token to connect your Gitbook account. Note that the permissions will be defined by the user 
generating access token so make sure you have the permission to access spaces you will be syncing. 
Refer this article for more details https://developer.gitbook.com/gitbook-api/authentication. Additionally, you
need to specify the name of organization you will be syncing data from.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
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
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### organization: `String`<a id="organization-string"></a>

##### access_token: `String`<a id="access_token-string"></a>

##### tags: `Object`<a id="tags-object"></a>

##### chunk_size: `Integer`<a id="chunk_size-integer"></a>

##### chunk_overlap: `Integer`<a id="chunk_overlap-integer"></a>

##### skip_embedding_generation: `Boolean`<a id="skip_embedding_generation-boolean"></a>

##### embedding_model:<a id="embedding_model"></a>

##### generate_sparse_vectors: `Boolean`<a id="generate_sparse_vectors-boolean"></a>

##### prepend_filename_to_chunks: `Boolean`<a id="prepend_filename_to_chunks-boolean"></a>

##### sync_files_on_connection: `Boolean`<a id="sync_files_on_connection-boolean"></a>

##### request_id: `String`<a id="request_id-string"></a>

##### sync_source_items: `Boolean`<a id="sync_source_items-boolean"></a>

Enabling this flag will fetch all available content from the source to be listed via list items endpoint

#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./src/main/java/com/konfigthis/client/model/GenericSuccessResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/gitbook` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.createAwsIamUser`<a id="carbonintegrationscreateawsiamuser"></a>

Create a new IAM user with permissions to:
<ol>
<li>List all buckets.</li>
<li>Read from the specific buckets and objects to sync with Carbon. Ensure any future buckets or objects carry 
the same permissions.</li>
</ol>
Once created, generate an access key for this user and share the credentials with us. We recommend testing this key beforehand.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
OrganizationUserDataSourceAPI result = client
        .integrations
        .createAwsIamUser(accessKey, accessKeySecret)
        .syncSourceItems(syncSourceItems)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### access_key: `String`<a id="access_key-string"></a>

##### access_key_secret: `String`<a id="access_key_secret-string"></a>

##### sync_source_items: `Boolean`<a id="sync_source_items-boolean"></a>

Enabling this flag will fetch all available content from the source to be listed via list items endpoint

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationUserDataSourceAPI](./src/main/java/com/konfigthis/client/model/OrganizationUserDataSourceAPI.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/s3` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.getOauthUrl`<a id="carbonintegrationsgetoauthurl"></a>

This endpoint can be used to generate the following URLs
- An OAuth URL for OAuth based connectors
- A file syncing URL which skips the OAuth flow if the user already has a valid access token and takes them to the
success state.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
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
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### service:<a id="service"></a>

##### tags: `Object`<a id="tags-object"></a>

##### scope: `String`<a id="scope-string"></a>

##### chunk_size: `Integer`<a id="chunk_size-integer"></a>

##### chunk_overlap: `Integer`<a id="chunk_overlap-integer"></a>

##### skip_embedding_generation: `Boolean`<a id="skip_embedding_generation-boolean"></a>

##### embedding_model:<a id="embedding_model"></a>

##### zendesk_subdomain: `String`<a id="zendesk_subdomain-string"></a>

##### microsoft_tenant: `String`<a id="microsoft_tenant-string"></a>

##### sharepoint_site_name: `String`<a id="sharepoint_site_name-string"></a>

##### confluence_subdomain: `String`<a id="confluence_subdomain-string"></a>

##### generate_sparse_vectors: `Boolean`<a id="generate_sparse_vectors-boolean"></a>

##### prepend_filename_to_chunks: `Boolean`<a id="prepend_filename_to_chunks-boolean"></a>

##### max_items_per_chunk: `Integer`<a id="max_items_per_chunk-integer"></a>

Number of objects per chunk. For csv, tsv, xlsx, and json files only.

##### salesforce_domain: `String`<a id="salesforce_domain-string"></a>

##### sync_files_on_connection: `Boolean`<a id="sync_files_on_connection-boolean"></a>

Used to specify whether Carbon should attempt to sync all your files automatically when authorization         is complete. This is only supported for a subset of connectors and will be ignored for the rest. Supported         connectors: Intercom, Zendesk, Gitbook, Confluence, Salesforce, Freshdesk

##### set_page_as_boundary: `Boolean`<a id="set_page_as_boundary-boolean"></a>

##### data_source_id: `Integer`<a id="data_source_id-integer"></a>

Used to specify a data source to sync from if you have multiple connected. It can be skipped if          you only have one data source of that type connected or are connecting a new account.

##### connecting_new_account: `Boolean`<a id="connecting_new_account-boolean"></a>

Used to connect a new data source. If not specified, we will attempt to create a sync URL         for an existing data source based on type and ID.

##### request_id: `String`<a id="request_id-string"></a>

This request id will be added to all files that get synced using the generated OAuth URL

##### use_ocr: `Boolean`<a id="use_ocr-boolean"></a>

Enable OCR for files that support it. Supported formats: pdf

##### parse_pdf_tables_with_ocr: `Boolean`<a id="parse_pdf_tables_with_ocr-boolean"></a>

##### enable_file_picker: `Boolean`<a id="enable_file_picker-boolean"></a>

Enable integration's file picker for sources that support it. Supported sources: DROPBOX, SHAREPOINT, ONEDRIVE, BOX, GOOGLE_DRIVE

##### sync_source_items: `Boolean`<a id="sync_source_items-boolean"></a>

Enabling this flag will fetch all available content from the source to be listed via list items endpoint

##### incremental_sync: `Boolean`<a id="incremental_sync-boolean"></a>

Only sync files if they have not already been synced or if the embedding properties have changed.         This flag is currently supported by ONEDRIVE, GOOGLE_DRIVE, BOX, DROPBOX. It will be ignored for other data sources.

##### file_sync_config: [`FileSyncConfigNullable`](./src/main/java/com/konfigthis/client/model/FileSyncConfigNullable.java)<a id="file_sync_config-filesyncconfignullablesrcmainjavacomkonfigthisclientmodelfilesyncconfignullablejava"></a>

#### 🔄 Return<a id="🔄-return"></a>

[OuthURLResponse](./src/main/java/com/konfigthis/client/model/OuthURLResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/oauth_url` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.listConfluencePages`<a id="carbonintegrationslistconfluencepages"></a>

To begin listing a user's Confluence pages, at least a `data_source_id` of a connected
Confluence account must be specified. This base request returns a list of root pages for
every space the user has access to in a Confluence instance. To traverse further down
the user's page directory, additional requests to this endpoint can be made with the same
`data_source_id` and with `parent_id` set to the id of page from a previous request. For
convenience, the `has_children` property in each directory item in the response list will
flag which pages will return non-empty lists of pages when set as the `parent_id`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
ListResponse result = client
        .integrations
        .listConfluencePages(dataSourceId)
        .parentId(parentId)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data_source_id: `Integer`<a id="data_source_id-integer"></a>

##### parent_id: `String`<a id="parent_id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ListResponse](./src/main/java/com/konfigthis/client/model/ListResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/confluence/list` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.listDataSourceItems`<a id="carbonintegrationslistdatasourceitems"></a>

List Data Source Items

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
ListDataSourceItemsResponse result = client
        .integrations
        .listDataSourceItems(dataSourceId)
        .parentId(parentId)
        .filters(filters)
        .pagination(pagination)
        .orderBy(orderBy)
        .orderDir(orderDir)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data_source_id: `Integer`<a id="data_source_id-integer"></a>

##### parent_id: `String`<a id="parent_id-string"></a>

##### filters: [`ListItemsFiltersNullable`](./src/main/java/com/konfigthis/client/model/ListItemsFiltersNullable.java)<a id="filters-listitemsfiltersnullablesrcmainjavacomkonfigthisclientmodellistitemsfiltersnullablejava"></a>

##### pagination: [`Pagination`](./src/main/java/com/konfigthis/client/model/Pagination.java)<a id="pagination-paginationsrcmainjavacomkonfigthisclientmodelpaginationjava"></a>

##### order_by:<a id="order_by"></a>

##### order_dir:<a id="order_dir"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ListDataSourceItemsResponse](./src/main/java/com/konfigthis/client/model/ListDataSourceItemsResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/items/list` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.listFolders`<a id="carbonintegrationslistfolders"></a>

After connecting your Outlook account, you can use this endpoint to list all of your folders on outlook. This includes 
both system folders like "inbox" and user created folders.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
Object result = client
        .integrations
        .listFolders()
        .dataSourceId(dataSourceId)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dataSourceId: `Integer`<a id="datasourceid-integer"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/outlook/user_folders` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.listGitbookSpaces`<a id="carbonintegrationslistgitbookspaces"></a>

After connecting your Gitbook account, you can use this endpoint to list all of your spaces under current organization.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
Object result = client
        .integrations
        .listGitbookSpaces(dataSourceId)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dataSourceId: `Integer`<a id="datasourceid-integer"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/gitbook/spaces` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.listLabels`<a id="carbonintegrationslistlabels"></a>

After connecting your Gmail account, you can use this endpoint to list all of your labels. User created labels
will have the type "user" and Gmail's default labels will have the type "system"

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
Object result = client
        .integrations
        .listLabels()
        .dataSourceId(dataSourceId)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dataSourceId: `Integer`<a id="datasourceid-integer"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/gmail/user_labels` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.listOutlookCategories`<a id="carbonintegrationslistoutlookcategories"></a>

After connecting your Outlook account, you can use this endpoint to list all of your categories on outlook. We currently
support listing up to 250 categories.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
Object result = client
        .integrations
        .listOutlookCategories()
        .dataSourceId(dataSourceId)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dataSourceId: `Integer`<a id="datasourceid-integer"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/outlook/user_categories` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.listRepos`<a id="carbonintegrationslistrepos"></a>

Once you have connected your GitHub account, you can use this endpoint to list the 
    repositories your account has access to. You can use a data source ID or username to fetch from a specific account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
Object result = client
        .integrations
        .listRepos()
        .perPage(perPage)
        .page(page)
        .dataSourceId(dataSourceId)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### perPage: `Integer`<a id="perpage-integer"></a>

##### page: `Integer`<a id="page-integer"></a>

##### dataSourceId: `Integer`<a id="datasourceid-integer"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/github/repos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.syncConfluence`<a id="carbonintegrationssyncconfluence"></a>

After listing pages in a user's Confluence account, the set of selected page `ids` and the
connected account's `data_source_id` can be passed into this endpoint to sync them into
Carbon. Additional parameters listed below can be used to associate data to the selected
pages or alter the behavior of the sync.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
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
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data_source_id: `Integer`<a id="data_source_id-integer"></a>

##### ids: List<`Object`<a id="ids-listobject"></a>
                `Object`>

##### tags: `Object`<a id="tags-object"></a>

##### chunk_size: `Integer`<a id="chunk_size-integer"></a>

##### chunk_overlap: `Integer`<a id="chunk_overlap-integer"></a>

##### skip_embedding_generation: `Boolean`<a id="skip_embedding_generation-boolean"></a>

##### embedding_model:<a id="embedding_model"></a>

##### generate_sparse_vectors: `Boolean`<a id="generate_sparse_vectors-boolean"></a>

##### prepend_filename_to_chunks: `Boolean`<a id="prepend_filename_to_chunks-boolean"></a>

##### max_items_per_chunk: `Integer`<a id="max_items_per_chunk-integer"></a>

Number of objects per chunk. For csv, tsv, xlsx, and json files only.

##### set_page_as_boundary: `Boolean`<a id="set_page_as_boundary-boolean"></a>

##### request_id: `String`<a id="request_id-string"></a>

##### use_ocr: `Boolean`<a id="use_ocr-boolean"></a>

##### parse_pdf_tables_with_ocr: `Boolean`<a id="parse_pdf_tables_with_ocr-boolean"></a>

##### incremental_sync: `Boolean`<a id="incremental_sync-boolean"></a>

Only sync files if they have not already been synced or if the embedding properties have changed.         This flag is currently supported by ONEDRIVE, GOOGLE_DRIVE, BOX, DROPBOX. It will be ignored for other data sources.

##### file_sync_config: [`FileSyncConfigNullable`](./src/main/java/com/konfigthis/client/model/FileSyncConfigNullable.java)<a id="file_sync_config-filesyncconfignullablesrcmainjavacomkonfigthisclientmodelfilesyncconfignullablejava"></a>

#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./src/main/java/com/konfigthis/client/model/GenericSuccessResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/confluence/sync` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.syncDataSourceItems`<a id="carbonintegrationssyncdatasourceitems"></a>

Sync Data Source Items

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
OrganizationUserDataSourceAPI result = client
        .integrations
        .syncDataSourceItems(dataSourceId)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data_source_id: `Integer`<a id="data_source_id-integer"></a>

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationUserDataSourceAPI](./src/main/java/com/konfigthis/client/model/OrganizationUserDataSourceAPI.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/items/sync` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.syncFiles`<a id="carbonintegrationssyncfiles"></a>

After listing files and folders via /integrations/items/sync and integrations/items/list, use the selected items' external ids 
as the ids in this endpoint to sync them into Carbon. Sharepoint items take an additional parameter root_id, which identifies
the drive the file or folder is in and is stored in root_external_id. That additional paramter is optional and excluding it will
tell the sync to assume the item is stored in the default Documents drive.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
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
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data_source_id: `Integer`<a id="data_source_id-integer"></a>

##### ids: List<`Object`<a id="ids-listobject"></a>
                `Object`>

##### tags: `Object`<a id="tags-object"></a>

##### chunk_size: `Integer`<a id="chunk_size-integer"></a>

##### chunk_overlap: `Integer`<a id="chunk_overlap-integer"></a>

##### skip_embedding_generation: `Boolean`<a id="skip_embedding_generation-boolean"></a>

##### embedding_model:<a id="embedding_model"></a>

##### generate_sparse_vectors: `Boolean`<a id="generate_sparse_vectors-boolean"></a>

##### prepend_filename_to_chunks: `Boolean`<a id="prepend_filename_to_chunks-boolean"></a>

##### max_items_per_chunk: `Integer`<a id="max_items_per_chunk-integer"></a>

Number of objects per chunk. For csv, tsv, xlsx, and json files only.

##### set_page_as_boundary: `Boolean`<a id="set_page_as_boundary-boolean"></a>

##### request_id: `String`<a id="request_id-string"></a>

##### use_ocr: `Boolean`<a id="use_ocr-boolean"></a>

##### parse_pdf_tables_with_ocr: `Boolean`<a id="parse_pdf_tables_with_ocr-boolean"></a>

##### incremental_sync: `Boolean`<a id="incremental_sync-boolean"></a>

Only sync files if they have not already been synced or if the embedding properties have changed.         This flag is currently supported by ONEDRIVE, GOOGLE_DRIVE, BOX, DROPBOX. It will be ignored for other data sources.

##### file_sync_config: [`FileSyncConfigNullable`](./src/main/java/com/konfigthis/client/model/FileSyncConfigNullable.java)<a id="file_sync_config-filesyncconfignullablesrcmainjavacomkonfigthisclientmodelfilesyncconfignullablejava"></a>

#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./src/main/java/com/konfigthis/client/model/GenericSuccessResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/files/sync` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.syncGitHub`<a id="carbonintegrationssyncgithub"></a>

Refer this article to obtain an access token https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens.
Make sure that your access token has the permission to read content from your desired repos. Note that if your access token
expires you will need to manually update it through this endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
GenericSuccessResponse result = client
        .integrations
        .syncGitHub(username, accessToken)
        .syncSourceItems(syncSourceItems)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### username: `String`<a id="username-string"></a>

##### access_token: `String`<a id="access_token-string"></a>

##### sync_source_items: `Boolean`<a id="sync_source_items-boolean"></a>

Enabling this flag will fetch all available content from the source to be listed via list items endpoint

#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./src/main/java/com/konfigthis/client/model/GenericSuccessResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/github` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.syncGitbook`<a id="carbonintegrationssyncgitbook"></a>

You can sync upto 20 Gitbook spaces at a time using this endpoint. Additional parameters below can be used to associate 
data with the synced pages or modify the sync behavior.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
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
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### space_ids: List<`String`><a id="space_ids-list"></a>

##### data_source_id: `Integer`<a id="data_source_id-integer"></a>

##### tags: `Object`<a id="tags-object"></a>

##### chunk_size: `Integer`<a id="chunk_size-integer"></a>

##### chunk_overlap: `Integer`<a id="chunk_overlap-integer"></a>

##### skip_embedding_generation: `Boolean`<a id="skip_embedding_generation-boolean"></a>

##### embedding_model:<a id="embedding_model"></a>

##### generate_sparse_vectors: `Boolean`<a id="generate_sparse_vectors-boolean"></a>

##### prepend_filename_to_chunks: `Boolean`<a id="prepend_filename_to_chunks-boolean"></a>

##### request_id: `String`<a id="request_id-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/gitbook/sync` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.syncGmail`<a id="carbonintegrationssyncgmail"></a>

Once you have successfully connected your gmail account, you can choose which emails to sync with us
using the filters parameter. Filters is a JSON object with key value pairs. It also supports AND and OR operations.
For now, we support a limited set of keys listed below.

<b>label</b>: Inbuilt Gmail labels, for example "Important" or a custom label you created.  
<b>after</b> or <b>before</b>: A date in YYYY/mm/dd format (example 2023/12/31). Gets emails after/before a certain date.
You can also use them in combination to get emails from a certain period.  
<b>is</b>: Can have the following values - starred, important, snoozed, and unread  

Using keys or values outside of the specified values can lead to unexpected behaviour.

An example of a basic query with filters can be
```json
{
    "filters": {
            "key": "label",
            "value": "Test"
        }
}
```
Which will list all emails that have the label "Test".

You can use AND and OR operation in the following way:
```json
{
    "filters": {
        "AND": [
            {
                "key": "after",
                "value": "2024/01/07"
            },
            {
                "OR": [
                    {
                        "key": "label",
                        "value": "Personal"
                    },
                    {
                        "key": "is",
                        "value": "starred"
                    }
                ]
            }
        ]
    }
}
```
This will return emails after 7th of Jan that are either starred or have the label "Personal". 
Note that this is the highest level of nesting we support, i.e. you can't add more AND/OR filters within the OR filter
in the above example.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
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
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filters: `Object`<a id="filters-object"></a>

##### tags: `Object`<a id="tags-object"></a>

##### chunk_size: `Integer`<a id="chunk_size-integer"></a>

##### chunk_overlap: `Integer`<a id="chunk_overlap-integer"></a>

##### skip_embedding_generation: `Boolean`<a id="skip_embedding_generation-boolean"></a>

##### embedding_model:<a id="embedding_model"></a>

##### generate_sparse_vectors: `Boolean`<a id="generate_sparse_vectors-boolean"></a>

##### prepend_filename_to_chunks: `Boolean`<a id="prepend_filename_to_chunks-boolean"></a>

##### data_source_id: `Integer`<a id="data_source_id-integer"></a>

##### request_id: `String`<a id="request_id-string"></a>

##### sync_attachments: `Boolean`<a id="sync_attachments-boolean"></a>

##### file_sync_config: [`FileSyncConfigNullable`](./src/main/java/com/konfigthis/client/model/FileSyncConfigNullable.java)<a id="file_sync_config-filesyncconfignullablesrcmainjavacomkonfigthisclientmodelfilesyncconfignullablejava"></a>

##### incremental_sync: `Boolean`<a id="incremental_sync-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./src/main/java/com/konfigthis/client/model/GenericSuccessResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/gmail/sync` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.syncOutlook`<a id="carbonintegrationssyncoutlook"></a>

Once you have successfully connected your Outlook account, you can choose which emails to sync with us
using the filters and folder parameter. "folder" should be the folder you want to sync from Outlook. By default
we get messages from your inbox folder.  
Filters is a JSON object with key value pairs. It also supports AND and OR operations.
For now, we support a limited set of keys listed below.

<b>category</b>: Custom categories that you created in Outlook.  
<b>after</b> or <b>before</b>: A date in YYYY/mm/dd format (example 2023/12/31). Gets emails after/before a certain date. You can also use them in combination to get emails from a certain period.    
<b>is</b>: Can have the following values: flagged   

An example of a basic query with filters can be
```json
{
    "filters": {
            "key": "category",
            "value": "Test"
        }
}
```
Which will list all emails that have the category "Test".  

Specifying a custom folder in the same query
```json
{
    "folder": "Folder Name",
    "filters": {
            "key": "category",
            "value": "Test"
        }
}
```

You can use AND and OR operation in the following way:
```json
{
    "filters": {
        "AND": [
            {
                "key": "after",
                "value": "2024/01/07"
            },
            {
                "OR": [
                    {
                        "key": "category",
                        "value": "Personal"
                    },
                    {
                        "key": "category",
                        "value": "Test"
                    },
                ]
            }
        ]
    }
}
```
This will return emails after 7th of Jan that have either Personal or Test as category. 
Note that this is the highest level of nesting we support, i.e. you can't add more AND/OR filters within the OR filter
in the above example.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
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
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filters: `Object`<a id="filters-object"></a>

##### tags: `Object`<a id="tags-object"></a>

##### folder: `String`<a id="folder-string"></a>

##### chunk_size: `Integer`<a id="chunk_size-integer"></a>

##### chunk_overlap: `Integer`<a id="chunk_overlap-integer"></a>

##### skip_embedding_generation: `Boolean`<a id="skip_embedding_generation-boolean"></a>

##### embedding_model:<a id="embedding_model"></a>

##### generate_sparse_vectors: `Boolean`<a id="generate_sparse_vectors-boolean"></a>

##### prepend_filename_to_chunks: `Boolean`<a id="prepend_filename_to_chunks-boolean"></a>

##### data_source_id: `Integer`<a id="data_source_id-integer"></a>

##### request_id: `String`<a id="request_id-string"></a>

##### sync_attachments: `Boolean`<a id="sync_attachments-boolean"></a>

##### file_sync_config: [`FileSyncConfigNullable`](./src/main/java/com/konfigthis/client/model/FileSyncConfigNullable.java)<a id="file_sync_config-filesyncconfignullablesrcmainjavacomkonfigthisclientmodelfilesyncconfignullablejava"></a>

##### incremental_sync: `Boolean`<a id="incremental_sync-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./src/main/java/com/konfigthis/client/model/GenericSuccessResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/outlook/sync` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.syncRepos`<a id="carbonintegrationssyncrepos"></a>

You can retreive repos your token has access to using /integrations/github/repos and sync their content. 
You can also pass full name of any public repository (username/repo-name). This will store the repo content with 
carbon which can be accessed through /integrations/items/list endpoint. Maximum of 25 repositories are accepted per request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
Object result = client
        .integrations
        .syncRepos(repos)
        .dataSourceId(dataSourceId)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### repos: List<`String`><a id="repos-list"></a>

##### data_source_id: `Integer`<a id="data_source_id-integer"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/github/sync_repos` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.syncRssFeed`<a id="carbonintegrationssyncrssfeed"></a>

Rss Feed

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
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
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `String`<a id="url-string"></a>

##### tags: `Object`<a id="tags-object"></a>

##### chunk_size: `Integer`<a id="chunk_size-integer"></a>

##### chunk_overlap: `Integer`<a id="chunk_overlap-integer"></a>

##### skip_embedding_generation: `Boolean`<a id="skip_embedding_generation-boolean"></a>

##### embedding_model:<a id="embedding_model"></a>

##### generate_sparse_vectors: `Boolean`<a id="generate_sparse_vectors-boolean"></a>

##### prepend_filename_to_chunks: `Boolean`<a id="prepend_filename_to_chunks-boolean"></a>

##### request_id: `String`<a id="request_id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./src/main/java/com/konfigthis/client/model/GenericSuccessResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/rss_feed` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.syncS3Files`<a id="carbonintegrationssyncs3files"></a>

After optionally loading the items via /integrations/items/sync and integrations/items/list, use the bucket name 
and object key as the ID in this endpoint to sync them into Carbon. Additional parameters below can associate 
data with the selected items or modify the sync behavior

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
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
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: List<[`S3GetFileInput`](./src/main/java/com/konfigthis/client/model/S3GetFileInput.java)><a id="ids-list"></a>

##### tags: `Object`<a id="tags-object"></a>

##### chunk_size: `Integer`<a id="chunk_size-integer"></a>

##### chunk_overlap: `Integer`<a id="chunk_overlap-integer"></a>

##### skip_embedding_generation: `Boolean`<a id="skip_embedding_generation-boolean"></a>

##### embedding_model:<a id="embedding_model"></a>

##### generate_sparse_vectors: `Boolean`<a id="generate_sparse_vectors-boolean"></a>

##### prepend_filename_to_chunks: `Boolean`<a id="prepend_filename_to_chunks-boolean"></a>

##### max_items_per_chunk: `Integer`<a id="max_items_per_chunk-integer"></a>

Number of objects per chunk. For csv, tsv, xlsx, and json files only.

##### set_page_as_boundary: `Boolean`<a id="set_page_as_boundary-boolean"></a>

##### data_source_id: `Integer`<a id="data_source_id-integer"></a>

##### request_id: `String`<a id="request_id-string"></a>

##### use_ocr: `Boolean`<a id="use_ocr-boolean"></a>

##### parse_pdf_tables_with_ocr: `Boolean`<a id="parse_pdf_tables_with_ocr-boolean"></a>

##### file_sync_config: [`FileSyncConfigNullable`](./src/main/java/com/konfigthis/client/model/FileSyncConfigNullable.java)<a id="file_sync_config-filesyncconfignullablesrcmainjavacomkonfigthisclientmodelfilesyncconfignullablejava"></a>

#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./src/main/java/com/konfigthis/client/model/GenericSuccessResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/s3/files` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.organizations.get`<a id="carbonorganizationsget"></a>

Get Organization

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
OrganizationResponse result = client
        .organizations
        .get()
        .execute();
```

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationResponse](./src/main/java/com/konfigthis/client/model/OrganizationResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organization` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.organizations.update`<a id="carbonorganizationsupdate"></a>

Update Organization

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
GenericSuccessResponse result = client
        .organizations
        .update()
        .globalUserConfig(globalUserConfig)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### global_user_config: [`UserConfigurationNullable`](./src/main/java/com/konfigthis/client/model/UserConfigurationNullable.java)<a id="global_user_config-userconfigurationnullablesrcmainjavacomkonfigthisclientmodeluserconfigurationnullablejava"></a>

#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./src/main/java/com/konfigthis/client/model/GenericSuccessResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organization/update` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.organizations.updateStats`<a id="carbonorganizationsupdatestats"></a>

Use this endpoint to reaggregate the statistics for an organization, for example aggregate_file_size. The reaggregation
process is asyncronous so a webhook will be sent with the event type being FILE_STATISTICS_AGGREGATED to notify when the
process is complee. After this aggregation is complete, the updated statistics can be retrieved using the /organization
endpoint. The response of /organization willalso contain a timestamp of the last time the statistics were reaggregated.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
GenericSuccessResponse result = client
        .organizations
        .updateStats()
        .execute();
```

#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./src/main/java/com/konfigthis/client/model/GenericSuccessResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organization/statistics` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.users.delete`<a id="carbonusersdelete"></a>

Delete Users

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
GenericSuccessResponse result = client
        .users
        .delete(customerIds)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customer_ids: List<`String`><a id="customer_ids-list"></a>

#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./src/main/java/com/konfigthis/client/model/GenericSuccessResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/delete_users` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.users.get`<a id="carbonusersget"></a>

User Endpoint

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
UserResponse result = client
        .users
        .get(customerId)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customer_id: `String`<a id="customer_id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UserResponse](./src/main/java/com/konfigthis/client/model/UserResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/user` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.users.toggleUserFeatures`<a id="carbonuserstoggleuserfeatures"></a>
![Deprecated](https://img.shields.io/badge/deprecated-yellow)

Toggle User Features

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
GenericSuccessResponse result = client
        .users
        .toggleUserFeatures(configurationKeyName, value)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### configuration_key_name: `String`<a id="configuration_key_name-string"></a>

##### value: `Object`<a id="value-object"></a>

#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./src/main/java/com/konfigthis/client/model/GenericSuccessResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/modify_user_configuration` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.users.updateUsers`<a id="carbonusersupdateusers"></a>

Update Users

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
GenericSuccessResponse result = client
        .users
        .updateUsers(customerIds)
        .autoSyncEnabledSources(autoSyncEnabledSources)
        .maxFiles(maxFiles)
        .maxFilesPerUpload(maxFilesPerUpload)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customer_ids: List<`String`><a id="customer_ids-list"></a>

List of organization supplied user IDs

##### auto_sync_enabled_sources: `Object`<a id="auto_sync_enabled_sources-object"></a>

##### max_files: `Integer`<a id="max_files-integer"></a>

Custom file upload limit for the user over *all* user's files across all uploads.          If set, then the user will not be allowed to upload more files than this limit. If not set, or if set to -1,         then the user will have no limit.

##### max_files_per_upload: `Integer`<a id="max_files_per_upload-integer"></a>

Custom file upload limit for the user across a single upload.         If set, then the user will not be allowed to upload more files than this limit in a single upload. If not set,         or if set to -1, then the user will have no limit.

#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./src/main/java/com/konfigthis/client/model/GenericSuccessResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/update_users` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.utilities.fetchUrls`<a id="carbonutilitiesfetchurls"></a>

Extracts all URLs from a webpage. 

Args:
    url (str): URL of the webpage

Returns:
    FetchURLsResponse: A response object with a list of URLs extracted from the webpage and the webpage content.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
FetchURLsResponse result = client
        .utilities
        .fetchUrls(url)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `String`<a id="url-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[FetchURLsResponse](./src/main/java/com/konfigthis/client/model/FetchURLsResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/fetch_urls` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.utilities.fetchYoutubeTranscripts`<a id="carbonutilitiesfetchyoutubetranscripts"></a>

Fetches english transcripts from YouTube videos.

Args:
    id (str): The ID of the YouTube video. 
    raw (bool): Whether to return the raw transcript or not. Defaults to False.

Returns:
    dict: A dictionary with the transcript of the YouTube video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
YoutubeTranscriptResponse result = client
        .utilities
        .fetchYoutubeTranscripts(id)
        .raw(raw)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `String`<a id="id-string"></a>

##### raw: `Boolean`<a id="raw-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[YoutubeTranscriptResponse](./src/main/java/com/konfigthis/client/model/YoutubeTranscriptResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/fetch_youtube_transcript` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.utilities.processSitemap`<a id="carbonutilitiesprocesssitemap"></a>

Retrieves all URLs from a sitemap, which can subsequently be utilized with our `web_scrape` endpoint.

<!--Args:
    url (str): URL of the sitemap

Returns:
    dict: A dictionary with a list of URLs extracted from the sitemap.-->

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
Object result = client
        .utilities
        .processSitemap(url)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `String`<a id="url-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/process_sitemap` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.utilities.scrapeSitemap`<a id="carbonutilitiesscrapesitemap"></a>

Extracts all URLs from a sitemap and performs a web scrape on each of them.

Args:
    sitemap_url (str): URL of the sitemap

Returns:
    dict: A response object with the status of the scraping job message.-->

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
Object result = client
        .utilities
        .scrapeSitemap(url)
        .tags(tags)
        .maxPagesToScrape(maxPagesToScrape)
        .chunkSize(chunkSize)
        .chunkOverlap(chunkOverlap)
        .skipEmbeddingGeneration(skipEmbeddingGeneration)
        .enableAutoSync(enableAutoSync)
        .generateSparseVectors(generateSparseVectors)
        .prependFilenameToChunks(prependFilenameToChunks)
        .htmlTagsToSkip(htmlTagsToSkip)
        .cssClassesToSkip(cssClassesToSkip)
        .cssSelectorsToSkip(cssSelectorsToSkip)
        .embeddingModel(embeddingModel)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `String`<a id="url-string"></a>

##### tags: `Map<String, Object>`<a id="tags-map"></a>

##### max_pages_to_scrape: `Integer`<a id="max_pages_to_scrape-integer"></a>

##### chunk_size: `Integer`<a id="chunk_size-integer"></a>

##### chunk_overlap: `Integer`<a id="chunk_overlap-integer"></a>

##### skip_embedding_generation: `Boolean`<a id="skip_embedding_generation-boolean"></a>

##### enable_auto_sync: `Boolean`<a id="enable_auto_sync-boolean"></a>

##### generate_sparse_vectors: `Boolean`<a id="generate_sparse_vectors-boolean"></a>

##### prepend_filename_to_chunks: `Boolean`<a id="prepend_filename_to_chunks-boolean"></a>

##### html_tags_to_skip: List<`String`><a id="html_tags_to_skip-list"></a>

##### css_classes_to_skip: List<`String`><a id="css_classes_to_skip-list"></a>

##### css_selectors_to_skip: List<`String`><a id="css_selectors_to_skip-list"></a>

##### embedding_model:<a id="embedding_model"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/scrape_sitemap` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.utilities.scrapeWeb`<a id="carbonutilitiesscrapeweb"></a>

Conduct a web scrape on a given webpage URL. Our web scraper is fully compatible with JavaScript and supports recursion depth, enabling you to efficiently extract all content from the target website.

<!--Args:
    scraping_requests (List[WebscrapeRequest]): A list of WebscrapeRequest objects.

    
Returns:
    dict: A response object with the status of the scraping job message.-->

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
Object result = client
        .utilities
        .scrapeWeb()
        .execute();
```

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

List<[`WebscrapeRequest`](./src/main/java/com/konfigthis/client/model/WebscrapeRequest.java)>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/web_scrape` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.utilities.searchUrls`<a id="carbonutilitiessearchurls"></a>

Perform a web search and obtain a list of relevant URLs.

As an illustration, when you perform a search for “content related to MRNA,” you will receive a list of links such as the following:

    - https://tomrenz.substack.com/p/mrna-and-why-it-matters

    - https://www.statnews.com/2020/11/10/the-story-of-mrna-how-a-once-dismissed-idea-became-a-leading-technology-in-the-covid-vaccine-race/

    - https://www.statnews.com/2022/11/16/covid-19-vaccines-were-a-success-but-mrna-still-has-a-delivery-problem/
    
    - https://joomi.substack.com/p/were-still-being-misled-about-how

Subsequently, you can submit these links to the web_scrape endpoint in order to retrieve the content of the respective web pages.

Args:
    query (str): Query to search for

Returns:
    FetchURLsResponse: A response object with a list of URLs for a given search query.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
FetchURLsResponse result = client
        .utilities
        .searchUrls(query)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### query: `String`<a id="query-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[FetchURLsResponse](./src/main/java/com/konfigthis/client/model/FetchURLsResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/search_urls` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.webhooks.addUrl`<a id="carbonwebhooksaddurl"></a>

Add Webhook Url

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
Webhook result = client
        .webhooks
        .addUrl(url)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `String`<a id="url-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Webhook](./src/main/java/com/konfigthis/client/model/Webhook.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/add_webhook` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.webhooks.deleteUrl`<a id="carbonwebhooksdeleteurl"></a>

Delete Webhook Url

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
GenericSuccessResponse result = client
        .webhooks
        .deleteUrl(webhookId)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webhookId: `Integer`<a id="webhookid-integer"></a>

#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./src/main/java/com/konfigthis/client/model/GenericSuccessResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/delete_webhook/{webhook_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.webhooks.urls`<a id="carbonwebhooksurls"></a>

Webhook Urls

#### 🛠️ Usage<a id="🛠️-usage"></a>

```java
WebhookQueryResponse result = client
        .webhooks
        .urls()
        .pagination(pagination)
        .orderBy(orderBy)
        .orderDir(orderDir)
        .filters(filters)
        .execute();
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pagination: [`Pagination`](./src/main/java/com/konfigthis/client/model/Pagination.java)<a id="pagination-paginationsrcmainjavacomkonfigthisclientmodelpaginationjava"></a>

##### order_by:<a id="order_by"></a>

##### order_dir:<a id="order_dir"></a>

##### filters: [`WebhookFilters`](./src/main/java/com/konfigthis/client/model/WebhookFilters.java)<a id="filters-webhookfilterssrcmainjavacomkonfigthisclientmodelwebhookfiltersjava"></a>

#### 🔄 Return<a id="🔄-return"></a>

[WebhookQueryResponse](./src/main/java/com/konfigthis/client/model/WebhookQueryResponse.java)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This Java package is automatically generated by [Konfig](https://konfigthis.com)
