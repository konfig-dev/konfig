=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'cgi'

module SnapTrade
  class ErrorLogsApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end

    # Retrieve error logs on behalf of your SnapTrade users
    #
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def list_user_errors(user_id:, user_secret:, extra: {})
      data, _status_code, _headers = list_user_errors_with_http_info_impl(user_id, user_secret, extra)
      data
    end

    # Retrieve error logs on behalf of your SnapTrade users
    #
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def list_user_errors_with_http_info(user_id:, user_secret:, extra: {})
      list_user_errors_with_http_info_impl(user_id, user_secret, extra)
    end

    # Retrieve error logs on behalf of your SnapTrade users
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] opts the optional parameters
    # @return [Array<UserErrorLog>]
    private def list_user_errors_impl(user_id, user_secret, opts = {})
      data, _status_code, _headers = list_user_errors_with_http_info(user_id, user_secret, opts)
      data
    end

    # Retrieve error logs on behalf of your SnapTrade users
    # @param user_id [String] 
    # @param user_secret [String] 
    # @param [Hash] opts the optional parameters
    # @return [Array<(Array<UserErrorLog>, Integer, Hash)>] Array<UserErrorLog> data, response status code and response headers
    private def list_user_errors_with_http_info_impl(user_id, user_secret, opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: ErrorLogsApi.list_user_errors ...'
      end
      # verify the required parameter 'user_id' is set
      if @api_client.config.client_side_validation && user_id.nil?
        fail ArgumentError, "Missing the required parameter 'user_id' when calling ErrorLogsApi.list_user_errors"
      end
      # verify the required parameter 'user_secret' is set
      if @api_client.config.client_side_validation && user_secret.nil?
        fail ArgumentError, "Missing the required parameter 'user_secret' when calling ErrorLogsApi.list_user_errors"
      end
      # resource path
      local_var_path = '/snapTrade/listUserErrors'

      # query parameters
      query_params = opts[:query_params] || {}
      query_params[:'userId'] = user_id
      query_params[:'userSecret'] = user_secret

      # header parameters
      header_params = opts[:header_params] || {}
      # HTTP header 'Accept' (if needed)
      header_params['Accept'] = @api_client.select_header_accept(['application/json'])

      # form parameters
      form_params = opts[:form_params] || {}

      # http body (model)
      post_body = opts[:debug_body]

      # return_type
      return_type = opts[:debug_return_type] || 'Array<UserErrorLog>'

      # auth_names
      auth_names = opts[:debug_auth_names] || ['PartnerClientId', 'PartnerSignature', 'PartnerTimestamp']

      new_options = opts.merge(
        :operation => :"ErrorLogsApi.list_user_errors",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: ErrorLogsApi#list_user_errors\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end
  end

  # top-level client access to avoid having the user to insantiate their own API instances
  ErrorLogs = ErrorLogsApi::new
end
