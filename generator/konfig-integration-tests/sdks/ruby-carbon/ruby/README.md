<div align="center">

[![Visit Carbon](./header.png)](https://carbon.ai)

# [Carbon](https://carbon.ai)<a id="carbon"></a>

Connect external data to LLMs, no matter the source.

[![npm](https://img.shields.io/badge/gem-v0.1.0-blue)](https://rubygems.org/gems/carbon/versions/0.1.0)

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Raw HTTP Response](#raw-http-response)
- [Reference](#reference)
  * [`carbon.auth.get_access_token`](#carbonauthget_access_token)
  * [`carbon.auth.get_white_labeling`](#carbonauthget_white_labeling)
  * [`carbon.data_sources.query_user_data_sources`](#carbondata_sourcesquery_user_data_sources)
  * [`carbon.data_sources.revoke_access_token`](#carbondata_sourcesrevoke_access_token)
  * [`carbon.embeddings.get_documents`](#carbonembeddingsget_documents)
  * [`carbon.embeddings.get_embeddings_and_chunks`](#carbonembeddingsget_embeddings_and_chunks)
  * [`carbon.embeddings.upload_chunks_and_embeddings`](#carbonembeddingsupload_chunks_and_embeddings)
  * [`carbon.files.create_user_file_tags`](#carbonfilescreate_user_file_tags)
  * [`carbon.files.delete`](#carbonfilesdelete)
  * [`carbon.files.delete_file_tags`](#carbonfilesdelete_file_tags)
  * [`carbon.files.delete_many`](#carbonfilesdelete_many)
  * [`carbon.files.get_parsed_file`](#carbonfilesget_parsed_file)
  * [`carbon.files.get_raw_file`](#carbonfilesget_raw_file)
  * [`carbon.files.query_user_files`](#carbonfilesquery_user_files)
  * [`carbon.files.query_user_files_deprecated`](#carbonfilesquery_user_files_deprecated)
  * [`carbon.files.resync`](#carbonfilesresync)
  * [`carbon.files.upload`](#carbonfilesupload)
  * [`carbon.files.upload_from_url`](#carbonfilesupload_from_url)
  * [`carbon.files.upload_text`](#carbonfilesupload_text)
  * [`carbon.health.check`](#carbonhealthcheck)
  * [`carbon.integrations.connect_freshdesk`](#carbonintegrationsconnect_freshdesk)
  * [`carbon.integrations.connect_gitbook`](#carbonintegrationsconnect_gitbook)
  * [`carbon.integrations.create_aws_iam_user`](#carbonintegrationscreate_aws_iam_user)
  * [`carbon.integrations.get_oauth_url`](#carbonintegrationsget_oauth_url)
  * [`carbon.integrations.list_confluence_pages`](#carbonintegrationslist_confluence_pages)
  * [`carbon.integrations.list_data_source_items`](#carbonintegrationslist_data_source_items)
  * [`carbon.integrations.list_folders`](#carbonintegrationslist_folders)
  * [`carbon.integrations.list_gitbook_spaces`](#carbonintegrationslist_gitbook_spaces)
  * [`carbon.integrations.list_labels`](#carbonintegrationslist_labels)
  * [`carbon.integrations.sync_confluence`](#carbonintegrationssync_confluence)
  * [`carbon.integrations.sync_data_source_items`](#carbonintegrationssync_data_source_items)
  * [`carbon.integrations.sync_files`](#carbonintegrationssync_files)
  * [`carbon.integrations.sync_gitbook`](#carbonintegrationssync_gitbook)
  * [`carbon.integrations.sync_gmail`](#carbonintegrationssync_gmail)
  * [`carbon.integrations.sync_outlook`](#carbonintegrationssync_outlook)
  * [`carbon.integrations.sync_rss_feed`](#carbonintegrationssync_rss_feed)
  * [`carbon.integrations.sync_s3_files`](#carbonintegrationssync_s3_files)
  * [`carbon.organizations.get`](#carbonorganizationsget)
  * [`carbon.users.get`](#carbonusersget)
  * [`carbon.users.toggle_user_features`](#carbonuserstoggle_user_features)
  * [`carbon.utilities.fetch_urls`](#carbonutilitiesfetch_urls)
  * [`carbon.utilities.fetch_youtube_transcripts`](#carbonutilitiesfetch_youtube_transcripts)
  * [`carbon.utilities.process_sitemap`](#carbonutilitiesprocess_sitemap)
  * [`carbon.utilities.scrape_sitemap`](#carbonutilitiesscrape_sitemap)
  * [`carbon.utilities.scrape_web`](#carbonutilitiesscrape_web)
  * [`carbon.utilities.search_urls`](#carbonutilitiessearch_urls)
  * [`carbon.webhooks.add_url`](#carbonwebhooksadd_url)
  * [`carbon.webhooks.delete_url`](#carbonwebhooksdelete_url)
  * [`carbon.webhooks.urls`](#carbonwebhooksurls)

<!-- tocstop -->

## Installation<a id="installation"></a>

Add to Gemfile:

```ruby
gem 'carbon', '~> 0.1.0'
```

## Getting Started<a id="getting-started"></a>

```ruby
require 'carbon'

# 1) Get an access token for a customer
configuration = Carbon::Configuration.new
configuration.api_key = "YOUR_API_KEY"
configuration.customer_id = "YOUR_CUSTOMER_ID"
carbon = Carbon::Client.new(configuration)

token = carbon.auth.get_access_token

# 2) Use the access token to authenticate moving forward
configuration = Carbon::Configuration.new
configuration.access_token = token.access_token
carbon = Carbon::Client.new(configuration)

# use SDK as usual
white_labeling = carbon.auth.get_white_labeling
```

## Raw HTTP Response<a id="raw-http-response"></a>

To access the raw HTTP response, suffix any method with `_with_http_info`.

```ruby
result = carbon.auth.get_access_token_with_http_info
p result.data # [TokenResponse] Deserialized data
p.result.status_code # [Integer] HTTP status code
p.result.headers # [Hash] HTTP headers
p.result.response # [Faraday::Response] Raw HTTP response
```

## Reference<a id="reference"></a>


### `carbon.auth.get_access_token`<a id="carbonauthget_access_token"></a>

Get Access Token

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.auth.get_access_token
p result
```

#### 🔄 Return<a id="🔄-return"></a>

[TokenResponse](./lib/carbon/models/token_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/auth/v1/access_token` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.auth.get_white_labeling`<a id="carbonauthget_white_labeling"></a>

Returns whether or not the organization is white labeled and which integrations are white labeled

:param current_user: the current user
:param db: the database session
:return: a WhiteLabelingResponse

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.auth.get_white_labeling
p result
```

#### 🔄 Return<a id="🔄-return"></a>

[WhiteLabelingResponse](./lib/carbon/models/white_labeling_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/auth/v1/white_labeling` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.data_sources.query_user_data_sources`<a id="carbondata_sourcesquery_user_data_sources"></a>

User Data Sources

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.data_sources.query_user_data_sources(
  pagination: {
        "limit" => 10,
        "offset" => 0,
    },
  order_by: "created_at",
  order_dir: "desc",
  filters: {
        "source" => "GOOGLE_DRIVE",
    },
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pagination: [`Pagination`](./lib/carbon/models/pagination.rb)<a id="pagination-paginationlibcarbonmodelspaginationrb"></a>
##### order_by: [`OrganizationUserDataSourceOrderByColumns`](./lib/carbon/models/organization_user_data_source_order_by_columns.rb)<a id="order_by-organizationuserdatasourceorderbycolumnslibcarbonmodelsorganization_user_data_source_order_by_columnsrb"></a>
##### order_dir: [`OrderDir`](./lib/carbon/models/order_dir.rb)<a id="order_dir-orderdirlibcarbonmodelsorder_dirrb"></a>
##### filters: [`OrganizationUserDataSourceFilters`](./lib/carbon/models/organization_user_data_source_filters.rb)<a id="filters-organizationuserdatasourcefilterslibcarbonmodelsorganization_user_data_source_filtersrb"></a>
#### 🔄 Return<a id="🔄-return"></a>

[OrganizationUserDataSourceResponse](./lib/carbon/models/organization_user_data_source_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/user_data_sources` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.data_sources.revoke_access_token`<a id="carbondata_sourcesrevoke_access_token"></a>

Revoke Access Token

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.data_sources.revoke_access_token(
  data_source_id: 1,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data_source_id: `Integer`<a id="data_source_id-integer"></a>
#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./lib/carbon/models/generic_success_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/revoke_access_token` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.embeddings.get_documents`<a id="carbonembeddingsget_documents"></a>

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

```ruby
result = carbon.embeddings.get_documents(
  query: "a",
  k: 1,
  tags: {
        "key": "string_example",
    },
  query_vector: [
        3.14
    ],
  file_ids: [
        1
    ],
  parent_file_ids: [
        1
    ],
  tags_v2: {
    },
  include_tags: true,
  include_vectors: true,
  include_raw_file: true,
  hybrid_search: true,
  hybrid_search_tuning_parameters: {
        "weight_a" => 0.5,
        "weight_b" => 0.5,
    },
  media_type: "TEXT",
  embedding_model: "OPENAI",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### query: `String`<a id="query-string"></a>
Query for which to get related chunks and embeddings.

##### k: `Integer`<a id="k-integer"></a>
Number of related chunks to return.

##### tags: Hash<string, [`Tags1`](./lib/carbon/models/tags1.rb)><a id="tags-hash"></a>
A set of tags to limit the search to. Deprecated and may be removed in the
future.

##### query_vector: Array<`Float`><a id="query_vector-array"></a>
Optional query vector for which to get related chunks and embeddings. It must
have been generated by the same model used to generate the embeddings across
which the search is being conducted. Cannot provide both `query` and
`query_vector`.

##### file_ids: Array<`Integer`><a id="file_ids-array"></a>
Optional list of file IDs to limit the search to

##### parent_file_ids: Array<`Integer`><a id="parent_file_ids-array"></a>
Optional list of parent file IDs to limit the search to. A parent file describes
a file to which another file belongs (e.g. a folder)

##### tags_v2: `Object`<a id="tags_v2-object"></a>
A set of tags to limit the search to. Use this instead of `tags`, which is
deprecated.

##### include_tags: `Boolean`<a id="include_tags-boolean"></a>
Flag to control whether or not to include tags for each chunk in the response.

##### include_vectors: `Boolean`<a id="include_vectors-boolean"></a>
Flag to control whether or not to include embedding vectors in the response.

##### include_raw_file: `Boolean`<a id="include_raw_file-boolean"></a>
Flag to control whether or not to include a signed URL to the raw file
containing each chunk in the response.

##### hybrid_search: `Boolean`<a id="hybrid_search-boolean"></a>
Flag to control whether or not to perform hybrid search.

##### hybrid_search_tuning_parameters: [`HybridSearchTuningParamsNullable`](./lib/carbon/models/hybrid_search_tuning_params_nullable.rb)<a id="hybrid_search_tuning_parameters-hybridsearchtuningparamsnullablelibcarbonmodelshybrid_search_tuning_params_nullablerb"></a>
##### media_type: [`FileContentTypesNullable`](./lib/carbon/models/file_content_types_nullable.rb)<a id="media_type-filecontenttypesnullablelibcarbonmodelsfile_content_types_nullablerb"></a>
Used to filter the kind of files (e.g. `TEXT` or `IMAGE`) over which to perform
the search. Also plays a role in determining what embedding model is used to
embed the query. If `IMAGE` is chosen as the media type, then the embedding
model used will be an embedding model that is not text-only, *regardless* of
what value is passed for `embedding_model`.

##### embedding_model: [`EmbeddingGeneratorsNullable`](./lib/carbon/models/embedding_generators_nullable.rb)<a id="embedding_model-embeddinggeneratorsnullablelibcarbonmodelsembedding_generators_nullablerb"></a>
#### 🔄 Return<a id="🔄-return"></a>

[DocumentResponseList](./lib/carbon/models/document_response_list.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/embeddings` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.embeddings.get_embeddings_and_chunks`<a id="carbonembeddingsget_embeddings_and_chunks"></a>

Retrieve Embeddings And Content

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.embeddings.get_embeddings_and_chunks(
  filters: {
        "user_file_id" => 1,
        "embedding_model" => "OPENAI",
    },
  pagination: {
        "limit" => 10,
        "offset" => 0,
    },
  order_by: "created_at",
  order_dir: "desc",
  include_vectors: false,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filters: [`EmbeddingsAndChunksFilters`](./lib/carbon/models/embeddings_and_chunks_filters.rb)<a id="filters-embeddingsandchunksfilterslibcarbonmodelsembeddings_and_chunks_filtersrb"></a>
##### pagination: [`Pagination`](./lib/carbon/models/pagination.rb)<a id="pagination-paginationlibcarbonmodelspaginationrb"></a>
##### order_by: [`EmbeddingsAndChunksOrderByColumns`](./lib/carbon/models/embeddings_and_chunks_order_by_columns.rb)<a id="order_by-embeddingsandchunksorderbycolumnslibcarbonmodelsembeddings_and_chunks_order_by_columnsrb"></a>
##### order_dir: [`OrderDir`](./lib/carbon/models/order_dir.rb)<a id="order_dir-orderdirlibcarbonmodelsorder_dirrb"></a>
##### include_vectors: `Boolean`<a id="include_vectors-boolean"></a>
#### 🔄 Return<a id="🔄-return"></a>

[EmbeddingsAndChunksResponse](./lib/carbon/models/embeddings_and_chunks_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/text_chunks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.embeddings.upload_chunks_and_embeddings`<a id="carbonembeddingsupload_chunks_and_embeddings"></a>

Upload Chunks And Embeddings

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.embeddings.upload_chunks_and_embeddings(
  embedding_model: "OPENAI",
  chunks_and_embeddings: [
        {
            "file_id" => 1,
            "chunks_and_embeddings" => [
                {
                    "chunk_number" => 1,
                    "chunk" => "chunk_example",
                    "embedding" => [
                        3.14
                    ],
                }
            ],
        }
    ],
  overwrite_existing: false,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### embedding_model: [`EmbeddingGenerators`](./lib/carbon/models/embedding_generators.rb)<a id="embedding_model-embeddinggeneratorslibcarbonmodelsembedding_generatorsrb"></a>
##### chunks_and_embeddings: Array<[`SingleChunksAndEmbeddingsUploadInput`](./lib/carbon/models/single_chunks_and_embeddings_upload_input.rb)><a id="chunks_and_embeddings-array"></a>
##### overwrite_existing: `Boolean`<a id="overwrite_existing-boolean"></a>
#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./lib/carbon/models/generic_success_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/upload_chunks_and_embeddings` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.create_user_file_tags`<a id="carbonfilescreate_user_file_tags"></a>

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

```ruby
result = carbon.files.create_user_file_tags(
  tags: {
        "key": "string_example",
    },
  organization_user_file_id: 1,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tags: Hash<string, [`Tags1`](./lib/carbon/models/tags1.rb)><a id="tags-hash"></a>
##### organization_user_file_id: `Integer`<a id="organization_user_file_id-integer"></a>
#### 🔄 Return<a id="🔄-return"></a>

[UserFile](./lib/carbon/models/user_file.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/create_user_file_tags` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.delete`<a id="carbonfilesdelete"></a>

Delete File Endpoint

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.files.delete(
  file_id: 1,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### file_id: `Integer`<a id="file_id-integer"></a>
#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./lib/carbon/models/generic_success_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/deletefile/{file_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.delete_file_tags`<a id="carbonfilesdelete_file_tags"></a>

Delete File Tags

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.files.delete_file_tags(
  tags: [
        "string_example"
    ],
  organization_user_file_id: 1,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tags: Array<`String`><a id="tags-array"></a>
##### organization_user_file_id: `Integer`<a id="organization_user_file_id-integer"></a>
#### 🔄 Return<a id="🔄-return"></a>

[UserFile](./lib/carbon/models/user_file.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/delete_user_file_tags` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.delete_many`<a id="carbonfilesdelete_many"></a>

Delete Files Endpoint

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.files.delete_many(
  file_ids: [
        1
    ],
  sync_statuses: [
        "string_example"
    ],
  delete_non_synced_only: false,
  send_webhook: false,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### file_ids: Array<`Integer`><a id="file_ids-array"></a>
##### sync_statuses: Array<[`ExternalFileSyncStatuses`](./lib/carbon/models/external_file_sync_statuses.rb)><a id="sync_statuses-array"></a>
##### delete_non_synced_only: `Boolean`<a id="delete_non_synced_only-boolean"></a>
##### send_webhook: `Boolean`<a id="send_webhook-boolean"></a>
#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./lib/carbon/models/generic_success_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/delete_files` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.get_parsed_file`<a id="carbonfilesget_parsed_file"></a>
![Deprecated](https://img.shields.io/badge/deprecated-yellow)

This route is deprecated. Use `/user_files_v2` instead.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.files.get_parsed_file(
  file_id: 1,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### file_id: `Integer`<a id="file_id-integer"></a>
#### 🔄 Return<a id="🔄-return"></a>

[PresignedURLResponse](./lib/carbon/models/presigned_url_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/parsed_file/{file_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.get_raw_file`<a id="carbonfilesget_raw_file"></a>
![Deprecated](https://img.shields.io/badge/deprecated-yellow)

This route is deprecated. Use `/user_files_v2` instead.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.files.get_raw_file(
  file_id: 1,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### file_id: `Integer`<a id="file_id-integer"></a>
#### 🔄 Return<a id="🔄-return"></a>

[PresignedURLResponse](./lib/carbon/models/presigned_url_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/raw_file/{file_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.query_user_files`<a id="carbonfilesquery_user_files"></a>

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

```ruby
result = carbon.files.query_user_files(
  pagination: {
        "limit" => 10,
        "offset" => 0,
    },
  order_by: "created_at",
  order_dir: "desc",
  filters: {
    },
  include_raw_file: true,
  include_parsed_text_file: true,
  include_additional_files: true,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pagination: [`Pagination`](./lib/carbon/models/pagination.rb)<a id="pagination-paginationlibcarbonmodelspaginationrb"></a>
##### order_by: [`OrganizationUserFilesToSyncOrderByTypes`](./lib/carbon/models/organization_user_files_to_sync_order_by_types.rb)<a id="order_by-organizationuserfilestosyncorderbytypeslibcarbonmodelsorganization_user_files_to_sync_order_by_typesrb"></a>
##### order_dir: [`OrderDir`](./lib/carbon/models/order_dir.rb)<a id="order_dir-orderdirlibcarbonmodelsorder_dirrb"></a>
##### filters: [`OrganizationUserFilesToSyncFilters`](./lib/carbon/models/organization_user_files_to_sync_filters.rb)<a id="filters-organizationuserfilestosyncfilterslibcarbonmodelsorganization_user_files_to_sync_filtersrb"></a>
##### include_raw_file: `Boolean`<a id="include_raw_file-boolean"></a>
##### include_parsed_text_file: `Boolean`<a id="include_parsed_text_file-boolean"></a>
##### include_additional_files: `Boolean`<a id="include_additional_files-boolean"></a>
#### 🔄 Return<a id="🔄-return"></a>

[UserFilesV2](./lib/carbon/models/user_files_v2.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/user_files_v2` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.query_user_files_deprecated`<a id="carbonfilesquery_user_files_deprecated"></a>
![Deprecated](https://img.shields.io/badge/deprecated-yellow)

This route is deprecated. Use `/user_files_v2` instead.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.files.query_user_files_deprecated(
  pagination: {
        "limit" => 10,
        "offset" => 0,
    },
  order_by: "created_at",
  order_dir: "desc",
  filters: {
    },
  include_raw_file: true,
  include_parsed_text_file: true,
  include_additional_files: true,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pagination: [`Pagination`](./lib/carbon/models/pagination.rb)<a id="pagination-paginationlibcarbonmodelspaginationrb"></a>
##### order_by: [`OrganizationUserFilesToSyncOrderByTypes`](./lib/carbon/models/organization_user_files_to_sync_order_by_types.rb)<a id="order_by-organizationuserfilestosyncorderbytypeslibcarbonmodelsorganization_user_files_to_sync_order_by_typesrb"></a>
##### order_dir: [`OrderDir`](./lib/carbon/models/order_dir.rb)<a id="order_dir-orderdirlibcarbonmodelsorder_dirrb"></a>
##### filters: [`OrganizationUserFilesToSyncFilters`](./lib/carbon/models/organization_user_files_to_sync_filters.rb)<a id="filters-organizationuserfilestosyncfilterslibcarbonmodelsorganization_user_files_to_sync_filtersrb"></a>
##### include_raw_file: `Boolean`<a id="include_raw_file-boolean"></a>
##### include_parsed_text_file: `Boolean`<a id="include_parsed_text_file-boolean"></a>
##### include_additional_files: `Boolean`<a id="include_additional_files-boolean"></a>
#### 🔄 Return<a id="🔄-return"></a>

[UserFile](./lib/carbon/models/user_file.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/user_files` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.resync`<a id="carbonfilesresync"></a>

Resync File

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.files.resync(
  file_id: 1,
  chunk_size: 1,
  chunk_overlap: 1,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### file_id: `Integer`<a id="file_id-integer"></a>
##### chunk_size: `Integer`<a id="chunk_size-integer"></a>
##### chunk_overlap: `Integer`<a id="chunk_overlap-integer"></a>
#### 🔄 Return<a id="🔄-return"></a>

[UserFile](./lib/carbon/models/user_file.rb)

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

```ruby
result = carbon.files.upload(
  file: File.open("path/to/file", "rb"),
  chunk_size: 1,
  chunk_overlap: 1,
  skip_embedding_generation: false,
  set_page_as_boundary: false,
  embedding_model: "OPENAI",
  use_ocr: false,
  generate_sparse_vectors: false,
  prepend_filename_to_chunks: false,
  max_items_per_chunk: 1,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### file: `File`<a id="file-file"></a>
##### chunk_size: `Integer`<a id="chunk_size-integer"></a>
Chunk size in tiktoken tokens to be used when processing file.

##### chunk_overlap: `Integer`<a id="chunk_overlap-integer"></a>
Chunk overlap in tiktoken tokens to be used when processing file.

##### skip_embedding_generation: `Boolean`<a id="skip_embedding_generation-boolean"></a>
Flag to control whether or not embeddings should be generated and stored when
processing file.

##### set_page_as_boundary: `Boolean`<a id="set_page_as_boundary-boolean"></a>
Flag to control whether or not to set the a page's worth of content as the
maximum amount of content that can appear in a chunk. Only valid for PDFs. See
description route description for more information.

##### embedding_model: [`TextEmbeddingGenerators`](./lib/carbon/models/text_embedding_generators.rb)<a id="embedding_model-textembeddinggeneratorslibcarbonmodelstext_embedding_generatorsrb"></a>
Embedding model that will be used to embed file chunks.

##### use_ocr: `Boolean`<a id="use_ocr-boolean"></a>
Whether or not to use OCR when processing files. Only valid for PDFs. Useful for
documents with tables, images, and/or scanned text.

##### generate_sparse_vectors: `Boolean`<a id="generate_sparse_vectors-boolean"></a>
Whether or not to generate sparse vectors for the file. This is *required* for
the file to be a candidate for hybrid search.

##### prepend_filename_to_chunks: `Boolean`<a id="prepend_filename_to_chunks-boolean"></a>
Whether or not to prepend the file's name to chunks.

##### max_items_per_chunk: `Integer`<a id="max_items_per_chunk-integer"></a>
Number of objects per chunk. For json files only.

#### 🔄 Return<a id="🔄-return"></a>

[UserFile](./lib/carbon/models/user_file.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/uploadfile` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.upload_from_url`<a id="carbonfilesupload_from_url"></a>

Create Upload File From Url

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.files.upload_from_url(
  url: "string_example",
  file_name: "string_example",
  chunk_size: 1,
  chunk_overlap: 1,
  skip_embedding_generation: false,
  set_page_as_boundary: false,
  embedding_model: "OPENAI",
  generate_sparse_vectors: false,
  use_textract: false,
  prepend_filename_to_chunks: false,
  max_items_per_chunk: 1,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `String`<a id="url-string"></a>
##### file_name: `String`<a id="file_name-string"></a>
##### chunk_size: `Integer`<a id="chunk_size-integer"></a>
##### chunk_overlap: `Integer`<a id="chunk_overlap-integer"></a>
##### skip_embedding_generation: `Boolean`<a id="skip_embedding_generation-boolean"></a>
##### set_page_as_boundary: `Boolean`<a id="set_page_as_boundary-boolean"></a>
##### embedding_model: [`EmbeddingGenerators`](./lib/carbon/models/embedding_generators.rb)<a id="embedding_model-embeddinggeneratorslibcarbonmodelsembedding_generatorsrb"></a>
##### generate_sparse_vectors: `Boolean`<a id="generate_sparse_vectors-boolean"></a>
##### use_textract: `Boolean`<a id="use_textract-boolean"></a>
##### prepend_filename_to_chunks: `Boolean`<a id="prepend_filename_to_chunks-boolean"></a>
##### max_items_per_chunk: `Integer`<a id="max_items_per_chunk-integer"></a>
#### 🔄 Return<a id="🔄-return"></a>

[UserFile](./lib/carbon/models/user_file.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/upload_file_from_url` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.files.upload_text`<a id="carbonfilesupload_text"></a>

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

```ruby
result = carbon.files.upload_text(
  contents: "string_example",
  name: "string_example",
  chunk_size: 1,
  chunk_overlap: 1,
  skip_embedding_generation: false,
  overwrite_file_id: 1,
  embedding_model: "OPENAI",
  generate_sparse_vectors: false,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contents: `String`<a id="contents-string"></a>
##### name: `String`<a id="name-string"></a>
##### chunk_size: `Integer`<a id="chunk_size-integer"></a>
##### chunk_overlap: `Integer`<a id="chunk_overlap-integer"></a>
##### skip_embedding_generation: `Boolean`<a id="skip_embedding_generation-boolean"></a>
##### overwrite_file_id: `Integer`<a id="overwrite_file_id-integer"></a>
##### embedding_model: [`EmbeddingGeneratorsNullable`](./lib/carbon/models/embedding_generators_nullable.rb)<a id="embedding_model-embeddinggeneratorsnullablelibcarbonmodelsembedding_generators_nullablerb"></a>
##### generate_sparse_vectors: `Boolean`<a id="generate_sparse_vectors-boolean"></a>
#### 🔄 Return<a id="🔄-return"></a>

[UserFile](./lib/carbon/models/user_file.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/upload_text` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.health.check`<a id="carbonhealthcheck"></a>

Health

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.health.check
p result
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.connect_freshdesk`<a id="carbonintegrationsconnect_freshdesk"></a>

Refer this article to obtain an API key https://support.freshdesk.com/en/support/solutions/articles/215517.
Make sure that your API key has the permission to read solutions from your account and you are on a <b>paid</b> plan.
Once you have an API key, you can make a request to this endpoint along with your freshdesk domain. This will 
trigger an automatic sync of the articles in your "solutions" tab. Additional parameters below can be used to associate 
data with the synced articles or modify the sync behavior.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.integrations.connect_freshdesk(
  domain: "string_example",
  api_key: "string_example",
  tags: {},
  chunk_size: 1500,
  chunk_overlap: 20,
  skip_embedding_generation: false,
  embedding_model: "OPENAI",
  generate_sparse_vectors: false,
  prepend_filename_to_chunks: false,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### domain: `String`<a id="domain-string"></a>
##### api_key: `String`<a id="api_key-string"></a>
##### tags: `Object`<a id="tags-object"></a>
##### chunk_size: `Integer`<a id="chunk_size-integer"></a>
##### chunk_overlap: `Integer`<a id="chunk_overlap-integer"></a>
##### skip_embedding_generation: `Boolean`<a id="skip_embedding_generation-boolean"></a>
##### embedding_model: [`EmbeddingGeneratorsNullable`](./lib/carbon/models/embedding_generators_nullable.rb)<a id="embedding_model-embeddinggeneratorsnullablelibcarbonmodelsembedding_generators_nullablerb"></a>
##### generate_sparse_vectors: `Boolean`<a id="generate_sparse_vectors-boolean"></a>
##### prepend_filename_to_chunks: `Boolean`<a id="prepend_filename_to_chunks-boolean"></a>
#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./lib/carbon/models/generic_success_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/freshdesk` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.connect_gitbook`<a id="carbonintegrationsconnect_gitbook"></a>

You will need an access token to connect your Gitbook account. Note that the permissions will be defined by the user 
generating access token so make sure you have the permission to access spaces you will be syncing. 
Refer this article for more details https://developer.gitbook.com/gitbook-api/authentication. Additionally, you
need to specify the name of organization you will be syncing data from.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.integrations.connect_gitbook(
  organization: "string_example",
  access_token: "string_example",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### organization: `String`<a id="organization-string"></a>
##### access_token: `String`<a id="access_token-string"></a>
#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./lib/carbon/models/generic_success_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/gitbook` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.create_aws_iam_user`<a id="carbonintegrationscreate_aws_iam_user"></a>

Create a new IAM user with permissions to:
<ol>
<li>List all buckets.</li>
<li>Read from the specific buckets and objects to sync with Carbon. Ensure any future buckets or objects carry 
the same permissions.</li>
</ol>
Once created, generate an access key for this user and share the credentials with us. We recommend testing this key beforehand.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.integrations.create_aws_iam_user(
  access_key: "string_example",
  access_key_secret: "string_example",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### access_key: `String`<a id="access_key-string"></a>
##### access_key_secret: `String`<a id="access_key_secret-string"></a>
#### 🔄 Return<a id="🔄-return"></a>

[OrganizationUserDataSourceAPI](./lib/carbon/models/organization_user_data_source_api.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/s3` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.get_oauth_url`<a id="carbonintegrationsget_oauth_url"></a>

Get Oauth Url

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.integrations.get_oauth_url(
  service: "GOOGLE_DRIVE",
  tags: None,
  scope: "string_example",
  chunk_size: 1500,
  chunk_overlap: 20,
  skip_embedding_generation: false,
  embedding_model: "OPENAI",
  zendesk_subdomain: "string_example",
  microsoft_tenant: "string_example",
  sharepoint_site_name: "string_example",
  confluence_subdomain: "string_example",
  generate_sparse_vectors: false,
  prepend_filename_to_chunks: false,
  max_items_per_chunk: 1,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### service: [`DataSourceType`](./lib/carbon/models/data_source_type.rb)<a id="service-datasourcetypelibcarbonmodelsdata_source_typerb"></a>
##### tags: `Object`<a id="tags-object"></a>
##### scope: `String`<a id="scope-string"></a>
##### chunk_size: `Integer`<a id="chunk_size-integer"></a>
##### chunk_overlap: `Integer`<a id="chunk_overlap-integer"></a>
##### skip_embedding_generation: `Boolean`<a id="skip_embedding_generation-boolean"></a>
##### embedding_model: [`EmbeddingGeneratorsNullable`](./lib/carbon/models/embedding_generators_nullable.rb)<a id="embedding_model-embeddinggeneratorsnullablelibcarbonmodelsembedding_generators_nullablerb"></a>
##### zendesk_subdomain: `String`<a id="zendesk_subdomain-string"></a>
##### microsoft_tenant: `String`<a id="microsoft_tenant-string"></a>
##### sharepoint_site_name: `String`<a id="sharepoint_site_name-string"></a>
##### confluence_subdomain: `String`<a id="confluence_subdomain-string"></a>
##### generate_sparse_vectors: `Boolean`<a id="generate_sparse_vectors-boolean"></a>
##### prepend_filename_to_chunks: `Boolean`<a id="prepend_filename_to_chunks-boolean"></a>
##### max_items_per_chunk: `Integer`<a id="max_items_per_chunk-integer"></a>
#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/oauth_url` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.list_confluence_pages`<a id="carbonintegrationslist_confluence_pages"></a>

To begin listing a user's Confluence pages, at least a `data_source_id` of a connected
Confluence account must be specified. This base request returns a list of root pages for
every space the user has access to in a Confluence instance. To traverse further down
the user's page directory, additional requests to this endpoint can be made with the same
`data_source_id` and with `parent_id` set to the id of page from a previous request. For
convenience, the `has_children` property in each directory item in the response list will
flag which pages will return non-empty lists of pages when set as the `parent_id`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.integrations.list_confluence_pages(
  data_source_id: 1,
  parent_id: "string_example",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data_source_id: `Integer`<a id="data_source_id-integer"></a>
##### parent_id: `String`<a id="parent_id-string"></a>
#### 🔄 Return<a id="🔄-return"></a>

[ListResponse](./lib/carbon/models/list_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/confluence/list` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.list_data_source_items`<a id="carbonintegrationslist_data_source_items"></a>

List Data Source Items

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.integrations.list_data_source_items(
  data_source_id: 1,
  parent_id: "string_example",
  pagination: {
        "limit" => 10,
        "offset" => 0,
    },
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data_source_id: `Integer`<a id="data_source_id-integer"></a>
##### parent_id: `String`<a id="parent_id-string"></a>
##### pagination: [`Pagination`](./lib/carbon/models/pagination.rb)<a id="pagination-paginationlibcarbonmodelspaginationrb"></a>
#### 🔄 Return<a id="🔄-return"></a>

[ListDataSourceItemsResponse](./lib/carbon/models/list_data_source_items_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/items/list` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.list_folders`<a id="carbonintegrationslist_folders"></a>

After connecting your Outlook account, you can use this endpoint to list all of your folders on outlook. This includes 
both system folders like "inbox" and user created folders.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.integrations.list_folders
p result
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/outlook/user_folders` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.list_gitbook_spaces`<a id="carbonintegrationslist_gitbook_spaces"></a>

After connecting your Gitbook account, you can use this endpoint to list all of your spaces under current organization.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.integrations.list_gitbook_spaces(
  data_source_id: 1,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data_source_id: `Integer`<a id="data_source_id-integer"></a>
#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/gitbook/spaces` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.list_labels`<a id="carbonintegrationslist_labels"></a>

After connecting your Gmail account, you can use this endpoint to list all of your labels. User created labels
will have the type "user" and Gmail's default labels will have the type "system"

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.integrations.list_labels
p result
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/gmail/user_labels` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.sync_confluence`<a id="carbonintegrationssync_confluence"></a>

After listing pages in a user's Confluence account, the set of selected page `ids` and the
connected account's `data_source_id` can be passed into this endpoint to sync them into
Carbon. Additional parameters listed below can be used to associate data to the selected
pages or alter the behavior of the sync.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.integrations.sync_confluence(
  data_source_id: 1,
  ids: [
        "string_example"
    ],
  tags: {},
  chunk_size: 1500,
  chunk_overlap: 20,
  skip_embedding_generation: false,
  embedding_model: "OPENAI",
  generate_sparse_vectors: false,
  prepend_filename_to_chunks: false,
  max_items_per_chunk: 1,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data_source_id: `Integer`<a id="data_source_id-integer"></a>
##### ids: Array<`String`><a id="ids-array"></a>
##### tags: `Object`<a id="tags-object"></a>
##### chunk_size: `Integer`<a id="chunk_size-integer"></a>
##### chunk_overlap: `Integer`<a id="chunk_overlap-integer"></a>
##### skip_embedding_generation: `Boolean`<a id="skip_embedding_generation-boolean"></a>
##### embedding_model: [`EmbeddingGeneratorsNullable`](./lib/carbon/models/embedding_generators_nullable.rb)<a id="embedding_model-embeddinggeneratorsnullablelibcarbonmodelsembedding_generators_nullablerb"></a>
##### generate_sparse_vectors: `Boolean`<a id="generate_sparse_vectors-boolean"></a>
##### prepend_filename_to_chunks: `Boolean`<a id="prepend_filename_to_chunks-boolean"></a>
##### max_items_per_chunk: `Integer`<a id="max_items_per_chunk-integer"></a>
#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./lib/carbon/models/generic_success_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/confluence/sync` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.sync_data_source_items`<a id="carbonintegrationssync_data_source_items"></a>

Sync Data Source Items

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.integrations.sync_data_source_items(
  data_source_id: 1,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data_source_id: `Integer`<a id="data_source_id-integer"></a>
#### 🔄 Return<a id="🔄-return"></a>

[OrganizationUserDataSourceAPI](./lib/carbon/models/organization_user_data_source_api.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/items/sync` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.sync_files`<a id="carbonintegrationssync_files"></a>

Sync Files

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.integrations.sync_files(
  data_source_id: 1,
  ids: [
        "string_example"
    ],
  tags: {},
  chunk_size: 1500,
  chunk_overlap: 20,
  skip_embedding_generation: false,
  embedding_model: "OPENAI",
  generate_sparse_vectors: false,
  prepend_filename_to_chunks: false,
  max_items_per_chunk: 1,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data_source_id: `Integer`<a id="data_source_id-integer"></a>
##### ids: Array<`String`><a id="ids-array"></a>
##### tags: `Object`<a id="tags-object"></a>
##### chunk_size: `Integer`<a id="chunk_size-integer"></a>
##### chunk_overlap: `Integer`<a id="chunk_overlap-integer"></a>
##### skip_embedding_generation: `Boolean`<a id="skip_embedding_generation-boolean"></a>
##### embedding_model: [`EmbeddingGeneratorsNullable`](./lib/carbon/models/embedding_generators_nullable.rb)<a id="embedding_model-embeddinggeneratorsnullablelibcarbonmodelsembedding_generators_nullablerb"></a>
##### generate_sparse_vectors: `Boolean`<a id="generate_sparse_vectors-boolean"></a>
##### prepend_filename_to_chunks: `Boolean`<a id="prepend_filename_to_chunks-boolean"></a>
##### max_items_per_chunk: `Integer`<a id="max_items_per_chunk-integer"></a>
#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./lib/carbon/models/generic_success_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/files/sync` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.sync_gitbook`<a id="carbonintegrationssync_gitbook"></a>

You can sync upto 20 Gitbook spaces at a time using this endpoint. Additional parameters below can be used to associate 
data with the synced pages or modify the sync behavior.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.integrations.sync_gitbook(
  space_ids: [
        "string_example"
    ],
  data_source_id: 1,
  tags: {},
  chunk_size: 1500,
  chunk_overlap: 20,
  skip_embedding_generation: false,
  embedding_model: "OPENAI",
  generate_sparse_vectors: false,
  prepend_filename_to_chunks: false,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### space_ids: Array<`String`><a id="space_ids-array"></a>
##### data_source_id: `Integer`<a id="data_source_id-integer"></a>
##### tags: `Object`<a id="tags-object"></a>
##### chunk_size: `Integer`<a id="chunk_size-integer"></a>
##### chunk_overlap: `Integer`<a id="chunk_overlap-integer"></a>
##### skip_embedding_generation: `Boolean`<a id="skip_embedding_generation-boolean"></a>
##### embedding_model: [`EmbeddingGenerators`](./lib/carbon/models/embedding_generators.rb)<a id="embedding_model-embeddinggeneratorslibcarbonmodelsembedding_generatorsrb"></a>
##### generate_sparse_vectors: `Boolean`<a id="generate_sparse_vectors-boolean"></a>
##### prepend_filename_to_chunks: `Boolean`<a id="prepend_filename_to_chunks-boolean"></a>
#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/gitbook/sync` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.sync_gmail`<a id="carbonintegrationssync_gmail"></a>

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

```ruby
result = carbon.integrations.sync_gmail(
  filters: {},
  tags: {},
  chunk_size: 1500,
  chunk_overlap: 20,
  skip_embedding_generation: false,
  embedding_model: "OPENAI",
  generate_sparse_vectors: false,
  prepend_filename_to_chunks: false,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filters: `Object`<a id="filters-object"></a>
##### tags: `Object`<a id="tags-object"></a>
##### chunk_size: `Integer`<a id="chunk_size-integer"></a>
##### chunk_overlap: `Integer`<a id="chunk_overlap-integer"></a>
##### skip_embedding_generation: `Boolean`<a id="skip_embedding_generation-boolean"></a>
##### embedding_model: [`EmbeddingGenerators`](./lib/carbon/models/embedding_generators.rb)<a id="embedding_model-embeddinggeneratorslibcarbonmodelsembedding_generatorsrb"></a>
##### generate_sparse_vectors: `Boolean`<a id="generate_sparse_vectors-boolean"></a>
##### prepend_filename_to_chunks: `Boolean`<a id="prepend_filename_to_chunks-boolean"></a>
#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./lib/carbon/models/generic_success_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/gmail/sync` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.sync_outlook`<a id="carbonintegrationssync_outlook"></a>

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

```ruby
result = carbon.integrations.sync_outlook(
  filters: {},
  tags: {},
  folder: "Inbox",
  chunk_size: 1500,
  chunk_overlap: 20,
  skip_embedding_generation: false,
  embedding_model: "OPENAI",
  generate_sparse_vectors: false,
  prepend_filename_to_chunks: false,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filters: `Object`<a id="filters-object"></a>
##### tags: `Object`<a id="tags-object"></a>
##### folder: `String`<a id="folder-string"></a>
##### chunk_size: `Integer`<a id="chunk_size-integer"></a>
##### chunk_overlap: `Integer`<a id="chunk_overlap-integer"></a>
##### skip_embedding_generation: `Boolean`<a id="skip_embedding_generation-boolean"></a>
##### embedding_model: [`EmbeddingGenerators`](./lib/carbon/models/embedding_generators.rb)<a id="embedding_model-embeddinggeneratorslibcarbonmodelsembedding_generatorsrb"></a>
##### generate_sparse_vectors: `Boolean`<a id="generate_sparse_vectors-boolean"></a>
##### prepend_filename_to_chunks: `Boolean`<a id="prepend_filename_to_chunks-boolean"></a>
#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./lib/carbon/models/generic_success_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/outlook/sync` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.sync_rss_feed`<a id="carbonintegrationssync_rss_feed"></a>

Rss Feed

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.integrations.sync_rss_feed(
  url: "string_example",
  tags: {},
  chunk_size: 1500,
  chunk_overlap: 20,
  skip_embedding_generation: false,
  embedding_model: "OPENAI",
  generate_sparse_vectors: false,
  prepend_filename_to_chunks: false,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `String`<a id="url-string"></a>
##### tags: `Object`<a id="tags-object"></a>
##### chunk_size: `Integer`<a id="chunk_size-integer"></a>
##### chunk_overlap: `Integer`<a id="chunk_overlap-integer"></a>
##### skip_embedding_generation: `Boolean`<a id="skip_embedding_generation-boolean"></a>
##### embedding_model: [`EmbeddingGenerators`](./lib/carbon/models/embedding_generators.rb)<a id="embedding_model-embeddinggeneratorslibcarbonmodelsembedding_generatorsrb"></a>
##### generate_sparse_vectors: `Boolean`<a id="generate_sparse_vectors-boolean"></a>
##### prepend_filename_to_chunks: `Boolean`<a id="prepend_filename_to_chunks-boolean"></a>
#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./lib/carbon/models/generic_success_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/rss_feed` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.integrations.sync_s3_files`<a id="carbonintegrationssync_s3_files"></a>

After optionally loading the items via /integrations/items/sync and integrations/items/list, use the bucket name 
and object key as the ID in this endpoint to sync them into Carbon. Additional parameters below can associate 
data with the selected items or modify the sync behavior

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.integrations.sync_s3_files(
  ids: [
        {
        }
    ],
  tags: {},
  chunk_size: 1500,
  chunk_overlap: 20,
  skip_embedding_generation: false,
  embedding_model: "OPENAI",
  generate_sparse_vectors: false,
  prepend_filename_to_chunks: false,
  max_items_per_chunk: 1,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: Array<[`S3GetFileInput`](./lib/carbon/models/s3_get_file_input.rb)><a id="ids-array"></a>
##### tags: `Object`<a id="tags-object"></a>
##### chunk_size: `Integer`<a id="chunk_size-integer"></a>
##### chunk_overlap: `Integer`<a id="chunk_overlap-integer"></a>
##### skip_embedding_generation: `Boolean`<a id="skip_embedding_generation-boolean"></a>
##### embedding_model: [`EmbeddingGenerators`](./lib/carbon/models/embedding_generators.rb)<a id="embedding_model-embeddinggeneratorslibcarbonmodelsembedding_generatorsrb"></a>
##### generate_sparse_vectors: `Boolean`<a id="generate_sparse_vectors-boolean"></a>
##### prepend_filename_to_chunks: `Boolean`<a id="prepend_filename_to_chunks-boolean"></a>
##### max_items_per_chunk: `Integer`<a id="max_items_per_chunk-integer"></a>
#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./lib/carbon/models/generic_success_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/integrations/s3/files` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.organizations.get`<a id="carbonorganizationsget"></a>

Get Organization

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.organizations.get
p result
```

#### 🔄 Return<a id="🔄-return"></a>

[OrganizationResponse](./lib/carbon/models/organization_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/organization` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.users.get`<a id="carbonusersget"></a>

User Endpoint

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.users.get(
  customer_id: "string_example",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customer_id: `String`<a id="customer_id-string"></a>
#### 🔄 Return<a id="🔄-return"></a>

[UserResponse](./lib/carbon/models/user_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/user` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.users.toggle_user_features`<a id="carbonuserstoggle_user_features"></a>

Toggle User Features

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.users.toggle_user_features(
  configuration_key_name: "string_example",
  value: {},
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### configuration_key_name: `String`<a id="configuration_key_name-string"></a>
##### value: `Object`<a id="value-object"></a>
#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./lib/carbon/models/generic_success_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/modify_user_configuration` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.utilities.fetch_urls`<a id="carbonutilitiesfetch_urls"></a>

Extracts all URLs from a webpage. 

Args:
    url (str): URL of the webpage

Returns:
    FetchURLsResponse: A response object with a list of URLs extracted from the webpage and the webpage content.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.utilities.fetch_urls(
  url: "url_example",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `String`<a id="url-string"></a>
#### 🔄 Return<a id="🔄-return"></a>

[FetchURLsResponse](./lib/carbon/models/fetch_urls_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/fetch_urls` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.utilities.fetch_youtube_transcripts`<a id="carbonutilitiesfetch_youtube_transcripts"></a>

Fetches english transcripts from YouTube videos.

Args:
    id (str): The ID of the YouTube video. 
    raw (bool): Whether to return the raw transcript or not. Defaults to False.

Returns:
    dict: A dictionary with the transcript of the YouTube video.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.utilities.fetch_youtube_transcripts(
  id: "id_example",
  raw: false,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `String`<a id="id-string"></a>
##### raw: `Boolean`<a id="raw-boolean"></a>
#### 🔄 Return<a id="🔄-return"></a>

[YoutubeTranscriptResponse](./lib/carbon/models/youtube_transcript_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/fetch_youtube_transcript` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.utilities.process_sitemap`<a id="carbonutilitiesprocess_sitemap"></a>

Retrieves all URLs from a sitemap, which can subsequently be utilized with our `web_scrape` endpoint.

<!--Args:
    url (str): URL of the sitemap

Returns:
    dict: A dictionary with a list of URLs extracted from the sitemap.-->

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.utilities.process_sitemap(
  url: "url_example",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `String`<a id="url-string"></a>
#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/process_sitemap` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.utilities.scrape_sitemap`<a id="carbonutilitiesscrape_sitemap"></a>

Extracts all URLs from a sitemap and performs a web scrape on each of them.

Args:
    sitemap_url (str): URL of the sitemap

Returns:
    dict: A response object with the status of the scraping job message.-->

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.utilities.scrape_sitemap(
  url: "string_example",
  tags: {
        "key": "string_example",
    },
  max_pages_to_scrape: 1,
  chunk_size: 1500,
  chunk_overlap: 20,
  skip_embedding_generation: false,
  enable_auto_sync: false,
  generate_sparse_vectors: false,
  prepend_filename_to_chunks: false,
  html_tags_to_skip: [],
  css_classes_to_skip: [],
  css_selectors_to_skip: [],
  embedding_model: "OPENAI",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `String`<a id="url-string"></a>
##### tags: Hash<string, [`Tags1`](./lib/carbon/models/tags1.rb)><a id="tags-hash"></a>
##### max_pages_to_scrape: `Integer`<a id="max_pages_to_scrape-integer"></a>
##### chunk_size: `Integer`<a id="chunk_size-integer"></a>
##### chunk_overlap: `Integer`<a id="chunk_overlap-integer"></a>
##### skip_embedding_generation: `Boolean`<a id="skip_embedding_generation-boolean"></a>
##### enable_auto_sync: `Boolean`<a id="enable_auto_sync-boolean"></a>
##### generate_sparse_vectors: `Boolean`<a id="generate_sparse_vectors-boolean"></a>
##### prepend_filename_to_chunks: `Boolean`<a id="prepend_filename_to_chunks-boolean"></a>
##### html_tags_to_skip: Array<`String`><a id="html_tags_to_skip-array"></a>
##### css_classes_to_skip: Array<`String`><a id="css_classes_to_skip-array"></a>
##### css_selectors_to_skip: Array<`String`><a id="css_selectors_to_skip-array"></a>
##### embedding_model: [`EmbeddingGenerators`](./lib/carbon/models/embedding_generators.rb)<a id="embedding_model-embeddinggeneratorslibcarbonmodelsembedding_generatorsrb"></a>
#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/scrape_sitemap` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.utilities.scrape_web`<a id="carbonutilitiesscrape_web"></a>

Conduct a web scrape on a given webpage URL. Our web scraper is fully compatible with JavaScript and supports recursion depth, enabling you to efficiently extract all content from the target website.

<!--Args:
    scraping_requests (List[WebscrapeRequest]): A list of WebscrapeRequest objects.

    
Returns:
    dict: A response object with the status of the scraping job message.-->

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.utilities.scrape_web(
  body: [
        {
            "url" => "url_example",
            "recursion_depth" => 3,
            "max_pages_to_scrape" => 100,
            "chunk_size" => 1500,
            "chunk_overlap" => 20,
            "skip_embedding_generation" => false,
            "enable_auto_sync" => false,
            "generate_sparse_vectors" => false,
            "prepend_filename_to_chunks" => false,
            "html_tags_to_skip" => [],
            "css_classes_to_skip" => [],
            "css_selectors_to_skip" => [],
            "embedding_model" => "OPENAI",
        }
    ],
)
p result
```

#### ⚙️ body<a id="⚙️-body"></a>

Array<[`WebscrapeRequest`](./lib/carbon/models/webscrape_request.rb)>
#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/web_scrape` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.utilities.search_urls`<a id="carbonutilitiessearch_urls"></a>

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

```ruby
result = carbon.utilities.search_urls(
  query: "query_example",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### query: `String`<a id="query-string"></a>
#### 🔄 Return<a id="🔄-return"></a>

[FetchURLsResponse](./lib/carbon/models/fetch_urls_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/search_urls` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.webhooks.add_url`<a id="carbonwebhooksadd_url"></a>

Add Webhook Url

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.webhooks.add_url(
  url: "string_example",
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `String`<a id="url-string"></a>
#### 🔄 Return<a id="🔄-return"></a>

[Webhook](./lib/carbon/models/webhook.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/add_webhook` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.webhooks.delete_url`<a id="carbonwebhooksdelete_url"></a>

Delete Webhook Url

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.webhooks.delete_url(
  webhook_id: 1,
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### webhook_id: `Integer`<a id="webhook_id-integer"></a>
#### 🔄 Return<a id="🔄-return"></a>

[GenericSuccessResponse](./lib/carbon/models/generic_success_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/delete_webhook/{webhook_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `carbon.webhooks.urls`<a id="carbonwebhooksurls"></a>

Webhook Urls

#### 🛠️ Usage<a id="🛠️-usage"></a>

```ruby
result = carbon.webhooks.urls(
  pagination: {
        "limit" => 10,
        "offset" => 0,
    },
  order_by: "created_at",
  order_dir: "desc",
  filters: {
        "ids" => [],
    },
)
p result
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### pagination: [`Pagination`](./lib/carbon/models/pagination.rb)<a id="pagination-paginationlibcarbonmodelspaginationrb"></a>
##### order_by: [`WebhookOrderByColumns`](./lib/carbon/models/webhook_order_by_columns.rb)<a id="order_by-webhookorderbycolumnslibcarbonmodelswebhook_order_by_columnsrb"></a>
##### order_dir: [`OrderDir`](./lib/carbon/models/order_dir.rb)<a id="order_dir-orderdirlibcarbonmodelsorder_dirrb"></a>
##### filters: [`WebhookFilters`](./lib/carbon/models/webhook_filters.rb)<a id="filters-webhookfilterslibcarbonmodelswebhook_filtersrb"></a>
#### 🔄 Return<a id="🔄-return"></a>

[WebhookQueryResponse](./lib/carbon/models/webhook_query_response.rb)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
