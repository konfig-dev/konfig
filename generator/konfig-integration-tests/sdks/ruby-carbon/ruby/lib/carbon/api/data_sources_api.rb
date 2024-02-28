=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'cgi'

module Carbon
  class DataSourcesApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end

    # User Data Sources
    #
    # @param pagination [Pagination] 
    # @param order_by [OrganizationUserDataSourceOrderByColumns] 
    # @param order_dir [OrderDir] 
    # @param filters [OrganizationUserDataSourceFilters] 
    # @param body [OrganizationUserDataSourceQueryInput] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def query_user_data_sources(pagination: SENTINEL, order_by: 'updated_at', order_dir: 'asc', filters: SENTINEL, extra: {})
      _body = {}
      _body[:pagination] = pagination if pagination != SENTINEL
      _body[:order_by] = order_by if order_by != SENTINEL
      _body[:order_dir] = order_dir if order_dir != SENTINEL
      _body[:filters] = filters if filters != SENTINEL
      organization_user_data_source_query_input = _body
      data, _status_code, _headers = query_user_data_sources_with_http_info_impl(organization_user_data_source_query_input, extra)
      data
    end

    # User Data Sources
    #
    # @param pagination [Pagination] 
    # @param order_by [OrganizationUserDataSourceOrderByColumns] 
    # @param order_dir [OrderDir] 
    # @param filters [OrganizationUserDataSourceFilters] 
    # @param body [OrganizationUserDataSourceQueryInput] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def query_user_data_sources_with_http_info(pagination: SENTINEL, order_by: 'updated_at', order_dir: 'asc', filters: SENTINEL, extra: {})
      _body = {}
      _body[:pagination] = pagination if pagination != SENTINEL
      _body[:order_by] = order_by if order_by != SENTINEL
      _body[:order_dir] = order_dir if order_dir != SENTINEL
      _body[:filters] = filters if filters != SENTINEL
      organization_user_data_source_query_input = _body
      query_user_data_sources_with_http_info_impl(organization_user_data_source_query_input, extra)
    end

    # User Data Sources
    # @param organization_user_data_source_query_input [OrganizationUserDataSourceQueryInput] 
    # @param [Hash] opts the optional parameters
    # @return [OrganizationUserDataSourceResponse]
    private def query_user_data_sources_impl(organization_user_data_source_query_input, opts = {})
      data, _status_code, _headers = query_user_data_sources_with_http_info(organization_user_data_source_query_input, opts)
      data
    end

    # User Data Sources
    # @param organization_user_data_source_query_input [OrganizationUserDataSourceQueryInput] 
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is OrganizationUserDataSourceResponse, status code, headers and response
    private def query_user_data_sources_with_http_info_impl(organization_user_data_source_query_input, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: DataSourcesApi.query_user_data_sources ...'
      end
      # verify the required parameter 'organization_user_data_source_query_input' is set
      if @api_client.config.client_side_validation && organization_user_data_source_query_input.nil?
        fail ArgumentError, "Missing the required parameter 'organization_user_data_source_query_input' when calling DataSourcesApi.query_user_data_sources"
      end
      # resource path
      local_var_path = '/user_data_sources'

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(organization_user_data_source_query_input)

      # return_type
      return_type = opts[:debug_return_type] || 'OrganizationUserDataSourceResponse'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken', 'apiKey', 'customerId']

      new_options = opts.merge(
        :operation => :"DataSourcesApi.query_user_data_sources",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: DataSourcesApi#query_user_data_sources\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end


    # Revoke Access Token
    #
    # @param data_source_id [Integer] 
    # @param body [RevokeAccessTokenInput] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def revoke_access_token(data_source_id:, extra: {})
      _body = {}
      _body[:data_source_id] = data_source_id if data_source_id != SENTINEL
      revoke_access_token_input = _body
      data, _status_code, _headers = revoke_access_token_with_http_info_impl(revoke_access_token_input, extra)
      data
    end

    # Revoke Access Token
    #
    # @param data_source_id [Integer] 
    # @param body [RevokeAccessTokenInput] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def revoke_access_token_with_http_info(data_source_id:, extra: {})
      _body = {}
      _body[:data_source_id] = data_source_id if data_source_id != SENTINEL
      revoke_access_token_input = _body
      revoke_access_token_with_http_info_impl(revoke_access_token_input, extra)
    end

    # Revoke Access Token
    # @param revoke_access_token_input [RevokeAccessTokenInput] 
    # @param [Hash] opts the optional parameters
    # @return [GenericSuccessResponse]
    private def revoke_access_token_impl(revoke_access_token_input, opts = {})
      data, _status_code, _headers = revoke_access_token_with_http_info(revoke_access_token_input, opts)
      data
    end

    # Revoke Access Token
    # @param revoke_access_token_input [RevokeAccessTokenInput] 
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is GenericSuccessResponse, status code, headers and response
    private def revoke_access_token_with_http_info_impl(revoke_access_token_input, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: DataSourcesApi.revoke_access_token ...'
      end
      # verify the required parameter 'revoke_access_token_input' is set
      if @api_client.config.client_side_validation && revoke_access_token_input.nil?
        fail ArgumentError, "Missing the required parameter 'revoke_access_token_input' when calling DataSourcesApi.revoke_access_token"
      end
      # resource path
      local_var_path = '/revoke_access_token'

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
      post_body = opts[:debug_body] || @api_client.object_to_http_body(revoke_access_token_input)

      # return_type
      return_type = opts[:debug_return_type] || 'GenericSuccessResponse'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken', 'apiKey', 'customerId']

      new_options = opts.merge(
        :operation => :"DataSourcesApi.revoke_access_token",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:POST, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: DataSourcesApi#revoke_access_token\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end
  end

  # top-level client access to avoid having the user to insantiate their own API instances
  DataSources = DataSourcesApi::new
end
