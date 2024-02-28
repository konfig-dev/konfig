=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'cgi'

module Carbon
  class IntegrationsApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end

    # Freshdesk Connect
    #
    # Refer this article to obtain an API key https://support.freshdesk.com/en/support/solutions/articles/215517.
    # Make sure that your API key has the permission to read solutions from your account and you are on a <b>paid</b> plan.
    # Once you have an API key, you can make a request to this endpoint along with your freshdesk domain. This will 
    # trigger an automatic sync of the articles in your "solutions" tab. Additional parameters below can be used to associate 
    # data with the synced articles or modify the sync behavior.
    #
    # @param domain [String] 
    # @param api_key [String] 
    # @param tags [Object] 
    # @param chunk_size [Integer] 
    # @param chunk_overlap [Integer] 
    # @param skip_embedding_generation [Boolean] 
    # @param embedding_model [EmbeddingGeneratorsNullable] 
    # @param generate_sparse_vectors [Boolean] 
    # @param prepend_filename_to_chunks [Boolean] 
    # @param body [FreshDeskConnectRequest] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def connect_freshdesk(domain:, api_key:, tags: SENTINEL, chunk_size: 1500, chunk_overlap: 20, skip_embedding_generation: false, embedding_model: 'OPENAI', generate_sparse_vectors: false, prepend_filename_to_chunks: false, extra: {})
      _body = {}
      _body[:tags] = tags if tags != SENTINEL
      _body[:domain] = domain if domain != SENTINEL
      _body[:api_key] = api_key if api_key != SENTINEL
      _body[:chunk_size] = chunk_size if chunk_size != SENTINEL
      _body[:chunk_overlap] = chunk_overlap if chunk_overlap != SENTINEL
      _body[:skip_embedding_generation] = skip_embedding_generation if skip_embedding_generation != SENTINEL
      _body[:embedding_model] = embedding_model if embedding_model != SENTINEL
      _body[:generate_sparse_vectors] = generate_sparse_vectors if generate_sparse_vectors != SENTINEL
      _body[:prepend_filename_to_chunks] = prepend_filename_to_chunks if prepend_filename_to_chunks != SENTINEL
      fresh_desk_connect_request = _body
      data, _status_code, _headers = connect_freshdesk_with_http_info_impl(fresh_desk_connect_request, extra)
      data
    end

    # Freshdesk Connect
    #
    # Refer this article to obtain an API key https://support.freshdesk.com/en/support/solutions/articles/215517.
    # Make sure that your API key has the permission to read solutions from your account and you are on a <b>paid</b> plan.
    # Once you have an API key, you can make a request to this endpoint along with your freshdesk domain. This will 
    # trigger an automatic sync of the articles in your "solutions" tab. Additional parameters below can be used to associate 
    # data with the synced articles or modify the sync behavior.
    #
    # @param domain [String] 
    # @param api_key [String] 
    # @param tags [Object] 
    # @param chunk_size [Integer] 
    # @param chunk_overlap [Integer] 
    # @param skip_embedding_generation [Boolean] 
    # @param embedding_model [EmbeddingGeneratorsNullable] 
    # @param generate_sparse_vectors [Boolean] 
    # @param prepend_filename_to_chunks [Boolean] 
    # @param body [FreshDeskConnectRequest] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def connect_freshdesk_with_http_info(domain:, api_key:, tags: SENTINEL, chunk_size: 1500, chunk_overlap: 20, skip_embedding_generation: false, embedding_model: 'OPENAI', generate_sparse_vectors: false, prepend_filename_to_chunks: false, extra: {})
      _body = {}
      _body[:tags] = tags if tags != SENTINEL
      _body[:domain] = domain if domain != SENTINEL
      _body[:api_key] = api_key if api_key != SENTINEL
      _body[:chunk_size] = chunk_size if chunk_size != SENTINEL
      _body[:chunk_overlap] = chunk_overlap if chunk_overlap != SENTINEL
      _body[:skip_embedding_generation] = skip_embedding_generation if skip_embedding_generation != SENTINEL
      _body[:embedding_model] = embedding_model if embedding_model != SENTINEL
      _body[:generate_sparse_vectors] = generate_sparse_vectors if generate_sparse_vectors != SENTINEL
      _body[:prepend_filename_to_chunks] = prepend_filename_to_chunks if prepend_filename_to_chunks != SENTINEL
      fresh_desk_connect_request = _body
      connect_freshdesk_with_http_info_impl(fresh_desk_connect_request, extra)
    end

    # Freshdesk Connect
    # Refer this article to obtain an API key https://support.freshdesk.com/en/support/solutions/articles/215517. Make sure that your API key has the permission to read solutions from your account and you are on a <b>paid</b> plan. Once you have an API key, you can make a request to this endpoint along with your freshdesk domain. This will  trigger an automatic sync of the articles in your \"solutions\" tab. Additional parameters below can be used to associate  data with the synced articles or modify the sync behavior.
    # @param fresh_desk_connect_request [FreshDeskConnectRequest] 
    # @param [Hash] opts the optional parameters
    # @return [GenericSuccessResponse]
    private def connect_freshdesk_impl(fresh_desk_connect_request, opts = {})
      data, _status_code, _headers = connect_freshdesk_with_http_info(fresh_desk_connect_request, opts)
      data
    end

    # Freshdesk Connect
    # Refer this article to obtain an API key https://support.freshdesk.com/en/support/solutions/articles/215517. Make sure that your API key has the permission to read solutions from your account and you are on a &lt;b&gt;paid&lt;/b&gt; plan. Once you have an API key, you can make a request to this endpoint along with your freshdesk domain. This will  trigger an automatic sync of the articles in your \&quot;solutions\&quot; tab. Additional parameters below can be used to associate  data with the synced articles or modify the sync behavior.
    # @param fresh_desk_connect_request [FreshDeskConnectRequest] 
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is GenericSuccessResponse, status code, headers and response
    private def connect_freshdesk_with_http_info_impl(fresh_desk_connect_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: IntegrationsApi.connect_freshdesk ...'
      end
      # verify the required parameter 'fresh_desk_connect_request' is set
      if @api_client.config.client_side_validation && fresh_desk_connect_request.nil?
        fail ArgumentError, "Missing the required parameter 'fresh_desk_connect_request' when calling IntegrationsApi.connect_freshdesk"
      end
      # resource path
      local_var_path = '/integrations/freshdesk'

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(fresh_desk_connect_request)

      # return_type
      return_type = opts[:debug_return_type] || 'GenericSuccessResponse'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken', 'apiKey', 'customerId']

      new_options = opts.merge(
        :operation => :"IntegrationsApi.connect_freshdesk",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: IntegrationsApi#connect_freshdesk\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end


    # Gitbook Connect
    #
    # You will need an access token to connect your Gitbook account. Note that the permissions will be defined by the user 
    # generating access token so make sure you have the permission to access spaces you will be syncing. 
    # Refer this article for more details https://developer.gitbook.com/gitbook-api/authentication. Additionally, you
    # need to specify the name of organization you will be syncing data from.
    #
    # @param organization [String] 
    # @param access_token [String] 
    # @param body [GitbookConnectRequest] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def connect_gitbook(organization:, access_token:, extra: {})
      _body = {}
      _body[:organization] = organization if organization != SENTINEL
      _body[:access_token] = access_token if access_token != SENTINEL
      gitbook_connect_request = _body
      data, _status_code, _headers = connect_gitbook_with_http_info_impl(gitbook_connect_request, extra)
      data
    end

    # Gitbook Connect
    #
    # You will need an access token to connect your Gitbook account. Note that the permissions will be defined by the user 
    # generating access token so make sure you have the permission to access spaces you will be syncing. 
    # Refer this article for more details https://developer.gitbook.com/gitbook-api/authentication. Additionally, you
    # need to specify the name of organization you will be syncing data from.
    #
    # @param organization [String] 
    # @param access_token [String] 
    # @param body [GitbookConnectRequest] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def connect_gitbook_with_http_info(organization:, access_token:, extra: {})
      _body = {}
      _body[:organization] = organization if organization != SENTINEL
      _body[:access_token] = access_token if access_token != SENTINEL
      gitbook_connect_request = _body
      connect_gitbook_with_http_info_impl(gitbook_connect_request, extra)
    end

    # Gitbook Connect
    # You will need an access token to connect your Gitbook account. Note that the permissions will be defined by the user  generating access token so make sure you have the permission to access spaces you will be syncing.  Refer this article for more details https://developer.gitbook.com/gitbook-api/authentication. Additionally, you need to specify the name of organization you will be syncing data from.
    # @param gitbook_connect_request [GitbookConnectRequest] 
    # @param [Hash] opts the optional parameters
    # @return [GenericSuccessResponse]
    private def connect_gitbook_impl(gitbook_connect_request, opts = {})
      data, _status_code, _headers = connect_gitbook_with_http_info(gitbook_connect_request, opts)
      data
    end

    # Gitbook Connect
    # You will need an access token to connect your Gitbook account. Note that the permissions will be defined by the user  generating access token so make sure you have the permission to access spaces you will be syncing.  Refer this article for more details https://developer.gitbook.com/gitbook-api/authentication. Additionally, you need to specify the name of organization you will be syncing data from.
    # @param gitbook_connect_request [GitbookConnectRequest] 
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is GenericSuccessResponse, status code, headers and response
    private def connect_gitbook_with_http_info_impl(gitbook_connect_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: IntegrationsApi.connect_gitbook ...'
      end
      # verify the required parameter 'gitbook_connect_request' is set
      if @api_client.config.client_side_validation && gitbook_connect_request.nil?
        fail ArgumentError, "Missing the required parameter 'gitbook_connect_request' when calling IntegrationsApi.connect_gitbook"
      end
      # resource path
      local_var_path = '/integrations/gitbook'

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(gitbook_connect_request)

      # return_type
      return_type = opts[:debug_return_type] || 'GenericSuccessResponse'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken', 'apiKey', 'customerId']

      new_options = opts.merge(
        :operation => :"IntegrationsApi.connect_gitbook",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: IntegrationsApi#connect_gitbook\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end


    # S3 Auth
    #
    # Create a new IAM user with permissions to:
    # <ol>
    # <li>List all buckets.</li>
    # <li>Read from the specific buckets and objects to sync with Carbon. Ensure any future buckets or objects carry 
    # the same permissions.</li>
    # </ol>
    # Once created, generate an access key for this user and share the credentials with us. We recommend testing this key beforehand.
    #
    # @param access_key [String] 
    # @param access_key_secret [String] 
    # @param body [S3AuthRequest] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def create_aws_iam_user(access_key:, access_key_secret:, extra: {})
      _body = {}
      _body[:access_key] = access_key if access_key != SENTINEL
      _body[:access_key_secret] = access_key_secret if access_key_secret != SENTINEL
      s3_auth_request = _body
      data, _status_code, _headers = create_aws_iam_user_with_http_info_impl(s3_auth_request, extra)
      data
    end

    # S3 Auth
    #
    # Create a new IAM user with permissions to:
    # <ol>
    # <li>List all buckets.</li>
    # <li>Read from the specific buckets and objects to sync with Carbon. Ensure any future buckets or objects carry 
    # the same permissions.</li>
    # </ol>
    # Once created, generate an access key for this user and share the credentials with us. We recommend testing this key beforehand.
    #
    # @param access_key [String] 
    # @param access_key_secret [String] 
    # @param body [S3AuthRequest] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def create_aws_iam_user_with_http_info(access_key:, access_key_secret:, extra: {})
      _body = {}
      _body[:access_key] = access_key if access_key != SENTINEL
      _body[:access_key_secret] = access_key_secret if access_key_secret != SENTINEL
      s3_auth_request = _body
      create_aws_iam_user_with_http_info_impl(s3_auth_request, extra)
    end

    # S3 Auth
    # Create a new IAM user with permissions to: <ol> <li>List all buckets.</li> <li>Read from the specific buckets and objects to sync with Carbon. Ensure any future buckets or objects carry  the same permissions.</li> </ol> Once created, generate an access key for this user and share the credentials with us. We recommend testing this key beforehand.
    # @param s3_auth_request [S3AuthRequest] 
    # @param [Hash] opts the optional parameters
    # @return [OrganizationUserDataSourceAPI]
    private def create_aws_iam_user_impl(s3_auth_request, opts = {})
      data, _status_code, _headers = create_aws_iam_user_with_http_info(s3_auth_request, opts)
      data
    end

    # S3 Auth
    # Create a new IAM user with permissions to: &lt;ol&gt; &lt;li&gt;List all buckets.&lt;/li&gt; &lt;li&gt;Read from the specific buckets and objects to sync with Carbon. Ensure any future buckets or objects carry  the same permissions.&lt;/li&gt; &lt;/ol&gt; Once created, generate an access key for this user and share the credentials with us. We recommend testing this key beforehand.
    # @param s3_auth_request [S3AuthRequest] 
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is OrganizationUserDataSourceAPI, status code, headers and response
    private def create_aws_iam_user_with_http_info_impl(s3_auth_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: IntegrationsApi.create_aws_iam_user ...'
      end
      # verify the required parameter 's3_auth_request' is set
      if @api_client.config.client_side_validation && s3_auth_request.nil?
        fail ArgumentError, "Missing the required parameter 's3_auth_request' when calling IntegrationsApi.create_aws_iam_user"
      end
      # resource path
      local_var_path = '/integrations/s3'

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(s3_auth_request)

      # return_type
      return_type = opts[:debug_return_type] || 'OrganizationUserDataSourceAPI'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken', 'apiKey', 'customerId']

      new_options = opts.merge(
        :operation => :"IntegrationsApi.create_aws_iam_user",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: IntegrationsApi#create_aws_iam_user\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end


    # Get Oauth Url
    #
    # @param service [DataSourceType] 
    # @param tags [Object] 
    # @param scope [String] 
    # @param chunk_size [Integer] 
    # @param chunk_overlap [Integer] 
    # @param skip_embedding_generation [Boolean] 
    # @param embedding_model [EmbeddingGeneratorsNullable] 
    # @param zendesk_subdomain [String] 
    # @param microsoft_tenant [String] 
    # @param sharepoint_site_name [String] 
    # @param confluence_subdomain [String] 
    # @param generate_sparse_vectors [Boolean] 
    # @param prepend_filename_to_chunks [Boolean] 
    # @param max_items_per_chunk [Integer] 
    # @param body [OAuthURLRequest] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_oauth_url(service:, tags: SENTINEL, scope: SENTINEL, chunk_size: 1500, chunk_overlap: 20, skip_embedding_generation: false, embedding_model: 'OPENAI', zendesk_subdomain: SENTINEL, microsoft_tenant: SENTINEL, sharepoint_site_name: SENTINEL, confluence_subdomain: SENTINEL, generate_sparse_vectors: false, prepend_filename_to_chunks: false, max_items_per_chunk: SENTINEL, extra: {})
      _body = {}
      _body[:tags] = tags if tags != SENTINEL
      _body[:scope] = scope if scope != SENTINEL
      _body[:service] = service if service != SENTINEL
      _body[:chunk_size] = chunk_size if chunk_size != SENTINEL
      _body[:chunk_overlap] = chunk_overlap if chunk_overlap != SENTINEL
      _body[:skip_embedding_generation] = skip_embedding_generation if skip_embedding_generation != SENTINEL
      _body[:embedding_model] = embedding_model if embedding_model != SENTINEL
      _body[:zendesk_subdomain] = zendesk_subdomain if zendesk_subdomain != SENTINEL
      _body[:microsoft_tenant] = microsoft_tenant if microsoft_tenant != SENTINEL
      _body[:sharepoint_site_name] = sharepoint_site_name if sharepoint_site_name != SENTINEL
      _body[:confluence_subdomain] = confluence_subdomain if confluence_subdomain != SENTINEL
      _body[:generate_sparse_vectors] = generate_sparse_vectors if generate_sparse_vectors != SENTINEL
      _body[:prepend_filename_to_chunks] = prepend_filename_to_chunks if prepend_filename_to_chunks != SENTINEL
      _body[:max_items_per_chunk] = max_items_per_chunk if max_items_per_chunk != SENTINEL
      o_auth_url_request = _body
      data, _status_code, _headers = get_oauth_url_with_http_info_impl(o_auth_url_request, extra)
      data
    end

    # Get Oauth Url
    #
    # @param service [DataSourceType] 
    # @param tags [Object] 
    # @param scope [String] 
    # @param chunk_size [Integer] 
    # @param chunk_overlap [Integer] 
    # @param skip_embedding_generation [Boolean] 
    # @param embedding_model [EmbeddingGeneratorsNullable] 
    # @param zendesk_subdomain [String] 
    # @param microsoft_tenant [String] 
    # @param sharepoint_site_name [String] 
    # @param confluence_subdomain [String] 
    # @param generate_sparse_vectors [Boolean] 
    # @param prepend_filename_to_chunks [Boolean] 
    # @param max_items_per_chunk [Integer] 
    # @param body [OAuthURLRequest] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_oauth_url_with_http_info(service:, tags: SENTINEL, scope: SENTINEL, chunk_size: 1500, chunk_overlap: 20, skip_embedding_generation: false, embedding_model: 'OPENAI', zendesk_subdomain: SENTINEL, microsoft_tenant: SENTINEL, sharepoint_site_name: SENTINEL, confluence_subdomain: SENTINEL, generate_sparse_vectors: false, prepend_filename_to_chunks: false, max_items_per_chunk: SENTINEL, extra: {})
      _body = {}
      _body[:tags] = tags if tags != SENTINEL
      _body[:scope] = scope if scope != SENTINEL
      _body[:service] = service if service != SENTINEL
      _body[:chunk_size] = chunk_size if chunk_size != SENTINEL
      _body[:chunk_overlap] = chunk_overlap if chunk_overlap != SENTINEL
      _body[:skip_embedding_generation] = skip_embedding_generation if skip_embedding_generation != SENTINEL
      _body[:embedding_model] = embedding_model if embedding_model != SENTINEL
      _body[:zendesk_subdomain] = zendesk_subdomain if zendesk_subdomain != SENTINEL
      _body[:microsoft_tenant] = microsoft_tenant if microsoft_tenant != SENTINEL
      _body[:sharepoint_site_name] = sharepoint_site_name if sharepoint_site_name != SENTINEL
      _body[:confluence_subdomain] = confluence_subdomain if confluence_subdomain != SENTINEL
      _body[:generate_sparse_vectors] = generate_sparse_vectors if generate_sparse_vectors != SENTINEL
      _body[:prepend_filename_to_chunks] = prepend_filename_to_chunks if prepend_filename_to_chunks != SENTINEL
      _body[:max_items_per_chunk] = max_items_per_chunk if max_items_per_chunk != SENTINEL
      o_auth_url_request = _body
      get_oauth_url_with_http_info_impl(o_auth_url_request, extra)
    end

    # Get Oauth Url
    # @param o_auth_url_request [OAuthURLRequest] 
    # @param [Hash] opts the optional parameters
    # @return [Object]
    private def get_oauth_url_impl(o_auth_url_request, opts = {})
      data, _status_code, _headers = get_oauth_url_with_http_info(o_auth_url_request, opts)
      data
    end

    # Get Oauth Url
    # @param o_auth_url_request [OAuthURLRequest] 
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is Object, status code, headers and response
    private def get_oauth_url_with_http_info_impl(o_auth_url_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: IntegrationsApi.get_oauth_url ...'
      end
      # verify the required parameter 'o_auth_url_request' is set
      if @api_client.config.client_side_validation && o_auth_url_request.nil?
        fail ArgumentError, "Missing the required parameter 'o_auth_url_request' when calling IntegrationsApi.get_oauth_url"
      end
      # resource path
      local_var_path = '/integrations/oauth_url'

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(o_auth_url_request)

      # return_type
      return_type = opts[:debug_return_type] || 'Object'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken', 'apiKey', 'customerId']

      new_options = opts.merge(
        :operation => :"IntegrationsApi.get_oauth_url",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: IntegrationsApi#get_oauth_url\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end


    # Confluence List
    #
    # To begin listing a user's Confluence pages, at least a `data_source_id` of a connected
    # Confluence account must be specified. This base request returns a list of root pages for
    # every space the user has access to in a Confluence instance. To traverse further down
    # the user's page directory, additional requests to this endpoint can be made with the same
    # `data_source_id` and with `parent_id` set to the id of page from a previous request. For
    # convenience, the `has_children` property in each directory item in the response list will
    # flag which pages will return non-empty lists of pages when set as the `parent_id`.
    #
    # @param data_source_id [Integer] 
    # @param parent_id [String] 
    # @param body [ListRequest] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def list_confluence_pages(data_source_id:, parent_id: SENTINEL, extra: {})
      _body = {}
      _body[:data_source_id] = data_source_id if data_source_id != SENTINEL
      _body[:parent_id] = parent_id if parent_id != SENTINEL
      list_request = _body
      data, _status_code, _headers = list_confluence_pages_with_http_info_impl(list_request, extra)
      data
    end

    # Confluence List
    #
    # To begin listing a user's Confluence pages, at least a `data_source_id` of a connected
    # Confluence account must be specified. This base request returns a list of root pages for
    # every space the user has access to in a Confluence instance. To traverse further down
    # the user's page directory, additional requests to this endpoint can be made with the same
    # `data_source_id` and with `parent_id` set to the id of page from a previous request. For
    # convenience, the `has_children` property in each directory item in the response list will
    # flag which pages will return non-empty lists of pages when set as the `parent_id`.
    #
    # @param data_source_id [Integer] 
    # @param parent_id [String] 
    # @param body [ListRequest] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def list_confluence_pages_with_http_info(data_source_id:, parent_id: SENTINEL, extra: {})
      _body = {}
      _body[:data_source_id] = data_source_id if data_source_id != SENTINEL
      _body[:parent_id] = parent_id if parent_id != SENTINEL
      list_request = _body
      list_confluence_pages_with_http_info_impl(list_request, extra)
    end

    # Confluence List
    # To begin listing a user's Confluence pages, at least a `data_source_id` of a connected Confluence account must be specified. This base request returns a list of root pages for every space the user has access to in a Confluence instance. To traverse further down the user's page directory, additional requests to this endpoint can be made with the same `data_source_id` and with `parent_id` set to the id of page from a previous request. For convenience, the `has_children` property in each directory item in the response list will flag which pages will return non-empty lists of pages when set as the `parent_id`.
    # @param list_request [ListRequest] 
    # @param [Hash] opts the optional parameters
    # @return [ListResponse]
    private def list_confluence_pages_impl(list_request, opts = {})
      data, _status_code, _headers = list_confluence_pages_with_http_info(list_request, opts)
      data
    end

    # Confluence List
    # To begin listing a user&#39;s Confluence pages, at least a &#x60;data_source_id&#x60; of a connected Confluence account must be specified. This base request returns a list of root pages for every space the user has access to in a Confluence instance. To traverse further down the user&#39;s page directory, additional requests to this endpoint can be made with the same &#x60;data_source_id&#x60; and with &#x60;parent_id&#x60; set to the id of page from a previous request. For convenience, the &#x60;has_children&#x60; property in each directory item in the response list will flag which pages will return non-empty lists of pages when set as the &#x60;parent_id&#x60;.
    # @param list_request [ListRequest] 
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is ListResponse, status code, headers and response
    private def list_confluence_pages_with_http_info_impl(list_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: IntegrationsApi.list_confluence_pages ...'
      end
      # verify the required parameter 'list_request' is set
      if @api_client.config.client_side_validation && list_request.nil?
        fail ArgumentError, "Missing the required parameter 'list_request' when calling IntegrationsApi.list_confluence_pages"
      end
      # resource path
      local_var_path = '/integrations/confluence/list'

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(list_request)

      # return_type
      return_type = opts[:debug_return_type] || 'ListResponse'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken', 'apiKey', 'customerId']

      new_options = opts.merge(
        :operation => :"IntegrationsApi.list_confluence_pages",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: IntegrationsApi#list_confluence_pages\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end


    # List Data Source Items
    #
    # @param data_source_id [Integer] 
    # @param parent_id [String] 
    # @param pagination [Pagination] 
    # @param body [ListDataSourceItemsRequest] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def list_data_source_items(data_source_id:, parent_id: SENTINEL, pagination: SENTINEL, extra: {})
      _body = {}
      _body[:data_source_id] = data_source_id if data_source_id != SENTINEL
      _body[:parent_id] = parent_id if parent_id != SENTINEL
      _body[:pagination] = pagination if pagination != SENTINEL
      list_data_source_items_request = _body
      data, _status_code, _headers = list_data_source_items_with_http_info_impl(list_data_source_items_request, extra)
      data
    end

    # List Data Source Items
    #
    # @param data_source_id [Integer] 
    # @param parent_id [String] 
    # @param pagination [Pagination] 
    # @param body [ListDataSourceItemsRequest] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def list_data_source_items_with_http_info(data_source_id:, parent_id: SENTINEL, pagination: SENTINEL, extra: {})
      _body = {}
      _body[:data_source_id] = data_source_id if data_source_id != SENTINEL
      _body[:parent_id] = parent_id if parent_id != SENTINEL
      _body[:pagination] = pagination if pagination != SENTINEL
      list_data_source_items_request = _body
      list_data_source_items_with_http_info_impl(list_data_source_items_request, extra)
    end

    # List Data Source Items
    # @param list_data_source_items_request [ListDataSourceItemsRequest] 
    # @param [Hash] opts the optional parameters
    # @return [ListDataSourceItemsResponse]
    private def list_data_source_items_impl(list_data_source_items_request, opts = {})
      data, _status_code, _headers = list_data_source_items_with_http_info(list_data_source_items_request, opts)
      data
    end

    # List Data Source Items
    # @param list_data_source_items_request [ListDataSourceItemsRequest] 
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is ListDataSourceItemsResponse, status code, headers and response
    private def list_data_source_items_with_http_info_impl(list_data_source_items_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: IntegrationsApi.list_data_source_items ...'
      end
      # verify the required parameter 'list_data_source_items_request' is set
      if @api_client.config.client_side_validation && list_data_source_items_request.nil?
        fail ArgumentError, "Missing the required parameter 'list_data_source_items_request' when calling IntegrationsApi.list_data_source_items"
      end
      # resource path
      local_var_path = '/integrations/items/list'

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(list_data_source_items_request)

      # return_type
      return_type = opts[:debug_return_type] || 'ListDataSourceItemsResponse'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken', 'apiKey', 'customerId']

      new_options = opts.merge(
        :operation => :"IntegrationsApi.list_data_source_items",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: IntegrationsApi#list_data_source_items\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end


    # Outlook Folders
    #
    # After connecting your Outlook account, you can use this endpoint to list all of your folders on outlook. This includes 
    # both system folders like "inbox" and user created folders.
    #
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def list_folders(extra: {})
      data, _status_code, _headers = list_folders_with_http_info_impl(extra)
      data
    end

    # Outlook Folders
    #
    # After connecting your Outlook account, you can use this endpoint to list all of your folders on outlook. This includes 
    # both system folders like "inbox" and user created folders.
    #
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def list_folders_with_http_info(extra: {})
      list_folders_with_http_info_impl(extra)
    end

    # Outlook Folders
    # After connecting your Outlook account, you can use this endpoint to list all of your folders on outlook. This includes  both system folders like \"inbox\" and user created folders.
    # @param [Hash] opts the optional parameters
    # @return [Object]
    private def list_folders_impl(opts = {})
      data, _status_code, _headers = list_folders_with_http_info(opts)
      data
    end

    # Outlook Folders
    # After connecting your Outlook account, you can use this endpoint to list all of your folders on outlook. This includes  both system folders like \&quot;inbox\&quot; and user created folders.
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is Object, status code, headers and response
    private def list_folders_with_http_info_impl(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: IntegrationsApi.list_folders ...'
      end
      # resource path
      local_var_path = '/integrations/outlook/user_folders'

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'Object'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken', 'apiKey', 'customerId']

      new_options = opts.merge(
        :operation => :"IntegrationsApi.list_folders",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: IntegrationsApi#list_folders\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end


    # Gitbook Spaces
    #
    # After connecting your Gitbook account, you can use this endpoint to list all of your spaces under current organization.
    #
    # @param data_source_id [Integer] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def list_gitbook_spaces(data_source_id:, extra: {})
      data, _status_code, _headers = list_gitbook_spaces_with_http_info_impl(data_source_id, extra)
      data
    end

    # Gitbook Spaces
    #
    # After connecting your Gitbook account, you can use this endpoint to list all of your spaces under current organization.
    #
    # @param data_source_id [Integer] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def list_gitbook_spaces_with_http_info(data_source_id:, extra: {})
      list_gitbook_spaces_with_http_info_impl(data_source_id, extra)
    end

    # Gitbook Spaces
    # After connecting your Gitbook account, you can use this endpoint to list all of your spaces under current organization.
    # @param data_source_id [Integer] 
    # @param [Hash] opts the optional parameters
    # @return [Object]
    private def list_gitbook_spaces_impl(data_source_id, opts = {})
      data, _status_code, _headers = list_gitbook_spaces_with_http_info(data_source_id, opts)
      data
    end

    # Gitbook Spaces
    # After connecting your Gitbook account, you can use this endpoint to list all of your spaces under current organization.
    # @param data_source_id [Integer] 
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is Object, status code, headers and response
    private def list_gitbook_spaces_with_http_info_impl(data_source_id, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: IntegrationsApi.list_gitbook_spaces ...'
      end
      # verify the required parameter 'data_source_id' is set
      if @api_client.config.client_side_validation && data_source_id.nil?
        fail ArgumentError, "Missing the required parameter 'data_source_id' when calling IntegrationsApi.list_gitbook_spaces"
      end
      # resource path
      local_var_path = '/integrations/gitbook/spaces'

      # query parameters
      query_params = opts[:query_params] || {}
      query_params[:'data_source_id'] = data_source_id

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'Object'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken', 'apiKey', 'customerId']

      new_options = opts.merge(
        :operation => :"IntegrationsApi.list_gitbook_spaces",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: IntegrationsApi#list_gitbook_spaces\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end


    # Gmail Labels
    #
    # After connecting your Gmail account, you can use this endpoint to list all of your labels. User created labels
    # will have the type "user" and Gmail's default labels will have the type "system"
    #
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def list_labels(extra: {})
      data, _status_code, _headers = list_labels_with_http_info_impl(extra)
      data
    end

    # Gmail Labels
    #
    # After connecting your Gmail account, you can use this endpoint to list all of your labels. User created labels
    # will have the type "user" and Gmail's default labels will have the type "system"
    #
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def list_labels_with_http_info(extra: {})
      list_labels_with_http_info_impl(extra)
    end

    # Gmail Labels
    # After connecting your Gmail account, you can use this endpoint to list all of your labels. User created labels will have the type \"user\" and Gmail's default labels will have the type \"system\"
    # @param [Hash] opts the optional parameters
    # @return [Object]
    private def list_labels_impl(opts = {})
      data, _status_code, _headers = list_labels_with_http_info(opts)
      data
    end

    # Gmail Labels
    # After connecting your Gmail account, you can use this endpoint to list all of your labels. User created labels will have the type \&quot;user\&quot; and Gmail&#39;s default labels will have the type \&quot;system\&quot;
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is Object, status code, headers and response
    private def list_labels_with_http_info_impl(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: IntegrationsApi.list_labels ...'
      end
      # resource path
      local_var_path = '/integrations/gmail/user_labels'

      # query parameters
      query_params = opts[:query_params] || {}

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'Object'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken', 'apiKey', 'customerId']

      new_options = opts.merge(
        :operation => :"IntegrationsApi.list_labels",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: IntegrationsApi#list_labels\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end


    # Confluence Sync
    #
    # After listing pages in a user's Confluence account, the set of selected page `ids` and the
    # connected account's `data_source_id` can be passed into this endpoint to sync them into
    # Carbon. Additional parameters listed below can be used to associate data to the selected
    # pages or alter the behavior of the sync.
    #
    # @param data_source_id [Integer] 
    # @param ids [Array<String>] 
    # @param tags [Object] 
    # @param chunk_size [Integer] 
    # @param chunk_overlap [Integer] 
    # @param skip_embedding_generation [Boolean] 
    # @param embedding_model [EmbeddingGeneratorsNullable] 
    # @param generate_sparse_vectors [Boolean] 
    # @param prepend_filename_to_chunks [Boolean] 
    # @param max_items_per_chunk [Integer] 
    # @param body [SyncFilesRequest] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def sync_confluence(data_source_id:, ids:, tags: SENTINEL, chunk_size: 1500, chunk_overlap: 20, skip_embedding_generation: false, embedding_model: 'OPENAI', generate_sparse_vectors: false, prepend_filename_to_chunks: false, max_items_per_chunk: SENTINEL, extra: {})
      _body = {}
      _body[:tags] = tags if tags != SENTINEL
      _body[:data_source_id] = data_source_id if data_source_id != SENTINEL
      _body[:ids] = ids if ids != SENTINEL
      _body[:chunk_size] = chunk_size if chunk_size != SENTINEL
      _body[:chunk_overlap] = chunk_overlap if chunk_overlap != SENTINEL
      _body[:skip_embedding_generation] = skip_embedding_generation if skip_embedding_generation != SENTINEL
      _body[:embedding_model] = embedding_model if embedding_model != SENTINEL
      _body[:generate_sparse_vectors] = generate_sparse_vectors if generate_sparse_vectors != SENTINEL
      _body[:prepend_filename_to_chunks] = prepend_filename_to_chunks if prepend_filename_to_chunks != SENTINEL
      _body[:max_items_per_chunk] = max_items_per_chunk if max_items_per_chunk != SENTINEL
      sync_files_request = _body
      data, _status_code, _headers = sync_confluence_with_http_info_impl(sync_files_request, extra)
      data
    end

    # Confluence Sync
    #
    # After listing pages in a user's Confluence account, the set of selected page `ids` and the
    # connected account's `data_source_id` can be passed into this endpoint to sync them into
    # Carbon. Additional parameters listed below can be used to associate data to the selected
    # pages or alter the behavior of the sync.
    #
    # @param data_source_id [Integer] 
    # @param ids [Array<String>] 
    # @param tags [Object] 
    # @param chunk_size [Integer] 
    # @param chunk_overlap [Integer] 
    # @param skip_embedding_generation [Boolean] 
    # @param embedding_model [EmbeddingGeneratorsNullable] 
    # @param generate_sparse_vectors [Boolean] 
    # @param prepend_filename_to_chunks [Boolean] 
    # @param max_items_per_chunk [Integer] 
    # @param body [SyncFilesRequest] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def sync_confluence_with_http_info(data_source_id:, ids:, tags: SENTINEL, chunk_size: 1500, chunk_overlap: 20, skip_embedding_generation: false, embedding_model: 'OPENAI', generate_sparse_vectors: false, prepend_filename_to_chunks: false, max_items_per_chunk: SENTINEL, extra: {})
      _body = {}
      _body[:tags] = tags if tags != SENTINEL
      _body[:data_source_id] = data_source_id if data_source_id != SENTINEL
      _body[:ids] = ids if ids != SENTINEL
      _body[:chunk_size] = chunk_size if chunk_size != SENTINEL
      _body[:chunk_overlap] = chunk_overlap if chunk_overlap != SENTINEL
      _body[:skip_embedding_generation] = skip_embedding_generation if skip_embedding_generation != SENTINEL
      _body[:embedding_model] = embedding_model if embedding_model != SENTINEL
      _body[:generate_sparse_vectors] = generate_sparse_vectors if generate_sparse_vectors != SENTINEL
      _body[:prepend_filename_to_chunks] = prepend_filename_to_chunks if prepend_filename_to_chunks != SENTINEL
      _body[:max_items_per_chunk] = max_items_per_chunk if max_items_per_chunk != SENTINEL
      sync_files_request = _body
      sync_confluence_with_http_info_impl(sync_files_request, extra)
    end

    # Confluence Sync
    # After listing pages in a user's Confluence account, the set of selected page `ids` and the connected account's `data_source_id` can be passed into this endpoint to sync them into Carbon. Additional parameters listed below can be used to associate data to the selected pages or alter the behavior of the sync.
    # @param sync_files_request [SyncFilesRequest] 
    # @param [Hash] opts the optional parameters
    # @return [GenericSuccessResponse]
    private def sync_confluence_impl(sync_files_request, opts = {})
      data, _status_code, _headers = sync_confluence_with_http_info(sync_files_request, opts)
      data
    end

    # Confluence Sync
    # After listing pages in a user&#39;s Confluence account, the set of selected page &#x60;ids&#x60; and the connected account&#39;s &#x60;data_source_id&#x60; can be passed into this endpoint to sync them into Carbon. Additional parameters listed below can be used to associate data to the selected pages or alter the behavior of the sync.
    # @param sync_files_request [SyncFilesRequest] 
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is GenericSuccessResponse, status code, headers and response
    private def sync_confluence_with_http_info_impl(sync_files_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: IntegrationsApi.sync_confluence ...'
      end
      # verify the required parameter 'sync_files_request' is set
      if @api_client.config.client_side_validation && sync_files_request.nil?
        fail ArgumentError, "Missing the required parameter 'sync_files_request' when calling IntegrationsApi.sync_confluence"
      end
      # resource path
      local_var_path = '/integrations/confluence/sync'

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(sync_files_request)

      # return_type
      return_type = opts[:debug_return_type] || 'GenericSuccessResponse'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken', 'apiKey', 'customerId']

      new_options = opts.merge(
        :operation => :"IntegrationsApi.sync_confluence",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: IntegrationsApi#sync_confluence\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end


    # Sync Data Source Items
    #
    # @param data_source_id [Integer] 
    # @param body [SyncDirectoryRequest] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def sync_data_source_items(data_source_id:, extra: {})
      _body = {}
      _body[:data_source_id] = data_source_id if data_source_id != SENTINEL
      sync_directory_request = _body
      data, _status_code, _headers = sync_data_source_items_with_http_info_impl(sync_directory_request, extra)
      data
    end

    # Sync Data Source Items
    #
    # @param data_source_id [Integer] 
    # @param body [SyncDirectoryRequest] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def sync_data_source_items_with_http_info(data_source_id:, extra: {})
      _body = {}
      _body[:data_source_id] = data_source_id if data_source_id != SENTINEL
      sync_directory_request = _body
      sync_data_source_items_with_http_info_impl(sync_directory_request, extra)
    end

    # Sync Data Source Items
    # @param sync_directory_request [SyncDirectoryRequest] 
    # @param [Hash] opts the optional parameters
    # @return [OrganizationUserDataSourceAPI]
    private def sync_data_source_items_impl(sync_directory_request, opts = {})
      data, _status_code, _headers = sync_data_source_items_with_http_info(sync_directory_request, opts)
      data
    end

    # Sync Data Source Items
    # @param sync_directory_request [SyncDirectoryRequest] 
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is OrganizationUserDataSourceAPI, status code, headers and response
    private def sync_data_source_items_with_http_info_impl(sync_directory_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: IntegrationsApi.sync_data_source_items ...'
      end
      # verify the required parameter 'sync_directory_request' is set
      if @api_client.config.client_side_validation && sync_directory_request.nil?
        fail ArgumentError, "Missing the required parameter 'sync_directory_request' when calling IntegrationsApi.sync_data_source_items"
      end
      # resource path
      local_var_path = '/integrations/items/sync'

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(sync_directory_request)

      # return_type
      return_type = opts[:debug_return_type] || 'OrganizationUserDataSourceAPI'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken', 'apiKey', 'customerId']

      new_options = opts.merge(
        :operation => :"IntegrationsApi.sync_data_source_items",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: IntegrationsApi#sync_data_source_items\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end


    # Sync Files
    #
    # @param data_source_id [Integer] 
    # @param ids [Array<String>] 
    # @param tags [Object] 
    # @param chunk_size [Integer] 
    # @param chunk_overlap [Integer] 
    # @param skip_embedding_generation [Boolean] 
    # @param embedding_model [EmbeddingGeneratorsNullable] 
    # @param generate_sparse_vectors [Boolean] 
    # @param prepend_filename_to_chunks [Boolean] 
    # @param max_items_per_chunk [Integer] 
    # @param body [SyncFilesRequest] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def sync_files(data_source_id:, ids:, tags: SENTINEL, chunk_size: 1500, chunk_overlap: 20, skip_embedding_generation: false, embedding_model: 'OPENAI', generate_sparse_vectors: false, prepend_filename_to_chunks: false, max_items_per_chunk: SENTINEL, extra: {})
      _body = {}
      _body[:tags] = tags if tags != SENTINEL
      _body[:data_source_id] = data_source_id if data_source_id != SENTINEL
      _body[:ids] = ids if ids != SENTINEL
      _body[:chunk_size] = chunk_size if chunk_size != SENTINEL
      _body[:chunk_overlap] = chunk_overlap if chunk_overlap != SENTINEL
      _body[:skip_embedding_generation] = skip_embedding_generation if skip_embedding_generation != SENTINEL
      _body[:embedding_model] = embedding_model if embedding_model != SENTINEL
      _body[:generate_sparse_vectors] = generate_sparse_vectors if generate_sparse_vectors != SENTINEL
      _body[:prepend_filename_to_chunks] = prepend_filename_to_chunks if prepend_filename_to_chunks != SENTINEL
      _body[:max_items_per_chunk] = max_items_per_chunk if max_items_per_chunk != SENTINEL
      sync_files_request = _body
      data, _status_code, _headers = sync_files_with_http_info_impl(sync_files_request, extra)
      data
    end

    # Sync Files
    #
    # @param data_source_id [Integer] 
    # @param ids [Array<String>] 
    # @param tags [Object] 
    # @param chunk_size [Integer] 
    # @param chunk_overlap [Integer] 
    # @param skip_embedding_generation [Boolean] 
    # @param embedding_model [EmbeddingGeneratorsNullable] 
    # @param generate_sparse_vectors [Boolean] 
    # @param prepend_filename_to_chunks [Boolean] 
    # @param max_items_per_chunk [Integer] 
    # @param body [SyncFilesRequest] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def sync_files_with_http_info(data_source_id:, ids:, tags: SENTINEL, chunk_size: 1500, chunk_overlap: 20, skip_embedding_generation: false, embedding_model: 'OPENAI', generate_sparse_vectors: false, prepend_filename_to_chunks: false, max_items_per_chunk: SENTINEL, extra: {})
      _body = {}
      _body[:tags] = tags if tags != SENTINEL
      _body[:data_source_id] = data_source_id if data_source_id != SENTINEL
      _body[:ids] = ids if ids != SENTINEL
      _body[:chunk_size] = chunk_size if chunk_size != SENTINEL
      _body[:chunk_overlap] = chunk_overlap if chunk_overlap != SENTINEL
      _body[:skip_embedding_generation] = skip_embedding_generation if skip_embedding_generation != SENTINEL
      _body[:embedding_model] = embedding_model if embedding_model != SENTINEL
      _body[:generate_sparse_vectors] = generate_sparse_vectors if generate_sparse_vectors != SENTINEL
      _body[:prepend_filename_to_chunks] = prepend_filename_to_chunks if prepend_filename_to_chunks != SENTINEL
      _body[:max_items_per_chunk] = max_items_per_chunk if max_items_per_chunk != SENTINEL
      sync_files_request = _body
      sync_files_with_http_info_impl(sync_files_request, extra)
    end

    # Sync Files
    # @param sync_files_request [SyncFilesRequest] 
    # @param [Hash] opts the optional parameters
    # @return [GenericSuccessResponse]
    private def sync_files_impl(sync_files_request, opts = {})
      data, _status_code, _headers = sync_files_with_http_info(sync_files_request, opts)
      data
    end

    # Sync Files
    # @param sync_files_request [SyncFilesRequest] 
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is GenericSuccessResponse, status code, headers and response
    private def sync_files_with_http_info_impl(sync_files_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: IntegrationsApi.sync_files ...'
      end
      # verify the required parameter 'sync_files_request' is set
      if @api_client.config.client_side_validation && sync_files_request.nil?
        fail ArgumentError, "Missing the required parameter 'sync_files_request' when calling IntegrationsApi.sync_files"
      end
      # resource path
      local_var_path = '/integrations/files/sync'

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(sync_files_request)

      # return_type
      return_type = opts[:debug_return_type] || 'GenericSuccessResponse'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken', 'apiKey', 'customerId']

      new_options = opts.merge(
        :operation => :"IntegrationsApi.sync_files",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: IntegrationsApi#sync_files\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end


    # Gitbook Sync
    #
    # You can sync upto 20 Gitbook spaces at a time using this endpoint. Additional parameters below can be used to associate 
    # data with the synced pages or modify the sync behavior.
    #
    # @param space_ids [Array<String>] 
    # @param data_source_id [Integer] 
    # @param tags [Object] 
    # @param chunk_size [Integer] 
    # @param chunk_overlap [Integer] 
    # @param skip_embedding_generation [Boolean] 
    # @param embedding_model [EmbeddingGenerators] 
    # @param generate_sparse_vectors [Boolean] 
    # @param prepend_filename_to_chunks [Boolean] 
    # @param body [GitbookSyncRequest] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def sync_gitbook(space_ids:, data_source_id:, tags: SENTINEL, chunk_size: 1500, chunk_overlap: 20, skip_embedding_generation: false, embedding_model: 'OPENAI', generate_sparse_vectors: false, prepend_filename_to_chunks: false, extra: {})
      _body = {}
      _body[:tags] = tags if tags != SENTINEL
      _body[:space_ids] = space_ids if space_ids != SENTINEL
      _body[:data_source_id] = data_source_id if data_source_id != SENTINEL
      _body[:chunk_size] = chunk_size if chunk_size != SENTINEL
      _body[:chunk_overlap] = chunk_overlap if chunk_overlap != SENTINEL
      _body[:skip_embedding_generation] = skip_embedding_generation if skip_embedding_generation != SENTINEL
      _body[:embedding_model] = embedding_model if embedding_model != SENTINEL
      _body[:generate_sparse_vectors] = generate_sparse_vectors if generate_sparse_vectors != SENTINEL
      _body[:prepend_filename_to_chunks] = prepend_filename_to_chunks if prepend_filename_to_chunks != SENTINEL
      gitbook_sync_request = _body
      data, _status_code, _headers = sync_gitbook_with_http_info_impl(gitbook_sync_request, extra)
      data
    end

    # Gitbook Sync
    #
    # You can sync upto 20 Gitbook spaces at a time using this endpoint. Additional parameters below can be used to associate 
    # data with the synced pages or modify the sync behavior.
    #
    # @param space_ids [Array<String>] 
    # @param data_source_id [Integer] 
    # @param tags [Object] 
    # @param chunk_size [Integer] 
    # @param chunk_overlap [Integer] 
    # @param skip_embedding_generation [Boolean] 
    # @param embedding_model [EmbeddingGenerators] 
    # @param generate_sparse_vectors [Boolean] 
    # @param prepend_filename_to_chunks [Boolean] 
    # @param body [GitbookSyncRequest] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def sync_gitbook_with_http_info(space_ids:, data_source_id:, tags: SENTINEL, chunk_size: 1500, chunk_overlap: 20, skip_embedding_generation: false, embedding_model: 'OPENAI', generate_sparse_vectors: false, prepend_filename_to_chunks: false, extra: {})
      _body = {}
      _body[:tags] = tags if tags != SENTINEL
      _body[:space_ids] = space_ids if space_ids != SENTINEL
      _body[:data_source_id] = data_source_id if data_source_id != SENTINEL
      _body[:chunk_size] = chunk_size if chunk_size != SENTINEL
      _body[:chunk_overlap] = chunk_overlap if chunk_overlap != SENTINEL
      _body[:skip_embedding_generation] = skip_embedding_generation if skip_embedding_generation != SENTINEL
      _body[:embedding_model] = embedding_model if embedding_model != SENTINEL
      _body[:generate_sparse_vectors] = generate_sparse_vectors if generate_sparse_vectors != SENTINEL
      _body[:prepend_filename_to_chunks] = prepend_filename_to_chunks if prepend_filename_to_chunks != SENTINEL
      gitbook_sync_request = _body
      sync_gitbook_with_http_info_impl(gitbook_sync_request, extra)
    end

    # Gitbook Sync
    # You can sync upto 20 Gitbook spaces at a time using this endpoint. Additional parameters below can be used to associate  data with the synced pages or modify the sync behavior.
    # @param gitbook_sync_request [GitbookSyncRequest] 
    # @param [Hash] opts the optional parameters
    # @return [Object]
    private def sync_gitbook_impl(gitbook_sync_request, opts = {})
      data, _status_code, _headers = sync_gitbook_with_http_info(gitbook_sync_request, opts)
      data
    end

    # Gitbook Sync
    # You can sync upto 20 Gitbook spaces at a time using this endpoint. Additional parameters below can be used to associate  data with the synced pages or modify the sync behavior.
    # @param gitbook_sync_request [GitbookSyncRequest] 
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is Object, status code, headers and response
    private def sync_gitbook_with_http_info_impl(gitbook_sync_request, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: IntegrationsApi.sync_gitbook ...'
      end
      # verify the required parameter 'gitbook_sync_request' is set
      if @api_client.config.client_side_validation && gitbook_sync_request.nil?
        fail ArgumentError, "Missing the required parameter 'gitbook_sync_request' when calling IntegrationsApi.sync_gitbook"
      end
      # resource path
      local_var_path = '/integrations/gitbook/sync'

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(gitbook_sync_request)

      # return_type
      return_type = opts[:debug_return_type] || 'Object'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken', 'apiKey', 'customerId']

      new_options = opts.merge(
        :operation => :"IntegrationsApi.sync_gitbook",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: IntegrationsApi#sync_gitbook\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end


    # Gmail Sync
    #
    # Once you have successfully connected your gmail account, you can choose which emails to sync with us
    # using the filters parameter. Filters is a JSON object with key value pairs. It also supports AND and OR operations.
    # For now, we support a limited set of keys listed below.
    # 
    # <b>label</b>: Inbuilt Gmail labels, for example "Important" or a custom label you created.  
    # <b>after</b> or <b>before</b>: A date in YYYY/mm/dd format (example 2023/12/31). Gets emails after/before a certain date.
    # You can also use them in combination to get emails from a certain period.  
    # <b>is</b>: Can have the following values - starred, important, snoozed, and unread  
    # 
    # Using keys or values outside of the specified values can lead to unexpected behaviour.
    # 
    # An example of a basic query with filters can be
    # ```json
    # {
    #     "filters": {
    #             "key": "label",
    #             "value": "Test"
    #         }
    # }
    # ```
    # Which will list all emails that have the label "Test".
    # 
    # You can use AND and OR operation in the following way:
    # ```json
    # {
    #     "filters": {
    #         "AND": [
    #             {
    #                 "key": "after",
    #                 "value": "2024/01/07"
    #             },
    #             {
    #                 "OR": [
    #                     {
    #                         "key": "label",
    #                         "value": "Personal"
    #                     },
    #                     {
    #                         "key": "is",
    #                         "value": "starred"
    #                     }
    #                 ]
    #             }
    #         ]
    #     }
    # }
    # ```
    # This will return emails after 7th of Jan that are either starred or have the label "Personal". 
    # Note that this is the highest level of nesting we support, i.e. you can't add more AND/OR filters within the OR filter
    # in the above example.
    #
    # @param filters [Object] 
    # @param tags [Object] 
    # @param chunk_size [Integer] 
    # @param chunk_overlap [Integer] 
    # @param skip_embedding_generation [Boolean] 
    # @param embedding_model [EmbeddingGenerators] 
    # @param generate_sparse_vectors [Boolean] 
    # @param prepend_filename_to_chunks [Boolean] 
    # @param body [GmailSyncInput] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def sync_gmail(filters:, tags: SENTINEL, chunk_size: 1500, chunk_overlap: 20, skip_embedding_generation: false, embedding_model: 'OPENAI', generate_sparse_vectors: false, prepend_filename_to_chunks: false, extra: {})
      _body = {}
      _body[:tags] = tags if tags != SENTINEL
      _body[:filters] = filters if filters != SENTINEL
      _body[:chunk_size] = chunk_size if chunk_size != SENTINEL
      _body[:chunk_overlap] = chunk_overlap if chunk_overlap != SENTINEL
      _body[:skip_embedding_generation] = skip_embedding_generation if skip_embedding_generation != SENTINEL
      _body[:embedding_model] = embedding_model if embedding_model != SENTINEL
      _body[:generate_sparse_vectors] = generate_sparse_vectors if generate_sparse_vectors != SENTINEL
      _body[:prepend_filename_to_chunks] = prepend_filename_to_chunks if prepend_filename_to_chunks != SENTINEL
      gmail_sync_input = _body
      data, _status_code, _headers = sync_gmail_with_http_info_impl(gmail_sync_input, extra)
      data
    end

    # Gmail Sync
    #
    # Once you have successfully connected your gmail account, you can choose which emails to sync with us
    # using the filters parameter. Filters is a JSON object with key value pairs. It also supports AND and OR operations.
    # For now, we support a limited set of keys listed below.
    # 
    # <b>label</b>: Inbuilt Gmail labels, for example "Important" or a custom label you created.  
    # <b>after</b> or <b>before</b>: A date in YYYY/mm/dd format (example 2023/12/31). Gets emails after/before a certain date.
    # You can also use them in combination to get emails from a certain period.  
    # <b>is</b>: Can have the following values - starred, important, snoozed, and unread  
    # 
    # Using keys or values outside of the specified values can lead to unexpected behaviour.
    # 
    # An example of a basic query with filters can be
    # ```json
    # {
    #     "filters": {
    #             "key": "label",
    #             "value": "Test"
    #         }
    # }
    # ```
    # Which will list all emails that have the label "Test".
    # 
    # You can use AND and OR operation in the following way:
    # ```json
    # {
    #     "filters": {
    #         "AND": [
    #             {
    #                 "key": "after",
    #                 "value": "2024/01/07"
    #             },
    #             {
    #                 "OR": [
    #                     {
    #                         "key": "label",
    #                         "value": "Personal"
    #                     },
    #                     {
    #                         "key": "is",
    #                         "value": "starred"
    #                     }
    #                 ]
    #             }
    #         ]
    #     }
    # }
    # ```
    # This will return emails after 7th of Jan that are either starred or have the label "Personal". 
    # Note that this is the highest level of nesting we support, i.e. you can't add more AND/OR filters within the OR filter
    # in the above example.
    #
    # @param filters [Object] 
    # @param tags [Object] 
    # @param chunk_size [Integer] 
    # @param chunk_overlap [Integer] 
    # @param skip_embedding_generation [Boolean] 
    # @param embedding_model [EmbeddingGenerators] 
    # @param generate_sparse_vectors [Boolean] 
    # @param prepend_filename_to_chunks [Boolean] 
    # @param body [GmailSyncInput] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def sync_gmail_with_http_info(filters:, tags: SENTINEL, chunk_size: 1500, chunk_overlap: 20, skip_embedding_generation: false, embedding_model: 'OPENAI', generate_sparse_vectors: false, prepend_filename_to_chunks: false, extra: {})
      _body = {}
      _body[:tags] = tags if tags != SENTINEL
      _body[:filters] = filters if filters != SENTINEL
      _body[:chunk_size] = chunk_size if chunk_size != SENTINEL
      _body[:chunk_overlap] = chunk_overlap if chunk_overlap != SENTINEL
      _body[:skip_embedding_generation] = skip_embedding_generation if skip_embedding_generation != SENTINEL
      _body[:embedding_model] = embedding_model if embedding_model != SENTINEL
      _body[:generate_sparse_vectors] = generate_sparse_vectors if generate_sparse_vectors != SENTINEL
      _body[:prepend_filename_to_chunks] = prepend_filename_to_chunks if prepend_filename_to_chunks != SENTINEL
      gmail_sync_input = _body
      sync_gmail_with_http_info_impl(gmail_sync_input, extra)
    end

    # Gmail Sync
    # Once you have successfully connected your gmail account, you can choose which emails to sync with us using the filters parameter. Filters is a JSON object with key value pairs. It also supports AND and OR operations. For now, we support a limited set of keys listed below.  <b>label</b>: Inbuilt Gmail labels, for example \"Important\" or a custom label you created.   <b>after</b> or <b>before</b>: A date in YYYY/mm/dd format (example 2023/12/31). Gets emails after/before a certain date. You can also use them in combination to get emails from a certain period.   <b>is</b>: Can have the following values - starred, important, snoozed, and unread    Using keys or values outside of the specified values can lead to unexpected behaviour.  An example of a basic query with filters can be ```json {     \"filters\": {             \"key\": \"label\",             \"value\": \"Test\"         } } ``` Which will list all emails that have the label \"Test\".  You can use AND and OR operation in the following way: ```json {     \"filters\": {         \"AND\": [             {                 \"key\": \"after\",                 \"value\": \"2024/01/07\"             },             {                 \"OR\": [                     {                         \"key\": \"label\",                         \"value\": \"Personal\"                     },                     {                         \"key\": \"is\",                         \"value\": \"starred\"                     }                 ]             }         ]     } } ``` This will return emails after 7th of Jan that are either starred or have the label \"Personal\".  Note that this is the highest level of nesting we support, i.e. you can't add more AND/OR filters within the OR filter in the above example.
    # @param gmail_sync_input [GmailSyncInput] 
    # @param [Hash] opts the optional parameters
    # @return [GenericSuccessResponse]
    private def sync_gmail_impl(gmail_sync_input, opts = {})
      data, _status_code, _headers = sync_gmail_with_http_info(gmail_sync_input, opts)
      data
    end

    # Gmail Sync
    # Once you have successfully connected your gmail account, you can choose which emails to sync with us using the filters parameter. Filters is a JSON object with key value pairs. It also supports AND and OR operations. For now, we support a limited set of keys listed below.  &lt;b&gt;label&lt;/b&gt;: Inbuilt Gmail labels, for example \&quot;Important\&quot; or a custom label you created.   &lt;b&gt;after&lt;/b&gt; or &lt;b&gt;before&lt;/b&gt;: A date in YYYY/mm/dd format (example 2023/12/31). Gets emails after/before a certain date. You can also use them in combination to get emails from a certain period.   &lt;b&gt;is&lt;/b&gt;: Can have the following values - starred, important, snoozed, and unread    Using keys or values outside of the specified values can lead to unexpected behaviour.  An example of a basic query with filters can be &#x60;&#x60;&#x60;json {     \&quot;filters\&quot;: {             \&quot;key\&quot;: \&quot;label\&quot;,             \&quot;value\&quot;: \&quot;Test\&quot;         } } &#x60;&#x60;&#x60; Which will list all emails that have the label \&quot;Test\&quot;.  You can use AND and OR operation in the following way: &#x60;&#x60;&#x60;json {     \&quot;filters\&quot;: {         \&quot;AND\&quot;: [             {                 \&quot;key\&quot;: \&quot;after\&quot;,                 \&quot;value\&quot;: \&quot;2024/01/07\&quot;             },             {                 \&quot;OR\&quot;: [                     {                         \&quot;key\&quot;: \&quot;label\&quot;,                         \&quot;value\&quot;: \&quot;Personal\&quot;                     },                     {                         \&quot;key\&quot;: \&quot;is\&quot;,                         \&quot;value\&quot;: \&quot;starred\&quot;                     }                 ]             }         ]     } } &#x60;&#x60;&#x60; This will return emails after 7th of Jan that are either starred or have the label \&quot;Personal\&quot;.  Note that this is the highest level of nesting we support, i.e. you can&#39;t add more AND/OR filters within the OR filter in the above example.
    # @param gmail_sync_input [GmailSyncInput] 
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is GenericSuccessResponse, status code, headers and response
    private def sync_gmail_with_http_info_impl(gmail_sync_input, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: IntegrationsApi.sync_gmail ...'
      end
      # verify the required parameter 'gmail_sync_input' is set
      if @api_client.config.client_side_validation && gmail_sync_input.nil?
        fail ArgumentError, "Missing the required parameter 'gmail_sync_input' when calling IntegrationsApi.sync_gmail"
      end
      # resource path
      local_var_path = '/integrations/gmail/sync'

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(gmail_sync_input)

      # return_type
      return_type = opts[:debug_return_type] || 'GenericSuccessResponse'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken', 'apiKey', 'customerId']

      new_options = opts.merge(
        :operation => :"IntegrationsApi.sync_gmail",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: IntegrationsApi#sync_gmail\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end


    # Outlook Sync
    #
    # Once you have successfully connected your Outlook account, you can choose which emails to sync with us
    # using the filters and folder parameter. "folder" should be the folder you want to sync from Outlook. By default
    # we get messages from your inbox folder.  
    # Filters is a JSON object with key value pairs. It also supports AND and OR operations.
    # For now, we support a limited set of keys listed below.
    # 
    # <b>category</b>: Custom categories that you created in Outlook.  
    # <b>after</b> or <b>before</b>: A date in YYYY/mm/dd format (example 2023/12/31). Gets emails after/before a certain date. You can also use them in combination to get emails from a certain period.    
    # <b>is</b>: Can have the following values: flagged   
    # 
    # An example of a basic query with filters can be
    # ```json
    # {
    #     "filters": {
    #             "key": "category",
    #             "value": "Test"
    #         }
    # }
    # ```
    # Which will list all emails that have the category "Test".  
    # 
    # Specifying a custom folder in the same query
    # ```json
    # {
    #     "folder": "Folder Name",
    #     "filters": {
    #             "key": "category",
    #             "value": "Test"
    #         }
    # }
    # ```
    # 
    # You can use AND and OR operation in the following way:
    # ```json
    # {
    #     "filters": {
    #         "AND": [
    #             {
    #                 "key": "after",
    #                 "value": "2024/01/07"
    #             },
    #             {
    #                 "OR": [
    #                     {
    #                         "key": "category",
    #                         "value": "Personal"
    #                     },
    #                     {
    #                         "key": "category",
    #                         "value": "Test"
    #                     },
    #                 ]
    #             }
    #         ]
    #     }
    # }
    # ```
    # This will return emails after 7th of Jan that have either Personal or Test as category. 
    # Note that this is the highest level of nesting we support, i.e. you can't add more AND/OR filters within the OR filter
    # in the above example.
    #
    # @param filters [Object] 
    # @param tags [Object] 
    # @param folder [String] 
    # @param chunk_size [Integer] 
    # @param chunk_overlap [Integer] 
    # @param skip_embedding_generation [Boolean] 
    # @param embedding_model [EmbeddingGenerators] 
    # @param generate_sparse_vectors [Boolean] 
    # @param prepend_filename_to_chunks [Boolean] 
    # @param body [OutlookSyncInput] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def sync_outlook(filters:, tags: SENTINEL, folder: 'Inbox', chunk_size: 1500, chunk_overlap: 20, skip_embedding_generation: false, embedding_model: 'OPENAI', generate_sparse_vectors: false, prepend_filename_to_chunks: false, extra: {})
      _body = {}
      _body[:tags] = tags if tags != SENTINEL
      _body[:folder] = folder if folder != SENTINEL
      _body[:filters] = filters if filters != SENTINEL
      _body[:chunk_size] = chunk_size if chunk_size != SENTINEL
      _body[:chunk_overlap] = chunk_overlap if chunk_overlap != SENTINEL
      _body[:skip_embedding_generation] = skip_embedding_generation if skip_embedding_generation != SENTINEL
      _body[:embedding_model] = embedding_model if embedding_model != SENTINEL
      _body[:generate_sparse_vectors] = generate_sparse_vectors if generate_sparse_vectors != SENTINEL
      _body[:prepend_filename_to_chunks] = prepend_filename_to_chunks if prepend_filename_to_chunks != SENTINEL
      outlook_sync_input = _body
      data, _status_code, _headers = sync_outlook_with_http_info_impl(outlook_sync_input, extra)
      data
    end

    # Outlook Sync
    #
    # Once you have successfully connected your Outlook account, you can choose which emails to sync with us
    # using the filters and folder parameter. "folder" should be the folder you want to sync from Outlook. By default
    # we get messages from your inbox folder.  
    # Filters is a JSON object with key value pairs. It also supports AND and OR operations.
    # For now, we support a limited set of keys listed below.
    # 
    # <b>category</b>: Custom categories that you created in Outlook.  
    # <b>after</b> or <b>before</b>: A date in YYYY/mm/dd format (example 2023/12/31). Gets emails after/before a certain date. You can also use them in combination to get emails from a certain period.    
    # <b>is</b>: Can have the following values: flagged   
    # 
    # An example of a basic query with filters can be
    # ```json
    # {
    #     "filters": {
    #             "key": "category",
    #             "value": "Test"
    #         }
    # }
    # ```
    # Which will list all emails that have the category "Test".  
    # 
    # Specifying a custom folder in the same query
    # ```json
    # {
    #     "folder": "Folder Name",
    #     "filters": {
    #             "key": "category",
    #             "value": "Test"
    #         }
    # }
    # ```
    # 
    # You can use AND and OR operation in the following way:
    # ```json
    # {
    #     "filters": {
    #         "AND": [
    #             {
    #                 "key": "after",
    #                 "value": "2024/01/07"
    #             },
    #             {
    #                 "OR": [
    #                     {
    #                         "key": "category",
    #                         "value": "Personal"
    #                     },
    #                     {
    #                         "key": "category",
    #                         "value": "Test"
    #                     },
    #                 ]
    #             }
    #         ]
    #     }
    # }
    # ```
    # This will return emails after 7th of Jan that have either Personal or Test as category. 
    # Note that this is the highest level of nesting we support, i.e. you can't add more AND/OR filters within the OR filter
    # in the above example.
    #
    # @param filters [Object] 
    # @param tags [Object] 
    # @param folder [String] 
    # @param chunk_size [Integer] 
    # @param chunk_overlap [Integer] 
    # @param skip_embedding_generation [Boolean] 
    # @param embedding_model [EmbeddingGenerators] 
    # @param generate_sparse_vectors [Boolean] 
    # @param prepend_filename_to_chunks [Boolean] 
    # @param body [OutlookSyncInput] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def sync_outlook_with_http_info(filters:, tags: SENTINEL, folder: 'Inbox', chunk_size: 1500, chunk_overlap: 20, skip_embedding_generation: false, embedding_model: 'OPENAI', generate_sparse_vectors: false, prepend_filename_to_chunks: false, extra: {})
      _body = {}
      _body[:tags] = tags if tags != SENTINEL
      _body[:folder] = folder if folder != SENTINEL
      _body[:filters] = filters if filters != SENTINEL
      _body[:chunk_size] = chunk_size if chunk_size != SENTINEL
      _body[:chunk_overlap] = chunk_overlap if chunk_overlap != SENTINEL
      _body[:skip_embedding_generation] = skip_embedding_generation if skip_embedding_generation != SENTINEL
      _body[:embedding_model] = embedding_model if embedding_model != SENTINEL
      _body[:generate_sparse_vectors] = generate_sparse_vectors if generate_sparse_vectors != SENTINEL
      _body[:prepend_filename_to_chunks] = prepend_filename_to_chunks if prepend_filename_to_chunks != SENTINEL
      outlook_sync_input = _body
      sync_outlook_with_http_info_impl(outlook_sync_input, extra)
    end

    # Outlook Sync
    # Once you have successfully connected your Outlook account, you can choose which emails to sync with us using the filters and folder parameter. \"folder\" should be the folder you want to sync from Outlook. By default we get messages from your inbox folder.   Filters is a JSON object with key value pairs. It also supports AND and OR operations. For now, we support a limited set of keys listed below.  <b>category</b>: Custom categories that you created in Outlook.   <b>after</b> or <b>before</b>: A date in YYYY/mm/dd format (example 2023/12/31). Gets emails after/before a certain date. You can also use them in combination to get emails from a certain period.     <b>is</b>: Can have the following values: flagged     An example of a basic query with filters can be ```json {     \"filters\": {             \"key\": \"category\",             \"value\": \"Test\"         } } ``` Which will list all emails that have the category \"Test\".    Specifying a custom folder in the same query ```json {     \"folder\": \"Folder Name\",     \"filters\": {             \"key\": \"category\",             \"value\": \"Test\"         } } ```  You can use AND and OR operation in the following way: ```json {     \"filters\": {         \"AND\": [             {                 \"key\": \"after\",                 \"value\": \"2024/01/07\"             },             {                 \"OR\": [                     {                         \"key\": \"category\",                         \"value\": \"Personal\"                     },                     {                         \"key\": \"category\",                         \"value\": \"Test\"                     },                 ]             }         ]     } } ``` This will return emails after 7th of Jan that have either Personal or Test as category.  Note that this is the highest level of nesting we support, i.e. you can't add more AND/OR filters within the OR filter in the above example.
    # @param outlook_sync_input [OutlookSyncInput] 
    # @param [Hash] opts the optional parameters
    # @return [GenericSuccessResponse]
    private def sync_outlook_impl(outlook_sync_input, opts = {})
      data, _status_code, _headers = sync_outlook_with_http_info(outlook_sync_input, opts)
      data
    end

    # Outlook Sync
    # Once you have successfully connected your Outlook account, you can choose which emails to sync with us using the filters and folder parameter. \&quot;folder\&quot; should be the folder you want to sync from Outlook. By default we get messages from your inbox folder.   Filters is a JSON object with key value pairs. It also supports AND and OR operations. For now, we support a limited set of keys listed below.  &lt;b&gt;category&lt;/b&gt;: Custom categories that you created in Outlook.   &lt;b&gt;after&lt;/b&gt; or &lt;b&gt;before&lt;/b&gt;: A date in YYYY/mm/dd format (example 2023/12/31). Gets emails after/before a certain date. You can also use them in combination to get emails from a certain period.     &lt;b&gt;is&lt;/b&gt;: Can have the following values: flagged     An example of a basic query with filters can be &#x60;&#x60;&#x60;json {     \&quot;filters\&quot;: {             \&quot;key\&quot;: \&quot;category\&quot;,             \&quot;value\&quot;: \&quot;Test\&quot;         } } &#x60;&#x60;&#x60; Which will list all emails that have the category \&quot;Test\&quot;.    Specifying a custom folder in the same query &#x60;&#x60;&#x60;json {     \&quot;folder\&quot;: \&quot;Folder Name\&quot;,     \&quot;filters\&quot;: {             \&quot;key\&quot;: \&quot;category\&quot;,             \&quot;value\&quot;: \&quot;Test\&quot;         } } &#x60;&#x60;&#x60;  You can use AND and OR operation in the following way: &#x60;&#x60;&#x60;json {     \&quot;filters\&quot;: {         \&quot;AND\&quot;: [             {                 \&quot;key\&quot;: \&quot;after\&quot;,                 \&quot;value\&quot;: \&quot;2024/01/07\&quot;             },             {                 \&quot;OR\&quot;: [                     {                         \&quot;key\&quot;: \&quot;category\&quot;,                         \&quot;value\&quot;: \&quot;Personal\&quot;                     },                     {                         \&quot;key\&quot;: \&quot;category\&quot;,                         \&quot;value\&quot;: \&quot;Test\&quot;                     },                 ]             }         ]     } } &#x60;&#x60;&#x60; This will return emails after 7th of Jan that have either Personal or Test as category.  Note that this is the highest level of nesting we support, i.e. you can&#39;t add more AND/OR filters within the OR filter in the above example.
    # @param outlook_sync_input [OutlookSyncInput] 
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is GenericSuccessResponse, status code, headers and response
    private def sync_outlook_with_http_info_impl(outlook_sync_input, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: IntegrationsApi.sync_outlook ...'
      end
      # verify the required parameter 'outlook_sync_input' is set
      if @api_client.config.client_side_validation && outlook_sync_input.nil?
        fail ArgumentError, "Missing the required parameter 'outlook_sync_input' when calling IntegrationsApi.sync_outlook"
      end
      # resource path
      local_var_path = '/integrations/outlook/sync'

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(outlook_sync_input)

      # return_type
      return_type = opts[:debug_return_type] || 'GenericSuccessResponse'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken', 'apiKey', 'customerId']

      new_options = opts.merge(
        :operation => :"IntegrationsApi.sync_outlook",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: IntegrationsApi#sync_outlook\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end


    # Rss Feed
    #
    # @param url [String] 
    # @param tags [Object] 
    # @param chunk_size [Integer] 
    # @param chunk_overlap [Integer] 
    # @param skip_embedding_generation [Boolean] 
    # @param embedding_model [EmbeddingGenerators] 
    # @param generate_sparse_vectors [Boolean] 
    # @param prepend_filename_to_chunks [Boolean] 
    # @param body [RSSFeedInput] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def sync_rss_feed(url:, tags: SENTINEL, chunk_size: 1500, chunk_overlap: 20, skip_embedding_generation: false, embedding_model: 'OPENAI', generate_sparse_vectors: false, prepend_filename_to_chunks: false, extra: {})
      _body = {}
      _body[:tags] = tags if tags != SENTINEL
      _body[:url] = url if url != SENTINEL
      _body[:chunk_size] = chunk_size if chunk_size != SENTINEL
      _body[:chunk_overlap] = chunk_overlap if chunk_overlap != SENTINEL
      _body[:skip_embedding_generation] = skip_embedding_generation if skip_embedding_generation != SENTINEL
      _body[:embedding_model] = embedding_model if embedding_model != SENTINEL
      _body[:generate_sparse_vectors] = generate_sparse_vectors if generate_sparse_vectors != SENTINEL
      _body[:prepend_filename_to_chunks] = prepend_filename_to_chunks if prepend_filename_to_chunks != SENTINEL
      rss_feed_input = _body
      data, _status_code, _headers = sync_rss_feed_with_http_info_impl(rss_feed_input, extra)
      data
    end

    # Rss Feed
    #
    # @param url [String] 
    # @param tags [Object] 
    # @param chunk_size [Integer] 
    # @param chunk_overlap [Integer] 
    # @param skip_embedding_generation [Boolean] 
    # @param embedding_model [EmbeddingGenerators] 
    # @param generate_sparse_vectors [Boolean] 
    # @param prepend_filename_to_chunks [Boolean] 
    # @param body [RSSFeedInput] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def sync_rss_feed_with_http_info(url:, tags: SENTINEL, chunk_size: 1500, chunk_overlap: 20, skip_embedding_generation: false, embedding_model: 'OPENAI', generate_sparse_vectors: false, prepend_filename_to_chunks: false, extra: {})
      _body = {}
      _body[:tags] = tags if tags != SENTINEL
      _body[:url] = url if url != SENTINEL
      _body[:chunk_size] = chunk_size if chunk_size != SENTINEL
      _body[:chunk_overlap] = chunk_overlap if chunk_overlap != SENTINEL
      _body[:skip_embedding_generation] = skip_embedding_generation if skip_embedding_generation != SENTINEL
      _body[:embedding_model] = embedding_model if embedding_model != SENTINEL
      _body[:generate_sparse_vectors] = generate_sparse_vectors if generate_sparse_vectors != SENTINEL
      _body[:prepend_filename_to_chunks] = prepend_filename_to_chunks if prepend_filename_to_chunks != SENTINEL
      rss_feed_input = _body
      sync_rss_feed_with_http_info_impl(rss_feed_input, extra)
    end

    # Rss Feed
    # @param rss_feed_input [RSSFeedInput] 
    # @param [Hash] opts the optional parameters
    # @return [GenericSuccessResponse]
    private def sync_rss_feed_impl(rss_feed_input, opts = {})
      data, _status_code, _headers = sync_rss_feed_with_http_info(rss_feed_input, opts)
      data
    end

    # Rss Feed
    # @param rss_feed_input [RSSFeedInput] 
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is GenericSuccessResponse, status code, headers and response
    private def sync_rss_feed_with_http_info_impl(rss_feed_input, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: IntegrationsApi.sync_rss_feed ...'
      end
      # verify the required parameter 'rss_feed_input' is set
      if @api_client.config.client_side_validation && rss_feed_input.nil?
        fail ArgumentError, "Missing the required parameter 'rss_feed_input' when calling IntegrationsApi.sync_rss_feed"
      end
      # resource path
      local_var_path = '/integrations/rss_feed'

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(rss_feed_input)

      # return_type
      return_type = opts[:debug_return_type] || 'GenericSuccessResponse'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken', 'apiKey', 'customerId']

      new_options = opts.merge(
        :operation => :"IntegrationsApi.sync_rss_feed",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: IntegrationsApi#sync_rss_feed\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end


    # S3 Files
    #
    # After optionally loading the items via /integrations/items/sync and integrations/items/list, use the bucket name 
    # and object key as the ID in this endpoint to sync them into Carbon. Additional parameters below can associate 
    # data with the selected items or modify the sync behavior
    #
    # @param ids [Array<S3GetFileInput>] 
    # @param tags [Object] 
    # @param chunk_size [Integer] 
    # @param chunk_overlap [Integer] 
    # @param skip_embedding_generation [Boolean] 
    # @param embedding_model [EmbeddingGenerators] 
    # @param generate_sparse_vectors [Boolean] 
    # @param prepend_filename_to_chunks [Boolean] 
    # @param max_items_per_chunk [Integer] 
    # @param body [S3FileSyncInput] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def sync_s3_files(ids:, tags: SENTINEL, chunk_size: 1500, chunk_overlap: 20, skip_embedding_generation: false, embedding_model: 'OPENAI', generate_sparse_vectors: false, prepend_filename_to_chunks: false, max_items_per_chunk: SENTINEL, extra: {})
      _body = {}
      _body[:tags] = tags if tags != SENTINEL
      _body[:ids] = ids if ids != SENTINEL
      _body[:chunk_size] = chunk_size if chunk_size != SENTINEL
      _body[:chunk_overlap] = chunk_overlap if chunk_overlap != SENTINEL
      _body[:skip_embedding_generation] = skip_embedding_generation if skip_embedding_generation != SENTINEL
      _body[:embedding_model] = embedding_model if embedding_model != SENTINEL
      _body[:generate_sparse_vectors] = generate_sparse_vectors if generate_sparse_vectors != SENTINEL
      _body[:prepend_filename_to_chunks] = prepend_filename_to_chunks if prepend_filename_to_chunks != SENTINEL
      _body[:max_items_per_chunk] = max_items_per_chunk if max_items_per_chunk != SENTINEL
      s3_file_sync_input = _body
      data, _status_code, _headers = sync_s3_files_with_http_info_impl(s3_file_sync_input, extra)
      data
    end

    # S3 Files
    #
    # After optionally loading the items via /integrations/items/sync and integrations/items/list, use the bucket name 
    # and object key as the ID in this endpoint to sync them into Carbon. Additional parameters below can associate 
    # data with the selected items or modify the sync behavior
    #
    # @param ids [Array<S3GetFileInput>] 
    # @param tags [Object] 
    # @param chunk_size [Integer] 
    # @param chunk_overlap [Integer] 
    # @param skip_embedding_generation [Boolean] 
    # @param embedding_model [EmbeddingGenerators] 
    # @param generate_sparse_vectors [Boolean] 
    # @param prepend_filename_to_chunks [Boolean] 
    # @param max_items_per_chunk [Integer] 
    # @param body [S3FileSyncInput] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def sync_s3_files_with_http_info(ids:, tags: SENTINEL, chunk_size: 1500, chunk_overlap: 20, skip_embedding_generation: false, embedding_model: 'OPENAI', generate_sparse_vectors: false, prepend_filename_to_chunks: false, max_items_per_chunk: SENTINEL, extra: {})
      _body = {}
      _body[:tags] = tags if tags != SENTINEL
      _body[:ids] = ids if ids != SENTINEL
      _body[:chunk_size] = chunk_size if chunk_size != SENTINEL
      _body[:chunk_overlap] = chunk_overlap if chunk_overlap != SENTINEL
      _body[:skip_embedding_generation] = skip_embedding_generation if skip_embedding_generation != SENTINEL
      _body[:embedding_model] = embedding_model if embedding_model != SENTINEL
      _body[:generate_sparse_vectors] = generate_sparse_vectors if generate_sparse_vectors != SENTINEL
      _body[:prepend_filename_to_chunks] = prepend_filename_to_chunks if prepend_filename_to_chunks != SENTINEL
      _body[:max_items_per_chunk] = max_items_per_chunk if max_items_per_chunk != SENTINEL
      s3_file_sync_input = _body
      sync_s3_files_with_http_info_impl(s3_file_sync_input, extra)
    end

    # S3 Files
    # After optionally loading the items via /integrations/items/sync and integrations/items/list, use the bucket name  and object key as the ID in this endpoint to sync them into Carbon. Additional parameters below can associate  data with the selected items or modify the sync behavior
    # @param s3_file_sync_input [S3FileSyncInput] 
    # @param [Hash] opts the optional parameters
    # @return [GenericSuccessResponse]
    private def sync_s3_files_impl(s3_file_sync_input, opts = {})
      data, _status_code, _headers = sync_s3_files_with_http_info(s3_file_sync_input, opts)
      data
    end

    # S3 Files
    # After optionally loading the items via /integrations/items/sync and integrations/items/list, use the bucket name  and object key as the ID in this endpoint to sync them into Carbon. Additional parameters below can associate  data with the selected items or modify the sync behavior
    # @param s3_file_sync_input [S3FileSyncInput] 
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is GenericSuccessResponse, status code, headers and response
    private def sync_s3_files_with_http_info_impl(s3_file_sync_input, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: IntegrationsApi.sync_s3_files ...'
      end
      # verify the required parameter 's3_file_sync_input' is set
      if @api_client.config.client_side_validation && s3_file_sync_input.nil?
        fail ArgumentError, "Missing the required parameter 's3_file_sync_input' when calling IntegrationsApi.sync_s3_files"
      end
      # resource path
      local_var_path = '/integrations/s3/files'

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(s3_file_sync_input)

      # return_type
      return_type = opts[:debug_return_type] || 'GenericSuccessResponse'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken', 'apiKey', 'customerId']

      new_options = opts.merge(
        :operation => :"IntegrationsApi.sync_s3_files",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: IntegrationsApi#sync_s3_files\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end
  end

  # top-level client access to avoid having the user to insantiate their own API instances
  Integrations = IntegrationsApi::new
end
