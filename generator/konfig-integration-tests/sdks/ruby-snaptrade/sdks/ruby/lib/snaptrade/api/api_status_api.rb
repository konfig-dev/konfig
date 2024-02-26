=begin
#SnapTrade

#Connect brokerage accounts to your app for live positions and trading

The version of the OpenAPI document: 1.0.0
Contact: api@snaptrade.com

=end

require 'cgi'

module SnapTrade
  class APIStatusApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end

    # Get API Status
    #
    # Check whether the API is operational and verify timestamps.
    #
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def check(extra: {})
      data, _status_code, _headers = check_with_http_info_impl(extra)
      data
    end

    # Get API Status
    #
    # Check whether the API is operational and verify timestamps.
    #
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def check_with_http_info(extra: {})
      check_with_http_info_impl(extra)
    end

    # Get API Status
    # Check whether the API is operational and verify timestamps.
    # @param [Hash] opts the optional parameters
    # @return [Status]
    private def check_impl(opts = {})
      data, _status_code, _headers = check_with_http_info(opts)
      data
    end

    # Get API Status
    # Check whether the API is operational and verify timestamps.
    # @param [Hash] opts the optional parameters
    # @return [Array<(Status, Integer, Hash)>] Status data, response status code and response headers
    private def check_with_http_info_impl(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: APIStatusApi.check ...'
      end
      # resource path
      local_var_path = '/'

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
      return_type = opts[:debug_return_type] || 'Status'

      # auth_names
      auth_names = opts[:debug_auth_names] || []

      new_options = opts.merge(
        :operation => :"APIStatusApi.check",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: APIStatusApi#check\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      return data, status_code, headers, response
    end
  end

  # top-level client access to avoid having the user to insantiate their own API instances
  APIStatus = APIStatusApi::new
end
