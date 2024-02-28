=begin
#Carbon

#Connect external data to LLMs, no matter the source.

The version of the OpenAPI document: 1.0.0
=end

require 'cgi'

module Carbon
  class AuthApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end

    # Get Access Token
    #
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_access_token(extra: {})
      data, _status_code, _headers = get_access_token_with_http_info_impl(extra)
      data
    end

    # Get Access Token
    #
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_access_token_with_http_info(extra: {})
      get_access_token_with_http_info_impl(extra)
    end

    # Get Access Token
    # @param [Hash] opts the optional parameters
    # @return [TokenResponse]
    private def get_access_token_impl(opts = {})
      data, _status_code, _headers = get_access_token_with_http_info(opts)
      data
    end

    # Get Access Token
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is TokenResponse, status code, headers and response
    private def get_access_token_with_http_info_impl(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AuthApi.get_access_token ...'
      end
      # resource path
      local_var_path = '/auth/v1/access_token'

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
      return_type = opts[:debug_return_type] || 'TokenResponse'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken', 'apiKey', 'customerId']

      new_options = opts.merge(
        :operation => :"AuthApi.get_access_token",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AuthApi#get_access_token\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end


    # Get White Labeling
    #
    # Returns whether or not the organization is white labeled and which integrations are white labeled
    # 
    # :param current_user: the current user
    # :param db: the database session
    # :return: a WhiteLabelingResponse
    #
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_white_labeling(extra: {})
      data, _status_code, _headers = get_white_labeling_with_http_info_impl(extra)
      data
    end

    # Get White Labeling
    #
    # Returns whether or not the organization is white labeled and which integrations are white labeled
    # 
    # :param current_user: the current user
    # :param db: the database session
    # :return: a WhiteLabelingResponse
    #
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def get_white_labeling_with_http_info(extra: {})
      get_white_labeling_with_http_info_impl(extra)
    end

    # Get White Labeling
    # Returns whether or not the organization is white labeled and which integrations are white labeled  :param current_user: the current user :param db: the database session :return: a WhiteLabelingResponse
    # @param [Hash] opts the optional parameters
    # @return [WhiteLabelingResponse]
    private def get_white_labeling_impl(opts = {})
      data, _status_code, _headers = get_white_labeling_with_http_info(opts)
      data
    end

    # Get White Labeling
    # Returns whether or not the organization is white labeled and which integrations are white labeled  :param current_user: the current user :param db: the database session :return: a WhiteLabelingResponse
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is WhiteLabelingResponse, status code, headers and response
    private def get_white_labeling_with_http_info_impl(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: AuthApi.get_white_labeling ...'
      end
      # resource path
      local_var_path = '/auth/v1/white_labeling'

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
      return_type = opts[:debug_return_type] || 'WhiteLabelingResponse'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['accessToken']

      new_options = opts.merge(
        :operation => :"AuthApi.get_white_labeling",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: AuthApi#get_white_labeling\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end
  end

  # top-level client access to avoid having the user to insantiate their own API instances
  Auth = AuthApi::new
end
