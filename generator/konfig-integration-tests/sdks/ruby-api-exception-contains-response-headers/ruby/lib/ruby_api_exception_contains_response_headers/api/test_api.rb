=begin
#ruby-api-exception-contains-response-headers API

#A simple API based for testing ruby-api-exception-contains-response-headers.

The version of the OpenAPI document: 1.0.0
Contact: support@example.com
=end

require 'cgi'

module RubyApiExceptionContainsResponseHeaders
  class TestApi
    attr_accessor :api_client

    def initialize(api_client = ApiClient.default)
      @api_client = api_client
    end

    # Fetches a JSON value based on input parameter
    #
    # Provide an input parameter to receive a JSON value with properties.
    #
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def fetch(extra: {})
      fetch_with_http_info_impl(extra)
      nil
    end

    # Fetches a JSON value based on input parameter
    #
    # Provide an input parameter to receive a JSON value with properties.
    #
    # @param [Hash] extra additional parameters to pass along through :header_params, :query_params, or parameter name
    def fetch_with_http_info(extra: {})
      fetch_with_http_info_impl(extra)
    end

    # Fetches a JSON value based on input parameter
    # Provide an input parameter to receive a JSON value with properties.
    # @param [Hash] opts the optional parameters
    # @return [nil]
    private def fetch_impl(opts = {})
      fetch_with_http_info(opts)
      nil
    end

    # Fetches a JSON value based on input parameter
    # Provide an input parameter to receive a JSON value with properties.
    # @param [Hash] opts the optional parameters
    # @return [APIResponse] data is nil, status code, headers and response
    private def fetch_with_http_info_impl(opts = {})
      if @api_client.config.debugging
        @api_client.config.logger.debug 'Calling API: TestApi.fetch ...'
      end
      # resource path
      local_var_path = '/simple-endpoint'

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
      return_type = opts[:debug_return_type]

      # auth_names
      auth_names = opts[:debug_auth_names] || ['ApiKey']

      new_options = opts.merge(
        :operation => :"TestApi.fetch",
        :header_params => header_params,
        :query_params => query_params,
        :form_params => form_params,
        :body => post_body,
        :auth_names => auth_names,
        :return_type => return_type
      )

      data, status_code, headers, response = @api_client.call_api(:GET, local_var_path, new_options)
      if @api_client.config.debugging
        @api_client.config.logger.debug "API called: TestApi#fetch\nData: #{data.inspect}\nStatus code: #{status_code}\nHeaders: #{headers}"
      end
      APIResponse::new(data, status_code, headers, response)
    end
  end

  # top-level client access to avoid having the user to insantiate their own API instances
  Test = TestApi::new
end
