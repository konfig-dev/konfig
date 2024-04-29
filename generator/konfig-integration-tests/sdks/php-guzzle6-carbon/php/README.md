<div align="center">

[![Visit Carbon](./header.png)](https://carbon.ai)

# [Carbon](https://carbon.ai)<a id="carbon"></a>

Connect external data to LLMs, no matter the source.

[![Packagist](https://img.shields.io/badge/Packagist-v0.1.1-blue)](https://packagist.org/packages/konfig/carbon-php-sdk)

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation & Usage](#installation--usage)
  * [Requirements](#requirements)
  * [Composer](#composer)
  * [Manual Installation](#manual-installation)
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
  * [`carbon.files.getParsedFile`](#carbonfilesgetparsedfile)
  * [`carbon.files.getRawFile`](#carbonfilesgetrawfile)
  * [`carbon.files.queryUserFiles`](#carbonfilesqueryuserfiles)
  * [`carbon.files.queryUserFilesDeprecated`](#carbonfilesqueryuserfilesdeprecated)
  * [`carbon.files.resync`](#carbonfilesresync)
  * [`carbon.files.upload`](#carbonfilesupload)
  * [`carbon.files.uploadFromUrl`](#carbonfilesuploadfromurl)
  * [`carbon.files.uploadText`](#carbonfilesuploadtext)
  * [`carbon.health.check`](#carbonhealthcheck)
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
  * [`carbon.integrations.syncConfluence`](#carbonintegrationssyncconfluence)
  * [`carbon.integrations.syncDataSourceItems`](#carbonintegrationssyncdatasourceitems)
  * [`carbon.integrations.syncFiles`](#carbonintegrationssyncfiles)
  * [`carbon.integrations.syncGitbook`](#carbonintegrationssyncgitbook)
  * [`carbon.integrations.syncGmail`](#carbonintegrationssyncgmail)
  * [`carbon.integrations.syncOutlook`](#carbonintegrationssyncoutlook)
  * [`carbon.integrations.syncRssFeed`](#carbonintegrationssyncrssfeed)
  * [`carbon.integrations.syncS3Files`](#carbonintegrationssyncs3files)
  * [`carbon.organizations.get`](#carbonorganizationsget)
  * [`carbon.users.delete`](#carbonusersdelete)
  * [`carbon.users.get`](#carbonusersget)
  * [`carbon.users.toggleUserFeatures`](#carbonuserstoggleuserfeatures)
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

## Installation & Usage<a id="installation--usage"></a>

### Requirements<a id="requirements"></a>

This library requires `PHP ^8.0`

### Composer<a id="composer"></a>

To install the bindings via [Composer](https://getcomposer.org/), add the following to `composer.json`:

```json
{
  "repositories": [
    {
      "type": "vcs",
      "url": "https://github.com/Carbon-for-Developers/carbon-php-sdk.git"
    }
  ],
  "require": {
    "konfig/carbon-php-sdk": "0.1.1"
  }
}
```

Then run `composer install`

### Manual Installation<a id="manual-installation"></a>

Download the files and include `autoload.php`:

```php
<?php
require_once('/path/to/carbon-php-sdk/vendor/autoload.php');
```

## Getting Started<a id="getting-started"></a>

Please follow the [installation procedure](#installation--usage) and then run the following:

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

// 1) Get an access token for a customer
$carbon = new \Carbon\Client(
    apiKey: "API_KEY",
    customerId: "CUSTOMER_ID",
);

$result = $carbon->auth->getAccessToken();

# 2) Use the access token to authenticate moving forward
$carbon = new \Carbon\Client(accessToken: $token->getAccessToken());

# use SDK as usual
$whiteLabeling = $carbon->auth->getWhiteLabeling();
# etc.
```
## Reference<a id="reference"></a>


### `carbon.auth.getAccessToken`<a id="carbonauthgetaccesstoken"></a>

Get Access Token


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->auth->getAccessToken();
```


#### 🔄 Return<a id="🔄-return"></a>

[**TokenResponse**](./lib/Model/TokenResponse.php)

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

```php
$result = $carbon->auth->getWhiteLabeling();
```


#### 🔄 Return<a id="🔄-return"></a>

[**WhiteLabelingResponse**](./lib/Model/WhiteLabelingResponse.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/auth/v1/white_labeling` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.dataSources.queryUserDataSources`<a id="carbondatasourcesqueryuserdatasources"></a>

User Data Sources


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->dataSources->queryUserDataSources(
    pagination: [
        "limit" => 10,
        "offset" => 0,
    ], 
    order_by: "created_at", 
    order_dir: "desc", 
    filters: [
        "source" => "GOOGLE_DRIVE",
    ]
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pagination: [`Pagination`](./lib/Model/Pagination.php)<a id="pagination-paginationlibmodelpaginationphp"></a>

##### order_by:<a id="order_by"></a>

##### order_dir:<a id="order_dir"></a>

##### filters: [`OrganizationUserDataSourceFilters`](./lib/Model/OrganizationUserDataSourceFilters.php)<a id="filters-organizationuserdatasourcefilterslibmodelorganizationuserdatasourcefiltersphp"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**OrganizationUserDataSourceResponse**](./lib/Model/OrganizationUserDataSourceResponse.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/user_data_sources` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.dataSources.revokeAccessToken`<a id="carbondatasourcesrevokeaccesstoken"></a>

Revoke Access Token


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->dataSources->revokeAccessToken(
    data_source_id: 1
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data_source_id: `int`<a id="data_source_id-int"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**GenericSuccessResponse**](./lib/Model/GenericSuccessResponse.php)

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

```php
$result = $carbon->embeddings->getDocuments(
    query: "a", 
    k: 1, 
    tags: [
        "key": "string_example",
    ], 
    query_vector: [
        3.14
    ], 
    file_ids: [
        1
    ], 
    parent_file_ids: [
        1
    ], 
    tags_v2: [
    ], 
    include_tags: True, 
    include_vectors: True, 
    include_raw_file: True, 
    hybrid_search: True, 
    hybrid_search_tuning_parameters: [
        "weight_a" => 0.5,
        "weight_b" => 0.5,
    ], 
    media_type: "TEXT", 
    embedding_model: "OPENAI"
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### query: `string`<a id="query-string"></a>

Query for which to get related chunks and embeddings.

##### k: `int`<a id="k-int"></a>

Number of related chunks to return.

##### tags: array<string, [`Tags1`](./lib/Model/Tags1.php)><a id="tags-array"></a>

A set of tags to limit the search to. Deprecated and may be removed in the future.

##### query_vector: `float`[]<a id="query_vector-float"></a>

Optional query vector for which to get related chunks and embeddings. It must have been         generated by the same model used to generate the embeddings across which the search is being conducted. Cannot         provide both `query` and `query_vector`.

##### file_ids: `int`[]<a id="file_ids-int"></a>

Optional list of file IDs to limit the search to

##### parent_file_ids: `int`[]<a id="parent_file_ids-int"></a>

Optional list of parent file IDs to limit the search to. A parent file describes a file to which         another file belongs (e.g. a folder)

##### tags_v2: `object`<a id="tags_v2-object"></a>

A set of tags to limit the search to. Use this instead of `tags`, which is deprecated.

##### include_tags: `bool`<a id="include_tags-bool"></a>

Flag to control whether or not to include tags for each chunk in the response.

##### include_vectors: `bool`<a id="include_vectors-bool"></a>

Flag to control whether or not to include embedding vectors in the response.

##### include_raw_file: `bool`<a id="include_raw_file-bool"></a>

Flag to control whether or not to include a signed URL to the raw file containing each chunk         in the response.

##### hybrid_search: `bool`<a id="hybrid_search-bool"></a>

Flag to control whether or not to perform hybrid search.

##### hybrid_search_tuning_parameters: [`HybridSearchTuningParamsNullable`](./lib/Model/HybridSearchTuningParamsNullable.php)<a id="hybrid_search_tuning_parameters-hybridsearchtuningparamsnullablelibmodelhybridsearchtuningparamsnullablephp"></a>

##### media_type:<a id="media_type"></a>

##### embedding_model:<a id="embedding_model"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**DocumentResponseList**](./lib/Model/DocumentResponseList.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/embeddings` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.embeddings.getEmbeddingsAndChunks`<a id="carbonembeddingsgetembeddingsandchunks"></a>

Retrieve Embeddings And Content


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->embeddings->getEmbeddingsAndChunks(
    filters: [
        "user_file_id" => 1,
        "embedding_model" => "OPENAI",
    ], 
    pagination: [
        "limit" => 10,
        "offset" => 0,
    ], 
    order_by: "created_at", 
    order_dir: "desc", 
    include_vectors: False
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filters: [`EmbeddingsAndChunksFilters`](./lib/Model/EmbeddingsAndChunksFilters.php)<a id="filters-embeddingsandchunksfilterslibmodelembeddingsandchunksfiltersphp"></a>

##### pagination: [`Pagination`](./lib/Model/Pagination.php)<a id="pagination-paginationlibmodelpaginationphp"></a>

##### order_by:<a id="order_by"></a>

##### order_dir:<a id="order_dir"></a>

##### include_vectors: `bool`<a id="include_vectors-bool"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**EmbeddingsAndChunksResponse**](./lib/Model/EmbeddingsAndChunksResponse.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/text_chunks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.embeddings.uploadChunksAndEmbeddings`<a id="carbonembeddingsuploadchunksandembeddings"></a>

Upload Chunks And Embeddings


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->embeddings->uploadChunksAndEmbeddings(
    embedding_model: "OPENAI", 
    chunks_and_embeddings: [
        [
            "file_id" => 1,
            "chunks_and_embeddings" => [
                [
                    "chunk_number" => 1,
                    "chunk" => "chunk_example",
                    "embedding" => [
                        3.14
                    ],
                ]
            ],
        ]
    ], 
    overwrite_existing: False
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### embedding_model:<a id="embedding_model"></a>

##### chunks_and_embeddings: [`SingleChunksAndEmbeddingsUploadInput`](./lib/Model/SingleChunksAndEmbeddingsUploadInput.php)[]<a id="chunks_and_embeddings-singlechunksandembeddingsuploadinputlibmodelsinglechunksandembeddingsuploadinputphp"></a>

##### overwrite_existing: `bool`<a id="overwrite_existing-bool"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**GenericSuccessResponse**](./lib/Model/GenericSuccessResponse.php)

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

```php
$result = $carbon->files->createUserFileTags(
    tags: [
        "key": "string_example",
    ], 
    organization_user_file_id: 1
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tags: array<string, [`Tags1`](./lib/Model/Tags1.php)><a id="tags-array"></a>

##### organization_user_file_id: `int`<a id="organization_user_file_id-int"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**UserFile**](./lib/Model/UserFile.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/create_user_file_tags` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.delete`<a id="carbonfilesdelete"></a>

Delete File Endpoint


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->files->delete(
    file_id: 1
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### file_id: `int`<a id="file_id-int"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**GenericSuccessResponse**](./lib/Model/GenericSuccessResponse.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/deletefile/{file_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.deleteFileTags`<a id="carbonfilesdeletefiletags"></a>

Delete File Tags


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->files->deleteFileTags(
    tags: [
        "string_example"
    ], 
    organization_user_file_id: 1
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tags: `string`[]<a id="tags-string"></a>

##### organization_user_file_id: `int`<a id="organization_user_file_id-int"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**UserFile**](./lib/Model/UserFile.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/delete_user_file_tags` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.deleteMany`<a id="carbonfilesdeletemany"></a>

Delete Files Endpoint


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->files->deleteMany(
    file_ids: [
        1
    ], 
    sync_statuses: [
        "string_example"
    ], 
    delete_non_synced_only: False, 
    send_webhook: False
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### file_ids: `int`[]<a id="file_ids-int"></a>

##### sync_statuses: []<a id="sync_statuses-"></a>

##### delete_non_synced_only: `bool`<a id="delete_non_synced_only-bool"></a>

##### send_webhook: `bool`<a id="send_webhook-bool"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**GenericSuccessResponse**](./lib/Model/GenericSuccessResponse.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/delete_files` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.getParsedFile`<a id="carbonfilesgetparsedfile"></a>

This route is deprecated. Use `/user_files_v2` instead.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->files->getParsedFile(
    file_id: 1
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### file_id: `int`<a id="file_id-int"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**PresignedURLResponse**](./lib/Model/PresignedURLResponse.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/parsed_file/{file_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.getRawFile`<a id="carbonfilesgetrawfile"></a>

This route is deprecated. Use `/user_files_v2` instead.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->files->getRawFile(
    file_id: 1
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### file_id: `int`<a id="file_id-int"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**PresignedURLResponse**](./lib/Model/PresignedURLResponse.php)

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

```php
$result = $carbon->files->queryUserFiles(
    pagination: [
        "limit" => 10,
        "offset" => 0,
    ], 
    order_by: "created_at", 
    order_dir: "desc", 
    filters: [
    ], 
    include_raw_file: True, 
    include_parsed_text_file: True, 
    include_additional_files: True
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pagination: [`Pagination`](./lib/Model/Pagination.php)<a id="pagination-paginationlibmodelpaginationphp"></a>

##### order_by:<a id="order_by"></a>

##### order_dir:<a id="order_dir"></a>

##### filters: [`OrganizationUserFilesToSyncFilters`](./lib/Model/OrganizationUserFilesToSyncFilters.php)<a id="filters-organizationuserfilestosyncfilterslibmodelorganizationuserfilestosyncfiltersphp"></a>

##### include_raw_file: `bool`<a id="include_raw_file-bool"></a>

##### include_parsed_text_file: `bool`<a id="include_parsed_text_file-bool"></a>

##### include_additional_files: `bool`<a id="include_additional_files-bool"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**UserFilesV2**](./lib/Model/UserFilesV2.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/user_files_v2` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.queryUserFilesDeprecated`<a id="carbonfilesqueryuserfilesdeprecated"></a>

This route is deprecated. Use `/user_files_v2` instead.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->files->queryUserFilesDeprecated(
    pagination: [
        "limit" => 10,
        "offset" => 0,
    ], 
    order_by: "created_at", 
    order_dir: "desc", 
    filters: [
    ], 
    include_raw_file: True, 
    include_parsed_text_file: True, 
    include_additional_files: True
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pagination: [`Pagination`](./lib/Model/Pagination.php)<a id="pagination-paginationlibmodelpaginationphp"></a>

##### order_by:<a id="order_by"></a>

##### order_dir:<a id="order_dir"></a>

##### filters: [`OrganizationUserFilesToSyncFilters`](./lib/Model/OrganizationUserFilesToSyncFilters.php)<a id="filters-organizationuserfilestosyncfilterslibmodelorganizationuserfilestosyncfiltersphp"></a>

##### include_raw_file: `bool`<a id="include_raw_file-bool"></a>

##### include_parsed_text_file: `bool`<a id="include_parsed_text_file-bool"></a>

##### include_additional_files: `bool`<a id="include_additional_files-bool"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**UserFile**](./lib/Model/UserFile.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/user_files` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.resync`<a id="carbonfilesresync"></a>

Resync File


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->files->resync(
    file_id: 1, 
    chunk_size: 1, 
    chunk_overlap: 1
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### file_id: `int`<a id="file_id-int"></a>

##### chunk_size: `int`<a id="chunk_size-int"></a>

##### chunk_overlap: `int`<a id="chunk_overlap-int"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**UserFile**](./lib/Model/UserFile.php)

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

```php
$result = $carbon->files->upload(
    file: open('/path/to/file', 'rb'), 
    chunk_size: 1, 
    chunk_overlap: 1, 
    skip_embedding_generation: False, 
    set_page_as_boundary: False, 
    embedding_model: "OPENAI", 
    use_ocr: False, 
    generate_sparse_vectors: False, 
    prepend_filename_to_chunks: False, 
    max_items_per_chunk: 1
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### file: `\SplFileObject`<a id="file-splfileobject"></a>

##### chunk_size: `int`<a id="chunk_size-int"></a>

Chunk size in tiktoken tokens to be used when processing file.

##### chunk_overlap: `int`<a id="chunk_overlap-int"></a>

Chunk overlap in tiktoken tokens to be used when processing file.

##### skip_embedding_generation: `bool`<a id="skip_embedding_generation-bool"></a>

Flag to control whether or not embeddings should be generated and stored             when processing file.

##### set_page_as_boundary: `bool`<a id="set_page_as_boundary-bool"></a>

Flag to control whether or not to set the a page's worth of content as the maximum             amount of content that can appear in a chunk. Only valid for PDFs. See description route description for             more information.

##### embedding_model:<a id="embedding_model"></a>

Embedding model that will be used to embed file chunks.

##### use_ocr: `bool`<a id="use_ocr-bool"></a>

Whether or not to use OCR when processing files. Only valid for PDFs. Useful for documents with             tables, images, and/or scanned text.

##### generate_sparse_vectors: `bool`<a id="generate_sparse_vectors-bool"></a>

Whether or not to generate sparse vectors for the file. This is *required* for the file to be a             candidate for hybrid search.

##### prepend_filename_to_chunks: `bool`<a id="prepend_filename_to_chunks-bool"></a>

Whether or not to prepend the file's name to chunks.

##### max_items_per_chunk: `int`<a id="max_items_per_chunk-int"></a>

Number of objects per chunk. For json files only.


#### 🔄 Return<a id="🔄-return"></a>

[**UserFile**](./lib/Model/UserFile.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/uploadfile` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.uploadFromUrl`<a id="carbonfilesuploadfromurl"></a>

Create Upload File From Url


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->files->uploadFromUrl(
    url: "string_example", 
    file_name: "string_example", 
    chunk_size: 1, 
    chunk_overlap: 1, 
    skip_embedding_generation: False, 
    set_page_as_boundary: False, 
    embedding_model: "OPENAI", 
    generate_sparse_vectors: False, 
    use_textract: False, 
    prepend_filename_to_chunks: False, 
    max_items_per_chunk: 1
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>

##### file_name: `string`<a id="file_name-string"></a>

##### chunk_size: `int`<a id="chunk_size-int"></a>

##### chunk_overlap: `int`<a id="chunk_overlap-int"></a>

##### skip_embedding_generation: `bool`<a id="skip_embedding_generation-bool"></a>

##### set_page_as_boundary: `bool`<a id="set_page_as_boundary-bool"></a>

##### embedding_model:<a id="embedding_model"></a>

##### generate_sparse_vectors: `bool`<a id="generate_sparse_vectors-bool"></a>

##### use_textract: `bool`<a id="use_textract-bool"></a>

##### prepend_filename_to_chunks: `bool`<a id="prepend_filename_to_chunks-bool"></a>

##### max_items_per_chunk: `int`<a id="max_items_per_chunk-int"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**UserFile**](./lib/Model/UserFile.php)

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

```php
$result = $carbon->files->uploadText(
    contents: "string_example", 
    name: "string_example", 
    chunk_size: 1, 
    chunk_overlap: 1, 
    skip_embedding_generation: False, 
    overwrite_file_id: 1, 
    embedding_model: "OPENAI", 
    generate_sparse_vectors: False
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contents: `string`<a id="contents-string"></a>

##### name: `string`<a id="name-string"></a>

##### chunk_size: `int`<a id="chunk_size-int"></a>

##### chunk_overlap: `int`<a id="chunk_overlap-int"></a>

##### skip_embedding_generation: `bool`<a id="skip_embedding_generation-bool"></a>

##### overwrite_file_id: `int`<a id="overwrite_file_id-int"></a>

##### embedding_model:<a id="embedding_model"></a>

##### generate_sparse_vectors: `bool`<a id="generate_sparse_vectors-bool"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**UserFile**](./lib/Model/UserFile.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/upload_text` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.health.check`<a id="carbonhealthcheck"></a>

Health


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->health->check();
```


#### 🔄 Return<a id="🔄-return"></a>

**object**

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.connectFreshdesk`<a id="carbonintegrationsconnectfreshdesk"></a>

Refer this article to obtain an API key https://support.freshdesk.com/en/support/solutions/articles/215517.
Make sure that your API key has the permission to read solutions from your account and you are on a <b>paid</b> plan.
Once you have an API key, you can make a request to this endpoint along with your freshdesk domain. This will 
trigger an automatic sync of the articles in your "solutions" tab. Additional parameters below can be used to associate 
data with the synced articles or modify the sync behavior.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->integrations->connectFreshdesk(
    domain: "string_example", 
    api_key: "string_example", 
    tags: [], 
    chunk_size: 1500, 
    chunk_overlap: 20, 
    skip_embedding_generation: False, 
    embedding_model: "OPENAI", 
    generate_sparse_vectors: False, 
    prepend_filename_to_chunks: False
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### domain: `string`<a id="domain-string"></a>

##### api_key: `string`<a id="api_key-string"></a>

##### tags: `object`<a id="tags-object"></a>

##### chunk_size: `int`<a id="chunk_size-int"></a>

##### chunk_overlap: `int`<a id="chunk_overlap-int"></a>

##### skip_embedding_generation: `bool`<a id="skip_embedding_generation-bool"></a>

##### embedding_model:<a id="embedding_model"></a>

##### generate_sparse_vectors: `bool`<a id="generate_sparse_vectors-bool"></a>

##### prepend_filename_to_chunks: `bool`<a id="prepend_filename_to_chunks-bool"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**GenericSuccessResponse**](./lib/Model/GenericSuccessResponse.php)

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

```php
$result = $carbon->integrations->connectGitbook(
    organization: "string_example", 
    access_token: "string_example"
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### organization: `string`<a id="organization-string"></a>

##### access_token: `string`<a id="access_token-string"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**GenericSuccessResponse**](./lib/Model/GenericSuccessResponse.php)

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

```php
$result = $carbon->integrations->createAwsIamUser(
    access_key: "string_example", 
    access_key_secret: "string_example"
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### access_key: `string`<a id="access_key-string"></a>

##### access_key_secret: `string`<a id="access_key_secret-string"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**OrganizationUserDataSourceAPI**](./lib/Model/OrganizationUserDataSourceAPI.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/s3` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.getOauthUrl`<a id="carbonintegrationsgetoauthurl"></a>

Get Oauth Url


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->integrations->getOauthUrl(
    service: "GOOGLE_DRIVE", 
    tags: None, 
    scope: "string_example", 
    chunk_size: 1500, 
    chunk_overlap: 20, 
    skip_embedding_generation: False, 
    embedding_model: "OPENAI", 
    zendesk_subdomain: "string_example", 
    microsoft_tenant: "string_example", 
    sharepoint_site_name: "string_example", 
    confluence_subdomain: "string_example", 
    generate_sparse_vectors: False, 
    prepend_filename_to_chunks: False, 
    max_items_per_chunk: 1, 
    salesforce_domain: "string_example", 
    sync_files_on_connection: False, 
    set_page_as_boundary: False
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### service:<a id="service"></a>

##### tags:<a id="tags"></a>

##### scope: `string`<a id="scope-string"></a>

##### chunk_size: `int`<a id="chunk_size-int"></a>

##### chunk_overlap: `int`<a id="chunk_overlap-int"></a>

##### skip_embedding_generation: `bool`<a id="skip_embedding_generation-bool"></a>

##### embedding_model:<a id="embedding_model"></a>

##### zendesk_subdomain: `string`<a id="zendesk_subdomain-string"></a>

##### microsoft_tenant: `string`<a id="microsoft_tenant-string"></a>

##### sharepoint_site_name: `string`<a id="sharepoint_site_name-string"></a>

##### confluence_subdomain: `string`<a id="confluence_subdomain-string"></a>

##### generate_sparse_vectors: `bool`<a id="generate_sparse_vectors-bool"></a>

##### prepend_filename_to_chunks: `bool`<a id="prepend_filename_to_chunks-bool"></a>

##### max_items_per_chunk: `int`<a id="max_items_per_chunk-int"></a>

##### salesforce_domain: `string`<a id="salesforce_domain-string"></a>

##### sync_files_on_connection: `bool`<a id="sync_files_on_connection-bool"></a>

##### set_page_as_boundary: `bool`<a id="set_page_as_boundary-bool"></a>


#### 🔄 Return<a id="🔄-return"></a>

**object**

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

```php
$result = $carbon->integrations->listConfluencePages(
    data_source_id: 1, 
    parent_id: "string_example"
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data_source_id: `int`<a id="data_source_id-int"></a>

##### parent_id: `string`<a id="parent_id-string"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**ListResponse**](./lib/Model/ListResponse.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/confluence/list` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.listDataSourceItems`<a id="carbonintegrationslistdatasourceitems"></a>

List Data Source Items


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->integrations->listDataSourceItems(
    data_source_id: 1, 
    parent_id: "string_example", 
    pagination: [
        "limit" => 10,
        "offset" => 0,
    ]
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data_source_id: `int`<a id="data_source_id-int"></a>

##### parent_id: `string`<a id="parent_id-string"></a>

##### pagination: [`Pagination`](./lib/Model/Pagination.php)<a id="pagination-paginationlibmodelpaginationphp"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**ListDataSourceItemsResponse**](./lib/Model/ListDataSourceItemsResponse.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/items/list` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.listFolders`<a id="carbonintegrationslistfolders"></a>

After connecting your Outlook account, you can use this endpoint to list all of your folders on outlook. This includes 
both system folders like "inbox" and user created folders.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->integrations->listFolders();
```


#### 🔄 Return<a id="🔄-return"></a>

**object**

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/outlook/user_folders` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.listGitbookSpaces`<a id="carbonintegrationslistgitbookspaces"></a>

After connecting your Gitbook account, you can use this endpoint to list all of your spaces under current organization.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->integrations->listGitbookSpaces(
    data_source_id: 1
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data_source_id: `int`<a id="data_source_id-int"></a>


#### 🔄 Return<a id="🔄-return"></a>

**object**

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/gitbook/spaces` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.listLabels`<a id="carbonintegrationslistlabels"></a>

After connecting your Gmail account, you can use this endpoint to list all of your labels. User created labels
will have the type "user" and Gmail's default labels will have the type "system"


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->integrations->listLabels();
```


#### 🔄 Return<a id="🔄-return"></a>

**object**

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/gmail/user_labels` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.listOutlookCategories`<a id="carbonintegrationslistoutlookcategories"></a>

After connecting your Outlook account, you can use this endpoint to list all of your categories on outlook. We currently
support listing up to 250 categories.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->integrations->listOutlookCategories();
```


#### 🔄 Return<a id="🔄-return"></a>

**object**

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/outlook/user_categories` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.syncConfluence`<a id="carbonintegrationssyncconfluence"></a>

After listing pages in a user's Confluence account, the set of selected page `ids` and the
connected account's `data_source_id` can be passed into this endpoint to sync them into
Carbon. Additional parameters listed below can be used to associate data to the selected
pages or alter the behavior of the sync.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->integrations->syncConfluence(
    data_source_id: 1, 
    ids: [
        "string_example"
    ], 
    tags: [], 
    chunk_size: 1500, 
    chunk_overlap: 20, 
    skip_embedding_generation: False, 
    embedding_model: "OPENAI", 
    generate_sparse_vectors: False, 
    prepend_filename_to_chunks: False, 
    max_items_per_chunk: 1, 
    set_page_as_boundary: False
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data_source_id: `int`<a id="data_source_id-int"></a>

##### ids: `string`[]<a id="ids-string"></a>

##### tags: `object`<a id="tags-object"></a>

##### chunk_size: `int`<a id="chunk_size-int"></a>

##### chunk_overlap: `int`<a id="chunk_overlap-int"></a>

##### skip_embedding_generation: `bool`<a id="skip_embedding_generation-bool"></a>

##### embedding_model:<a id="embedding_model"></a>

##### generate_sparse_vectors: `bool`<a id="generate_sparse_vectors-bool"></a>

##### prepend_filename_to_chunks: `bool`<a id="prepend_filename_to_chunks-bool"></a>

##### max_items_per_chunk: `int`<a id="max_items_per_chunk-int"></a>

##### set_page_as_boundary: `bool`<a id="set_page_as_boundary-bool"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**GenericSuccessResponse**](./lib/Model/GenericSuccessResponse.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/confluence/sync` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.syncDataSourceItems`<a id="carbonintegrationssyncdatasourceitems"></a>

Sync Data Source Items


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->integrations->syncDataSourceItems(
    data_source_id: 1
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data_source_id: `int`<a id="data_source_id-int"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**OrganizationUserDataSourceAPI**](./lib/Model/OrganizationUserDataSourceAPI.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/items/sync` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.syncFiles`<a id="carbonintegrationssyncfiles"></a>

Sync Files


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->integrations->syncFiles(
    data_source_id: 1, 
    ids: [
        "string_example"
    ], 
    tags: [], 
    chunk_size: 1500, 
    chunk_overlap: 20, 
    skip_embedding_generation: False, 
    embedding_model: "OPENAI", 
    generate_sparse_vectors: False, 
    prepend_filename_to_chunks: False, 
    max_items_per_chunk: 1, 
    set_page_as_boundary: False
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data_source_id: `int`<a id="data_source_id-int"></a>

##### ids: `string`[]<a id="ids-string"></a>

##### tags: `object`<a id="tags-object"></a>

##### chunk_size: `int`<a id="chunk_size-int"></a>

##### chunk_overlap: `int`<a id="chunk_overlap-int"></a>

##### skip_embedding_generation: `bool`<a id="skip_embedding_generation-bool"></a>

##### embedding_model:<a id="embedding_model"></a>

##### generate_sparse_vectors: `bool`<a id="generate_sparse_vectors-bool"></a>

##### prepend_filename_to_chunks: `bool`<a id="prepend_filename_to_chunks-bool"></a>

##### max_items_per_chunk: `int`<a id="max_items_per_chunk-int"></a>

##### set_page_as_boundary: `bool`<a id="set_page_as_boundary-bool"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**GenericSuccessResponse**](./lib/Model/GenericSuccessResponse.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/files/sync` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.syncGitbook`<a id="carbonintegrationssyncgitbook"></a>

You can sync upto 20 Gitbook spaces at a time using this endpoint. Additional parameters below can be used to associate 
data with the synced pages or modify the sync behavior.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->integrations->syncGitbook(
    space_ids: [
        "string_example"
    ], 
    data_source_id: 1, 
    tags: [], 
    chunk_size: 1500, 
    chunk_overlap: 20, 
    skip_embedding_generation: False, 
    embedding_model: "OPENAI", 
    generate_sparse_vectors: False, 
    prepend_filename_to_chunks: False
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### space_ids: `string`[]<a id="space_ids-string"></a>

##### data_source_id: `int`<a id="data_source_id-int"></a>

##### tags: `object`<a id="tags-object"></a>

##### chunk_size: `int`<a id="chunk_size-int"></a>

##### chunk_overlap: `int`<a id="chunk_overlap-int"></a>

##### skip_embedding_generation: `bool`<a id="skip_embedding_generation-bool"></a>

##### embedding_model:<a id="embedding_model"></a>

##### generate_sparse_vectors: `bool`<a id="generate_sparse_vectors-bool"></a>

##### prepend_filename_to_chunks: `bool`<a id="prepend_filename_to_chunks-bool"></a>


#### 🔄 Return<a id="🔄-return"></a>

**object**

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

```php
$result = $carbon->integrations->syncGmail(
    filters: [], 
    tags: [], 
    chunk_size: 1500, 
    chunk_overlap: 20, 
    skip_embedding_generation: False, 
    embedding_model: "OPENAI", 
    generate_sparse_vectors: False, 
    prepend_filename_to_chunks: False
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filters: `object`<a id="filters-object"></a>

##### tags: `object`<a id="tags-object"></a>

##### chunk_size: `int`<a id="chunk_size-int"></a>

##### chunk_overlap: `int`<a id="chunk_overlap-int"></a>

##### skip_embedding_generation: `bool`<a id="skip_embedding_generation-bool"></a>

##### embedding_model:<a id="embedding_model"></a>

##### generate_sparse_vectors: `bool`<a id="generate_sparse_vectors-bool"></a>

##### prepend_filename_to_chunks: `bool`<a id="prepend_filename_to_chunks-bool"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**GenericSuccessResponse**](./lib/Model/GenericSuccessResponse.php)

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

```php
$result = $carbon->integrations->syncOutlook(
    filters: [], 
    tags: [], 
    folder: "Inbox", 
    chunk_size: 1500, 
    chunk_overlap: 20, 
    skip_embedding_generation: False, 
    embedding_model: "OPENAI", 
    generate_sparse_vectors: False, 
    prepend_filename_to_chunks: False
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filters: `object`<a id="filters-object"></a>

##### tags: `object`<a id="tags-object"></a>

##### folder: `string`<a id="folder-string"></a>

##### chunk_size: `int`<a id="chunk_size-int"></a>

##### chunk_overlap: `int`<a id="chunk_overlap-int"></a>

##### skip_embedding_generation: `bool`<a id="skip_embedding_generation-bool"></a>

##### embedding_model:<a id="embedding_model"></a>

##### generate_sparse_vectors: `bool`<a id="generate_sparse_vectors-bool"></a>

##### prepend_filename_to_chunks: `bool`<a id="prepend_filename_to_chunks-bool"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**GenericSuccessResponse**](./lib/Model/GenericSuccessResponse.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/outlook/sync` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.syncRssFeed`<a id="carbonintegrationssyncrssfeed"></a>

Rss Feed


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->integrations->syncRssFeed(
    url: "string_example", 
    tags: [], 
    chunk_size: 1500, 
    chunk_overlap: 20, 
    skip_embedding_generation: False, 
    embedding_model: "OPENAI", 
    generate_sparse_vectors: False, 
    prepend_filename_to_chunks: False
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>

##### tags: `object`<a id="tags-object"></a>

##### chunk_size: `int`<a id="chunk_size-int"></a>

##### chunk_overlap: `int`<a id="chunk_overlap-int"></a>

##### skip_embedding_generation: `bool`<a id="skip_embedding_generation-bool"></a>

##### embedding_model:<a id="embedding_model"></a>

##### generate_sparse_vectors: `bool`<a id="generate_sparse_vectors-bool"></a>

##### prepend_filename_to_chunks: `bool`<a id="prepend_filename_to_chunks-bool"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**GenericSuccessResponse**](./lib/Model/GenericSuccessResponse.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/rss_feed` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.syncS3Files`<a id="carbonintegrationssyncs3files"></a>

After optionally loading the items via /integrations/items/sync and integrations/items/list, use the bucket name 
and object key as the ID in this endpoint to sync them into Carbon. Additional parameters below can associate 
data with the selected items or modify the sync behavior


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->integrations->syncS3Files(
    ids: [
        [
        ]
    ], 
    tags: [], 
    chunk_size: 1500, 
    chunk_overlap: 20, 
    skip_embedding_generation: False, 
    embedding_model: "OPENAI", 
    generate_sparse_vectors: False, 
    prepend_filename_to_chunks: False, 
    max_items_per_chunk: 1, 
    set_page_as_boundary: False
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: [`S3GetFileInput`](./lib/Model/S3GetFileInput.php)[]<a id="ids-s3getfileinputlibmodels3getfileinputphp"></a>

##### tags: `object`<a id="tags-object"></a>

##### chunk_size: `int`<a id="chunk_size-int"></a>

##### chunk_overlap: `int`<a id="chunk_overlap-int"></a>

##### skip_embedding_generation: `bool`<a id="skip_embedding_generation-bool"></a>

##### embedding_model:<a id="embedding_model"></a>

##### generate_sparse_vectors: `bool`<a id="generate_sparse_vectors-bool"></a>

##### prepend_filename_to_chunks: `bool`<a id="prepend_filename_to_chunks-bool"></a>

##### max_items_per_chunk: `int`<a id="max_items_per_chunk-int"></a>

##### set_page_as_boundary: `bool`<a id="set_page_as_boundary-bool"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**GenericSuccessResponse**](./lib/Model/GenericSuccessResponse.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/s3/files` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.organizations.get`<a id="carbonorganizationsget"></a>

Get Organization


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->organizations->get();
```


#### 🔄 Return<a id="🔄-return"></a>

[**OrganizationResponse**](./lib/Model/OrganizationResponse.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organization` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.users.delete`<a id="carbonusersdelete"></a>

Delete Users


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->users->delete(
    customer_ids: [
        "string_example"
    ]
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customer_ids: `string`[]<a id="customer_ids-string"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**GenericSuccessResponse**](./lib/Model/GenericSuccessResponse.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/delete_users` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.users.get`<a id="carbonusersget"></a>

User Endpoint


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->users->get(
    customer_id: "string_example"
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customer_id: `string`<a id="customer_id-string"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**UserResponse**](./lib/Model/UserResponse.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/user` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.users.toggleUserFeatures`<a id="carbonuserstoggleuserfeatures"></a>

Toggle User Features


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->users->toggleUserFeatures(
    configuration_key_name: "string_example", 
    value: []
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### configuration_key_name: `string`<a id="configuration_key_name-string"></a>

##### value: `object`<a id="value-object"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**GenericSuccessResponse**](./lib/Model/GenericSuccessResponse.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/modify_user_configuration` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.utilities.fetchUrls`<a id="carbonutilitiesfetchurls"></a>

Extracts all URLs from a webpage. 

Args:
    url (str): URL of the webpage

Returns:
    FetchURLsResponse: A response object with a list of URLs extracted from the webpage and the webpage content.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->utilities->fetchUrls(
    url: "url_example"
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**FetchURLsResponse**](./lib/Model/FetchURLsResponse.php)

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

```php
$result = $carbon->utilities->fetchYoutubeTranscripts(
    id: "id_example", 
    raw: False
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### raw: `bool`<a id="raw-bool"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**YoutubeTranscriptResponse**](./lib/Model/YoutubeTranscriptResponse.php)

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

```php
$result = $carbon->utilities->processSitemap(
    url: "url_example"
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>


#### 🔄 Return<a id="🔄-return"></a>

**object**

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

```php
$result = $carbon->utilities->scrapeSitemap(
    url: "string_example", 
    tags: [
        "key": "string_example",
    ], 
    max_pages_to_scrape: 1, 
    chunk_size: 1500, 
    chunk_overlap: 20, 
    skip_embedding_generation: False, 
    enable_auto_sync: False, 
    generate_sparse_vectors: False, 
    prepend_filename_to_chunks: False, 
    html_tags_to_skip: [], 
    css_classes_to_skip: [], 
    css_selectors_to_skip: [], 
    embedding_model: "OPENAI"
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>

##### tags: array<string, [`Tags1`](./lib/Model/Tags1.php)><a id="tags-array"></a>

##### max_pages_to_scrape: `int`<a id="max_pages_to_scrape-int"></a>

##### chunk_size: `int`<a id="chunk_size-int"></a>

##### chunk_overlap: `int`<a id="chunk_overlap-int"></a>

##### skip_embedding_generation: `bool`<a id="skip_embedding_generation-bool"></a>

##### enable_auto_sync: `bool`<a id="enable_auto_sync-bool"></a>

##### generate_sparse_vectors: `bool`<a id="generate_sparse_vectors-bool"></a>

##### prepend_filename_to_chunks: `bool`<a id="prepend_filename_to_chunks-bool"></a>

##### html_tags_to_skip: `string`[]<a id="html_tags_to_skip-string"></a>

##### css_classes_to_skip: `string`[]<a id="css_classes_to_skip-string"></a>

##### css_selectors_to_skip: `string`[]<a id="css_selectors_to_skip-string"></a>

##### embedding_model:<a id="embedding_model"></a>


#### 🔄 Return<a id="🔄-return"></a>

**object**

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

```php
$result = $carbon->utilities->scrapeWeb(
    body: [
        [
            "url" => "url_example",
            "recursion_depth" => 3,
            "max_pages_to_scrape" => 100,
            "chunk_size" => 1500,
            "chunk_overlap" => 20,
            "skip_embedding_generation" => False,
            "enable_auto_sync" => False,
            "generate_sparse_vectors" => False,
            "prepend_filename_to_chunks" => False,
            "html_tags_to_skip" => [],
            "css_classes_to_skip" => [],
            "css_selectors_to_skip" => [],
            "embedding_model" => "OPENAI",
        ]
    ],
);
```

#### ⚙️ Request Body<a id="⚙️-request-body"></a>

[`WebscrapeRequest`](./lib/Model/WebscrapeRequest.php)[]


#### 🔄 Return<a id="🔄-return"></a>

**object**

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

```php
$result = $carbon->utilities->searchUrls(
    query: "query_example"
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### query: `string`<a id="query-string"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**FetchURLsResponse**](./lib/Model/FetchURLsResponse.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/search_urls` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.webhooks.addUrl`<a id="carbonwebhooksaddurl"></a>

Add Webhook Url


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->webhooks->addUrl(
    url: "string_example"
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**Webhook**](./lib/Model/Webhook.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/add_webhook` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.webhooks.deleteUrl`<a id="carbonwebhooksdeleteurl"></a>

Delete Webhook Url


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->webhooks->deleteUrl(
    webhook_id: 1
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webhook_id: `int`<a id="webhook_id-int"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**GenericSuccessResponse**](./lib/Model/GenericSuccessResponse.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/delete_webhook/{webhook_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.webhooks.urls`<a id="carbonwebhooksurls"></a>

Webhook Urls


#### 🛠️ Usage<a id="🛠️-usage"></a>

```php
$result = $carbon->webhooks->urls(
    pagination: [
        "limit" => 10,
        "offset" => 0,
    ], 
    order_by: "created_at", 
    order_dir: "desc", 
    filters: [
        "ids" => [],
    ]
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pagination: [`Pagination`](./lib/Model/Pagination.php)<a id="pagination-paginationlibmodelpaginationphp"></a>

##### order_by:<a id="order_by"></a>

##### order_dir:<a id="order_dir"></a>

##### filters: [`WebhookFilters`](./lib/Model/WebhookFilters.php)<a id="filters-webhookfilterslibmodelwebhookfiltersphp"></a>


#### 🔄 Return<a id="🔄-return"></a>

[**WebhookQueryResponse**](./lib/Model/WebhookQueryResponse.php)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This PHP package is automatically generated by [Konfig](https://konfigthis.com)
