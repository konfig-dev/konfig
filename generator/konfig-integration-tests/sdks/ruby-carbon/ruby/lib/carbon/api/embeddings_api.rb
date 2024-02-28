=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'cgi'

module Carbon
  class EmbeddingsApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end

    # Embeddings
    #
    # For pre-filtering documents, using `tags_v2` is preferred to using `tags` (which is now deprecated). If both `tags_v2`
    # and `tags` are specified, `tags` is ignored. `tags_v2` enables
    # building complex filters through the use of "AND", "OR", and negation logic. Take the below input as an example:
    # ```json
    # {
    #     "OR": [
    #         {
    #             "key": "subject",
    #             "value": "holy-bible",
    #             "negate": false
    #         },
    #         {
    #             "key": "person-of-interest",
    #             "value": "jesus christ",
    #             "negate": false
    #         },
    #         {
    #             "key": "genre",
    #             "value": "religion",
    #             "negate": true
    #         }
    #         {
    #             "AND": [
    #                 {
    #                     "key": "subject",
    #                     "value": "tao-te-ching",
    #                     "negate": false
    #                 },
    #                 {
    #                     "key": "author",
    #                     "value": "lao-tzu",
    #                     "negate": false
    #                 }
    #             ]
    #         }
    #     ]
    # }
    # ```
    # In this case, files will be filtered such that:
    # 1. "subject" = "holy-bible" OR
    # 2. "person-of-interest" = "jesus christ" OR
    # 3. "genre" != "religion" OR
    # 4. "subject" = "tao-te-ching" AND "author" = "lao-tzu"
    # 
    # Note that the top level of the query must be either an "OR" or "AND" array. Currently, nesting is limited to 3.
    # For tag blocks (those with "key", "value", and "negate" keys), the following typing rules apply:
    # 1. "key" isn't optional and must be a `string`
    # 2. "value" isn't optional and can be `any` or list[`any`]
    # 3. "negate" is optional and must be `true` or `false`. If present and `true`, then the filter block is negated in
    # the resulting query. It is `false` by default.
    # 
    # 
    # When querying embeddings, you can optionally specify the `media_type` parameter in your request. By default (if
    # not set), it is equal to "TEXT". This means that the query will be performed over files that have
    # been parsed as text (for now, this covers all files except image files). If it is equal to "IMAGE",
    # the query will be performed over image files (for now, `.jpg` and `.png` files). You can think of this
    # field as an additional filter on top of any filters set in `file_ids` and
    # 
    # 
    # When `hybrid_search` is set to true, a combination of keyword search and semantic search are used to rank
    # and select candidate embeddings during information retrieval. By default, these search methods are weighted
    # equally during the ranking process. To adjust the weight (or "importance") of each search method, you can use
    # the `hybrid_search_tuning_parameters` property. The description for the different tuning parameters are:
    # - `weight_a`: weight to assign to semantic search
    # - `weight_b`: weight to assign to keyword search
    # 
    # You must ensure that `sum(weight_a, weight_b,..., weight_n)` for all *n* weights is equal to 1. The equality
    # has an error tolerance of 0.001 to account for possible floating point issues.
    # 
    # In order to use hybrid search for a customer across a set of documents, two flags need to be enabled:
    # 1. Use the `/modify_user_configuration` endpoint to to enable `sparse_vectors` for the customer. The payload
    # body for this request is below:
    # ```
    # {
    #   "configuration_key_name": "sparse_vectors",
    #   "value": {
    #     "enabled": true
    #   }
    # }
    # ```
    # 2. Make sure hybrid search is enabled for the documents across which you want to perform the search. For the
    # `/uploadfile` endpoint, this can be done by setting the following query parameter: `generate_sparse_vectors=true`
    # 
    # 
    # Carbon supports multiple models for use in generating embeddings for files. For images, we support Vertex AI's
    # multimodal model; for text, we support OpenAI's `text-embedding-ada-002` and Cohere's embed-multilingual-v3.0.
    # The model can be specified via the `embedding_model` parameter (in the POST body for `/embeddings`, and a query 
    # parameter in `/uploadfile`). If no model is supplied, the `text-embedding-ada-002` is used by default. When performing
    # embedding queries, embeddings from files that used the specified model will be considered in the query.
    # For example, if files A and B have embeddings generated with `OPENAI`, and files C and D have embeddings generated with
    # `COHERE_MULTILINGUAL_V3`, then by default, queries will only consider files A and B. If `COHERE_MULTILINGUAL_V3` is
    # specified as the `embedding_model` in `/embeddings`, then only files C and D will be considered. Make sure that
    # the set of all files you want considered for a query have embeddings generated via the same model. For now, **do not**
    # set `VERTEX_MULTIMODAL` as an `embedding_model`. This model is used automatically by Carbon when it detects an image file.
    #
    # @param query [String] Query for which to get related chunks and embeddings.
    # @param k [Integer] Number of related chunks to return.
    # @param tags [Hash<String, Tags1>] A set of tags to limit the search to. Deprecated and may be removed in the future.
    # @param query_vector [Array<Float>] Optional query vector for which to get related chunks and embeddings. It must have been generated by the same model used to generate the embeddings across which the search is being conducted. Cannot provide both `query` and `query_vector`.
    # @param file_ids [Array<Integer>] Optional list of file IDs to limit the search to
    # @param parent_file_ids [Array<Integer>] Optional list of parent file IDs to limit the search to. A parent file describes a file to which another file belongs (e.g. a folder)
    # @param tags_v2 [Object] A set of tags to limit the search to. Use this instead of `tags`, which is deprecated.
    # @param include_tags [Boolean] Flag to control whether or not to include tags for each chunk in the response.
    # @param include_vectors [Boolean] Flag to control whether or not to include embedding vectors in the response.
    # @param include_raw_file [Boolean] Flag to control whether or not to include a signed URL to the raw file containing each chunk in the response.
    # @param hybrid_search [Boolean] Flag to control whether or not to perform hybrid search.
    # @param hybrid_search_tuning_parameters [HybridSearchTuningParamsNullable] 
    # @param media_type [FileContentTypesNullable] Used to filter the kind of files (e.g. `TEXT` or `IMAGE`) over which to perform the search. Also plays a role in determining what embedding model is used to embed the query. If `IMAGE` is chosen as the media type, then the embedding model used will be an embedding model that is not text-only, *regardless* of what value is passed for `embedding_model`.
    # @param embedding_model [EmbeddingGeneratorsNullable] 
    # @param body [GetEmbeddingDocumentsBody] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_documents(query:, k:, tags: SENTINEL, query_vector: SENTINEL, file_ids: SENTINEL, parent_file_ids: SENTINEL, tags_v2: SENTINEL, include_tags: SENTINEL, include_vectors: SENTINEL, include_raw_file: SENTINEL, hybrid_search: SENTINEL, hybrid_search_tuning_parameters: SENTINEL, media_type: 'TEXT', embedding_model: 'OPENAI', extra: {})
      _body = {}
      _body[:tags] = tags if tags != SENTINEL
      _body[:query] = query if query != SENTINEL
      _body[:query_vector] = query_vector if query_vector != SENTINEL
      _body[:k] = k if k != SENTINEL
      _body[:file_ids] = file_ids if file_ids != SENTINEL
      _body[:parent_file_ids] = parent_file_ids if parent_file_ids != SENTINEL
      _body[:tags_v2] = tags_v2 if tags_v2 != SENTINEL
      _body[:include_tags] = include_tags if include_tags != SENTINEL
      _body[:include_vectors] = include_vectors if include_vectors != SENTINEL
      _body[:include_raw_file] = include_raw_file if include_raw_file != SENTINEL
      _body[:hybrid_search] = hybrid_search if hybrid_search != SENTINEL
      _body[:hybrid_search_tuning_parameters] = hybrid_search_tuning_parameters if hybrid_search_tuning_parameters != SENTINEL
      _body[:media_type] = media_type if media_type != SENTINEL
      _body[:embedding_model] = embedding_model if embedding_model != SENTINEL
      get_embedding_documents_body = _body
      api_response = get_documents_with_http_info_impl(get_embedding_documents_body, extra)
      api_response.data
    end

    # Embeddings
    #
    # For pre-filtering documents, using `tags_v2` is preferred to using `tags` (which is now deprecated). If both `tags_v2`
    # and `tags` are specified, `tags` is ignored. `tags_v2` enables
    # building complex filters through the use of "AND", "OR", and negation logic. Take the below input as an example:
    # ```json
    # {
    #     "OR": [
    #         {
    #             "key": "subject",
    #             "value": "holy-bible",
    #             "negate": false
    #         },
    #         {
    #             "key": "person-of-interest",
    #             "value": "jesus christ",
    #             "negate": false
    #         },
    #         {
    #             "key": "genre",
    #             "value": "religion",
    #             "negate": true
    #         }
    #         {
    #             "AND": [
    #                 {
    #                     "key": "subject",
    #                     "value": "tao-te-ching",
    #                     "negate": false
    #                 },
    #                 {
    #                     "key": "author",
    #                     "value": "lao-tzu",
    #                     "negate": false
    #                 }
    #             ]
    #         }
    #     ]
    # }
    # ```
    # In this case, files will be filtered such that:
    # 1. "subject" = "holy-bible" OR
    # 2. "person-of-interest" = "jesus christ" OR
    # 3. "genre" != "religion" OR
    # 4. "subject" = "tao-te-ching" AND "author" = "lao-tzu"
    # 
    # Note that the top level of the query must be either an "OR" or "AND" array. Currently, nesting is limited to 3.
    # For tag blocks (those with "key", "value", and "negate" keys), the following typing rules apply:
    # 1. "key" isn't optional and must be a `string`
    # 2. "value" isn't optional and can be `any` or list[`any`]
    # 3. "negate" is optional and must be `true` or `false`. If present and `true`, then the filter block is negated in
    # the resulting query. It is `false` by default.
    # 
    # 
    # When querying embeddings, you can optionally specify the `media_type` parameter in your request. By default (if
    # not set), it is equal to "TEXT". This means that the query will be performed over files that have
    # been parsed as text (for now, this covers all files except image files). If it is equal to "IMAGE",
    # the query will be performed over image files (for now, `.jpg` and `.png` files). You can think of this
    # field as an additional filter on top of any filters set in `file_ids` and
    # 
    # 
    # When `hybrid_search` is set to true, a combination of keyword search and semantic search are used to rank
    # and select candidate embeddings during information retrieval. By default, these search methods are weighted
    # equally during the ranking process. To adjust the weight (or "importance") of each search method, you can use
    # the `hybrid_search_tuning_parameters` property. The description for the different tuning parameters are:
    # - `weight_a`: weight to assign to semantic search
    # - `weight_b`: weight to assign to keyword search
    # 
    # You must ensure that `sum(weight_a, weight_b,..., weight_n)` for all *n* weights is equal to 1. The equality
    # has an error tolerance of 0.001 to account for possible floating point issues.
    # 
    # In order to use hybrid search for a customer across a set of documents, two flags need to be enabled:
    # 1. Use the `/modify_user_configuration` endpoint to to enable `sparse_vectors` for the customer. The payload
    # body for this request is below:
    # ```
    # {
    #   "configuration_key_name": "sparse_vectors",
    #   "value": {
    #     "enabled": true
    #   }
    # }
    # ```
    # 2. Make sure hybrid search is enabled for the documents across which you want to perform the search. For the
    # `/uploadfile` endpoint, this can be done by setting the following query parameter: `generate_sparse_vectors=true`
    # 
    # 
    # Carbon supports multiple models for use in generating embeddings for files. For images, we support Vertex AI's
    # multimodal model; for text, we support OpenAI's `text-embedding-ada-002` and Cohere's embed-multilingual-v3.0.
    # The model can be specified via the `embedding_model` parameter (in the POST body for `/embeddings`, and a query 
    # parameter in `/uploadfile`). If no model is supplied, the `text-embedding-ada-002` is used by default. When performing
    # embedding queries, embeddings from files that used the specified model will be considered in the query.
    # For example, if files A and B have embeddings generated with `OPENAI`, and files C and D have embeddings generated with
    # `COHERE_MULTILINGUAL_V3`, then by default, queries will only consider files A and B. If `COHERE_MULTILINGUAL_V3` is
    # specified as the `embedding_model` in `/embeddings`, then only files C and D will be considered. Make sure that
    # the set of all files you want considered for a query have embeddings generated via the same model. For now, **do not**
    # set `VERTEX_MULTIMODAL` as an `embedding_model`. This model is used automatically by Carbon when it detects an image file.
    #
    # @param query [String] Query for which to get related chunks and embeddings.
    # @param k [Integer] Number of related chunks to return.
    # @param tags [Hash<String, Tags1>] A set of tags to limit the search to. Deprecated and may be removed in the future.
    # @param query_vector [Array<Float>] Optional query vector for which to get related chunks and embeddings. It must have been generated by the same model used to generate the embeddings across which the search is being conducted. Cannot provide both `query` and `query_vector`.
    # @param file_ids [Array<Integer>] Optional list of file IDs to limit the search to
    # @param parent_file_ids [Array<Integer>] Optional list of parent file IDs to limit the search to. A parent file describes a file to which another file belongs (e.g. a folder)
    # @param tags_v2 [Object] A set of tags to limit the search to. Use this instead of `tags`, which is deprecated.
    # @param include_tags [Boolean] Flag to control whether or not to include tags for each chunk in the response.
    # @param include_vectors [Boolean] Flag to control whether or not to include embedding vectors in the response.
    # @param include_raw_file [Boolean] Flag to control whether or not to include a signed URL to the raw file containing each chunk in the response.
    # @param hybrid_search [Boolean] Flag to control whether or not to perform hybrid search.
    # @param hybrid_search_tuning_parameters [HybridSearchTuningParamsNullable] 
    # @param media_type [FileContentTypesNullable] Used to filter the kind of files (e.g. `TEXT` or `IMAGE`) over which to perform the search. Also plays a role in determining what embedding model is used to embed the query. If `IMAGE` is chosen as the media type, then the embedding model used will be an embedding model that is not text-only, *regardless* of what value is passed for `embedding_model`.
    # @param embedding_model [EmbeddingGeneratorsNullable] 
    # @param body [GetEmbeddingDocumentsBody] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_documents_with_http_info(query:, k:, tags: SENTINEL, query_vector: SENTINEL, file_ids: SENTINEL, parent_file_ids: SENTINEL, tags_v2: SENTINEL, include_tags: SENTINEL, include_vectors: SENTINEL, include_raw_file: SENTINEL, hybrid_search: SENTINEL, hybrid_search_tuning_parameters: SENTINEL, media_type: 'TEXT', embedding_model: 'OPENAI', extra: {})
      _body = {}
      _body[:tags] = tags if tags != SENTINEL
      _body[:query] = query if query != SENTINEL
      _body[:query_vector] = query_vector if query_vector != SENTINEL
      _body[:k] = k if k != SENTINEL
      _body[:file_ids] = file_ids if file_ids != SENTINEL
      _body[:parent_file_ids] = parent_file_ids if parent_file_ids != SENTINEL
      _body[:tags_v2] = tags_v2 if tags_v2 != SENTINEL
      _body[:include_tags] = include_tags if include_tags != SENTINEL
      _body[:include_vectors] = include_vectors if include_vectors != SENTINEL
      _body[:include_raw_file] = include_raw_file if include_raw_file != SENTINEL
      _body[:hybrid_search] = hybrid_search if hybrid_search != SENTINEL
      _body[:hybrid_search_tuning_parameters] = hybrid_search_tuning_parameters if hybrid_search_tuning_parameters != SENTINEL
      _body[:media_type] = media_type if media_type != SENTINEL
      _body[:embedding_model] = embedding_model if embedding_model != SENTINEL
      get_embedding_documents_body = _body
      get_documents_with_http_info_impl(get_embedding_documents_body, extra)
    end

    # Embeddings
    # For pre-filtering documents, using `tags_v2` is preferred to using `tags` (which is now deprecated). If both `tags_v2` and `tags` are specified, `tags` is ignored. `tags_v2` enables building complex filters through the use of \"AND\", \"OR\", and negation logic. Take the below input as an example: ```json {     \"OR\": [         {             \"key\": \"subject\",             \"value\": \"holy-bible\",             \"negate\": false         },         {             \"key\": \"person-of-interest\",             \"value\": \"jesus christ\",             \"negate\": false         },         {             \"key\": \"genre\",             \"value\": \"religion\",             \"negate\": true         }         {             \"AND\": [                 {                     \"key\": \"subject\",                     \"value\": \"tao-te-ching\",                     \"negate\": false                 },                 {                     \"key\": \"author\",                     \"value\": \"lao-tzu\",                     \"negate\": false                 }             ]         }     ] } ``` In this case, files will be filtered such that: 1. \"subject\" = \"holy-bible\" OR 2. \"person-of-interest\" = \"jesus christ\" OR 3. \"genre\" != \"religion\" OR 4. \"subject\" = \"tao-te-ching\" AND \"author\" = \"lao-tzu\"  Note that the top level of the query must be either an \"OR\" or \"AND\" array. Currently, nesting is limited to 3. For tag blocks (those with \"key\", \"value\", and \"negate\" keys), the following typing rules apply: 1. \"key\" isn't optional and must be a `string` 2. \"value\" isn't optional and can be `any` or list[`any`] 3. \"negate\" is optional and must be `true` or `false`. If present and `true`, then the filter block is negated in the resulting query. It is `false` by default.   When querying embeddings, you can optionally specify the `media_type` parameter in your request. By default (if not set), it is equal to \"TEXT\". This means that the query will be performed over files that have been parsed as text (for now, this covers all files except image files). If it is equal to \"IMAGE\", the query will be performed over image files (for now, `.jpg` and `.png` files). You can think of this field as an additional filter on top of any filters set in `file_ids` and   When `hybrid_search` is set to true, a combination of keyword search and semantic search are used to rank and select candidate embeddings during information retrieval. By default, these search methods are weighted equally during the ranking process. To adjust the weight (or \"importance\") of each search method, you can use the `hybrid_search_tuning_parameters` property. The description for the different tuning parameters are: - `weight_a`: weight to assign to semantic search - `weight_b`: weight to assign to keyword search  You must ensure that `sum(weight_a, weight_b,..., weight_n)` for all *n* weights is equal to 1. The equality has an error tolerance of 0.001 to account for possible floating point issues.  In order to use hybrid search for a customer across a set of documents, two flags need to be enabled: 1. Use the `/modify_user_configuration` endpoint to to enable `sparse_vectors` for the customer. The payload body for this request is below: ``` {   \"configuration_key_name\": \"sparse_vectors\",   \"value\": {     \"enabled\": true   } } ``` 2. Make sure hybrid search is enabled for the documents across which you want to perform the search. For the `/uploadfile` endpoint, this can be done by setting the following query parameter: `generate_sparse_vectors=true`   Carbon supports multiple models for use in generating embeddings for files. For images, we support Vertex AI's multimodal model; for text, we support OpenAI's `text-embedding-ada-002` and Cohere's embed-multilingual-v3.0. The model can be specified via the `embedding_model` parameter (in the POST body for `/embeddings`, and a query  parameter in `/uploadfile`). If no model is supplied, the `text-embedding-ada-002` is used by default. When performing embedding queries, embeddings from files that used the specified model will be considered in the query. For example, if files A and B have embeddings generated with `OPENAI`, and files C and D have embeddings generated with `COHERE_MULTILINGUAL_V3`, then by default, queries will only consider files A and B. If `COHERE_MULTILINGUAL_V3` is specified as the `embedding_model` in `/embeddings`, then only files C and D will be considered. Make sure that the set of all files you want considered for a query have embeddings generated via the same model. For now, **do not** set `VERTEX_MULTIMODAL` as an `embedding_model`. This model is used automatically by Carbon when it detects an image file.
    # @param get_embedding_documents_body [GetEmbeddingDocumentsBody] 
    # @param [Hash] opts the optional parameters
    # @return [DocumentResponseList]
    private def get_documents_impl(get_embedding_documents_body, opts = {})
      data, _status_code, _headers = get_documents_with_http_info(get_embedding_documents_body, opts)
      data
    end

    # Embeddings
    # For pre-filtering documents, using &#x60;tags_v2&#x60; is preferred to using &#x60;tags&#x60; (which is now deprecated). If both &#x60;tags_v2&#x60; and &#x60;tags&#x60; are specified, &#x60;tags&#x60; is ignored. &#x60;tags_v2&#x60; enables building complex filters through the use of \&quot;AND\&quot;, \&quot;OR\&quot;, and negation logic. Take the below input as an example: &#x60;&#x60;&#x60;json {     \&quot;OR\&quot;: [         {             \&quot;key\&quot;: \&quot;subject\&quot;,             \&quot;value\&quot;: \&quot;holy-bible\&quot;,             \&quot;negate\&quot;: false         },         {             \&quot;key\&quot;: \&quot;person-of-interest\&quot;,             \&quot;value\&quot;: \&quot;jesus christ\&quot;,             \&quot;negate\&quot;: false         },         {             \&quot;key\&quot;: \&quot;genre\&quot;,             \&quot;value\&quot;: \&quot;religion\&quot;,             \&quot;negate\&quot;: true         }         {             \&quot;AND\&quot;: [                 {                     \&quot;key\&quot;: \&quot;subject\&quot;,                     \&quot;value\&quot;: \&quot;tao-te-ching\&quot;,                     \&quot;negate\&quot;: false                 },                 {                     \&quot;key\&quot;: \&quot;author\&quot;,                     \&quot;value\&quot;: \&quot;lao-tzu\&quot;,                     \&quot;negate\&quot;: false                 }             ]         }     ] } &#x60;&#x60;&#x60; In this case, files will be filtered such that: 1. \&quot;subject\&quot; &#x3D; \&quot;holy-bible\&quot; OR 2. \&quot;person-of-interest\&quot; &#x3D; \&quot;jesus christ\&quot; OR 3. \&quot;genre\&quot; !&#x3D; \&quot;religion\&quot; OR 4. \&quot;subject\&quot; &#x3D; \&quot;tao-te-ching\&quot; AND \&quot;author\&quot; &#x3D; \&quot;lao-tzu\&quot;  Note that the top level of the query must be either an \&quot;OR\&quot; or \&quot;AND\&quot; array. Currently, nesting is limited to 3. For tag blocks (those with \&quot;key\&quot;, \&quot;value\&quot;, and \&quot;negate\&quot; keys), the following typing rules apply: 1. \&quot;key\&quot; isn&#39;t optional and must be a &#x60;string&#x60; 2. \&quot;value\&quot; isn&#39;t optional and can be &#x60;any&#x60; or list[&#x60;any&#x60;] 3. \&quot;negate\&quot; is optional and must be &#x60;true&#x60; or &#x60;false&#x60;. If present and &#x60;true&#x60;, then the filter block is negated in the resulting query. It is &#x60;false&#x60; by default.   When querying embeddings, you can optionally specify the &#x60;media_type&#x60; parameter in your request. By default (if not set), it is equal to \&quot;TEXT\&quot;. This means that the query will be performed over files that have been parsed as text (for now, this covers all files except image files). If it is equal to \&quot;IMAGE\&quot;, the query will be performed over image files (for now, &#x60;.jpg&#x60; and &#x60;.png&#x60; files). You can think of this field as an additional filter on top of any filters set in &#x60;file_ids&#x60; and   When &#x60;hybrid_search&#x60; is set to true, a combination of keyword search and semantic search are used to rank and select candidate embeddings during information retrieval. By default, these search methods are weighted equally during the ranking process. To adjust the weight (or \&quot;importance\&quot;) of each search method, you can use the &#x60;hybrid_search_tuning_parameters&#x60; property. The description for the different tuning parameters are: - &#x60;weight_a&#x60;: weight to assign to semantic search - &#x60;weight_b&#x60;: weight to assign to keyword search  You must ensure that &#x60;sum(weight_a, weight_b,..., weight_n)&#x60; for all *n* weights is equal to 1. The equality has an error tolerance of 0.001 to account for possible floating point issues.  In order to use hybrid search for a customer across a set of documents, two flags need to be enabled: 1. Use the &#x60;/modify_user_configuration&#x60; endpoint to to enable &#x60;sparse_vectors&#x60; for the customer. The payload body for this request is below: &#x60;&#x60;&#x60; {   \&quot;configuration_key_name\&quot;: \&quot;sparse_vectors\&quot;,   \&quot;value\&quot;: {     \&quot;enabled\&quot;: true   } } &#x60;&#x60;&#x60; 2. Make sure hybrid search is enabled for the documents across which you want to perform the search. For the &#x60;/uploadfile&#x60; endpoint, this can be done by setting the following query parameter: &#x60;generate_sparse_vectors&#x3D;true&#x60;   Carbon supports multiple models for use in generating embeddings for files. For images, we support Vertex AI&#39;s multimodal model; for text, we support OpenAI&#39;s &#x60;text-embedding-ada-002&#x60; and Cohere&#39;s embed-multilingual-v3.0. The model can be specified via the &#x60;embedding_model&#x60; parameter (in the POST body for &#x60;/embeddings&#x60;, and a query  parameter in &#x60;/uploadfile&#x60;). If no model is supplied, the &#x60;text-embedding-ada-002&#x60; is used by default. When performing embedding queries, embeddings from files that used the specified model will be considered in the query. For example, if files A and B have embeddings generated with &#x60;OPENAI&#x60;, and files C and D have embeddings generated with &#x60;COHERE_MULTILINGUAL_V3&#x60;, then by default, queries will only consider files A and B. If &#x60;COHERE_MULTILINGUAL_V3&#x60; is specified as the &#x60;embedding_model&#x60; in &#x60;/embeddings&#x60;, then only files C and D will be considered. Make sure that the set of all files you want considered for a query have embeddings generated via the same model. For now, **do not** set &#x60;VERTEX_MULTIMODAL&#x60; as an &#x60;embedding_model&#x60;. This model is used automatically by Carbon when it detects an image file.
    # @param get_embedding_documents_body [GetEmbeddingDocumentsBody] 
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is DocumentResponseList, status code, headers and response
    private def get_documents_with_http_info_impl(get_embedding_documents_body, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: EmbeddingsApi.get_documents ...'
      end
      # verify the required parameter 'get_embedding_documents_body' is set
      if @api_client.config.client_side_validation && get_embedding_documents_body.nil?
        fail ArgumentError, "Missing the required parameter 'get_embedding_documents_body' when calling EmbeddingsApi.get_documents"
      end
      # resource path
      local_var_path = '/embeddings'

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      content_type = @api_client.select_header_content_type(['application/json'])
      if !content_type.nil?
        header_params['Content-Type'] = content_type
      end

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body] || @api_client.object_to_http_body(get_embedding_documents_body)

      # return_type
      return_type = opts[:debug_return_type] || 'DocumentResponseList'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken', 'apiKey', 'customerId']

      new_options = opts.merge(
        :operation => :"EmbeddingsApi.get_documents",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: EmbeddingsApi#get_documents\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end


    # Retrieve Embeddings And Content
    #
    # @param filters [EmbeddingsAndChunksFilters] 
    # @param pagination [Pagination] 
    # @param order_by [EmbeddingsAndChunksOrderByColumns] 
    # @param order_dir [OrderDir] 
    # @param include_vectors [Boolean] 
    # @param body [EmbeddingsAndChunksQueryInput] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_embeddings_and_chunks(filters:, pagination: SENTINEL, order_by: 'updated_at', order_dir: 'asc', include_vectors: false, extra: {})
      _body = {}
      _body[:pagination] = pagination if pagination != SENTINEL
      _body[:order_by] = order_by if order_by != SENTINEL
      _body[:order_dir] = order_dir if order_dir != SENTINEL
      _body[:filters] = filters if filters != SENTINEL
      _body[:include_vectors] = include_vectors if include_vectors != SENTINEL
      embeddings_and_chunks_query_input = _body
      api_response = get_embeddings_and_chunks_with_http_info_impl(embeddings_and_chunks_query_input, extra)
      api_response.data
    end

    # Retrieve Embeddings And Content
    #
    # @param filters [EmbeddingsAndChunksFilters] 
    # @param pagination [Pagination] 
    # @param order_by [EmbeddingsAndChunksOrderByColumns] 
    # @param order_dir [OrderDir] 
    # @param include_vectors [Boolean] 
    # @param body [EmbeddingsAndChunksQueryInput] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_embeddings_and_chunks_with_http_info(filters:, pagination: SENTINEL, order_by: 'updated_at', order_dir: 'asc', include_vectors: false, extra: {})
      _body = {}
      _body[:pagination] = pagination if pagination != SENTINEL
      _body[:order_by] = order_by if order_by != SENTINEL
      _body[:order_dir] = order_dir if order_dir != SENTINEL
      _body[:filters] = filters if filters != SENTINEL
      _body[:include_vectors] = include_vectors if include_vectors != SENTINEL
      embeddings_and_chunks_query_input = _body
      get_embeddings_and_chunks_with_http_info_impl(embeddings_and_chunks_query_input, extra)
    end

    # Retrieve Embeddings And Content
    # @param embeddings_and_chunks_query_input [EmbeddingsAndChunksQueryInput] 
    # @param [Hash] opts the optional parameters
    # @return [EmbeddingsAndChunksResponse]
    private def get_embeddings_and_chunks_impl(embeddings_and_chunks_query_input, opts = {})
      data, _status_code, _headers = get_embeddings_and_chunks_with_http_info(embeddings_and_chunks_query_input, opts)
      data
    end

    # Retrieve Embeddings And Content
    # @param embeddings_and_chunks_query_input [EmbeddingsAndChunksQueryInput] 
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is EmbeddingsAndChunksResponse, status code, headers and response
    private def get_embeddings_and_chunks_with_http_info_impl(embeddings_and_chunks_query_input, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: EmbeddingsApi.get_embeddings_and_chunks ...'
      end
      # verify the required parameter 'embeddings_and_chunks_query_input' is set
      if @api_client.config.client_side_validation && embeddings_and_chunks_query_input.nil?
        fail ArgumentError, "Missing the required parameter 'embeddings_and_chunks_query_input' when calling EmbeddingsApi.get_embeddings_and_chunks"
      end
      # resource path
      local_var_path = '/text_chunks'

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      content_type = @api_client.select_header_content_type(['application/json'])
      if !content_type.nil?
        header_params['Content-Type'] = content_type
      end

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body] || @api_client.object_to_http_body(embeddings_and_chunks_query_input)

      # return_type
      return_type = opts[:debug_return_type] || 'EmbeddingsAndChunksResponse'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken', 'apiKey', 'customerId']

      new_options = opts.merge(
        :operation => :"EmbeddingsApi.get_embeddings_and_chunks",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: EmbeddingsApi#get_embeddings_and_chunks\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end


    # Upload Chunks And Embeddings
    #
    # @param embedding_model [EmbeddingGenerators] 
    # @param chunks_and_embeddings [Array<SingleChunksAndEmbeddingsUploadInput>] 
    # @param overwrite_existing [Boolean] 
    # @param body [ChunksAndEmbeddingsUploadInput] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def upload_chunks_and_embeddings(embedding_model:, chunks_and_embeddings:, overwrite_existing: false, extra: {})
      _body = {}
      _body[:embedding_model] = embedding_model if embedding_model != SENTINEL
      _body[:chunks_and_embeddings] = chunks_and_embeddings if chunks_and_embeddings != SENTINEL
      _body[:overwrite_existing] = overwrite_existing if overwrite_existing != SENTINEL
      chunks_and_embeddings_upload_input = _body
      api_response = upload_chunks_and_embeddings_with_http_info_impl(chunks_and_embeddings_upload_input, extra)
      api_response.data
    end

    # Upload Chunks And Embeddings
    #
    # @param embedding_model [EmbeddingGenerators] 
    # @param chunks_and_embeddings [Array<SingleChunksAndEmbeddingsUploadInput>] 
    # @param overwrite_existing [Boolean] 
    # @param body [ChunksAndEmbeddingsUploadInput] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def upload_chunks_and_embeddings_with_http_info(embedding_model:, chunks_and_embeddings:, overwrite_existing: false, extra: {})
      _body = {}
      _body[:embedding_model] = embedding_model if embedding_model != SENTINEL
      _body[:chunks_and_embeddings] = chunks_and_embeddings if chunks_and_embeddings != SENTINEL
      _body[:overwrite_existing] = overwrite_existing if overwrite_existing != SENTINEL
      chunks_and_embeddings_upload_input = _body
      upload_chunks_and_embeddings_with_http_info_impl(chunks_and_embeddings_upload_input, extra)
    end

    # Upload Chunks And Embeddings
    # @param chunks_and_embeddings_upload_input [ChunksAndEmbeddingsUploadInput] 
    # @param [Hash] opts the optional parameters
    # @return [GenericSuccessResponse]
    private def upload_chunks_and_embeddings_impl(chunks_and_embeddings_upload_input, opts = {})
      data, _status_code, _headers = upload_chunks_and_embeddings_with_http_info(chunks_and_embeddings_upload_input, opts)
      data
    end

    # Upload Chunks And Embeddings
    # @param chunks_and_embeddings_upload_input [ChunksAndEmbeddingsUploadInput] 
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is GenericSuccessResponse, status code, headers and response
    private def upload_chunks_and_embeddings_with_http_info_impl(chunks_and_embeddings_upload_input, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: EmbeddingsApi.upload_chunks_and_embeddings ...'
      end
      # verify the required parameter 'chunks_and_embeddings_upload_input' is set
      if @api_client.config.client_side_validation && chunks_and_embeddings_upload_input.nil?
        fail ArgumentError, "Missing the required parameter 'chunks_and_embeddings_upload_input' when calling EmbeddingsApi.upload_chunks_and_embeddings"
      end
      # resource path
      local_var_path = '/upload_chunks_and_embeddings'

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])
      # HTTP header 'Content-Type'
      content_type = @api_client.select_header_content_type(['application/json'])
      if !content_type.nil?
        header_params['Content-Type'] = content_type
      end

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body] || @api_client.object_to_http_body(chunks_and_embeddings_upload_input)

      # return_type
      return_type = opts[:debug_return_type] || 'GenericSuccessResponse'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken', 'apiKey', 'customerId']

      new_options = opts.merge(
        :operation => :"EmbeddingsApi.upload_chunks_and_embeddings",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: EmbeddingsApi#upload_chunks_and_embeddings\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end
  end

  # top-level client access to avoid having the user to insantiate their own API instances
  Embeddings = EmbeddingsApi::new
end
